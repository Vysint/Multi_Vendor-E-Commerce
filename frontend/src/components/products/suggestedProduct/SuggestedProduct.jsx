import { useEffect, useState } from "react";
import { productData } from "../../../static/data";
import ProductCard from "../../utils/card/ProductCard";
import "./SuggestedProduct.scss";

const SuggestedProduct = ({ data }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const d =
      productData && productData.filter((i) => i.category === data.category);

    setProducts(d);
  }, [data.category]);

  return (
    <>
      {data && (
        <div className="suggested_container">
          <h2>Related Product</h2>
          <div className="suggested_item">
            {products &&
              products.map((i, index) => <ProductCard data={i} key={index} />)}
          </div>
        </div>
      )}
    </>
  );
};

export default SuggestedProduct;
