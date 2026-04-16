"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("@/app/components/ChatWidget"), { ssr: false });
const MotionProvider = dynamic(() => import("@/app/components/MotionProvider"), { ssr: false });

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      {children}
      <ChatWidget />
    </MotionProvider>
  );
}
