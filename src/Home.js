import React from "react";
import firebase, { auth } from "./firebase";
import { Link } from "react-router-dom";

const login = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

const logout = () => {
  auth.signOut();
};

const Home = ({ user }) => {
  return (
    <>
      <h1>Welcome to the Celebrity App</h1>
      <div>
        {user ? (
          <>
            <button onClick={logout}>Logout {user.email}</button>
            <Link to="/juliaRoberts">Julia Roberts</Link>
            <Link to="/tomCruise">Tom Cruise</Link>
            <Link to="/bradPitt">Brad Pitt</Link>
          </>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </>
  );
};

export default Home;
