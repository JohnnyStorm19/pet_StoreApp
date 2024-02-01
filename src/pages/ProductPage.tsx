import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import ImgSlider from "../components/ImgSlider/ImgSlider";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import { IProduct } from "../models/IProduct";

const ProductPage = () => {
  const { id } = useParams();
  const product = productsData.find((item) => String(item.id) === id);

  return (
    <div>
      <div className="flex flex-wrap gap-[10%] py-20 px-8 lg:justify-start justify-center">
        <div className="mt-3">
          {product && <ImgSlider imgUrls={product.img} />}
        </div>
        <div className="lg:basis-2/5 basis-full flex-shrink-1 flex-grow-1">
          {product && <ProductInfo product={product as IProduct}/>}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
