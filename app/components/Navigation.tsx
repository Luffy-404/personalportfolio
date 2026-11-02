"use client";
import { BriefcaseBusiness, FolderKanban, House, Mail, Sparkles } from "lucide-react";
const links = [["#home", "Home", House], ["/about", "About", FolderKanban], ["#experience", "Experience", BriefcaseBusiness], ["#projects", "Featured work", Sparkles], ["#contact", "Contact", Mail]] as const;
export function Navigation() { return <nav className="nav" aria-label="Primary navigation">{links.map(([href, label, Icon]) => <a key={label} href={href} aria-label={label} title={label}><Icon size={17} strokeWidth={2}/></a>)}</nav>; }
