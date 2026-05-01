import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLoading from "../components/AuthLoading";

const ProtectedAnyUser = () => {
    const {user, loading} = useAuth();
    if(loading) return <AuthLoading />
    if((user?.role !== "ADMIN" || user?.role !== "USER") && !loading) return <Navigate to="/" />
    else return <Outlet /> 
}

export default ProtectedAnyUser;
