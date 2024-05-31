import React, { useState } from 'react'

const UseStateEx2 = () => {
  return (
    <div>
        <Index />
    </div>
  )
}

export default UseStateEx2



const Index=()=>{
    const [firstname, setFirstname]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    
    // const ChangeFirstName=(e)=>{
    //     // console.log(e.target.value);
    //     setFirstname(e.target.value);
    // }

    // const ChangeEmail=(e)=>{
    //     setEmail(e.target.value)
    // }

    // const ChangePassword=(e)=>{
    //     setPassword(e.target.value)
    // }

    // const HandleInputChange=(e,name)=>{
    //     // console.log(e.target.value, name)
    //     if(name === "firstname"){
    //         setFirstname(e.target.value)
    //     }else if(name === "email"){
    //         setEmail(e.target.value)
    //     }else if(name === "password"){
    //         setPassword(e.target.value)
    //     }

    // }

    const handleSubmit=(e)=>{
        e.PreventDefault();
        let userObj={
            firstname:firstname,
            email:email,
            password:password
        }   
        console.log(userObj)
    }


    return(
        <div>
        <form action="" onSubmit={handleSubmit}>
            <div className="form-content">
                <input 
                type="text" 
                name='firstname' 
                id='firstname' 
                value={firstname}
                placeholder='Enter your Name' 
                // onChange={ChangeFirstName}
                // onChange={(e)=>HandleInputChange(e,"firstname")}
                onChange={(e)=>setFirstname(e.target.value)}
                />
            </div>
            <div className='form-content'>
                <input 
                type="email" 
                name='email' 
                id='email' 
                value={email}
                placeholder='Enter Your Email' 
                // onChange={ChangeEmail}
                // onChange={(e)=>HandleInputChange(e,"email")}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="form-content">
                <input 
                type='password' 
                name='password' 
                id='password' 
                value={password}
                placeholder='Enter Your Password' 
                // onChange={ChangePassword}
                // onChange={(e)=>HandleInputChange(e,"password")}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
        </div>
    )
}
