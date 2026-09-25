import React from 'react'
function ICard(props) {
  
  return (
    <div style={{border:'10px solid red', height:'300px', width:'250px', marginLeft:'200px'}}> 
        <h2 style={{backgroundColor:'brown',color:'white'}}> ABES ICard Component </h2>
        <img src={props.data.pic} height={50} width={50} alt="ICard" />
      {/* <h2 style={({color:"orange"})}> Name: Avani Goel</h2>
      <h2 style={({color:"orange"})}> Roll No: 12345</h2>
      <h2 style={({color:"orange"})}> Branch: CSE-AIML</h2>
      <h2 style={({color:"orange"})}> Section: C</h2> */}
      <h3>Roll:{props.data.roll}</h3>
      <h3>Name:{props.data.name}</h3>
      <h3>Branch:{props.data.branch}</h3>
    </div>
 
  )
}

export default ICard