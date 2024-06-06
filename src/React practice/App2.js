import React, { useState } from 'react'

function App2() {
  return (
    <div>
      <Index />
    </div>
  )
}

export default App2

const Index=()=>{

  const [list, setList] = useState([])
  const [message, setMessage] = useState({
    text:" ",
    id:" ",
  })

  const [editingItem, setEditingItem] = useState({
    id:"",
    isEditing:false,
  })

  const ChangeMessage=(e)=>{
    setMessage({
      ...message,
      text:e.target.value,
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  const handleAdd=(e)=>{
    e.preventDefault();
    let newTodo={
      text:message.text,
      id: new Date().getTime().toString(),
    }
    // console.log(newTodo);
    setList([...list,newTodo]);
    setMessage({
      text:" ",
      id:" ",
    })
  }

  const handleDelete =(id)=>{
    const filterItems = list.filter((eachItem) =>{
      return eachItem.id !== id;
    })
    setList(filterItems)
  }

  const handleEditState=(id)=>{
    console.log(id)
    setEditingItem({
      ...editingItem,
      id:id,
      isEditing:true,
    });
    let editableItem = list.find((eachItem)=>{
      return eachItem.id ===id;
    })
    // console.log(editableItem)
    setMessage(editableItem)
  }

  const handleEdit=()=>{
    let newTodos = list.map((eachItem)=>{
      if(eachItem.id === editingItem.id){
        return {
          text:message.text,
          id:editingItem.id,
        };
        }else{
          return eachItem
      }
    })
    setList(newTodos);
    setMessage({
      text:"",
      id:"",
    })
    setEditingItem({
      id:"",
      isEditing:false,
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="message" 
        id="message" 
        value={message.text}
        placeholder='Enter message'
        onChange={ChangeMessage} 
      />
      {editingItem.isEditing ? (
      <button onClick={handleEdit} type='submit'>Edit</button>
      ) :(
      <button onClick={handleAdd} type='submit'>Add</button>
      )}
      <br />
      {list.length === 0 ? <h3>There is no items in the list</h3> : null}
      <ul>
        {
          list.map((eachItem)=>{
            const {text,id} = eachItem; 
            return <li key={id}>
              <span> {text} </span>
              <button onClick={() => handleEditState(id)}>edit</button>
              <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          })
        }
      </ul>
      </form>
    </div>
  )
}