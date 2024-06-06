import MainLayout from "@/layouts/MainLayout";
import config from "../config";
import Account from "../pages/Customer/AccountDetail/AccountDetail";
import Cart from "../pages/Customer/Cart/Cart";
import Checkout from "../pages/Customer/Checkout/Checkout";
import OrderList from "../pages/Customer/OderList/OderList";
import Voucher from "../pages/Customer/Voucher/Voucher";
import Home from "../pages/Home/Home";
import { Outlet } from "react-router-dom";
import Product from "@/pages/Home/Product/Product";
import AllProduct from "@/pages/Home/AllProduct/AllProduct";
import ProductDetails from "@/pages/Home/ProductDetails/ProductDetails";
import NotiPage from "@/pages/Customer/Nofications/Nofications";
import Reply from "@/pages/Home/Reply/Reply";
import FeedbackSale from "@/pages/Home/SaleStaff/FeedbackSale";
import FeedbackCompleted from "@/pages/Home/SaleStaff/FeedbackCompleted";
import HomeV2 from "@/pages/Home/HomeV2";




const MainRouter = () => {
    return <MainLayout />
}

const CustomerRouter = () => {
    return <Outlet />;
}

const publicRoutes = {
    children: [
        { path: config.routes.public.home, element: <Home /> },
        { path: config.routes.public.product, element: <Product /> },
        { path: config.routes.public.productList, element: <Product /> },
        { path: config.routes.public.allProduct, element: <AllProduct /> }
        
    ]
}

const customerRoutes = {
    element: <CustomerRouter />,
    children: [
        { path: config.routes.customer.cart, element: <Cart /> },
        { path: config.routes.customer.checkout, element: <Checkout /> },
        { path: config.routes.customer.account, element: <Account /> },
        { path: config.routes.customer.orderList, element: <OrderList /> },
        { path: config.routes.customer.history, element: <Voucher /> },
        {path: config.routes.customer.notification, element: <NotiPage/>}
    ]
}

const MainRoutes = {
    path: '/',
    element: <MainRouter />,
    children: [publicRoutes, customerRoutes],
}

export default MainRoutes;


