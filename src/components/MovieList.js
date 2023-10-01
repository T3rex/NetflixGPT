import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div>
      <h1 className="text-3xl p-3 text-white">{props.title}</h1>
      <div className="p-6 font-regular overflow-hidden">
        <div className="flex overflow-x-scroll no-scrollbar">
          {props.movies?.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
