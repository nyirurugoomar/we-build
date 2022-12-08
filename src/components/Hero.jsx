import React from 'react'
import '../App.css';

import icon1 from '../assets/Vector.png'
import icon2 from '../assets/webicon.png'
import icon3 from '../assets/phoneicon.png'



function Hero() {
  return (
    <>
    
    <div className=' w-full  '>
      <div className=''>
        
        <div className='text-center'>
            
                <h2 className='text-xxl font-bold text-white  ml-3'>Discover The best lovely <br /> place <span class='text-style'>Innovation and creativity</span> </h2> 
                   
        </div>
      </div>

      <div  className='w-full h-screen  flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
           
            
            <div className='absolute flex flex-col  md:min-w-[760px] bottom-[5%] bg-white
            mx-1 md:left-1/2 transform md:-translate-x-1/2 
            border border-white rounded-xl text-center shadow-xl mb-40'>
                <p className='text-black font-bold text-36 mb-10'>Our Services</p>
                <div className='flex justify-between flex-wrap px-10'>
                    <p className='flex px-4 py-4 font-bold text-black '>< img src={icon1} alt="icon1"  className='h-6 text-orange'/>  UI/UX</p>
                    <p className='flex px-4 py-4 font-bold text-black'><img src={icon2} alt="icon2" className='h-6 text-orange'/> Webdesign</p>
                    <p className='flex px-4 py-4 font-bold text-black'><img src={icon3} alt="icon3" className='h-6 text-orange'/> Mobile App</p>

                </div>
            </div>
            
        </div>
        <div className='grid md:grid-cols-3 gap-3 px-40 text-center mb-40'>
                <div className='border py-8 rounded-xl shadow-xl bg-orange'>
                    <p className='text-36 font-bold text-white'>100k</p>
                    <p className='text-white   text-20'>Projects Completed</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl bg-orange'>
                    <p className='text-36 font-bold text-white'>24/7</p>
                    <p className='text-white  text-20'>Digital Services Delivered</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl bg-orange'>
                    <p className='text-36 font-bold text-white'>100k</p>
                    <p className='text-white   text-20'>Clients</p>
                </div>
            </div>
    </div>

    <h1 className='text-center text-white py-8'>WE BUILD 2023  All rights reserved
</h1>
        
    </div>
    
    </>
  )
}

export default Hero