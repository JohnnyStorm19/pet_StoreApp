import { productPriceFormatter } from "../../utils/productPriceFormatter";
import { IProduct } from "../../models/IProduct";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { removeFromFavourites } from "../../store/products/productsSlice";

interface IFavouritesCardProps {
  product: IProduct;
}

const FavouritesCard = ({ product }: IFavouritesCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onItemClick = (productData: IProduct) => {
    navigate(`/product/${productData.id}`);
  };

  const handleRemoveFromFavourites = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(removeFromFavourites({id: product.id}));
  }

  return (
    <div
      key={product.id}
      className="cursor-pointer relative group"
      onClick={() => onItemClick(product)}
    >
      <div className="xl:group-hover:block xl:hidden absolute top-1 right-1 z-10 xl:bg-transparent bg-white rounded-full" onClick={handleRemoveFromFavourites}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <img
        key={product.img[0]}
        src={product.img[0]}
        alt=""
        className="w-full group-hover:opacity-60 transition-all duration-200"
        loading="lazy"
      />
      <h3 className="text-sm lg:text-base">{product.title}</h3>
      <div className="flex gap-4 items-center">
        {product.sale && product.old_price && (
          <span className="text-gray-500 line-through text-sm">
            {productPriceFormatter(product.old_price)} {product.currency}
          </span>
        )}
        <span className="lg:text-base">
          {productPriceFormatter(product.price)} {product.currency}
        </span>
      </div>
    </div>
  );
};

export default FavouritesCard;
