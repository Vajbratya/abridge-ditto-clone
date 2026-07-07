import DittoWire from "./ditto/DittoWire";
import DittoMotion from "./ditto/DittoMotion";
import DittoLottie from "./ditto/DittoLottie";
import EnterpriseGradeAiSection from "./sections/enterprise-grade-ai-section";
import Providers30MinSection from "./sections/providers30-min-section";
import FeatureGridSection from "./sections/feature-grid-section";
import IncreaseInPatientSection from "./sections/increase-in-patient-section";
import CareWorkflowIntelligenceSection from "./sections/care-workflow-intelligence-section";
import HowItWorksSection from "./sections/how-it-works-section";
import AwardsDeliveringAwardSection from "./sections/awards-delivering-award-section";
import ProductGridSection from "./sections/product-grid-section";
import SeeWhatTrulySection from "./sections/see-what-truly-section";
import LatestUpdatesAbridgeSection from "./sections/latest-updates-abridge-section";
import Footer from "./sections/footer";
import HeroSection from "./sections/hero-section";
import TextLink, { type TextLinkData } from "./components/text-link";
import { TextLink_cids } from "./_cids";

const TextLink_data: TextLinkData[] = [
    { ariacontrols: "nav-panel-0", label: "Platform" },
    { ariacontrols: "nav-panel-1", label: "AI" },
    { ariacontrols: "nav-panel-2", label: "Resources" },
    { ariacontrols: "nav-panel-3", label: "About" }
];

