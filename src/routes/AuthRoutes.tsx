import config from "@/config"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import { Outlet } from "react-router-dom"

const AuthRouter = () => {
    return <Outlet />
}

const AuthRoutes = {
    element: <AuthRouter />,
    children: [
        { path: config.routes.public.login, element: <Login /> },
        { path: config.routes.public.register, element: <Register /> }

    ]
}

export default AuthRoutes;