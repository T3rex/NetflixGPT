import icon from "../utils/images/info-circle-svgrepo-com.png";

const VideoTitle = (props) => {
  return (
    <div className="w-screen overflow-x-hidden aspect-video pl-24 pt-[20%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{props.title}</h1>
      <p className=" w-1/4 text-lg my-5">{props.overview}</p>
      <div className="flex">
        <button className="w-32 h-11 font-bold rounded-md text-lg bg-white text-black  flex items-center justify-center mr-4 hover:bg-opacity-80">
          <img
            src={"https://www.svgrepo.com/show/95124/play-button.svg"}
            className="w-5 mr-2"
          />
          Play
        </button>
        <button className="w-40 h-11 font-bold rounded-md text-lg bg-gray-500 bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-25">
          <img src={icon} className=" w-6 mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
