import CartItem from "../components/CartItem/CartItem";
import { useAppSelector } from "../store/hooks";
import { productPriceFormatter } from "../utils/productPriceFormatter";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.products.cart);
  const productsCounter = useAppSelector((state) => state.products.cartProductCounter);
  const overall = productsCounter.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0)

  return (
    <>
      <div className="px-[30px] pt-[72px] pb-[30px]">
        <h1 className="text-4xl font-neue-bold text-center my-4 uppercase">
          Оформление заказа
        </h1>
        {cartItems.length < 1 && (
          <h1 className="text-center text-xl text-gray-400">
            Ваша корзина пуста
          </h1>
        )}
        <div className="grid grid-cols-cartItems gap-y-4 mb-4 lg:min-h-60 min-h-36">
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <CartItem key={item.id} productData={item} />
            ))}
        </div>
        {cartItems.length > 0 && (
          <div className="text-right text-xl font-neue-bold uppercase">
            <h1>К оплате: {productPriceFormatter(overall)}</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
