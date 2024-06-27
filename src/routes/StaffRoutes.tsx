import config from "@/config"
import { Outlet } from "react-router-dom";
import StaffLayout from "@/layouts/StaffLayout"
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
import DeliveryDelivering from "@/pages/Staff/DeliveryReport/DeliveryDelivering";
import DeliveryDelivered from "@/pages/Staff/DeliveryReport/DeliveryDelivered";
import DeliveryReturn from "@/pages/Staff/DeliveryReport/DeliveryReturn";
import DeliveryCompleted from "@/pages/Staff/DeliveryReport/DeliveryCompleted";
import DeliveryPending from "@/pages/Staff/DeliveryReport/DeliveryPending";


const StaffRouter = () => {
    return <StaffLayout/>
}

const SalesStaffRoutes = () => {
    return <Outlet />;
}

// const DeliStaffRoutes = () => {
//     return <Outlet />;
// }

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
    // element: <DeliStaffRoutes/>,
    children: [
        {path: config.routes.deliStaff.deliveryPending, element: <DeliveryPending />},
        {path: config.routes.deliStaff.deliveryDelivering, element: <DeliveryDelivering />},
        {path: config.routes.deliStaff.deliveryDelivered, element: <DeliveryDelivered />},
        {path: config.routes.deliStaff.deliveryReturn, element: <DeliveryReturn />},
        {path: config.routes.deliStaff.deliveryCompleted, element: <DeliveryCompleted />}
    ]
}

const StaffRouters = {
    path: '/',
    element: <StaffRouter />,
    children: [salesStaffRoutes, deliStaffRoutes],
}

export default StaffRouters;