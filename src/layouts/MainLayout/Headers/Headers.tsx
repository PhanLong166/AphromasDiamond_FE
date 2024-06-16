import useAuth from "@/hooks/useAuth";
import Navbar from "./Navbar/Navbar";
import TopMenu from "./TopMenu/TopMenu";

const Headers = () => {
    const { role } = useAuth();
    
    return (
        <>
            <TopMenu
                role={role}
            />
            <Navbar/>
        </>
    );
}

export default Headers