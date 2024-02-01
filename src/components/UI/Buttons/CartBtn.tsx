import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getSpecificStore } from "../../../utils/getSpecificStore";
import { addToCart, removeFromCart } from "../../../store/products/productsSlice";

interface ICartBtnProps {
  size: string;
}

const CartBtn = ({size}: ICartBtnProps) => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.products.cart);
  const [inCart, setInCart] = useState(getSpecificStore(cart, Number(id)));

  const handleCartClick = () => {
    setInCart(!inCart);

    if (!inCart) {
      dispatch(addToCart({id: Number(id), size}));
      
    } else {
      dispatch(removeFromCart({id: Number(id)}))
    }
  }

  return (
    <>
    <button type="button" className="button-primary" onClick={handleCartClick}>
        {inCart ? 'Убрать из корзины' : 'Добавить в корзину'}
    </button>
    </>
  );
};

export default CartBtn;
