import MediaLink, { type MediaLinkData } from "../components/media-link";
import FeatureCard2, { type FeatureCard2Data } from "../components/feature-card2";
import { MediaLink_cids, FeatureCard2_cids } from "../_cids";
import { MediaLink_styles, FeatureCard2_styles } from "../_styles";
const MediaLink_data: MediaLinkData[] = [
    { ariacontrols: "panel1", ariaselected: "true", id: "tab1", icon: <>
          <circle data-indicator-dot="" cx="10" cy="10" r="3" fill="currentColor" style={{ transition: "opacity 200ms ease-out", opacity: "0" }} />
          <circle data-indicator-ring="" cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2" style={{ strokeDasharray: "50.2655", strokeDashoffset: "31.1626", opacity: "1", transformBox: "fill-box", transformOrigin: "center center", transform: "scale(1)", transition: "opacity 200ms ease-out, transform 200ms ease-out" }} />
          </>, label: "Early Access" },
    { ariacontrols: "panel2", ariaselected: "false", id: "tab2", icon: <>
          <circle data-indicator-dot="" cx="10" cy="10" r="3" fill="currentColor" style={{ transition: "opacity 200ms ease-in", opacity: "1" }} />
          <circle data-indicator-ring="" cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2" style={{ strokeDasharray: "50.2655", strokeDashoffset: "50.2655", opacity: "0", transformBox: "fill-box", transformOrigin: "center center", transform: "scale(0.375)", transition: "opacity 200ms ease-in, transform 200ms ease-in" }} />
          </>, label: "Whitepaper, Part II" },
    { ariacontrols: "panel3", ariaselected: "false", id: "tab3", icon: <>
          <circle data-indicator-dot="" cx="10" cy="10" r="3" fill="currentColor" style={{ transition: "opacity 200ms ease-in", opacity: "1" }} />
          <circle data-indicator-ring="" cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2" style={{ strokeDasharray: "50.2655", strokeDashoffset: "50.2655", opacity: "0", transformBox: "fill-box", transformOrigin: "center center", transform: "scale(0.375)", transition: "opacity 200ms ease-in, transform 200ms ease-in" }} />
          </>, label: "Whitepaper, Part I" }
];
const FeatureCard2_data: FeatureCard2Data[] = [
    { arialabelledby: "tab1", id: "panel1", title: "Impact Results from OpenAI’s GPT-5.5", description: "With better tool utilization and stronger reasoning, we saw a 25% relative increase in our ability to provide greater specificity to match elements in our rubric-based clinical quality evaluation.", href: "/blog/open-ai-gpt-5-5" },
    { arialabelledby: "tab2", id: "panel2", title: "The Science of Confabulation Elimination", description: "In this paper, we focus on a topic that is top-of-mind for adoption of any AI-powered product: “hallucinations.”", href: "/ai/science-confabulation-hallucination-elimination" },
    { arialabelledby: "tab3", id: "panel3", title: "Pioneering the Science of AI Evaluation", description: "Our process for evaluating AI-generated documentation at Abridge, quantitative performance measures for many of our key systems, and our process for conducting holistic clinician-in-the-loop studies.", href: "/ai/science-ai-evaluation" }
];
/** How It Works section. */
export default function HowItWorksSection({ mediaLinkData = MediaLink_data, featureCard2Data = FeatureCard2_data } = {}) {
  return (
    <section className="block relative py-[6.5375rem] px-[4.9375rem] max-md:py-20 max-md:px-6 md:max-lg:py-21 md:max-lg:px-8 2xl:py-32 2xl:px-24" data-cid="n447">
      <div className="block max-w-400 mx-auto" data-cid="n448">
        <div className="block" data-cid="n449">
          <div className="block max-w-325 mx-auto" data-cid="n450">
            <div className="w-full max-w-150 block" data-cid="n451">
              <div className="block" data-cid="n452">
                <div className="block" data-cid="n453">
                  <div className="flex flex-col gap-[2.6rem] max-lg:gap-9 2xl:gap-12" data-cid="n454">
                    <div className="flex flex-col gap-7 max-lg:gap-6 2xl:gap-8" data-cid="n455">
                      <div className="block text-muted-foreground" data-cid="n456">
                        <div className="flow-root text-primary text-lg leading-4.5 tracking-[0.36px] uppercase max-md:text-sm max-md:leading-3.5 max-md:tracking-[0.28px] before:content-[''] before:table before:w-0 before:h-0 before:mb-[-2.5px] max-md:before:-mb-0.5 after:content-[''] after:table after:w-0 after:h-0 after:mb-[-2.7px] max-md:after:mb-[-2.1px]" data-cid="n457">
                          How it works
                        </div>
                      </div>
                      <div className="block text-[2.5rem] leading-10 max-md:text-[1.8125rem] max-md:leading-[1.8125rem]" data-cid="n458" data-component="heading">
                        <span className="flex flex-col gap-4 max-md:gap-2" data-cid="n459">
                          <p className="flow-root text-[3.625rem] font-medium leading-14.5 tracking-[-1.74px] max-md:text-[1.625rem] max-md:leading-6.5 max-md:tracking-[-0.78px] before:content-[''] before:table before:w-0 before:h-0 before:mb-[-8.1px] max-md:before:-mb-[0.225rem] after:content-[''] after:table after:w-0 after:h-0 after:mb-[-8.7px] max-md:after:mb-[-3.9px]" data-cid="n460">
                            The new system of intelligence for healthcare
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block max-w-325 mx-auto" data-cid="n461">
            <div className="grid gap-4 grid-rows-[807px] [grid-auto-columns:1fr] grid-cols-1 max-md:grid-rows-[595.9px]" data-cid="n462">
              <div className="block z-2 col-start-1 col-end-2 row-start-1 row-end-2" data-cid="n463" id="w-node-_4fe86ae0-4a9a-5c97-cb39-8a4dfa90428e-7a3581b6">
                <div className="h-full min-h-[50.4375rem] grid gap-[17.9px] grid-rows-[807px] [grid-auto-columns:1fr] grid-cols-2 max-md:min-h-84 max-md:pt-[14.8125rem] max-lg:gap-4 max-md:grid-rows-[168px_174.938px] max-md:grid-cols-1 2xl:gap-5" data-cid="n464">
                  <div className="h-30 flex mb-12 flex-col gap-3" data-cid="n465" aria-label="feature-tabs" role="tablist">
                    {mediaLinkData.map((d, i) => <MediaLink key={i} d={d} cids={MediaLink_cids[i]} styles={MediaLink_styles[i]} />)}
                  </div>
                  <div className="grid relative grid-rows-[807px] [grid-auto-columns:1fr] grid-cols-[minmax(0,_1fr)] max-md:grid-rows-[175px]" data-cid="n478">
                    {featureCard2Data.map((d, i) => <FeatureCard2 key={i} d={d} cids={FeatureCard2_cids[i]} styles={FeatureCard2_styles[i]} />)}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-start col-start-1 col-end-2 row-start-1 row-end-2 max-md:justify-start" data-cid="n515" id="w-node-_4fe86ae0-4a9a-5c97-cb39-8a4dfa9042bf-7a3581b6">
                <img className="w-auto h-[39.0625rem] block relative -z-1 max-w-full max-h-[39.0625rem] -mt-[4.5625rem] overflow-clip object-contain align-middle max-md:h-56 max-md:max-h-56 max-md:mt-0" data-cid="n516" data-component="image" alt="" src="/assets/cloned/images/8c1374143be5.avif" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
