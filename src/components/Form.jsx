import React from 'react'
import Navbar from './Navbar'

const Form = () => {
    return (
        <>

            <Navbar />
            <div className='bg-black my-0 h-1 flex justify-center items-center w-4/5 mx-auto'></div>
            <p className='text-center font-bold text-3xl my-5'>Start Packing your bagss...</p>
            {/* <div className='bg-img bg-no-repeat  h-96'> */}

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
            <div className='flex justify-center items-center'>
                <button className='bg-teal-700 my-3 rounded-md text-white font-bold p-2 '>Select Flight Class</button>
            </div>
            <div className='bg-black my-0 h-1 flex justify-center items-center w-4/5 mx-auto'></div>
            <div className='flex gap-7 justify-between my-5' >
                <div className='flex '>
                    <div id='about' className='w-4/5 mx-14 bg-amber-300 p-4 drop-shadow-md rounded-md font-bold text-lg '>Embark on a whimsical journey through time and space, where cobblestone streets whisper secrets of ancient civilizations, and sunsets paint the sky in hues of magic. Pack your curiosity, leave behind the ordinary, and let adventure be your compass. We provide you to book a flight from our side, with minimalist approach and not much hassle. Fill the contact form which is on the right side if you have any issues while booking. <p>Regards, TravelleRizz</p><p className='my-2'>~ Your Well Wisher..</p>
                    </div>
                </div>

                <div >
                    <form id='contact' className='flex flex-col bg-orange-400 font-semibold p-4 pb-10 rounded-lg mx-14 drop shadow-md'>
                        <label className='font-bold text-lg' > Name</label>
                        <input className='rounded-md' type="text" />
                        <label className='font-bold text-lg' > Email</label>
                        <input className='rounded-md' type="text" />
                        <label className='font-bold text-lg' > Number</label>
                        <input className='rounded-md' type="text" />
                        <button className='bg-teal-700 my-3 rounded-md text-white font-bold'>Submit</button>

                    </form>

                </div>
            </div>
            <div className='font-bold text-xl my-5 text-center underline'>Contributors: Parshad, Divya, Ayush</div>


            {/* </div> */}
        </>
    )
}

export default Form