import config from "@/config"
import { Outlet } from "react-router-dom";
import StaffLayout from "@/layouts/StaffLayout"
import DeliveryReport from "@/pages/Staff/DeliveryReport/Deliveryreport"

import Dashboard from "@/pages/Staff/SalesStaff/Dashboard/Dashboard"
import Order from "@/pages/Staff/SalesStaff/OrderPage/Order";
import ConfirmedOrder from "@/pages/Staff/SalesStaff/OrderPage/Confirmed";
import DeliveringOrder from "@/pages/Staff/SalesStaff/OrderPage/Delivering";
import CompletedOrder from "@/pages/Staff/SalesStaff/OrderPage/Completed";
import CancelledOrder from "@/pages/Staff/SalesStaff/OrderPage/Cancelled";
import Product from "@/pages/Staff/SalesStaff/ProductPage/Product";
import Diamond from "@/pages/Staff/SalesStaff/ProductPage/Diamond";
import RingSetting from "@/pages/Staff/SalesStaff/ProductPage/RingSetting";
import ProductType from "@/pages/Staff/SalesStaff/ProductPage/JewelryType";
import Material from "@/pages/Staff/SalesStaff/ProductPage/Material";
import Messages from "@/pages/Staff/SalesStaff/ClientCaringPage/Message";
import Feedback from "@/pages/Staff/SalesStaff/ClientCaringPage/Feedback";


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

        {path: config.routes.salesStaff.order, element: <Order/>},
        {path: config.routes.salesStaff.confirmedOrder, element: <ConfirmedOrder/>},
        {path: config.routes.salesStaff.deliveringOrder, element: <DeliveringOrder/>},
        {path: config.routes.salesStaff.completedOrder, element: <CompletedOrder/>},
        {path: config.routes.salesStaff.cancelledOrder, element: <CancelledOrder/>},

        {path: config.routes.salesStaff.product, element: <Product/>},
        {path: config.routes.salesStaff.diamond, element: <Diamond/>},
        {path: config.routes.salesStaff.ringSettingProduct, element: <RingSetting/>},
        {path: config.routes.salesStaff.jewelryTypeProduct, element: <ProductType/>},
        {path: config.routes.salesStaff.materialProduct, element: <Material/>},

        {path: config.routes.salesStaff.clientCaring, element: <Messages/>},
        {path: config.routes.salesStaff.feedback, element: <Feedback/>},
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