import TextLink3 from "../components/text-link3";
import Logo2, { type Logo2Data } from "../components/logo2";
import { TextLink3_cids, TextLink3_cids2, TextLink3_cids3, TextLink3_cids4, Logo2_cids } from "../_cids";
import { TextLink3_styles, TextLink3_styles2, TextLink3_styles3, TextLink3_styles4, Logo2_styles } from "../_styles";
import { textLink3Data as textLink3DataContent, textLink3Data2 as textLink3Data2Content, textLink3Data3 as textLink3Data3Content, textLink3Data4 as textLink3Data4Content } from "../content";
const Logo2_data: Logo2Data[] = [
    { ariaLabel: "LinkedIn", href: "https://www.linkedin.com/company/laudosai", viewBox: "0 0 20 20", icon: <>
          <g clipPath="url(#clip0_178_3881)">
            <path d="M4.65597 6.43457H0.64094C0.462746 6.43457 0.318359 6.57902 0.318359 6.75715V19.6557C0.318359 19.8339 0.462746 19.9783 0.64094 19.9783H4.65597C4.83417 19.9783 4.97855 19.8339 4.97855 19.6557V6.75715C4.97855 6.57902 4.83417 6.43457 4.65597 6.43457Z" fill="currentColor" />
            <path d="M2.64942 0.0224609C1.18852 0.0224609 0 1.20969 0 2.66898C0 4.12891 1.18852 5.31659 2.64942 5.31659C4.10916 5.31659 5.29671 4.12885 5.29671 2.66898C5.29677 1.20969 4.10916 0.0224609 2.64942 0.0224609Z" fill="currentColor" />
            <path d="M14.8675 6.11426C13.255 6.11426 12.0629 6.80748 11.3399 7.59516V6.75742C11.3399 6.57929 11.1955 6.43484 11.0173 6.43484H7.17219C6.994 6.43484 6.84961 6.57929 6.84961 6.75742V19.656C6.84961 19.8342 6.994 19.9786 7.17219 19.9786H11.1784C11.3566 19.9786 11.501 19.8342 11.501 19.656V13.2742C11.501 11.1237 12.0852 10.2859 13.5843 10.2859C15.2169 10.2859 15.3466 11.629 15.3466 13.3848V19.6561C15.3466 19.8343 15.491 19.9786 15.6692 19.9786H19.677C19.8552 19.9786 19.9995 19.8343 19.9995 19.6561V12.581C19.9995 9.38323 19.3898 6.11426 14.8675 6.11426Z" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_178_3881">
              <rect width="20" height="20" fill="currentColor" />
            </clipPath>
          </defs>
          </> },
    { ariaLabel: "X", href: "https://twitter.com/laudosai", viewBox: "0 0 20 20", icon: <>
          <g clipPath="url(#clip0_178_3882)">
            <path d="M11.9047 8.46958L19.3513 0H17.5873L11.1187 7.35251L5.956 0H0L7.80867 11.1194L0 19.9999H1.764L8.59067 12.2338L14.044 19.9999H20M2.40067 1.30158H5.11067L17.586 18.7623H14.8753" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_178_3882">
              <rect width="20" height="20" fill="currentColor" />
            </clipPath>
          </defs>
          </> },
    { ariaLabel: "GitHub", href: "https://github.com/laudosai", viewBox: "0 0 24 24", id: "github", icon: <>
          <path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.59 2 12.253c0 4.528 2.865 8.37 6.839 9.727.5.094.682-.222.682-.493 0-.244-.009-.89-.014-1.747-2.782.62-3.369-1.375-3.369-1.375-.455-1.185-1.11-1.501-1.11-1.501-.908-.637.069-.624.069-.624 1.004.072 1.532 1.057 1.532 1.057.892 1.565 2.341 1.113 2.91.851.091-.662.349-1.113.635-1.369-2.221-.259-4.556-1.139-4.556-5.067 0-1.119.39-2.034 1.03-2.751-.103-.26-.446-1.302.098-2.713 0 0 .84-.276 2.75 1.05A9.356 9.356 0 0 1 12 6.957c.85.004 1.705.118 2.504.346 1.909-1.326 2.747-1.05 2.747-1.05.546 1.411.203 2.453.1 2.713.64.717 1.028 1.632 1.028 2.751 0 3.938-2.339 4.805-4.567 5.059.359.317.678.943.678 1.9 0 1.371-.013 2.477-.013 2.814 0 .274.18.592.688.492C19.138 20.62 22 16.78 22 12.253 22 6.59 17.523 2 12 2Z" clipRule="evenodd" />
          </> }
];
/** Site footer. */
export default function Footer({ textLink3Data = textLink3DataContent, textLink3Data2 = textLink3Data2Content, textLink3Data3 = textLink3Data3Content, textLink3Data4 = textLink3Data4Content, logos = Logo2_data } = {}) {
  return (
    <footer className="block relative pb-[21.9px] px-[4.9375rem] max-md:pb-6 max-md:px-6 md:max-lg:pb-5 md:max-lg:px-8 2xl:pb-6 2xl:px-24" data-cid="n784">
      <div className="border-t border-solid border-t-clr-7 block max-w-400 pt-[51.5px] mx-auto max-md:pt-12.5 md:max-lg:pt-11 2xl:pt-15" data-cid="n785">
        <div className="flex flex-col gap-60 max-md:gap-12.5" data-cid="n786">
          <div className="grid gap-7.5 grid-rows-[181.6px] [grid-auto-columns:1fr] grid-cols-[1fr_1.333fr] max-md:gap-12.5 max-md:grid-rows-[79.8125px_344.641px] max-lg:grid-cols-1 md:max-lg:gap-25 md:max-lg:grid-rows-[108.141px_172.25px] 2xl:grid-rows-[192.3px]" data-cid="n787">
            <div className="block max-w-25 max-md:max-w-18" data-cid="n788">
              <img className="w-full h-auto block" data-cid="n789" alt="Laudos.AI" src="/assets/laudos/icon.svg" />
            </div>
            <div className="flex justify-between items-start gap-y-[67.3px] grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr] [grid-auto-columns:1fr] max-md:flex-wrap max-md:gap-y-12.5 max-md:gap-x-2.5 max-md:grid-cols-[1fr_1fr] max-lg:col-start-[span_1] max-lg:col-end-[span_1] max-lg:row-start-[span_1] max-lg:row-end-[span_1] md:max-lg:gap-y-14 2xl:gap-y-20" data-cid="n790" id="w-node-_3cadbdb7-bd10-7367-b513-f7ff292f80c4-292f80bd">
              <div className="w-27 flex flex-col gap-3.5 max-md:w-[9.8125rem] max-lg:gap-3 2xl:gap-4" data-cid="n791">
                <div className="flow-root opacity-70 mb-1 text-muted-foreground font-medium leading-[0.8125rem] uppercase max-md:text-xs max-md:leading-3.5 before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.0375rem] max-md:before:-mb-[0.1625rem] after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.05rem] max-md:after:-mb-[0.175rem]" data-cid="n792">
                  Product
                </div>
                {textLink3Data.map((d, i) => <TextLink3 key={i} d={d} cids={TextLink3_cids[i] ?? [`footer-product-${i}`, `footer-product-label-${i}`]} styles={TextLink3_styles[i] ?? TextLink3_styles[0]} />)}
              </div>
              <div className="w-[9.8125rem] flex flex-col gap-3.5 max-lg:gap-3 2xl:gap-4" data-cid="n799">
                <div className="flow-root opacity-70 mb-1 text-muted-foreground font-medium leading-[0.8125rem] uppercase max-md:text-xs max-md:leading-3.5 before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.0375rem] max-md:before:-mb-[0.1625rem] after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.05rem] max-md:after:-mb-[0.175rem]" data-cid="n800">
                  AI
                </div>
                {textLink3Data2.map((d, i) => <TextLink3 key={i} d={d} cids={TextLink3_cids2[i] ?? [`footer-ai-${i}`, `footer-ai-label-${i}`]} styles={TextLink3_styles2[i] ?? TextLink3_styles2[0]} />)}
              </div>
              <div className="w-26 flex flex-col gap-3.5 max-md:w-[9.8125rem] max-lg:gap-3 2xl:gap-4" data-cid="n809">
                <div className="flow-root opacity-70 mb-1 text-muted-foreground font-medium leading-[0.8125rem] uppercase max-md:text-xs max-md:leading-3.5 before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.0375rem] max-md:before:-mb-[0.1625rem] after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.05rem] max-md:after:-mb-[0.175rem]" data-cid="n810">
                  About
                </div>
                {textLink3Data3.map((d, i) => <TextLink3 key={i} d={d} cids={TextLink3_cids3[i] ?? [`footer-about-${i}`, `footer-about-label-${i}`]} styles={TextLink3_styles3[i] ?? TextLink3_styles3[0]} />)}
              </div>
              <div className="w-44 flex flex-col gap-3.5 max-md:w-[9.8125rem] max-lg:gap-3 2xl:gap-4" data-cid="n821">
                <div className="flow-root opacity-70 mb-1 text-muted-foreground font-medium leading-[0.8125rem] uppercase max-md:text-xs max-md:leading-3.5 before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.0375rem] max-md:before:-mb-[0.1625rem] after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.05rem] max-md:after:-mb-[0.175rem]" data-cid="n822">
                  Resources
                </div>
                {textLink3Data4.map((d, i) => <TextLink3 key={i} d={d} cids={TextLink3_cids4[i] ?? [`footer-resources-${i}`, `footer-resources-label-${i}`]} styles={TextLink3_styles4[i] ?? TextLink3_styles4[0]} />)}
              </div>
            </div>
          </div>
          <div className="block" data-cid="n833">
            <div className="block justify-between items-center gap-7.5 grid-cols-[1fr_1fr] grid-rows-[auto] [grid-auto-columns:1fr] max-md:gap-12.5 max-md:grid-cols-[1fr]" data-cid="n834">
              <div className="h-px block bg-clr-7 max-md:hidden" data-cid="n835" />
              <div className="flex mt-[21.9px] justify-between items-center self-center max-lg:mt-5 max-md:flex-col max-md:justify-start max-md:items-start max-md:gap-5 2xl:mt-6" data-cid="n836" id="w-node-_1e7d2502-9080-6e80-7e25-924abc41f9c1-292f80bd">
                <div className="w-full hidden min-w-0 max-md:h-px max-md:block max-md:bg-clr-7" data-cid="n837" />
                <div className="flex justify-start items-center gap-3.5 max-md:flex-col max-md:items-start max-lg:gap-3 2xl:gap-4" data-cid="n838">
                  <p className="h-2.5 flow-root text-sm font-semibold leading-3.5 max-md:h-[9.3px] max-md:text-[0.8125rem] max-md:leading-[0.9375rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-0.5 max-md:before:mb-[-2.9px] after:content-[''] after:table after:w-0 after:h-0 after:mb-[-2.1px] max-md:after:-mb-[0.1875rem]" data-cid="n839">
                    {"Laudos.AI © "}
                    <span className="inline" data-cid="n840" id="copyright-year">
                      2026
                    </span>
                  </p>
                  <div className="flex gap-2.5 max-md:flex-col max-lg:gap-2 2xl:gap-3" data-cid="n841">
                    <a className="h-6 flex max-w-full py-1 justify-start items-center cursor-pointer max-md:h-[1.125rem]" data-cid="n842" data-component="link" href="/privacy">
                      <div className="h-[0.7125rem] flow-root leading-[1.3125rem] max-md:h-2.5 max-md:text-sm max-md:leading-[1.125rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.2875rem] max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.3rem] max-md:after:-mb-1" data-cid="n843">
                        Privacy Policy
                      </div>
                    </a>
                    <a className="flex max-w-full py-1 justify-start items-center cursor-pointer" data-cid="n844" data-component="link" href="/terms">
                      <div className="flow-root leading-[1.3125rem] max-md:text-sm max-md:leading-[1.125rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.2875rem] max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.3rem] max-md:after:-mb-1" data-cid="n845">
                        Terms of use
                      </div>
                    </a>
                    <div className="h-6 flex justify-start items-center" data-cid="n846">
                      <div className="h-6 block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6" data-cid="n847">
                        <a className="inline cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-cid="n848" data-component="link" href="#">
                          Cookie Preferences
                        </a>
                        {" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-6 max-md:order-[-9999]" data-cid="n849">
                  {logos.map((d, i) => <Logo2 key={i} d={d} cids={Logo2_cids[i]} styles={Logo2_styles[i]} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
