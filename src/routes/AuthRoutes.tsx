import config from "@/config"
import Login from "@/pages/Home/Login_Register/Login"
import { Outlet } from "react-router-dom"

const AuthRouter = () => {
    return <Outlet/>
}

const AuthRoutes = {
    element: <AuthRouter/>,
    children: [
        {path: config.routes.public.login, element: <Login/>},
    ]
}

export default AuthRoutes;