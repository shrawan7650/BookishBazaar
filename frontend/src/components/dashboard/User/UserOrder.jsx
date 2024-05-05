import { useEffect, useState } from "react";
import { useAuth } from "../../../helper/context/auth";
import { useCart } from "../../../helper/context/cart";
import axios from "axios";

const UserOrder = () => {
  const { isLogged } = useAuth();
  const [orders, setOrders] = useState([]); // Initialize orders as an object with an empty products array

  useEffect(() => {
    const getOrderItem = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/getorder",
          { withCredentials: true }
        );
        console.log(response);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };
    getOrderItem();
  }, []);

  console.log(orders);

  return (
    <div className="container  ">
      <div className="row ">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>
          <div className=" shadow">
            <table className="table overflow-auto">
              <thead>
                <tr>
                  <th className="text-sm tracking-wide overflow-auto px-1" scope="col">#</th>
                  <th  className="text-sm tracking-wide overflow-auto px-1" scope="col">Status</th>
                  <th  className="text-sm tracking-wide overflow-auto px-1" scope="col">Buyer</th>
                  <th  className="text-sm tracking-wide overflow-auto px-1" scope="col">Date</th>
                  <th  className="text-sm tracking-wide overflow-auto px-1" scope="col">Payment</th>
                  <th  className="text-sm tracking-wide overflow-auto px-1" scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((item, index) => {
                  return item.products.map((product, pro_index) => (
                    <tr key={product._id || pro_index}>
                      <td  className="text-sm tracking-wide overflow-auto px-1">{index + 1+pro_index}</td>
                      <td  className="text-sm tracking-wide overflow-auto px-1">{item.status}</td>
                      <td  className="text-sm tracking-wide overflow-auto px-1">{item.buyer.name}</td>
                      <td  className="text-sm tracking-wide overflow-auto px-1">{getFormattedDate(item.createdAt)}</td>
                      <td  className="text-sm tracking-wide overflow-auto px-1">{item.payment.payment_status? "Success" : "Failed"}</td>
                      <td  className="text-sm tracking-wide overflow-auto px-1">{product.quantity}</td>
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        </div>
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

export default UserOrder;
