import React, { useState, useEffect, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';


   

//Listing
/*
function Users(){
const [user,setUser]=useState([
    {name:"akash",age:'21'},
    {name:"shubham",age:'20'},
    {name:"priyanshu",age:'19'},
    {name:"amar",age:'19'},
    {name:"rajat",age:'21'}
])
     return(
        <div>
       <h1> User listing is here</h1>
       {
        user.map((item,i)=>
        <div key={i}>{item.name},{item.age}</div>
        )
       }
       </div>

     )
 }
*/






/*
//condition
function Users(){
    
    const [user,setUser]=useState([
        {name:"akash",age:'21'},
        {name:"shubham",age:'20'},
        {name:"priyanshu",age:'19'},
        {name:"amar",age:'19'},
        {name:"rajat",age:'21'}
    ])
         return(
            <div>
           <h1> User listing is here</h1>
           
           { user.length===8?<div>yes this is rigth</div>:<div> No, length is 5</div>}
              
           </div>
    
         )
     }
     */





/*
   //fragment  
    //if we have to remove extra html element thats why we use fragment
     function Users(){
    
        const [user,setUser]=useState([
            {name:"akash",age:'21'},
            {name:"shubham",age:'20'},
            {name:"priyanshu",age:'19'},
            {name:"amar",age:'19'},
            {name:"rajat",age:'21'}
        ])
             return(

                //this is fragment we use empty <></> and 
                //it will not show div when inspect but if u write div the it will be diffrente section
                
            // <>
            //    <h1> User listing is here</h1>
            //    <h1> User listing is here</h1>
            //    <h1> User listing is here</h1>
            // </>

            //or you can write fragment insted of div
            <Fragment>
               <h1> User listing is here</h1>
               <h1> User listing is here</h1>
               <h1> User listing is here</h1>
            </Fragment>
        
             )
         }
         */






//install bootstrap
//npm install react-bootstrap bootstrap
//  add css import code in index.js or App.js

//The following line can be included in your src/index.js or App.js file 

//   import 'bootstrap/dist/css/bootstrap.min.css';

function Users() {

  //sapi calling 
useEffect(()=>{
  fetch("http.//dummy.restapiexample.com/api/v1/employees").then((data)=>{
    data.json().then(result=>{
      console.log(result)
    })
  })
},[])
  return (
    <Fragment>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      
    </Fragment>
  );
}


export default Users;
