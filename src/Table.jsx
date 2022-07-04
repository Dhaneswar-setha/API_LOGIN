const Table = ({ data }) => {
    return (
      <table>
        <tbody>
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
          {data.map((item) => (
            <tr key={item.id}>
             <td>{item.baseline}</td>
   
     <td>{item.contactnumber}</td>
      
     <td>{item.createdon}</td>
      
     <td>{item.gender}</td>
       
     <td>{item.status}</td>
       
     <td>{item.students}</td>
       
     <td>{item.userid}</td>
       
     <td>{item.username}</td>
       
     <td>{item.usertype}</td>
       
     <td>{item._id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  