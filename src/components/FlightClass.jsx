import React, { useState } from 'react';
import Navbar from './Navbar';
import './firebase';
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

const FlightClass = () => {
    const handleChange = async (e) => {
        e.preventDefault();
        const selectedAirlines = e.target.dropdowns.value;
        const selectedClass = e.target.dropdownClass.value;
        const seatNo = e.target.seatNo.value;

      
        const data = {
            selectedAirlines: selectedAirlines,
            selectedClass: selectedClass,
            seatNo: seatNo,
            timestamp: serverTimestamp() // Add timestamp here
        };

        const db = getFirestore();
        await addDoc(collection(db, 'Flight'), data);
        console.log('Data added to Firestore successfully:', data);
    }

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSelectClass = (e) => {
        setSelectedClass(e.target.value);
    };
    return (
        <>
            <Navbar />
            <div className='bg-black my-0 h-1 flex justify-center items-center w-4/5 mx-auto'></div>
            <div>
                <form onSubmit={handleChange}>
                    <div className="flex justify-center drop-shadow-lg">
                        <div className="bg-amber-400 p-14 my-10 rounded-lg flex gap-2 flex-col">
                            <label className='text-black font-bold text-lg' >Select the Airlines :</label>
                            <select name="dropdowns" className='rounded-md border-black border-2 p-1' value={selectedOption} onChange={handleSelectChange}>

                                <option value="" className='rounded-md border-black border-2 p-1'>Choose from below</option>
                                <option value="Air India">Air India</option>
                                <option value="IndiGo">IndiGo</option>
                                <option value="Qatar Airways">Qatar Airways</option>
                            </select>
                            <p className='bg-white rounded-md p-1 font-semibold text-lg '>Selected Airlines: {selectedOption}</p>

                            <label className='text-black font-bold text-lg' >Select the Class :</label>
                            <select id="dropdown" name="dropdownClass" className='rounded-md border-black border-2 p-1' value={selectedClass} onChange={handleSelectClass}>
                                <option value="" className='rounded-md border-black border-2 p-1'>Choose from below</option>
                                <option value="Economy">Economy</option>
                                <option value="Premium Economy">Premium Economy</option>
                                <option value="Business Class">Business Class</option>
                                <option value="First Class">First Class</option>
                            </select>
                            <p className='bg-white rounded-md p-1 font-semibold text-lg '>Selected Class : {selectedClass}</p>
                            <label className=' font-bold text-lg'> Enter Seat No.</label>
                            <input type="text" className='rounded-md border-black border-2 p-1' name="seatNo" placeholder='Enter seat no. from D1-D10' />
                            <button className='bg-teal-700 my-3 rounded-md text-white font-bold p-2 '>Submit</button>
                            

                        </div>
                    </div>

                </form>


            </div>
            <div className='bg-black my-0 h-1 flex justify-center items-center w-4/5 mx-auto'></div>
            <div className='flex gap-7 justify-between my-5' >
                <div className='flex '>
                    <div id='about' className='w-4/5 mx-14 bg-amber-300 p-4 drop-shadow-md rounded-md font-bold text-lg '>Embark on a whimsical journey through time and space, where cobblestone streets whisper secrets of ancient civilizations, and sunsets paint the sky in hues of magic. Pack your curiosity, leave behind the ordinary, and let adventure be your compass. We provide you to book a flight from our side, with minimalist approach and not much hassle. Fill the contact form which is on the right side if you have any issues while booking. <p className='my-6'>~ Regards, TravelleRizz</p>
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



        </>
    )
}

export default FlightClass