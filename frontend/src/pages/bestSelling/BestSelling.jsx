import { useEffect, useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "../../components/utils/card/ProductCard";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

const BestSelling = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(d);
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <div className="products_container">
        <div className="products">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BestSelling;
