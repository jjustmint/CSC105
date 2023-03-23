import { useState } from "react"

function StateAssignmentOne() {
  const[num,setNum] = useState(0);
  return(
    <section>
    <button onClick={() => {setNum((num) => num+1)}}>
        {num}
    </button>
    </section>
  )
  
}

export default StateAssignmentOne
