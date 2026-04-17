import type { Metadata } from "next";
import Link from "next/link";
import { Surface } from "@/app/components/ui";
import { BLOG_TOPIC_IDEAS } from "@/app/content/brand";

export const metadata: Metadata = {
  title: "Journal | Ovatem",
  description:
    "Stories on handmade bags in Nigeria, leather care, training, and behind-the-scenes craft — coming as articles go live.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">Journal</p>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">Ideas &amp; resources</h1>
        <p className="text-sm leading-relaxed text-white/75 md:text-base">
          These topics are lined up to build organic traffic and position Ovatem as an expert in bags, souvenirs, and
          training. Publish posts when you are ready — each title can become a full article.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {BLOG_TOPIC_IDEAS.map((title) => (
          <Surface key={title} className="p-6">
            <p className="text-sm font-medium text-white/90">{title}</p>
            <p className="mt-2 text-xs text-white/45">Draft — assign a slug and publish when written.</p>
          </Surface>
        ))}
      </div>

      <div className="mt-10 rounded-[24px] border border-dashed border-white/20 bg-white/[0.03] p-6 text-sm text-white/70">
        <p>
          <span className="font-medium text-white">SEO tip:</span> align each post with your keyword themes (handmade bags
          in Nigeria, bag making training, souvenir branding) and use descriptive alt text on every image — see{" "}
          <Link href="/brand" className="text-white underline underline-offset-4 hover:text-white/90">
            brand &amp; SEO reference
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
