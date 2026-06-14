import { pricingNotes, pricingTiers, retainers } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function PricingSection() {
  return (
    <section id="pricing" className="px-4 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Premium work, but priced realistically for the market you actually sell into."
          description="The best you can get"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {pricingTiers.map((tier, index) => {
            const layout =
              index === 0
                ? "lg:col-span-12"
                : index === 1
                  ? "lg:col-span-6"
                  : "lg:col-span-6";

            return (
              <div key={tier.name} className={layout}>
                <Reveal delay={index * 0.06}>
                  <article className="pricing-card h-full">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-2xl">
                        <span className="rounded-full border border-[color:var(--color-border)] bg-[var(--color-panel)] px-3 py-2 text-xs uppercase tracking-[0.28em] text-[var(--color-subtle)]">
                          Tier {index + 1} - {tier.name}
                        </span>

                        <h3 className="mt-5 font-display text-3xl tracking-[-0.04em]">
                          {tier.label}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                          {tier.fits}
                        </p>
                      </div>

                      <div className="lg:text-right">
                        <p className="font-display text-3xl tracking-[-0.04em]">
                          {tier.range}
                        </p>

                        <p className="mt-2 text-sm text-[var(--color-muted)]">
                          {tier.usd}
                        </p>

                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[var(--color-subtle)]">
                          {tier.timeline}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-3 border-t border-[color:var(--color-border)] pt-6">
                      {tier.bullets.map((bullet) => (
                        <p
                          key={bullet}
                          className="flex gap-3 text-sm leading-7 text-[var(--color-muted)]"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                          <span>{bullet}</span>
                        </p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              </div>
            );
          })}

          {retainers.map((retainer, index) => {
            const layout =
              index === 0 ? "lg:col-span-12" : "lg:col-span-6";

            return (
              <div key={retainer.title} className={layout}>
                <Reveal delay={(pricingTiers.length + index) * 0.06}>
                  <article className="pricing-card h-full">
                    <span className="rounded-full border border-[color:var(--color-border)] bg-[var(--color-panel)] px-3 py-2 text-xs uppercase tracking-[0.28em] text-[var(--color-subtle)]">
                      Retainer
                    </span>

                    <h3 className="mt-5 font-display text-2xl tracking-[-0.04em]">
                      {retainer.title}
                    </h3>

                    <p className="mt-2 text-xl text-[var(--color-foreground)]">
                      {retainer.range}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {retainer.copy}
                    </p>
                  </article>
                </Reveal>
              </div>
            );
          })}

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.3}>
              <article className="pricing-card h-full">
                <p className="eyebrow">Pricing notes</p>

                <div className="mt-5 grid gap-3">
                  {pricingNotes.map((note) => (
                    <p
                      key={note}
                      className="flex gap-3 text-sm leading-7 text-[var(--color-muted)]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{note}</span>
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}