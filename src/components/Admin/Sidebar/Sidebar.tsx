import * as Styled from "./Sidebar.styled";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  ProductOutlined,
  ShoppingCartOutlined,
  SketchOutlined,
  AudioOutlined,
  CommentOutlined,
  TeamOutlined,
  CustomerServiceOutlined,
  KeyOutlined,
  LayoutOutlined,
  SmileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    switch (location.pathname) {
      case "/admin":
        setActive("Dashboard");
        break;
      case "/orderAdmin":
        setActive("Order");
        break;
      case "/productAdmin":
        setActive("Product");
        break;
      case "/marketingAdmin":
        setActive("Marketing");
        break;
      case "/clientcaringAdmin":
        setActive("ClientCaring");
        break;
      case "/customerAdmin":
        setActive("Customer");
        break;
      case "/staffAdmin":
        setActive("Staff");
        break;
      case "/managerAdmin":
        setActive("Manager");
        break;
      case "/themeAdmin":
        setActive("Theme");
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
                  <Link to="/admin">
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
                  <Link to="/orderAdmin">
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
                  <Link to="/productAdmin">
                    <p>Product</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent>

            <Styled.SBContent>
              <div
                className={`btn ${active === "Marketing" ? "active-line" : ""}`}
                onClick={() => handleSetActive("Marketing")}
              ></div>
              <div className={active === "Marketing" ? "active" : ""}>
                <Styled.MenuElement className="activeContent">
                  <AudioOutlined />
                  <Link to="/marketingAdmin">
                    <p>Marketing</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent>

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
                  <Link to="/clientcaringAdmin">
                    <p>Client Caring</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent>

            <Styled.SBContent>
              <div
                className={`btn ${active === "Customer" ? "active-line" : ""}`}
                onClick={() => handleSetActive("Customer")}
              ></div>
              <div className={active === "Customer" ? "active" : ""}>
                <Styled.MenuElement className="activeContent">
                  <TeamOutlined />
                  <Link to="/customerAdmin">
                    <p>Customer</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent>

            <Styled.SBContent>
              <div
                className={`btn ${active === "Staff" ? "active-line" : ""}`}
                onClick={() => handleSetActive("Staff")}
              ></div>
              <div className={active === "Staff" ? "active" : ""}>
                <Styled.MenuElement className="activeContent">
                  <CustomerServiceOutlined />
                  <Link to="/staffAdmin">
                    <p>Staff</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent>

            <Styled.SBContent>
              <div
                className={`btn ${active === "Manager" ? "active-line" : ""}`}
                onClick={() => handleSetActive("Manager")}
              ></div>
              <div className={active === "Manager" ? "active" : ""}>
                <Styled.MenuElement className="activeContent">
                  <KeyOutlined />
                  <Link to="/managerAdmin">
                    <p>Manager</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent>

            <Styled.SBContent>
              <div
                className={`btn ${active === "Theme" ? "active-line" : ""}`}
                onClick={() => handleSetActive("Theme")}
              ></div>
              <div className={active === "Theme" ? "active" : ""}>
                <Styled.MenuElement className="activeContent">
                  <LayoutOutlined />
                  <Link to="/themeAdmin">
                    <p>Theme</p>
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
              <p className="accInfor_name">Trang.admin</p>
              <p className="accOut_role">Admin</p>
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
