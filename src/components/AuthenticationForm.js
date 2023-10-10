import React, { useState, useRef } from "react";
import { performValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Redux/userSlice";

const AuthenticationForm = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleValidation = () => {
    //  validate the form details
    const checkValidData = performValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(checkValidData);

    if (checkValidData) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="absolute rounded-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-96 p-[60px] text-white opacity-80">
      <h1 className="text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      <form className="my-6" onSubmit={(e) => e.preventDefault()}>
        {!isSignInForm && (
          <input
            className="my-4 p-2 w-full focus:outline-none rounded-sm  bg-gray-500"
            type="text"
            placeholder="Name"
            required
            ref={userName}
          />
        )}
        <input
          className="my-4 p-2 w-full focus:outline-none rounded-sm  bg-gray-500"
          type="email"
          placeholder="Email"
          required
          ref={email}
        />
        <input
          className="my-4 p-2 w-full focus:outline-none rounded-sm bg-gray-500"
          type="password"
          placeholder="Password"
          required
          ref={password}
        />
        <p className="text-red-700">{errorMessage}</p>
        <button
          className="bg-[#e50914] my-4 p-2 rounded-sm w-full"
          onClick={() => handleValidation()}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
      </form>
      {isSignInForm ? (
        <p className="text-gray-400">
          New to NetShow?{" "}
          <span
            className="text-white cursor-pointer px-2"
            onClick={() => setisSignInForm(false)}
          >
            Sign up now
          </span>
        </p>
      ) : (
        <p className="text-gray-400">
          Already a user?{" "}
          <span
            className="text-white cursor-pointer px-2"
            onClick={() => setisSignInForm(true)}
          >
            Sign in now
          </span>
        </p>
      )}
    </div>
  );
};

export default AuthenticationForm;
