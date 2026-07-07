import type { ProductCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ProductCardData = {
  ariaLabel: string;
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  text: string;
};
/** A product card. */
export default function ProductCard({ d, cids, styles }: { d: ProductCardData; cids: string[]; styles: ProductCardStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("block max-lg:shrink-0", styles.className)}>
      <div data-cid={cids[1]} className="h-full block relative overflow-clip">
        <div data-cid={cids[2]} className="h-full block absolute top-0 inset-x-0">
          <a data-cid={cids[3]} className="h-full block absolute top-0 inset-x-0 z-4 max-w-full cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} target="_blank" />
        </div>
        <div data-cid={cids[4]} className="h-full flex flex-col gap-7 max-lg:gap-6 2xl:gap-8">
          <div data-cid={cids[5]} className="block">
            <img data-cid={cids[6]} className={cn("w-full inline-block max-w-full rounded-xl overflow-clip object-cover align-middle 2xl:h-[13.4375rem]", styles.className2)} data-component="image" alt={d.alt} sizes="100vw" src={d.imgSrc} srcSet={d.srcSet} />
          </div>
          <div data-cid={cids[7]} className={cn("flex flex-col gap-[17.9px] max-lg:gap-4 2xl:gap-5", styles.className3)}>
            <div data-cid={cids[8]} className={cn("flex flex-col gap-[21.9px] max-lg:gap-5 2xl:gap-6", styles.className4)}>
              <div data-cid={cids[9]} className={cn("flex flex-col gap-[17.9px] max-lg:gap-4 2xl:gap-5", styles.className5)}>
                <h3 data-cid={cids[10]} className={cn("flow-root text-xl font-semibold leading-5.5 max-md:text-sm max-md:leading-[1.125rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-1 max-md:before:mb-[-3.7px] after:content-[''] after:table after:w-0 after:h-0 after:-mb-1 max-md:after:-mb-1", styles.className6)} data-component="heading">
                  {d.title}
                </h3>
              </div>
            </div>
            <div data-cid={cids[11]} className={cn("block justify-between items-center", styles.className7)}>
              <div data-cid={cids[12]} className={cn("block", styles.className8)}>
                <div data-cid={cids[13]} className={cn("block", styles.className9)}>
                  <div data-cid={cids[14]} className={cn("flex justify-between items-center", styles.className10)}>
                    <div data-cid={cids[15]} className={cn("flex justify-start items-center gap-2.5", styles.className11)}>
                      <div data-cid={cids[16]} className={cn("flex justify-start items-center gap-2", styles.className12)}>
                        <div data-cid={cids[17]} className="block text-muted-foreground uppercase whitespace-nowrap">
                          {d.text}
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
    </div>
  );
}
