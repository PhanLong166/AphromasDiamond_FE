import * as Styled from './ProductMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
    
const ProductMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        switch (location.pathname) {
            case '/sales-staff/product':
                setActive('Product');
                break;
            case '/sales-staff/product/diamond':
                setActive('Diamond');
                break;
            case '/sales-staff/product/ring-setting':
                setActive('RingSetting');
                break;
            // case '/sales-staff/product/ring':
            //     setActive('Ring');
            //     break;
            // case '/sales-staff/product/jewelry':
            //     setActive('Product');
            //     break;
            case '/sales-staff/product/product-type':
                setActive('ProductType');
                break;
            case '/sales-staff/product/material':
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
                                <Styled.MiniCatalog_Ele className={active === 'Product' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Product' ? 'adMenu_active-line' : 'adMenu_line'} `} onClick={() => handleSetActive('Product')} ></div>
                                    <Link to="/sales-staff/product">
                                        <h3>Product</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === 'Diamond' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Diamond' ? 'adMenu_active-line' : 'adMenu_line'} `} onClick={() => handleSetActive('Diamond')} ></div>
                                    <Link to="/sales-staff/product/diamond">
                                        <h3>Diamond</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === 'RingSetting' ? 'active' : ''}>
                                    <div className={`btn ${active === 'RingSetting' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('RingSetting')}></div>
                                    <Link to="/sales-staff/product/ring-setting">
                                        <h3>Ring Setting</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                {/* <Styled.MiniCatalog_Ele className={active === 'Ring' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Ring' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Ring')}></div>
                                    <Link to="/sales-staff/product/ring">
                                        <h3>Ring</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele> */}
                                {/* <Styled.MiniCatalog_Ele className={active === 'Product' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Product' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Product')}></div>
                                    <Link to="/sales-staff/product/jewelry">
                                        <h3>Product</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele> */}
                                <Styled.MiniCatalog_Ele className={active === 'ProductType' ? 'active' : ''}>
                                    <div className={`btn ${active === 'ProductType' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('ProductType')}></div>
                                    <Link to="/sales-staff/product/product-type">
                                        <h3>Product Type</h3>
                                    </Link>
                                </Styled.MiniCatalog_Ele>
                                <Styled.MiniCatalog_Ele className={active === 'Material' ? 'active' : ''}>
                                    <div className={`btn ${active === 'Material' ? 'adMenu_active-line' : 'adMenu_line'}`} onClick={() => handleSetActive('Material')}></div>
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