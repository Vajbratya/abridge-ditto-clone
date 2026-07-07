import FeatureCard from "../components/feature-card";
import { FeatureCard_cids } from "../_cids";
import { FeatureCard_styles } from "../_styles";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="block relative pt-[6.5375rem] pb-92 px-[4.9375rem] max-md:py-20 max-md:px-6 md:max-lg:pt-21 md:max-lg:pb-32 md:max-lg:px-8 2xl:pt-32 2xl:px-24" data-cid="n194">
      <div className="block max-w-400 mx-auto" data-cid="n195">
        <div className="grid gap-15 grid-rows-[138.953px_293.781px] [grid-auto-columns:1fr] grid-cols-1 max-md:gap-y-8 max-md:grid-rows-[78.9219px_682.25px] md:max-lg:grid-rows-[135.203px_465.812px] 2xl:grid-rows-[143.203px_252.406px]" data-cid="n196">
          <div className="block" data-cid="n197">
            <div className="h-full block" data-cid="n198">
              <div className="h-full flex flex-col gap-[51.5px] max-lg:gap-11 2xl:gap-15" data-cid="n199">
                <div className="h-full flex flex-col gap-7 max-lg:gap-6 2xl:gap-8" data-cid="n200">
                  <div className="block text-primary" data-cid="n201">
                    <div className="flow-root text-lg leading-4.5 tracking-[0.36px] uppercase max-md:text-sm max-md:leading-3.5 max-md:tracking-[0.28px] before:content-[''] before:table before:w-0 before:h-0 before:mb-[-2.5px] max-md:before:-mb-0.5 after:content-[''] after:table after:w-0 after:h-0 after:mb-[-2.7px] max-md:after:mb-[-2.1px]" data-cid="n202">
                      O que melhora
                    </div>
                  </div>
                  <div className="block text-[2.5rem] leading-10 max-md:text-[1.8125rem] max-md:leading-[1.8125rem]" data-cid="n203" data-component="heading">
                    <span className="flex flex-col gap-4 max-md:gap-2" data-cid="n204">
                      <p className="flow-root text-[3.625rem] font-medium leading-14.5 tracking-[-1.74px] max-md:text-[1.625rem] max-md:leading-6.5 max-md:tracking-[-0.78px] before:content-[''] before:table before:w-0 before:h-0 before:mb-[-8.1px] max-md:before:-mb-[0.225rem] after:content-[''] after:table after:w-0 after:h-0 after:mb-[-8.7px] max-md:after:mb-[-3.9px]" data-cid="n205">
                        Pronto para sua clínica
                      </p>
                      <p className="flow-root text-muted-foreground text-[3.625rem] font-medium leading-14.5 tracking-[-1.74px] max-md:text-[1.625rem] max-md:leading-6.5 max-md:tracking-[-0.78px] before:content-[''] before:table before:w-0 before:h-0 before:mb-[-8.1px] max-md:before:-mb-[0.225rem] after:content-[''] after:table after:w-0 after:h-0 after:mb-[-8.7px] max-md:after:mb-[-3.9px]" data-cid="n206">
                        Sem mudar seu fluxo
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid gap-px grid-rows-[293.8px] [grid-auto-columns:1fr] max-md:grid-rows-[169.812px_169.812px_169.812px_169.812px] md:max-lg:grid-rows-[232.406px_232.406px] 2xl:grid-rows-[252.4px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4" data-cid="n207">
            {features.map((d, i) => <FeatureCard key={i} d={d} cids={FeatureCard_cids[i]} styles={FeatureCard_styles[i]} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
