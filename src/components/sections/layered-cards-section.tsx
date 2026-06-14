"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processLayers } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

gsap.registerPlugin(ScrollTrigger);

export function LayeredCardsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        cards.forEach((card, index) => {
          gsap.set(card, {
            y: index * 68,
            rotate: index % 2 === 0 ? -7 + index : 7 - index,
            scale: 1 - index * 0.045,
          });
        });

        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=980",
            scrub: 1,
            pin: true,
          },
        });

        cards.forEach((card, index) => {
          timeline.to(
            card,
            {
              y: index * 10,
              rotate: index % 2 === 0 ? -2 : 2,
              scale: 1 - index * 0.02,
            },
            index * 0.24,
          );
        });
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="The work moves through three layers: business clarity, premium experience, and systems that hold up."
          description="This section keeps the cinematic stacked-card feel from the reference, but repurposes it to explain how you actually work."
        />

        <div className="relative mt-14 h-[30rem] sm:h-[34rem] md:h-[38rem]">
          {processLayers.map((card, index) => (
            <div
              key={card.title}
              ref={(node) => {
                cardsRef.current[index] = node;
              }}
              className="absolute inset-x-0 top-0 mx-auto flex h-[22rem] w-full max-w-5xl flex-col justify-between overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] p-6 shadow-[var(--color-shadow)] backdrop-blur-xl sm:h-[24rem] sm:p-8"
              style={{
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))",
                backgroundColor: card.background,
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <p className="eyebrow">{card.label}</p>
                  <h3 className="mt-4 max-w-xl font-display text-3xl tracking-[-0.04em] sm:text-5xl">
                    {card.title}
                  </h3>
                </div>
                <span className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[var(--color-subtle)]">
                  0{index + 1}
                </span>
              </div>

              <div className="relative grid gap-5 md:grid-cols-[1.4fr_0.8fr] md:items-end">
                <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {card.copy}
                </p>
                <div className="rounded-[1.4rem] border border-[color:var(--color-border)] bg-[var(--color-panel)] p-4">
                  <div className="mb-4 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-subtle)]">
                    <span>{card.metric}</span>
                    <span>{card.progress}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--color-track)]">
                    <div
                      className="h-full rounded-full bg-[var(--color-accent)]"
                      style={{ width: card.progress }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
