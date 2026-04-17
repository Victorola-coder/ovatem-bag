import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/app/components/global";
import { Surface } from "@/app/components/ui";
import { JOURNAL_POSTS } from "@/app/content/journal-posts";

export const metadata: Metadata = {
  title: "Journal | Ovatem",
  description:
    "Guides on handmade bags in Nigeria, leather care, training, and running a bag brand — from Ovatem.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageShell
        eyebrow="Journal"
        title="Ideas &amp; resources"
        description="Practical notes on quality, care, and craft — written to help you choose better, maintain longer, and understand how bags are made."
      />

      <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {JOURNAL_POSTS.map((post) => (
            <Surface key={post.slug} className="flex flex-col p-6 md:p-7">
              <time className="text-[11px] uppercase tracking-wider text-white/40" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <h2 className="mt-3 text-lg font-medium leading-snug text-white/95">
                <Link href={`/blog/${post.slug}`} className="hover:text-white">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                <span className="text-xs text-white/40">{post.readTime}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-brand-aquaHaze hover:text-white/90"
                >
                  Read
                </Link>
              </div>
            </Surface>
          ))}
        </div>

        <Surface className="mt-12 p-6 md:p-8">
          <p className="text-sm leading-relaxed text-white/65">
            <span className="font-medium text-white/90">SEO:</span> align each article with your keyword themes and use
            descriptive alt text on images. See the{" "}
            <Link href="/brand" className="text-brand-aquaHaze underline underline-offset-4 hover:text-white">
              brand &amp; SEO reference
            </Link>{" "}
            for tone and keywords.
          </p>
        </Surface>
      </div>
    </>
  );
}
