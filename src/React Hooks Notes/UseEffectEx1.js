import React,{useState,useEffect} from 'react'

function UseEffectEx1() {
  return (
    <div>
        <Final />
    </div>
  )
}

export default UseEffectEx1 

let URL = "https://jsonplaceholder.typicode.com/users";

const Final=()=>{
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({status:false, msg:""});


    const fetchUsersData = async (apiURL)=>{
        setLoading(true);
        setIsError({status:false, msg:""})
        try {
            const response =await fetch(apiURL);
            const data =await response.json();
            setUsersData(data);
            setLoading(false);
            setIsError({status:false, msg:""})
            // console.log(response)
            if(response.status === 404){
                throw new Error("data not found")
            }
        } catch (error) {
            console.log(error.message);
            setLoading(false);
            setIsError({
                status:true, 
                msg: error.message || "Something Went wrong, Please try Again..."
            })
            
        }
    }

    useEffect(()=>{
        fetchUsersData(URL)
    },[])

    if(loading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if(isError?.status){
        return <div>
            <h3 style={{color:"red"}}>{isError?.msg}</h3>
        </div>
    }
    return(
        <div>
            <p>useEffect Example1:</p>
            <ul>
                {
                    usersData.map((eachUser)=>{
                        const {email, id, name,username} = eachUser;
                        return <li key={id}>
                            <div>
                                <br />
                                <p>{username}</p>
                                <p>{name}</p>
                                <p>{email}</p>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}