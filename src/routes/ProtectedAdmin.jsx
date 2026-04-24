import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedAdmin = () => {
    const {user} = useAuth();
    if(user?.role !== "ADMIN") return <Navigate to="/" />
    else return <Outlet /> 
}

export default ProtectedAdmin;
