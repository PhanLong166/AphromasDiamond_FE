import config from "@/config"
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import Dashboard from "@/pages/Admin/Dashboard/Dashboard"

const AdminRouter = () => {
    return <AdminLayout/>
}

const AdminRoutes = {
    path: config.routes.admin.dashboard,
    element: <AdminRouter/>,
    children: [
        {path: config.routes.admin.dashboard, element: <Dashboard/>},

    ]

}

export default AdminRoutes;