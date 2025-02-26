import React from 'react'
import {CaptainDataContext} from '../context/CaptainContext'
import { useContext } from 'react'
function CaptainDetails() {

  const {captain} = useContext(CaptainDataContext)
  return (
    <div>
      <div className="flex items-center justify-between mb-8" >
        <div className="flex items-center justify-start gap-3">
            <img className="w-20 rounded-full object-cover" src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="" />
            <h4 className="text-lg font-medium">Harsh patel</h4>
        </div>
        <div className="mr-3">
            <h4 className="text-xl font-semibold">₹295</h4>
            <p className="text-sm">Earned</p>
        </div>

    </div>
    <div className="flex p-3 bg-gray-100  justify-center gap-5 items-start">
        <div className="text-center">
        <i className=" text-3xl mb-2 font-thin ri-timer-2-line"></i>
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Online</p>
        </div>

        <div className="text-center">
        <i className=" text-3xl mb-2 font-thin ri-speed-up-line"></i>
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Online</p>
        </div>

        <div className="text-center">
         <i className=" text-3xl mb-2 font-thin ri-booklet-line"></i>
         <h5 className="text-lg font-medium">10.2</h5>
         <p className="text-sm text-gray-600">Hours Online</p>
        </div>
    </div>
    </div>
  )
}

export default CaptainDetails
