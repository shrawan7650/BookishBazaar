import banner from "../../assets/book-cover4-200x300.png";
import banner1 from "../../assets/bundle (1).png";
import banner2 from "../../assets/about-image.png";
import banner3 from "../../assets/hero-image01.png";
import { Link } from "react-router-dom";

const Banner3 = () => {
  return (
    <>
      <div className="w-full md:h-[48rem] bg-[#FFFAF8] md:px-20   gap-x-40  px-4 flex  flex-col md:flex-row  ">
        <div className=" order-1 md:order-1 w-full  md:mt-72 mt-12">
          <div className="space-y-6">
            {" "}
            <h1 className="text-4xl font-bold">Discover More</h1>
            <p>
              Embark on a journey of exploration and enlightenment with our
              diverse collection of books. Let each page unfold new adventures
              and inspire your imagination.
            </p>
          </div>

          <Link to="/book">
            {" "}
            <button className="btn mt-4 md:mt-6 ">Explore Now...</button>
          </Link>
        </div>

        <div className="order-2 flex flex-wrap w-full gap-5  ">
          <img
            className="w-full md:w-72  rounded-md h-[22rem]  z-1   mt-4 "
            src={banner}
          />
          <img
            className="w-full md:w-72  rounded-md h-[22rem]  z-1   mt-4 "
            src={banner1}
          />
          <img
            className="w-full md:w-72  rounded-md h-[22rem]  z-1   mt-4 "
            src={banner2}
          />
          <img
            className="w-full md:w-72  rounded-md h-[22rem]  z-1   mt-4 "
            src={banner3}
          />
        </div>
      </div>
    </>
  );
};

export default Banner3;
