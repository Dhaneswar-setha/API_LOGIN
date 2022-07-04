import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';

const Products = () => {
   const dispatch = useDispatch();
     const [products, setProducts] = useState([]);
}
const Home = () => {

  const {user} = useSelector(state => state.auth);
  const userNotLogin = () => (
    <>
      <h2>It seem's like you are not login</h2>
      <h3>
        If you have an account, then please <Link to="/login">Login</Link>
      </h3>
      <h3>
        Don't have an account, then please do{" "}
        <Link to="/register">Register</Link>
      </h3>
    </>
  );
  useEffect(() => {
  fetch("https://thinkzone.in.net/thinkzone/sortteacher",{
    method:"POST",
    headers:{
      "year":"2022",
          "managername": "guru@thinkzone.in",
          
    },
   
  })
  .then((response)=>(response.json()))
  .then((result)=>{
    console.log(result)
  })
})
  return (
    <div style={{ marginTop: "100px" }}>
      {user ? (
        <h2>Welcome Back User</h2>
        
     

      ) : (
        <>{userNotLogin()}</>
      )}
        
    </div>
  );
};

export default Home;
