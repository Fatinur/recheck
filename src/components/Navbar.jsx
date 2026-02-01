import Tag from "../assets/logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from 'react'


const Navbar = () => {
    const [isOpen , setIsOpen] = useState (false)


  return (
      <nav className='flex items-center justify-between  w-[99vw] h-12 md:h-[12vh] flex-row z-100 relative'>
        <div className='text-brand font-bold text-2xl  max-w-[20vw]'>
              <img src={Tag} alt="" /> 
        </div>

        <div>
          <TiThMenuOutline className="md:hidden text-4xl cursor-pointer text-sec" onClick={() => setIsOpen(!isOpen)}/>
          <ul className={`md:flex md:items-center self-center  gap-8 
  ${isOpen ? "flex flex-col bg-amber-50 absolute top-16 left-0 md:w-full w-1/2 text-right" : "hidden"}`}>
                <li className="text-sec hover:bg-sec hover:text-white hover:scale-110 w-full rounded-lg "  ><a href="/">Home</a></li>
                <li className="text-sec hover:bg-sec hover:text-white hover:scale-110 w-full rounded-lg"  ><a href="/">About</a></li>
                <li className="text-sec hover:bg-sec hover:text-white hover:scale-110 w-full rounded-lg"  ><a href="/">Services</a></li>
                <li className="text-sec hover:bg-sec hover:text-white hover:scale-110 w-full rounded-lg"  ><button className="cta-btn">Shop</button></li>      
                
          
            </ul>
        </div>
      </nav>
  )
}

export default Navbar