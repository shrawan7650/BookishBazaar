
import banner_subscribe from '../../assets/susbcribe-image.png'
const Banner6 = () => {
  return (
    <>
     
    <div className="w-full md:h-[46rem] bg-[#FCEBE6] md:px-20  mt-16 md:mt-18 gap-x-40  px-4 flex  flex-col md:flex-row  ">
 <div className=" order-2 md:order-1 w-full  md:mt-32 mt-12">
 <div className="space-y-6"> <h1 className="text-5xl font-bold">Subscribe Now to Get Regular Updates</h1>
 </div>
<div className='flex flex-row justify-between gap-4 md:mt-20 items-baseline mt-10 mb-5 '>
<input type="text" placeholder="Type here" className="input bg-white w-full max-w-xm" />
  <button className="btn mt-4  px-12 md:mt-6 bg-red-950 hover:bg-slate-900 text-white">Sumbit</button>
</div>
 </div>
 <div className="order-1 w-full ">
 <img className='w-full md:w-[32rem]  rounded-md h-[32rem] md:mb-6 z-1  mt-6 ' src={banner_subscribe}/>
 </div>

   

    </div>
    </>
  )
}

export default Banner6