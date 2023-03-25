import React, { useState } from 'react'

const StateAssignmentTwo = () => {
    const[arr,setArr] = useState([])

    const addNUmber = () => {
       var num = Math.floor(Math.random() * 10);
       setArr((arr)=> [...arr, num])
    }

  return (
    <section>
        <button onClick={addNUmber}>Click me!</button>
        <ul>
        {
            arr.map((num)=>(
                <li>{num}</li>
                ))
            }
        </ul>
        </section>
  )
}

export default StateAssignmentTwo