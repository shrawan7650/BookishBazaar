import { useEffect, useState } from "react";

import { useSearchParams } from 'react-router-dom';
import axios from "axios";

const MoreDetials = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const[deitials,setDetials] = useState({})
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/books_detials/${id}`);
        console.log(response.data.books);
        setDetials(response.data.books);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function
  }, []); 
  console.log(deitials)
  return (
    <div className="md:mt-[5rem] mt-4">
   <div className="w-full md:h-[36rem] bg-white md:px-20   md:mt-18 gap-x-40  px-6 flex  flex-col md:flex-row-reverse  ">
 <div className=" order-1 md:order-2 w-full  md:mt-15 mt-12">
 <div className="space-y-6 text-2xl"> <h1 className="text-4xl font-bold">Author:{deitials.author}<br/></h1>
  <p>
  country: {deitials.country}, year of publishing: {deitials.year}.
  </p>
  <p>
  language: {deitials.language}, pages number :{deitials.pages}.
  </p>
  <p>
  price:₹{deitials.price}.
  </p>
  <p>
  title:{` "${deitials.title}"`}
  </p>
 
  </div>

  <button className="btn mt-4 md:mt-6">Nothing....</button>
  <div className='border mt-5 border-black'></div>
  <div className='mt-5'>
    <p className='text-black'>Shrawan kumar</p>
    <p className='text-black mt-2'>Entrepreneur, Writer and Speaker.</p>
    <div className="flex gap-10 mt-2">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
 </div>
 <div className="order-2 w-full ">
 <img src={deitials.img} className='w-full md:w-96  rounded-md h-[28rem] md:mb-6 z-1   mt-16 ' />
 </div>

   

    </div>
    </div>
  )
}

export default MoreDetials