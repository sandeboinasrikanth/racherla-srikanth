import React,{useState} from 'react'

function UseStateEx1() {
    const [show, setShow]=useState(true);

    const handleShow=()=>{
        // setShow(!show)
        setShow(!show)
    }


  return (
    <div>
      <button onClick={handleShow} className='btn'>{show ? "hide":"show" }</button>
      {show ? <p className='content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Placeat doloribus non unde saepe deserunt iste et vero voluptate hic quam?
      </p> : null}
      {/* {show && <p>ssssssssssssssssss</p>} */}
      
    </div>
  )
}

export default UseStateEx1
