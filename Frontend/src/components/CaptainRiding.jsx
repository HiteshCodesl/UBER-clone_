import React, { useRef , useState} from 'react'
import { Link } from 'react-router-dom'
import FinishRide from './FinishRide'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function CaptainRiding(props) {
   const [finishRidePanel, setFinishRidePanel] = useState(false)
   const finishRidePanelRef = useRef(null)

  useGSAP(function () {
    if (finishRidePanel) {
       gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)"
       })
    } else {
       gsap.to(finishRidePanelRef.current, {
          transform: 'translateY(100%)'
       })
    }
 }, [finishRidePanel])

  return (
    <div className='h-screen realtive'>

    <div className="fixed p-6 top-0 flex items-center justify-between w-screen">

    <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

  <Link to="/captain-home" className=' h-10 w-10 bg-white flex items-center justify-center rounded-full m-3 '>
      <i className=' text-lg font-bold ri-logout-box-r-line h-7'></i>
  </Link>
    </div>
  <div className='h-4/5'>
  <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
  </div> 
  

  <div className='h-1/5 relative p-6 flex items-center justify-between bg-yellow-400' onClick={()=>{
   setFinishRidePanel(true)
  }}>

  <h5 className='p-1 absolute red text-center items-center justify-center w-full top-0' onClick={() => {
           
          }}><i className='text-3xl text-black ri-arrow-down-wide-line'></i></h5>

    <h4 className='text-xl width-full font-semibold '>4 KM away</h4>
    <Link to="/finish-ride" className='w-full bg-green-500 text-white flex justify-center font-semibold p-4  mt-5 rounded-lg'>Complete Ride</Link>
  </div>

  <button  ref={finishRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8">
             <FinishRide setFinishRidePanel={setFinishRidePanel}  />  
    </button>

  </div>
  )
}

export default CaptainRiding
