import { type } from '@testing-library/user-event/dist/type';
import React, {useReducer} from 'react'

function UseReducer() {
  return (
    <div>
        <Final />
    </div>
  )
}

export default UseReducer

const reducer = (state, action) => {
    if(action === "DELETE_PERSON"){
        const newPersons=state.data.filter((eachPerson)=>{
            return eachPerson.id !== action.payLoad;
        });
        return{
            ...state,
            data:newPersons,
            length:state.length-1,
        };    
    }

    return state;

}

const Final=()=>{
    const initialState={
        data:[
            {
                id:"3245",
                name:"srikanth",
                email:"srikanth@gmail.com",
            },
            {
                id:"45678",
                name:"pavan",
                email:"pavan@gmail.com",
            },
        ],
        length:2,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleDelete = (id) =>{
        // console.log(id)
        dispatch({
            type:"DELETE_PERSON",
            payLoad:id,
        })

    }

    const handleEdit=(id)=>{
        dispatch({
            type:"UPDATE_PERSON",
            payLoad:id,
        })
    }

    return(
        <div>
            <h3>useReducer hook</h3>
            <h1>Current Users Data: {state.length}</h1>
           <br /><hr />
            {
                state.data.map((eachItem)=>{
                    const {id, name, email} = eachItem;
                    return( 
                    <div key={id}>
                        <h3>{name}</h3>
                        <p>{email}</p>
                        <button onClick={()=> handleDelete(id)}>Delete</button>
                        <button onClick={()=> handleEdit(id)}>Edit</button>
                        <br /><br />
                    </div>
                )})
            }
        </div>
    )
}