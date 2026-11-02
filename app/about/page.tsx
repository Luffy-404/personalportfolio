import type { Metadata } from "next";
import { AboutPage } from "../components/AboutPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Prince Das",
  description: "The personal journey, interests, and creative influences of Prince Das.",
};

export default function About() {
  return <AboutPage />;
}
