import { useParams } from "react-router-dom";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import ProductDetail from "../../components/products/ProductDetail";
import { productData } from "../../static/data";
import SuggestedProduct from "../../components/products/suggestedProduct/SuggestedProduct";

const ProductDetailsPage = () => {
  const { name } = useParams();

  const productName = name.replace(/-/g, " ");

  const data = productData.find((i) => i.name === productName);

  return (
    <>
      <Header />
      <ProductDetail data={data} />
      <SuggestedProduct data={data} />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
