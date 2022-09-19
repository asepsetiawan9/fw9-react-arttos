import React from "react";
import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  if (token){
    return children;
  }
  return <Navigate 
    to={ "/login"}
    state={{ errorMsg: "You must login to access this page" }} />

  // return auth ? (
  //   children
  // ) : (
  //   <Navigate
  //     to="/login"
  //     replace={true}
  //     state={{ errorMsg: "You must login to access this page" }}
  //   />
  // );
};

export default PrivateRoute;
