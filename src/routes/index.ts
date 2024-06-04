import { useRoutes } from "react-router-dom"
import MainRoutes from "./MainRoutes"
import AdminRoutes from "./AdminRoutes";
import AuthRoutes from "./AuthRoutes";
import StaffRoutes from "./StaffRoutes";

const RoutesComponent = () => {
    return useRoutes([MainRoutes, AdminRoutes, AuthRoutes, StaffRoutes]);
}

export default RoutesComponent;