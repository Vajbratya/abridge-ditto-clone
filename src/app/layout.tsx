import "./globals.css";
import "./ditto.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

const title = "Laudos.AI · Software de laudo radiológico com IA assistiva";
const description =
  "Software assistivo para clínicas de radiologia entregarem laudos mais rápidos, com menos digitação, menos retrabalho, revisão antes do envio e médico no controle.";
const ogImage = "/assets/laudos/opengraph-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "Laudos.AI",
    images: [ogImage],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: "/assets/laudos/laudos-mark.svg",
    shortcut: "/assets/laudos/laudos-mark.svg",
    apple: "/assets/laudos/laudos-mark.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Laudos.AI",
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/assets/laudos/laudos-mark.svg`,
  description,
  sameAs: ["https://www.laudos.ai/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: `${SITE_ORIGIN}/contato`,
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Laudos.AI Copilot",
        applicationCategory: "HealthApplication",
        description: "Ditado e estruturação assistiva de laudos radiológicos com revisão médica obrigatória.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          key="laudos-organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full block text-foreground [font-family:Avantt,_Arial,_sans-serif] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
