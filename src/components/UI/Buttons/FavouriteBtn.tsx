import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addToFavourites, removeFromFavourites } from "../../../store/products/productsSlice";
import { getSpecificStore } from "../../../utils/getSpecificStore";

const FavouriteBtn = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(state => state.products.favourites);
  const [isFavourite, setIsFavourite] = useState(getSpecificStore(favourites, Number(id)));

  const handleFavouritesClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    setIsFavourite(!isFavourite);

    if (e.currentTarget.name === "add") {
      dispatch(addToFavourites({id: Number(id)}))
    }

    if (e.currentTarget.name === "remove") {
      dispatch(removeFromFavourites({id: Number(id)}))
    }
  }


  return (
    <>
      {!isFavourite ? (
        <button name='add' className="button-add-to-favourites hover:bg-black hover:outline hover:outline-1 hover:text-white transition-colors duration-200" onClick={handleFavouritesClick}>Добавить в избранное</button>
      ) : (
        <button name='remove' className="button-remove-from-favourites hover:bg-white hover:outline hover:outline-1 hover:text-black transition-colors duration-200" onClick={handleFavouritesClick}>Удалить из избранного</button>
      )}

      {/* <button
        name={name}
        className={`${
          name === "add"
            ? "button-remove-from-favourites"
            : name === "remove"
            ? "button-add-to-favourites"
            : ""
        }`}
        onClick={onClickHandler}
      >
        {name === "add"
          ? "Удалить из избранного"
          : name === "remove"
          ? "Добавить в избранное"
          : ""}
      </button> */}
    </>
  );
};

export default FavouriteBtn;
