import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard.jsx'
import BlurCircle from '../components/BlurCircle.jsx'

const Movies = () => {
  return dummyShowsData.length>0?(
    <div className='px-6 md:px-12 lg:px-24 xl:px-36 min-h-[80vh] relative my-40 mb-60 overflow-hidden'>
      <BlurCircle top='150px' left='0px'/>
      <BlurCircle bottom='50px' right='50px'/>
      <h1 className='text-xl font-medium my-4'>Now Showing</h1>
      <div className='flex flex-wrap gap-8 mt-5 max-sm:justify-center'>
        {
          dummyShowsData.map((movie)=>(
            <MovieCard key={movie._id} movie={movie}/>
          ))
        }
      </div>
    </div>
  ):
  (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-center text-3xl font-bold'>No movies available</h1>
    </div>
  )
}

export default Movies
