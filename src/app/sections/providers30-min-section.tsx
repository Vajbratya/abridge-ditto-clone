import MediaTile, { type MediaTileData } from "../components/media-tile";
import MediaTile2, { type MediaTile2Data } from "../components/media-tile2";
import MediaTile3, { type MediaTile3Data } from "../components/media-tile3";
import { MediaTile_cids, MediaTile2_cids, MediaTile3_cids } from "../_cids";
import { MediaTile_styles, MediaTile2_styles, MediaTile3_styles } from "../_styles";
const MediaTile_data: MediaTileData[] = [
    { imgSrc: "/assets/cloned/svg/cfc7ef59f306.svg", text: "500K+ patients, 60+ centers, 28 languages", ariaLabel: "Read Press Release. AltaMed: 500K+ patients, 60+ centers, 28 languages", href: "/press-release/altamed-abridge" },
    { imgSrc: "/assets/cloned/svg/81c35bc09fbb.svg", text: "83% reduction in note-writing effort", ariaLabel: "Read Press Release, SHARP: 83% reduction in note-writing effort", href: "/press-release/sharp-abridge" },
    { imgSrc: "/assets/cloned/svg/1f90c6cd41e3.svg", kind: "image", text: "95% user retention across 22 pediatric specialties", ariaLabel: "Read Case Study Akron Children: 95% user retention across 22 pediatric specialties", href: "/case-study/akron-childrens", kind2: "link" },
    { imgSrc: "/assets/cloned/svg/1d82c2f97fad.svg", kind: "image", text: "55% decrease in burnout rate", ariaLabel: "Read Case Study Riverside Health: 55% decrease in burnout rate", href: "/case-study/riverside-health", kind2: "link" },
    { imgSrc: "/assets/cloned/svg/f0b57d2faf5c.svg", kind: "image", text: "40+ specialties, 9,400+ clinicians", ariaLabel: "Read Case Study Inova: 40+ specialties, 9,400+ clinicians", href: "/case-study/inova-scales-ai-across-specialties-and-care-settings", kind2: "link" }
];
const MediaTile2_data: MediaTile2Data[] = [
    { kind: "image", imgSrc: "/assets/cloned/svg/97d867bad57b.svg", text: "78% reduction in cognitive load", kind2: "link", ariaLabel: "Read Case Study: Christu Health show 78% reduction in cognitive load", href: "/case-study/christus-health" },
    { kind: "image", imgSrc: "/assets/cloned/svg/dabbeedf6642.svg", text: "800+ providers, 30 min/day documentation time saved", kind2: "link", ariaLabel: "Read Third-party research by UWHealth: 800+ providers, 30 min/day documentation time saved", href: "https://www.med.wisc.edu/news/ambient-ai-improves-practitioner-well-being/", target: "_blank" },
    { kind: "image", imgSrc: "/assets/cloned/svg/cfc7ef59f306.svg", text: "500K+ patients, 60+ centers, 28 languages", kind2: "link", ariaLabel: "Read Press Release. AltaMed: 500K+ patients, 60+ centers, 28 languages", href: "/press-release/altamed-abridge" },
    { kind: "image", imgSrc: "/assets/cloned/svg/81c35bc09fbb.svg", text: "83% reduction in note-writing effort", kind2: "link", ariaLabel: "Read Press Release, SHARP: 83% reduction in note-writing effort", href: "/press-release/sharp-abridge" },
    { kind: "image", imgSrc: "/assets/cloned/svg/1f90c6cd41e3.svg", text: "95% user retention across 22 pediatric specialties", kind2: "link", ariaLabel: "Read Case Study Akron Children: 95% user retention across 22 pediatric specialties", href: "/case-study/akron-childrens" },
    { kind: "image", imgSrc: "/assets/cloned/svg/1d82c2f97fad.svg", text: "55% decrease in burnout rate", kind2: "link", ariaLabel: "Read Case Study Riverside Health: 55% decrease in burnout rate", href: "/case-study/riverside-health" },
    { imgSrc: "/assets/cloned/svg/f0b57d2faf5c.svg", text: "40+ specialties, 9,400+ clinicians", ariaLabel: "Read Case Study Inova: 40+ specialties, 9,400+ clinicians", href: "/case-study/inova-scales-ai-across-specialties-and-care-settings" }
];
const MediaTile3_data: MediaTile3Data[] = [
    { imgSrc: "/assets/cloned/svg/97d867bad57b.svg", text: "78% reduction in cognitive load", ariaLabel: "Read Case Study: Christu Health show 78% reduction in cognitive load", href: "/case-study/christus-health" },
    { imgSrc: "/assets/cloned/svg/dabbeedf6642.svg", text: "800+ providers, 30 min/day documentation time saved", ariaLabel: "Read Third-party research by UWHealth: 800+ providers, 30 min/day documentation time saved", href: "https://www.med.wisc.edu/news/ambient-ai-improves-practitioner-well-being/", target: "_blank" },
    { imgSrc: "/assets/cloned/svg/cfc7ef59f306.svg", text: "500K+ patients, 60+ centers, 28 languages", ariaLabel: "Read Press Release. AltaMed: 500K+ patients, 60+ centers, 28 languages", href: "/press-release/altamed-abridge" }
];
/** Providers30Min section. */
export default function Providers30MinSection({ mediaTileData = MediaTile_data, mediaTile2Data = MediaTile2_data, mediaTile3Data = MediaTile3_data } = {}) {
  return (
    <section className="block relative py-9 px-[4.9375rem] overflow-clip text-background bg-color-001 max-md:py-8 max-md:px-6 md:max-lg:p-8 2xl:py-10 2xl:px-24" data-cid="n76">
      <div className="h-6 flex" data-cid="n77">
        <div className="h-6 flex relative transform-[matrix(1,0,0,1,-585.2,0)] max-md:transform-[matrix(1,0,0,1,-356.733,0)] md:max-lg:transform-[matrix(1,0,0,1,-468.8,0)] 2xl:transform-[matrix(1,0,0,1,-433.2,0)]" data-cid="n78">
          <div className="h-6 flex mr-16 justify-start items-center shrink-0 gap-16" data-cid="n79">
            <div className="h-6 flex relative flex-col justify-start items-center" data-cid="n80">
              <div className="w-94.5 h-[2.125rem] block absolute top-[1.875rem] -left-[9.3125rem] opacity-0 min-w-0 py-3 px-4 rounded-full whitespace-nowrap text-nowrap bg-clr-3 pointer-events-none max-md:hidden" data-cid="n81">
                <div className="h-2.5 flow-root text-sm font-semibold leading-3.5 pointer-events-none before:content-[''] before:table before:w-0 before:h-0 before:-mb-0.5 max-md:before:mb-[-2.9px] max-md:before:w-auto max-md:before:h-auto after:content-[''] after:table after:w-0 after:h-0 after:mb-[-2.1px] max-md:after:-mb-[0.1875rem] max-md:after:w-auto max-md:after:h-auto" data-cid="n82">
                  800+ providers, 30 min/day documentation time saved
                </div>
              </div>
            </div>
            {mediaTileData.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids[i]} styles={MediaTile_styles[i]} />)}
          </div>
          <div className="h-6 flex mr-16 justify-start items-center shrink-0 gap-16" data-cid="n118">
            {mediaTile2Data.map((d, i) => <MediaTile2 key={i} d={d} cids={MediaTile2_cids[i]} styles={MediaTile2_styles[i]} />)}
          </div>
          <div className="h-6 flex mr-16 justify-start items-center shrink-0 gap-16" data-cid="n168">
            {mediaTile3Data.map((d, i) => <MediaTile3 key={i} d={d} cids={MediaTile3_cids[i]} styles={MediaTile3_styles[i]} />)}
            <div className="h-6 flex relative flex-col justify-start items-center" data-cid="n190">
              <div className="w-64.5 h-[2.125rem] block absolute top-[1.875rem] -left-[6.4375rem] opacity-0 min-w-0 py-3 px-4 rounded-full whitespace-nowrap text-nowrap bg-clr-3 pointer-events-none max-md:hidden" data-cid="n191">
                <div className="h-2.5 flow-root text-sm font-semibold leading-3.5 pointer-events-none before:content-[''] before:table before:w-0 before:h-0 before:-mb-0.5 max-md:before:mb-[-2.9px] max-md:before:w-auto max-md:before:h-auto after:content-[''] after:table after:w-0 after:h-0 after:mb-[-2.1px] max-md:after:-mb-[0.1875rem] max-md:after:w-auto max-md:after:h-auto" data-cid="n192">
                  83% reduction in note-writing effort
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-background before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-background after:text-base after:leading-6" data-cid="n193" />
    </section>
  );
}
