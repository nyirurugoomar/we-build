import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.png'
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24  px-20 bg-black '>
      <h1 className='w-32'><img src={logo} alt=''/></h1>
      <ul className='hidden md:flex'>
        
        <li className='p-4 text-32 text-white cursor-pointer'>Home</li>
        
        <li className='p-4 text-32 text-white cursor-pointer'>Works</li>
        
        <li className='p-4 text-32 text-white cursor-pointer'>
            <button className='rounded-2xl bg-orange w-40 h-12'>Apply</button>
        </li>
        {/* <li className='p-4 text-white'>About</li>
        <li className='p-4 text-white'>Contact</li> */}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} color={'white'}/> : <AiOutlineMenu size={30} color={'white'} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-24 '><img src={logo} alt=''/></h1>
          <li className='p-4 border-b border-white text-white'>Home</li>
          <li className='p-4 border-b border-white text-white'>Works</li>
          <li className='p-4 border-b border-white text-white'>Apply</li>
          {/* <li className='p-4 border-b border-white'>About</li>
          <li className='p-4'>Contact</li> */}
      </ul>
    </div>
  );
};

export default Navbar;