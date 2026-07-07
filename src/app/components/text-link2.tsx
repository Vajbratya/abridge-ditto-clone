import type { TextLink2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink2Data = {
  ariacontrols: string;
  ariaselected: string;
  href: string;
  id: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d, cids, styles }: { d: TextLink2Data; cids: string[]; styles: TextLink2Styles }) {
  return (
    <a data-cid={cids[0]} className={cn("h-[3.125rem] flow-root relative max-w-full py-[17.9px] px-7 align-top text-color-002 text-xl leading-6.5 text-left bg-clr-5 cursor-pointer max-md:h-[2.625rem] max-lg:py-4 max-lg:pr-6 max-md:text-sm max-md:leading-[1.125rem] max-lg:pl-0 md:max-lg:h-[2.8875rem] 2xl:h-[3.3875rem] 2xl:py-5 2xl:px-8 before:content-[''] before:table before:w-0 before:h-0 before:-mb-1.5 max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-1.5 max-md:after:-mb-1", styles.className)} data-component="link" aria-controls={d.ariacontrols} aria-selected={d.ariaselected === "true"} href={d.href} id={d.id} role="tab">
      <div data-cid={cids[1]} className={cn("block", styles.className2)}>
        {d.label}
      </div>
    </a>
  );
}
