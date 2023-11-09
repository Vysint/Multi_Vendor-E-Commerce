import { productData } from "../../../static/data";
import ProductCard from "../card/ProductCard";
import "./BestDeals.scss";

const BestDeals = () => {
  const items = productData.sort((a, b) => b.total_sell - a.total_sell);

  const data = items.slice(0, 5);

  return (
    <div className="bestdeals_container">
      <h1>Best Deals</h1>
      <div className="bestdeals_item">
        {data.length > 0 && (
          <>
            {data.map((i, index) => (
              <ProductCard data={i} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BestDeals;
