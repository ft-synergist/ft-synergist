"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(
  () => import("@/components/ChatWidget").then((mod) => mod.ChatWidget),
  { ssr: false }
);

const ConsentBanner = dynamic(
  () => import("@/components/cmp/ConsentBanner").then((mod) => mod.ConsentBanner),
  { ssr: false }
);

const PreferenceCenter = dynamic(
  () => import("@/components/cmp/PreferenceCenter").then((mod) => mod.PreferenceCenter),
  { ssr: false }
);

const FloatingConsentButton = dynamic(
  () => import("@/components/cmp/FloatingConsentButton").then((mod) => mod.FloatingConsentButton),
  { ssr: false }
);

export function SiteWidgets() {
  return (
    <>
      <ChatWidget />
      <ConsentBanner />
      <PreferenceCenter />
      <FloatingConsentButton />
    </>
  );
}
