import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
           <h5 className="m-2 w-[93%] text-center absolute top-0" onClick={()=>{
            props.setVehiclePanel(false)
     
           }}> <i className="ri-arrow-down-wide-line text-3xl "></i> </h5>
            <h3 className="text-xl m-1 font-semibold mb-3">Choose a Vehicle</h3>

            <div onClick={()=>{
                props.setConfirmRidePanel(true)
            }} className="flex border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between">

               <img className="h-14 mr-3" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"></img>

               <div className="s w-1/2">
                  <h4 className="font-medium text-lg">UberGo <span><i className="ri-user-3-fill"></i>1</span></h4>
                  <h5 className="font-medium text-sm">2 mins away</h5>
                  <p className="font-base text-sm text-gray-700">Afforadable, compact rides</p>
               </div>
               <h2 className="text-xl font-semibold">₹35</h2>
            </div>

            <div onClick={()=>{
                props.setConfirmRidePanel(true)
            }}  className="flex border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between">

               <img className="h-14 mr-3" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"></img>

               <div className="s w-1/2">
                  <h4 className="font-medium text-lg">UberGo <span><i className="ri-user-3-fill"></i>3</span></h4>
                  <h5 className="font-medium text-sm">2 mins away</h5>
                  <p className="font-base text-sm text-gray-700">Afforadable, compact rides</p>
               </div>
               <h2 className="text-xl font-semibold">₹44</h2>
            </div>

            <div  onClick={()=>{
                props.setConfirmRidePanel(true)
            }} className="flex border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between">

               <img className="h-16" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"></img>

               <div className="s w-1/2">
                  <h4 className="font-medium text-lg">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                  <h5 className="font-medium text-sm">2 mins away</h5>
                  <p className="font-base text-sm text-gray-700">Afforadable, compact rides</p>
               </div>
               <h2 className="text-xl font-semibold">₹193</h2>
            </div>

    </div>
  )
}

export default VehiclePanel
