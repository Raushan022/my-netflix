import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { useSelector } from "react-redux";

const Body = () => {
  const user = useSelector((store) => store.user);
  return <>{user ? <Browse /> : <Login />}</>;
};

export default Body;
