import Footer from "@/components/Footer/Footer";
import Headers from "@/components/Headers/Headers";
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