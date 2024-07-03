// import useAuth from "@/hooks/useAuth";
// import { useAppDispatch } from "@/hooks/useStore";
import Footer from "@/layouts/MainLayout/Footer/Footer";
import Headers from "@/layouts/MainLayout/Headers/Headers";
// import { notification } from "antd";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {

    return (
        <>
            <Headers />
            <Outlet />
            <Footer />
        </>
    )
}

export default HomeLayout;