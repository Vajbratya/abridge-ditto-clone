import ProductCard from "../components/product-card";
import { ProductCard_cids } from "../_cids";
import { ProductCard_styles } from "../_styles";
import { products as productsContent } from "../content";
/** Product Grid section. */
export default function ProductGridSection({ products = productsContent } = {}) {
  return (
    <section className="block relative py-[6.5375rem] px-[4.9375rem] max-md:py-20 max-md:px-6 md:max-lg:py-21 md:max-lg:px-8 2xl:py-32 2xl:px-24" data-cid="n584">
      <div className="block max-w-400 mx-auto" data-cid="n585">
        <div className="grid gap-[67.3px] grid-rows-[62.4062px_276.375px] [grid-auto-columns:1fr] grid-cols-1 max-lg:gap-14 max-md:grid-rows-[38.2031px_260.219px] md:max-lg:grid-rows-[62.4062px_268.969px] 2xl:gap-20 2xl:grid-rows-[62.4062px_327.094px]" data-cid="n586">
          <div className="block" data-cid="n587">
            <h2 className="h-full flow-root text-[2rem] font-semibold leading-[2.5rem] max-md:text-xl max-md:leading-[inherit] before:content-[''] before:table before:w-0 before:h-0 before:mb-[-8.3px] max-md:before:-mb-[0.3rem] after:content-[''] after:table after:w-0 after:h-0 after:-mb-[0.5375rem] max-md:after:-mb-[0.3125rem]" data-cid="n588" data-component="heading">
              <span className="block" data-cid="n589">
                Templates por modalidade
              </span>
              {" prontos para a rotina"}
            </h2>
          </div>
          <div className="h-[17.275rem] block max-md:h-[16.2625rem] max-md:-mx-6 max-lg:overflow-clip md:max-lg:h-[16.8125rem] md:max-lg:-mx-8 2xl:h-[20.4375rem]" data-cid="n590">
            <div className="w-full h-full grid gap-[21.9px] grid-rows-[276.4px] [grid-auto-columns:1fr] overflow-auto grid-cols-4 max-lg:flex max-md:px-6 max-lg:gap-9 max-lg:grid-cols-[1fr_1fr_1fr_1fr] max-lg:grid-rows-[auto] max-lg:overflow-y-scroll md:max-lg:px-8 2xl:gap-6 2xl:grid-rows-[327px]" data-cid="n591">
              {products.map((d, i) => <ProductCard key={i} d={d} cids={ProductCard_cids[i]} styles={ProductCard_styles[i]} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
