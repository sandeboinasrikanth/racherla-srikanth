import React, {useEffect, useState} from 'react'

function UseEffect() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

    useEffect(()=>{
      console.log("Hello i am Coming from useEffect", count)
    },[count])
    
  return (
    <div>
      <h3>learn useEffect</h3>
      <h3>{count}</h3>
      <h3 onClick={()=>{setToggle(!toggle)}} >{toggle ? "Open" : "Close"}</h3>
      <button onClick={()=>{
        setCount(count+1)   
      }}>click</button>
    </div>
  )
}

export default UseEffect
