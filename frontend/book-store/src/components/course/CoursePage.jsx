import { Link } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import banner1 from "../../assets/bundle (1).png";
import Banner6 from "../banner/Banner6";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { useAuth } from "../../helper/context/auth";
import Cards from "./Cards";

const CoursePage = () => {
  const{books} = useAuth()
 const PaidBooks = books.filter((books) => books.category === "Paid");
  return (
    <>
      <div className="w-full flex z-0 justify-center items-center flex-col bg-[#FCEBE6] mt-10 min-h-[32rem]">
        <h1 className="md:text-6xl text-4xl text-black  font-medium uppercase">
          books
        </h1>
        <div className="  text-2xl md:text-4xl">
          <Link to="/">
            <FaLongArrowAltLeft />
          </Link>
        </div>
        <div className="w-full">
          <p className="text-black text-2xl text-center mt-5 ">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit
          </p>
        </div>
      </div>

<div className=" min-h-[25rem] flex flex-wrap">
  {
    PaidBooks.map((item)=>{
      return (
        <Cards item={item} key={item}/>
      )
    })
  }
        
</div>
        


      <div className="w-full md:h-[36rem] bg-[#FFFAF8] md:px-20  md:mt-18 gap-x-40  px-4 flex  flex-col md:flex-row  ">
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

          <button className="btn px-10 bg-gray-800 text-teal-200 mt-4 md:mt-6">
            Add to Cart
          </button>
        </div>
        <div className="order-1 w-full ">
          <img
            className="w-full md:w-96  rounded-md h-[28rem] md:mb-6 z-1   mt-16 "
            src={banner}
          />
        </div>
      </div>

      <div className="w-full md:h-[36rem] bg-[#FFFFFF] md:px-20  md:mt-18 gap-x-40  px-4 flex  flex-col md:flex-row  ">
        <div className=" order-2 md:order-1 w-full  md:mt-32 -mt-18">
          <div className="space-y-6 sm:mt-10">
            <h1 className="text-6xl font-bold antialiased tracking-wide">
              Buy a Complete Series
            </h1>
            <p className="tracking-wide leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magn.
            </p>
          </div>

          <button className="btn bg-sky-500 hover:bg-sky-700 text-xl mt-4 md:mt-6 btn-secondary">
            $199.00-Purchase
          </button>
        </div>
        <div className="order-1 w-full sm:w-full ">
          <img
            className="w-full object-contain sm:w-full rounded-md h-[28rem] md:mb-6 z-1  md:mt-16 "
            src={banner1}
          />
        </div>
      </div>
    
      <div className="w-full md:max-w-[90%]  justify-center mx-auto md:h-[40rem] bg-[white] md:px-20 px-4 flex flex-col md:flex-row  ">
        <div className=" order-2 md:order-2  md:ml-24 w-full  md:mt-32 mt-12">
          <div className="space-y-6">
            {" "}
            <h1 className="text-4xl font-bold">Upcoming Book</h1>
            <p className="w-full text-wrap">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>

          <button className="btn px-10 text-white outline-none mt-4 md:mt-6 bg-red-800">
            Notify me
          </button>
        </div>
        <div className="order-1 w-full ">
          <img
            className="w-full md:w-full  rounded-md h-[36rem] md:mb-6 z-1   mt-10 "
            src={banner}
          />
        </div>
      </div>
      <Banner6 />
    </>
  );
};

export default CoursePage;
