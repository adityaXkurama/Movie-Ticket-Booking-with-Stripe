import axios from "axios";



export const getNowPlayingMovies = async(req, res) => {
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`,{
            headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`},
        })

        const movies= data.results
        // console.log(movies);
        res.json({
            success: true,
            message: "Now Playing Movies",
            movies
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
        
    }
}

