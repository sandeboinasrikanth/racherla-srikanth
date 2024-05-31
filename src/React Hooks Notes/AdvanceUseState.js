import React, {useState} from 'react'

function AdvanceUseState() {
    const [firstname, setFirstname]=useState("pavan");
    const [lastname, setLastname]=useState("kalyan");
    const [age, setAge]=useState(28);

    const ChangeFirstname=()=>{
        setFirstname("Srikanth");
    }

    const ChangeLastname=()=>{
        setLastname("Yadav")
    }

    const ChangeAge=()=>{
        setAge(30)
    }
  return (
    <div>
      <h3>Firstname: {firstname}</h3>
      <button onClick={ChangeFirstname}>Change Firstname</button>
      <h3>Lastname: {lastname}</h3>
      <button onClick={ChangeLastname}>Change lastname</button>
      <h3>Age: {age}</h3>
      <button onClick={ChangeAge}>Change Age Number</button>
      <br /><br />
      <hr />
      <br /><br />
      <Index />
      <br /><hr /><br />
      <Index1 />

    </div>
  )
}

export default AdvanceUseState;

const Index=()=>{

    const initialObj={
        firstname:"emma",
        lastname:"watson",
        age:26
    }

    // function initialObj(){
    //  return{
    //     firstname:"emma",
    //     lastname:"watson",
    //     age:26
    //  }
    // }

    const [data, setData]=useState(initialObj);

    const ChangeFirstName=()=>{
        setData({
            ...data,
            firstname:"Srikanth",
        })
    }

    const ChangeLastName=()=>{
        setData({
            ...data,
            lastname:"Yadav"
        })
    }

    return(
        <div>
            <h3>My FirstName is : {data.firstname} </h3>
            <button onClick={ChangeFirstName}>Change Firstname</button>
            <h3>My LastName is: {data.lastname} </h3>
            <button onClick={ChangeLastName}>Change LastName</button>
            <h3>Age:{data.age}</h3>
        </div>
    )
}

const Index1=()=>{
    const intialArr=[
        {
            id:"qwert",
            firstName:"Kavya",
            lastName:"Marine",
            age:24
        },
        {
            id:"asdf",
            firstName:"Ashok",
            lastName:"Nayak",
            age:25
        },
        {
            id:"zxcv",
            firstName:"Srikanth",
            lastName:"Yadav",
            age:26
        }
    ]
    const [data, setData]=useState(intialArr);
    // console.log(data)

    const handleDelete=(comingId)=>{
       const filterData =data.filter((eachItem)=>{
        return eachItem.id !== comingId;
       })
       setData(filterData)
    //    console.log(filterData)
    }

    return(
        <ul>
            {data.map((eachItem, index)=>{
                const {firstName,lastName,age,id} = eachItem;
                return <li key={index}>
                    <div>My firstname is: <strong>{firstName}</strong> </div>
                    <div>My lastname is: <strong>{lastName}</strong> </div>
                    <div>My Age is: <strong>{age}</strong> </div>
                    <button onClick={()=> handleDelete(id)}>delete me</button>
                    <br /><br />
                </li>
            })}
        </ul>
    )
}
