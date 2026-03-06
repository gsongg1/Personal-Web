import type { Metadata } from "next";
import "../styles/globals.css";
import { siteContent } from "@/content/siteContent";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  keywords: [
    "George Song",
    "UBC Computer Science",
    "Full-stack developer",
    "Next.js portfolio",
    "Vancouver software engineer"
  ],
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description
  },
  icons: {
    icon: withBasePath("/icon.svg")
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
