import Filter from "../components/Filter/Filter";
import { useEffect, useState } from "react";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard/ProductCard";
import { IProduct } from "../models/IProduct";

const CataloguePage = () => {
  const products = productsData as IProduct[];

  const [gender, setGender] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const handleFilterClick = (e: React.SyntheticEvent<HTMLSpanElement>) => {
    const clickedGender = e.currentTarget.getAttribute("data-gender");
    const clickedCategory = e.currentTarget.getAttribute("data-category");

    if (clickedGender) {
      clickedGender === gender ? setGender("") : setGender(clickedGender);
    }

    if (clickedCategory) {
      if (categories.includes(clickedCategory)) {
        setCategories(
          categories.filter((category) => category != clickedCategory)
        );
        return;
      }

      const uniqueCategories = Array.from(
        new Set([...categories, clickedCategory])
      );
      setCategories(uniqueCategories);
    }
  };

  useEffect(() => {
    const filteredByGender: IProduct[] = [];

    if (gender.length === 0) {
      setFilteredProducts(products);
    } else {
      products.forEach((product) => {
        if (product.gender === gender || product.gender === "all") {
          filteredByGender.push(product);
        }
      });
    }

    if (!categories.length) {
      !filteredByGender.length
        ? setFilteredProducts(products)
        : setFilteredProducts(filteredByGender);
      return;
    }
    const filteredByCategories: IProduct[] = [];

    if (!filteredByGender.length) {
      products.forEach((product) => {
        categories.forEach((c) => {
          if (product.category.includes(c)) {
            filteredByCategories.push(product);
          }
        });
      });
    } else {
      filteredByGender.forEach((product) => {
        categories.forEach((c) => {
          if (product.category.includes(c)) {
            filteredByCategories.push(product);
          }
        });
      });
    }

    setFilteredProducts(filteredByCategories);
  }, [gender, products, categories]);

  return (
    <div>
      <Filter
        handleFilters={handleFilterClick}
        activeGender={gender}
        activeCategories={categories}
      />
      <div className="grid lg:grid-cols-categoryLg grid-cols-categoryDefault gap-x-[30px] gap-y-[50px] px-[30px]">
        {filteredProducts.length ? (
          <>
            {filteredProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </>
        ) : (
          <>
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default CataloguePage;
