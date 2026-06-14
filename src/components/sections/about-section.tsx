import Image from "next/image";
import { aboutPillars, softSkills } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="About"
              title="I combine engineering, design, and storytelling to make products feel premium, useful, and scalable."
              description="My edge is not just shipping code. It is translating business pressure into systems, interfaces, and experiences that feel far more expensive than they are chaotic."
            />
            <Reveal delay={0.12}>
              <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-[color:var(--color-border)] bg-[var(--color-panel)] p-3">
                <div className="overflow-hidden rounded-[1.45rem]">
                  <Image
                    src="/profile-ntsinzi.png"
                    alt="Ntsinzi Francois"
                    width={1338}
                    height={1337}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutPillars.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06}>
                <article className="glass-panel rounded-[1.5rem] p-6">
                  <p className="eyebrow">0{index + 1}</p>
                  <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {card.copy}
                  </p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.18}>
              <article className="glass-panel rounded-[1.5rem] p-6 sm:col-span-2">
                <p className="eyebrow">Soft Skills</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
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
