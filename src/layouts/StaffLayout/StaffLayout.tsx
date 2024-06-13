import { Outlet } from "react-router-dom";
// import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";

const StaffLayout = () => {
    return (
        <>
            {/* <Sidebar/> */}
            <Outlet/>
        </>
    )
}

export default StaffLayout;