import * as Styled from './StaffMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
    
const StaffMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        switch (location.pathname) {
            case '/admin/sales-staff':
                setActive('SalesStaff');
                break;
            case '/admin/staff/delivery-staff':
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
                                    <Link to="/admin/sales-staff">
                                        <h3>Sales Staff</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === 'DeliveryStaff' ? 'active' : ''}>
                                    <div className={`btn ${active === 'DeliveryStaff' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('DeliveryStaff')}></div>
                                    <Link to="/admin/staff/delivery-staff">
                                        <h3>Delivery Staff</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                            </Styled.MiniCatalog>
                            {/* </Styled.OrderMenu>  */}
                </>
    )
};

export default StaffMenu; 