import { LAUDOS_PAGES, type LaudosPageData } from "./laudos-pages-data";

export type LaudosAuthor = {
  name: "Akira" | "Natan";
  role: string;
  image?: string;
};

export const allLaudosPages: readonly LaudosPageData[] = LAUDOS_PAGES;

export const routePages = allLaudosPages.filter((page) => page.slug);

export const pageBySlug = new Map(allLaudosPages.map((page) => [page.slug, page]));

export const navLinks = [
  { label: "Produto", href: "/produto" },
  { label: "Ciência", href: "/radcommons" },
  { label: "Recursos", href: "/recursos" },
  { label: "Templates", href: "/templates" },
  { label: "Blog", href: "/blog" },
];

export const footerGroups = [
  {
    title: "Produto",
    links: [
      { label: "Copilot", href: "/produto/copilot" },
      { label: "CRIT", href: "/produto/crit" },
      { label: "GUIDE", href: "/produto/guide" },
      { label: "LaudAI", href: "/produto/laudai" },
    ],
  },
  {
    title: "Soluções",
    links: [
      { label: "Radiologistas", href: "/solucoes/radiologistas" },
      { label: "Clínicas de imagem", href: "/solucoes/clinicas-de-imagem" },
      { label: "Hospitais", href: "/solucoes/hospitais" },
      { label: "Gestores", href: "/solucoes/gestores" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Classificações", href: "/classificacoes" },
      { label: "Glossário", href: "/glossario" },
      { label: "Integrações", href: "/integracoes" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Blog", href: "/blog" },
      { label: "Segurança", href: "/seguranca" },
      { label: "Contato", href: "/contato" },
    ],
  },
];

export const groupCounts = allLaudosPages.reduce<Record<string, number>>((acc, page) => {
  acc[page.group] = (acc[page.group] ?? 0) + 1;
  return acc;
}, {});

export function displayTitle(page: LaudosPageData) {
  if (page.slug === "solucoes/telerradiologia") {
    return "Camada de laudo para operações distribuídas de radiologia";
  }

  if (page.slug === "laudo-a-distancia") {
    return "Laudo radiológico assistivo com revisão médica";
  }

  return page.title
    .replace(/\s*·\s*Laudos\.AI$/i, "")
    .replace(/\s*—\s*Laudos\.AI$/i, "")
    .replace(/\s*\|\s*Laudos\.AI$/i, "");
}

export function slugLabel(slug: string) {
  const part = slug.split("/").filter(Boolean).pop() || "laudos.ai";
  return part
    .replace(/-/g, " ")
    .replace(/\btc\b/gi, "TC")
    .replace(/\brm\b/gi, "RM")
    .replace(/\bus\b/gi, "US")
    .replace(/\blia\b/gi, "LIA")
    .replace(/\bia\b/gi, "IA")
    .replace(/\bris\b/gi, "RIS")
    .replace(/\bpacs\b/gi, "PACS")
    .replace(/\bhl7\b/gi, "HL7")
    .replace(/\bdicom\b/gi, "DICOM")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function pageKind(page: LaudosPageData) {
  const first = page.slug.split("/")[0] || "home";
  if (first === "templates") return "template";
  if (first === "blog") return "blog";
  if (first === "glossario") return "glossario";
  if (first === "classificacoes") return "classificacao";
  if (first === "integracoes") return "integracao";
  if (first === "guias") return "guia";
  if (first === "comparacoes") return "comparacao";
  if (first === "solucoes") return "solucao";
  if (first === "produto") return "produto";
  if (first === "laudo") return "laudo";
  return "institucional";
}

export function modalityFromSlug(page: LaudosPageData) {
  const parts = page.slug.split("/");
  const modality = parts[1] || "";
  if (modality === "tomografia") return "tomografia computadorizada";
  if (modality === "ressonancia") return "ressonância magnética";
  if (modality === "ultrassonografia") return "ultrassonografia";
  return page.group.toLowerCase();
}

export function authorForPage(page: LaudosPageData): LaudosAuthor {
  if (!page.slug.startsWith("blog/")) {
    return {
      name: "Natan",
      role: "Radiologia, produto clínico e governança de IA",
      image: "/assets/laudos/natan.jpg",
    };
  }

  const checksum = page.slug.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  if (checksum % 2 === 0) {
    return {
      name: "Akira",
      role: "Pesquisa editorial em IA médica e operação radiológica",
    };
  }

  return {
    name: "Natan",
    role: "Radiologia, produto clínico e governança de IA",
    image: "/assets/laudos/natan.jpg",
  };
}

export function breadcrumbsFor(page: LaudosPageData) {
  const parts = page.slug.split("/").filter(Boolean);
  const crumbs = [{ label: "Início", href: "/" }];
  parts.forEach((_, index) => {
    const href = `/${parts.slice(0, index + 1).join("/")}`;
    const linkedPage = pageBySlug.get(parts.slice(0, index + 1).join("/"));
    crumbs.push({ label: linkedPage ? displayTitle(linkedPage) : slugLabel(parts[index]), href });
  });
  return crumbs;
}

export function relatedPagesFor(page: LaudosPageData, limit = 6) {
  const prefix = page.slug.split("/").slice(0, 2).join("/");
  const group = page.group;

  const related = routePages
    .filter((candidate) => candidate.slug !== page.slug)
    .filter((candidate) => candidate.slug.startsWith(prefix) || candidate.group === group)
    .slice(0, limit);

  if (related.length >= limit) return related;

  return [
    ...related,
    ...routePages
      .filter((candidate) => candidate.slug !== page.slug && !related.includes(candidate))
      .filter((candidate) => candidate.group === group)
      .slice(0, limit - related.length),
  ];
}

export function conciseBody(page: LaudosPageData, limit = 12) {
  const seen = new Set<string>();
  const title = displayTitle(page);
  return page.body
    .map((text) => text.trim())
    .filter((text) => text.length > 26)
    .filter((text) => !text.startsWith("Laudos.AI —") || text.length > 90)
    .filter((text) => {
      const key = text.toLowerCase();
      if (key === title.toLowerCase() || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, limit);
}

export function seoDescription(page: LaudosPageData) {
  if (page.slug === "solucoes/telerradiologia") {
    return "Laudos.AI não é telerradiologia: é uma camada assistiva para radiologistas e operações distribuídas estruturarem, revisarem e rastrearem laudos.";
  }

  if (page.slug === "laudo-a-distancia") {
    return "Laudos.AI apoia o fluxo de laudo radiológico com IA assistiva, revisão médica obrigatória e integração operacional; não presta ato médico a distância.";
  }

  const description = page.description
    .replace("Para radiologistas, clínicas, hospitais e telerradiologia.", "Para radiologistas, clínicas e hospitais. Não é serviço de telerradiologia.")
    .replace("Para radiologistas, clínicas e telerradiologia.", "Para radiologistas e clínicas. Não é serviço de telerradiologia.");

  if (description.length > 165) return `${description.slice(0, 162).trim()}...`;
  return description;
}

export function isTeleradiologyRiskPage(page: LaudosPageData) {
  return /telerradiologia|laudo-a-distancia/i.test(`${page.slug} ${page.title} ${page.description}`);
}

export function enhancedSectionsFor(page: LaudosPageData) {
  const kind = pageKind(page);
  const title = displayTitle(page);
  const modality = modalityFromSlug(page);

  if (kind === "template") {
    return [
      {
        heading: "Como usar este modelo",
        body: [
          `Este modelo de ${modality} foi estruturado para acelerar a primeira versão do laudo de ${title.toLowerCase()} sem retirar a revisão do radiologista.`,
          "Use como máscara inicial, ajuste a técnica ao protocolo da instituição, revise cada achado nas imagens e assine somente depois da validação médica.",
        ],
      },
      {
        heading: "Checklist antes da assinatura",
        items: [
          "Conferir identificação, lateralidade, protocolo e comparação com exames anteriores.",
          "Revisar achados negativos relevantes para o motivo do exame.",
          "Padronizar medidas, classificações e terminologia com o padrão do serviço.",
          "Separar achados incidentais de achados acionáveis.",
          "Garantir impressão objetiva, acionável e sem ambiguidade.",
          "Registrar comunicação formal quando houver achado crítico.",
        ],
      },
      {
        heading: "Perguntas frequentes",
        body: [
          `O Laudos.AI pode transformar ditado em laudo estruturado para ${title.toLowerCase()}, mas a decisão diagnóstica continua sendo do médico.`,
          "A plataforma não substitui PACS/RIS, não faz diagnóstico autônomo e não presta serviço de telerradiologia; ela opera como camada assistiva de texto, revisão e fluxo.",
        ],
      },
    ];
  }

  if (kind === "blog") {
    return [
      {
        heading: "Leitura operacional",
        body: [
          "O ponto central para radiologia é separar produtividade de automação cega: IA boa encurta digitação, preserva autoria médica e deixa trilha de auditoria.",
          "Para implantar em clínica, hospital ou operação distribuída, avalie segurança, revisão humana, integração com PACS/RIS, logs e impacto real no tempo até a assinatura.",
        ],
      },
    ];
  }

  if (kind === "classificacao") {
    return [
      {
        heading: "Como entra no fluxo de laudo",
        body: [
          `${title} deve aparecer como apoio à padronização do laudo, não como decisão automática. O radiologista escolhe a categoria aplicável, revisa a linguagem e assina.`,
          "No Laudos.AI, classificações entram no GUIDE e em templates estruturados para reduzir variação entre profissionais e facilitar comparação longitudinal.",
        ],
      },
    ];
  }

  if (kind === "integracao" || kind === "glossario") {
    return [
      {
        heading: "Onde isso importa na operação",
        body: [
          "A camada de laudo precisa conversar com a operação sem bagunçar o viewer. O radiologista continua lendo no ambiente diagnóstico; o Laudos.AI estrutura texto, rastreia revisão e devolve o resultado ao fluxo.",
          "Essa separação é importante para manter PACS, RIS, worklist, auditoria e assinatura em papéis claros.",
        ],
      },
    ];
  }

  if (kind === "solucao" || kind === "laudo") {
    return [
      {
        heading: "Escopo clínico",
        body: [
          "Laudos.AI é uma plataforma assistiva para radiologistas e equipes de radiologia. Não substitui o ato médico, não assina laudos e não opera como serviço de telerradiologia.",
          "A proposta é reduzir trabalho mecânico, padronizar templates, organizar achados críticos e preservar revisão humana obrigatória.",
        ],
      },
    ];
  }

  return [
    {
      heading: "Princípio de produto",
      body: [
        "A IA acelera a estrutura do laudo; o radiologista revisa, edita e assina. Esse limite é parte do produto, não uma nota de rodapé.",
        "O resultado esperado é menos atrito operacional, mais padronização e rastreabilidade sem deslocar a responsabilidade clínica.",
      ],
    },
  ];
}
