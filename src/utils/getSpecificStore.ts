import { ICartProduct, IProduct } from "../models/IProduct";

export const getSpecificStore = (array: IProduct[] | ICartProduct[], id: number) => {
    return array.find((item) => item.id === id) === undefined ? false : true;
};