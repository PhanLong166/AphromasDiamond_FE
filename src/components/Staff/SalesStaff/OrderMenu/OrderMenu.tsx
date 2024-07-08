import * as Styled from './OrderMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
    
const OrderMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        switch (location.pathname) {
            case "/sales-staff/order":
                setActive("All");
                break;
            case '/sales-staff/order/pending':
                setActive('Pending');
                break;
            case '/sales-staff/order/accepted':
                setActive('Accepted');
                break;
            case '/sales-staff/order/delivering':
                setActive('Delivering');
                break;
            case '/sales-staff/order/delivered':
                setActive('Delivered');
                break;
            case '/sales-staff/order/completed':
                setActive('Completed');
                break;
            case '/sales-staff/order/cancelled':
                setActive('Cancelled');
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
                                <h1>Order Management</h1>
                                <p>View and manage Orders</p>
                            </Styled.TitlePage>
                            
                            <Styled.OrderCatalog>
                                <Styled.OrderCatalog_Ele  className={active === "All" ? "active" : ""}>
                                    <div className={`btn ${active === "All" ? "adMenu_active-line" : "adMenu_line"} `} onClick={() => handleSetActive("All")}></div>
                                    <Link to="/sales-staff/order">
                                        <h3>All Orders</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Pending' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Pending' ? 'adMenu_active-line' : 'adMenu_line'} `} onClick={() => handleSetActive('Pending')} ></div>
                                    <Link to="/sales-staff/order/pending">
                                        <h3>Pending confirm</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Accepted' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Accepted' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Accepted')}></div>
                                    <Link to="/sales-staff/order/accepted">
                                        <h3>Accepted</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Delivering' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Delivering' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Delivering')}></div>
                                    <Link to="/sales-staff/order/delivering">
                                        <h3>Delivering</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Delivered' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Delivered' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Delivered')}></div>
                                    <Link to="/sales-staff/order/delivered">
                                        <h3>Delivered</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Completed' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Completed' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Completed')}></div>
                                    <Link to="/sales-staff/order/completed">
                                        <h3>Completed</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Cancelled' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Cancelled' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Cancelled')}></div>
                                    <Link to="/sales-staff/order/cancelled">
                                        <h3>Cancelled</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                            </Styled.OrderCatalog>
                            {/* </Styled.OrderMenu>  */}
                </>
    )
};

export default OrderMenu; 