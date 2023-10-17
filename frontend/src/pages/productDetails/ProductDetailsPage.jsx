import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import ProductDetail from "../../components/products/ProductDetail";
import { productData } from "../../static/data";

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);

  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  }, [productName]);
  return (
    <>
      <Header />
      <ProductDetail data={data} />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
