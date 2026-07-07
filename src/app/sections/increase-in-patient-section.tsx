import TextLink2, { type TextLink2Data } from "../components/text-link2";
import SpeechToReportCard from "../components/speech-to-report-card";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import { TextLink2_cids } from "../_cids";
import { TextLink2_styles } from "../_styles";
const TextLink2_data: TextLink2Data[] = [
    { ariacontrols: "w-tabs-0-data-w-pane-0", ariaselected: "true", href: "#w-tabs-0-data-w-pane-0", id: "w-tabs-0-data-w-tab-0", label: "Speech-to-report" },
    { ariacontrols: "w-tabs-0-data-w-pane-1", ariaselected: "false", href: "#w-tabs-0-data-w-pane-1", id: "w-tabs-0-data-w-tab-1", label: "Menos retrabalho" },
    { ariacontrols: "w-tabs-0-data-w-pane-2", ariaselected: "false", href: "#w-tabs-0-data-w-pane-2", id: "w-tabs-0-data-w-tab-2", label: "Mais laudos entregues" }
];
/** Increase In Patient section. */
export default function IncreaseInPatientSection({ textLink2Data = TextLink2_data } = {}) {
  return (
    <section className="block relative py-[6.5375rem] px-[4.9375rem] max-md:py-20 max-md:px-6 md:max-lg:py-21 md:max-lg:px-8 2xl:py-32 2xl:px-24" data-cid="n308">
      <div className="block max-w-400 mx-auto" data-cid="n309">
        <div className="block max-w-325 mx-auto" data-cid="n310">
          <div className="grid gap-4 grid-rows-[735.2px] [grid-auto-columns:1fr] grid-cols-1 max-md:grid-rows-[272.578px_734.188px] md:max-lg:grid-rows-[526.094px_899.609px] 2xl:grid-rows-[787.4px]" data-cid="n311">
            <div className="block z-2 col-start-1 col-end-2 row-start-1 row-end-2 max-lg:col-start-[span_1] max-lg:col-end-[span_1] max-lg:row-start-[span_1] max-lg:row-end-[span_1]" data-cid="n312" id="w-node-_4fe86ae0-4a9a-5c97-cb39-8a4dfa9041d9-7a3581b6">
              <div className="h-full flex relative justify-between items-end max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:gap-6 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6" data-cid="n313">
                <div className="flex relative flex-col" data-cid="n314" role="tablist">
                  {textLink2Data.map((d, i) => <TextLink2 key={i} d={d} cids={TextLink2_cids[i]} styles={TextLink2_styles[i]} />)}
                </div>
                <div className="w-full h-[45.95rem] block relative max-w-150 ml-[157.5px] overflow-hidden max-md:h-[536.3px] max-lg:max-w-full max-lg:ml-0 md:max-lg:h-[43.0625rem] 2xl:h-[49.2125rem] 2xl:ml-[20.4375rem]" data-cid="n321">
                  <div className="h-full block relative" data-cid="n322" aria-labelledby="w-tabs-0-data-w-tab-0" id="w-tabs-0-data-w-pane-0" role="tabpanel">
                    <div className="w-full max-w-150 h-full block" data-cid="n323">
                      <div className="h-full block relative rounded-xl overflow-clip bg-surface" data-cid="n324">
                        <div className="h-full block absolute top-0 inset-x-0" data-cid="n325">
                          <a className="h-full block absolute top-0 inset-x-0 z-4 max-w-full cursor-pointer" data-cid="n326" data-component="link" aria-label="" href="/case-study/wvu-medicine" />
                        </div>
                        <div className="h-full flex rounded-xl flex-col" data-cid="n327">
                          <div className="flex pt-9 pb-[113.5px] px-9 rounded-xl justify-center items-start max-lg:pt-8 max-lg:pb-24 max-lg:px-8 2xl:pt-10 2xl:pb-36 2xl:px-10" data-cid="n328">
                            <div className="w-full h-96 block max-md:h-60 md:max-lg:h-80 2xl:h-[27rem]" data-cid="n329">
                              <SpeechToReportCard className="h-full w-full rounded-xl shadow-none" fitToFrame />
                            </div>
                          </div>
                          <div className="flex pb-9 px-9 flex-col gap-9 max-lg:pb-8 max-lg:px-8 max-lg:gap-8 2xl:pb-10 2xl:px-10 2xl:gap-10" data-cid="n331">
                            <div className="flex flex-col gap-[21.9px] max-lg:gap-5 2xl:gap-6" data-cid="n332">
                              <div className="flex flex-col gap-[17.9px] max-lg:gap-4 2xl:gap-5" data-cid="n333">
                                <h3 className="flow-root text-xl font-semibold leading-6.5 max-md:text-sm max-md:leading-[1.125rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-1.5 max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-1.5 max-md:after:-mb-1" data-cid="n334" data-component="heading">
                                  Speech-to-report para radiologia
                                </h3>
                              </div>
                              <div className="h-[4.1375rem] block max-md:h-[63.7px]" data-cid="n335">
                                <div className="h-[4.1375rem] flow-root text-muted-foreground text-xl font-medium leading-6.5 max-md:h-[63.7px] max-md:text-sm max-md:leading-[1.125rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-1.5 max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-1.5 max-md:after:-mb-1" data-cid="n336">
                                  Você fala os achados; o laudo sai estruturado, no seu padrão, pronto para revisar e assinar.
                                </div>
                              </div>
                            </div>
                            <div className="h-11 block justify-between items-center" data-cid="n337">
                              <div className="block" data-cid="n338">
                                <div className="block" data-cid="n339">
                                  <div className="h-11 flex justify-between items-center" data-cid="n340">
                                    <div className="h-3.5 flex justify-start items-center gap-2.5" data-cid="n341">
                                      <div className="w-3.5 h-3.5 block rounded-full aspect-square bg-primary" data-cid="n342" />
                                      <div className="h-[0.7125rem] flex justify-start items-center gap-2 max-md:h-[8.5px]" data-cid="n343">
                                        <div className="h-[0.7125rem] flow-root text-muted-foreground font-medium leading-[0.8125rem] uppercase max-md:h-[8.5px] max-md:text-xs max-md:leading-3.5 before:content-[''] before:table before:w-0 before:h-0 before:-mb-[0.0375rem] max-md:before:-mb-[0.1625rem] after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.05rem] max-md:after:-mb-[0.175rem]" data-cid="n344">
                                          Fluxo de laudo
                                        </div>
                                      </div>
                                    </div>
                                    <div className="block" data-cid="n345">
                                      <div className="w-11 h-11 border border-solid border-border flex rounded-lg justify-center items-center bg-border" data-cid="n346">
                                        <div className="w-6 h-6 flex justify-center items-stretch" data-cid="n347">
                                          <div className="block" data-cid="n348">
                                            <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6" data-cid="n349">
                                              <Icon cid={"n350"} />
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
                  </div>
                  <div className="hidden relative" data-cid="n351" aria-labelledby="w-tabs-0-data-w-tab-1" id="w-tabs-0-data-w-pane-1" role="tabpanel">
                    <div className="w-full block max-w-150" data-cid="n352">
                      <div className="block relative rounded-xl overflow-clip bg-surface" data-cid="n353">
                        <div className="w-full h-full block absolute top-0 left-0" data-cid="n354">
                          <a className="w-full h-full block absolute top-0 left-0 z-4 max-w-full cursor-pointer" data-cid="n355" aria-label="" href="/case-study/reid-health" />
                        </div>
                        <div className="h-full flex rounded-xl flex-col" data-cid="n356">
                          <div className="flex min-w-0 pt-9 pb-[157.5px] px-9 rounded-xl justify-end items-start" data-cid="n357">
                            <div className="w-3/5 block min-w-0 aspect-square" data-cid="n358">
                              <Icon2 cid={"n359"} />
                            </div>
                          </div>
                          <div className="h-full flex min-w-0 mt-auto pb-9 px-9 flex-col gap-9" data-cid="n360">
                            <div className="flex min-w-0 flex-col gap-[21.9px]" data-cid="n361">
                              <div className="flex min-w-0 flex-col gap-[17.9px]" data-cid="n362">
                                <h3 className="flow-root min-w-0 text-xl font-semibold leading-6.5 before:content-[''] before:table before:-mb-1.5 max-md:before:-mb-1 after:content-[''] after:table after:-mb-1.5 max-md:after:-mb-1" data-cid="n363">
                                  Menos retrabalho na revisão
                                </h3>
                              </div>
                              <div className="block min-w-0" data-cid="n364">
                                <div className="flow-root text-muted-foreground text-xl font-medium leading-6.5 before:content-[''] before:table before:-mb-1.5 max-md:before:-mb-1 after:content-[''] after:table after:-mb-1.5 max-md:after:-mb-1" data-cid="n365">
                                  Máscaras, frases prontas e revisão antes do envio reduzem texto fora do padrão e laudo refeito.
                                </div>
                              </div>
                            </div>
                            <div className="block min-w-0 mt-auto justify-between items-center" data-cid="n366">
                              <div className="block" data-cid="n367">
                                <div className="block" data-cid="n368">
                                  <div className="flex justify-between items-center" data-cid="n369">
                                    <div className="flex min-w-0 justify-start items-center gap-2.5" data-cid="n370">
                                      <div className="w-3.5 h-3.5 block min-w-0 rounded-full aspect-square bg-primary" data-cid="n371" />
                                      <div className="flex min-w-0 justify-start items-center gap-2" data-cid="n372">
                                        <div className="flow-root min-w-0 text-muted-foreground font-medium leading-[0.8125rem] uppercase before:content-[''] before:table before:-mb-[0.0375rem] max-md:before:-mb-[0.1625rem] after:content-[''] after:table after:-mb-[0.05rem] max-md:after:-mb-[0.175rem]" data-cid="n373">
                                          Rotina da clínica
                                        </div>
                                      </div>
                                    </div>
                                    <div className="block min-w-0" data-cid="n374">
                                      <div className="w-11 h-11 border border-solid border-border flex rounded-lg justify-center items-center bg-border" data-cid="n375">
                                        <div className="w-6 h-6 flex min-w-0 justify-center items-stretch" data-cid="n376">
                                          <div className="block min-w-0" data-cid="n377">
                                            <div className="block before:content-['_'] before:table before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:text-foreground after:text-base after:leading-6" data-cid="n378">
                                              <Icon3 cid={"n379"} />
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
                  </div>
                  <div className="hidden relative" data-cid="n380" aria-labelledby="w-tabs-0-data-w-tab-2" id="w-tabs-0-data-w-pane-2" role="tabpanel">
                    <div className="w-full block max-w-150" data-cid="n381">
                      <div className="block relative rounded-xl overflow-clip bg-surface" data-cid="n382">
                        <div className="w-full h-full block absolute top-0 left-0" data-cid="n383">
                          <a className="w-full h-full block absolute top-0 left-0 z-4 max-w-full cursor-pointer" data-cid="n384" aria-label="" href="/blog/riverside-data" />
                        </div>
                        <div className="h-full flex rounded-xl flex-col" data-cid="n385">
                          <div className="flex min-w-0 pt-9 pb-[157.5px] px-9 rounded-xl justify-end items-start" data-cid="n386">
                            <div className="w-3/5 block min-w-0 aspect-square" data-cid="n387">
                              <Icon4 cid={"n388"} />
                            </div>
                          </div>
                          <div className="h-full flex min-w-0 mt-auto pb-9 px-9 flex-col gap-9" data-cid="n389">
                            <div className="flex min-w-0 flex-col gap-[21.9px]" data-cid="n390">
                              <div className="flex min-w-0 flex-col gap-[17.9px]" data-cid="n391">
                                <h3 className="flow-root min-w-0 text-xl font-semibold leading-6.5 before:content-[''] before:table before:-mb-1.5 max-md:before:-mb-1 after:content-[''] after:table after:-mb-1.5 max-md:after:-mb-1" data-cid="n392">
                                  Mais exames entregues
                                </h3>
                              </div>
                              <div className="block min-w-0" data-cid="n393">
                                <div className="flow-root text-muted-foreground text-xl font-medium leading-6.5 before:content-[''] before:table before:-mb-1.5 max-md:before:-mb-1 after:content-[''] after:table after:-mb-1.5 max-md:after:-mb-1" data-cid="n394">
                                  Menos fila acumulada e menos digitação para a equipe entregar mais exames sem tirar o médico do controle.
                                </div>
                              </div>
                            </div>
                            <div className="block min-w-0 mt-auto justify-between items-center" data-cid="n395">
                              <div className="block" data-cid="n396">
                                <div className="block" data-cid="n397">
                                  <div className="flex justify-between items-center" data-cid="n398">
                                    <div className="flex min-w-0 justify-start items-center gap-2.5" data-cid="n399">
                                      <div className="w-3.5 h-3.5 block min-w-0 rounded-full aspect-square bg-primary" data-cid="n400" />
                                      <div className="flex min-w-0 justify-start items-center gap-2" data-cid="n401">
                                        <div className="flow-root min-w-0 text-muted-foreground font-medium leading-[0.8125rem] uppercase before:content-[''] before:table before:-mb-[0.0375rem] max-md:before:-mb-[0.1625rem] after:content-[''] after:table after:-mb-[0.05rem] max-md:after:-mb-[0.175rem]" data-cid="n402">
                                          Operação clínica
                                        </div>
                                      </div>
                                    </div>
                                    <div className="block min-w-0" data-cid="n403">
                                      <div className="w-11 h-11 border border-solid border-border flex rounded-lg justify-center items-center bg-border" data-cid="n404">
                                        <div className="w-6 h-6 flex min-w-0 justify-center items-stretch" data-cid="n405">
                                          <div className="block min-w-0" data-cid="n406">
                                            <div className="block before:content-['_'] before:table before:text-foreground before:text-base before:leading-6 after:content-['_'] after:table after:text-foreground after:text-base after:leading-6" data-cid="n407">
                                              <Icon3 cid={"n408"} />
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
                  </div>
                </div>
              </div>
            </div>
            <div className="block relative z-2 max-w-[47%] [align-self:start] col-start-1 col-end-2 row-start-1 row-end-2 max-md:max-w-full max-lg:order-[-9999] max-lg:col-start-[span_1] max-lg:col-end-[span_1] max-lg:row-start-[span_1] max-lg:row-end-[span_1]" data-cid="n409" id="w-node-_4fe86ae0-4a9a-5c97-cb39-8a4dfa90425a-7a3581b6">
              <div className="block" data-cid="n410">
                <div className="block" data-cid="n411">
                  <div className="flex flex-col gap-[51.5px] max-lg:gap-11 2xl:gap-15" data-cid="n412">
                    <div className="flex flex-col gap-7 max-lg:gap-6 2xl:gap-8" data-cid="n413">
                      <div className="h-[0.8rem] block text-primary max-md:h-2.5" data-cid="n414">
                        <div className="h-[0.8rem] flow-root text-lg leading-4.5 tracking-[0.36px] uppercase max-md:h-2.5 max-md:text-sm max-md:leading-3.5 max-md:tracking-[0.28px] before:content-[''] before:table before:w-0 before:h-0 before:mb-[-2.5px] max-md:before:-mb-0.5 after:content-[''] after:table after:w-0 after:h-0 after:mb-[-2.7px] max-md:after:mb-[-2.1px]" data-cid="n415">
                          Manifesto
                        </div>
                      </div>
                      <div className="block text-[2.5rem] leading-10 max-md:text-[1.8125rem] max-md:leading-[1.8125rem]" data-cid="n416" data-component="heading">
                        <span className="flex flex-col gap-4 max-md:gap-2" data-cid="n417">
                          <p className="flow-root text-[3.625rem] font-medium leading-14.5 tracking-[-1.74px] max-md:text-[1.625rem] max-md:leading-6.5 max-md:tracking-[-0.78px] before:content-[''] before:table before:w-0 before:h-0 before:mb-[-8.1px] max-md:before:-mb-[0.225rem] after:content-[''] after:table after:w-0 after:h-0 after:mb-[-8.7px] max-md:after:mb-[-3.9px]" data-cid="n418">
                            Mais exames.
                          </p>
                          <p className="flow-root text-muted-foreground text-[3.625rem] font-medium leading-14.5 tracking-[-1.74px] max-md:text-[1.625rem] max-md:leading-6.5 max-md:tracking-[-0.78px] before:content-[''] before:table before:w-0 before:h-0 before:mb-[-8.1px] max-md:before:-mb-[0.225rem] after:content-[''] after:table after:w-0 after:h-0 after:mb-[-8.7px] max-md:after:mb-[-3.9px]" data-cid="n419">
                            Menos digitação.
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[51.5px] max-lg:gap-11 2xl:gap-15" data-cid="n420">
                      <div className="block max-w-150 text-muted-foreground" data-cid="n421">
                        <p className="flow-root text-xl font-medium leading-6.5 max-md:text-sm max-md:leading-[1.125rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-1.5 max-md:before:-mb-1 after:content-[''] after:table after:w-0 after:h-0 after:-mb-1.5 max-md:after:-mb-1" data-cid="n422">
                          Você no controle. A Laudos.AI acelera o texto do laudo, padroniza a entrega e ajuda a clínica crescer sem bagunçar. O radiologista revisa, edita e assina.
                        </p>
                      </div>
                      <div className="h-[42.7px] flex gap-2.5 max-md:h-[2.625rem] max-md:flex-col max-lg:gap-2 2xl:gap-3" data-cid="n423">
                        <div className="h-[42.7px] block max-md:h-[2.625rem]" data-cid="n424">
                          <div className="h-10 border border-solid border-foreground inline-block relative min-w-45 rounded-sm text-background bg-foreground" data-cid="n425">
                            <div className="w-44.5 h-full block absolute top-0" data-cid="n426">
                              <a className="w-44.5 h-9.5 block absolute top-0 z-4 max-w-full cursor-pointer" data-cid="n427" data-component="link" aria-label="Ver produto" href="/produto" />
                            </div>
                            <div className="h-full flex relative py-[0.9rem] px-6 justify-center items-center gap-2 align-middle leading-4 text-center" data-cid="n428">
                              <div className="h-[0.7125rem] flow-root font-semibold max-md:h-2.5 max-md:text-sm max-md:leading-[1rem] before:content-[''] before:table before:w-0 before:h-0 before:-mb-0.5 max-md:before:-mb-[0.1875rem] after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.15rem] max-md:after:-mb-[0.2rem]" data-cid="n429" aria-hidden="true">
                                Ver produto
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
    </section>
  );
}
