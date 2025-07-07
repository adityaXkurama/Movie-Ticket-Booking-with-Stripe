import React, { useEffect } from 'react'
import { dummyShowsData } from '../../assets/assets';
import Loading from '../../components/Loading';

const AddShows = () => {

  const currency = "$";
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [selectedMovies, setselectedMovies] = useState(null)
  const [dateTimeSelection, setdateTimeSelection] = useState({})
  const [dateTimeInput, setdateTimeInput] = useState("")
  const [showPrice, setshowPrice] = useState("")

  const fetchNowPlayingMovies = async ()=>{
    setNowPlayingMovies(dummyShowsData)

  }

  useEffect(()=>{
    fetchNowPlayingMovies
  },[])
  
  return nowPlayingMovies>0 ?(
    <>
      
    </>
  ): <Loading />
}

export default AddShows
