import React from 'react'
import phone_image from '../assets/phone_shop.png'
import market_agency from '../assets/market_agency.png'
import bb_image from '../assets/bb_image.png'
import Finano_image from '../assets/Finano_image.png'


function Works() {
  return (
    <>
    {/* =============01==================== */}
      <div  className='w-full h-screen  flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div>    
            <img className='w-full mt-40' src={phone_image} alt='/'/>    
          </div> 
           <div className='flex flex-col justify-center md:items-start w-full ml-10  py-40 px-2'>
               <p className='text-white text-32 mb-80 font-thin'>01 <br/>
               <h1 className='font-bold text-36'>Shop</h1>
               
               <p className='text-15 font-normal mr-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt massa sed justo mollis, at accumsan leo hendrerit. Integer diam ex, placerat sed interdum in, tincidunt et eros. Nunc et interdum sem, convallis cursus dui. Phasellus quam lorem, tristique vel auctor in, luctus vehicula nunc. Nam
               </p>
               <br />
               <button className='rounded bg-orange w-40 h-12 font-bold '>Get Info</button>
               </p>               
           </div>    
        </div>
 
    </div>
    {/* =============02==================== */}

    <div  className='w-full h-screen  flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            
            <div className='flex flex-col justify-center md:items-start w-full ml-10   py-40 px-2'>
                <p className='text-white text-32 mb-80 font-thin'>02 <br/>
                <h1 className='font-bold text-36'>Marketing Agency</h1>
                
                <p className='text-15 font-normal mr-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt massa sed justo mollis, at accumsan leo hendrerit. Integer diam ex, placerat sed interdum in, tincidunt et eros. Nunc et interdum sem, convallis cursus dui. Phasellus quam lorem, tristique vel auctor in, luctus vehicula nunc. Nam
                </p>
                <br />
                <button className='rounded bg-orange w-40 h-12 font-bold'>Get Info</button>
                </p>
    
            </div>
            <div>
                <img className='w-full mt-40 ' src={market_agency} alt='/'/>               
            </div> 
 
        </div>

        
    </div>
    {/* =============03==================== */}

    <div  className='w-full h-screen  flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div>
                <img className='w-full mt-40' src={bb_image} alt='/'/>               
            </div> 
            <div className='flex flex-col justify-center md:items-start w-full ml-10  py-40 px-2'>
                <p className='text-white text-32 mb-80 font-thin'>03 <br/>
                <h1 className='font-bold text-36'>B.B</h1>
                
                <p className='text-15 font-normal mr-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt massa sed justo mollis, at accumsan leo hendrerit. Integer diam ex, placerat sed interdum in, tincidunt et eros. Nunc et interdum sem, convallis cursus dui. Phasellus quam lorem, tristique vel auctor in, luctus vehicula nunc. Nam
                </p>
                <br />
                <button className='rounded bg-orange w-40 h-12 font-bold'>Get Info</button>
                </p>
    
            </div>
            
 
        </div>

        
    </div>

    {/* =============04==================== */}

    <div  className='w-full h-screen  flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            
            <div className='flex flex-col justify-center md:items-start w-full ml-10  py-40 px-2'>
                <p className='text-white text-32 mb-80 font-thin'>04 <br/>
                <h1 className='font-bold text-36'>Finano</h1>
                
                <p className='text-15 font-normal mr-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt massa sed justo mollis, at accumsan leo hendrerit. Integer diam ex, placerat sed interdum in, tincidunt et eros. Nunc et interdum sem, convallis cursus dui. Phasellus quam lorem, tristique vel auctor in, luctus vehicula nunc. Nam
                </p>
                <br />
                <button className='rounded bg-orange w-40 h-12 font-bold'>Get Info</button>
                </p>
    
            </div>

            <div>
                <img className='w-full mt-40' src={Finano_image} alt='/'/>               
            </div> 
            
 
        </div>
        
        <h1 className='text-center text-white py-8'>WE BUILD 2023  All rights reserved</h1>
    </div>
    
    </>
    
  )
}

export default Works