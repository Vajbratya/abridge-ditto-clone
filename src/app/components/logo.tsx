import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
export type LogoData = {
  kind?: string;
  ariaLabel: string;
  kind2?: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, cids, styles }: { d: LogoData; cids: string[]; styles: LogoStyles }) {
  return (
    <button data-cid={cids[0]} className={styles.className} data-component={d.kind} aria-label={d.ariaLabel}>
      <div data-cid={cids[1]} className={styles.className2}>
        <div data-cid={cids[2]} className={styles.className3}>
          <div data-cid={cids[3]} className={styles.className4}>
            <div data-cid={cids[4]} className={styles.className5}>
              <svg data-cid={cids[5]} className={styles.className6} data-component={d.kind2} fill="none" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
