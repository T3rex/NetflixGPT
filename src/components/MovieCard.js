import React from "react";

const MovieCard = (props) => {
  return (
    <div className="flex-none w-52 mr-10">
      <img
        className="w-full"
        src={"https://image.tmdb.org/t/p/w500/" + props.movie.poster_path}
      />
    </div>
  );
};

export default MovieCard;
