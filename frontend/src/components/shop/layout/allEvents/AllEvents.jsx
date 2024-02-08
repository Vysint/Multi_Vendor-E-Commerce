import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import { SpinnerImg } from "../../../loader/Loader";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  useDeleteEventMutation,
  useGetEventsQuery,
} from "../../../../features/api/eventApiSlice";

const AllEvents = () => {
  const [loading, setLoading] = useState(false);

  const { data, isLoading } = useGetEventsQuery();
  const [deleteEvent] = useDeleteEventMutation();

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
      const res = await deleteEvent(id).unwrap();
      toast.success(res?.message, {
        onClose: () => {
          window.location.reload();
        },
        autoClose: 2000,
      });
    } catch (err) {
      toast.error(err);
      setLoading(false);
    }
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Event",
      message: "Are you sure you want to delete this event?",
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
          <p>--No events found, please add an event...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Sold Out</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems &&
                currentItems.map((event, index) => {
                  const { _id, name, discountPrice, stock, sold_out } = event;
                  const event_name = name.replace(/\s+/g, "-");

                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{shortenText(name, 22)}</td>
                      <td>
                        {"$"}
                        {discountPrice}
                      </td>
                      <td>{stock}</td>
                      <td>{sold_out}</td>
                      <td className="icons">
                        <span>
                          <Link to={`/product/${event_name}`}>
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

export default AllEvents;
