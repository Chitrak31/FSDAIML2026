import React, { useState } from 'react'

function StateHandling() {
    const[red,setRed]= useState(0);
    const[green,setGreen]= useState(0);
    const[blue,setBlue]= useState(0);

 function increment(){
  setCounter(counter+10);
 } 
   function changeBGcolor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
   }
    return (
    <div>
 <h2 style={{color:'brown'}}>Counter App</h2>
    <h2>Counter=(counter)</h2>
    <button onClick={increment}>increaseCounter</button>
    <button onClick={()=>setCounter(counter-5)}>decreaseCounter</button>
    <button onClick={changeBGcolor}>changeBGcolor</button>
    <div style={{height:'200px',width:'200px',backgroundColor:`rgb(${red},${green},${blue})`}}></div>
    </div>
  )
}

export default StateHandling