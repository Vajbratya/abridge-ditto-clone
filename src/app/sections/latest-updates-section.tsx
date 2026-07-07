import Logo, { type LogoData } from "../components/logo";
import MediaCard, { type MediaCardData } from "../components/media-card";
import { Logo_cids, MediaCard_cids } from "../_cids";
import { Logo_styles, MediaCard_styles } from "../_styles";
const Logo_data: LogoData[] = [
    { kind: "button", ariaLabel: "Previous Slide", kind2: "icon", icon: <>
                <path d="M13.5029 6.4397L12.9717 6.96899L8.46875 11.4661L7.93652 11.9963L13.502 17.5608L14.5625 16.5002L10.9463 12.884L10.8604 12.7893C10.4599 12.2984 10.4888 11.5741 10.9463 11.1165L10.9443 11.1145L14.0312 8.03052L14.5625 7.50122L13.5029 6.4397Z" fill="currentColor" />
                </> },
    { kind: "button", ariaLabel: "Next slide", kind2: "icon", icon: <>
                <path d="M10.5 16.5L15.0039 11.9961L10.5 7.50001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M13.5858 13.4142C14.3668 12.6332 14.3668 11.3668 13.5858 10.5858" stroke="currentColor" strokeWidth="1.5" />
                </> },
    { ariaLabel: "Next slide", icon: <>
                <path d="M10.5 16.5L15.0039 11.9961L10.5 7.50001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M13.5858 13.4142C14.3668 12.6332 14.3668 11.3668 13.5858 10.5858" stroke="currentColor" strokeWidth="1.5" />
                </> }
];
const MediaCard_data: MediaCardData[] = [
    { ariahidden: "false", ariaLabel: "CFM 2.454/2026 na prática para clínicas de imagem", href: "/blog/cfm-2454-2026-na-pratica", imgSrc: "/assets/laudos/laudos-blog-cfm.webp", title: "CFM 2.454/2026 na prática para clínicas de imagem", text: "Blog", text2: "Akira" },
    { ariahidden: "true", ariaLabel: "Laudo estruturado: evidência e migração", href: "/blog/laudo-estruturado-evidencia-e-migracao", imgSrc: "/assets/laudos/laudos-blog-structured.webp", title: "Laudo estruturado: evidência e migração sem travar a rotina", text: "Blog", text2: "Natan" },
    { ariahidden: "true", ariaLabel: "Transcrição em português com jargão radiológico", href: "/blog/transcricao-ptbr-jargao-radiologico", imgSrc: "/assets/laudos/laudos-blog-dictation.webp", title: "Transcrição em português com jargão radiológico", text: "Blog", text2: "Akira" }
];
/** Latest Updates section. */
export default function LatestUpdatesSection({ logoData = Logo_data, mediaCardData = MediaCard_data } = {}) {
  return (
    <div className="block" data-cid="n690">
      <section className="block relative py-[67.3px] px-[4.9375rem] max-md:py-16 max-md:px-6 md:max-lg:py-14 md:max-lg:px-8 2xl:py-20 2xl:px-24" data-cid="n691">
        <div className="block max-w-400 mx-auto" data-cid="n692">
          <div className="block pl-[6.5375rem] max-md:pl-0 md:max-lg:pl-21 2xl:pl-32" data-cid="n693">
            <div className="grid gap-7 grid-rows-[81.8px] [grid-auto-columns:1fr] grid-cols-2 max-lg:gap-6 max-md:grid-rows-[52.4375px_44px] max-lg:grid-cols-1 md:max-lg:grid-rows-[78px_44px] 2xl:gap-8 2xl:grid-rows-[86px]" data-cid="n694">
              <div className="block" data-cid="n695">
                <div className="h-full block" data-cid="n696">
                  <div className="h-full flex flex-col gap-[2.6rem] max-lg:gap-9 2xl:gap-12" data-cid="n697">
                    <div className="h-full flex flex-col gap-7 max-lg:gap-6 2xl:gap-8" data-cid="n698">
                      <div className="h-[0.8rem] block text-muted-foreground max-md:h-2.5" data-cid="n699">
                        <div className="h-[0.8rem] flow-root text-primary text-lg leading-4.5 tracking-[0.36px] uppercase max-md:h-2.5 max-md:text-sm max-md:leading-3.5 max-md:tracking-[0.28px] before:content-[''] before:table before:w-0 before:h-0 before:mb-[-2.5px] max-md:before:-mb-0.5 after:content-[''] after:table after:w-0 after:h-0 after:mb-[-2.7px] max-md:after:mb-[-2.1px]" data-cid="n700">
                          Conteúdo técnico
                        </div>
                      </div>
                      <div className="block text-[2.5rem] leading-10 max-md:text-[1.8125rem] max-md:leading-[1.8125rem]" data-cid="n701" data-component="heading">
                        <span className="flex flex-col gap-4 max-md:gap-2" data-cid="n702">
                          <p className="flow-root text-[3.625rem] font-medium leading-14.5 tracking-[-1.74px] max-md:text-[1.625rem] max-md:leading-6.5 max-md:tracking-[-0.78px] before:content-[''] before:table before:w-0 before:h-0 before:mb-[-8.1px] max-md:before:-mb-[0.225rem] after:content-[''] after:table after:w-0 after:h-0 after:mb-[-8.7px] max-md:after:mb-[-3.9px]" data-cid="n703">
                            Guias Laudos.AI
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-end gap-1" data-cid="n704">
                {logoData.map((d, i) => <Logo key={i} d={d} cids={Logo_cids[i]} styles={Logo_styles[i]} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="block relative pb-[6.5375rem] px-16 overflow-clip max-md:pb-20 max-md:px-6 md:max-lg:pb-21 md:max-lg:px-8 2xl:pb-32" data-cid="n723">
        <div className="h-full block max-w-400 mx-auto" data-cid="n724" aria-label="Latest news, 9 slides" role="region">
          <div className="h-full flex justify-start items-stretch" data-cid="n725" role="list">
            {mediaCardData.map((d, i) => <MediaCard key={i} d={d} cids={MediaCard_cids[i]} styles={MediaCard_styles[i]} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
