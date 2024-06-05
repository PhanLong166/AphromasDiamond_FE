import * as Styled from './ProductMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
    
const ProductMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        switch (location.pathname) {
            case '/admin/product':
                setActive('Diamond');
                break;
            case '/admin/product/ring-setting':
                setActive('RingSetting');
                break;
            // case '/admin/product/ring':
            //     setActive('Ring');
            //     break;
            case '/admin/product/jewelry':
                setActive('Product');
                break;
            case '/admin/product/jewelry-type':
                setActive('JewelryType');
                break;
            case '/admin/product/material':
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
                            
                            <Styled.MiniCatalog>
                                <Styled.MiniCatalog_Ele className={active === 'Diamond' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Diamond' ? 'adMenu_active-line' : 'adMenu_line'} `} onClick={() => handleSetActive('Diamond')} ></div>
                                    <Link to="/admin/product">
                                        <h3>Diamond</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === 'RingSetting' ? 'active' : ''}>
                                    <div className={`btn ${active === 'RingSetting' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('RingSetting')}></div>
                                    <Link to="/admin/product/ring-setting">
                                        <h3>Ring Setting</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                {/* <Styled.MiniCatalog_Ele className={active === 'Ring' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Ring' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Ring')}></div>
                                    <Link to="/admin/product/ring">
                                        <h3>Ring</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele> */}
                                <Styled.MiniCatalog_Ele className={active === 'Product' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Product' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Product')}></div>
                                    <Link to="/admin/product/jewelry">
                                        <h3>Product</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === 'JewelryType' ? 'active' : ''}>
                                    <div className={`btn ${active === 'JewelryType' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('JewelryType')}></div>
                                    <Link to="/admin/product/jewelry-type">
                                        <h3>Jewelry Type</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === 'Material' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Material' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Material')}></div>
                                    <Link to="/admin/product/material">
                                        <h3>Material</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                            </Styled.MiniCatalog>
                            {/* </Styled.OrderMenu>  */}
                </>
    )
};

export default ProductMenu; 