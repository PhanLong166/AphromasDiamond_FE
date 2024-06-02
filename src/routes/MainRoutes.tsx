import MainLayout from "@/layouts/MainLayout";
import config from "../config";
import Account from "../pages/Customer/AccountDetail/AccountDetail";
import Cart from "../pages/Customer/Cart/Cart";
import Checkout from "../pages/Customer/Checkout/Checkout";
import OrderList from "../pages/Customer/OderList/OderList";
import Voucher from "../pages/Customer/Voucher/Voucher";
import Home from "../pages/Home/Home";
import { Outlet } from "react-router-dom";

const MainRouter = () => {
    return <MainLayout />
}

const CustomerRouter = () => {
    return <Outlet />;
}

const publicRoutes = {
    children: [
        { path: config.routes.public.home, element: <Home /> },
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
    ]
}

const MainRoutes = {
    path: '/',
    element: <MainRouter />,
    children: [publicRoutes, customerRoutes],
}

export default MainRoutes;


