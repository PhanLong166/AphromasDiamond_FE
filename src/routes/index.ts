import { useRoutes } from "react-router-dom"
import MainRoutes from "./MainRoutes"
import AdminRoutes from "./AdminRoutes";
import AuthRoutes from "./AuthRoutes";

const RoutesComponent = () => {
    return useRoutes([MainRoutes, AdminRoutes, AuthRoutes]);
}

export default RoutesComponent;