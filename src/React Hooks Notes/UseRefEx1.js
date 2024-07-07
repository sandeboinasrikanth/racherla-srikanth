import React, { useEffect, useRef, useState } from 'react'

function UseRefEx1() {
  return (
    <div>
        <h3>UseRefEx1</h3>
        <Final />
    </div>
  )
}

export default UseRefEx1

const Final=()=>{
    const [firstName, setFirstName] = useState("");
    const renderCount = useRef(1);
    // const [renderCount, setRenderCount] = useState(1);

    // useEffect(()=>{
    //     setRenderCount((prevCount)=>setRenderCount(prevCount+1))
    // })

    useEffect(()=>{
        renderCount.current=renderCount.current+1
    })

    
    return(
        <div>
            <input 
                type="text" 
                name="firstname" 
                id="firstname" 
                value={firstName} 
                onChange={(e)=>setFirstName(e.target.value)} 
            />
            <p>Typing: {firstName}</p>
            <p>Component Rendered {renderCount.current} times</p>
        </div>
    )
}