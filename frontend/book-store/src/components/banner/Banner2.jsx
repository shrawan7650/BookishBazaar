import { FaTwitter, FaYoutube, FaFacebookF,FaInstagramSquare } from "react-icons/fa";
import banner from '../../assets/book-cover4-200x300.png'
const Banner_2 = () => {
  return (
    <>
  
    <div className="w-full md:h-[36rem] bg-white md:px-20   md:mt-18 gap-x-40  px-4 flex  flex-col md:flex-row-reverse  ">
 <div className=" order-1 md:order-2 w-full  md:mt-32 mt-12">
 <div className="space-y-6"> <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quos explicabo mollitia. Beatae facilis suscipit illo, autem voluptas reprehenderit! Obcaecati quisquam consectetur odit ratione alias expedita, pariatur enim repellat consequuntur.
  </p></div>

  <button className="btn mt-4 md:mt-6 bg-red-800 text-white">Secondary</button>
  <div className=''></div>
  <div className='mt-5'>
    <p className='text-black hover:underline'>Shrawan kumar</p>
    <p className='text-black mt-2'>Entrepreneur, Writer and Speaker.</p>
  
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
 <div className="order-2 w-full ">
 <img className='w-full md:w-96  rounded-md h-[28rem] md:mb-6 z-1   mt-16 ' src={banner}/>
 </div>

   

    </div>
    </>
  )
}

export default Banner_2