import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = (props) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(props.movieId);

  return (
    <div className="relative-z-10">
      <iframe
        className="w-screen aspect-video"
        // src={
        //   "https://www.youtube.com/embed/" +
        //   trailerVideo?.key +
        //   "?si=iYeXq6_MFtEut64z&amp;controls=0&autoplay=1&mute=1&showinfo=0"
        // }
        src={
          "https://www.youtube.com/embed/hXzcyx9V0xw?si=kkuUoORWFT9sBazB&autoplay=1&mute=1&loop=1&playlist=hXzcyx9V0xw"
        }
        allowFullScreen="allowFullScreen"
        frameBorder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
