import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local"; // Ganti Poppins ke localFont
import "./globals.css";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

// Konfigurasi Livvic sebagai font utama
const livvic = localFont({
  src: [
    { path: "../assets/fonts/Livvic-Thin.ttf", weight: "100", style: "normal" },
    { path: "../assets/fonts/Livvic-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../assets/fonts/Livvic-Light.ttf", weight: "300", style: "normal" },
    { path: "../assets/fonts/Livvic-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/Livvic-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/Livvic-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/Livvic-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/Livvic-Black.ttf", weight: "900", style: "normal" },
    // Tambahkan Italic jika perlu
    { path: "../assets/fonts/Livvic-RegularItalic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-livvic",
});

// Konfigurasi Soria untuk Heading/Accent
const soria = localFont({
  src: [{ path: "../assets/fonts/soria-font.ttf", weight: "400", style: "normal" }],
  variable: "--font-soria",
});

export const metadata: Metadata = {
  title: {
    default: "Feelm Tales | Luxury Photography Studio",
    template: "%s | Feelm Tales",
  },
  description:
    "Capturing timeless moments in elegant light. Luxury wedding and portrait photography for discerning couples worldwide.",
  keywords: ["Photography", "Wedding Photography", "Luxury Portrait", "Feelm Tales", "Professional Photographer"],
  authors: [{ name: "Feelm Tales" }],
  creator: "Feelm Tales",
  metadataBase: new URL("https://feelmtales.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Feelm Tales | Luxury Photography Studio",
    description: "Capturing timeless moments in elegant light.",
    url: "https://feelmtales.com",
    siteName: "Feelm Tales",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Feelm Tales Photography Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feelm Tales | Luxury Photography Studio",
    description: "Capturing timeless moments in elegant light.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${livvic.variable} ${soria.variable} ${livvic.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}