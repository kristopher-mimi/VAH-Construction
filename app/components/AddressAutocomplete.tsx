"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Suggestion {
  place_id: number;
  display_name: string;
  address: {
    house_number?: string;
    road?: string;
    city?: string;
    town?: string;
    village?: string;
    state?: string;
    postcode?: string;
    country?: string;
  };
}

interface AddressAutocompleteProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  value?: string;
  onChange?: (value: string) => void;
}

function formatAddress(s: Suggestion): string {
  const a = s.address;
  const parts: string[] = [];
  if (a.house_number && a.road) parts.push(`${a.house_number} ${a.road}`);
  else if (a.road) parts.push(a.road);
  const city = a.city || a.town || a.village;
  if (city) parts.push(city);
  if (a.state) parts.push(a.state);
  if (a.postcode) parts.push(a.postcode);
  return parts.join(", ") || s.display_name;
}

export default function AddressAutocomplete({
  label,
  placeholder = "123 Main St, St. Catharines, ON",
  required = false,
  inputClassName = "",
  onChange,
}: AddressAutocompleteProps) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(-1);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchSuggestions = useCallback(async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=6&countrycodes=ca`,
        { headers: { "Accept-Language": "en" } }
      );
      const data: Suggestion[] = await res.json();
      setSuggestions(data);
      setOpen(data.length > 0);
    } catch {
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    onChange?.(v);
    setActive(-1);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(v), 350);
  };

  const handleSelect = (s: Suggestion) => {
    const formatted = formatAddress(s);
    setValue(formatted);
    onChange?.(formatted);
    setSuggestions([]);
    setOpen(false);
    setActive(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && active >= 0) {
      e.preventDefault();
      handleSelect(suggestions[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const baseInput =
    "bg-neutral-900 border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200 w-full";

  return (
    <div className="flex flex-col gap-1.5" ref={containerRef}>
      <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
        {label} {required && "*"}
      </label>

      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => suggestions.length > 0 && setOpen(true)}
          required={required}
          placeholder={placeholder}
          autoComplete="off"
          className={`${baseInput} ${inputClassName} pr-9`}
        />

        {/* Loading / clear icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {loading ? (
            <svg
              className="w-4 h-4 text-amber-500 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-neutral-600">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          )}
        </div>

        {/* Dropdown */}
        {open && suggestions.length > 0 && (
          <ul className="absolute z-50 top-full left-0 right-0 mt-1 bg-neutral-900 border border-neutral-700 rounded-sm shadow-2xl overflow-hidden">
            {suggestions.map((s, i) => (
              <li
                key={s.place_id}
                onMouseDown={() => handleSelect(s)}
                onMouseEnter={() => setActive(i)}
                className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors text-sm border-b border-neutral-800/60 last:border-0 ${
                  i === active
                    ? "bg-amber-500/10 text-white"
                    : "text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="leading-snug">{formatAddress(s)}</span>
              </li>
            ))}
            <li className="px-4 py-2 flex items-center gap-2">
              <span className="text-[10px] text-neutral-600">Powered by OpenStreetMap</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
