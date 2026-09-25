import React from 'react'
import ICard from './ICard'
import cat from '. src\images\cat.png'
function ICardGallery() {
  const student=[
    {
    pic:cat,
    roll:"12345",
    name:"chitrak gaur",
    branch:"CSE-AIML"
  },
   {
    pic:cat,
    roll:"12345",
    name:"prithvi",
    branch:"CSE-AIML"
  },
   {
    pic:cat,
    roll:"12345",
    name:"shivam",
    branch:"CSE-AIML"
  }
]
  return (
    <div style={{ display: 'flex' }}>
        {/* <ICard pic={cat} roll="12345" name="Avani Goel" branch="CSE-AIML"/> */}
        {/* <ICard pic={cat} roll="12346" name="Saksham Ojha" branch="CSE-AIML"/>
        <ICard pic={cat} roll="12347" name="Anshika Gupta" branch="CSE-AIML"/>
        <ICard pic={cat} roll="12348" name="Aastha" branch="CSE-AIML"/>
        <ICard pic={cat} roll="12349" name="Rishabh Sharma" branch="CSE-AIML"/> */}
        {/* <ICard data={student} /> */}
        {
          student.map((ele) =>(
            <ICard data={ele} />
          ))
        }
    </div>
  )
}

export default ICardGallery