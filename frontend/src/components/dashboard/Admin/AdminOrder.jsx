import React, { useState, useEffect } from "react";
import axios from "axios";

// import moment from "moment";
// import { Select } from "antd";
// const { Option } = Select;

const AdminOrder = () => {
  const [changeStatus, setCHangeStatus] = useState("");
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "delivered",
    "cancel",
  ]);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        "https://bookishbazaar-zf22.onrender.com/api/v1/all-orders",
        { withCredentials: true }
      );
      setOrders(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);
  console.log(orders);

  const handleChange = async (orderId, productIndex, event) => {
    const value = event.target.value;
    console.log(value);
    try {
      const { data } = await axios.put(
        `https://bookishbazaar-zf22.onrender.com/api/v1/order-status/${orderId}`,
        { status: value }
      );
      console.log(data);
      window.location.reload();
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full ">
      <div className="w-full  ">
        <h1 className="text-center">All Orders</h1>

        <table className="  md:table  ">
          <thead>
            <tr>
              <th className="text-sm tracking-wide p-1" scope="">
                #
              </th>
              <th className="text-sm tracking-wide p-1" scope="">
                Status
              </th>
              <th className="text-sm tracking-wide p-1" scope="">
                Buyer
              </th>
              <th className="text-sm tracking-wide p-1" scope="">
                Date
              </th>
              <th className="text-sm tracking-wide p-1" scope="">
                Payment
              </th>
              <th className="text-sm tracking-wide p-1" scope="">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody className=" border p-2">
            {orders?.map((item, index) => {
              return item.products.map((product, pro_index) => (
                <tr key={product._id || pro_index}>
                  <td>{index + 1 + pro_index}</td>
                  <td>
                    <select
                      onChange={(event) =>
                        handleChange(item._id, pro_index, event)
                      }
                      defaultValue={item.status}
                      className=" cursor-pointer outline-none bg-white text-black"
                    >
                      {status?.map((s, index) => {
                        return (
                          <option key={index} value={s.status}>
                            {s}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td className="text-sm tracking-wide overflow-auto px-1">
                    {item.buyer.name}
                  </td>
                  <td className="text-sm tracking-wide overflow-auto px-1">
                    {getFormattedDate(item.createdAt)}
                  </td>
                  <td className="text-sm tracking-wide overflow-auto px-1">
                    {item.payment.payment_status}
                  </td>
                  <td className="text-sm tracking-wide overflow-auto px-1">
                    {product.quantity}
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const getFormattedDate = (dateStr) => {
  const date = new Date(dateStr);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(2);

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

export default AdminOrder;

{
  /* <td>
                  <select defaultValue={"not"} className=" cursor-pointer outline-none bg-white text-black">
                    {status?.map((s, index) => (
                      <option key={index} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td> */
}
