import { useState } from "react";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false)
  const [open, setOpen] = useState(false)

  const d = data.name
  return (
    <div className="card_container">
      <div className="card_items"></div>
    </div>
  );
};

export default ProductCard;
