import * as Styled from './ProductMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
    
const ProductMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        const path = location.pathname;
        if (path.startsWith("/sales-staff/product/diamond/detail/")) {
            setActive("Diamond");
        } else if (path.startsWith("/sales-staff/product/jewelry/detail/")) {
            setActive("Jewelry");
        } else if (path.startsWith("/sales-staff/product/jewelry-setting/detail/")) {
            setActive("RingSetting");
        } else if (path === "/sales-staff/product") {
            setActive("Diamond");
        } else if (path === "/sales-staff/product/jewelry") {
            setActive("Jewelry");
        } else if (path === "/sales-staff/product/jewelry-setting") {
            setActive("RingSetting");
        } else if (path === "/sales-staff/product/jewelry-type") {
            setActive("JewelryType");
        } else if (path === "/sales-staff/product/material") {
            setActive("Material");
        } else {
            setActive("");
        }
    }, [location.pathname]);

    const handleSetActive = (menuItem: string) => {
        setActive(menuItem);
    };

        return(
            <>
                {/* <Styled.OrderMenu> */}
                            <Styled.TitlePage>
                                <h1>Product Management</h1>
                                <p>View and manage Products</p>
                            </Styled.TitlePage>
                            
                            <Styled.MiniCatalog>
                                <Styled.MiniCatalog_Ele className={active === "Diamond" ? "active" : ""}>
                                    <div className={`btn ${active === "Diamond" ? "adMenu_active-line" : "adMenu_line"} `} onClick={() => handleSetActive("Diamond")}></div>
                                    <Link to="/sales-staff/product">
                                        <h3>Diamond</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === "Jewelry" ? "active" : ""}>
                                    <div className={`btn ${active === "Jewelry" ? "adMenu_active-line" : "adMenu_line"}`} onClick={() => handleSetActive("Jewelry")}></div>
                                    <Link to="/sales-staff/product/jewelry">
                                        <h3>Jewelry</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === "RingSetting" ? "active" : ""}>
                                    <div className={`btn ${active === "RingSetting" ? "adMenu_active-line" : "adMenu_line"}`} onClick={() => handleSetActive("RingSetting")}></div>
                                    <Link to="/sales-staff/product/jewelry-setting">
                                        <h3>Jewelry Setting</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === "JewelryType" ? "active" : ""}>
                                    <div className={`btn ${active === "JewelryType" ? "adMenu_active-line" : "adMenu_line"}`} onClick={() => handleSetActive("JewelryType")}></div>
                                    <Link to="/sales-staff/product/jewelry-type">
                                        <h3>Jewelry Type</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === "Material" ? "active" : ""}>
                                    <div className={`btn ${active === "Material" ? "adMenu_active-line" : "adMenu_line"}`} onClick={() => handleSetActive("Material")}></div>
                                    <Link to="/sales-staff/product/material">
                                        <h3>Material</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                            </Styled.MiniCatalog>
                            {/* </Styled.OrderMenu>  */}
                </>
    )
};

export default ProductMenu; 