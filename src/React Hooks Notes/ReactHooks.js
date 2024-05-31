import React, {useState} from 'react'
import AdvanceUseState from './AdvanceUseState';

function ReactHooks() {
  return (
    <div>
      {/* <Index /> */}
      <AdvanceUseState/>
    </div>
  )
}



const Index =()=>{
  // const arr = useState(20);
  // console.log(arr);
  // console.log(arr[0]);
  // console.log(arr[1]);

  const [count, setCount ]=useState(0);
  // console.log(count);  
  // console.log(setCount)

  const incrementCount =()=>{
    // setCount(count+1);
    setCount((prevCount)=>{
      return  prevCount +1;
    })
    setCount((prevCount)=> prevCount+1)

  }

  const decrementCount =()=>{
    // setCount(count-1);
    setCount((prevCount)=>prevCount-1)
    setCount((prevCount)=>prevCount-1)
  }
  
  
  return(
    <div>
      <button onClick={decrementCount} className='btn'>DECREMENT</button>
      <span className='btn'> Count: {count} </span>
      <button onClick={incrementCount} className='btn'>INCREMENT</button>
    </div>
  )
}

export default ReactHooks



