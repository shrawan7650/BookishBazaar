import Banner6 from "../banner/Banner6";
import { IoMail } from "react-icons/io5";
import { FaTwitter, FaYoutube, FaFacebookF,FaInstagramSquare } from "react-icons/fa";
const Contact = () => {
  return (
 
  <>
     <div className='w-full flex  z-0 justify-center items-center flex-col bg-[#FCEBE6] mt-10 min-h-[32rem]'>
    <h1 className='md:text-6xl text-4xl text-black  font-medium'>Contact</h1>
    <div className="w-full"><p className='text-black text-2xl text-center mt-5 '>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p></div>
       </div>
       <div>
       <div className="my-6 mx-auto max-w-3xl h-[40rem] relative top-[-80px] bg-white font-[sans-serif]">
         <div className="flex flex-col float-start px-8 py-6 space-x-3 space-y-2">
         <h1 className="text-3xl text-[#333] text-start font-extrabold ">Get In Touch</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
          <span className="flex items-center gap-5 text-1.5xl"> <IoMail className="text-2xl text-gray-800" />book2401@gmail.com</span>
         </div>
        
            <form className="mt-8 z-0 space-y-4">
                <input type='text' placeholder='Name'
                    className="w-[80%]   rounded-md py-3 ml-10 md:ml-12 px-4 bg-gray-100 text-sm outline-blue-500" />
                 <input type='text' placeholder='Name'
                    className="w-[80%]  rounded-md py-3 px-4 ml-10 md:ml-12 bg-gray-100 text-sm outline-blue-500" /> 
                     <input type='text' placeholder='Name'
                    className="w-[80%]  rounded-md py-3 px-4 ml-10 md:ml-12 bg-gray-100 text-sm outline-blue-500" />
                <textarea placeholder='Message' rows="6"
                    className="w-[80%] rounded-md px-4 ml-10 md:ml-12 bg-gray-100 text-sm pt-3 outline-blue-500"></textarea>
                <button type='button'
                    className="text-white bg-blue-500 ml-24 md:ml-16 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-[40%]">Send</button>
            </form>
            
            {/* <div className="border mt-5 border-black"></div> */}

<div className="flex gap-5 mt-8 md:gap-10 md:mt-4 md:ml-[32rem] text-black cursor-pointer">
  <a>
    <FaYoutube className="text-2xl" />
  </a>
  <a>
    <FaTwitter className="text-2xl" />
  </a>
  <a>
    <FaFacebookF className="text-2xl" />
  </a>

  <a>
    <FaInstagramSquare className="text-2xl" />
  </a>
</div>
          
            
        </div>
       </div>
       <Banner6 className=""/></>
 
  );
};

export default Contact;
