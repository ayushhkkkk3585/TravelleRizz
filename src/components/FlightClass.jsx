import React from 'react'
import Navbar from './Navbar'

const FlightClass = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-black my-0 h-1 flex justify-center items-center w-4/5 mx-auto'></div>
    <div>
    <div class="flex justify-center drop-shadow-lg">
                <div class="bg-amber-400 p-14 my-10 rounded-lg flex">
                    <div class="flex flex-col mr-4">
                        <label className='font-bold text-lg '>From</label>
                        <input className='rounded-md h-7 border-black border-2' placeholder='Enter your Source' type="text" id="from" />
                    </div>
                    <div>
                        <img src="/src/assets/plane.png" className='w-24 mr-5' alt="" />
                    </div>
                    <div class="flex flex-col mr-4">
                        <label className='font-bold text-lg '>To</label>
                        <input className='rounded-md h-7 border-black border-2 ' placeholder='Enter your Destination' type="text" id="to" />
                    </div>

                    <div class="flex flex-col">
                        <label className='font-bold text-lg '>Date</label>
                        <input className='rounded-md h-7 border-black border-2' type="date" placeholder='Enter Date' id="date" />
                    </div>
                </div>
            </div>

    </div>
    </>
  )
}

export default FlightClass