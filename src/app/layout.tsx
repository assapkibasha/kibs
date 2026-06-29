import type { Metadata, Viewport } from "next";
import { Manrope, Roboto_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ntsinzi Francois | Developer Portfolio",
  description:
    "Ntsinzi Francois, a Full Stack Developer, Flutter Developer, and Creative Frontend Engineer.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${robotoMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--cc-black)] text-[var(--cc-white)]">
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
