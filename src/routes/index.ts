import { useRoutes } from "react-router-dom"
import MainRoutes from "./MainRoutes"
import AdminRoutes from "./AdminRoutes";
import AuthRoutes from "./AuthRoutes";
import SalesStaffRoutes from "./SalesStaffRoutes";
import { useScrollToTop } from "@/hooks";
import DeliveryStaffRoutes from "./DeliveryStaffRoutes";

const RoutesComponent = () => {
    useScrollToTop();
    
    return useRoutes([
        MainRoutes, 
        AdminRoutes, 
        AuthRoutes, 
        SalesStaffRoutes,
        DeliveryStaffRoutes
    ]);
}

export default RoutesComponent;