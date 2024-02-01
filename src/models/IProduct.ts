// export interface IProduct {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: Category;
//   images: string[];
// }

// export interface Category {
//   id: number;
//   name: string;
//   image: string;
// }

export interface IProduct {
  id: number;
  title: string;
  sale: boolean;
  old_price?: number;
  price: number;
  description: string;
  category: string[];
  gender: "men" | "women" | "all";
  img: string[];
  tags: string[];
  currency: string;
}

export interface ICartProduct extends IProduct {
  size: string;
}

export interface ICartProductCounter {
  id: number;
  quantity: number;
  price: number;
}