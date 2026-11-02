import type { IconType } from "react-icons";
import { VscVscode } from "react-icons/vsc";
import { SiDocker, SiExpress, SiFigma, SiFramer, SiGit, SiGithub, SiJsonwebtokens, SiNestjs, SiNeon, SiNextdotjs, SiNodedotjs, SiPnpm, SiPostgresql, SiPrisma, SiReact, SiShadcnui, SiSupabase, SiSwagger, SiTailwindcss, SiTurborepo, SiTypescript } from "react-icons/si";

export type TechnologyGroup = "Frontend Development" | "Backend & APIs" | "Databases & ORM" | "Tools & Workflow" | "Design & Motion";
export type Technology = { name: string; group: TechnologyGroup; icon: IconType; color: string };

export const technologies: Technology[] = [
  { name: "Next.js", group: "Frontend Development", icon: SiNextdotjs, color: "#fff" },
  { name: "React", group: "Frontend Development", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", group: "Frontend Development", icon: SiTypescript, color: "#3178c6" },
  { name: "Tailwind CSS", group: "Frontend Development", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "shadcn/ui", group: "Frontend Development", icon: SiShadcnui, color: "#fff" },
  { name: "Node.js", group: "Backend & APIs", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "NestJS", group: "Backend & APIs", icon: SiNestjs, color: "#e0234e" },
  { name: "Express.js", group: "Backend & APIs", icon: SiExpress, color: "#fff" },
  { name: "REST APIs", group: "Backend & APIs", icon: SiSwagger, color: "#85ea2d" },
  { name: "JWT Authentication", group: "Backend & APIs", icon: SiJsonwebtokens, color: "#d63aff" },
  { name: "PostgreSQL", group: "Databases & ORM", icon: SiPostgresql, color: "#4169e1" },
  { name: "Prisma", group: "Databases & ORM", icon: SiPrisma, color: "#2d3748" },
  { name: "Supabase", group: "Databases & ORM", icon: SiSupabase, color: "#3ecf8e" },
  { name: "Neon", group: "Databases & ORM", icon: SiNeon, color: "#00e699" },
  { name: "Git", group: "Tools & Workflow", icon: SiGit, color: "#f05032" },
  { name: "GitHub", group: "Tools & Workflow", icon: SiGithub, color: "#fff" },
  { name: "VS Code", group: "Tools & Workflow", icon: VscVscode, color: "#22a9f2" },
  { name: "Docker", group: "Tools & Workflow", icon: SiDocker, color: "#2496ed" },
  { name: "pnpm", group: "Tools & Workflow", icon: SiPnpm, color: "#f9ad00" },
  { name: "Turborepo", group: "Tools & Workflow", icon: SiTurborepo, color: "#ef4444" },
  { name: "Figma", group: "Design & Motion", icon: SiFigma, color: "#f24e1e" },
  { name: "Framer Motion", group: "Design & Motion", icon: SiFramer, color: "#9c5cff" }
];
