export type Project = {
  id: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  image?: string;
  logoAlt?: string;
  publicUrl?: string;
  githubUrl?: string;
  featured: boolean;
  tone: "orange" | "lime" | "violet" | "cream" | "red" | "blue" | "slate";
};

// Dates, URLs, repositories, and technology stacks stay empty until confirmed.
export const projects: Project[] = [
  { id: "aahii-agihf", name: "AAHII / AGIHF", description: "Assamese-language education and learning platform with administrative and vendor interfaces.", category: "Education platform", technologies: [], image: "/images/projects/aahii-logo.png", logoAlt: "AAHII official logo", featured: true, tone: "orange" },
  { id: "porishrom", name: "Porishrom", description: "Web application with separate frontend, backend, and administration applications.", category: "Web application", technologies: [], image: "/images/projects/porisrom-logo.png", logoAlt: "Porisrom official logo", featured: false, tone: "blue" },
  { id: "caviar-pristine", name: "Caviar Pristine", description: "Public Caviar Pristine project website.", category: "Website", technologies: [], image: "/images/projects/caviar-pristine-logo.png", logoAlt: "Pristine Caviar official logo", publicUrl: "https://caviarpristine.vercel.app/", featured: true, tone: "violet" },
  { id: "luit-studio", name: "Luit Studio", description: "Studio website project.", category: "Studio website", technologies: [], image: "/images/projects/luit-studio-logo.png", logoAlt: "Luit Studio official logo", featured: true, tone: "red" }
];

export const experiences = [
  ["PixelForge Studios", "Lead the design team in creating user-centric mobile and web applications, improving user experience and increasing user engagement.", "Jan 2020 – Present"],
  ["BlueWave Innovators", "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.", "Jun 2017 – Dec 2019"],
  ["TrendCraft Solutions", "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.", "Mar 2015 – May 2017"]
] as const;

export const tools = [["Framer", "Website Builder", "F"], ["Figma", "Design Tool", "●"], ["Lemon Squeezy", "Payments Provider", "L"], ["ChatGPT", "AI Assistant", "✳"], ["Notion", "Productivity Tool", "N"], ["Next.js", "React Framework", "NXT"]] as const;

export const articles = [
  ["Starting and Growing a Career in Web Design", "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.", "Apr 8, 2022", "6 min read"],
  ["Create a Landing Page That Performs Great", "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.", "Mar 15, 2022", "5 min read"],
  ["How Can Designers Prepare for the Future?", "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.", "Feb 28, 2022", "4 min read"]
] as const;
