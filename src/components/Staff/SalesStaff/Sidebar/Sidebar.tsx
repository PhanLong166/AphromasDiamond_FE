import * as Styled from "./Sidebar.styled";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ProductOutlined,
  ShoppingCartOutlined,
  SketchOutlined,
  CommentOutlined,
  SmileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    switch (location.pathname) {
      case "/sales-staff":
        setActive("Dashboard");
        break;
      case "/sales-staff/order":
        setActive("Order");
        break;
      case "/sales-staff/product":
        setActive("Product");
        break;
      // case "/admin/marketing":
      //   setActive("Marketing");
      //   break;
      case "/sales-staff/client-caring":
        setActive("ClientCaring");
        break;
      default:
        setActive("");
    }
  }, [location.pathname]);

  const handleSetActive = (menuItem: string) => {
    setActive(menuItem);
  };

  return (
    <>
      <Styled.SidebarContainer>
        <Styled.SidebarTop>
          <Styled.Logo>
            <h2>APHROMAS</h2>
          </Styled.Logo>
          <Styled.SBMenu id="SBMenu">
            <Styled.SBContent>
              <div
                className={`btn ${active === "Dashboard" ? "active-line" : ""}`}
                onClick={() => handleSetActive("Dashboard")}
              ></div>
              <div className={active === "Dashboard" ? "active" : ""}>
                <Styled.MenuElement className="activeContent">
                  <ProductOutlined />
                  <Link to="/sales-staff">
                    <p>Dashboard</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent>

            <Styled.SBContent>
              <div
                className={`btn ${active === "Order" ? "active-line" : ""}`}
                onClick={() => handleSetActive("Order")}
              ></div>
              <div className={active === "Order" ? "active" : ""}>
                <Styled.MenuElement className="activeContent">
                  <ShoppingCartOutlined />
                  <Link to="/sales-staff/order">
                    <p>Order</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent>

            <Styled.SBContent>
              <div
                className={`btn ${active === "Product" ? "active-line" : ""}`}
                onClick={() => handleSetActive("Product")}
              ></div>
              <div className={active === "Product" ? "active" : ""}>
                <Styled.MenuElement className="activeContent">
                  <SketchOutlined />
                  <Link to="/sales-staff/product">
                    <p>Product</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent>

            {/* <Styled.SBContent>
              <div
                className={`btn ${active === "Marketing" ? "active-line" : ""}`}
                onClick={() => handleSetActive("Marketing")}
              ></div>
              <div className={active === "Marketing" ? "active" : ""}>
                <Styled.MenuElement className="activeContent">
                  <AudioOutlined />
                  <Link to="/admin/marketing">
                    <p>Marketing</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent> */}

            <Styled.SBContent>
              <div
                className={`btn ${
                  active === "ClientCaring" ? "active-line" : ""
                }`}
                onClick={() => handleSetActive("ClientCaring")}
              ></div>
              <div className={active === "ClientCaring" ? "active" : ""}>
                <Styled.MenuElement className="activeContent">
                  <CommentOutlined />
                  <Link to="/sales-staff/client-caring">
                    <p>Client Caring</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent>

          </Styled.SBMenu>
        </Styled.SidebarTop>
        <Styled.AccOut>
          <Styled.Account>
            <SmileOutlined />
            <Styled.AccInfor>
              <p className="accInfor_name">Trang.staff</p>
              <p className="accOut_role">staff</p>
            </Styled.AccInfor>
          </Styled.Account>
          <Link to="/login">
            <LogoutOutlined />
          </Link>
        </Styled.AccOut>
      </Styled.SidebarContainer>
    </>
  );
};

export default Sidebar;
