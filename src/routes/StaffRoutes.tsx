import config from "@/config"
import StaffLayout from "@/layouts/StaffLayout"
import DeliveryReport from "@/pages/Staff/DeliveryReport/Deliveryreport"

const StaffRouter = () => {
    return <StaffLayout/>
}

const StaffRoutes = {
    element: <StaffRouter/>,
    children: [
        {
            path: config.routes.staff.deliveryReport,
            element: <DeliveryReport/>
        }
    ]
}

export default StaffRoutes;