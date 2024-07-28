import config from "@/config"
import { Navigate } from "react-router-dom";

import StaffLayout from "@/layouts/StaffLayout"

import Order from "@/routes/Staff/SalesStaff/OrderPage/Order";
import PendingOrder from "@/routes/Staff/SalesStaff/OrderPage/Pending/Pending";
import AcceptedOrder from "@/routes/Staff/SalesStaff/OrderPage/Accepted/Accepted";
import DeliveringOrder from "@/routes/Staff/SalesStaff/OrderPage/Delivering/Delivering";
import AssignedOrder from "@/routes/Staff/SalesStaff/OrderPage/Assigned/Assigned";
import DeliveredOrder from "@/routes/Staff/SalesStaff/OrderPage/Delivered/Delivered";
import OrderDetail from "@/routes/Staff/SalesStaff/OrderPage/OrderDetail";
import CompletedOrder from "@/routes/Staff/SalesStaff/OrderPage/Completed/Completed";
import CancelledOrder from "@/routes/Staff/SalesStaff/OrderPage/Cancelled/Cancelled";

import Diamond from "@/routes/Staff/SalesStaff/ProductPage/Diamond/Diamond";
import DiamondDetail from "@/routes/Staff/SalesStaff/ProductPage/Detail/DiamondDetail";
import Jewelry from "@/routes/Staff/SalesStaff/ProductPage/Jewelry/Jewelry";
import JewelryDetail from "@/routes/Staff/SalesStaff/ProductPage/Detail/JewelryDetail";
import RingSetting from "@/routes/Staff/SalesStaff/ProductPage/Jewelry Setting/RingSetting";
import JewelrySettingDetail from "@/routes/Staff/SalesStaff/ProductPage/Detail/SettingDetail";
import ProductType from "@/routes/Staff/SalesStaff/ProductPage/JewelryType/JewelryType";
import Material from "@/routes/Staff/SalesStaff/ProductPage/Material/Material";
import Collection from "@/routes/Staff/SalesStaff/MarketingPage/Collection/Collection";
import CollectionDetail from "@/routes/Staff/SalesStaff/MarketingPage/Detail/CollectionDetail";
import ProductPromotion from "@/routes/Staff/SalesStaff/MarketingPage/ProductPromotion/ProductPromotion";
import ProductPromotionDetail from "@/routes/Staff/SalesStaff/MarketingPage/Detail/ProductPromotionDetail";
import BillPromotion from "@/routes/Staff/SalesStaff/MarketingPage/BillPromotion/BillPromotion";
import Messages from "@/routes/Staff/SalesStaff/ClientCaringPage/Message";
import FeedbackSale from "@/routes/Staff/SalesStaff/ClientCaringPage/FeedbackSale";
import FeedbackCompleted from "@/routes/Staff/SalesStaff/ClientCaringPage/FeedbackCompleted";

import useAuth from "@/hooks/useAuth";
import { Role } from "@/utils/enum";


const SalesStaffRouter = () => {
    const { role } = useAuth();
    return role === Role.SALE_STAFF ? <StaffLayout /> : <Navigate to="/" />;
}

const salesStaffRoutes = [
    { path: config.routes.salesStaff.order, element: <Order /> },
    { path: config.routes.salesStaff.pendingOrder, element: <PendingOrder /> },
    { path: config.routes.salesStaff.acceptedOrder, element: <AcceptedOrder /> },
    { path: config.routes.salesStaff.assignedOrder, element: <AssignedOrder /> },
    { path: config.routes.salesStaff.deliveringOrder, element: <DeliveringOrder /> },
    { path: config.routes.salesStaff.deliveredOrder, element: <DeliveredOrder /> },
    { path: config.routes.salesStaff.completedOrder, element: <CompletedOrder /> },
    { path: config.routes.salesStaff.cancelledOrder, element: <CancelledOrder /> },
    { path: config.routes.salesStaff.orderDetail, element: <OrderDetail /> },

    { path: config.routes.salesStaff.diamond, element: <Diamond /> },
    { path: config.routes.salesStaff.diamondDetail, element: <DiamondDetail /> },
    { path: config.routes.salesStaff.jewelry, element: <Jewelry /> },
    { path: config.routes.salesStaff.jewelryDetail, element: <JewelryDetail /> },
    { path: config.routes.salesStaff.ringSettingProduct, element: <RingSetting /> },
    { path: config.routes.salesStaff.ringSettingDetail, element: <JewelrySettingDetail /> },
    { path: config.routes.salesStaff.jewelryTypeProduct, element: <ProductType /> },
    { path: config.routes.salesStaff.materialProduct, element: <Material /> },

    { path: config.routes.salesStaff.collection, element: <Collection /> },
    { path: config.routes.salesStaff.collectionDetail, element: <CollectionDetail /> },
    { path: config.routes.salesStaff.discount, element: <ProductPromotion /> },
    { path: config.routes.salesStaff.discountDetail, element: <ProductPromotionDetail /> },
    { path: config.routes.salesStaff.voucher, element: <BillPromotion /> },
    { path: config.routes.salesStaff.clientCaring, element: <Messages /> },
    { path: config.routes.salesStaff.feedback, element: <FeedbackSale /> },
    { path: config.routes.salesStaff.feedbackCompleted, element: <FeedbackCompleted /> },
];

const SalesStaffRoutes = {
    path: config.routes.salesStaff.dashboard,
    element: <SalesStaffRouter />,
    children: salesStaffRoutes,
}

export default SalesStaffRoutes;