import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl">
      <Reveal>
        <p className="eyebrow">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-[2.2rem] leading-[1] tracking-[-0.05em] sm:text-[3.3rem] lg:text-[4.2rem]">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
          {description}
        </p>
      </Reveal>
    </div>
  );
}
