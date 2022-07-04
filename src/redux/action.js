
import{LOGIN_START} from  "./actionType";
import{LOGIN_SUCCESS} from  "./actionType";
import{LOGIN_FAIL} from  "./actionType";
import{FETCH_START} from  "./actionType";
import{FETCH_SUCCESS} from  "./actionType";
import{FETCH_FAIL} from  "./actionType";
//  import * as types from "./actionType";
import axios from "axios";


const loginStart=()=>({
    type:LOGIN_START,

    
});
const loginSucess=(token)=>({
    type:LOGIN_SUCCESS,
    payload:token
});

const loginFail=(error)=>({
    type:LOGIN_FAIL,
    payload:error
  
});

const fetchStart=()=>({
    type:FETCH_START,

    
});
const fetchSucess=(token)=>({
    type:FETCH_SUCCESS,
    payload:token
});

const fetchFail=(error)=>({
    type:FETCH_FAIL,
    payload:error
  
});

export const loginInitate = (email, password,usertype) =>{
   let  data={
        userid:email,
        password:password,
        usertype:usertype,
    }
    console.log(data);
    return function(dispatch){
        dispatch(loginStart());
        axios
        .post("https://thinkzone.in.net/thinkzone/authenticateuser", data)
        .then((response) => {
          console.log("responseapi", response);
          dispatch(loginSucess(response.data))
        })
        .catch((error) =>dispatch(loginFail(error.response.data.message)));
    };
};
export const fetchInitate = (year,managername) =>{
    let  data={
        year:year,
        managername:managername,
        
     }
     console.log(data);
     return function(dispatch){
         dispatch(fetchStart());
         axios
         .post("https://thinkzone.in.net/thinkzone/sortteacher", data)
         .then((response) => {
           console.log("responseapi", response);
           dispatch(fetchSucess(response.data))
         })
        //  .catch((error) =>dispatch(fetchFail(error.response.data.message)));
     };
 };
 


