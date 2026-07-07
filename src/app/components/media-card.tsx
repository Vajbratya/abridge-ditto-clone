import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  ariahidden: string;
  ariaLabel: string;
  href: string;
  imgSrc: string;
  title: string;
  text: string;
  text2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids, styles }: { d: MediaCardData; cids: string[]; styles: MediaCardStyles }) {
  return (
    <div data-cid={cids[0]} className="w-[478.7px] block max-w-[478.7px] shrink-0 max-md:w-75 max-lg:max-w-84 md:max-lg:w-84 2xl:w-160 2xl:max-w-160" aria-hidden={d.ariahidden === "true"} role="listitem">
      <div data-cid={cids[1]} className={cn("flex pr-8 flex-col justify-start items-stretch max-md:px-2", styles.className)}>
        <div data-cid={cids[2]} className={cn("block relative overflow-clip bg-background", styles.className2)}>
          <div data-cid={cids[3]} className="h-full block absolute top-0 inset-x-0">
            <a data-cid={cids[4]} className="h-full block absolute top-0 inset-x-0 z-4 max-w-full cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} />
          </div>
          <div data-cid={cids[5]} className="h-full block">
            <div data-cid={cids[6]} className="block mb-[17.9px] max-lg:mb-4 2xl:mb-5">
              <img data-cid={cids[7]} className="w-[27.9375rem] h-[27.9375rem] inline-block max-w-full overflow-clip align-middle max-md:w-71 max-md:h-71 md:max-lg:w-76 md:max-lg:h-76 2xl:w-152 2xl:h-152" data-component="image" alt="" src={d.imgSrc} />
            </div>
            <div data-cid={cids[8]} className="flex flex-col gap-[17.9px] max-lg:gap-4 2xl:gap-5">
              <div data-cid={cids[9]} className="block">
                <h3 data-cid={cids[10]} className="flow-root text-2xl font-semibold leading-[1.625rem] max-md:leading-5 max-md:[font-size:inherit] before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.2875rem] max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.3rem] max-md:after:-mb-[0.275rem]" data-component="heading">
                  {d.title}
                </h3>
              </div>
              <div data-cid={cids[11]} className="h-6 block">
                <div data-cid={cids[12]} className={cn("block", styles.className3)}>
                  <div data-cid={cids[13]} className="h-6 flex justify-start items-center gap-2.5">
                    <div data-cid={cids[14]} className={cn("w-3.5 h-3.5 block aspect-square", styles.className4)} />
                    <div data-cid={cids[15]} className="h-6 flex justify-start items-center gap-2">
                      <div data-cid={cids[16]} className="h-[0.7125rem] flow-root text-muted-foreground font-medium leading-[0.8125rem] uppercase max-md:h-[8.5px] max-md:text-xs max-md:leading-3.5 before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.0375rem] max-md:before:-mb-[0.1625rem] after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.05rem] max-md:after:-mb-[0.175rem]">
                        {d.text}
                      </div>
                      <div data-cid={cids[17]} className="block text-muted-foreground uppercase">
                        {d.text2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
