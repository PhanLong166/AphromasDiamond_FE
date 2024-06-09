import config from "@/config"
import { Outlet } from "react-router-dom";
import StaffLayout from "@/layouts/StaffLayout"
import DeliveryReport from "@/pages/Staff/DeliveryReport/Deliveryreport"
import Dashboard from "@/pages/Staff/SalesStaff/Dashboard/Dashboard"


const StaffRouter = () => {
    return <StaffLayout/>
}

const SalesStaffRoutes = () => {
    return <Outlet />;
}

const DeliStaffRoutes = () => {
    return <Outlet />;
}

const salesStaffRoutes = {
    element: <SalesStaffRoutes/>,
    children: [
        {path: config.routes.salesStaff.dashboard, element: <Dashboard/>},
    ]
}

const deliStaffRoutes = {
    element: <DeliStaffRoutes/>,
    children: [
        {path: config.routes.deliStaff.deliveryReport, element: <DeliveryReport/>},
    ]
}

const StaffRouters = {
    path: '/',
    element: <StaffRouter />,
    children: [salesStaffRoutes, deliStaffRoutes],
}

export default StaffRouters;