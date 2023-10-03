import icon from "../utils/images/info-circle-svgrepo-com.png";

const VideoTitle = (props) => {
  return (
    <div className="w-full aspect-video  pl-24 pt-[20%] absolute text-white bg-gradient-to-tr from-black font-regular">
      <h1 className="w-full text-6xl font-bold">{props.title}</h1>
      <p className=" w-1/4 text-lg my-5">{props.overview}</p>
      <div className="flex">
        <button className="w-32 h-11 font-bold rounded-md text-lg bg-white text-black  flex items-center justify-center mr-4 hover:bg-opacity-80">
          <img
            src={"https://www.svgrepo.com/show/95124/play-button.svg"}
            className="w-5 mr-2"
            alt="play-icon"
          />
          Play
        </button>
        <button className="w-40 h-11 font-bold rounded-md text-lg bg-gray-500 bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-25">
          <img src={icon} className=" w-6 mr-2" alt="info-icon" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
