import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, SetNav] = useState(false);

  const handleNav = () => {
    SetNav(!nav);
  };

  return (
    <div className="flex justify-between items-center  h-24 max-w-full lg:w-full fill-screen mx-0 pb-4  px-4 text-white ">
      <h1 className=" w-full text-5xl font-bold text-[#FFFFA7] font-pacifico">Groovy Cove</h1> 
      <ul className="hidden md:flex items-left">
        <li className="p-4 text-2xl"><Link to='/'><button>Home</button></Link></li>
        <li className="p-4 text-2xl"><Link to='/store'><button>Store</button></Link></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
          {nav ?<AiOutlineMenu className="animate-spin" size = {20}/> :<AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ?' fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-gradient-to-t from-[#83bd75] to-[#a8eb12]  ease-in-out duration-500 z-10' : 'ease-in-out duration-500 fixed left-[-100%] h-full border-r border-r-white-900  top-0 w-[60%] '}>
          <h1 className='w-full text-3xl font-bold text-white m-4'>Groovy Cove</h1>

          <ul className='uppercase p-4'>
              <li className='p-4 border-b border-white-600'><Link to='/'><button>Home</button></Link></li>
              <li className='p-4 border-b border-white-600'><Link to='/store'><button>Store</button></Link></li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
