import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import google from "../../../image/google.png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <button
        onClick={handleSignInWithGoogle}
        className="btn btn-warning w-100 text-white"
      >
        <img height="25" src={google} alt="" /> Login with Google
      </button>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default SocialLogin;
