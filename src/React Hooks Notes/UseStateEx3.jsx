import React, { useState } from 'react'

function UseStateEx3() {
  return (
    <div>
      <Index />
    </div>
  )
}

export default UseStateEx3


const Index=()=>{
    // const tempList =[
    //     {
    //         text:"hello",
    //         id:"qwertyu",
    //     },
    //     {
    //         text:"hello world",
    //         id:"asdfghj",
    //     },
    // ]
    
    const [list, setList]=useState([])
    const[message, setMessage]=useState({
        text:"",
        id:""
    })

    const [editingItem, setEditingItem]=useState({
        id:"",
        isEditing:false,

    })

    const ChangeMessage=(e)=>{
        setMessage({
            ...message,
            text:e.target.value

        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let newTodo={
            text:message.text,
            id: new Date().getTime().toString(),
        }
        console.log(newTodo)
        setList([...list,newTodo]);
        setMessage({
            text:"",
            id:""
        })
    }

    const handleDelete=(id)=>{
        console.log(id);
        const newTodos = list.filter((eachItem)=>{
            return eachItem.id !== id;
        });
        setList(newTodos)
    }

    // if(list.length === 0){
    //     return <p>There is no items in List</p>
    // }

    const changeEditState=(id)=>{
        console.log(id);
        setEditingItem({
            ...editingItem,
            id:id,
            isEditing:true,
        })
        let editableItem = list.find((eachItem)=>eachItem.id === id);
        setMessage({
            ...message,
            text:editableItem.text,
            id:editableItem.id
        })
        console.log(editableItem)
        
    }

    const handleEdit=(e)=>{
        e.preventDefault();
        // console.log("Previous todos", list);
        let newTodos = list.map((eachItem)=>{
            if(eachItem.id === editingItem.id){
                return{
                    text:message.text,
                    id:editingItem.id,
                };
            }else{
                return eachItem;
            }
        });
        setList(newTodos)
        // console.log("Current todos", newTodos);
        setMessage({
            text:"",
            id:"",
        });
        setEditingItem({
            id:"",
            isEditing:false
        })
    }

    return(
        <div>
            <form action="">
                <input 
                type="text" 
                name="message" 
                id="message"
                placeholder='Enter Some Text' 
                value={message.text}
                onChange={ChangeMessage}
                />
                {editingItem.isEditing ?
                    <button onClick={handleEdit}  type='submit'>Edit</button>  :
                    <button onClick={handleSubmit}  type='submit'>Add</button>  
                }
                
            </form>
            <br />
            {list.length === 0 ? <h4>There is no items in the Lists.</h4> : null}
            <ul>
                {list.map((eachItem)=>{
                    const {text,id}=eachItem;
                    return( 
                    <li key={id}>
                        <span className='btn'> {text} </span>
                        <button className='btn' onClick={() => changeEditState(id)} > edit </button>
                        <button className='btn' onClick={()=>handleDelete(id)}> delete </button>
                    </li>
                    )   
                })}
            </ul>
        </div>
    )
}
