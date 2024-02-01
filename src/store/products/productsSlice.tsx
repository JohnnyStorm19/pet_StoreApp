import { ICartProduct, ICartProductCounter, IProduct } from "../../models/IProduct";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import products from '../../data/products.json';

interface InitialState {
    products: IProduct[];
    cart: ICartProduct[];
    favourites: IProduct[];
    cartProductCounter: ICartProductCounter[];
}
interface IAddToCardPayloadAction {
    id: number;
    size: string;
}
interface ICartProductCounterQuantity {
    id: number;
}

const initialState: InitialState = {
    products: products as IProduct[],
    cart: [],
    favourites: [],
    cartProductCounter: []
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToFavourites:(state, action) => {
            const product = state.products.find(product => product.id === action.payload.id)
            if (product) {
                state.favourites.push(product);
            }
        },
        removeFromFavourites:(state, action) => {
            state.favourites = state.favourites.filter(product => product.id != action.payload.id);
        },
        addToCart:(state, action:PayloadAction<IAddToCardPayloadAction>) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product) {
                const cartProduct = {...product, size: action.payload.size};
                state.cart.push(cartProduct);

                state.cartProductCounter.push({price: product.price, quantity: 1, id: product.id})
            }
        },
        removeFromCart:(state, action) => {
            state.cart = state.cart.filter(product => product.id != action.payload.id);

            state.cartProductCounter = state.cartProductCounter.filter(product => product.id != action.payload.id);
        },
        incrementProductQuantity:(state, action:PayloadAction<ICartProductCounterQuantity>) => {
            const id = action.payload.id;
            const productCounter = state.cartProductCounter.find(counter => counter.id == id);
            if (productCounter) {
                productCounter.quantity += 1;
            }
        },
        decrementProductQuantity:(state, action:PayloadAction<ICartProductCounterQuantity>) => {
            const id = action.payload.id;
            const productCounter = state.cartProductCounter.find(counter => counter.id == id);
            if (productCounter && productCounter.quantity > 1) {
                productCounter.quantity -= 1;
            }
        }
    }
})

export const {addToCart, addToFavourites, removeFromCart, removeFromFavourites, incrementProductQuantity, decrementProductQuantity} = productsSlice.actions;
export default productsSlice.reducer;