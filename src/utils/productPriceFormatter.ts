export const productPriceFormatter = (price: number) => {
  if (price > 999999) {
    return price / 1000000 >= 10
      ? `${String(price).slice(0, 2)}.${String(price).slice(2, 5)}.${String(
          price
        ).slice(5)}`
      : `${String(price).slice(0, 1)}.${String(price).slice(1, 4)}.${String(
          price
        ).slice(4)}`;
  }

  if (price > 99999) {
    return `${String(price).slice(0, 3)}.${String(price).slice(3)}`
  }

  if (price > 999) {
    return price / 1000 >= 10
      ? `${String(price).slice(0, 2)}.${String(price).slice(2)}`
      : `${String(price).slice(0, 1)}.${String(price).slice(1)}`;
  }
};
