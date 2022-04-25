import {useCallback,useContext} from "react";
import {Navigate} from "react-router"
import {AuthContext} from "../Contexts/AuthContext";

export const ProtectedRoute = ({children}) => {
    const {auth} = useContext(AuthContext);
    if(!auth) return <Navigate to = "/Login"></Navigate>
    return children
}