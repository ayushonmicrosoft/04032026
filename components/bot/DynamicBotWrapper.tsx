'use client';

import dynamic from "next/dynamic";

const AdvancedBot = dynamic(() =>
  import("@/components/bot/AdvancedBot").then((m) => ({
    default: m.AdvancedBot,
  })), { ssr: false });

const AIAdvisor = dynamic(() =>
  import("@/components/ai/Advisor").then((m) => ({
    default: m.AIAdvisor,
  })), { ssr: false });

export default function DynamicBotWrapper() {
  return (
    <>
      <AdvancedBot />
      <AIAdvisor />
    </>
  );
}
