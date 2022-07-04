import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";



const Header = ({ logoutUser, setLogoutUser }) => {
 
  const {user} = useSelector(state => state.auth);
  const logout = () => {
   
  };

 
 
  return (
    <div>
      <header style={{ marginTop: "20px" }}>
        {!user ? (
          <Button
            style={{ width: "100px" }}
            variant="contained"
            color="secondary"
            onClick={logout}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button
              style={{ width: "100px" }}
              variant="contained"
              color="secondary"
            >
              Login
            </Button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
