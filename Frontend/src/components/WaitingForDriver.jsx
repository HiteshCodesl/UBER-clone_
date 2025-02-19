import React from 'react'

function WaitingForDriver() {
  return (
    <div>

    <h5 className='p-1 text-center w-[100%] absoulte top-0' onClick={() => {
        props.WaitingForDriver(false)
    }}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
    
    <div className='flex items-center justify-between'>
        <img className="h-24" src="https://www.kindpng.com/picc/m/719-7191738_round-png-image-man-transparent-png.png" alt="" />
        <div className='mr-4 text-right'>
            <h2 className='text-lg font-medium'>Sam Altman</h2>
            <h4 className='text-xl font-semibold'>MP04 AB 8455</h4>
            <p className='text-sm text-gray-600'>Hundai Verna</p>

        </div>
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

    </div>
</div>
  )
}

export default WaitingForDriver
