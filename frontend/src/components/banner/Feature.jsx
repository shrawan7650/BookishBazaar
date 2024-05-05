import logo1 from '../../assets/featured-logo1.svg'
import logo2 from '../../assets/featured-logo2.svg'
import logo3 from '../../assets/featured-logo3.svg'
import logo4 from '../../assets/featured-logo4.svg'
import logo5 from '../../assets/featured-logo5.svg'

const Feature = () => {
  return (
    
    <div className='md:w-full h-fit  relative w-full p-16 mb-12 overflow-y-hidden  overflow-x-hidden '>
     
     <h1 className='text-center absolute top-0 left-[40rem]   text-black text-2xl'>AS FEATURED ON</h1>
     <div className=' w-full  flex absolute left-0 bottom-0 '>
     <div className='flex w-[40rem] shadow-2xl px-44  animate-infinite-scroll'>
      <img src={logo1}/>
      <img src={logo2}/>
      <img src={logo3}/>
      <img src={logo4}/>
      <img src={logo5}/>
      <img src={logo4}/>
      <img src={logo5}/>
      <img src={logo4}/>
      <img src={logo5}/>
      
     </div>
     </div>
    </div>
  )
}

export default Feature