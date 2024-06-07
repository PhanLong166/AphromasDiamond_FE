import * as Styled from './OrderMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
    
const OrderMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        switch (location.pathname) {
            case '/admin/order':
                setActive('Pending');
                break;
            case '/admin/order/confirmed':
                setActive('Confirmed');
                break;
            case '/admin/order/delivering':
                setActive('Delivering');
                break;
            case '/admin/order/completed':
                setActive('Completed');
                break;
            case '/admin/order/cancelled':
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
                                <Styled.OrderCatalog_Ele className={active === 'Pending' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Pending' ? 'adMenu_active-line' : 'adMenu_line'} `} onClick={() => handleSetActive('Pending')} ></div>
                                    <Link to="/admin/order">
                                        <h3>Pending confirm</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Confirmed' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Confirmed' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Confirmed')}></div>
                                    <Link to="/admin/order/confirmed">
                                        <h3>Confirmed</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Delivering' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Delivering' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Delivering')}></div>
                                    <Link to="/admin/order/delivering">
                                        <h3>Delivering</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Completed' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Completed' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Completed')}></div>
                                    <Link to="/admin/order/completed">
                                        <h3>Completed</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Cancelled' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Cancelled' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Cancelled')}></div>
                                    <Link to="/admin/order/cancelled">
                                        <h3>Cancelled</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                            </Styled.OrderCatalog>
                            {/* </Styled.OrderMenu>  */}
                </>
    )
};

export default OrderMenu; 