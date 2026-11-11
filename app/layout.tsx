import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Styleguide — Tesla дизайн систем",
  description: "Tesla сайтын өнгө, үсэг, зай, компонент, хөдөлгөөний сан.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="mn" className={inter.variable}>
      <body>
        <SmoothScroll />
        <header className="sticky top-0 z-50 border-b border-line bg-bg/55 backdrop-blur-[16px]">
          <div className="mx-auto flex h-[72px] max-w-[calc(var(--container-site)+8rem)] items-center justify-between gap-4 px-4 sm:px-8 lg:px-16">
            <a href="#" className="flex h-9 shrink-0 items-center gap-4" aria-label="Styleguide-ийн эхлэл">
              <Image src="/assets/icons/tesla-wordmark.svg" width={140} height={14} alt="Tesla" unoptimized priority />
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted-2 sm:inline">Styleguide</span>
            </a>
            <a href={siteUrl} target="_blank" rel="noreferrer" className="text-[14.5px] text-muted transition-colors hover:text-ink">
              Сайт руу ↗
            </a>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
