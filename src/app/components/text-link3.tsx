import type { TextLink3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink3Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d, cids, styles }: { d: TextLink3Data; cids: string[]; styles: TextLink3Styles }) {
  return (
    <a data-cid={cids[0]} className={cn("flex max-w-full py-1 justify-start items-center cursor-pointer", styles.className)} data-component="link" href={d.href}>
      <div data-cid={cids[1]} className={cn("flow-root leading-[1.3125rem] max-md:text-sm max-md:leading-[1.125rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.2875rem] max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.3rem] max-md:after:-mb-1", styles.className2)}>
        {d.label}
      </div>
    </a>
  );
}
