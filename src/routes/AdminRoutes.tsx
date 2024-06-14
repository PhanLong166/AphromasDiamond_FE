import config from "@/config"
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import Dashboard from "@/pages/Admin/Dashboard/Dashboard"
import Order from "@/pages/Admin/OrderPage/Order"
import PendingOrder from "@/pages/Admin/OrderPage/Pending"
import ConfirmedOrder from "@/pages/Admin/OrderPage/Confirmed"
import DeliveringOrder from "@/pages/Admin/OrderPage/Delivering"
import CompletedOrder from "@/pages/Admin/OrderPage/Completed"
import CancelledOrder from "@/pages/Admin/OrderPage/Cancelled"
import Product from "@/pages/Admin/ProductPage/Product"
import AddProduct from "@/pages/Admin/ProductPage/AddProduct"
import AddJewelry from "@/pages/Admin/ProductPage/AddJewelry"
import Diamond from "@/pages/Admin/ProductPage/Diamond"
import RingSettingProduct from "@/pages/Admin/ProductPage/RingSetting"
import RingProduct from "@/pages/Admin/ProductPage/Ring"
import JewelryTypeProduct from "@/pages/Admin/ProductPage/JewelryType"
import MaterialProduct from "@/pages/Admin/ProductPage/Material"
import Marketing from "@/pages/Admin/MarketingPage/Marketing"
import ClientCaring from "@/pages/Admin/ClientCaringPage/Message"
import Feedback from "@/pages/Admin/ClientCaringPage/Feedback"
import Customer from "@/pages/Admin/CustomerPage/Customer"
import SalesStaff from "@/pages/Admin/StaffPage/SalesStaff"
import DeliveryStaff from "@/pages/Admin/StaffPage/DeliveryStaff"
import Manager from "@/pages/Admin/ManagerPage/Manager"




// import Manager from "@/pages/Admin/"
// import Theme from "@/pages/Admin/"


const AdminRouter = () => {
    return <AdminLayout />
}

const AdminRoutes = {
    path: config.routes.admin.dashboard,
    element: <AdminRouter />,
    children: [
        {path: config.routes.admin.dashboard, element: <Dashboard/>},

        {path: config.routes.admin.order, element: <Order/>},
        {path: config.routes.admin.pendingOrder, element: <PendingOrder/>},
        {path: config.routes.admin.confirmedOrder, element: <ConfirmedOrder/>},
        {path: config.routes.admin.deliveringOrder, element: <DeliveringOrder/>},
        {path: config.routes.admin.completedOrder, element: <CompletedOrder/>},
        {path: config.routes.admin.cancelledOrder, element: <CancelledOrder/>},

        {path: config.routes.admin.product, element: <Product/>},
        {path: config.routes.admin.addProduct, element: <AddProduct/>},
        {path: config.routes.admin.addJewelry, element: <AddJewelry/>},
        {path: config.routes.admin.diamondProduct, element: <Diamond/>},
        {path: config.routes.admin.ringSettingProduct, element: <RingSettingProduct/>},
        {path: config.routes.admin.ringProduct, element: <RingProduct/>},
        {path: config.routes.admin.jewelryTypeProduct, element: <JewelryTypeProduct/>},
        {path: config.routes.admin.materialProduct, element: <MaterialProduct/>},

        {path: config.routes.admin.marketing, element: <Marketing/>},

        {path: config.routes.admin.clientCaring, element: <ClientCaring/>},
        {path: config.routes.admin.feedback, element: <Feedback/>},

        {path: config.routes.admin.customer, element: <Customer/>},

        {path: config.routes.admin.salesStaff, element: <SalesStaff/>},
        {path: config.routes.admin.deliveryStaff, element: <DeliveryStaff/>},

        {path: config.routes.admin.manager, element: <Manager/>},
        // {path: config.routes.admin.theme, element: <Theme/>},
    ]

}

export default AdminRoutes;