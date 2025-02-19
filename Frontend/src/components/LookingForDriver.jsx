import React from 'react'

function LookingForDriver(props) {
    return (
        <div>

            <h5 className='p-1 text-center w-[93%] absoulte top-0' onClick={() => {
                props.setVehicleFound(false)
            }}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Lookinng for a Driver</h3>

            <div className='flex justify-between flex-col items-center'
            >
                <img className="h-20" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />

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

            </div>
        </div>
    )
}

export default LookingForDriver
