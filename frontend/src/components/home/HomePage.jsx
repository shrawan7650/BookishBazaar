import Banner from "../banner/Banner";
import Banner_2 from "../../components/banner/Banner2";
import Banner3 from "../../components/banner/Banner3";
// import Banner4 from "../../components/banner/Banner4";
import Banner5 from "../../components/banner/Banner5";
import Banner6 from "../../components/banner/Banner6";
import Feature from "../banner/Feature";
// import Cards from "../course/Cards";
import { useAuth } from "../../helper/context/auth";
import ReviewCard from "../reviewCard/ReviewCard";
// import EffectCard from "../swiper/EffectCard";
import CardBook from "../course/CardBook";
import Layout from "../../../layout/Layout";

const HomePage = () => {
  const { books,loader } = useAuth();

  const freeBook = books.filter((books) => books.value === "Paid");
  // console.log(freeBook);
  return (
    <>
    <Layout>
    <Banner />

<Feature />
<h1 className="text-center text-3xl text-black font-serif font-bold">
  Explore Our Best Sellers
</h1>
{/* <div className=" min-h-[25rem] flex overflow-x-auto">
  {freeBook.map((item) => {
    return <Cards item={item} key={item} />;
  })}
</div> */}
<div
  className={` min-h-[26rem] mt-12  overflow-y-hidden z-30   py-4
 flex overflow-x-auto ${loader?" opacity-50":""}`}
>
  {freeBook.map((item) => {
    return <CardBook item={item} key={item} loader={loader}  />;
  })}
</div>

<Banner_2 />
<h1 className="text-center text-3xl text-black font-serif font-bold">
  Discover More Reads
</h1>
<div className={` min-h-[26rem]${loader?" bg-blur-md ":""} mt-12  overflow-y-hidden z-30   py-4
 flex overflow-x-auto`}>
  {freeBook.map((item) => {
    return <CardBook item={item} key={item} loader={loader} />;
  })}
</div>
<Banner3 />
{/* <Banner4 /> */}
<Banner5 />
<Banner6 />
<ReviewCard />
    </Layout>
     
    </>
  );
};

export default HomePage;
