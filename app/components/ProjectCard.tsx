import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.publicUrl || `/projects/${project.id}`;
  const external = Boolean(project.publicUrl);
  const initials = project.name.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase();

  return <Link className="project" href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
    <div className={`thumb project-placeholder ${project.tone}`} aria-label={`${project.name} branded project placeholder`}>
      {project.image ? <Image className="project-logo" src={project.image} alt={project.logoAlt || `${project.name} logo`} fill sizes="64px" /> : <><b>{initials}</b><span>{project.category}</span></>}
    </div>
    <div className="project-copy">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.technologies.length > 0 && <ul className="project-tags" aria-label={`${project.name} technologies`}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>}
    </div>
    <ArrowUpRight aria-hidden="true" />
  </Link>;
}
