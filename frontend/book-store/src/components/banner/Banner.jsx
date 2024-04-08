import banner from "../../assets/hero-image01.png";
import { FaAmazon } from "react-icons/fa";
import { useCart } from "../../helper/context/cart";
const Banner = () => {
  const [cart, setCart] = useCart();
  return (
    <>
      <div className="w-full md:h-[46rem] mb-5 bg-[#FCEBE6] md:px-20 md:mb-24 mt-16 md:mt-18 gap-x-40  px-4 flex  flex-col md:flex-row  ">
        <div className=" order-2 md:order-1 w-full  md:mt-32 mt-12">
          <div className="space-y-6">
            {" "}
            <h1 className="text-4xl font-bold antialiased tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h1>
            <p className="tracking-wide leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam quos explicabo mollitia. Beatae facilis suscipit illo,
              autem voluptas reprehenderit! Obcaecati quisquam consectetur odit
              ratione alias expedita, pariatur enim repellat consequuntur.
            </p>
          </div>
<div className="flex justify-evenly mt-5">
  
<button  className=" md:px-6 md:py-2.5 px-[3px] outline-none rounded-md bg-[#946659] hover:bg-[#E95930] text-white">
₹6.75-Purchase
          </button>

          <button className="md:px-6  flex justify-center text-1xl py-2 px-3  md:text-2xl items-center md:py-2.5 outline-none rounded-md border hover:bg-white border-gray-800  text-black">
           Read On Kindle <FaAmazon className="md:text-2xl md:mt-2 md:ml-3" />
          </button>
</div>
        </div>
        <div className="order-1 md:mt-16 md:max-h-[50rem] py-2 px-3  w-full ">
          <img
            className="w-full md:w-[30rem] md:mt-20 md:ml-8  rounded-md md:h-full md:mb-6 z-1   mt-16 "
            src={banner}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
