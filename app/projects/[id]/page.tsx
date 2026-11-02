import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/portfolio";

export function generateStaticParams() { return projects.map(({ id }) => ({ id })); }

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();
  return <main className="project-detail shell"><Link href="/#projects">← Back to projects</Link><p className="eyebrow">{project.category}</p><h1>{project.name}</h1><p>{project.description}</p>{project.technologies.length > 0 && <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>}<p className="project-note">Technology, date, and public link details will be added when confirmed.</p></main>;
}
