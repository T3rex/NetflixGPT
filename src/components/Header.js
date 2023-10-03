import React, { useState } from "react";
import { Logo, userIcon } from "../utils/config";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRef } from "react";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState();
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef();

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 72) {
        setBgColor("bg-[#141414]");
      } else {
        setBgColor("bg-transparent");
      }
    });
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, []);

  return (
    <div
      className={`h-20 z-20 flex justify-between items-center w-screen fixed transition-all ease-in-out duration-300 ${bgColor}`}
    >
      <img className="w-64 pl-10" src={Logo} alt="logo" />
      {user && (
        <div className="w-full p-5 flex justify-betweenn items-center font-regular">
          <div className="w-4/12 font-bold flex text-gray-300 text  justify-between">
            <h1 className="cursor-pointer hover:text-white">Home</h1>
            <h1 className="cursor-pointer hover:text-white">TV Shows</h1>
            <h1 className="cursor-pointer hover:text-white">Movies</h1>
            <h1 className="cursor-pointer hover:text-white">New & Popular</h1>
            <h1 className="cursor-pointer hover:text-white">My List</h1>
            <h1 className="cursor-pointer hover:text-white">
              Browse by Languages
            </h1>
          </div>
          <div className="flex justify-center items-center ml-auto p-4 gap-2">
            <form
              className={`flex justify-stretch place-items-center rounded-sm ease transition-all duration-300 ${
                searchOpen
                  ? "w-52 border-2 border-white bg-black py-1 px-1"
                  : "w-8 bg-transparent"
              } `}
            >
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className={`h-full cursor-pointer ${
                  searchOpen ? "w-6" : "w-8"
                }`}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setSearchOpen(!searchOpen);
                }}
              >
                <title>Search</title>
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg>
              <input
                className={`h-full focus:outline-none text-lg text-white ${
                  searchOpen ? "visible w-full bg-transparent" : "w-0 invisible"
                } `}
                ref={inputRef}
                onMouseOver={() => inputRef.current.focus()}
                onBlur={() => {
                  setSearchOpen(false);
                }}
                placeholder="Title,Genres"
              ></input>
            </form>
            <img
              className="w-7 h-7 border border-black"
              src={user.photoURL ? user.photoURL : userIcon}
              alt="profilepic"
            />
            {/* <button className="text-white ml-3 font-bold">sign out</button> */}

            <span
              className="ml-1.5 h-0 w-0 border-x-[5px] border-b-0 border-t-[5px] border-solid border-x-transparent border-b-transparent border-t-white transition-transform duration-[367ms] ease-[cubic-bezier(.21,0,0.07,1)] group-hover:rotate-180 sm:ml-2.5"
              onClick={handleClick}
            ></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
