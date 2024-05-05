// /* eslint-disable react/prop-types */

// import toast from "react-hot-toast";
// import { useCart } from "../../helper/context/cart";
// import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../../helper/context/auth";


// const Cards = ({ item }) => {
//   // const { isAuthenticated} = useAuth();
//   const navigate = useNavigate();
//   // console.log("this is item", item);

//   const [cart, setCart] = useCart(item);

//   const AddCartFuntionality = (item) => {
//     const existingItemIndex = cart.findIndex((cartItem) => cartItem._id === item._id);
//     if (existingItemIndex !== -1) {
//       // If the item is already in the cart, update its quantity
//       const updatedCart = [...cart];
//       updatedCart[existingItemIndex].quantity += 1; // Assuming you have a quantity property in your item object
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     } else {
//       // If the item is not in the cart, add it
//       setCart([...cart, { ...item, quantity:1 }]); // Adding quantity property to the item
//       localStorage.setItem("cart", JSON.stringify([...cart, { ...item, quantity: 1 }]));
//     }
//     toast.success("Added Successfully");
//   };
  
//   console.log(cart)
//   return (
//     <div className=" md:mt-5 md:min-w-[20rem] border border-red-700 min-w-full m-1 aspect-square hover:-translate-y-8 duration-700  md:ml-6  min-h-[12rem] mb-5 rounded-xl">
//       <div className="  w-full   ">
//         <figure>
//           <img src={item.image} alt="Shoes" className=" h-[14rem] w-full " />
//         </figure>
//         <div className="card-body   bg-slate-700 text-white">
        
         

//           <div className="card-actions flex justify-between">
//             <div className="text-center">Price:</div>
//             <button className=" hover:underline hover:scale-105 " onClick={()=>navigate(`/more_detials?id=${item._id}`)}>More Detials</button>

            
//               <div
//               className={`border px-2 mt-1 rounded-md hover:bg-slate-800 py-1  cursor-pointer hover:bg-red hover:text-white`}

//               onClick={() => {
//                 AddCartFuntionality(item)
//               }}
//             >
//               Buy now
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
