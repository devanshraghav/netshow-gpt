import React from "react";
import { Header_Logo } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Browse = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <div className="flex justify-between">
        <img className="w-44" src={Header_Logo} alt="header-logo" />
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Browse;
