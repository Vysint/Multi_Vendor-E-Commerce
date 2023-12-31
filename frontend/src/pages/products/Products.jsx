import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productData } from "../../static/data";
import ProductCard from "../../components/utils/card/ProductCard";
import Header from "../../components/layout/header/Header";
import "./Products.scss";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d =
        productData && productData.filter((i) => i.category === categoryData);
      setData(d);
    }
  }, [categoryData]);

  return (
    <div>
      <Header activeHeading={3} />
      <div className="products_container">
        <div className="products">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        <div className="no_products">
          {data && data.length === 0 ? <h3>No Products Found!</h3> : null}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Products;
