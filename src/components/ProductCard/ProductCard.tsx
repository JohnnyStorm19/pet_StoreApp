import { productPriceFormatter } from "../../utils/productPriceFormatter";
import { IProduct } from "../../models/IProduct";
import { useNavigate } from "react-router-dom";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const navigate = useNavigate();

  const onItemClick = (productData: IProduct) => {
    navigate(`/product/${productData.id}`);
  };

  return (
    <div
      key={product.id}
      className="cursor-pointer snap-center"
      onClick={() => onItemClick(product)}
    >
      <img
        key={product.img[0]}
        src={product.img[0]}
        alt=""
        className="hover:outline"
        loading="lazy"
      />
      <h3 className="text-sm lg:text-base">{product.title}</h3>
      <div className="flex gap-4 items-center">
        {product.sale && product.old_price && (
          <span className="text-gray-500 line-through text-sm">
            {productPriceFormatter(product.old_price)} {product.currency}
          </span>
        )}
        <span className="lg:text-base text-sm">
          {productPriceFormatter(product.price)} {product.currency}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
