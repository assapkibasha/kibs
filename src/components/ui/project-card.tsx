"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FeaturedProject } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/symbols";

export function ProjectCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="project-card group"
    >
      <div className="project-copy">
        <div className="flex items-center justify-between">
          <p className="eyebrow">{project.category}</p>
          <span className="text-[var(--color-subtle)]">
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
        <h3 className="mt-6 font-display text-3xl tracking-[-0.05em] sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
          {project.description}
        </p>
        <p className="mt-5 text-sm text-[var(--color-foreground)]">
          {project.outcome}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span key={tag} className="skill-pill">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]"
        >
          Visit live <ArrowUpRight />
        </a>
      </div>

      <div className="project-shot">
        <div
          className="absolute inset-x-4 top-4 h-1 rounded-full"
          style={{ backgroundColor: project.accent }}
        />
        <div className="overflow-hidden rounded-[1.35rem] border border-[color:var(--color-border)] bg-[var(--color-panel)]">
          <Image
            src={project.screenshot}
            alt={`${project.title} landing page preview`}
            width={1440}
            height={960}
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </motion.article>
  );
}
