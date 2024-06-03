import config from "@/config"
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import Dashboard from "@/pages/Admin/Dashboard/Dashboard"
import Order from "@/pages/Admin/OrderPage/Order"

const AdminRouter = () => {
    return <AdminLayout />
}

const AdminRoutes = {
    path: config.routes.admin.dashboard,
    element: <AdminRouter />,
    children: [
        { path: config.routes.admin.dashboard, element: <Dashboard /> },
        { path: config.routes.admin.order, element: <Order /> }
    ]
}

export default AdminRoutes;