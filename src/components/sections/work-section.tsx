import { featuredProjects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function WorkSection() {
  return (
    <section id="work" className="px-4 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Real products, real launches, and real landing pages pulled from the live web."
          description="These are the actual project surfaces you pointed me to. I pulled their current landing pages and turned them into a portfolio system that reflects your work with credibility."
        />

        <div className="mt-14 grid gap-5">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
