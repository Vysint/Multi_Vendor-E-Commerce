import { useNavigate } from "react-router-dom";
import "./Dropdown.scss";

const Dropdown = ({ categories, setDropdown }) => {
  const navigate = useNavigate();

  const submitHandler = (category) => {
    navigate(`/products?category=${category.title}`);
    setDropdown(false);
    // You can remove the window.location.reload() line if not needed.
  };

  return (
    <div className="dropdown_section">
      {categories &&
        categories.map((category, index) => (
          <div
            className="dropdown_items"
            key={index}
            onClick={() => submitHandler(category)}
          >
            <img
              src={category.image_Url}
              alt=""
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
            />
            <h3>{category.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
