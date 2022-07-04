import React, { useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory, Link } from "react-router-dom";
import axiox from "axios";
import {useDispatch,useSelector} from "react-redux";
import {loginInitate} from "./redux/action";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));



const Filter = ({ setLogoutUser }) => {
  const classes = useStyles();
  const [year, setYear] = useState("2022");
  const [managername, setManagerName] = useState("guru@thinkzone.in");
  const [products, setProducts] = useState([]);


  let history = useHistory();
let dispatch =useDispatch();
const {user,error} = useSelector(state => state.auth);
// useEffect(()=>{if(year === '2022'  &&  managername === 'guru@thinkzone.in'){
//   history.push("/fetch");
// }},[user]);
useEffect(() => {
        
    fetch("https://thinkzone.in.net/thinkzone/sortteacher",{
method:"POST",
// body:{
//     "year":"2022",
//         "managername": "guru@thinkzone.in",
        
//   },

})
.then((response)=>(response.json()))
.then((result)=>{
//  console.log(result);
setProducts(result);
})
})
 const handleClick = () =>{

 }
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Data Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* <form
        className={classes.root}
        noValidate
        autoComplete="off"
    
      >
        <TextField
          id="year"
          label="year"
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <br />
        <TextField
          id="managerName"
          label="managerName"
          type="text"
          value={managername}
          onChange={(e) => setManagerName(e.target.value)}
        />
        <br />
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
          onClick ={handleClick}
        >
          Submit
        </Button>
      </form> */}
      <h1><u>Manager data</u></h1>
            <table style={{width:"100%"}}>
            <tr>
    <th>baseline</th>
    <th>contactnumber</th>
    <th>createdon</th>
    <th>gender</th>
    <th>status</th>
    <th>students</th>
    <th>userid</th>
    <th>username</th>
    <th>usertype</th>
    <th>ID</th>
  </tr>
   {products.filter((name) => name.managername == "guru", ).map((product)=>( 
//   {products.map((product)=>(
    <tr >
    <td>{product.baseline}</td>
   
    <td>{product.contactnumber}</td>
   
    <td>{product.createdon}</td>
   
    <td>{product.gender}</td>
    
    <td>{product.status}</td>
    
    <td>{product.students}</td>
    
    <td>{product.userid}</td>
    
    <td>{product.username}</td>
    
    <td>{product.usertype}</td>
    
    <td>{product._id}</td>
    </tr>




  ))}
  </table>
  
    </div>
  );
};

export default Filter;
