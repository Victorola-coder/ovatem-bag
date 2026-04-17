import Link from "next/link";
import { Award, GraduationCap, Sparkles } from "lucide-react";
import { Button, Surface } from "@/app/components/ui";
import { TRAINING_PROGRAM } from "@/app/content/brand";

export function TrainedBy() {
  return (
    <section id="trained" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">{TRAINING_PROGRAM.title}</p>
            <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">Hands-on training.</h2>
            <p className="text-[15px] leading-relaxed text-white/60 md:text-base">{TRAINING_PROGRAM.subtitle}</p>
            <ul className="space-y-3 pt-2">
              {TRAINING_PROGRAM.highlights.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-white/65">
                  <span className="mt-2 h-px w-6 shrink-0 bg-white/20" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/40">{TRAINING_PROGRAM.duration}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/#contact">
                <Button variant="primary">Ask about training</Button>
              </a>
              <Link href="/training-policy">
                <Button variant="secondary">Training policy</Button>
              </Link>
            </div>
          </div>

          <Surface className="p-6 md:p-8">
            <p className="text-sm font-medium text-white/90">Certificate</p>
            <p className="mt-2 text-xs leading-relaxed text-white/45">
              Add <code className="text-white/55">certificate-preview.jpg</code> when ready.
            </p>
            <div className="mt-6 flex aspect-[3/2] items-center justify-center rounded-md border border-dashed border-white/[0.12] bg-white/[0.02]">
              <GraduationCap className="h-9 w-9 text-white/25" strokeWidth={1.25} aria-hidden />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[10px] text-white/40">
              <div className="rounded-md border border-white/[0.08] py-3">
                <Sparkles className="mx-auto h-4 w-4 text-white/35" aria-hidden />
                <p className="mt-2">Modules</p>
              </div>
              <div className="rounded-md border border-white/[0.08] py-3">
                <Award className="mx-auto h-4 w-4 text-white/35" aria-hidden />
                <p className="mt-2">Review</p>
              </div>
              <div className="rounded-md border border-white/[0.08] py-3">
                <GraduationCap className="mx-auto h-4 w-4 text-white/35" aria-hidden />
                <p className="mt-2">Cert</p>
              </div>
            </div>
          </Surface>
        </div>
      </div>
    </section>
  );
}
