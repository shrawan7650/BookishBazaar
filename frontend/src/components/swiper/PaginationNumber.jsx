import "./Pagination.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";
import { useAuth } from "../../helper/context/auth";
const PaginationNumber = ({ totalItems }) => {
  const { books } = useAuth();

  console.log(totalItems);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className=" w-full ">
      <>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className=" w-[100%] h-[100%] flex items-center justify-center border border-red-800"
        >
          {books.map((item) => {
            return (
              <SwiperSlide key={item} className=" grid grid-cols-4">
                <div className="max-w-sm rounded  border border-black overflow-hidden shadow-lg">
                  <img
                    className="w-full h-48 aspect-square  object-fill"
                    src={item.image}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                     {item.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default PaginationNumber;
