import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContent, PageShell } from "@/app/components/global";
import { getPostBySlug, JOURNAL_POSTS } from "@/app/content/journal-posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return JOURNAL_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article | Ovatem" };
  return {
    title: `${post.title} | Ovatem Journal`,
    description: post.excerpt,
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageShell eyebrow="Journal" title={post.title} description={post.excerpt} borderBottom={false} />

      <PageContent narrow className="border-b border-white/[0.06] !pt-6 pb-20 md:!pt-8">
        <p className="mb-10 text-sm text-white/45">
          <Link href="/blog" className="text-brand-aquaHaze hover:text-white">
            ← All articles
          </Link>
          <span className="mx-2 text-white/25">·</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-NG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="mx-2 text-white/25">·</span>
          {post.readTime}
        </p>

        <article className="space-y-10">
          {post.sections.map((section, i) => (
            <section key={i} className="space-y-4">
              {section.heading ? (
                <h2 className="text-xl font-medium text-white/95">{section.heading}</h2>
              ) : null}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-[15px] leading-relaxed text-white/70 md:text-base">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>

        <div className="mt-14 border-t border-white/[0.06] pt-10">
          <p className="text-sm text-white/50">Questions about a custom order or training?</p>
          <Link
            href="/#contact"
            className="mt-3 inline-block text-sm font-medium text-brand-aquaHaze hover:text-white"
          >
            Contact Ovatem →
          </Link>
        </div>
      </PageContent>
    </>
  );
}
