/**
 * Thin wrapper over the Google Analytics tag already installed in app/layout.tsx.
 *
 * Rules this module enforces:
 *  - No personal data ever leaves the browser. Callers pass only coarse labels
 *    (which form, which page) — never names, phone numbers, emails, addresses,
 *    or message text.
 *  - If the tag is absent (blocked, offline, or not configured) every call is a
 *    silent no-op, so analytics can never break a lead submission.
 */

type GtagParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: GtagParams) => void;
  }
}

function track(action: string, params: GtagParams = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  try {
    window.gtag("event", action, params);
  } catch {
    // Analytics must never surface an error to the user.
  }
}

/** A visitor tapped a click-to-call link. */
export function trackPhoneClick(location: string): void {
  track("phone_click", { link_location: location });
}

/** A visitor began filling in a lead form. Fires once per form instance. */
export function trackFormStart(formName: string): void {
  track("form_start", { form_name: formName });
}

/**
 * A lead was accepted by the backend.
 *
 * Call this ONLY after the submit request has succeeded — never optimistically,
 * or the conversion count will overstate real leads.
 */
export function trackLeadSubmitted(formName: string): void {
  track("generate_lead", { form_name: formName });
}
