import React, {useEffect,useState}from "react";
const Counter=()=>{
    const [number,setNumber]=useState(0);
    const[text,setText]=useState('Hello')
    useEffect(()=>{
    console.log('Call from global console');
    setText(Math.random())
    },[]);
    return(<div>
        <div>{number}</div>
        <div>New App</div>
        <div>{text}</div>
        <button onClick={()=>setNumber(Math.random())}>Update Number</button>
        <button onClick={()=>setText(Math.random())}>Update Text</button>
        </div>);
}
export default Counter;