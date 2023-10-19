import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineArrowRight, AiOutlineCamera } from "react-icons/ai";
import { MdOutlineTrackChanges } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import PaymentMethod from "./utils/PaymentMethod";
import Address from "./utils/Address";
import "./ProfileContent.scss";

const ProfileContent = ({ active }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    name: userInfo.name,
    email: userInfo.email,
    phoneNumber: "",
    zipCode: "",
    address1: "",
    address2: "",
  });

  const handleInputChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="content_container">
      {/* Profile */}
      {active === 1 && (
        <>
          <div className="profile_container">
            <div className="relative">
              <img src={userInfo.imageURL} alt="" />
              <div className="camera">
                <AiOutlineCamera style={{ background: "transparent" }} />
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="form_container">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="form_inputs">
                <div className="inputs">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="inputs">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    disabled
                    value={userInfo.email}
                  />
                </div>
              </div>
              <div className="form_inputs">
                <div className="inputs">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="inputs">
                  <label>Zip Code</label>
                  <input
                    type="number"
                    name="zipCode"
                    value={user.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form_inputs">
                <div className="inputs">
                  <label>Address 1</label>
                  <input
                    type="address"
                    name="address1"
                    value={user.address1}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="inputs">
                  <label>Address 2</label>
                  <input
                    type="address"
                    name="address2"
                    value={user.address2}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <button type="submit">Update Profile</button>
            </form>
          </div>
        </>
      )}

      {/* Orders */}

      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* Refund */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}

      {/* Track order */}

      {active === 5 && (
        <div style={{ width: "100%" }}>
          <TrackOrder />
        </div>
      )}

      {/* Payment Methods */}

      {active === 6 && (
        <div>
          <PaymentMethod />
        </div>
      )}

      {/* User Address */}

      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};
const AllOrders = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 250, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 220,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 220,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 220,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 220,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <button style={{ border: "none", cursor: "pointer" }}>
                <AiOutlineArrowRight size={20} />
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div
      style={{ paddingLeft: "20px", paddingTop: "2rem", background: "#eee" }}
    >
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const AllRefundOrders = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 250, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 220,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 220,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 220,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 220,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <button style={{ border: "none", cursor: "pointer" }}>
                <AiOutlineArrowRight size={20} />
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingTop: "2rem",
        background: "#eee",
      }}
    >
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};
const TrackOrder = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 250, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 220,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 220,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 220,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 220,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <button style={{ border: "none", cursor: "pointer" }}>
                <MdOutlineTrackChanges size={20} />
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingTop: "2rem",
        background: "#eee",
        width: "100%",
      }}
    >
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          autoHeight
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ProfileContent;
