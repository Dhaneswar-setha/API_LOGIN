import { useEffect, useState } from "react";

import { useDispatch } from 'react-redux';

const Products = () => {
   const dispatch = useDispatch();
     const [products, setProducts] = useState([]);
     const [managername, setManagerName] = useState("");
     const [year, setYear] = useState("");
    useEffect(() => {
        
        fetch("https://thinkzone.in.net/thinkzone/sortteacher",{
    method:"POST",
 
   
  })
  .then((response)=>(response.json()))
  .then((result)=>{
    // console.log(result);
    setProducts(result);
  })
})
// const [query, setQuery] = useState("");
// const [data, setData] = useState([]);
// function filter(year) {

//   var newProduct = year.filter((year,managerName)=>{
// return year === "2022" && managerName === "guru@thinkzone"
//   })
//   console.log(newProduct);
// }
    return (
        <div>
           <input
          className="search"
          placeholder="Search..."
          style={{width:"100%",textAlign:"center"}}
          
        />
            <h1><u>DATA FETCH</u></h1>
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
  {/* {data.filter((name) => name.managername == "guru@thinkzone.in" && name.year == "2022").map((product)=>( */}
  {products.map((product)=>(
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

export default Products;

// import { useEffect, useState } from "react";

// import "./App.css";
// import Table from "./Table";
// import axios from "axios";

// //////////////////////BASIC SEARCH

// // function App() {
// //   const [query, setQuery] = useState("");
// //   return (
// //     <div className="app">
// //       <input
// //         className="search"
// //         placeholder="Search..."
// //         onChange={(e) => setQuery(e.target.value.toLowerCase())}
// //       />
// //       <ul className="list">
// //         {Users.filter((asd) =>
// //           asd.first_name.toLowerCase().includes(query)
// //         ).map((user) => (
// //           <li className="listItem" key={user.id}>
// //             {user.first_name}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// ///////////////////////SEARCH ON A DATATABLE

// // function App() {
// //   const [query, setQuery] = useState("");
// //   const keys = ["first_name", "last_name", "email"];
// //   const search = (data) => {
// //     return data.filter((item) =>
// //       keys.some((key) => item[key].toLowerCase().includes(query))
// //     );
// //   };
// // return (
// //   <div className="app">
// //       <input
// //         className="search"
// //         placeholder="Search..."
// //         onChange={(e) => setQuery(e.target.value.toLowerCase())}
// //       />
// //     {<Table data={Search(Users)} />}
// //   </div>
// // );
// // }


// ////////////////////// API SEARCH

// function Fetch() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.post(`https://thinkzone.in.net/thinkzone/sortteacher?q=${query}`);
//       setData(res.data);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query]);
  
//   return (
//     <div className="app">
//         <input
//           className="search"
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//         />
//       {<Table data={data} />}
//     </div>
//   );
// }

// export default Fetch;
