import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kodit.ai"),
  title: "KODIT — Enterprise Mobile App & AI Services Studio",
  description:
    "We engineer high-performance Native iOS & Android applications, autonomous AI agent swarms, on-device neural vision, and enterprise vector RAG systems at global scale.",
  keywords: [
    "Mobile App Development",
    "AI Services",
    "iOS Swift Development",
    "Android Kotlin Engineering",
    "Flutter & React Native",
    "Autonomous AI Agents",
    "CoreML On-Device NPU",
    "Enterprise Vector RAG",
    "KODIT AI Studio",
  ],
  authors: [{ name: "KODIT Studio", url: "https://kodit.ai" }],
  creator: "KODIT",
  publisher: "KODIT",
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
  openGraph: {
    title: "KODIT — Enterprise Mobile App & AI Services Studio",
    description:
      "High-velocity Native iOS & Android engineering, autonomous AI agent swarms, and on-device neural intelligence platforms architected for perpetual performance.",
    url: "https://kodit.ai",
    siteName: "KODIT Studio",
    images: [
      {
        url: "/kodit-exact-bg.jpg",
        width: 1200,
        height: 630,
        alt: "KODIT — Mobile App & AI Services Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KODIT — Enterprise Mobile App & AI Services Studio",
    description:
      "High-velocity Native iOS & Android apps, autonomous AI agent swarms, and on-device neural intelligence.",
    images: ["/kodit-exact-bg.jpg"],
    creator: "@kodit_ai",
  },
  icons: {
    icon: "/kodit-avatar-circle-white.png",
    shortcut: "/kodit-avatar-circle-white.png",
    apple: "/kodit-avatar-circle-white.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kodit.ai/#organization",
      name: "KODIT Studio",
      url: "https://kodit.ai",
      logo: "https://kodit.ai/KodIT-Logo-White-HD.png",
      description:
        "Global engineering studio specializing in high-performance Mobile Application Development and Enterprise Artificial Intelligence systems.",
      sameAs: [
        "https://twitter.com/kodit_ai",
        "https://github.com/kodit",
        "https://linkedin.com/company/kodit",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kodit.ai/#website",
      url: "https://kodit.ai",
      name: "KODIT",
      publisher: { "@id": "https://kodit.ai/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "KODIT Mobile & AI Suite",
      operatingSystem: "iOS, Android, Web, Cloud",
      applicationCategory: "DeveloperApplication, BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full bg-black`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-[#ededed] antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
