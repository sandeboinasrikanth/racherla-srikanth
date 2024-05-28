import React from 'react'

function EventHandling() {
    // const clickHandle =(e)=>{
    //     return console.log(e)
    // }

    function clickHandle(e, firstName){
        return(
            console.log("I am cooming from regular fun",e, firstName)
        )
    }

  return (
    <div>
      <button onClick={()=> console.log("I am coming from Inline")} className='button'>Click Me</button>
      <br /><br />

      <button onClick={(e)=>{
        return clickHandle(e,"srikanth")
      }} className='button'>Click here</button>
    </div>
  )
}

export default EventHandling
