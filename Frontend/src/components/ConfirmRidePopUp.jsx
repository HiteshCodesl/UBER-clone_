import React from 'react'
import { Link } from 'react-router-dom'

function ConfirmRidePopUp(props) {
  return (
    <div className='h-screen'>
    <h5 className='p-1 text-center w-[93%] absoulte top-0' onClick={() => {
     props.setRidePopUpPanel(false)
}}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
<h3 className='text-2xl font-semibold mb-5'>Confirm this ride to Start</h3>
<div className='flex items-center justify-between bg-yellow-500 p-3 rounded-xl'>
<div className='flex gap-3 items-center'>
   <img className="h-10 w-10 rounded-full " src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="" />
   <h2 className='text-xl font-semibold'>Harsh patel</h2>
</div>
<h5 className='font-semibold text-lg'>
 2.2 KM
</h5>
</div>
<div className='flex justify-between flex-col items-center'
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

   <div className='flex item-center gap-5 p-3 border-b-2'>
     <i className=' text-lg ri-map-pin-user-fill'></i>
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
 <Link to="/captain-riding" className='w-full flex justify-center bg-green-500 text-white font-semibold p-2 mt-5 rounded-lg'>Accept</Link>

<button onClick={()=>{
props.setConfirmRidePopUpPanel(false)
props.setRidePopUpPanel(false)
 }} className='w-full bg-red-500 text-gray-700 font-semibold p-2 mt-5 rounded-lg'>Cancel</button>

</div>
    </div>
  )
}

export default ConfirmRidePopUp
