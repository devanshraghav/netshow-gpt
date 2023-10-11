import React from "react";
import { Background_Image, Header_Logo } from "../utils/constants";
import AuthenticationForm from "../components/AuthenticationForm";

const Authentication = () => {
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
