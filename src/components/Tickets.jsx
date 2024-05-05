import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { getFirestore, getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import Anicursor from './Anicursor';

const Tickets = () => {
  const db = getFirestore();
  const [ticket, setTicket] = useState([]);
  const [flights, setFlights] = useState([])
  const ticketRef = collection(db, "destinations");
  const flightRef = collection(db, "Flight");

  useEffect(() => {
    const getTicket = async () => {
      // Create a query to order documents by timestamp and limit to the latest one
      const q = query(ticketRef, orderBy("timestamp", "desc"), limit(1));
      const data = await getDocs(q);

      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filterData);
      setTicket(filterData);
    };

    getTicket();
  }, []);

  useEffect(() => {
    const getFlight = async () => {
      // Create a query to order documents by timestamp and limit to the latest one
      const q = query(flightRef, orderBy("timestamp", "desc"), limit(1));
      const data = await getDocs(q);

      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filterData);
      setFlights(filterData);
    };

    getFlight();
  }, []);

  return (
    <>
       <Anicursor/> 
      <Navbar />
      <div className='bg-black my-0 h-1 flex justify-center items-center w-4/5 mx-auto'></div>
      {ticket.map((tick) => (
        <div key={tick.id}>
          <div className='flex drop-shadow-2xl justify-center items-center mt-5 p-5'>
            <div className='bg-white w-1/3 rounded-l-lg'>
              <div className='flex'>
                <img className='w-9 h-9 m-7' src="/logo.png" alt="img" />
                <p className='my-8 font-bold text-2xl'>TravelleRizz</p>
              </div>

              <div className='flex flex-row justify-between'>
                <div className='flex flex-col mx-10'>
                  <p className='list-none font-semibold text-sm text-slate-600'>{tick.Date}</p>
                  <p className='list-none font-bold text-2xl'>Vivaan</p>
                </div>
                <div className='flex flex-col mx-12'>
                  <p className='list-none font-semibold text-sm text-slate-600'>Boarding time</p>
                  <p className='list-none font-bold text-2xl'>11:35AM</p>
                </div>
              </div>

              <div className='flex flex-row justify-between'>
                <div className='flex flex-col mx-10'>
                  <p className='list-none font-semibold text-sm text-slate-600'>From</p>
                  <p className='list-none font-bold text-2xl'>{tick.Source}</p>
                </div>
                <div className='flex flex-col mr-20'>
                  <p className='list-none font-semibold text-sm text-slate-600'>To</p>
                  <p className='list-none font-bold text-2xl'>{tick.Destination}</p>
                </div>
              </div>

              {flights.map((fly) => (
                <div key={fly.id} className='flex flex-col justify-between items-center mb-11 mx-12'>
                  <p className='list-none font-semibold text-sm text-slate-600'>Airlines</p>
                  <p className='list-none font-bold text-2xl'>{fly.selectedAirlines}</p>
                  <p className='list-none font-semibold text-sm text-slate-600'>Departure Time</p>
                  <p className='list-none font-bold text-2xl'>12:30PM</p>
                </div>
              ))}
            </div>

            {flights.map((fly) => (
              <div key={fly.id} className='bg-blue-900 text-white flex flex-col list-none pt-16 pb-16 w-5/5 p-6 rounded-r-lg'>
                <p className='font-bold text-2xl'>{fly.selectedClass}</p>
                <p className='font-bold text-2xl'>Vivaan</p>
                {ticket.map((tick) => (
                  <div key={tick.id} className='gap-3'>
                    <p className='font-semibold text-sm'>From</p>
                    <p className='font-bold text-2xl'>{tick.Source}</p>
                    <p className='font-semibold text-sm'>To</p>
                    <p className='font-bold text-2xl'>{tick.Destination}</p>
                  </div>
                ))}
                {flights.map((fly) => (
                  <div key={fly.id}>
                    <p className='font-semibold text-sm'>Seat No:</p>
                    <p className='font-bold text-2xl'>{fly.seatNo}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          ''
        </div>
      ))}

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
      <div className='font-bold text-xl my-5 text-center underline'>Made with Love for YOU ✈️ </div>


    </>

  )
}

export default Tickets
