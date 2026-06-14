import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function StackSection() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A broader skill map than a normal frontend portfolio."
          description="You said to list all your skills, so this section shows the range clearly: interface craft, mobile, backend, DevOps, Linux, databases, and the softer product-facing skills that make delivery work."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <article className="glass-panel h-full rounded-[1.5rem] p-5">
                <p className="eyebrow">{group.title}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
