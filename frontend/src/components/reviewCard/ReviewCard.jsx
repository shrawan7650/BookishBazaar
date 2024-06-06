const reviewData = [
  {
    name: "John Doe",
    date: "June 1, 2000",
    title: "Great Experience!",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibus eros.",
  },
  {
    name: "Alice Smith",
    date: "July 15, 2001",
    title: "Fantastic Service!",
    rating: 4,
    content:
      "Nulla facilisi. Donec auctor orci nec posuere suscipit. Duis nec nisi eleifend, tincidunt libero nec, aliquet orci.",
  },
  {
    name: "Emma Johnson",
    date: "August 27, 2002",
    title: "Highly Recommend!",
    rating: 5,
    content:
      "Integer sed justo ultrices, vestibulum metus sed, suscipit libero. Cras at dui nec urna tempus mattis in a ligula.",
  },
  {
    name: "Michael Brown",
    date: "September 10, 2003",
    title: "Excellent Experience!",
    rating: 5,
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce bibendum quam nec placerat aliquet.",
  },
  {
    name: "Sophia Wilson",
    date: "October 5, 2004",
    title: "Wonderful!",
    rating: 4,
    content:
      "Suspendisse finibus enim vitae vehicula vestibulum. In hac habitasse platea dictumst. Ut convallis massa sed sem sagittis, vitae faucibus eros tempor.",
  },
  {
    name: "Ethan Jones",
    date: "November 20, 2005",
    title: "Great Value for Money!",
    rating: 4,
    content:
      "Etiam consectetur purus at enim semper, in ullamcorper mi rhoncus. Sed id turpis accumsan, fringilla est a, convallis sapien.",
  },
];

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination } from "swiper/modules";
const ReviewCard = () => {
  return (
    <div className=" max-h-fit   mb-6 px-2 mt-2">
      <h1 className="text-center text-3xl text-black  from-neutral-600">
        Our Customer
      </h1>
      <Swiper
        pagination={{ clickable: true }}
        freeMode={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
   
     {reviewData.map((review, index) => (
          <SwiperSlide key={review.name} className=" cursor-pointer mb-5 animate-infinite-scroll ">
            <div
              key={index}
              className="flex flex-col mx-auto gap-2 mt-8 mb-8  border border-black max-w-md h-64 w-full bg-white dark:bg-neutral-900 p-5 rounded-md shadow-md hover:duration-150 duration-150"
            >
              <div className="flex  flex-row justify-between w-full">
                <div className="flex flex-row justify-between w-full">
                  <p className="text-xs">{review.name}</p>
                  <p className="text-xs">{review.date}</p>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full ">
                <h3 className="text-xl font-bold">{review.title}</h3>
                <div className="text-xs">
                  <div className="flex flex-row">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-sm">{review.content}</div>
            </div>
          </SwiperSlide>
        ))}


        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
};

export default ReviewCard;
