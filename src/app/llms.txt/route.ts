import { SITE_ORIGIN } from "../../lib/site";
import { allLaudosPages, displayTitle, seoDescription } from "../laudos-page-utils";

export const dynamic = "force-static";

export function GET() {
  const featured = allLaudosPages
    .filter((page) => page.slug === "" || page.slug.startsWith("produto/") || page.slug.startsWith("templates/") || page.slug.startsWith("blog/"))
    .slice(0, 80)
    .map((page) => `- [${displayTitle(page)}](${SITE_ORIGIN}${page.slug ? `/${page.slug}` : ""}) - ${seoDescription(page)}`)
    .join("\n");

  return new Response(
    [
      "# Laudos.AI",
      "",
      "Plataforma assistiva para laudos médicos em radiologia: voz para laudo, templates estruturados, classificações, comunicação de achados críticos e integração PACS/RIS.",
      "",
      "A Laudos.AI não é serviço de telerradiologia e não substitui o ato médico. A IA estrutura; o radiologista revisa, edita e assina.",
      "",
      `Total de páginas no sitemap materializado: ${allLaudosPages.length}.`,
      "",
      "## Rotas principais",
      "",
      featured,
      "",
    ].join("\n"),
    {
      headers: { "content-type": "text/plain; charset=utf-8" },
    },
  );
}
