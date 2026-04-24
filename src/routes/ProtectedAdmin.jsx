import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedAdmin = ({children}) => {
    const {user} = useAuth();
    if(user?.role !== "ADMIN") return <Navigate to="/" />
    else return {children} 
}

export default ProtectedAdmin;
