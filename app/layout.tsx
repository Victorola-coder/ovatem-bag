import "./global.css";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import { AOS, FloatingWhatsApp } from "./components/global";
import { Montserrat } from "next/font/google";
import type { Metadata, Viewport } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ovatem.ng"),
  title: "Ovatem Quality Bag",
  description:
    "Crafting Excellence. Every Style. Every Story. Premium, high-quality stylish bags and thoughtfully curated souvenirs for every occasion.",
  applicationName: "Ovatem Quality Bag",
  authors: [{ name: "Ovatem", url: "https://ovatem.ng" }],
  keywords: [
    "Ovatem",
    "handmade bags in Nigeria",
    "premium leather bags Oye-Ekiti",
    "premium bags",
    "leather bags",
    "souvenirs",
    "custom gifting",
    "souvenir branding services",
    "bag making training in Nigeria",
    "event souvenirs Nigeria",
  ],
  creator: "Ovatem",
  publisher: "Ovatem",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://ovatem.ng",
    title: "Ovatem Quality Bag",
    siteName: "Ovatem",
    locale: "en_US",
  },
  twitter: {
    title: "Ovatem Quality Bag",
    description:
      "Crafting Excellence. Every Style. Every Story. Premium, high-quality stylish bags and thoughtfully curated souvenirs for every occasion.",
    card: "summary_large_image",
  },
  appleWebApp: {
    capable: true,
    title: "Ovatem Quality Bag",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract:
    "Premium bags and curated souvenirs crafted with excellence.",
  category: "Shopping",
  classification: "Shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${montserrat.className} ${geistMono.variable} antialiased`}
      >
        <Toaster richColors />
        <AOS />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
