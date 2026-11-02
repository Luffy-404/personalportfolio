import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./tailwind.css";

const poppins = localFont({
  src: [
    { path: "../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Poppins-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Prince Das — Software Developer",
  description: "Portfolio of Prince Das, software developer and founder of Luit Studio.",
  alternates: { canonical: "/" },
  openGraph: { title: "Prince Das — Software Developer", description: "Portfolio of Prince Das, software developer and founder of Luit Studio.", type: "website", url: "/" },
  twitter: { card: "summary", title: "Prince Das — Software Developer", description: "Portfolio of Prince Das, software developer and founder of Luit Studio." },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${poppins.className} ${poppins.variable}`}>{children}</body></html>;
}
