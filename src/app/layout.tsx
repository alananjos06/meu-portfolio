import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://alananjos-dev.web.app";
const description =
  "Portfólio de Alana Anjos, desenvolvedora Full Stack e estudante de Sistemas de Informação: projetos com React, Next.js, TypeScript, Django e Docker.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alana Anjos | Desenvolvedora Full Stack",
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "alananjos.dev",
    title: "Alana Anjos | Desenvolvedora Full Stack",
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alana Anjos, desenvolvedora Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alana Anjos | Desenvolvedora Full Stack",
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-zinc-900 text-zinc-100 antialiased min-h-screen pt-20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}