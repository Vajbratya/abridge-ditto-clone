// Semantic page content extracted from recognized recipe sections.

export type FeaturesItem = {
  ariaLabel: string;
  href: string;
  target?: string;
  title: string;
  text: string;
};
export const features: FeaturesItem[] = [
    { ariaLabel: "Kaiser Permanente", href: "https://about.kaiserpermanente.org/news/press-release-archive/kaiser-permanente-improves-member-experience-with-ai-enabled-clinical-technology", target: "_blank", title: "Kaiser Permanente", text: "Launches largest generative AI project in healthcare through Abridge" },
    { ariaLabel: "Johns Hopkins Medicine", href: "/press-release/hopkins-abridge", title: "Johns Hopkins Medicine", text: "Deploys Abridge AI Platform for Clinical Documentation Across Enterprise" },
    { ariaLabel: "Duke Health", href: "/press-release/duke-health-announcement", title: "Duke Health", text: "Abridge Partner to Improve Clinician Efficiency and Patient Care" },
    { ariaLabel: "Yale New Haven Health", href: "/blog/yale-future-healthcare-video", title: "Yale New Haven Health", text: "Yale New Haven Health and Abridge: Building the Future of Healthcare Delivery" }
];

export type ProductsItem = {
  ariaLabel: string;
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  text: string;
};
export const products: ProductsItem[] = [
    { ariaLabel: "Abridge for Nurses: TIME Best Inventions of 2025", href: "https://time.com/collections/best-inventions-2025/7318431/abridge-for-nurses/", alt: "TIME Magazine", imgSrc: "/assets/cloned/images/333bc363f2f5.avif", srcSet: "/assets/cloned/images/bae192d23294.avif 500w, /assets/cloned/images/1301f856c19e.avif 800w, /assets/cloned/images/333bc363f2f5.avif 1095w", title: "Abridge for Nurses: TIME Best Inventions of 2025", text: "October 9, 2025" },
    { ariaLabel: "Forbes 250 Greatest Innovators", href: "https://www.forbes.com/sites/alexknapp/2026/02/11/forbes-250-americas-greatest-innovators/", alt: "Forbes", imgSrc: "/assets/cloned/images/7de2b2f60684.avif", srcSet: "/assets/cloned/images/8d65562ae871.avif 500w, /assets/cloned/images/c6f9f6926ea6.avif 800w, /assets/cloned/images/fb642e107b34.avif 1080w, /assets/cloned/images/7de2b2f60684.avif 1095w", title: "Forbes 250 Greatest Innovators", text: "February 11, 2026" },
    { ariaLabel: "The Most Innovative Artificial Intelligence Companies of 2026", href: "https://www.fastcompany.com/91495412/artificial-intelligence-most-innovative-companies-2026", alt: "Business Insider", imgSrc: "/assets/cloned/images/3d7cdd444b4d.png", srcSet: "/assets/cloned/images/34ced10ddcb6.png 500w, /assets/cloned/images/dabc8ab0269a.png 800w, /assets/cloned/images/1cec7e534ef8.png 1080w, /assets/cloned/images/3d7cdd444b4d.png 1095w", title: "The Most Innovative Artificial Intelligence Companies of 2026", text: "March 23, 2026" },
    { ariaLabel: "100 Most Influential People in Healthcare 2025", href: "https://www.modernhealthcare.com/awards/100-most-influential/2025/mh-shiv-rao/", alt: "Modern Healthcare", imgSrc: "/assets/cloned/images/4e6601049ea4.avif", srcSet: "/assets/cloned/images/fe43cc41a3c9.avif 500w, /assets/cloned/images/307b7d7055a2.avif 800w, /assets/cloned/images/1177cfeb9fba.avif 1080w, /assets/cloned/images/4e6601049ea4.avif 1095w", title: "100 Most Influential People in Healthcare 2025", text: "Dec 8, 2025" }
];

export type TextLink3DataItem = {
  href: string;
  label: string;
};
export const textLink3Data: TextLink3DataItem[] = [
    { href: "/platform/clinicians", label: "Clinicians" },
    { href: "/platform/revenue-cycle", label: "Revenue Cycle" },
    { href: "/platform/nursing", label: "Nurses" }
];

export type TextLink3Data2Item = {
  href: string;
  label: string;
};
export const textLink3Data2: TextLink3Data2Item[] = [
    { href: "/whitepapers", label: "Whitepapers" },
    { href: "/abridge-contextual-reasoning-engine", label: "Contextual Reasoning" },
    { href: "/ai", label: "Science" },
    { href: "/ai/publications", label: "Publications" }
];

export type TextLink3Data3Item = {
  href: string;
  label: string;
};
export const textLink3Data3: TextLink3Data3Item[] = [
    { href: "/about", label: "About Us" },
    { href: "/press", label: "Press" },
    { href: "/life-at-abridge", label: "Life at Abridge" },
    { href: "https://jobs.ashbyhq.com/Abridge", label: "Careers" },
    { href: "/contact", label: "Contact" }
];

export type TextLink3Data4Item = {
  href: string;
  label: string;
};
export const textLink3Data4: TextLink3Data4Item[] = [
    { href: "/customers", label: "Customers" },
    { href: "/calculator", label: "Impact Calculator" },
    { href: "/best-in-klas-2026", label: "Best in KLAS Report 2026" },
    { href: "/best-in-klas", label: "Best in KLAS Report 2025" },
    { href: "/blog", label: "News Feed" }
];

