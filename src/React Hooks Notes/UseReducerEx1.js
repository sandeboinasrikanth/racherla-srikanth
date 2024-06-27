import React, { useReducer, useEffect, useState } from 'react'

function UseReducerEx1() {
  return (
    <div>
        <Final />
    </div>
  )
}

export default UseReducerEx1





const reducer=(state, action)=>{
    if(action.type === "UPDATE_USERS_DATA"){
        return{
            ...state,
            usersData:action.payLoad,
        }
    };
    if(action.type === "LOADING"){
        return{
            ...state,
            isLoading:action.payLoad,
        }
    }

    if(action.type === "DELETE_USER"){
        const newUsers = state.usersData.filter((eachUser)=>{
        return  eachUser.id !== action.payLoad;
        });
        return{
            ...state,
            usersData:newUsers,
        }
    }

    if(action.type === "ONCLICK_EDIT"){
        return{
            ...state,
            isEditing:action.payLoad,
        }
    }
    if(action.type === "UPDATE_USER"){
        const newUsers= state.usersData.map((eachUser)=>{
            if(eachUser.id === action.payLoad.id){
                return{
                    id:action.payLoad.id,
                    name:action.payLoad.name,
                    email:action.payLoad.email
                };
            }else{
                return eachUser;
            }
        });
        return {
            ...state,
            usersData:newUsers,
        }
        
    }
    return state;
}

const Final=()=>{

    const fetchUsersData = async (apiURL)=>{
        dispatch({type:"LOADING", payLoad:true});
        dispatch({type:"ERROR", payLoad:{status:false, msg:""}})
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            dispatch({type:"UPDATE_USERS_DATA",payLoad:data});
            dispatch({type:"LOADING", payLoad:false});
            dispatch({type:"ERROR", payLoad:{status:false, msg:""}})
        } catch (error) {
            console.log(error)
            dispatch({type:"ERROR",payLoad:error});
            dispatch({type:"LOADING", payLoad:false});
            dispatch({type:"ERROR", payLoad:{status:true, msg:error.message}})
            
        }
    }

    useEffect(()=>{
        fetchUsersData("https://jsonplaceholder.typicode.com/users");
    },[])

    const initialState={
        usersData:[],
        isLoading:false,
        isError:{status:false, msg:""},
        isEditing:{status:false, id:"", name:"", email:""},
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    if(state.isLoading){
        return <div>
            <h1>Loading...</h1>
        </div>
    }

    const handleDelete=(id)=>{
        dispatch({type:"DELETE_USER", payLoad:id})
    }

    const updateData = (id, name, email) => {
        dispatch({
            type:"UPDATE_USER", 
            payLoad:{ id,name, email,}
        });
        dispatch({
            type:"ONCLICK_EDIT", 
            payLoad:{ status:"false", id:"",name:"",email:""}
        })
    }
    

    return(
        <div>
            <h3>useReducerEx1 user information</h3>
            <hr /><br />
            { state.isEditing?.status && <EditFormContainer id={state.isEditing.id}
                comingTitle={state.isEditing.name} comingEmail={state.isEditing.email} updateData={updateData} />
            }
            <br />
            {
                state.usersData.map((eachUser)=>{
                    const {id, name, email} = eachUser;
                    return(
                        <div key={id}>
                            <div style={{background:"lightblue",padding:"10px"}}>
                                <h3>{name}</h3>
                                <p>{email}</p>
                                <button onClick={()=>handleDelete(id)}>DELETE</button>
                                <button onClick={()=>dispatch({type:"ONCLICK_EDIT", 
                                    payLoad:{status:true, id:id, name: name, email: email},})}>EDIT</button>
                            </div>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}



const EditFormContainer = ({id,comingTitle,comingEmail,updateData}) => {
    const [title, setTitle]=useState(comingTitle || '');
    const [email, setEmail]=useState(comingEmail || '');

    return(
        <>
            <form>
                <input 
                    type="text" 
                    name="title"
                    id="title" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <input 
                    type="email" 
                    name="email"
                    id="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <button onClick={()=>updateData(id, title, email)}>update data</button>
            </form>
        </>
    )
}