import ShopInfo from "../../components/shop/layout/shopInfo/ShopInfo";
import ShopProfileData from "../../components/shop/layout/shopProfileData/ShopProfileData";
import "./ShopHomePage.scss";

const ShopHomePage = () => {
  return (
    <div className="shop_home_page_container">
      <div className="home_page_container">
        <div className="home_page_info">
          <ShopInfo isOwner={true} />
        </div>
        <div className="shop_profile_data">
          <ShopProfileData isOwner={true} />
        </div>
      </div>
    </div>
  );
};

export default ShopHomePage;
