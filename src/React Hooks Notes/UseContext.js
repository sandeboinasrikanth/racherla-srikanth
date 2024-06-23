import React, { useContext, useState } from 'react';
import { UserContext } from './useContextEx1';


function UseContext() {
  return (
    <div>
        <ParentComponent />
    </div>
  )
}

export default UseContext

/*
const ParentComponent = () =>{
  const [userDetails, setUserDetails] = useState({
    firstname:"emma",
    lastname:"watson",
    email:"emmawatson@gmail.com"
  })
  return(
    <div>
      <h3>Parent Component</h3>
      <ChildComponent userDetails={userDetails} />
    </div>
  )
}
const ChildComponent = (props) =>{
  return(
    <div>
      <h3>Child Component</h3>
      <SubChildComponent userDetails={props.userDetails} />
    </div>
  )
}
const SubChildComponent = ({userDetails}) =>{
  return(
    <div>
      <h3>SubChild Component</h3>
      <p>FirstName:{userDetails.firstname}</p>
      <p>LastName:{userDetails.lastname}</p>
      <p>Email:{userDetails.email}</p>
    </div>
  )
}

*/

const ParentComponent = () =>{
  const [userDetails, setUserDetails] = useState({
    firstname:"emma",
    lastname:"watson",
    email:"emmawatson@gmail.com"
  })
  return(
    <div>
      <h3>Parent Component</h3>
      <ChildComponent />
    </div>
  )
}
const ChildComponent = () =>{
  return(
    <div>
      <h3>Child Component</h3>
      <SubChildComponent />
    </div>
  )
}
const SubChildComponent = () =>{
  const data = useContext(UserContext);
  const {firstName,lastName, email} = data;
  return(
    <div>
      <h3>SubChild Component</h3>
      <p>FirstName:{firstName}</p>
      <p>LastName:{lastName}</p>
      <p>Email:{email}</p>
    </div>
  )
}





