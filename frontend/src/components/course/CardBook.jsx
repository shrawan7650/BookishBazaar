/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { useCart } from "../../helper/context/cart";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Spinner2 from "../../spinner/Spinner2";
import axios from "axios";

import Cookies from "js-cookie";
const CardBook = ({ item, loader }) => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  // console.log("this is item", item);

  // const [cart, setCart] = useCart(item);

  // const AddCartFuntionality = (item) => {
  //   const existingItemIndex = cart.findIndex(
  //     (cartItem) => cartItem._id === item._id
  //   );
  //   if (existingItemIndex !== -1) {
  //     // If the item is already in the cart, update its quantity
  //     const updatedCart = [...cart];
  //     updatedCart[existingItemIndex].quantity += 1; // Assuming you have a quantity property in your item object
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } else {
  //     // If the item is not in the cart, add it
  //     setCart([...cart, { ...item, quantity: 1 }]); // Adding quantity property to the item
  //     localStorage.setItem(
  //       "cart",
  //       JSON.stringify([...cart, { ...item, quantity: 1 }])
  //     );
  //   }
  //   toast.success("Added Successfully");
  // };

  const AddCartBackend = async (item) => {
    try {
      const id = item._id;
      console.log(id);
      const response = await axios.post(
        `${import.meta.env.VITE_DEV_BASE_URL}cart`,
        {
          product_id: id,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Add succssfully")
      window.location.reload();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return loader ? (
    <Spinner2 />
  ) : (
    <div className=" relative  md:min-w-[20rem]  min-w-[80%]  m-5  md:ml-12  h-fit  mt-24   cursor-pointer">
      <div className=" w-full flex  h-fit mt-14 ">
        {
          <img
            className="w-44  hover:-translate-y-4 -top-16  duration-700 transition-all  left-16 .hvr-glow h-44 absolute z-20 md:left-[72px] rounded-md"
            src={item.image}
            alt="loading..."
          />
        }

        <div className="flex  z-10 h-fit  top-24  border hover:bg-blue-600 hover:text-white shadow-2xl  text-black rounded-2xl outline-none flex-col  w-full ">
          <div className=" mt-16 h-fit   text-center px-3 flex flex-col gap-1">
            <div className=" flex mt-2 mx-auto">
              <CiStar className=" bg-orange-300" />
              <CiStar className=" bg-orange-300" />
              <CiStar className=" bg-orange-300" />
              <CiStar className=" bg-orange-300" />
            </div>
            <p className=" text-wrap w-full px-1 py-1">
              {" "}
              <span>Title:</span>
              {item.title}
            </p>
            <p className=" text-wrap w-full break-all px-1 py-1 ">
              <span>Author:</span>

              {item.author}
            </p>

            <div className=" mx-auto flex   w-full gap-2 mb-5 justify-between  ">
              <button
                onClick={() => {
                  AddCartBackend(item);
                }}
                className="bg-blue-500 rounded-badge h-10 w-[50%] hvr-bounce-to-right text-white font-bold py-2  "
              >
                Add to cart
              </button>
              <button
                onClick={() => navigate(`/more_detials?id=${item._id}`)}
                className="bg-blue-500 rounded-badge h-10 w-[50%] hvr-bounce-to-right text-white font-bold py-2  "
              >
                More Detials
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
