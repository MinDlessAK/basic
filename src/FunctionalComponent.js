import React,{useEffect,useState} from 'react';
//function component & State & Hooks
/*
function FunctionalComponent(){
  const [name,setname]=useState("akash")
  const [age,setage]=useState(18)
  useEffect(()=>{
    console.warn("hello from hook")
  },[age])
  return(
   <div>
      <h1>FunctionalComponent us page</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <button onClick={()=>setname("Akash Mishra")}>Update name</button>
      <button onClick={()=>setage(21)}>Update age</button>
   </div>
  )
  
  }
  */
 //props
 /*
  function FunctionalComponent(props){

    useEffect(()=>{
      console.warn("check from props",props)
    },[])
    useEffect(()=>{
      console.warn("check from props2 Update",props)
    },[props])
    return(
     <div>
        <h1>FunctionalComponent us page</h1>
      </div>
    )
    
    }
    */
    function FunctionalComponent(){
      const [val,setVal]=useState("akash")
      const test = (e)=>{
        console.warn("test function",e.target.value)
        setVal(e.target.value)
      }
      return(
       <div>
          <h1>FunctionalComponent us page</h1>
          <input type="text" value={val} onChange={test} />
          <button onClick={()=>alert(val)}>Click Me</button>
        </div>
      )
      
      }
  export default FunctionalComponent;