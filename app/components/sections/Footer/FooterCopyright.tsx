"use client"
import { FadeUp } from "@/app/components/motion";
import { site } from "@/app/config/site";

export function FooterCopyright() {
  return (
    <FadeUp className="space-y-1 text-text-muted">
      <p>{site.copyright}</p>
    </FadeUp>
  );
}
