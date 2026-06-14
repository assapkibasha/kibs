import { ArrowUpRight } from "@/components/ui/symbols";
import { Reveal } from "@/components/ui/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-16 pt-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel overflow-hidden rounded-[2rem] px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Reveal>
                <p className="eyebrow">Contact</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 max-w-4xl font-display text-[2.6rem] leading-[0.96] tracking-[-0.05em] sm:text-[4rem] lg:text-[5rem]">
                  Let&apos;s build something that feels expensive, intentional,
                  and impossible to ignore.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                  Best fit for premium websites, productized business systems,
                  design-sensitive frontend work, and scalable platforms.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="flex flex-col gap-5 lg:items-end">
                <a
                  href="mailto:ntsinzifrancois@gmail.com"
                  className="text-lg text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                >
                  ntsinzifrancois@gmail.com
                </a>
                <a
                  href="mailto:ntsinzifrancois@gmail.com?subject=Start%20a%20Project"
                  className="button-primary"
                >
                  Start a Project <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
