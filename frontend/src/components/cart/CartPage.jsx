// // import { useAuth } from "../../helper/context/auth"
// import { useCart } from "../../helper/context/cart";
// import { FaLongArrowAltLeft } from "react-icons/fa";
// import { useAuth } from "../../helper/context/auth";
// import { Link, useNavigate } from "react-router-dom";
// import { MdDelete } from "react-icons/md";
// import { IoAddOutline } from "react-icons/io5";
// import { RiSubtractLine } from "react-icons/ri";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import Cartpp from "./cartpp";

// const CartPage = () => {
//   const PromoOfferName = "Shrawan";
//   const navigate = useNavigate();
//   const [cart, setCart] = useCart();
//   const [promeCodeValue, setPromoCode] = useState({ promoCode: "" });
//   const { isLogged } = useAuth();
//   const [price, setTotalPrice] = useState(0);
//   // const[chekoutitem,setChekoutItem] = useState()
//   // total price
//   const totalPrice = () => {
//     let sum = 0;
//     cart?.map((item) => (sum += item.price * item.quantity));

//     const totaPrice = "₹" + sum.toFixed(2);
//     setTotalPrice(totaPrice);
//     return totaPrice;
//   };
//   useEffect(() => {
//     totalPrice();
//   }, [cart]);

//   //remove item
//   const removeCartItem = (id) => {
//     try {
//       let myCart = [...cart];
//       let index = myCart.findIndex((item) => item.productId === id);

//       myCart.splice(index, 1);
//       setCart(myCart);
//       localStorage.setItem("cart", JSON.stringify(myCart));
//     } catch (error) {
//       console.log("Error: ", error);
//       alert(error.message || "Something went wrong!");
//     }
//   };

//   // setCheckoutItem(cart);

//   const prepareCheckoutData = () => {
//     // Map over cart items and create an array of items with necessary details
//     const checkoutItems = cart.map(item => ({
//       name: item.title,
//       price: item.price,
//       quantity: item.quantity
//     }));
// // console.log(checkoutItems,"checkoutitems");
//     return checkoutItems;
//   };

 
//  // Checkout handler function
//  const checkOutHandler = async () => {
//   try {
//     // Prepare checkout data
//     const checkoutData = prepareCheckoutData();
// // console.log(checkoutData)
//     // Make a POST request to your backend with the checkout data
//     const response = await axios.post("http://localhost:3000/api/v1/checkout", { items: checkoutData });
//   console.log(response)
//     // Redirect to the checkout URL received from the backend
//     window.location = response.url;
//   } catch (error) {
//     console.error("Error during checkout:", error);
//     // Handle error appropriately, such as displaying an error message to the user
//   }
// };
//     // Function to handle quantity change
//     // isLogged ? navigate("/payment") : navigate("/login");

//   // }

//   // Function to increment quantity for a specific item
//   const incrementQuantity = (itemId) => {
//     const updatedCart = cart.map((item) =>
//       item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Function to decrement quantity for a specific item
//   const decrementQuantity = (itemId) => {
//     const updatedCart = cart.map((item) =>
//       item._id === itemId && item.quantity > 0
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // handle promocode
//   const handlePromoCode = (e) => {
//     e.preventDefault();
//     if (promeCodeValue.promoCode !== PromoOfferName) {
//       return toast.error("Invalid PromoCode");
//     }
//     if (promeCodeValue.promoCode === PromoOfferName) {
//       toast.success("PromoCode Apply ");
//       const totalPriceFloat = parseFloat(totalPrice().slice(1)); // Remove the currency symbol and convert to float
//       const discountedPrice = Number(totalPriceFloat * 0.7); // Calculate the discounted price (30% off)
//       console.log(discountedPrice);
//       // Update the total price state with the discounted price
//       setTotalPrice("₹" + discountedPrice.toFixed(2));

//       setPromoCode({ promoCode: "" });
//     }
//   };


// console.log(cart[0])
//   // console.log("this is value", value);
//   return (
//     <>
//       {/* <div className=" md:mt-[64px]">
//         <div className="flex items-start  shadow-md  md:mt-[1rem] flex-col md:flex-row w-full  my-10">
//           <div className="md:w-full bg-white px-10 py-10   ">
//             <div className="flex justify-between  pb-8">
//               <h1 className="font-semibold text-2xl">Shopping Cart</h1>
//               <h2 className="font-semibold space-y-2 text-2xl">{`Items(${cart.length})`}</h2>
//             </div>
//             <div className="md:flex    mt-10 mb-5 hidden justify-between border w-full  ">
//               <h3 className="font-semibold text-gray-600 text-xs uppercase ">
//                 Product Details
//               </h3>
//               <h3 className="font-semibold  text-gray-600 text-xs uppercase  text-center">
//                 Quantity
//               </h3>
//               <h3 className="font-semibold  text-gray-600 text-xs uppercase  text-center">
//                  Price
//               </h3>
//               <h3 className="font-semibold  text-gray-600 text-xs uppercase  text-center">
//                  Total Price
//               </h3>
//             </div>
//             {cart.length !== 0 ? (
//               <div className="flex items-center flex-col border border-black md:flex-row flex-wrap hover:bg-gray-100 -mx-9 px-6 py-5">
//                 {cart?.map((items) => {
                 
