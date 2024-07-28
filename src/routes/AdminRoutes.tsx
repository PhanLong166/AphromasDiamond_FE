import config from "@/config"
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import Dashboard from "@/pages/Admin/Dashboard/Dashboard"
import Order from "@/pages/Admin/OrderPage/Order"
import PendingOrder from "@/pages/Admin/OrderPage/Pending/Pending"
import AcceptedOrder from "@/pages/Admin/OrderPage/Accepted/Accepted"
import AssignedOrder from "@/pages/Admin/OrderPage/Assigned/Assigned"
import DeliveringOrder from "@/pages/Admin/OrderPage/Delivering/Delivering"
import DeliveredOrder from "@/pages/Admin/OrderPage/Delivered/Delivered"
import CompletedOrder from "@/pages/Admin/OrderPage/Completed/Completed"
import CancelledOrder from "@/pages/Admin/OrderPage/Cancelled/Cancelled"
import OrderDetail from "@/pages/Admin/OrderPage/OrderDetail"

import Diamond from "@/pages/Admin/ProductPage/Diamond/Diamond"
import DiamondDetail from "@/pages/Admin/ProductPage/Detail/DiamondDetail"
import JewelryDetail from "@/pages/Admin/ProductPage/Detail/JewelryDetail"
import Jewelry from "@/pages/Admin/ProductPage/Jewelry/Jewelry"
import AddProduct from "@/pages/Admin/ProductPage/Jewelry/AddDiaJew"
import AddJewelry from "@/pages/Admin/ProductPage/Jewelry/AddReguJew"
import JewelrySetting from "@/pages/Admin/ProductPage/Jewelry Setting/RingSetting"
import JewelrySettingDetail from "@/pages/Admin/ProductPage/Detail/SettingDetail"
import JewelryTypeProduct from "@/pages/Admin/ProductPage/JewelryType/JewelryType"
import MaterialProduct from "@/pages/Admin/ProductPage/Material/Material"
import Collection from "@/pages/Admin/MarketingPage/Collection/Collection"
import CollectionDetail from "@/pages/Admin/MarketingPage/Detail/CollectionDetail"
import ProductPromotion from "@/pages/Admin/MarketingPage/ProductPromotion/ProductPromotion"
import ProductPromotionDetail from "@/pages/Admin/MarketingPage/Detail/ProductPromotionDetail"
import BillPromotion from "@/pages/Admin/MarketingPage/BillPromotion/BillPromotion"

// import ClientCaring from "@/pages/Admin/ClientCaringPage/Message"
import Feedback from "@/pages/Admin/ClientCaringPage/Feedback"
import Customer from "@/pages/Admin/CustomerPage/Customer"
import CustomerDetail from "@/pages/Admin/CustomerPage/CustomerDetail"
import SalesStaff from "@/pages/Admin/StaffPage/SalesStaff/SalesStaff"
import DeliveryStaff from "@/pages/Admin/StaffPage/DeliveryStaff/DeliveryStaff"
import DeliStaffDetail from "@/pages/Admin/StaffPage/DeliveryStaff/DeliStaffDetail"
import Manager from "@/pages/Admin/ManagerPage/Manager"

import useAuth from "@/hooks/useAuth"
import { Role } from "@/utils/enum"
import { Navigate } from "react-router-dom"

const AdminRouter = () => {
    //Use database
    const { role } = useAuth();
    return role === Role.ADMIN || role === Role.MANAGER ? <AdminLayout /> : <Navigate to='/' />
}

const AdminRoutes = {
    path: config.routes.admin.dashboard,
    element: <AdminRouter />,
    children: [
        { path: config.routes.admin.dashboard, element: <Dashboard /> },

        {path: config.routes.admin.order, element: <Order/>},
        {path: config.routes.admin.pendingOrder, element: <PendingOrder/>},
        {path: config.routes.admin.acceptedOrder, element: <AcceptedOrder/>},
        {path: config.routes.admin.assignedOrder, element: <AssignedOrder/>},
        {path: config.routes.admin.deliveringOrder, element: <DeliveringOrder/>},
        {path: config.routes.admin.deliveredOrder, element: <DeliveredOrder/>},
        {path: config.routes.admin.completedOrder, element: <CompletedOrder/>},
        {path: config.routes.admin.cancelledOrder, element: <CancelledOrder/>},
        {path: config.routes.admin.orderDetail, element: <OrderDetail/>},

        { path: config.routes.admin.product, element: <Diamond /> },
        { path: config.routes.admin.diamondDetail, element: <DiamondDetail /> },
        { path: config.routes.admin.jewelryDetail, element: <JewelryDetail /> },
        { path: config.routes.admin.addProduct, element: <AddJewelry /> },
        { path: config.routes.admin.AddCustomJewelry, element: <AddProduct /> },
        { path: config.routes.admin.jewelryProduct, element: <Jewelry /> },
        { path: config.routes.admin.ringSettingProduct, element: <JewelrySetting /> },
        { path: config.routes.admin.ringSettingDetail, element: <JewelrySettingDetail /> },
        { path: config.routes.admin.jewelryTypeProduct, element: <JewelryTypeProduct /> },
        { path: config.routes.admin.materialProduct, element: <MaterialProduct /> },

        { path: config.routes.admin.collection, element: <Collection /> },
        { path: config.routes.admin.collectionDetail, element: <CollectionDetail /> },
        { path: config.routes.admin.discount, element: <ProductPromotion /> },
        { path: config.routes.admin.discountDetail, element: <ProductPromotionDetail /> },
        { path: config.routes.admin.voucher, element: <BillPromotion /> },

        { path: config.routes.admin.clientCaring, element: <Feedback /> },
        // { path: config.routes.admin.feedback, element: <Feedback /> },

        { path: config.routes.admin.customer, element: <Customer /> },
        { path: config.routes.admin.customerDetail, element: <CustomerDetail /> },

        { path: config.routes.admin.salesStaff, element: <SalesStaff /> },
        { path: config.routes.admin.deliveryStaff, element: <DeliveryStaff /> },
        { path: config.routes.admin.deliveryStaffDetail, element: <DeliStaffDetail /> },

        { path: config.routes.admin.manager, element: <Manager /> },
    ]

}

export default AdminRoutes;