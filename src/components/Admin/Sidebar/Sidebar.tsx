import * as Styled from "./Sidebar.styled";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ProductOutlined,
  ShoppingCartOutlined,
  SketchOutlined,
  AudioOutlined,
  CommentOutlined,
  TeamOutlined,
  CustomerServiceOutlined,
  KeyOutlined,
  SmileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import config from "@/config";
import cookieUtils from "@/services/cookieUtils";
import { showAllAccounts } from "@/services/authAPI";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>("");
  const [userInfo, setUserInfo] = useState<{ name: string, role: string } | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await showAllAccounts();
        const account = response.data; // Thay đổi cách lấy tài khoản tùy theo cấu trúc thực tế của response
        setUserInfo({
          name: account.Name,
          role: account.Role,
        });
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/admin") {
      setActive("Dashboard");
    } else if (path === "/admin/order") {
      setActive("Order");
    } else if (path === "/admin/product") {
      setActive("Product");
    } else if (path === "/admin/marketing") {
      setActive("Marketing");
    } else if (path === "/admin/client-caring") {
      setActive("ClientCaring");
    } else if (path === "/admin/customer") {
      setActive("Customer");
    } else if (path === "/admin/sales-staff") {
      setActive("Staff");
    } else if (path === "/admin/manager") {
      setActive("Manager");
    } else if (path.startsWith("/admin/order/")) {
      setActive("Order");
    } else if (path.startsWith("/admin/product/")) {
      setActive("Product");
    } else if (path.startsWith("/admin/marketing/")) {
      setActive("Marketing");
    } else if (path.startsWith("/admin/client-caring/")) {
      setActive("ClientCaring");
    } else if (path.startsWith("/admin/customer")) {
      setActive("Customer");
    } else if (path.startsWith("/admin/staff/")) {
      setActive("Staff");
    } else {
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
                  <Link to="/admin/order">
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
                  <Link to="/admin/product">
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
                  <Link to="/admin/marketing">
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
                  <Link to="/admin/client-caring">
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
                  <Link to="/admin/customer">
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
                  <Link to="/admin/sales-staff">
                    <p>Staff</p>
                  </Link>
                </Styled.MenuElement>
              </div>
            </Styled.SBContent>

            {userInfo?.role !== "ROLE_MANAGER" && (
              <Styled.SBContent>
                <div
                  className={`btn ${active === "Manager" ? "active-line" : ""}`}
                  onClick={() => handleSetActive("Manager")}
                ></div>
                <div className={active === "Manager" ? "active" : ""}>
                  <Styled.MenuElement className="activeContent">
                    <KeyOutlined />
                    <Link to="/admin/manager">
                      <p>Manager</p>
                    </Link>
                  </Styled.MenuElement>
                </div>
              </Styled.SBContent>
            )}
          </Styled.SBMenu>
        </Styled.SidebarTop>
        <Styled.AccOut>
          <Styled.Account>
            <SmileOutlined />
            <Styled.AccInfor>
              <p className="accInfor_name">{userInfo?.name}</p>
              <p className="accOut_role">{userInfo?.role}</p>
            </Styled.AccInfor>
          </Styled.Account>
          <Link to={config.routes.public.login} onClick={() => cookieUtils.clear()}>
            <LogoutOutlined className="outLogo"/>
          </Link>
        </Styled.AccOut>
      </Styled.SidebarContainer>
    </>
  );
};

export default Sidebar;
