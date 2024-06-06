import React, { useState, useEffect } from 'react'

function AdvanceUseEffect() {
  return (
    <div>
        <Final />
    </div>
  )
}

export default AdvanceUseEffect


const Final = ()=>{
  const [count, setCount] = useState(0)
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(()=>{ 
    console.log("Hello this is useEffect", count);

  const resizeHandler = ()=>{
    setPageWidth(window.innerWidth)
  }
  window.addEventListener("resize", resizeHandler);

    return ()=>{
      console.log("I am removing")
      window.removeEventListener("resize", resizeHandler);
    }
  });
  
    return(
        <div>
            <h3>Advanced useEffect</h3>
            <p>{pageWidth}</p>
            <button onClick={()=>{
              setCount(count+1)
            }}>Click</button>
        </div>
    )
}