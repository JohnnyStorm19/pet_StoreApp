import { useState } from "react";
import { IProduct } from "../../models/IProduct";
import { productPriceFormatter } from "../../utils/productPriceFormatter";
import FavouriteBtn from "../UI/Buttons/FavouriteBtn";
import CartBtn from "../UI/Buttons/CartBtn";

interface IProductInfoProps {
  product: IProduct;
}

const ProductInfo = ({ product }: IProductInfoProps) => {
  const [collapsibles, setCollapsibles] = useState({
    description: false,
    careAndComposition: false,
    deliveryAndPayment: false,
  });
  const [size, setSize] = useState("S");

  const onCollapsibleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;
    if (name === "description-btn") {
      setCollapsibles({
        ...collapsibles,
        description: !collapsibles.description,
      });
    } else if (name === "care-btn") {
      setCollapsibles({
        ...collapsibles,
        careAndComposition: !collapsibles.careAndComposition,
      });
    } else if (name === "delivery-btn") {
      setCollapsibles({
        ...collapsibles,
        deliveryAndPayment: !collapsibles.deliveryAndPayment,
      });
    }
  };

  const handleSizeClick = (e: React.SyntheticEvent<HTMLSpanElement>) => {
    const currentSize = e.currentTarget.getAttribute("data-size");
    currentSize && setSize(currentSize);
  };

  return (
    <div className="flex flex-col gap-7 lg:text-xl text-lg lg:pt-20 pt-5 uppercase">
      <header className="flex lg:justify-start justify-center lg:gap-11 gap-x-10 gap-y-2 flex-wrap items-center flex-1">
        <h3 className="font-neue-bold text-xl">{product.title}</h3>
        <div className="flex gap-7">
          {product.old_price && <span className="text-gray-500 line-through">{productPriceFormatter(product.old_price)} {product.currency}</span>}
          <span>{productPriceFormatter(product.price)} {product.currency}</span>
        </div>
        <FavouriteBtn />
      </header>
      {!product.category.includes('accessories') && (
        <div className="flex gap-5 lg:justify-start justify-center">
          <h3>Размер</h3>
          <div className="flex gap-2">
            <span
              data-size="S"
              className={`${size === "S" && "underline"} cursor-pointer`}
              onClick={handleSizeClick}
            >
              S
            </span>
            <span
              data-size="M"
              className={`${size === "M" && "underline"} cursor-pointer`}
              onClick={handleSizeClick}
            >
              M
            </span>
            <span
              data-size="L"
              className={`${size === "L" && "underline"} cursor-pointer`}
              onClick={handleSizeClick}
            >
              L
            </span>
          </div>
        </div>
      )}
      <CartBtn size={size} />
      <div className="[&_button]:uppercase flex flex-col gap-7 ">
        <div>
          <button
            type="button"
            name="description-btn"
            onClick={onCollapsibleClick}
            className={`${collapsibles.description && "underline"}`}
          >
            Описание товара
          </button>
          <div className={`${!collapsibles.description ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100' } productInfoCollapsed`}>
            <p className="productInfoCollapsedText">{product.description}</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            name="care-btn"
            onClick={onCollapsibleClick}
            className={`${collapsibles.careAndComposition && "underline"}`}
          >
            Состав и уход
          </button>
          <div
            className={`${!collapsibles.careAndComposition ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100' } productInfoCollapsed`}
          >
            <p className="productInfoCollapsedText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              repellat cumque aperiam cupiditate maiores quidem illo nulla
              ducimus ut et vitae est modi, quibusdam illum eaque.
            </p>
          </div>
        </div>
        <div>
          <button
            type="button"
            name="delivery-btn"
            onClick={onCollapsibleClick}
            className={`${collapsibles.deliveryAndPayment && "underline"}`}
          >
            Доставка и оплата
          </button>
          <div
            className={`${!collapsibles.deliveryAndPayment ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100' } productInfoCollapsed`}
          >
            <p className="productInfoCollapsedText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              repellat cumque aperiam cupiditate maiores quidem illo nulla
              ducimus ut et vitae est modi, quibusdam illum eaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
