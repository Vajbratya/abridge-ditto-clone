import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile3Data = {
  imgSrc: string;
  text: string;
  ariaLabel: string;
  href: string;
  target?: string;
};
/** A media tile. */
export default function MediaTile3({ d, cids, styles }: { d: MediaTile3Data; cids: string[]; styles: MediaTile3Styles }) {
  return (
    <div data-cid={cids[0]} className="h-6 flex relative flex-col justify-start items-center">
      <div data-cid={cids[1]} className={cn("block", styles.className)}>
        <img data-cid={cids[2]} className={cn("w-full inline-block max-w-full overflow-clip object-contain align-middle", styles.className2)} alt="" src={d.imgSrc} />
      </div>
      <div data-cid={cids[3]} className={cn("h-[2.125rem] block absolute top-[1.875rem] opacity-0 min-w-0 py-3 px-4 rounded-full whitespace-nowrap text-nowrap bg-clr-3 pointer-events-none max-md:hidden", styles.className3)}>
        <div data-cid={cids[4]} className="h-2.5 flow-root text-sm font-semibold leading-3.5 pointer-events-none before:content-[''] before:table before:w-0 before:h-0 before:-mb-0.5 max-md:before:mb-[-2.9px] max-md:before:w-auto max-md:before:h-auto after:content-[''] after:table after:w-0 after:h-0 after:mb-[-2.1px] max-md:after:-mb-[0.1875rem] max-md:after:w-auto max-md:after:h-auto">
          {d.text}
        </div>
      </div>
      <div data-cid={cids[5]} className={cn("h-full block absolute top-0 min-w-0", styles.className4)}>
        <a data-cid={cids[6]} className={cn("h-full block absolute top-0 z-4 max-w-full cursor-pointer", styles.className5)} aria-label={d.ariaLabel} href={d.href} target={d.target} />
      </div>
    </div>
  );
}
