// import { useAuth } from "../../helper/context/auth"
// import NavBar from "../navbar/NavBar"


const PaymentPage = () => {
//  const{isAuthenticated} = useAuth()
 
  return (
    <>
{
 
 ( <main className="flex min-h-screen flex-col border md:mt-20 items-center justify-between p-8 lg:p-24 bg-slate-100">
 <form className="bg-white w-full max-w-3xl mx-auto px-6 py-8 shadow-md rounded-md flex">
   <div className="w-1/2 pr-8 border-r-2 border-slate-300">
     <label className="text-neutral-800 font-bold text-sm mb-2 block">Card number:</label>
     <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" id="cardNumber" maxLength={19} placeholder="XXXX XXXX XXXX XXXX" defaultValue="4256 4256 4256 4256" />
     <div className="flex gap-x-2 mb-4">
       <div className="flex-1">
         <label className="text-neutral-800 font-bold text-sm mb-2 block">Exp. date:</label>
         <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" id="expDate" maxLength={5} placeholder="MM/YY" defaultValue="12/24" />
       </div>
       <div className="flex-1">
         <label className="text-neutral-800 font-bold text-sm mb-2 block">CCV:</label>
         <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" id="ccvNumber"  maxLength={3} placeholder={123} defaultValue={342} />
       </div>
     </div>
     <label className="text-neutral-800 font-bold text-sm mb-2 block">Card holder:</label>
     <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="cardName"  placeholder="John Doe" defaultValue="John Doe" />
   </div>
   <div className="w-1/2 pl-8">
     <div className="w-full h-56" style={{perspective: 1000}}>
       <div id="creditCard" className="crediCard relative cursor-pointer transition-transform duration-500 ">
         <div className="w-full m-auto rounded-xl shadow-2xl absolute" >
           <img src="https://i.ibb.co/swnZ5b1/Front-Side-Card.jpg" className="relative object-cover w-full h-full rounded-xl" />
           <div className="w-full px-8 absolute top-8 text-white">
             <div className="pt-1">
               <p className="font-light">Card Number</p>
               <p id="imageCardNumber" className="font-medium tracking-more-wider h-6">
                 4256 4256 4256 4256
               </p>
             </div>
             <div className="pt-6 flex justify-between">
               <div>
                 <p className="font-light">Name</p>
                 <p id="imageCardName" className="font-medium tracking-widest h-6">
                   John Doe
                 </p>
               </div>
               <div>
                 <p className="font-light">Expiry</p>
                 <p id="imageExpDate" className="font-medium tracking-wider h-6 w-14">
                   12/24
                 </p>
               </div>
             </div>
           </div>
         </div>
         <div className="w-full m-auto rounded-xl shadow-2xl absolute" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
           <img src="https://i.ibb.co/Fn11jBc/Rear-Side-Card.jpg" className="relative object-cover w-full h-full rounded-xl" />
           <div className="w-full absolute top-8">
             <div className="px-8 mt-12">
               <p id="imageCCVNumber" className="text-black flex items-center pl-4 pr-2 w-14 ml-auto">
                 342
               </p>
               <p className="text-white font-light flex justify-end text-sm mt-2">
                 security code
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </form>
</main>)

}
</>
  )
}

export default PaymentPage