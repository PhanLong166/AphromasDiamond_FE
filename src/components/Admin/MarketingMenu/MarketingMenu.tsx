import * as Styled from './MarketingMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
    
const MarketingMenu = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        const path = location.pathname;
        if (path === "/admin/marketing") {
          setActive("Collection");
        } else if (path.startsWith("/admin/marketing/collection/")) {
          setActive("Collection");
        } else if (path === "/admin/marketing/discount") {
          setActive("ProductPromotion");
        } else if (path.startsWith("/admin/marketing/discount/")) {
          setActive("ProductPromotion");
        } else if (path === "/admin/marketing/voucher") {
          setActive("BillPromotion");
        } else {
          setActive("");
        }
    }, [location.pathname]);

    const handleSetActive = (menuItem: string) => {
        setActive(menuItem);
    };

        return (
          <>
            {/* <Styled.OrderMenu> */}
            <Styled.TitlePage>
              <h1>Marketing Management</h1>
              <p>View and manage Campaign</p>
            </Styled.TitlePage>

            <Styled.MiniCatalog>
              <Styled.MiniCatalog_Ele
                className={active === "Collection" ? "active" : ""}
              >
                <div
                  className={`btn ${
                    active === "Collection"
                      ? "adMenu_active-line"
                      : "adMenu_line"
                  } `}
                  onClick={() => handleSetActive("Collection")}
                ></div>
                <Link to="/admin/marketing">
                  <h3>Collection</h3>
                </Link>
              </Styled.MiniCatalog_Ele>
              <Styled.MiniCatalog_Ele
                className={active === "ProductPromotion" ? "active" : ""}
              >
                <div
                  className={`btn ${
                    active === "ProductPromotion"
                      ? "adMenu_active-line"
                      : "adMenu_line"
                  } `}
                  onClick={() => handleSetActive("ProductPromotion")}
                ></div>
                <Link to="/admin/marketing/discount">
                  <h3>Product Promotion</h3>
                </Link>
              </Styled.MiniCatalog_Ele>
              <Styled.MiniCatalog_Ele
                className={active === "BillPromotion" ? "active" : ""}
              >
                <div
                  className={`btn ${
                    active === "BillPromotion"
                      ? "adMenu_active-line"
                      : "adMenu_line"
                  }`}
                  onClick={() => handleSetActive("BillPromotion")}
                ></div>
                <Link to="/admin/marketing/voucher">
                  <h3>Voucher</h3>
                </Link>
              </Styled.MiniCatalog_Ele>
            </Styled.MiniCatalog>
            {/* </Styled.OrderMenu>  */}
          </>
        );
};

export default MarketingMenu; 