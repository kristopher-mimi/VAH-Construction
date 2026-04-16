"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("@/app/components/ChatWidget"), { ssr: false });

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
}
