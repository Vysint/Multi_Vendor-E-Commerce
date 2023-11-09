import Header from "../../components/layout/header/Header";
import BestDeals from "../../components/utils/bestDeals/BestDeals";
import Categories from "../../components/utils/categories/Categories";
import FeaturedProduct from "../../components/utils/featuredProduct/FeaturedProduct";
import Hero from "../../components/utils/hero/Hero";
import Sponsored from "../../components/utils/sponsored/Sponsored";
import Footer from '../../components/layout/footer/Footer'
const Home = () => {
  return (
    <div className="home">
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default Home;
