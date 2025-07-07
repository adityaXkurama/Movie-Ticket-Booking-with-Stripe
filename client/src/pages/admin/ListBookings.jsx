import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../../assets/assets'
import Loading from '../../components/Loading'
import Title from '../../components/admin/Title'
import timeFormat from '../../lib/timeFormat'
import dateFormat from '../../lib/dateFormat'

const ListBookings = () => {

  const currency = '$'
  const [Bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getAllBookings = async()=>{
    setBookings(dummyBookingData)
    setIsLoading(false)
  }

  useEffect(()=>{
    getAllBookings()
  },[])

  return !isLoading ? (
    <>
      <Title text1="List" text2="Bookings"/>

      <div className='max-w-4xl mt-6 overflow-x-auto'>
        <table className='border-collapse w-full text-left text-white rounded-md text-nowrap overflow-hidden'>
          <thead >
            <tr className='bg-primary/20 text-left text-white'>
              <th className='p-2 font-medium pl-5'>User Name</th>
              <th className='p-2 font-medium'>Movie Name</th>
              <th className='p-2 font-medium'>Show Time</th>
              <th className='p-2 font-medium'>Seats</th>
              <th className='p-2 font-medium'>Amount</th>
            </tr>
          </thead>
          <tbody className='font-light text-sm'>
            {
              Bookings.map((item,index)=>(
                <tr key={index} className='border-b bg-primary/5 even:bg-primary/10 border-primary/20'>
                  <td className='p-2 min-w-44 pl-5'>{item.user.name}</td>
                  <td className='p-2'>{item.show.movie.title}</td>
                  <td className='p-2'>{dateFormat(item.show.showDateTime)}</td>
                  <td className='p-2'>{item.bookedSeats.join(", ")}</td>
                  <td className='p-2'>{currency} {item.amount}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  ):
  <Loading />
}

export default ListBookings
