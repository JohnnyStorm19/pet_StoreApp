interface ICtAOffersProps {
  title: string;
  type: "new" | "best-sellers" | "sale";
  id: string;
}

import itemsData from "../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";
import { IProduct } from "../../models/IProduct";

const CtAOffers = ({ title, type, id }: ICtAOffersProps) => {


  return (
    <div className="px-[30px] text-xl" id={id}>
      <header
        className="uppercase mb-[30px] text-center flex items-center"

      >
        <div className="w-[48%] h-[2px] bg-black"></div>
        <h1 className="max-[320px]:w-[80%] w-[52%] text-left px-1">
          {title}
        </h1>
      </header>
      <div className="grid grid-cols-cTaOffer grid-flow-col auto-cols-[minmax(250px,300px)] pb-6 gap-3 overflow-x-auto p-1 snap-x">
        {itemsData.map((item) => {
          const tagType = item.tags.find((string) => type === string);
          if (tagType === type) {
            return <ProductCard key={item.id} product={item as IProduct} />;
          }
        })}
      </div>
    </div>
  );
};

export default CtAOffers;
