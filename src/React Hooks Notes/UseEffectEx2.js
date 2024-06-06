import React, {useEffect,useState} from 'react'

function UseEffectEx2() {
  return (
    <div>
        <Final />
    </div>
  )
}

export default UseEffectEx2

const URL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

const Final = () =>{
    const [drinksData, setDrinksData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({
        status:false,
        msg:"",
    })

    const fetchDrink =async (apiURL)=>{
        setLoading(true);
        setIsError({status:false, msg:""});
        try {
            const response =await fetch(apiURL);
            const {drinks} =await response.json();
            setDrinksData(drinks);
            setLoading(false);
            setIsError({status:false, msg:""});
            // console.log(drinks)
            if(!drinks){
                throw new Error("data Not Found");
            }
        } catch(error) {
            console.log(error);
            setLoading(false);
            setIsError({
                status:true, 
                msg: error.message || "Something went wrong...",
            });
        }
    }

    useEffect(()=>{
        const correctURL = `${URL} ${searchTerm}`;
        fetchDrink(correctURL);
    },[searchTerm]);
    return(
        <div>
            <p>useExample2</p>
            <h3>drinksData: {drinksData.length}</h3>
            <form>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    value={searchTerm}
                    placeholder='search something new'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
                <br />
            {loading && !isError?.status && <h2>Loading...</h2>}
            {isError?.status && <h3 style={{color:"red"}}>{isError.msg}</h3> }
            {!loading && !isError?.status  &&             
                <ul className='cocktail-data'>
                {drinksData.map((eachDrink)=>{
                    const {idDrink,strDrink,strDrinkThumb}=eachDrink;
                    return <li key={idDrink}>
                        <div>
                            <img style={{height:"300px", width:"100%"}} src={strDrinkThumb} alt={strDrink} />
                        </div>
                        <div className='text'>
                            <h3>{strDrink}</h3>
                        </div>
                    </li>
                     })}
                </ul> 
            }
        </div>
    )
}