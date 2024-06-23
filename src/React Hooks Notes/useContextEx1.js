import React,{createContext} from 'react'

const initialState={
    firstName:"pavan",
    lastName:"Kalyan",
    email:"pavanKalyan@gmail.com",
}

export const UserContext = createContext();

//provider - used to pass the data
//consumer - used to receive the data
export const UserContextProvider = ({children})=>{
    return(
        <UserContext.Provider value={initialState}>
            {children}
        </UserContext.Provider>
    )
}


