import React from 'react'

function Jsx() {
    //js starts
    const name ="srikanth";
    const time = 30;
    //js ends

    //jsx starts
  return (
    <div>
      <h1>Hello,{name}</h1>
      <p>Time to complete - {time*2} mins</p>
      <p>Starts editing</p>

      <PropsExample/>
    </div>
  )
  //jsx ends
}

export default Jsx 


function PropsExample(){
    return(
        <div style={{textAlign:"center"}}>
            <Message name="Mayuri" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpcCcQNUGyTpt1jjsWPZVrdEvPHO3kr7Tdg&usqp=CAU" />
            <Message name="Abhay" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpcCcQNUGyTpt1jjsWPZVrdEvPHO3kr7Tdg&usqp=CAU" />
            <Message name="Netravati" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpcCcQNUGyTpt1jjsWPZVrdEvPHO3kr7Tdg&usqp=CAU" />
        </div>
    )

}

function Message(props){
    const name = "DivyaShree";
    return(
        <div>
            <p>Hi, {name}</p>
            <h4>Hello, {props.name}👍</h4>
            <img style={{borderRadius:"50%"}} src={props.image} alt={props.name} />
        </div>
    )
}
