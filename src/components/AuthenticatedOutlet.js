import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedOutlet = () => {
    const { isAuthenticated } = useSelector((state) => state.authData.value);

    console.log(`El usuario está autenticado? -> ${isAuthenticated}`);

    return (
        isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default AuthenticatedOutlet;