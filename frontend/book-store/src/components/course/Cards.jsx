/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { useCart } from "../../helper/context/cart";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../helper/context/auth";


const Cards = ({ item }) => {
  const { isAuthenticated} = useAuth();
  const navigate = useNavigate();
  // console.log("this is item", item);

  const [cart, setCart] = useCart();
  return (
    <div className=" md:mt-5 md:max-w-[20rem] w-full  mx-auto md:ml-6  min-h-[10rem] mb-5 rounded-xl">
      <div className="  w-full duration-300 rounded-lg   ">
        <figure>
          <img src={item.img} alt="Shoes" className=" h-[14rem] w-full " />
        </figure>
        <div className="card-body   bg-slate-700 text-white">
        
          <p className="text-left ">{item.category}</p>
         

          <div className="card-actions flex justify-between">
            <div className="text-center">Price:{item.price}</div>
            <button className=" hover:underline" onClick={()=>navigate(`/more_detials?id=${item._id}`)}>More Detials</button>

            {
               <div
              className=" border px-2 -mt-1 rounded-md hover:bg-slate-800 py-1  cursor-pointer hover:bg-red hover:text-white"

              onClick={() => {
                setCart([...cart, item]);
                localStorage.setItem("cart", JSON.stringify([...cart, item]));
                toast.success("Add Succsfully");
              }}
            >
              Buy now
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
