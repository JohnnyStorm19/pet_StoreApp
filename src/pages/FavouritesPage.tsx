import FavouritesCard from "../components/FavouritesCard/FavouritesCard";
import { useAppSelector } from "../store/hooks";

const FavouritesPage = () => {
  const favouriteProducts = useAppSelector(
    (state) => state.products.favourites
  );

  return (
    <div>
      <div className="px-[30px] pt-[72px] pb-[30px]">
        <h1 className="font-neue-bold text-4xl text-center my-4 uppercase">Избранное</h1>
        {!favouriteProducts.length && (
          <h1 className="text-center text-xl text-gray-400">
            Вы еще ничего не добавили
          </h1>
        )}
          <>
            <span className="block mb-3">У вас в избранном товаров: {favouriteProducts.length}</span>
            <div className="grid lg:grid-cols-favourites grid-cols-favouritesMobile justify-left gap-4 lg:min-h-60 min-h-36">
              {favouriteProducts.length > 0 && (
                favouriteProducts.map((product) => (
                  <FavouritesCard key={product.id} product={product} />
                ))
            )}
            </div>
          </>
      </div>
    </div>
  );
};

export default FavouritesPage;
