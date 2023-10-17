import { useState } from "react";
import "./ProductDetailsInfo.scss";
import { Link } from "react-router-dom";

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="details_container">
      <div className="details_items">
        <div className="details_item">
          <div className="relative">
            <h5 onClick={() => setActive(1)}>Products Details</h5>
            {active === 1 ? <div className="active_indicator" /> : null}
          </div>
          <div className="relative">
            <h5 onClick={() => setActive(2)}>Products Reviews</h5>
            {active === 2 ? <div className="active_indicator" /> : null}
          </div>
          <div className="relative">
            <h5 onClick={() => setActive(3)}>Seller Information</h5>
            {active === 3 && <div className="active_indicator" />}
          </div>
        </div>
        {active === 1 && (
          <>
            <p>
              Product details are a crucial part of any eCommerce website or
              online marketplace. These details help the potential customers to
              make an informed decision about the product they are interested in
              buying. A well-written product description can also be a powerful
              marketing tool that can help to increase sales. Product details
              typically include information about the product&apos;s features,
              specifications, dimensions, weight, materials, and other relevant
              information that can help language, and be honest and transparent
              about the product&apos;s features and limitations.
            </p>
            <p>
              Customers to understand the product better. The product details
              section should also include high-quality images and videos of the
              product, as well as customer reviews and ratings. When writing
              product details, it is essential to keep the target audience in
              mind. The language used should be clear and easy to understand,
              and technical terms should be explained in simple language. The
              tone of the product details should be persuasive, highlighting the
              unique features of the Product.
            </p>
          </>
        )}
        {active === 2 && (
          <div className="reviews">
            <p>No Reviews yet!</p>
          </div>
        )}

        {active === 3 && (
          <div className="seller_info">
            <div className="seller_item_1">
              <div className="seller_details">
                <img
                  src={data.shop.shop_avatar.url}
                  alt=""
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <div>
                  <h3>{data.shop.name}</h3>
                  <h5>({data.shop.ratings}) Ratings</h5>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dolor qui voluptates perspiciatis id labore omnis. Doloremque
                temporibus maiores alias repudiandae possimus aliquam quod
                itaque harum ea veniam. Et, ea aliquam. Quo ullam illo vel!
                Quaerat itaque ea dicta modi officiis a. Animi repellat
                accusantium explicabo harum velit accusamus corrupti.
              </p>
            </div>
            <div className="seller_item_2">
              <div className="seller_text">
                <h5>
                  Joined on: <span>24 May,2023</span>
                </h5>
                <h5>
                  Total Products: <span>1,223</span>
                </h5>
                <h5>
                  Total Reviews : <span>324</span>
                </h5>
                <Link to="/">
                  <button>Visit Shop</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
