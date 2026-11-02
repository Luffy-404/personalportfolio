import Image from "next/image";
import { ArrowUpRight, Github, Instagram, Layers3, LayoutPanelTop, Linkedin, Youtube } from "lucide-react";
import { articles, experiences, projects } from "../data/portfolio";
import { ContactForm } from "./ContactForm";
import { Navigation } from "./Navigation";
import { ProjectCard } from "./ProjectCard";
import { Stats } from "./Stats";
import { TechStack } from "./TechStack";

function SectionTitle({ first, second }: { first: string; second: string }) { return <h2 className="section-title"><span>{first}</span><em>{second}</em></h2>; }

function ProfileCard() {
  return <div className="profile-card"><div className="portrait"><Image src="/images/profilepic.jpeg" alt="Prince Das" fill priority sizes="(max-width: 1023px) 238px, 340px" /></div><h1>Prince Das</h1><p>A Software Developer who has developed countless innovative solutions.</p><div className="socials" aria-label="Social profiles"><span title="GitHub not configured"><Github /></span><span title="LinkedIn not configured"><Linkedin /></span><span title="Instagram not configured"><Instagram /></span><span title="YouTube not configured"><Youtube /></span></div></div>;
}

export function Portfolio() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Prince Das", jobTitle: "Software Developer", worksFor: { "@type": "Organization", name: "Luit Studio" }, knowsAbout: ["Next.js", "React", "TypeScript", "Framer", "Figma"] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, { "@context": "https://schema.org", "@type": "WebSite", name: "Prince Das Portfolio" }]) }} /><div className="portfolio-layout"><aside className="profile-panel"><ProfileCard /></aside><div className="content-panel"><Navigation /><main id="home" className="shell">
    <section className="hero" aria-labelledby="hero-title"><div className="hero-details"><div className="hero-copy"><p className="eyebrow">Software developer &amp; founder, Luit Studio</p><p id="hero-title" className="mega-title"><span>Software</span><em>Developer</em></p><p className="intro">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p></div><Stats /><section className="services" aria-label="Services"><article className="service orange"><Layers3 /><h2>Dynamic Animation,<br />Motion Design</h2><button aria-label="Explore animation services"><ArrowUpRight /></button></article><article className="service lime"><LayoutPanelTop /><h2>Framer, Figma, Next.js,<br />React.js, TypeScript</h2><button aria-label="Explore development skills"><ArrowUpRight /></button></article></section></div></section>
    <section id="projects"><SectionTitle first="Recent" second="Projects" /><div className="project-list">{projects.map((project) => <ProjectCard project={project} key={project.id} />)}</div></section>
    <section id="experience" className="experience"><div><SectionTitle first="2 Years of" second="Experience" /></div><div className="timeline">{experiences.map(([company, desc, dates]) => <article key={company}><h3>{company}</h3><p>{desc}</p><small>{dates}</small></article>)}</div></section>
    <TechStack />
    <section className="thoughts"><SectionTitle first="Design" second="Thoughts" /><div className="articles">{articles.map(([title, excerpt, date, read]) => <article key={title}><h3>{title}</h3><p>{excerpt}</p><footer><time>{date}</time><span>{read}</span></footer></article>)}</div></section>
    <section id="contact" className="contact"><SectionTitle first="Let's Work" second="Together" /><ContactForm /></section>
  </main><footer className="site-footer">Design &amp; Developed by Prince</footer></div></div></>;
}
