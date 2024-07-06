import { useRoutes } from "react-router-dom"
import MainRoutes from "./MainRoutes"
import AdminRoutes from "./AdminRoutes";
import AuthRoutes from "./AuthRoutes";
import StaffRoutes from "./StaffRoutes";
import { useScrollToTop } from "@/hooks";

const RoutesComponent = () => {
    useScrollToTop();
    
    return useRoutes([MainRoutes, AdminRoutes, AuthRoutes, StaffRoutes]);
}

export default RoutesComponent;