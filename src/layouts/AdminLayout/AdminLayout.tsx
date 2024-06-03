import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <>
        <Sidebar/>
        <Outlet/>
        </>
    )
}

export default AdminLayout;