import Banner from "../banner/Banner";
import Banner_2 from "../../components/banner/Banner2";
import Banner3 from "../../components/banner/Banner3";
import Banner4 from "../../components/banner/Banner4";
import Banner5 from "../../components/banner/Banner5";
import Banner6 from "../../components/banner/Banner6";
import Feature from "../banner/Feature";
import Cards from "../course/Cards";
import { useAuth } from "../../helper/context/auth";

const HomePage = () => {
  const { books } = useAuth();

  const freeBook = books.filter((books) => books.category === "Free");

  return (
    <>
    
      <Banner />
      <Feature />

      <div className=" min-h-[25rem] flex overflow-x-auto">
        {freeBook.map((item) => {
          return <Cards item={item} key={item} />;
        })}
 
      </div>
      <Banner_2 />
      <Banner3 />
      <Banner4 />
      <Banner5 />
      <Banner6 />
    </>
  );
};

export default HomePage;
