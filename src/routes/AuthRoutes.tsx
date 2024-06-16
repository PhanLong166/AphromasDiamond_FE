import config from "@/config"
import useAuth from "@/hooks/useAuth"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import { Navigate, Outlet } from "react-router-dom"

const AuthRouter = () => {
    const { role } = useAuth();
    return !role ? <Outlet/> : <Navigate to='/' />;
    
}

const AuthRoutes = {
    element: <AuthRouter />,
    children: [
        { path: config.routes.public.login, element: <Login /> },
        { path: config.routes.public.register, element: <Register /> }
    ]
}

export default AuthRoutes;