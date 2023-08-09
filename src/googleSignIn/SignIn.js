import { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const [value, setValue] = useState();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("displayName", data.user.displayName);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("displayName"));
    console.log(localStorage.getItem("displayName"));
  }, [value]);
  return (
    <div>
      {value}
      <button onClick={handleClick}>SignIn with google</button>
    </div>
  );
};

export default SignIn;
