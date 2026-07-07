import type { ReactNode } from "react";
import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  ariaLabel: string;
  href: string;
  viewBox: string;
  icon: ReactNode;
  id?: string;
};
/** A logo. */
export default function Logo2({ d, cids, styles }: { d: Logo2Data; cids: string[]; styles: Logo2Styles }) {
  return (
    <a data-cid={cids[0]} className="block max-w-full cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} target="_blank">
      <div data-cid={cids[1]} className={cn("h-5 block", styles.className)}>
        <svg data-cid={cids[2]} className={cn("w-auto inline overflow-hidden focus:outline-clr-11 focus:[outline-style:auto] focus:outline-[5px]", styles.className2)} data-component="icon" fill="none" viewBox={d.viewBox} width="100%" xmlns="http://www.w3.org/2000/svg" id={d.id}>{d.icon}</svg>
      </div>
    </a>
  );
}
