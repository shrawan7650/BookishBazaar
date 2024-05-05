import { useAuth } from "../../../helper/context/auth";
import PaginationNumber from "../../swiper/PaginationNumber"
const items = [
  {
    id: 1,
    imageSrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/regionalbooks/d/w/o/sreemad-bhagwat-gita-original-imagzmkhyh4n5wgh.jpeg?q=70&crop=false",
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["#photography", "#travel", "#winter"]
  },
  {
    id: 2,
    imageSrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/regionalbooks/d/w/o/sreemad-bhagwat-gita-original-imagzmkhyh4n5wgh.jpeg?q=70&crop=false",
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["#photography", "#travel", "#winter"]
  },{
    id: 3,
    imageSrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/regionalbooks/d/w/o/sreemad-bhagwat-gita-original-imagzmkhyh4n5wgh.jpeg?q=70&crop=false",
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["#photography", "#travel", "#winter"]
  },{
    id: 4,
    imageSrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/regionalbooks/d/w/o/sreemad-bhagwat-gita-original-imagzmkhyh4n5wgh.jpeg?q=70&crop=false",
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["#photography", "#travel", "#winter"]
  },
];

const Products = () => {

  const { books } = useAuth();
  return (
   <>
    <div className=" w-full flex flex-wrap gap-4 py-5 px-5">
      {/* <p>{books.length}</p> */}
    <div className=" flex flex-wrap mx-auto gap-5">
        {books.map((item, index) => {
          return (
            <>
               <div className="max-w-sm rounded  overflow-y-auto h-[350px] md:w-[350px]  border border-black overflow-hidden shadow-lg">
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
            </>
          );
        })}
      </div>
    </div>
    
  
    </>
  )
}

export default Products
