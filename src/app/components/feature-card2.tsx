import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard2Data = {
  arialabelledby: string;
  id: string;
  title: string;
  description: string;
  href: string;
};
/** A feature card. */
export default function FeatureCard2({ d, cids, styles }: { d: FeatureCard2Data; cids: string[]; styles: FeatureCard2Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("flex flex-col justify-start items-end col-start-1 row-start-1", styles.className)} aria-labelledby={d.arialabelledby} id={d.id} role="tabpanel">
      <div data-cid={cids[1]} className={cn("flex flex-col justify-end items-end", styles.className2)}>
        <div data-cid={cids[2]} className="block max-w-150">
          <div data-cid={cids[3]} className={cn("grid gap-[21.9px] [grid-auto-columns:1fr] grid-cols-1 max-lg:gap-5 2xl:gap-6", styles.className3)}>
            <h3 data-cid={cids[4]} className="flow-root text-2xl font-semibold leading-[1.625rem] max-md:leading-5 max-md:[font-size:inherit] before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.2875rem] max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.3rem] max-md:after:-mb-[0.275rem]" data-component="heading">
              {d.title}
            </h3>
            <p data-cid={cids[5]} className="flow-root text-muted-foreground text-xl font-medium leading-6.5 max-md:text-sm max-md:leading-[1.125rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-1.5 max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-1.5 max-md:after:-mb-1">
              {d.description}
            </p>
            <div data-cid={cids[6]} className="block">
              <div data-cid={cids[7]} className="h-10 border border-solid border-foreground inline-block relative min-w-45 rounded-sm text-background bg-foreground">
                <div data-cid={cids[8]} className="w-44.5 h-full block absolute top-0">
                  <a data-cid={cids[9]} className="w-44.5 h-9.5 block absolute top-0 z-4 max-w-full cursor-pointer" data-component="link" aria-label="Learn more" href={d.href} />
                </div>
                <div data-cid={cids[10]} className="h-full flex relative py-[0.9rem] px-6 justify-center items-center gap-2 align-middle leading-4 text-center">
                  <div data-cid={cids[11]} className="flow-root font-semibold max-md:text-sm max-md:leading-[1rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-0.5 max-md:before:-mb-[0.1875rem] after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.15rem] max-md:after:-mb-[0.2rem]" aria-hidden="true">
                    Learn More
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
