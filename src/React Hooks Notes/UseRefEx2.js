import React, { useState ,useRef, useEffect} from 'react'

function UseRefEx2() {
  return (
    <div>
        <h3>useRefEx2</h3>
        <Final />
    </div>
  )
}

export default UseRefEx2

const Final = ()=>{
    const [firstName, setFirstName] = useState("");
    const inputDom = useRef("");

    useEffect(()=>{
        console.log(inputDom)
    })

    const focus =()=>{
        inputDom.current.focus();
    }
    return(
        <div>
            <input 
                ref={inputDom}
                type="text" 
                name="firstname" 
                id="firstname" 
                value={firstName} 
                onChange={(e)=>setFirstName(e.target.value)} 
            />
            <p>Typing: {firstName}</p>
            <button onClick={focus}>Focus</button>
        </div>
    )
}