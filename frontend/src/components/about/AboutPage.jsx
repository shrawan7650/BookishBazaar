import banner from "../../assets/banner.jpg";
import award1 from "../../assets/award01.png";
import award2 from "../../assets/award02.png";
import award3 from "../../assets/award03.png";
import aboutlogo from "../../assets/about-image.png";
import addlogo from '../../assets/insta-feed-2.jpg'
import { FaTwitter, FaYoutube, FaFacebookF,FaInstagramSquare } from "react-icons/fa";
import Banner6 from "../banner/Banner6";
// import AdminHome from "../dashboard/AdminHome";
import { NavLink } from "react-router-dom";
import Layout from "../../../layout/Layout";
const AboutPage = () => {
  return (


  <>
    <Layout>
      <div className="w-full flex z-0 justify-center items-center flex-col overflow-y-hidden bg-[#FCEBE6] min-h-[32rem]">
        <h1 className="md:text-6xl text-4xl text-black  font-medium">
          About Page
        </h1>
        <div className="w-full">
          <p className="text-black text-2xl text-center mt-5 ">
          Welcome to Our Story
          </p>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto md:h-[36rem] bg-white md:px-20   md:mt-18 gap-x-40  px-4 flex  flex-col md:flex-row ">
        <div className=" order-1 md:order-2 md:w-[60%] w-full md:mt-32 mt-12">
          <div className="space-y-6 cursor-pointer">
            {" "}
            <h1 className="text-4xl font-bold">Our Journey</h1>
            <p>
              Founded in [2023], [BookS] has been on a mission to bring the joy of reading to book lovers everywhere. We believe that every story matters and strive to curate a diverse collection of books that cater to all tastes and interests.
            </p>
          </div>

          <div className="border mt-5 border-black cursor-pointer"></div>

          <div className=" cursor-pointer flex gap-10 mt-4">
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
      My name is Shrawan Kumar Rai, and I am from Dhanbad, Jharkhand. I developed a passion for reading books starting from class 8. Today, I am pursuing my studies at Chandigarh University in Computer Science. Reading has always been a significant part of my life, providing me with knowledge, inspiration, and endless opportunities for growth.
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
    

      {/* <div className="md:w-full   mt-2">
      <h1 className="text-center text-black text-3xl">Awards & Recognition</h1>
        <div className="flex  flex-row  justify-evenly mx-auto  animate-infinite-scroll">
          <div className=" flex flex-col justify-center items-center">
            <img src={award1}  />
            <h3 className="text-2xl">Best Bookstore Award 2019</h3>
            <p className="text-center">We{" '"}re proud to have been recognized for our dedication to promoting literacy and fostering a love for reading in our community.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={award2} alt="Award 2" />
            <h3 className="text-2xl">Community Impact Award 2020</h3>
            <p className="text-center">Our commitment to supporting local authors and hosting literary events has earned us this prestigious accolade.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={award3} alt="Award 3" />
            <h3 className="text-2xl">Best Online Bookstore 2021</h3>
            <p className="text-center">{`We're honored to have received this award, which recognizes our efforts to provide a seamless and enjoyable online shopping experience for book enthusiasts.`}</p>
          </div>
        </div>
      </div> */}

      <div className="w-full flex z-0 justify-center items-center flex-col bg-[#FCEBE6] mt-10 min-h-[32rem]">
        <div className="w-full flex justify-center">
          <p className="text-4xl space-x-10 text-slate-700 space-y-10 text-center mt-5">
            {`"Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.`}
          </p>
        </div>
        <h1 className="md:text-6xl text-4xl text-black font-medium">
          - [Shrawan Kumar]
        </h1>
      </div>
      
      <div className="flex flex-col w-full justify-center items-center">
      <FaInstagramSquare className="text-6xl mt-5 cursor-pointer hover:rounded-md" />
      <h2 className="text-2xl text-black">shrawan2401@gmail.com</h2>
      <p>Feel free to reach out to us for inquiries, suggestions, or just to say hello!</p>

      <button className="flex hvr-buzz justify-center items-center px-10 mt-6 py-3 gap-5 text-2xl hover:bg-red-700 hover:text-white  text-black rounded-md">
      <span><FaInstagramSquare /></span>
      <span className="">visit instagram</span> </button>
      </div>

      <div className="w-full md:h-96 h-32 mt-8 ">
     <img className="w-full md:h-96  h-36 object-cover md:object-fill" src={addlogo}/>
      </div>

      
      <div className="max-w-[95%] mx-auto md:h-[36rem] bg-white md:px-20   md:mt-18 gap-x-40  px-4 flex  flex-col md:flex-row-reverse ">
        <div className=" order-1 md:order-2 md:w-[60%] w-full md:mt-32 mt-12">
          <div className="space-y-6">
            {" "}
            <h1 className="text-6xl font-bold">Book Your Event Speaker</h1>
            <p>
              Looking for a knowledgeable and engaging speaker for your upcoming literary event or book club meeting? Look no further! Our experienced team members are available to share their insights and expertise on a variety of literary topics.
            </p>
          </div>
        <NavLink to="/contact">  <button className=" hover:rounded-badge px-5 py-1 mt-5 bg-black text-white text-2xl flex items-center">contact me</button></NavLink>
        </div>
        <div className="order-2 max-w-[100%] ">
          <img
            className="w-full   md:w-[28rem]  rounded-md h-[28rem] md:mb-6 z-1  mt-16 "
            src={banner}
          />
        </div>
      </div>

      <Banner6/>  
    </Layout>
    </>
  
  );
};

export default AboutPage;
