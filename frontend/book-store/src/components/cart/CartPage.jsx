// import { useAuth } from "../../helper/context/auth"
import { useCart } from "../../helper/context/cart";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useAuth } from "../../helper/context/auth";
import { useNavigate } from "react-router-dom";

import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";

const CartPage = () => {
 const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const { isAuthenticated} = useAuth();
console.log(cart)
  const totalPrice = () => {
    let sum = 0;
     cart?.map((item) => (sum += item.price));
  

    return "₹" + sum.toFixed(2);
  };

  //remove item
  const removeCartItem = (id) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item.productId === id);

      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log("Error: ", error);
      alert(error.message || "Something went wrong!");
    }
  };

  const checkOutHandler = ()=>{

   isAuthenticated.user?navigate("/payment"):navigate('/login')
  }

  // Function to handle quantity change

  // Function to increment quantity
  // const incrementQuantity = () => {
  //   setValue(value + 1);
  // };

  // // Function to decrement quantity
  // const decrementQuantity = () => {
  //   setValue(value-1)
  // };
  // console.log("this is value", value);
  return (
    <>
      <div className=" md:mt-[86px]">
        {!isAuthenticated.user ? (
          <div className=" mt-4 md:min-h-[70rem] border   text-center text-3xl flex justify-center gap-10 text-black">
            {" "}
           
            <h1 className="text-center mt-5 ">Please Login to Checkout</h1>
          </div>
        ) : (
          <div className="flex   shadow-md  md:mt-[1rem] flex-col md:flex-row w-full  my-10">
          <div className="md:w-3/4 bg-white px-10 py-10 ">
            <div className="flex justify-between  pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold space-y-2 text-2xl">{`Items(${cart.length})`}</h2>
            </div>
            <div className="md:flex mt-10 mb-5 hidden  ">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
            </div>
  
            <div className="flex items-center flex-col md:flex-row flex-wrap hover:bg-gray-100 -mx-8 px-6 py-5">
              {cart?.map((items) => {
                {console.log(items)}
                return (
                  <>
                    {/* {console.log(items)} */}
                    <div
                      key={items}
                      className="flex md:w-2/5 flex-col md:flex-row w-full  md:h-32 mb-3  "
                    >
                      {" "}
                      {/* product */}
                      <div className="w-full md:w-[40%]  h-full ">
                        <img
                          className="h-32  w-full  rounded-lg md:w-[100%] object-fill"
                          src={items.img}
                          alt
                        />
                      </div>
                      <div className="flex flex-col ml-4 flex-grow text-black text-start">
                        <span className="font-bold text-2xl ">
                          Name:{items.name}
                        </span>
                        <span className=" text-md flex flex-wrap">
                          Title:{items.title}
                        </span>
                      </div>
                    </div>
                    <div className="md:flex justify-center hidden md:block w-1/5">
                      <RiSubtractLine onClick={() => decrementQuantity()} />
                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        defaultValue={0}
                        // Use value instead of defaultValue
                      />{" "}
                      <IoAddOutline onClick={() => incrementQuantity()} />
                    </div>
                    <span className="text-center md:w-1/5 px-5 py-1 mt-1 mb-1 text-2xl text-black font-semibold">
                      {items.price}
                    </span>
                    <span className="text-center md:mb-0 md:ml-10  mb-5 border  font-semibold text-sm">
                      <button
                        className="font-semibold hover:text-red-500 md:px-4  rounded-md outline-none text-black border px-10 border-black text-2xl"
                        onClick={() => removeCartItem(items.id)}
                      >
                        Remove
                      </button>
                    </span>
                  </>
                );
              })}
            </div>
  
            <a
              href="/"
              className="flex font-semibold text-indigo-600 text-2xl mt-10"
            >
              <FaLongArrowAltLeft className="mt-1 text-2xl" /> Continue Shopping
            </a>
          </div>
  
          <div className=" md:w-1/4  bg-white">
            <div id="summary" className=" w-full px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">{`item${cart.length}`}</span>
                <span className="font-semibold text-sm">
                  Total:<span>{totalPrice()}</span>
                </span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-white w-full text-sm">
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
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>{totalPrice()}</span>
                </div>
                <button onClick={checkOutHandler} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
            <div />
          </div>
        </div>
        )}
      </div>

      {/* cart item   */}

                      
                      
                       


    
    </>
  );
};

export default CartPage;
