import React, { useState, useMemo, useEffect } from 'react'

function UseMemo() {
  return (
    <div>
        <Final />
    </div>
  )
}
export default UseMemo

const Final=()=>{
  const [number, setNumber]=useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(()=>{
    return  slowFunction(number);
  },[number]) ;

  const themeChange=useMemo(()=>{
    return {
      background: dark ? "black":"white",
      color: dark ? "white" : "black",
    }
  },[dark]);

  useEffect(()=>{
    console.log("theme changed");
  },[themeChange])
  
    return(
        <div>
            <input 
              type="number" 
              name="number" 
              id="number" 
              value={number}
              onChange={(e)=>setNumber(Number(e.target.value))}
            />
            <button onClick={()=>{
              setDark(!dark)

            }}>Change theme</button>
            <br /><br />
            <div>
              <h2 style={themeChange} >Change the Number: ${number}</h2>
            </div>
        </div>
    )
};

const slowFunction = (number) =>{
  for (let i=0; i<10000; i++){};
  console.log('slow function')
  return number*2;
}