import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_ORIGIN } from "../../lib/site";
import { LaudosFooter, LaudosHeader } from "../laudos-shell";
import {
  allLaudosPages,
  authorForPage,
  breadcrumbsFor,
  conciseBody,
  displayTitle,
  enhancedSectionsFor,
  isTeleradiologyRiskPage,
  pageBySlug,
  pageKind,
  relatedPagesFor,
  routePages,
  seoDescription,
  slugLabel,
} from "../laudos-page-utils";

type PageParams = {
  params: Promise<{ slug: string[] }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return routePages.map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const page = pageBySlug.get(slug.join("/"));
  if (!page) return {};

  const title = displayTitle(page);
  const description = seoDescription(page);
  const canonical = `/${page.slug}`;
  const author = authorForPage(page);

  return {
    title: `${title} | Laudos.AI`,
    description,
    alternates: { canonical },
    authors: page.slug.startsWith("blog/") ? [{ name: author.name }] : undefined,
    openGraph: {
      title: `${title} | Laudos.AI`,
      description,
      type: page.slug.startsWith("blog/") ? "article" : "website",
      url: canonical,
      images: ["/assets/laudos/laudos-interface.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Laudos.AI`,
      description,
      images: ["/assets/laudos/laudos-interface.png"],
    },
  };
}

export default async function LaudosSitemapPage({ params }: PageParams) {
  const { slug } = await params;
  const page = pageBySlug.get(slug.join("/"));
  if (!page) notFound();

  const title = displayTitle(page);
  const author = authorForPage(page);
  const kind = pageKind(page);
  const body = conciseBody(page, kind === "template" ? 8 : 14);
  const sections = enhancedSectionsFor(page);
  const related = relatedPagesFor(page, 6);
  const breadcrumbs = breadcrumbsFor(page);
  const jsonLd = buildJsonLd(page, title, author.name, breadcrumbs);

  return (
    <>
      <LaudosHeader />
      <main className="min-h-screen bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="relative overflow-hidden border-b border-clr-7 px-6 py-14 lg:px-[4.9375rem] lg:py-20 2xl:px-24">
          <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div>
              <nav className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
                {breadcrumbs.map((crumb, index) => (
                  <span key={crumb.href} className="flex items-center gap-2">
                    {index > 0 ? <span className="text-clr-7">/</span> : null}
                    <a href={crumb.href} className="transition hover:text-primary">
                      {index === breadcrumbs.length - 1 ? slugLabel(page.slug) : crumb.label}
                    </a>
                  </span>
                ))}
              </nav>
              <div className="mt-8 inline-flex rounded-full border border-clr-4 bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {page.group}
              </div>
              <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-normal text-foreground md:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                {seoDescription(page)}
              </p>
              {isTeleradiologyRiskPage(page) ? (
                <div className="mt-7 max-w-3xl rounded-xl border border-clr-4 bg-surface p-5 text-sm leading-6 text-foreground">
                  Laudos.AI não é telerradiologia e não presta ato médico a distância.
                  É uma plataforma assistiva para radiologistas, clínicas e hospitais estruturarem,
                  revisarem e rastrearem laudos com responsabilidade médica preservada.
                </div>
              ) : null}
            </div>

            <aside className="rounded-xl border border-clr-4 bg-surface p-6 shadow-[var(--shadow-001)]">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">SEO clínico</div>
              <div className="mt-4 grid gap-4">
                <Metric label="Origem" value="sitemap oficial" />
                <Metric label="Tipo" value={kind} />
                <Metric label="Revisão" value="médica obrigatória" />
              </div>
              {page.slug.startsWith("blog/") ? (
                <div className="mt-6 flex items-center gap-3 border-t border-clr-4 pt-5">
                  {author.image ? (
                    <img src={author.image} alt="" className="h-11 w-11 rounded-full object-cover" />
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-background">
                      A
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-semibold text-foreground">Por {author.name}</div>
                    <div className="text-xs leading-5 text-muted-foreground">{author.role}</div>
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-[4.9375rem] lg:py-20 2xl:px-24">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-xl border border-clr-4 bg-surface p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Nesta página</div>
                <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li><a href="#conteudo" className="hover:text-primary">Conteúdo principal</a></li>
                  {sections.map((section) => (
                    <li key={section.heading}>
                      <a href={`#${anchorFor(section.heading)}`} className="hover:text-primary">{section.heading}</a>
                    </li>
                  ))}
                  <li><a href="#relacionados" className="hover:text-primary">Relacionados</a></li>
                </ol>
              </div>
            </aside>

            <article id="conteudo" className="min-w-0">
              <div className="grid gap-5">
                {body.length ? (
                  body.map((paragraph, index) => (
                    <p key={`${paragraph.slice(0, 24)}-${index}`} className="max-w-4xl text-lg leading-8 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
                    {seoDescription(page)}
                  </p>
                )}
              </div>

              <div className="mt-14 grid gap-8">
                {sections.map((section) => (
                  <section key={section.heading} id={anchorFor(section.heading)} className="rounded-xl border border-clr-4 bg-surface p-6 md:p-8">
                    <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{section.heading}</h2>
                    {section.body?.map((paragraph) => (
                      <p key={paragraph} className="mt-5 max-w-4xl text-base leading-7 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                    {section.items ? (
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {section.items.map((item) => (
                          <li key={item} className="rounded-xl border border-clr-4 bg-background p-4 text-sm leading-6 text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              <section id="relacionados" className="mt-16">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Próximas leituras</div>
                    <h2 className="mt-3 text-2xl font-semibold text-foreground">Páginas relacionadas</h2>
                  </div>
                  <a href="/sitemap.xml" className="text-sm text-primary hover:text-foreground">Sitemap</a>
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {related.map((item) => (
                    <a key={item.slug} href={`/${item.slug}`} className="rounded-xl border border-clr-4 bg-surface p-5 transition hover:border-primary hover:bg-clr-8">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{item.group}</div>
                      <div className="mt-3 text-base font-semibold leading-6 text-foreground">{displayTitle(item)}</div>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{seoDescription(item)}</p>
                    </a>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>
      <LaudosFooter />
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-clr-4 bg-background p-4">
      <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-sm font-semibold capitalize text-foreground">{value}</div>
    </div>
  );
}

function anchorFor(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildJsonLd(page: (typeof allLaudosPages)[number], title: string, author: string, breadcrumbs: Array<{ label: string; href: string }>) {
  const canonical = `${SITE_ORIGIN}/${page.slug}`;
  const base = page.slug.startsWith("blog/")
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description: seoDescription(page),
        author: { "@type": "Person", name: author },
        publisher: { "@type": "Organization", name: "Laudos.AI" },
        mainEntityOfPage: canonical,
      }
    : {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: title,
        description: seoDescription(page),
        url: canonical,
        publisher: { "@type": "Organization", name: "Laudos.AI" },
        medicalAudience: "Radiologistas",
      };

  return [
    base,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: `${SITE_ORIGIN}${crumb.href}`,
      })),
    },
  ];
}
