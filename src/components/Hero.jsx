import React from 'react'
import '../App.css';
import {FaBars} from 'react-icons/fa'
import icon1 from '../assets/Vector.png'
import icon2 from '../assets/webicon.png'
import icon3 from '../assets/phoneicon.png'



function Hero() {
  return (
    <>
    
    <div className=' w-full  h-full  '>
      <div className='max-w-[1240px] mx-auto'>
        
        <div className='text-center'>
            
                <h2 className='text-xxl font-bold text-white text-center ml-3'>Discover The best lovely <br /> place <span class='text-style'>Innovation and creativity</span> </h2> 
                   
        </div>
      </div>

      <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
           
            
            <div className='absolute flex flex-col py-10 md:min-w-[760px] bottom-[5%] bg-white
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-white rounded-xl text-center shadow-xl'>
                <p className='text-black font-bold text-36 mb-10'>Our Services</p>
                <div className='flex justify-between flex-wrap px-10'>
                    <p className='flex px-4 py-4 font-bold text-black '>< img src={icon1}  className='h-6 text-orange'/>  UI/UX</p>
                    <p className='flex px-4 py-4 font-bold text-black'><img src={icon2} className='h-6 text-orange'/> Webdesign</p>
                    <p className='flex px-4 py-4 font-bold text-black'><img src={icon3} className='h-6 text-orange'/> Mobile App</p>

                </div>
            </div>
            
        </div>
        <div className='grid md:grid-cols-3 gap-4 px-40 text-center'>
                <div className='border py-8 rounded-xl shadow-xl bg-orange'>
                    <p className='text-36 font-bold text-white'>100k</p>
                    <p className='text-white font-bold  text-36'>Projects</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl bg-orange'>
                    <p className='text-36 font-bold text-white'>24/7</p>
                    <p className='text-white font-bold text-36'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl bg-orange'>
                    <p className='text-36 font-bold text-white'>100k</p>
                    <p className='text-white font-bold  text-36'>Client</p>
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