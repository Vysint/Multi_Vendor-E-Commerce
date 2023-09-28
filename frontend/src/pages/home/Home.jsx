import BestDeals from "../../components/utils/bestDeals/BestDeals";
import Categories from "../../components/utils/categories/Categories";
import Events from "../../components/utils/events/Events";
import FeaturedProduct from "../../components/utils/featuredProduct/FeaturedProduct";
import Hero from "../../components/utils/hero/Hero";
import Sponsored from "../../components/utils/sponsored/Sponsored";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
    </div>
  );
};

export default Home;
