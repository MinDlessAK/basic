import React,{useState} from "react";
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
        user.map((item)=>
        <div>{item.name}</div>
        )
       }
       </div>

     )
 }
 export default Users