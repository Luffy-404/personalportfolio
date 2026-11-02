import Image from "next/image";
import { ArrowUpRight, Github, Instagram, Layers3, LayoutPanelTop, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { articles, experiences, projects } from "../data/portfolio";
import { ContactForm } from "./ContactForm";
import { Navigation } from "./Navigation";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";
import { Stats } from "./Stats";
import { TechStack } from "./TechStack";

function SectionTitle({ first, second }: { first: string; second: string }) { return <h2 className="section-title"><span>{first}</span><em>{second}</em></h2>; }

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Luffy-404" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/princedas-dev/" },
  { name: "Instagram", href: "https://www.instagram.com/princee__das__/" },
  { name: "Twitter", href: "https://x.com/Pretom3With" },
] as const;

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Instagram, Twitter: FaXTwitter } as const;

function ProfileCard() {
  return <div className="profile-card"><div className="portrait"><Image src="/images/profilepic.jpeg" alt="Prince Das" fill priority sizes="(max-width: 1023px) 238px, 340px" /></div><h1>Prince Das</h1><p>A Software Developer who has developed countless innovative solutions.</p><div className="socials" aria-label="Social profiles">{socialLinks.map((link) => { const Icon = socialIcons[link.name]; return <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} title={link.name}><Icon /></a>; })}</div></div>;
}

export function Portfolio() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Prince Das", jobTitle: "Software Developer", worksFor: { "@type": "Organization", name: "Luit Studio" }, knowsAbout: ["Next.js", "React", "TypeScript", "Framer", "Figma"] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, { "@context": "https://schema.org", "@type": "WebSite", name: "Prince Das Portfolio" }]) }} /><div className="portfolio-layout"><aside className="profile-panel"><ScrollReveal distance={14}><ProfileCard /></ScrollReveal></aside><div className="content-panel"><Navigation /><main id="home" className="shell">
    <section className="hero" aria-labelledby="hero-title"><div className="hero-details"><div className="hero-copy"><ScrollReveal delay={.04} distance={12}><p className="eyebrow">Software developer &amp; founder, Luit Studio</p></ScrollReveal><ScrollReveal delay={.1} distance={18}><p id="hero-title" className="mega-title"><span>Software</span><em>Developer</em></p></ScrollReveal><ScrollReveal delay={.18} distance={16}><p className="intro">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p></ScrollReveal></div><Stats /><section className="services" aria-label="Services"><ScrollReveal delay={.12}><article className="service orange"><Layers3 /><h2>Dynamic Animation,<br />Motion Design</h2><button aria-label="Explore animation services"><ArrowUpRight /></button></article></ScrollReveal><ScrollReveal delay={.2}><article className="service lime"><LayoutPanelTop /><h2>Framer, Figma, Next.js,<br />React.js, TypeScript</h2><button aria-label="Explore development skills"><ArrowUpRight /></button></article></ScrollReveal></section></div></section>
    <section id="projects"><ScrollReveal><SectionTitle first="Recent" second="Projects" /></ScrollReveal><div className="project-list">{projects.map((project, index) => <ScrollReveal key={project.id} delay={Math.min(index * .09, .27)}><ProjectCard project={project} /></ScrollReveal>)}</div></section>
    <section id="experience" className="experience"><ScrollReveal><div><SectionTitle first="2 Years of" second="Experience" /></div></ScrollReveal><div className="timeline">{experiences.map(([company, desc, dates], index) => <ScrollReveal key={company} delay={Math.min(index * .1, .3)}><article><h3>{company}</h3><p>{desc}</p><small>{dates}</small></article></ScrollReveal>)}</div></section>
    <TechStack />
    <section className="thoughts"><ScrollReveal><SectionTitle first="Design" second="Thoughts" /></ScrollReveal><div className="articles">{articles.map(([title, excerpt, date, read], index) => <ScrollReveal key={title} delay={Math.min(index * .1, .3)}><article><h3>{title}</h3><p>{excerpt}</p><footer><time>{date}</time><span>{read}</span></footer></article></ScrollReveal>)}</div></section>
    <section id="contact" className="contact"><ScrollReveal><SectionTitle first="Let's Work" second="Together" /></ScrollReveal><ScrollReveal delay={.1}><ContactForm /></ScrollReveal></section>
  </main><ScrollReveal><footer className="site-footer">Design &amp; Developed by Prince</footer></ScrollReveal></div></div></>;
}
