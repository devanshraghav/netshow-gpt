import React, { useEffect } from "react";
import { Background_Image, Header_Logo } from "../utils/constants";
import AuthenticationForm from "../components/AuthenticationForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Redux/userSlice";

const Authentication = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <div className="w-screen h-screen absolute opacity-50 bg-center bg-black"></div>
      <div className="absolute z-10">
        <img className="w-44" src={Header_Logo} alt="logo" />
      </div>
      <div>
        <img
          className="w-full h-screen bg-center"
          src={Background_Image}
          alt="background"
        />
      </div>

      <AuthenticationForm />
    </div>
  );
};

export default Authentication;
