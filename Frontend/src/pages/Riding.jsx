import React from 'react'
import {Link } from "react-router-dom"
function Riding() {
  return (
    <div className='h-screen height:100vh '>
        <Link to="/home" className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full m-3 '>
            <i className=' text-lg font-bold ri-home-5-line h-7'></i>
        </Link>
       
        <div className='h-[43%]'>
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-1/2 p-1'>
        <div className='flex items-center justify-between'>
        <img className="h-24 mt-3" src="https://www.kindpng.com/picc/m/719-7191738_round-png-image-man-transparent-png.png" alt="" />
        <div className='mr-4 text-right'>
            <h2 className='text-lg font-medium'>Sam Altman</h2>
            <h4 className='text-xl font-semibold'>MP04 AB 8455</h4>
            <p className='text-sm text-gray-600'>Hundai Verna</p>

        </div>
    </div>

    <div className='flex justify-between flex-col items-center overflow-none '
    >
        <div className='w-full mt-5'>
            <div className='flex item-center gap-5 p-3 border-b-2 '>
                <i className=' text-lg ri-map-pin-2-fill'></i>
                <div>
                    <h3 className='text-lg font-medium'
                    >562/11-A</h3>
                    <p className='text-base -mt-1 text-gray-700'>Kankariya Talab, Ahmadabad</p>
                </div>
            </div>

      
            <div className='flex item-center gap-5 p-3 border-b-29'>
                <i className=' text-lg ri-currency-line'></i>
                <div>
                    <h3 className='text-lg font-medium'
                    >₹193</h3>
                    <p className='text-base -mt-1 text-gray-700'>Cash payment</p>
                </div>
            </div>
        </div>

    </div>
        <button className=' w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg ' >Make a Payment</button>

        </div>
    </div>
  )
}

export default Riding
