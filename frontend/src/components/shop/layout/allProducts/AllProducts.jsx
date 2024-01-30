import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../../features/api/productApiSlice";
import { SpinnerImg } from "../../../loader/Loader";
import { AiOutlineEye } from "react-icons/ai";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import ReactPaginate from "react-paginate";
import "./AllProducts.scss";
import { toast } from "react-toastify";

const AllProducts = () => {
  const [loading, setLoading] = useState(false);

  const { data, isLoading, isError } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const shortenText = (text, n) => {
    if (text.length > n) {
      const textShortened = text.substring(0, n).concat("...");
      return textShortened;
    }
    return text;
  };

  const productDelete = async (id) => {
    setLoading(true);
    try {
      const res = await deleteProduct(id).unwrap();
      toast.success(res?.message);
      window.location.reload();
    } catch (err) {
      toast.error(err);
      setLoading(false);
    }
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Product",
      message: "Are you sure you want to delete this product?",
      buttons: [
        {
          label: "Delete",
          onClick: () => productDelete(id),
        },
        {
          label: "Cancel",
        },
      ],
    });
  };

  // Pagination
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data && data.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(data && data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % (data && data.length);
    setItemOffset(newOffset);
  };

  // End Pagination
  return (
    <div className="all_products">
      {(isLoading || loading) && <SpinnerImg />}
      <div className="table">
        {!isLoading && data && data.length === 0 ? (
          <p>--No products found, please add a product...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sold Out</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems &&
                currentItems.map((product, index) => {
                  const { _id, name, discountPrice, quantity, sold_out } =
                    product;
                  const product_name = name.replace(/\s+/g, "-");

                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{shortenText(name, 22)}</td>
                      <td>
                        {"$"}
                        {discountPrice}
                      </td>
                      <td>{quantity}</td>
                      <td>{sold_out}</td>
                      <td className="icons">
                        <span>
                          <Link to={`/product/${product_name}`}>
                            <AiOutlineEye size={20} color={"purple"} />
                          </Link>
                        </span>
                        <span>
                          <Link to={`/edit-product/${_id}`}>
                            <FaEdit size={20} color={"#007bff"} />
                          </Link>
                        </span>
                        <span>
                          <FaTrashAlt
                            size={15}
                            color={"red"}
                            onClick={() => confirmDelete(_id)}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel=" Prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="activePage"
      />
    </div>
  );
};

export default AllProducts;
