
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
const EffectCard = () => {
  return (
    <div className=" relative">
      <>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="  h-96 font-bold  transition-transform  progress-success rounded-2xl md:w-[350px] max-w-fit overflow-x-hidden overflow-y-hidden  mt-20"
        >
          <SwiperSlide className=" flex items-center  justify-center  rounded-2xl text-2xl font-bold text-white bg-slate-950">
      <img src="https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center  rounded-2xl text-2xl font-bold text-white  bg-blue-950">
         <img src="https://images.pexels.com/photos/1643033/pexels-photo-1643033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center  rounded-2xl text-2xl font-bold text-white  bg-red-950">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_-CV4k0qUBAveSa4brbKsfgTHT9eaYDppEnjhpEB8AyH9hSi"></img>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center  rounded-2xl text-2xl font-bold text-white  bg-green-950">
          <img src="https://m.media-amazon.com/images/I/81zotOIpQ6L._SL1500_.jpg"></img>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center  rounded-2xl text-2xl font-bold text-white  bg-yellow-950">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxxTIX5e4VYxsA9LwRMQ2z5sso7zGD5Jwfw_3gYI0LQ&s"></img>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center  rounded-2xl text-2xl font-bold text-white  bg-pink-950">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxxTIX5e4VYxsA9LwRMQ2z5sso7zGD5Jwfw_3gYI0LQ&s"></img>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center  rounded-2xl text-2xl font-bold text-white  bg-orange-600">
          <img src="https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center  rounded-2xl text-2xl font-bold text-white   bg-purple-800">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxxTIX5e4VYxsA9LwRMQ2z5sso7zGD5Jwfw_3gYI0LQ&s"></img>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center  rounded-2xl text-2xl font-bold text-white  bg-blue-600">
          <img src="https://m.media-amazon.com/images/I/81Ls+SBCLiL._AC_UF1000,1000_QL80_DpWeblab_.jpg"></img>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default EffectCard;
