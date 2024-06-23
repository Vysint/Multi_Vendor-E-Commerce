import DashboardHeader from "../../../components/shop/layout/dashboardHeader/DashboardHeader";
import DashboardSidebar from "../../../components/shop/layout/dashboardSidebar/DashboardSidebar";
import AllCoupons from "../../../components/shop/layout/allCoupons/AllCoupons";

const ShopAllCoupons = () => {
  return (
    <>
      <DashboardHeader />
      <div className="shop_create_product_page">
        <div className="shop_create_product_sidebar">
          <DashboardSidebar active={3} />
        </div>
        <div className="shop_create_product">
          <AllCoupons />
        </div>
      </div>
    </>
  );
};

export default ShopAllCoupons;
