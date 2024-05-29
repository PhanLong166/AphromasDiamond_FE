import * as Styled from './SalesStaffMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
    
const ProductMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        switch (location.pathname) {
            case '/staffAdmin':
                setActive('SalesStaff');
                break;
            case '/staffAdmin/deliveryStaff':
                setActive('DeliveryStaff');
                break;
            default:
                setActive('');
        }
    }, [location.pathname]);

    const handleSetActive = (menuItem: string) => {
        setActive(menuItem);
    };

        return(
            <>
                {/* <Styled.OrderMenu> */}
                            <Styled.TitlePage>
                                <h1>Staff Management</h1>
                                <p>View and manage Staffs</p>
                            </Styled.TitlePage>
                            
                            <Styled.MiniCatalog>
                                <Styled.MiniCatalog_Ele className={active === 'SalesStaff' ? 'active' : ''}>
                                    <div className={`btn ${active === 'SalesStaff' ? 'adMenu_active-line' : 'adMenu_line'} `} onClick={() => handleSetActive('SalesStaff')} ></div>
                                    <Link to="/staffAdmin">
                                        <h3>Sales Staff</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === 'DeliveryStaff' ? 'active' : ''}>
                                    <div className={`btn ${active === 'DeliveryStaff' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('DeliveryStaff')}></div>
                                    <Link to="/staffAdmin/deliveryStaff">
                                        <h3>Delivery Staff</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                            </Styled.MiniCatalog>
                            {/* </Styled.OrderMenu>  */}
                </>
    )
};

export default ProductMenu; 