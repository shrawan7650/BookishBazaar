import { Link } from "react-router-dom"

import { MdError } from "react-icons/md";
const PaymentCancle = () => {
  return (
    <div className="bg-gray-100 h-screen">
    <div className="bg-white p-6 relative  md:mx-auto">
    
      <MdError className=" text-red-600  absolute left-[48%] text-5xl text-center" />
      <div className="text-center relative mt-20">
        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Cancle!</h3>
        <p className="text-gray-600 my-2">Thank you for  secure online payment.</p>
        <p> Have a great day!</p>
        <div className="py-10 text-center">
          <Link to="/" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
            GO BACK 
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PaymentCancle