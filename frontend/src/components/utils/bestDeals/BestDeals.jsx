import { useEffect, useState } from "react";
import { productData } from "../../../static/data";
import ProductCard from "../card/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = d.slice(0, 5);
    setData(firstFive);
  }, []);
  return (
    <div className="bestdeals_container">
      <div className="bestdeal_items">
        <h1>Best Deals</h1>
        <div className="bestdeals_item">
          {data && data.length !== 0 && (
            <>
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
