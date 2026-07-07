import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Generative AI for Clinical Conversations | Abridge",
  "description": "Discover how Abridge transforms documentation for clinical conversations powered by generative AI, enhancing healthcare understanding and improving patient care.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Generative AI for Clinical Conversations | Abridge",
    "description": "Discover how Abridge transforms documentation for clinical conversations powered by generative AI, enhancing healthcare understanding and improving patient care.",
    "type": "website",
    "images": [
      "https://cdn.prod.website-files.com/6279c9d10eb860662e5ec006/665f41408181f8fdda5f1e7e_abridge-opengraph-home.webp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Generative AI for Clinical Conversations | Abridge",
    "description": "Discover how Abridge transforms documentation for clinical conversations powered by generative AI, enhancing healthcare understanding and improving patient care.",
    "images": [
      "https://cdn.prod.website-files.com/6279c9d10eb860662e5ec006/665f41408181f8fdda5f1e7e_abridge-opengraph-home.webp"
    ]
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/ae188b9bdcd2.png",
        "type": "image/x-icon"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/0e3516032789.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Organization\",\n  \"name\": \"Abridge\",\n  \"url\": \"", "\",\n  \"logo\": {\n    \"@type\": \"ImageObject\",\n    \"url\": \"https://cdn.prod.website-files.com/6279c9d10eb860662e5ec006/664287c9ef936d8ce43517f8_abridge-logo-wordmark-black.webp\"\n  },\n  \"description\": \"Enterprise-grade AI for clinical conversations—trusted by the largest healthcare systems. Measurably improving outcomes for clinicians, nurses, and revenue cycle teams at scale.\",\n  \"sameAs\": [\n    \"https://www.linkedin.com/company/abridgehq\"\n  ],\n  \"award\": [\n    \"Best in KLAS 2025 - Ambient AI Market Leader\",\n    \"#1 Most Innovative in Healthcare by Fast Company\",\n    \"TIME Best Inventions\",\n    \"Forbes AI 50\",\n    \"Business Insider 2024 AI Power List\",\n    \"Fortune 50 AI Innovators\",\n    \"Cloud 100 Lists\"\n  ],\n  \"founder\": {\n    \"@type\": \"Person\",\n    \"name\": \"Shivdev Rao\",\n    \"award\": [\n      \"100 Most Influential People in Healthcare\",\n      \"100 Most Influential People in AI in 2024\"\n    ]\n  },\n  \"contactPoint\": {\n    \"@type\": \"ContactPoint\",\n    \"contactType\": \"Customer Service\",\n    \"url\": \"", "/contact\"\n  },\n  \"offers\": [\n    {\n      \"@type\": \"Offer\",\n      \"itemOffered\": {\n        \"@type\": \"SoftwareApplication\",\n        \"name\": \"Abridge for Clinicians\",\n        \"description\": \"Contextually aware, clinically useful, and billable AI-generated notes—in real time\",\n        \"applicationCategory\": \"HealthApplication\",\n        \"url\": \"", "/platform/clinicians\"\n      }\n    },\n    {\n      \"@type\": \"Offer\",\n      \"itemOffered\": {\n        \"@type\": \"SoftwareApplication\",\n        \"name\": \"Abridge Revenue Cycle\",\n        \"description\": \"Close revenue cycle gaps at the point of conversation\",\n        \"applicationCategory\": \"HealthApplication\",\n        \"url\": \"", "/platform/revenue-cycle\"\n      }\n    },\n    {\n      \"@type\": \"Offer\",\n      \"itemOffered\": {\n        \"@type\": \"SoftwareApplication\",\n        \"name\": \"Abridge for Nurses\",\n        \"description\": \"Pioneering the future of nursing documentation\",\n        \"applicationCategory\": \"HealthApplication\",\n        \"url\": \"", "/platform/nursing\"\n      }\n    }\n  ],\n  \"customer\": [\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Johns Hopkins Medicine\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Kaiser Permanente\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Duke Health\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Mayo Clinic\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Emory Healthcare\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Sutter Health\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Yale NewHaven Health\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"UPMC\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"The University of Kansas Health System\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"MemorialCare\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"University of Vermont Health Network\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Christus Health\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Reid Health\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Mount Sinai\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Lee Health\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Cambridge Health Alliance\"\n    },\n    {\n      \"@type\": \"Organization\",\n      \"name\": \"Corewell Health\"\n    }\n  ]\n}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="min-h-full block text-foreground [font-family:Avantt,_Arial,_sans-serif] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background" data-cid="n0">
        {children}
      </body>
    </html>
  );
}
