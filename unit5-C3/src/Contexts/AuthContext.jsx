import { createContext, useState} from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [auth, setAuth] = useState(false);
    const handleAuth = (status) =>{
        setAuth({auth:status});
    }
    return (
        <AuthContext.Provider value = {{auth,handleAuth}}>{children}</AuthContext.Provider>
    )
}