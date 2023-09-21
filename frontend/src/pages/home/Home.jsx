import BestDeals from "../../components/utils/bestDeals/BestDeals";
import Categories from "../../components/utils/categories/Categories";
import Hero from "../../components/utils/hero/Hero";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  );
};

export default Home;
