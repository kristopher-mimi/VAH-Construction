"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL: Message = {
  role: "assistant",
  content:
    "Hi, I'm VAH Assistant. I can help with questions about metal roofing, pricing, and booking a free quote. What can I help you with?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState(true);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setNotif(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated.map((m) => ({ role: m.role, content: m.content })),
          leadCaptured,
        }),
      });
      const data = await res.json();
      if (data.leadCaptured) setLeadCaptured(true);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong on my end. Please call us at (437) 247-3371.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-24 right-5 sm:right-8 z-50 flex flex-col rounded-xl overflow-hidden shadow-2xl"
            style={{
              width: "min(400px, calc(100vw - 40px))",
              border: "1px solid rgba(245,158,11,0.2)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,158,11,0.1)",
            }}
          >
            {/* Header */}
            <div className="bg-[#111111] px-4 py-3.5 flex items-center justify-between border-b border-neutral-800/80 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center font-black text-black text-sm leading-none flex-shrink-0">
                  V
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-none mb-1">
                    VAH Assistant
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    <span className="text-neutral-500 text-[11px]">
                      Online · responds within minutes
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-sm text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              className="overflow-y-auto bg-[#0d0d0d] p-4 space-y-3 flex-1"
              style={{ maxHeight: "400px", minHeight: "260px" }}
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "assistant" && (
                    <div className="w-5 h-5 bg-amber-500 rounded-sm flex items-center justify-center font-black text-black text-[10px] flex-shrink-0 mt-0.5 mr-2">
                      V
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-amber-500 text-black font-medium rounded-br-sm"
                        : "bg-[#1c1c1c] text-neutral-200 border border-neutral-800/80 rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 bg-amber-500 rounded-sm flex items-center justify-center font-black text-black text-[10px] flex-shrink-0">
                    V
                  </div>
                  <div className="bg-[#1c1c1c] border border-neutral-800/80 rounded-lg rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce"
                        style={{ animationDelay: `${i * 0.18}s` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="bg-[#111111] border-t border-neutral-800/80 p-3 flex gap-2 flex-shrink-0">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Ask about roofing, pricing, quotes..."
                className="flex-1 bg-neutral-900 border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-3 py-2.5 text-sm outline-none transition-colors duration-200"
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading}
                className="bg-amber-500 hover:bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed text-black px-3 rounded-sm transition-colors duration-200 flex-shrink-0"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>

            {/* Footer */}
            <div className="bg-[#0d0d0d] border-t border-neutral-800/40 px-4 py-2 flex items-center justify-between">
              <span className="text-neutral-700 text-[10px]">
                Powered by VAH Construction
              </span>
              <a
                href="tel:+14372473371"
                className="text-amber-500/70 hover:text-amber-400 text-[10px] font-semibold transition-colors"
              >
                (437) 247-3371
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 sm:right-8 z-50 w-14 h-14 bg-amber-500 hover:bg-amber-400 rounded-full flex items-center justify-center transition-colors duration-200"
        style={{ boxShadow: "0 0 0 1px rgba(245,158,11,0.3), 0 8px 32px rgba(245,158,11,0.25)" }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        {/* Notification dot */}
        <AnimatePresence>
          {notif && !open && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-neutral-950"
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
