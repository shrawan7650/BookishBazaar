import logo1 from '../../assets/featured-logo1.svg'
import logo2 from '../../assets/featured-logo2.svg'
import logo3 from '../../assets/featured-logo3.svg'
import logo4 from '../../assets/featured-logo4.svg'
import logo5 from '../../assets/featured-logo5.svg'

const Feature = () => {
  return (
    
    <div className='md:w-full  mt-2'>
     
     <h1 className='text-center text-black text-2xl'>AS FEATURED ON</h1>
     <div className='flex flex-wrap justify-evenly'>
      <img src={logo1}/>
      <img src={logo2}/>
      <img src={logo3}/>
      <img src={logo4}/>
      <img src={logo5}/>
      
     </div>
    </div>
  )
}

export default Feature