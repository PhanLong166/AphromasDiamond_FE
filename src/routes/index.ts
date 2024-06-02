import { useRoutes } from "react-router-dom"
import MainRoutes from "./MainRoutes"

const RoutesComponent = () => {
    return useRoutes([MainRoutes])
}

export default RoutesComponent;