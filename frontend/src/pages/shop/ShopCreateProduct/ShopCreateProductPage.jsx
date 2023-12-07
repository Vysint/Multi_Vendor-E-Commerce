import CreateProduct from "../../../components/shop/layout/createProduct/CreateProduct";
import DashboardHeader from "../../../components/shop/layout/dashboardHeader/DashboardHeader";
import DashboardSidebar from "../../../components/shop/layout/dashboardSidebar/DashboardSidebar";
import "./ShopCreateProductPage.scss";

const ShopCreateProductPage = () => {
  return (
    <>
      <DashboardHeader />
      <div className="shop_create_product_page">
        <div className="shop_create_product_sidebar">
          <DashboardSidebar active={4} />
        </div>
        <div className="shop_create_product">
          <CreateProduct />
        </div>
      </div>
    </>
  );
};

export default ShopCreateProductPage;
