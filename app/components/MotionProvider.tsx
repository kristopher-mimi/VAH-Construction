"use client";

import { LazyMotion, MotionConfig } from "framer-motion";

const loadFeatures = () => import("@/lib/framer-features").then((m) => m.default);

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    // reducedMotion="user" makes Framer Motion honour the OS setting, which the
    // CSS media query in globals.css cannot reach (JS-driven animations).
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadFeatures}>{children}</LazyMotion>
    </MotionConfig>
  );
}
