import { MdBadge, MdDelete } from "react-icons/md";
import logo from "../../assets/about-image.png";
// import { useAuth } from "../../helper/context/auth"
import { useCart } from "../../helper/context/cart";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useAuth } from "../../helper/context/auth";
import { Link, useNavigate } from "react-router-dom";
// import { MdDelete } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Layout from "../../../layout/Layout";
import empty from "../../assets/icons8-empty-cart.gif";
// import Cartpp from "./cartpp";
import Cookies from "js-cookie";
const Cartpage = () => {

  const token = Cookies.get("token");
  const [show, setShow] = useState(false);
  const PromoOfferName = "Shrawan";
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [promeCodeValue, setPromoCode] = useState({ promoCode: "" });
  const { isLogged } = useAuth();
  const [loader, setLoader] = useState(false);
  const [price, setTotalPrice] = useState(0);
  // const[chekoutitem,setChekoutItem] = useState()
  // total price
  const totalPrice = () => {
    let sum = 0;
    cart?.map((item) => {
      sum += item.book?.price * item?.quantity;
    });

    const totaPrice = "₹" + sum.toFixed(2);
    setTotalPrice(totaPrice);
    return totaPrice;
  };
  useEffect(() => {
    totalPrice();
  }, [cart]);

  //remove item
  const removeCartItem = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_DEV_BASE_URL}removecart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  window.location.reload();
      // let myCart = [...cart];
      // let index = myCart.findIndex((item) => item._id === id);

      // myCart.splice(index, 1);
      // setCart(myCart);
      // localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log("Error: ", error);
      // alert(error.message || "Something went wrong!");
    }
  };

  // setCheckoutItem(cart);

  const prepareCheckoutData = () => {
    // Map over cart items and create an array of items with necessary details
    const checkoutItems = cart.map((item) => ({
      id: item._id,
      name: item.book.title,
      price: item.book.price,
      quantity: item.quantity,
    }));
    console.log(checkoutItems, "checkoutitems");
    return checkoutItems;
  };

  // Checkout handler function
  const checkOutHandler = async () => {
    try {
      setLoader(true);
      // Prepare checkout data
      const checkoutData = prepareCheckoutData();
      console.log(checkoutData);
      // Make a POST request to your backend with the checkout data
      const response = await axios.post(
        `${import.meta.env.VITE_DEV_BASE_URL}checkout`,
        { items: checkoutData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data.url);
      setLoader(false);
      // Redirect to the checkout URL received from the backend
      window.location = response.data.url;
    } catch (error) {
      console.error("Error during checkout:", error);
      // Handle error appropriately, such as displaying an error message to the user
    }
  };
  // Function to handle quantity change
  // isLogged ? navigate("/payment") : navigate("/login");

  // }

  // Function to increment quantity for a specific item
  // const incrementQuantity = (itemId) => {
  //   const updatedCart = cart.map((item) =>
  //     item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
  //   );
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  // // Function to decrement quantity for a specific item
  // const decrementQuantity = (itemId) => {
  //   const updatedCart = cart.map((item) =>
  //     item._id === itemId && item.quantity > 0
  //       ? { ...item, quantity: item.quantity - 1 }
  //       : item
  //   );
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  const quantityChangeHandler = async (productId, change, prevQuantity) => {
    try {
      let newQuantity = prevQuantity;
      if (change === "increment") {
        newQuantity = Number(newQuantity) + 1;
        // cart.find((item) => item.book._id === productId).quantity + 1;
      } else if (change === "decrement") {
        newQuantity = Number(newQuantity) - 1;
        // cart.find((item) => item.book._id === productId).quantity - 1;
        if (newQuantity < 0) return; // Don't allow negative quantities
      }
      console.log("productis", productId);
      console.log("quantity", newQuantity);

      const response = await axios.put(
        `https://bookishbazaar-zf22.onrender.com/api/v1/update-cart-quantity/${cart._id}`,
        { quantity: newQuantity, productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  // handle promocode
  const handlePromoCode = (e) => {
    e.preventDefault();
    if (promeCodeValue.promoCode !== PromoOfferName) {
      return toast.error("Invalid PromoCode");
    }
    if (promeCodeValue.promoCode === PromoOfferName) {
      toast.success("PromoCode Apply ");
      const totalPriceFloat = parseFloat(totalPrice().slice(1)); // Remove the currency symbol and convert to float
      const discountedPrice = Number(totalPriceFloat * 0.7); // Calculate the discounted price (30% off)
      console.log(discountedPrice);
      // Update the total price state with the discounted price
      setTotalPrice("₹" + discountedPrice.toFixed(2));

      setPromoCode({ promoCode: "" });
    }
  };

  return (
    <>
      <Layout>
        <div className="container  w-full mt-10 ">
          <div className="flex md:flex-row flex-col w-full   mt-12 shadow-md my-10 cursor-pointer ">
            <div className="md:w-[80%] w-full bg-white px-1 md:px-10  py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <span className="inline-flex items-center  top-4 cursor-pointer justify-center md:w-4 h-4 ms-1  font-semibold text-black rounded-full">
                  ItemS({cart.length})
                </span>
              </div>
              <div className="md:flex items-center justify-between  mb-5 hover:bg-gray-100 md:-mx-8 md:px-6 hidden py-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-[30%]">
                  Product Details
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase  text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase ml-24 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase  text-center">
                  Total
                </h3>
              </div>
              {cart.length <= 0 ? (
                <div className="  text-black  text-5xl  gap-8 mt-14 h-32 flex-col flex justify-center items-center ">
                  <h1>Cart is Empty</h1>
                  <img src={empty} className="" />{" "}
                </div>
              ) : (
                <div className=" grid grid-cols-2 md:grid-cols-1  px-1 py-1 md:w-[106%]  gap-2  md:-mx-8  md:py-5">
                  {cart?.map((items) => {
                   
                    return (
                      <>
                        <div
                          key={items?.book?._id}
                          className="flex flex-col md:flex-row items-center   h-fit w-[100%] md:w-full px-2 py-2  shadow-lg justify-between border border-gray-200 hover:bg-gray-100
        md:py-5 "
                        >
                          <div className="flex flex-col md:flex-row w-[100%] md:w-[40%]   ">
                            {" "}
                            {/* product */}
                            <div className="md:min-w-20 min-w-28 ">
                              <img
                                className="md:h-24 h-32 md:w-32 aspect-auto fill-transparent w-full rounded-md"
                                src={items?.book?.image}
                                alt
                              />
                            </div>
                            <div className="flex flex-col justify-between gap-y-1  mb-3 ml-4 flex-grow">
                              <span className="font-bold text-sm">
                                Name:{items?.book?.author}
                              </span>
                              <span className="text-red-500 text-xs">
                                Title:{items?.book?.title}
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center  mb-5   md:w-[7%]">
                            <RiSubtractLine
                              className="cursor-pointer  text-2xl"
                              onClick={() =>
                                quantityChangeHandler(
                                  items?.book._id,
                                  "decrement",
                                  items.quantity
                                )
                              }
                            />

                            <input
                              className="mx-2 border text-center outline-none bg-slate-300 text-black font-light w-8"
                              type=" number"
                              defaultValue={0}
                              value={items?.quantity}
                              readOnly
                            />
                            <IoAddOutline
                              onClick={() =>
                                quantityChangeHandler(
                                  items?.book._id,
                                  "increment",
                                  items?.quantity
                                )
                              }
                              className="cursor-pointer  text-2xl"
                            />
                          </div>
                          <div className="  flex w-full justify-between  md:w-[40%]">
                            <MdDelete
                              className=" cursor-pointer"
                              onClick={() => removeCartItem(items._id)}
                            />
                            <p className="text-center  font-semibold text-sm">
                              <span className="md:hidden">Price:</span>₹
                              {items?.book?.price}
                            </p>
                            <p className="text-center md:block font-semibold text-sm ">
                              <span className="md:hidden">Total:</span>₹
                              {items?.book?.price * items.quantity}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              )}

              {/* <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
        Continue Shopping
      </a> */}
            </div>

            <div className=" md:w-1/4  sticky top-0 h-dvh">
              <div id="summary" className=" w-full px-8 py-10">
                <h1 className="font-semibold text-2xl border-b pb-8">
                  Order Summary
                </h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">{`item (${cart.length})`}</span>
                  <span className="font-semibold text-sm">
                    Total:<span>{price}</span>
                  </span>
                </div>
                <div>
                  <label className="font-medium inline-block mb-3 text-sm uppercase">
                    Shipping
                  </label>
                  <select
                    onClick={(show) => setShow(!show)}
                    className={` block p-2  text-black cursor-pointer border bg-white w-full text-sm`}
                  >
                    <option>shipping</option>
                    <option>Standard shipping - ₹10.00</option>
                    <option>Normal shipping - ₹100.00</option>
                    <option>Fast shipping - ₹200.00</option>
                    <option>Super Fast shipping - ₹500.00</option>
                  </select>
                </div>
                <div className="py-10">
                  <label
                    htmlFor="promo"
                    className="font-semibold inline-block mb-3 text-sm uppercase"
                  >
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="promo"
                    name="promoCode"
                    placeholder="Enter your code"
                    className="p-2 text-sm bg-white w-full border rounded-sm"
                    value={promeCodeValue.promoCode}
                    onChange={(e) =>
                      setPromoCode({ [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <button
                  type="Sumbit"
                  onClick={handlePromoCode}
                  className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                >
                  Apply
                </button>
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>{price}</span>
                  </div>
                  <button
                    onClick={checkOutHandler}
                    className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                  >
                    {loader ? <p className="  loading"></p> : "Check out"}
                  </button>
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cartpage;
