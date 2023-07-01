import React,{useState} from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import Users from './Users'
//function component

function App(){
  const [name,setName]=useState("akash")
  return(
   <div>
   <h1>Home page</h1>
   {/* <ClassComponent name={name} />
   {/* <button onClick={()=>{setName("Uncomment this to use props")}}>Update props</button> */}
   {/* <FunctionalComponent name={name} /> */}
   {/* <ClassComponent /> */}
   {/* <FunctionalComponent /> */}
   <Users></Users>
   </div>
  )
  
  }
  
//Virtual DOM
/*
function App() {
  const [last,setlast]=React.useState(5)
    return (
    <div>
       <ul>
         <li>Items 1</li>
         <li>Items 2</li>
         <li>Items 3</li>
         <li>Items 4</li>
         <li>Items {last} </li>
       </ul>
       <button onClick={()=>setlast(6)} >Update 1 Items</button>//handle automatically
    </div>
  );
}
*/
//jsx(javascripte extensible language)
/*
function App(){
let data="priyashu gadha hai"
return(
 <div>
 <h1>{data}</h1>

 </div>
)

}
*/
export default App;
