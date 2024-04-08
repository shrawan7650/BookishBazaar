import banner from "../../assets/banner.jpg";
import award1 from "../../assets/award01.png";
import award2 from "../../assets/award02.png";
import award3 from "../../assets/award03.png";
import aboutlogo from "../../assets/about-image.png";
import addlogo from '../../assets/insta-feed-2.jpg'
import { FaTwitter, FaYoutube, FaFacebookF,FaInstagramSquare } from "react-icons/fa";
import Banner6 from "../banner/Banner6";
const AboutPage = () => {
  return (
    <>
      <div className="w-full flex z-0 justify-center items-center flex-col bg-[#FCEBE6] mt-10 min-h-[32rem]">
        <h1 className="md:text-6xl text-4xl text-black  font-medium">
          About Page
        </h1>
        <div className="w-full">
          <p className="text-black text-2xl text-center mt-5 ">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit
          </p>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto md:h-[36rem] bg-white md:px-20   md:mt-18 gap-x-40  px-4 flex  flex-col md:flex-row ">
        <div className=" order-1 md:order-2 md:w-[60%] w-full md:mt-32 mt-12">
          <div className="space-y-6">
            {" "}
            <h1 className="text-4xl font-bold">My Story</h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>

          <div className="border mt-5 border-black"></div>

          <div className="flex gap-10 mt-4">
            <a>
              <FaYoutube className="text-2xl" />
            </a>
            <a>
              <FaTwitter className="text-2xl" />
            </a>
            <a>
              <FaFacebookF className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="order-2 max-w-[100%] ">
          <img
            className="w-full md:w-96  rounded-md h-[28rem] md:mb-6 z-1  mt-16 "
            src={aboutlogo}
          />
        </div>
      </div>

      <div className="max-w-[95%] mx-auto md:h-[36rem] bg-white md:px-20   md:mt-18 gap-x-40  px-4 flex  flex-col md:flex-row-reverse ">
        <div className=" order-1 md:order-2 md:w-[60%] w-full md:mt-32 mt-12">
          <div className="space-y-6">
            {" "}
            <h1 className="text-4xl font-bold">Personal Life</h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
        <div className="order-2 max-w-[100%] ">
          <img
            className="w-full md:w-96  rounded-md h-[28rem] md:mb-6 z-1 mt-16 "
            src={banner}
          />
        </div>
      </div>

      <div className="md:w-full  mt-2">
        <h1 className="text-center text-black text-3xl">AWARDS</h1>
        <div className="flex flex-wrap justify-evenly">
          <div className=" flex flex-col justify-center items-center">
            <img src={award1}  />
            <h3 className="text-2xl" >Best Author Award 2016</h3>
            <p className="text-center">Nemo enim ipsam voluptatem  quia voluptas aspernatur autr<br/> odit aut fugit</p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <img src={award2}  />
            <h3 className="text-2xl" >Best Author Award 2016</h3>
            <p className="text-center ">Nemo enim ipsam voluptatem  quia voluptas aspernatur<br/> aut odit aut fugit</p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <img src={award3}  />
            <h3 className="text-2xl" >Best Author Award 2016</h3>
            <p className="text-center">Nemo enim ipsam voluptatem  quia voluptas aspernatur <br/> aut odit aut fugit</p>
          </div>
        </div>
      </div>

      <div className="w-full flex z-0 justify-center items-center flex-col bg-[#FCEBE6] mt-10 min-h-[32rem]">
        <div className="w-full  flex justify-center">
          <p className=" text-4xl space-x-10 text-slate-700  space-y-10 text-center mt-5 ">
          {"!!!"}Nemo enim ipsam voluptatem quia voluptas sit <br/> aspernatur aut odit aut fugit, sed quia consequuntur <br/> magni dolores eos qui ratione voluptatemt.{"!!!"}
          </p>
        </div>
        <h1 className="md:text-6xl text-4xl text-black  font-medium">
          shrawan kumar
        </h1>
      </div>
      
      <div className="flex flex-col w-full justify-center items-center">
      <FaInstagramSquare className="text-6xl mt-5 cursor-pointer hover:rounded-md" />
      <h2 className="text-2xl text-black">shrawan2401@gmail.com</h2>
      <p>Leo nulla cras augue eros, diam vivamus et lectus volutpat at facilisi tortor porta.</p>
      <button className="flex justify-center items-center px-10 mt-6 py-3 gap-5 text-2xl hover:bg-red-700 hover:text-white  text-black rounded-md">
      <span><FaInstagramSquare /></span>
      <span>visit instagram</span> </button>
      </div>

      <div className="w-full md:h-96 h-32 mt-8 ">
     <img className="w-full md:h-96 h-36 object-cover md:object-fill" src={addlogo}/>
      </div>

      
      <div className="max-w-[95%] mx-auto md:h-[36rem] bg-white md:px-20   md:mt-18 gap-x-40  px-4 flex  flex-col md:flex-row-reverse ">
        <div className=" order-1 md:order-2 md:w-[60%] w-full md:mt-32 mt-12">
          <div className="space-y-6">
            {" "}
            <h1 className="text-6xl font-bold">Need a Speaker for Your Upcoming Event?</h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
          <button className=" px-5 py-1 mt-5 bg-black text-white text-2xl flex items-center">contact me</button>
        </div>
        <div className="order-2 max-w-[100%] ">
          <img
            className="w-full md:w-[28rem]  rounded-md h-[28rem] md:mb-6 z-1  mt-16 "
            src={banner}
          />
        </div>
      </div>

      <Banner6/>  
    </>
  );
};

export default AboutPage;
