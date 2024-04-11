
import banner from '../../assets/banner.jpg'
const Banner5 = () => {
  return (
    <>
    
    <div className="w-full md:h-[40rem] bg-[white] md:px-20    px-4 flex flex-col md:flex-row  ">
 <div className=" order-2 md:order-2 w-full  md:mt-32 mt-12">
 <div className="space-y-6"> <h1 className="text-4xl font-bold">
Upcoming Book</h1>
  <p>
  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p></div>

  <button className="btn mt-4 md:mt-6 bg-yellow-600 text-white">Notify now</button>
 </div>
 <div className="order-1 w-full ">
 <img className='w-full md:w-96  rounded-md h-[36rem] md:mb-6 z-1  mt-10 ' src={banner}/>
 </div>

   

    </div>
    </>
  )
}

export default Banner5