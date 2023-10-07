import { useState } from "react";
import Header from "../../components/layout/Header";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import "./Faq.scss";

const Faq = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <div className="faq_container">
        <Faqs />
      </div>
    </div>
  );
};

const Faqs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };
  return (
    <div className="faqs">
      <h2>FAQ</h2>
      <div className="faqs_items">
        {/* Single FAQ */}
        <div className="faqs_item">
          <button onClick={() => toggleTab(1)}>
            <span>How do I track my order?</span>
            <span>
              {activeTab === 1 ? (
                <AiOutlineClose size={25} />
              ) : (
                <IoIosArrowForward size={25} />
              )}
            </span>
          </button>
          {activeTab === 1 && (
            <div>
              <p>
                You can track your order by clicking the tracking link in your
                shipping confirmation email, or by logging into your account on
                our website and viewing the order details.
              </p>
            </div>
          )}
        </div>
        <div className="faqs_item">
          <button onClick={() => toggleTab(2)}>
            <span>What is your return policy?</span>
            {activeTab === 2 ? (
              <AiOutlineClose size={25} />
            ) : (
              <IoIosArrowForward size={25} />
            )}
          </button>
          {activeTab === 2 && (
            <div>
              <p>
                If you&apos;re not satisfied with your purchase, we accept
                returns within 30 days of delivery. to initiate a return, please
                email us at support@mycommercestore.com with your order number
                and a brief explanation of why you&apos;re returning the item.
              </p>
            </div>
          )}
        </div>
        <div className="faqs_item">
          <button onClick={() => toggleTab(3)}>
            <span>How do I contact customer support?</span>
            {activeTab === 3 ? (
              <AiOutlineClose size={25} />
            ) : (
              <IoIosArrowForward size={25} />
            )}
          </button>
          {activeTab === 3 && (
            <div>
              <p>
                You can contact our customer support team by emailing us at
                support@myecommercestore.com, or by calling us at (+254) 723 000
                000 between the hours of 9am and 5pm EST, Monday through Friday.
              </p>
            </div>
          )}
        </div>
        <div className="faqs_item">
          <button onClick={() => toggleTab(4)}>
            <span>Can I change or cancel my order?</span>
            {activeTab === 4 ? (
              <AiOutlineClose size={25} />
            ) : (
              <IoIosArrowForward size={25} />
            )}
          </button>
          {activeTab === 4 && (
            <div>
              <p>
                Unfortunately, once an order has been placed, we are not able to
                make changes or cancellations. If you no longer want the items
                you&apos;ve ordered, you can return them for a refund within 30
                days of delivery.
              </p>
            </div>
          )}
        </div>
        <div className="faqs_item">
          <button onClick={() => toggleTab(5)}>
            <span>Do you offer international shipping?</span>
            {activeTab === 5 ? (
              <AiOutlineClose size={25} />
            ) : (
              <IoIosArrowForward size={25} />
            )}
          </button>
          {activeTab === 5 && (
            <div>
              <p>Currently, we only offer shipping within Africa.</p>
            </div>
          )}
        </div>
        <div className="faqs_item">
          <button onClick={() => toggleTab(6)}>
            <span>What payment methods do you accept?</span>
            {activeTab === 6 ? (
              <AiOutlineClose size={25} />
            ) : (
              <IoIosArrowForward size={25} />
            )}
          </button>
          {activeTab === 6 && (
            <div>
              <p>
                We accept visa,mastercard,paypal payment method also we have
                cash on delivery system.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
