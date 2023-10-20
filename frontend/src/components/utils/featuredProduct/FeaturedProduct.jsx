import { productData } from "../../../static/data";
import ProductCard from "../card/ProductCard";
import "./FeaturedProduct.scss";

const FeaturedProduct = () => {
  return (
    <div className="featured_container">
      <h1>Featured Products</h1>
      <div className="featured_item">
        {productData.map((i, index) => (
          <ProductCard data={i} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