export default function Page() {
  return (
    <>
      <div className="block" data-cid="n1">
        <div className="h-15 block sticky top-0 z-200" data-cid="n2">
          <div className="contents [font-family:ui-sans-serif,_system-ui,_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji']" data-cid="n3">
            <div className="contents" data-cid="n4">
              <div className="block relative [font-family:Avantt,_Arial,_sans-serif] w-full" data-cid="n5">
                <a className="w-px h-px block absolute top-0 left-0 -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] cursor-pointer" data-cid="n6" href="#main">
                  Skip to main content
                </a>
                <div className="h-15 block relative z-210 px-[4.9375rem] bg-background w-full max-md:px-6 md:max-lg:px-8 2xl:px-24" data-cid="n7">
                  <div className="flex max-w-400 justify-between items-center mx-auto h-full" data-cid="n8">
                    <a className="flex items-center shrink-0 cursor-pointer" data-cid="n9" data-component="link" aria-label="Abridge — home" href="/">
                      <img className="w-28 h-5 block max-w-28 overflow-clip align-middle" data-cid="n10" data-component="image" alt="" src="/assets/cloned/svg/63031c55b3e6.svg" />
                    </a>
                    <div className="w-[20.3875rem] h-9 flex absolute top-7.5 left-[clamp(640px,_50%,_calc(100%_-_640px))] min-w-0 items-center gap-1 [translate:-50%_-50%] max-lg:hidden" data-cid="n11">
                      {TextLink_data.map((d, i) => <TextLink key={i} d={d} cids={TextLink_cids[i]} />)}
                    </div>
                    <div className="flex z-220 items-center shrink-0 gap-3 max-lg:hidden" data-cid="n16">
                      <div className="contents min-w-0 max-md:w-[165.5px] max-lg:h-10 max-lg:block max-lg:flex-1 max-lg:pointer-events-none md:max-lg:w-90.5" data-cid="n17">
                        <div className="block max-lg:pointer-events-none" data-cid="n18">
                          <a className="h-10 border border-solid border-foreground flex px-8 rounded-sm justify-center items-center font-medium cursor-pointer max-lg:pointer-events-none hover:bg-clr-8 focus:bg-clr-10" data-cid="n19" data-component="button" href="https://notes.abridge.com/">
                            Log In
                          </a>
                        </div>
                      </div>
                      <div className="contents min-w-0 max-md:w-[165.5px] max-lg:h-10 max-lg:block max-lg:flex-1 max-lg:pointer-events-none md:max-lg:w-90.5" data-cid="n20">
                        <div className="block max-lg:pointer-events-none" data-cid="n21">
                          <a className="h-10 border border-solid border-primary flex px-8 rounded-sm justify-center items-center text-background font-medium bg-primary cursor-pointer max-lg:pointer-events-none hover:bg-clr-9" data-cid="n22" data-component="button" href="/contact">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <button className="hidden relative min-w-0 -mr-2 rounded-lg justify-center items-center text-clr-0 text-center cursor-pointer h-10 w-10 max-lg:flex" data-cid="n23" aria-expanded="false" aria-label="Open menu" type="button">
                      <span className="w-6 block relative max-lg:h-6" data-cid="n24">
                        <span className="h-0.5 block absolute top-[0.4375rem] inset-x-0.5 rounded-xs bg-clr-0 max-lg:w-5 max-lg:right-auto" data-cid="n25" />
                        <span className="h-0.5 block absolute top-3 inset-x-0.5 rounded-xs bg-clr-0 max-lg:w-5 max-lg:right-auto" data-cid="n26" />
                        <span className="h-0.5 block absolute top-[1.0625rem] inset-x-0.5 rounded-xs bg-clr-0 max-lg:w-5 max-lg:right-auto" data-cid="n27" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6" data-cid="n28" />
        <main className="block" data-cid="n29" id="main">
          <EnterpriseGradeAiSection />
          <Providers30MinSection />
          <FeatureGridSection />
          <IncreaseInPatientSection />
          <CareWorkflowIntelligenceSection />
          <HowItWorksSection />
          <AwardsDeliveringAwardSection />
          <ProductGridSection />
          <SeeWhatTrulySection />
          <LatestUpdatesAbridgeSection />
        </main>
        <div className="block overflow-clip" data-cid="n780">
          <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6" data-cid="n781" />
          <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6" data-cid="n782" />
          <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6" data-cid="n783" />
        </div>
        <Footer />
        <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6" data-cid="n859" />
      </div>
      <HeroSection />
      {" "}
      <div className="block" data-cid="n861" id="hs-web-interactives-floating-container">
        {" "}
      </div>
      {" "}
      <DittoWire spec={{"kind":"tabs","active":0,"tabs":[{"trigger":"n315","panel":"n322","triggerOn":{"display":"flow-root","visibility":"visible","opacity":"1","position":"relative","height":"49.9531px","maxHeight":"none","minHeight":"auto","overflow":"visible","top":"0px","right":"0px","bottom":"0px","left":"0px","width":"364.5px","zIndex":"auto","paddingTop":"17.8784px","paddingBottom":"17.8784px","marginTop":"0px","marginBottom":"0px","color":"rgb(34, 34, 34)","backgroundColor":"rgba(255, 255, 255, 0)","backgroundImage":"none","borderTopColor":"rgb(34, 34, 34)","borderRightColor":"rgb(34, 34, 34)","borderBottomColor":"rgb(34, 34, 34)","borderLeftColor":"rgb(34, 34, 34)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"600","textDecorationLine":"none"},"triggerOff":{"display":"flow-root","visibility":"visible","opacity":"1","position":"relative","height":"49.9531px","maxHeight":"none","minHeight":"auto","overflow":"visible","top":"0px","right":"0px","bottom":"0px","left":"0px","width":"364.5px","zIndex":"auto","paddingTop":"17.8784px","paddingBottom":"17.8784px","marginTop":"0px","marginBottom":"0px","color":"rgb(34, 34, 34)","backgroundColor":"rgba(255, 255, 255, 0)","backgroundImage":"none","borderTopColor":"rgb(34, 34, 34)","borderRightColor":"rgb(34, 34, 34)","borderBottomColor":"rgb(34, 34, 34)","borderLeftColor":"rgb(34, 34, 34)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"panelShown":{"display":"block","visibility":"visible","opacity":"1","position":"relative","height":"735.156px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"0px","right":"0px","bottom":"0px","left":"0px","width":"600px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(20, 19, 18)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(20, 19, 18)","borderRightColor":"rgb(20, 19, 18)","borderBottomColor":"rgb(20, 19, 18)","borderLeftColor":"rgb(20, 19, 18)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"panelHidden":{"display":"none","visibility":"visible","opacity":"1","position":"relative","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(20, 19, 18)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(20, 19, 18)","borderRightColor":"rgb(20, 19, 18)","borderBottomColor":"rgb(20, 19, 18)","borderLeftColor":"rgb(20, 19, 18)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"descendants":{"n330":{"transform":"matrix(1, 0, 0, 1, 0, 0)"}}},{"trigger":"n317","panel":"n351","triggerOn":{"display":"flow-root","visibility":"visible","opacity":"1","position":"relative","height":"49.9531px","maxHeight":"none","minHeight":"auto","overflow":"visible","top":"0px","right":"0px","bottom":"0px","left":"0px","width":"363.5px","zIndex":"auto","paddingTop":"17.8784px","paddingBottom":"17.8784px","marginTop":"0px","marginBottom":"0px","color":"rgb(34, 34, 34)","backgroundColor":"rgba(255, 255, 255, 0)","backgroundImage":"none","borderTopColor":"rgb(34, 34, 34)","borderRightColor":"rgb(34, 34, 34)","borderBottomColor":"rgb(34, 34, 34)","borderLeftColor":"rgb(34, 34, 34)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"600","textDecorationLine":"none"},"triggerOff":{"display":"flow-root","visibility":"visible","opacity":"1","position":"relative","height":"49.9531px","maxHeight":"none","minHeight":"auto","overflow":"visible","top":"0px","right":"0px","bottom":"0px","left":"0px","width":"364.5px","zIndex":"auto","paddingTop":"17.8784px","paddingBottom":"17.8784px","marginTop":"0px","marginBottom":"0px","color":"rgb(34, 34, 34)","backgroundColor":"rgba(255, 255, 255, 0)","backgroundImage":"none","borderTopColor":"rgb(34, 34, 34)","borderRightColor":"rgb(34, 34, 34)","borderBottomColor":"rgb(34, 34, 34)","borderLeftColor":"rgb(34, 34, 34)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"panelShown":{"display":"block","visibility":"visible","opacity":"0.220558","position":"relative","height":"735.156px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"0px","right":"0px","bottom":"0px","left":"0px","width":"600px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(20, 19, 18)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(20, 19, 18)","borderRightColor":"rgb(20, 19, 18)","borderBottomColor":"rgb(20, 19, 18)","borderLeftColor":"rgb(20, 19, 18)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"panelHidden":{"display":"none","visibility":"visible","opacity":"1","position":"relative","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(20, 19, 18)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(20, 19, 18)","borderRightColor":"rgb(20, 19, 18)","borderBottomColor":"rgb(20, 19, 18)","borderLeftColor":"rgb(20, 19, 18)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"descendants":{"n359":{"transform":"matrix(1, 0, 0, 1, 0, 0)"}}},{"trigger":"n319","panel":"n380","triggerOn":{"display":"flow-root","visibility":"visible","opacity":"1","position":"relative","height":"49.9531px","maxHeight":"none","minHeight":"auto","overflow":"visible","top":"0px","right":"0px","bottom":"0px","left":"0px","width":"364.5px","zIndex":"auto","paddingTop":"17.8784px","paddingBottom":"17.8784px","marginTop":"0px","marginBottom":"0px","color":"rgb(34, 34, 34)","backgroundColor":"rgba(255, 255, 255, 0)","backgroundImage":"none","borderTopColor":"rgb(34, 34, 34)","borderRightColor":"rgb(34, 34, 34)","borderBottomColor":"rgb(34, 34, 34)","borderLeftColor":"rgb(34, 34, 34)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"600","textDecorationLine":"none"},"triggerOff":{"display":"flow-root","visibility":"visible","opacity":"1","position":"relative","height":"49.9531px","maxHeight":"none","minHeight":"auto","overflow":"visible","top":"0px","right":"0px","bottom":"0px","left":"0px","width":"363.5px","zIndex":"auto","paddingTop":"17.8784px","paddingBottom":"17.8784px","marginTop":"0px","marginBottom":"0px","color":"rgb(34, 34, 34)","backgroundColor":"rgba(255, 255, 255, 0)","backgroundImage":"none","borderTopColor":"rgb(34, 34, 34)","borderRightColor":"rgb(34, 34, 34)","borderBottomColor":"rgb(34, 34, 34)","borderLeftColor":"rgb(34, 34, 34)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"panelShown":{"display":"block","visibility":"visible","opacity":"0.220616","position":"relative","height":"761.156px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"0px","right":"0px","bottom":"0px","left":"0px","width":"600px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(20, 19, 18)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(20, 19, 18)","borderRightColor":"rgb(20, 19, 18)","borderBottomColor":"rgb(20, 19, 18)","borderLeftColor":"rgb(20, 19, 18)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"panelHidden":{"display":"none","visibility":"visible","opacity":"1","position":"relative","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(20, 19, 18)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(20, 19, 18)","borderRightColor":"rgb(20, 19, 18)","borderBottomColor":"rgb(20, 19, 18)","borderLeftColor":"rgb(20, 19, 18)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"descendants":{"n388":{"transform":"matrix(1, 0, 0, 1, 0, 0)"}}}]}} />
      <DittoMotion spec={{"waapi":[],"rotators":[],"reveals":[{"cid":"n435","opacity":"0","transform":"none","transition":"opacity 0.6s ease, transform 0.6s ease"}],"marquees":[]}} />
      <DittoLottie spec={{"items":[{"cid":"n329","renderer":"svg","loop":true,"autoplay":true,"path":"/assets/cloned/lottie/58404bfd79ba.json","animationData":null,"width":317,"height":324},{"cid":"n358","renderer":"svg","loop":true,"autoplay":true,"path":"/assets/cloned/lottie/abae8fa7113a.json","animationData":null,"width":0,"height":0},{"cid":"n387","renderer":"svg","loop":true,"autoplay":true,"path":"/assets/cloned/lottie/7478e8065b25.json","animationData":null,"width":0,"height":0}]}} />
    </>
  );
}
