import React, { useEffect, useState } from 'react'
import BlurCircle from '../components/BlurCircle'
import { dummyBookingData } from '../assets/assets'
import timeFormat from '../lib/timeFormat.js'
import dateFormat from '../lib/dateFormat.js'

const MyBookings = () => {
  const [bookings, setBookings] = useState([])

  const getBookings = ()=>{
    setBookings(dummyBookingData)

  }

  useEffect(()=>{
    getBookings()
  },[])
  
  return (
    <div className='relative px-6 md:px-16 lg:px-24 xl:px-32 mt-40 min-h-[80vh]'>
      <BlurCircle top='-100px' left='0px'/>
      <div>
      <BlurCircle top='0px' left='600px'/>
      </div>
      <h1 className='text-lg font-medium '>My Bookings</h1>
      
    {
      bookings.map((booking,index)=>(
        <div key={index} className='flex flex-col md:flex-row justify-between bg-primary/20 border border-primary/40 max-w-3xl mt-4 p-2'>
          <div className='flex flex-col md:flex-row'>
          <img src={booking.show.movie.poster_path} alt=""  className='md:max-w-45 object-cover aspect-video h-auto object-bottom rounded'/>
          <div className='flex flex-col p-3'>
            <p>{booking.show.movie.title}</p>
            <p>{timeFormat(booking.show.movie.runtime)}</p>
            <p>{dateFormat(booking.show.showDateTime)}</p>
          </div>
          </div>

          <div className='flex flex-col p-4 md:items-end justify-between text-right'>
            <div className='flex items-center gap-4'>
              <p className='text-xl mb-3 font-semibold'>$ {booking.amount}</p>
              {!booking.isPaid && <button className='bg-primary px-4 py-1 rounded-full mb-3 text-sm cursor-pointer'>
              Pay now
              </button>}
            </div>
            <div className='text-sm'>
              <p><span className='text-gray-400'>Total Tickets: </span>{booking.bookedSeats.length}</p>
              <p><span className='text-gray-400'>Seat number: </span>{booking.bookedSeats.join(', ')}</p>
            </div>
          </div>
        </div>
      ))
    }
    


    </div>
  )
}

export default MyBookings
