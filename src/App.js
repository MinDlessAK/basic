import React,{useEffect,useState} from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import Users from './Users'
import CreateUser from './CreateUser';
import { Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';

//function component

function App(){
  const [name,setName]=useState("akash")
  
 
  return(
   <div>
   <h1>Home page</h1>


   {/* routing */}
   {/* <Router>
   <br/>
   
   <br/>
   <Link to="/ClassComponent">Class</Link>
   <br/>
   <Link to="/FunctionalComponent">Functional</Link>
   <br/>
   <Link to="/Users">Users list</Link>
   <br/>
   <Link to="/CreateUser"> Create User</Link>
   <Switch>
 
    <Route path="/ClassComponent"><ClassComponent /></Route>
    <Route path="/FuntionalComponent"><FunctionalComponent/></Route> 
    <Route path="/Users"><Users></Users></Route>
    <Route path="/CreateUser"><CreateUser></CreateUser></Route>
   
    
   </Switch>
   </Router> */}


     
   {/* <ClassComponent name={name} />
   {/* <button onClick={()=>{setName("Uncomment this to use props")}}>Update props</button> */}
   {/* name={name}  */}
   {/* <FunctionalComponent /> */}

   {/* <ClassComponent /> */}
   {/* <FunctionalComponent /> */}


   {/* <Users></Users> */}
   <CreateUser></CreateUser>
 
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
