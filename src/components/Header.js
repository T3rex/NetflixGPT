import React from "react";
import { Logo, userIcon } from "../utils/config";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

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
    <div className="absolute z-10 flex justify-between items-center w-screen">
      <img className="w-64 pl-10" src={Logo} alt="logo" />
      {user && (
        <div className="p-5 flex">
          <img
            className="w-8 h-8 border border-black"
            src={user.photoURL ? user.photoURL : userIcon}
            alt="profilepic"
          />
          <button className="text-white ml-3 font-bold" onClick={handleClick}>
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
