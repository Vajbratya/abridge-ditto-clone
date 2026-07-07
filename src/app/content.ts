// Semantic page content extracted from recognized recipe sections.

export type FeaturesItem = {
  ariaLabel: string;
  href: string;
  target?: string;
  title: string;
  text: string;
  tag?: string;
};
export const features: FeaturesItem[] = [
  {
    ariaLabel: "Copilot de laudo por voz",
    href: "/produto/copilot",
    title: "Copilot",
    text: "Ditado por voz em portugues clinico que estrutura tecnica, achados e impressao em tempo real. O radiologista revisa, edita e assina.",
    tag: "Voz → laudo",
  },
  {
    ariaLabel: "CRIT para achados criticos",
    href: "/produto/crit",
    title: "CRIT",
    text: "Comunicacao de achados criticos com SLA, escalonamento e trilha de auditoria por exame.",
    tag: "Achado crítico",
  },
  {
    ariaLabel: "GUIDE para classificacoes radiologicas",
    href: "/produto/guide",
    title: "GUIDE",
    text: "Sugere categorias BI-RADS, LI-RADS, PI-RADS e TI-RADS para revisao medica, sem tirar o radiologista do controle.",
    tag: "Classificações",
  },
  {
    ariaLabel: "LaudAI para laudo estruturado",
    href: "/produto/laudai",
    title: "LaudAI",
    text: "Laudo estruturado por modalidade, com terminologia em portugues e o template da casa aplicado.",
    tag: "Estruturado",
  },
];

export type ProductsItem = {
  ariaLabel: string;
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  text: string;
  target?: string;
};
export const products: ProductsItem[] = [
  {
    ariaLabel: "TC em fluxo estruturado",
    href: "/templates/tomografia",
    alt: "Estacao de laudo de tomografia em sala de radiologia",
    imgSrc: "/assets/laudos/laudos-product-ct.webp",
    srcSet: "/assets/laudos/laudos-product-ct.webp 1200w",
    title: "TC",
    text: "TORAX · CRANIO · ABDOME",
  },
  {
    ariaLabel: "RM em fluxo estruturado",
    href: "/templates/ressonancia",
    alt: "Estacao de laudo de ressonancia magnetica em sala de radiologia",
    imgSrc: "/assets/laudos/laudos-product-mri.webp",
    srcSet: "/assets/laudos/laudos-product-mri.webp 1200w",
    title: "RM",
    text: "CRANIO · COLUNA · ABDOME",
  },
  {
    ariaLabel: "US em fluxo estruturado",
    href: "/templates/ultrassonografia",
    alt: "Estacao de laudo de ultrassonografia em sala de radiologia",
    imgSrc: "/assets/laudos/laudos-product-us.webp",
    srcSet: "/assets/laudos/laudos-product-us.webp 1200w",
    title: "US",
    text: "ABDOME · DOPPLER · TIREOIDE",
  },
  {
    ariaLabel: "Mamografia com BI-RADS",
    href: "/classificacoes/birads",
    alt: "Estacao de laudo de mamografia com monitores diagnosticos",
    imgSrc: "/assets/laudos/laudos-product-mammo.webp",
    srcSet: "/assets/laudos/laudos-product-mammo.webp 1200w",
    title: "MMG",
    text: "RASTREAMENTO · BI-RADS",
  },
];

export type TextLink3DataItem = {
  href: string;
  label: string;
};
export const textLink3Data: TextLink3DataItem[] = [
  { href: "/solucoes/radiologistas", label: "Para radiologistas" },
  { href: "/solucoes/clinicas-de-imagem", label: "Clinicas de imagem" },
  { href: "/solucoes/hospitais", label: "Hospitais" },
  { href: "/seguranca", label: "Seguranca" },
];

export type TextLink3Data2Item = {
  href: string;
  label: string;
};
export const textLink3Data2: TextLink3Data2Item[] = [
  { href: "/radcommons", label: "RadCommons" },
  { href: "/laibench", label: "LaiBench" },
  { href: "/blog", label: "Blog" },
];

export type TextLink3Data3Item = {
  href: string;
  label: string;
};
export const textLink3Data3: TextLink3Data3Item[] = [
  { href: "/sobre", label: "Sobre" },
  { href: "/carreiras", label: "Carreiras" },
  { href: "/imprensa", label: "Imprensa" },
  { href: "/contato", label: "Contato" },
];

export type TextLink3Data4Item = {
  href: string;
  label: string;
};
export const textLink3Data4: TextLink3Data4Item[] = [
  { href: "/classificacoes", label: "Classificacoes" },
  { href: "/templates", label: "Templates por modalidade" },
  { href: "/glossario", label: "Glossario" },
  { href: "/integracoes", label: "Integracoes" },
];