//                   return (
//                     <>
                
//                       <div
//                         key={items}
//                         className="flex md:w-[50%] flex-col border border-red-700 md:flex-row w-[]  md:h-32 mb-3  "
//                       >
//                         {" "}
                    
//                         <div className="w-full md:w-[40%]  h-full ">
//                           <img
//                             className="h-32  w-[50%]  rounded-lg md:w-[100%] object-fill"
//                             src={items.image}
//                             alt
//                           />
//                         </div>
//                         <div className="flex flex-col  flex-grow text-black text-start">
//                           <span className="font-bold md:text-2xl ">
//                             Name:{items.name}
//                           </span>
//                           <span className=" md:text-2xl md:flex flex-wrap">
//                             Title:{items.title}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="md:flex justify-center hidden md:block w-1/5">
//                         <RiSubtractLine
//                           onClick={() => decrementQuantity(items._id)}
//                         />
//                         <input
//                           className="mx-2 border text-center w-8"
//                           type="text"
//                           defaultValue={0}
//                           value={items.quantity}
                        
//                         />
//                         <IoAddOutline
//                           onClick={() => incrementQuantity(items._id)}
//                           className="cursor-pointer"
//                         />
//                       </div>
//                       <span className="text-center md:w-1/5 px-5 py-1 mt-1 mb-1 text-2xl text-black font-semibold">
//                         {items.price*items.quantity}
//                       </span>
//                       <span className="text-center md:mb-0 md:ml-10  mb-5 border  font-semibold text-sm">
//                         <MdDelete className=" text-3xl cursor-pointer"  onClick={() => removeCartItem(items.id)}/>
                       
//                       </span>
//                     </>
//                   );
//                 })}
//               </div>
//             ) : (
//               <h3 className="text-red-600 text-center mt-10 text-3xl">
//                 Your cart is empty
//               </h3>
//             )}

//             <a
//               href="/"
//               className="flex font-semibold text-indigo-600 text-2xl mt-10"
//             >
//               <FaLongArrowAltLeft className="mt-1 text-2xl" /> Continue Shopping
//             </a>
//           </div>

//           <div className=" md:w-1/4  sticky top-0 h-dvh">
//             <div id="summary" className=" w-full px-8 py-10">
//               <h1 className="font-semibold text-2xl border-b pb-8">
//                 Order Summary
//               </h1>
//               <div className="flex justify-between mt-10 mb-5">
//                 <span className="font-semibold text-sm uppercase">{`item${cart.length}`}</span>
//                 <span className="font-semibold text-sm">
//                   Total:<span>{price}</span>
//                 </span>
//               </div>
//               <div>
//                 <label className="font-medium inline-block mb-3 text-sm uppercase">
//                   Shipping
//                 </label>
//                 <select className="block p-2 text-white w-full text-sm">
//                   <option>shipping</option>
//                   <option>Standard shipping - ₹10.00</option>
//                   <option>Normal shipping - ₹100.00</option>
//                   <option>Fast shipping - ₹200.00</option>
//                   <option>Super Fast shipping - ₹500.00</option>
//                 </select>
//               </div>
//               <div className="py-10">
//                 <label
//                   htmlFor="promo"
//                   className="font-semibold inline-block mb-3 text-sm uppercase"
//                 >
//                   Promo Code
//                 </label>
//                 <input
//                   type="text"
//                   id="promo"
//                   name="promoCode" 
//                   placeholder="Enter your code"
//                   className="p-2 text-sm w-full"
//                   value={promeCodeValue.promoCode}
//                   onChange={(e) =>
//                     setPromoCode({ [e.target.name]: e.target.value })
//                   }
//                 />
//               </div>
//               <button
//                 type="Sumbit"
//                 onClick={handlePromoCode}
//                 className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
//               >
//                 Apply
//               </button>
//               <div className="border-t mt-8">
//                 <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//                   <span>Total cost</span>
//                   <span>{price}</span>
//                 </div>
//                 <button
//                   onClick={checkOutHandler}
//                   className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
//                 >
//                   Checkout
//                 </button>
//               </div>
//             </div>
//             <div />
//           </div>
//         </div>
//       </div> */}
//   <Cartpp/>
//       {/* cart item   */}
//     </>
//   );
// };

// export default CartPage;
