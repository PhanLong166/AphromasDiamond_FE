import { useRoutes } from "react-router-dom"
import MainRoutes from "./MainRoutes"
import AdminRoutes from "./AdminRoutes";

const RoutesComponent = () => {
    return useRoutes([MainRoutes, AdminRoutes]);
}

export default RoutesComponent;