import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import "./Categories.scss";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="categories_branding">
      <div className="branding_container">
        <div className="branding_items">
          {brandingData.map((i, index) => (
            <div className="branding_item" key={index}>
              {i.icon}
              <div className="branding_text">
                <h3>{i.title}</h3>
                <p>{i.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="categories_container" id="categories">
        <h3>Shop by Category</h3>
        <div className="categories_items">
          {categoriesData.map((category) => {
            const handleSubmit = (category) => {
              navigate(`/products?category=${category.title}`);
            };
            return (
              <div
                className="categories_item"
                key={category.id}
                onClick={handleSubmit}
              >
                <img src={category.image_Url} alt="" />
                <p>{category.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
