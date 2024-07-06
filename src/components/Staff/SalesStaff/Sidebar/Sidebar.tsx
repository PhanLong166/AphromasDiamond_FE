// import * as Styled from "./Sidebar.styled";
// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import {
//   ShoppingCartOutlined,
//   SketchOutlined,
//   AudioOutlined,
//   CommentOutlined,
//   // LayoutOutlined,
//   SmileOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons";
// import config from "@/config";
// import cookieUtils from "@/services/cookieUtils";

// const Sidebar = () => {
//   const location = useLocation();
//   const [active, setActive] = useState<string>("");
//   useEffect(() => {
//     switch (location.pathname) {
//       case "/sales-staff":
//       case "/sales-staff/order/pending":
//       case "/sales-staff/order/accepted":
//       case "/sales-staff/order/assigned":
//       case "/sales-staff/order/delivering":
//       case "/sales-staff/order/delivered":
//       case "/sales-staff/order/completed":
//       case "/sales-staff/order/cancelled":
//       case "/sales-staff/order/detail/:id":
//         setActive("Order");
//         break;
//       case "/sales-staff/product":
//       case "/sales-staff/product/diamond/detail/:id":
//       case "/sales-staff/product/jewelry":
//       case "/sales-staff/product/jewelry/detail/:id":
//       case "/sales-staff/product/ring-setting":
//       case "/sales-staff/product/jewelry-type":
//       case "/sales-staff/product/material":
//         setActive("Product");
//         break;
//       case "/sales-staff/marketing":
//         setActive("Marketing");
//         break;
//       case "/sales-staff/client-caring":
//       case "/sales-staff/client-caring/feedback":
//         setActive("ClientCaring");
//         break;
//       default:
//         setActive("");
//     }
//   }, [location.pathname]);

//   const handleSetActive = (menuItem: string) => {
//     setActive(menuItem);
//   };

//   return (
//     <>
//       <Styled.SidebarContainer>
//         <Styled.SidebarTop>
//           <Styled.Logo>
//             <h2>APHROMAS</h2>
//           </Styled.Logo>
//           <Styled.SBMenu id="SBMenu">
//             <Styled.SBContent>
//               <div
//                 className={`btn ${active === "Order" ? "active-line" : ""}`}
//                 onClick={() => handleSetActive("Order")}
//               ></div>
//               <div className={active === "Order" ? "active" : ""}>
//                 <Styled.MenuElement className="activeContent">
//                   <ShoppingCartOutlined />
//                   <Link to="/sales-staff">
//                     <p>Order</p>
//                   </Link>
//                 </Styled.MenuElement>
//               </div>
//             </Styled.SBContent>

//             <Styled.SBContent>
//               <div
//                 className={`btn ${active === "Product" ? "active-line" : ""}`}
//                 onClick={() => handleSetActive("Product")}
//               ></div>
//               <div className={active === "Product" ? "active" : ""}>
//                 <Styled.MenuElement className="activeContent">
//                   <SketchOutlined />
//                   <Link to="/sales-staff/product">
//                     <p>Product</p>
//                   </Link>
//                 </Styled.MenuElement>
//               </div>
//             </Styled.SBContent>

//             <Styled.SBContent>
//               <div
//                 className={`btn ${active === "Marketing" ? "active-line" : ""}`}
//                 onClick={() => handleSetActive("Marketing")}
//               ></div>
//               <div className={active === "Marketing" ? "active" : ""}>
//                 <Styled.MenuElement className="activeContent">
//                   <AudioOutlined />
//                   <Link to="/sales-staff/marketing">
//                     <p>Marketing</p>
//                   </Link>
//                 </Styled.MenuElement>
//               </div>
//             </Styled.SBContent>

//             <Styled.SBContent>
//               <div
//                 className={`btn ${
//                   active === "ClientCaring" ? "active-line" : ""
//                 }`}
//                 onClick={() => handleSetActive("ClientCaring")}
//               ></div>
//               <div className={active === "ClientCaring" ? "active" : ""}>
//                 <Styled.MenuElement className="activeContent">
//                   <CommentOutlined />
//                   <Link to="/sales-staff/client-caring">
//                     <p>Client Caring</p>
//                   </Link>
//                 </Styled.MenuElement>
//               </div>
//             </Styled.SBContent>

//           </Styled.SBMenu>
//         </Styled.SidebarTop>
//         <Styled.AccOut>
//           <Styled.Account>
//             <SmileOutlined />
//             <Styled.AccInfor>
//               <p className="accInfor_name">Trang.staff</p>
//               <p className="accOut_role">Staff</p>
//             </Styled.AccInfor>
//           </Styled.Account>
//           <Link to={config.routes.public.login} onClick={() => cookieUtils.clear()}>
//             <LogoutOutlined className="outLogo"/>
//           </Link>
//         </Styled.AccOut>
//       </Styled.SidebarContainer>
//     </>
//   );
// };

// export default Sidebar;


import * as Styled from "./Sidebar.styled";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ShoppingCartOutlined,
  SketchOutlined,
  AudioOutlined,
  CommentOutlined,
  SmileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import config from "@/config";
import cookieUtils from "@/services/cookieUtils";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith("/sales-staff/order")) {
      setActive("Order");
    } else if (path.startsWith("/sales-staff/product")) {
      setActive("Product");
    } else if (path.startsWith("/sales-staff/marketing")) {
      setActive("Marketing");
    } else if (path.startsWith("/sales-staff/client-caring")) {
      setActive("ClientCaring");
    } else {
      setActive("");
    }
  }, [location.pathname]);

  const handleSetActive = (menuItem: string) => {
    setActive(menuItem);
  };

  return (
    <Styled.SidebarContainer>
      <Styled.SidebarTop>
        <Styled.Logo>
          <h2>APHROMAS</h2>
        </Styled.Logo>
        <Styled.SBMenu id="SBMenu">
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

          <Styled.SBContent>
            <div
              className={`btn ${active === "Marketing" ? "active-line" : ""}`}
              onClick={() => handleSetActive("Marketing")}
            ></div>
            <div className={active === "Marketing" ? "active" : ""}>
              <Styled.MenuElement className="activeContent">
                <AudioOutlined />
                <Link to="/sales-staff/marketing">
                  <p>Marketing</p>
                </Link>
              </Styled.MenuElement>
            </div>
          </Styled.SBContent>

          <Styled.SBContent>
            <div
              className={`btn ${active === "ClientCaring" ? "active-line" : ""}`}
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
            <p className="accOut_role">Staff</p>
          </Styled.AccInfor>
        </Styled.Account>
        <Link to={config.routes.public.login} onClick={() => cookieUtils.clear()}>
          <LogoutOutlined className="outLogo"/>
        </Link>
      </Styled.AccOut>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
