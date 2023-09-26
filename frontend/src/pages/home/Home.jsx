import BestDeals from "../../components/utils/bestDeals/BestDeals";
import Categories from "../../components/utils/categories/Categories";
import FeaturedProduct from "../../components/utils/featuredProduct/FeaturedProduct";
import Hero from "../../components/utils/hero/Hero";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <BestDeals />
      <FeaturedProduct />
    </div>
  );
};

export default Home;
