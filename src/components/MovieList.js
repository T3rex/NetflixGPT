import MovieCard from "./MovieCard";
import left from "../utils/images/left-arrow-svgrepo-com.svg";
import { useState } from "react";

const MovieList = (props) => {
  const handleLeft = () => {
    let scroller = document.getElementById(props.title);
    scroller.scrollLeft = scroller.scrollLeft - 500;
  };

  const handleRight = () => {
    let scroller = document.getElementById(props.title);
    scroller.scrollLeft = scroller.scrollLeft + 500;
  };

  return (
    <div className="mt-5">
      <h1 className="text-3xl p-3 text-white">{props.title}</h1>
      <div className="px-6 font-regular overflow-hidden relative">
        <button
          className="absolute  h-full p-2 hover:opacity-70  hover:bg-gradient-to-r hover:from-gray-50"
          onClick={handleLeft}
        >
          <img className="w-5  " src={left} />
        </button>
        <button
          className="absolute right-6 p-2  h-full hover:opacity-70  hover:bg-gradient-to-l hover:from-gray-50"
          onClick={handleRight}
        >
          <img className="w-5 rotate-180" src={left} />
        </button>
        <div
          className="flex overflow-x-scroll no-scrollbar scroll-smooth"
          id={props.title}
        >
          {props.movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
