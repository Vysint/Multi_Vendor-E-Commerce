import AllProducts from "../../../components/shop/layout/allProducts/AllProducts";
import DashboardHeader from "../../../components/shop/layout/dashboardHeader/DashboardHeader";
import DashboardSidebar from "../../../components/shop/layout/dashboardSidebar/DashboardSidebar";

const ShopAllProducts = () => {
  return (
    <>
      <DashboardHeader />
      <div className="shop_create_product_page">
        <div className="shop_create_product_sidebar">
          <DashboardSidebar active={3} />
        </div>
        <div className="shop_create_product">
          <AllProducts/>
        </div>
      </div>
    </>
  );
};

export default ShopAllProducts;
