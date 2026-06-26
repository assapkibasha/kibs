"use client";

import Image from "next/image";
import { heroMetrics, heroPanels } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/symbols";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section id="top" className="px-4 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="hero-shell grid gap-8 overflow-hidden rounded-[2rem] px-6 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-12">
          <div className="relative z-10 flex flex-col justify-between">
            <div>
              <Reveal immediate>
                <p className="eyebrow">Developer Portfolio</p>
              </Reveal>

              <Reveal delay={0.08} immediate>
                <p className="mt-8 max-w-xl text-sm uppercase tracking-[0.32em] text-[var(--color-subtle)]">
                  Full Stack Developer, Flutter Developer, Creative Frontend
                  Engineer
                </p>
              </Reveal>

              <Reveal delay={0.16} immediate>
                <h1 className="mt-6 font-display text-[3.3rem] leading-[0.92] tracking-[-0.06em] sm:text-[4.8rem] lg:text-[6.8rem]">
                  Ntsinzi
                  <span className="block text-[var(--color-muted)]">
                    Francois
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.24} immediate>
                <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                  I build premium digital products, business systems, and
                  immersive web experiences for brands, teams, and businesses
                  that need more than a generic template.
                </p>
              </Reveal>

              <Reveal delay={0.34} immediate>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a href="#work" className="button-primary">
                    View Projects <ArrowUpRight />
                  </a>

                  <a href="#pricing" className="button-secondary">
                    See Pricing
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.44} immediate>
              <div className="mt-12 grid gap-3 border-t border-[color:var(--color-border)] pt-6 sm:grid-cols-3">
                {heroMetrics.map((item) => (
                  <p key={item} className="text-sm text-[var(--color-muted)]">
                    {item}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative z-10 grid gap-4 lg:grid-rows-[1fr_auto]">
            <Reveal delay={0.18} immediate>
              <div className="media-card relative min-h-[520px] overflow-hidden rounded-[1.8rem] border border-[color:var(--color-border)]">
                <Image
                  src="/media/francois-3d.png"
                  alt="Ntsinzi Francois 3D portrait"
                  fill
                  priority
                  className="object-cover object-center opacity-95"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_10%,rgba(0,0,0,0.58)_100%)]" />

                <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-full border border-[color:var(--color-border)] bg-[var(--color-panel)] px-4 py-2 text-xs text-[var(--color-muted)] backdrop-blur-md">
                  <span>Available for premium product work</span>
                  <span>Kigali, Rwanda</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-[1.4rem] border border-[color:var(--color-border)] bg-[var(--color-panel)] px-5 py-4 backdrop-blur-md">
                  <p className="eyebrow">Signature Build Style</p>

                  <p className="mt-3 max-w-md text-sm leading-7 text-[var(--color-muted)]">
                    Dark luxury visuals, thoughtful systems, clean motion, and
                    product decisions that still make sense when the brief gets
                    practical.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-3">
              {heroPanels.map((panel, index) => (
                <Reveal key={panel.title} delay={0.3 + index * 0.08} immediate>
                  <article className="glass-panel rounded-[1.4rem] p-4">
                    <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-subtle)]">
                      {panel.title}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {panel.value}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}