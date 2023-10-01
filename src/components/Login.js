import Header from "./Header";
import { Background_IMG } from "../utils/config";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [message, setMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const repassword = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toogleIsSignIn = () => {
    setisSignIn(!isSignIn);
  };

  const handleClick = () => {
    const msg = checkValidData(
      email?.current?.value,
      password?.current?.value,
      username?.current?.value,
      repassword?.current?.value
    );
    setMessage(msg);
    if (msg) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          updateProfile(userCredential.user, {
            displayName: username.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/37626566?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in

          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <div className="absolute w-screen h-screen z-10 bg-black opacity-50"></div>
      <Header />
      <img
        className="w-screen  h-screen absolute "
        src={Background_IMG}
        alt="background"
      />
      <div className=" absolute bg-black p-14 w-3/12 min-h-fit z-10 bg-opacity-70 mx-auto left-0 right-0 bottom-20 top-20 font-regular">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col text-white"
        >
          <h1 className="p-3 text-3xl font-semibold my-4">
            {isSignIn ? "Sign In" : "Sign up"}
          </h1>
          {!isSignIn && (
            <input
              ref={username}
              className="p-3 m-2 w-full bg-[#333] rounded-stext-lg"
              type="text"
              placeholder="Name"
              required
            />
          )}
          <input
            ref={email}
            className="p-3 m-2 w-full bg-[#333] rounded-s text-lg"
            type="text"
            placeholder="Email of phone number"
            required
          />
          <input
            ref={password}
            className="p-3 m-2  w-full bg-[#333] rounded-s text-lg"
            type="password"
            placeholder="Password"
            required
          />
          {!isSignIn && (
            <input
              ref={repassword}
              className="p-3 m-2  w-full bg-[#333] rounded-s text-lg"
              type="password"
              placeholder="Renter Password"
              required
            />
          )}
          {message && <p className="text-yellow-400 p-3">{message}</p>}
          <button
            className="p-3 mx-2 mt-10 font-bold text-lg rounded-md w-full
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
            <label className=" font-thin text-sm ml-0">Remember me</label>
            <p className="font-thin text-sm ml-auto">Need help?</p>
          </div>
          {isSignIn ? (
            <p className=" text-md mt-10 p-4">
              New to Netflix?{" "}
              <span
                className="font-bold cursor-pointer hover:underline"
                onClick={toogleIsSignIn}
              >
                Sign up now.
              </span>
            </p>
          ) : (
            <p className="  text-md mt-10 p-4">
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
              <p className=" text-xs  p-4 font-thin">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <a className="text-blue-500" href="/">
                  Learn more.
                </a>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
