import config from "@/config"
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"

const AdminRouter = () => {
    return <AdminLayout/>
}

const AdminRoutes = {
    path: config.routes.admin.dashboard,
    element: <AdminRouter/>,
    children: [
        {path: config.routes.admin.dashboard}
    ]
}

export default AdminRoutes;