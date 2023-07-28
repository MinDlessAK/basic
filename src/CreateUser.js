import React,{useState} from 'react'

function CreateUser() {
    const [namee,setname]=useState("");
    const [age,setage]=useState("");
    const [email,setemail]=useState("");
  function makeuser(){
    let data={namee,age,email}
    console.log("hello",data)
  }
  
  return (
    <>
      <h1>CreateUser</h1>
      <br/>
      <br/>
      <input type="text" onChange={(e)=>{setname(e.target.value)}} name="username" value={namee} />
      <br/>
      <br/>
      <input type="number" onChange={(e)=>{setage(e.target.value)}} name="age" value={age} />
      <br/>
      <br/>
      <input type="email"  onChange={(e)=>{setemail(e.target.value)}} name="email" value={email} />
      <br/>
      <br/>
      <button onClick={makeuser}>Create User</button>
    </>
  )
}

export default CreateUser
