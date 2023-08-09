import React, { Fragment, useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MovieContext } from "../context/MoiveContext";

import "./Login.css";

import { auth, provider } from "../googleSignIn/config";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const { loginClasses, setLoginClasses } = useContext(MovieContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(MovieContext);

  const backdropHandler = () => {
    setLoginClasses({ backDrop: "", modal: "" });
  };

  const clearField = () => {
    setUserName("");
    setPassword("");
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setError("Invalid User Name or Password.");
      clearField();
      return;
    }

    if (!userName.includes("@")) {
      setError("Email must have @");
      clearField();
      return;
    }

    if (password.length < 6) {
      setError("Password length must be greater than 6 Characters");
      clearField();
      return;
    }

    localStorage.setItem("displayName", userName.split("@")[0]);
    setLoginClasses({ backDrop: "", modal: "" });
    clearField();
  };

  const loginByGoogleHandler = (e) => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("displayName", data.user.displayName);
      setIsLoggedIn(true);
      setLoginClasses({ backDrop: "", modal: "" });
    });
  };

  return (
    <Fragment>
      <div
        className={`${loginClasses.backDrop} opacity-0 hidden fixed top-0 left-0 z-20 h-screen w-screen bg-black bg-opacity-50 transition-opacity duration-200 ease-linear`}
        onClick={backdropHandler}
      ></div>
      <div
        className={`${loginClasses.modal} hidden opacity-0 fixed z-[50] w-[24rem] bg-white rounded-md px-4 border-2 border-solid border-gray-100 top-24 left-1/3`}
      >
        {/* <div className="w-[24rem] bg-white rounded-md px-4 border-2 border-solid border-gray-100 relative top-14"> */}
        <h3 className="my-6 text-center text-2xl font-bold">Get Started</h3>
        {error && <p className="text-lg text-red-500 text-center">{error}</p>}
        <form className="flex flex-col gap-2" onSubmit={loginSubmitHandler}>
          <div>
            <label htmlFor="username" className="text-xl font-bold pb-1 block">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={userName}
              className="rounded-sm w-full border-2 p-1 border-zinc-300 border-solid"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xl font-bold pb-1 block">
              Password:
            </label>
            <input
              type="text"
              placeholder="Enter your password"
              value={password}
              className="rounded-sm w-full border-2 p-1 border-zinc-300 border-solid"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-orange-600 rounded-md w-full py-1 text-white hover:bg-cyan-100 hover:text-red-500"
            >
              SignIn
            </button>
          </div>
        </form>
        <div className=" mt-6">
          <hr className="bg-gray-800 h-[0.1rem]" />
          <span className="relative -top-[0.95rem] bg-white left-[10rem] text-lg">
            OR
          </span>
        </div>
        <div
          className="py-2 border border-sky-500 flex mb-3 text-xl items-center cursor-pointer rounded-sm hover:bg-cyan-100 hover:text-red-500"
          onClick={loginByGoogleHandler}
        >
          <div className="w-10 px-6">
            <FcGoogle />
          </div>
          <div className=" text-base text-center w-80">
            Continue with Google
          </div>
        </div>
        {/* </div> */}
      </div>
    </Fragment>
  );
};

export default Login;
