import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  ariaLabel: string;
  href: string;
  target?: string;
  title: string;
  text: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div data-cid={cids[0]} className="block">
      <div data-cid={cids[1]} className="h-full block relative overflow-clip bg-background shadow-[var(--clr-4)_0px_0px_0px_1px]">
        <div data-cid={cids[2]} className="h-full block absolute top-0 inset-x-0">
          <a data-cid={cids[3]} className="h-full block absolute top-0 inset-x-0 z-4 max-w-full cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} target={d.target} />
        </div>
        <div data-cid={cids[4]} className="h-full flex flex-col gap-7 max-lg:gap-6 2xl:gap-8">
          <div data-cid={cids[5]} className="h-full flex pt-9 pb-7 px-9 flex-col gap-8 max-md:pt-5 max-md:pb-4 max-md:px-3 md:max-lg:pt-8 md:max-lg:pb-6 md:max-lg:px-8 2xl:pt-10 2xl:pb-8 2xl:px-10">
            <div data-cid={cids[6]} className="flex flex-col gap-[21.9px] max-lg:gap-5 2xl:gap-6">
              <div data-cid={cids[7]} className={cn("flex flex-col gap-[17.9px] max-lg:gap-4 2xl:gap-5", styles.className)}>
                <h3 data-cid={cids[8]} className={cn("flow-root text-xl font-semibold leading-6.5 max-md:text-sm max-md:leading-[1.125rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-1.5 max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-1.5 max-md:after:-mb-1", styles.className2)} data-component="heading">
                  {d.title}
                </h3>
              </div>
              <div data-cid={cids[9]} className="block">
                <div data-cid={cids[10]} className="flow-root text-muted-foreground text-xl font-medium leading-6.5 max-md:text-sm max-md:leading-[1.125rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-1.5 max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-1.5 max-md:after:-mb-1">
                  {d.text}
                </div>
              </div>
            </div>
            <div data-cid={cids[11]} className={cn("block justify-between items-center", styles.className3)}>
              <div data-cid={cids[12]} className="block">
                <div data-cid={cids[13]} className="block">
                  <div data-cid={cids[14]} className="flex justify-between items-center">
                    <div data-cid={cids[15]} className="flex justify-start items-center gap-2.5">
                      <div data-cid={cids[16]} className="w-3.5 h-3.5 block rounded-full aspect-square bg-accent" />
                      <div data-cid={cids[17]} className="flex justify-start items-center gap-2">
                        <div data-cid={cids[18]} className="flow-root text-muted-foreground font-medium leading-[0.8125rem] uppercase max-md:text-xs max-md:leading-3.5 before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.0375rem] max-md:before:-mb-[0.1625rem] after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.05rem] max-md:after:-mb-[0.175rem]">
                          press
                        </div>
                      </div>
                    </div>
                    <div data-cid={cids[19]} className="block">
                      <div data-cid={cids[20]} className="w-11 h-11 border border-solid border-border flex rounded-lg justify-center items-center bg-border">
                        <div data-cid={cids[21]} className="w-6 h-6 flex justify-center items-stretch">
                          <div data-cid={cids[22]} className="block">
                            <div data-cid={cids[23]} className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6">
                              <svg data-cid={cids[24]} className="w-auto h-6 inline overflow-hidden" data-component="icon" fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0032 15.5L18.5039 12M18.5039 12L15.0032 8.5M18.5039 12L9.50061 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                                <path d="M12.0032 18.5L15.9429 14.5607C16.8879 13.6158 16.2187 12 14.8823 12L9.50061 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                                <path d="M12.0032 5.5L15.9429 9.43928C16.8879 10.3842 16.2187 12 14.8823 12L5.50061 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                              </svg>
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
      </div>
    </div>
  );
}
