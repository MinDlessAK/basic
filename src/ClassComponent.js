import React from "react";
//class Component & life Cycle Methods & State
/*
class ClassComponent extends React.Component{
    
    constructor(){
        super()
        //state snytax
       this.state={
        name:"akash",
        age:26

       }
    }
    componentDidMount(){
        console.warn("Did mount")
    } 
    componentDidUpdate(){
        console.warn("did update")
    } 

render(){
    console.warn("render")
    return(
       <div>
            <h1>ClassComponent us page</h1>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            <button onClick={()=>{this.setState({name:"priyanshu"})}}>Update</button>


        </div>
    )
}

}
*/

class ClassComponent extends React.Component{
    
    constructor(){
        super();
        
    }
    componentDidMount(){
        // console.warn("Did mount");
        console.warn("props" ,this.props.name)
    } 
    componentDidUpdate(){
        //console.warn("did update")
        console.warn("props is update" ,this.props.name)
    } 

render(){
    // console.warn("render")
    return(
       <div>
            <h1>ClassComponent us page</h1>
            <h2>{this.props.name}</h2>
            <h3>akash</h3>
        </div>
    )
}

}
export default ClassComponent;
