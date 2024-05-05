import { Link } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import banner1 from "../../assets/bundle (1).png";
import Banner6 from "../banner/Banner6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useAuth } from "../../helper/context/auth";
import CardBook from "./CardBook";
import toast from "react-hot-toast";
import Layout from "../../../layout/Layout";

const CoursePage = () => {
  const { books ,loader} = useAuth();
  const PaidBooks = books.filter((book) => book.value === "Paid");

  return (

    <>
    <Layout>
    <div className={`min-h-screen border ${loader? 'opacity-50':''} `}>
      <div className="w-full flex z-0 justify-center items-center flex-col bg-[#FCEBE6] mt-10 min-h-[32rem]">
        <h1 className="md:text-6xl text-4xl text-black font-medium ">
          BookS
        </h1>
        <div className="text-2xl md:text-4xl">
          <Link to="/">
            <FaLongArrowAltLeft />
          </Link>
        </div>
        <div className="w-full">
          <p className="text-black text-2xl text-center mt-5">
            Explore our collection of books and discover your next favorite
            read.
          </p>
        </div>
      </div>

      <div className="min-h-[26rem] py-5 flex overflow-x-auto">
        {PaidBooks.map((item) => {
          return <CardBook item={item} key={item} loader={loader} />;
        })}
      </div>

      <div className="w-full md:h-[36rem] bg-[#FFFAF8] md:px-20 md:mt-18 gap-x-40 px-4 flex flex-col md:flex-row">
        <div className="order-2 md:order-1 w-full md:mt-32 mt-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold antialiased tracking-wide">
              Explore New Worlds
            </h1>
            <p className="tracking-wide leading-relaxed">
              Immerse yourself in captivating stories and expand your horizons
              with our diverse selection of books.
            </p>
          </div>
          <button className="btn px-10 bg-gray-800 text-teal-200 mt-4 md:mt-6">
            Add to Cart
          </button>
        </div>
        <div className="order-1 w-full">
          <img
            className="w-full md:w-96 rounded-md h-[28rem] md:mb-6 z-1 mt-16"
            src={banner}
          />
        </div>
      </div>

      <div className="w-full md:h-[36rem] bg-[#FFFFFF] md:px-20 md:mt-18 gap-x-40 px-4 flex flex-col md:flex-row">
        <div className="order-2 md:order-1 w-full md:mt-32 -mt-18">
          <div className="space-y-6 sm:mt-10">
            <h1 className="text-6xl font-bold antialiased tracking-wide">
              Complete Series Bundle
            </h1>
            <p className="tracking-wide leading-relaxed">
              Get the full experience with our complete series bundles. Dive
              into epic sagas and enjoy uninterrupted reading sessions.
            </p>
          </div>
          <button  className=" px-3 py-2 rounded-2xl text-white  bg-sky-500 hover:bg-sky-700 text-xl mt-4 md:mt-6 btn-secondary outline-none">
            199.00 - Purchase
          </button>
        </div>
        <div className="order-1 w-full sm:w-full">
          <img
            className="w-full object-contain sm:w-full rounded-md h-[28rem] md:mb-6 z-1 md:mt-16"
            src={banner1}
          />
        </div>
      </div>

      <div className="w-full md:max-w-[90%] justify-center mx-auto md:h-[40rem] bg-white md:px-20 px-4 flex flex-col md:flex-row">
        <div className="order-2 md:order-2 md:ml-24 w-full md:mt-32 mt-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Upcoming Releases</h1>
            <p className="w-full text-wrap">
              Stay ahead of the curve and be the first to experience our
              upcoming releases. Sign up for notifications and be notified as
              soon as new titles become available.
            </p>
          </div>
          <button onClick={()=> toast.success("Notify")} className="btn px-10 text-white outline-none mt-4 md:mt-6 bg-red-800">
            Notify me
          </button>
        </div>
        <div className="order-1 w-full">
          <img
            className="w-full md:w-full rounded-md h-[36rem] md:mb-6 z-1 mt-10"
            src={books[0]?.image}
          />
        </div>
      </div>
      
      <Banner6 />
    </div>
    </Layout>
    </>
   
  );
};

export default CoursePage;
