import { ICartProduct } from "../../models/IProduct";
import { productPriceFormatter } from "../../utils/productPriceFormatter";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  decrementProductQuantity,
  incrementProductQuantity,
  removeFromCart,
} from "../../store/products/productsSlice";

interface ICartItemProps {
  productData: ICartProduct;
}

const CartItem = ({ productData }: ICartItemProps) => {
  const dispatch = useAppDispatch();
  const cartProductCounter = useAppSelector(
    (state) => state.products.cartProductCounter
  );
  const singleCounter = cartProductCounter.find(
    (count) => count.id === productData.id
  );
  const itemCount = singleCounter && singleCounter.quantity;

  const removeBtnHandler = () => {
    dispatch(removeFromCart({id: productData.id}));
  }
  return (
    <div className="relative flex md:flex-row flex-col gap-3 outline outline-1 outline-[#eaeaea] ">
      <img src={productData.img[0]} alt="" className="imageOnPage" loading="lazy" />
      <div className="py-4 w-full flex flex-col">
        <header className="flex justify-between">
          <h3 className="uppercase">{productData.title}</h3>
          <button className="" onClick={removeBtnHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
            clipRule="evenodd"
          />
        </svg>
          </button>
        </header>
        <div className="text-[#999]">Размер: {productData.size}</div>
        <div className="flex gap-3 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 select-none active:scale-90"
            onClick={() =>
              dispatch(decrementProductQuantity({ id: productData.id }))
            }
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 select-none active:scale-90"
            onClick={() =>
              dispatch(incrementProductQuantity({ id: productData.id }))
            }
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <span>
            {productPriceFormatter(productData.price)} {productData.currency} x{" "}
            {itemCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
