import React from 'react';
import { data } from './data';


const PropsExample2 = () => {
  return (
    <main className='container'>
        <ul className="comments-container">
            {data.map((eachComment)=>{
                const {id,name,email,body} =eachComment;
                return(
                    <ListItems key={id} id={id} name={name} email={email} body={body} />
                ) 
            })}
        </ul>
    </main>
  )
}

const ListItems = ({name,email,body})=>{
    // const {id,name,email,body} = props;
    return(
        <li className='comment'>
            <div className="comments-header">
                <h3 className='email'>{email}</h3>
                <h3 className='name'>{name}</h3>
            </div>
            <p className='message'>{body}</p>
        </li>

    )
}
export default PropsExample2
