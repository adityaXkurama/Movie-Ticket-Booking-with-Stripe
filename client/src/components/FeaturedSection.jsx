import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "./MovieCard";

const FeaturedSection = () => {
    const navigate = useNavigate()
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurCircle top="0" right="-80px"/>
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <button onClick={()=>navigate('/movies')} className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
          View All{" "}
          <ArrowRight className="group-hover:translate-x-0.5 transition size-4" />
        </button>
      </div>

      <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8">
        {dummyShowsData.slice(0,4).map((show)=>(
            <MovieCard key={show._id} movie={show}/>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button onClick={()=>{navigate('/movies');scrollTo(0,0)}} className="px-6 py-2 bg-primary hover:bg-primary-dull transition cursor-pointer mb-10 rounded-full text-sm font-medium">
            Show More
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
