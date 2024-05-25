import * as Styled from './ProductMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
    
const ProductMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        switch (location.pathname) {
            case '/productAdmin':
                setActive('Diamond');
                break;
            case '/productAdmin/ringShell':
                setActive('RingShell');
                break;
            case '/productAdmin/ring':
                setActive('Ring');
                break;
            case '/productAdmin/jewelry':
                setActive('Jewelry');
                break;
            case '/productAdmin/jewelryType':
                setActive('JewelryType');
                break;
            case '/productAdmin/material':
                setActive('Material');
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
                                <h1>Product Management</h1>
                                <p>View and manage Products</p>
                            </Styled.TitlePage>
                            
                            <Styled.OrderCatalog>
                                <Styled.OrderCatalog_Ele className={active === 'Diamond' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Diamond' ? 'adMenu_active-line' : 'adMenu_line'} `} onClick={() => handleSetActive('Diamond')} ></div>
                                    <Link to="/productAdmin">
                                        <h3>Diamond</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'RingShell' ? 'active' : ''}>
                                    <div className={`btn ${active === 'RingShell' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('RingShell')}></div>
                                    <Link to="/productAdmin/ringShell">
                                        <h3>Ring Shell</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Jewelry' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Jewelry' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Jewelry')}></div>
                                    <Link to="/productAdmin/confirmed">
                                        <h3>Jewelry</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'JewelryType' ? 'active' : ''}>
                                    <div className={`btn ${active === 'JewelryType' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('JewelryType')}></div>
                                    <Link to="/productAdmin/confirmed">
                                        <h3>Jewelry Type</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                                <Styled.OrderCatalog_Ele className={active === 'Material' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Material' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Material')}></div>
                                    <Link to="/productAdmin/confirmed">
                                        <h3>Material</h3>
                                    </Link>
                                </Styled.OrderCatalog_Ele>
                            </Styled.OrderCatalog>
                            {/* </Styled.OrderMenu>  */}
                </>
    )
};

export default ProductMenu; 