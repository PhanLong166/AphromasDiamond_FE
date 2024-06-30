import config from "@/config"
import { Outlet } from "react-router-dom";
import StaffLayout from "@/layouts/StaffLayout"
import Order from "@/pages/Staff/SalesStaff/OrderPage/Order";
import PendingOrder from "@/pages/Staff/SalesStaff/OrderPage/Pending/Pending";
import AcceptedOrder from "@/pages/Staff/SalesStaff/OrderPage/Accepted/Accepted";
import DeliveringOrder from "@/pages/Staff/SalesStaff/OrderPage/Delivering/Delivering";
import AssignedOrder from "@/pages/Staff/SalesStaff/OrderPage/Assigned/Assigned";
import DeliveredOrder from "@/pages/Staff/SalesStaff/OrderPage/Delivered/Delivered";
import OrderDetail from "@/pages/Staff/SalesStaff/OrderPage/OrderDetail";
import CompletedOrder from "@/pages/Staff/SalesStaff/OrderPage/Completed/Completed";
import CancelledOrder from "@/pages/Staff/SalesStaff/OrderPage/Cancelled/Cancelled";

import Diamond from "@/pages/Staff/SalesStaff/ProductPage/Diamond";
import DiamondDetail from "@/pages/Staff/SalesStaff/ProductPage/Detail/DiamondDetail";
import Jewelry from "@/pages/Staff/SalesStaff/ProductPage/Jewelry";
import JewelryDetail from "@/pages/Staff/SalesStaff/ProductPage/Detail/JewelryDetail";
import RingSetting from "@/pages/Staff/SalesStaff/ProductPage/RingSetting";
import ProductType from "@/pages/Staff/SalesStaff/ProductPage/JewelryType";
import Material from "@/pages/Staff/SalesStaff/ProductPage/Material";
import Marketing from "@/pages/Staff/SalesStaff/MarketingPage/Marketing";
import Messages from "@/pages/Staff/SalesStaff/ClientCaringPage/Message";
import Feedback from "@/pages/Staff/SalesStaff/ClientCaringPage/Feedback";


// import DeliveryReport from "@/pages/Staff/DeliveryReport/DeliveryPending";
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
        {path: config.routes.salesStaff.order, element: <Order/>},
        {path: config.routes.salesStaff.pendingOrder, element: <PendingOrder />},
        {path: config.routes.salesStaff.acceptedOrder, element: <AcceptedOrder/>},
        {path: config.routes.salesStaff.assignedOrder, element: <AssignedOrder/>},
        {path: config.routes.salesStaff.deliveringOrder, element: <DeliveringOrder/>},
        {path: config.routes.salesStaff.deliveredOrder, element: <DeliveredOrder/>},
        {path: config.routes.salesStaff.completedOrder, element: <CompletedOrder/>},
        {path: config.routes.salesStaff.cancelledOrder, element: <CancelledOrder/>},
        {path: config.routes.salesStaff.orderDetail, element: <OrderDetail/>},

        {path: config.routes.salesStaff.diamond, element: <Diamond/>},
        {path: config.routes.salesStaff.diamondDetail, element: <DiamondDetail /> },
        {path: config.routes.salesStaff.jewelry, element: <Jewelry /> },
        {path: config.routes.salesStaff.jewelryDetail, element: <JewelryDetail /> },
        {path: config.routes.salesStaff.ringSettingProduct, element: <RingSetting/>},
        {path: config.routes.salesStaff.jewelryTypeProduct, element: <ProductType/>},
        {path: config.routes.salesStaff.materialProduct, element: <Material/>},

        {path: config.routes.salesStaff.marketing, element: <Marketing/>},
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