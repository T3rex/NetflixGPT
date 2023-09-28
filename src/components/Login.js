import Header from "./Header";
import { Background_IMG } from "../utils/config";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);

  const toogleIsSignIn = () => {
    setisSignIn(!isSignIn);
  };

  const handleClick = () => {};

  return (
    <div className="">
      <div className="absolute w-screen h-screen z-10 bg-black opacity-60"></div>
      <Header />
      <img
        className="w-screen h-screen absolute "
        src={Background_IMG}
        alt="background-image"
      />
      <div className=" absolute bg-black p-14 w-3/12 h-10/12 z-10 bg-opacity-70 mx-auto left-0 right-0 bottom-20 top-20 font-regular">
        <form className="flex flex-col">
          <h1 className="p-3 text-white text-3xl font-semibold my-4">
            {isSignIn ? "Sign In" : "Sign up"}
          </h1>
          {!isSignIn && (
            <input
              className="p-3 m-2 w-full bg-[#333] rounded-s text-white text-lg"
              type="email"
              placeholder="Name"
            />
          )}
          <input
            className="p-3 m-2 w-full bg-[#333] rounded-s text-white text-lg"
            type="email"
            placeholder="Email of phone number"
          />
          <input
            className="p-3 m-2  w-full bg-[#333] text-white rounded-s text-lg"
            type="password"
            placeholder="Password"
          />

          <button
            className="p-3 mx-2 mt-10 text-white font-bold text-lg rounded-md w-full
            bg-[#e50914] font-regular"
            onClick={handleClick}
          >
            {isSignIn ? "Sign In" : "Sign up"}
          </button>

          <div className="mt-5 flex items-center">
            <input
              className="w-10 indeterminate:bg-white checked:bg-green-500 mr-0"
              type="checkbox"
            />
            <label className="text-white font-thin text-sm ml-0">
              Remember me
            </label>
            <p className="text-white font-thin text-sm ml-auto">Need help?</p>
          </div>
          {isSignIn ? (
            <p className="text-white  text-md mt-10 p-4">
              New to Netflix?{" "}
              <span
                className="font-bold cursor-pointer hover:underline"
                onClick={toogleIsSignIn}
              >
                Sign up now.
              </span>
            </p>
          ) : (
            <p className="text-white  text-md mt-10 p-4">
              Already signed up?{" "}
              <span
                className="font-bold cursor-pointer hover:underline"
                onClick={toogleIsSignIn}
              >
                Sign In now.
              </span>
            </p>
          )}
          {isSignIn && (
            <div>
              <p className="text-white  text-xs  p-4 font-thin">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <a className="text-blue-500">Learn more.</a>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
