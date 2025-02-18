import React from 'react'

function LocationSearchPanel(props) {
console.log(props);
  const locations = [

    "24B, Near Kapoor's cafe, sheryians Coding School, Bhopal",
    "22B, Near Malhotra's cafe, sheryians Coding School, dehli",
    "20C, Near sharma's cafe, sheryians Coding School, noida",
    "23A, Near sighaniya's cafe, sheryians Coding School,bihar",
  ]
  return (
    <div >
      {
        locations.map(function (elem, idx) {
          return <> <div key={idx} onClick={() =>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}
          className='flex border-white active:border-black border-2 p-3 rounded-xl items-center justify-start gap-3'>
            <h2 className='bg-[#eee] p-2 flex items-center justify-center rounded-full h-10 w-11'><i className='ri-map-pin-fill text-lg'></i></h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>
          </>
        })
      }

    </div>
  )
}

export default LocationSearchPanel
