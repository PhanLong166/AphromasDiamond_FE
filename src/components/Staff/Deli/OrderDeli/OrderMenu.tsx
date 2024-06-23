import * as Styled from './OrderMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
    
const OrderMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        switch (location.pathname) {
            case '/delivery-staff/delivery-pending':
                setActive('Pending');
                break;
            case '/delivery-staff/delivery-delivering':
                setActive('Delivering');
                break;
            case '/delivery-staff/delivery-delivered':
                setActive('Delivered');
                break;
            case '/delivery-staff/delivery-return':
                setActive('Return');
                break;
            case '/delivery-staff/delivery-completed':
                setActive('Completed');
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
                            {/* <Styled.TitlePage>
                                <h1>Order Management</h1>
                                <p>View and manage Orders</p>
                            </Styled.TitlePage> */}
                            
                            <Styled.OrderCatalog>
                                <Styled.OrderCatalog_Ele className={active === 'Pending' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Pending' ? 'adMenu_active-line' : 'adMenu_line'} `} onClick={() => handleSetActive('Pending')} ></div>
                                    <Link to="/delivery-staff/delivery-pending">
                                        <h3>Pending</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Delivering' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Delivering' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Delivering')}></div>
                                    <Link to="/delivery-staff/delivery-delivering">
                                        <h3>Delivering</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Delivered' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Delivered' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Delivered')}></div>
                                    <Link to="/delivery-staff/delivery-delivered">
                                        <h3>Delivered</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Return' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Return' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Return')}></div>
                                    <Link to="/delivery-staff/delivery-return">
                                        <h3>Return</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Completed' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Completed' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Completed')}></div>
                                    <Link to="/delivery-staff/delivery-completed">
                                        <h3>Completed</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                            </Styled.OrderCatalog>
                            {/* </Styled.OrderMenu>  */}
                </>
    )
};

export default OrderMenu; 