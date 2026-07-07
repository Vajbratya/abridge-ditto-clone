import type { ReactNode } from "react";
import type { MediaLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaLinkData = {
  ariacontrols: string;
  ariaselected: string;
  id: string;
  icon: ReactNode;
  label: string;
};
/** A linked media tile. */
export default function MediaLink({ d, cids, styles }: { d: MediaLinkData; cids: string[]; styles: MediaLinkStyles }) {
  return (
    <button data-cid={cids[0]} className={cn("h-8 flex py-1.5 justify-start items-center gap-2 cursor-pointer", styles.className)} data-component="button" aria-controls={d.ariacontrols} aria-selected={d.ariaselected === "true"} id={d.id} role="tab">
      <div data-cid={cids[1]} className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6">
        <svg data-cid={cids[2]} className="w-auto h-5 block transform-[matrix(0,-1,1,0,0,0)] origin-[10px_10px] focus:outline-clr-11 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" data-tab-indicator="true">{d.icon}</svg>
      </div>
      <div data-cid={cids[3]} className={cn("flow-root text-2xl font-semibold leading-[1.625rem] max-md:leading-5 max-md:[font-size:inherit] before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.2875rem] max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.3rem] max-md:after:-mb-[0.275rem]", styles.className2)}>
        {d.label}
      </div>
    </button>
  );
}
