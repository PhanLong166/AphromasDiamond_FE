import * as Styled from './Admin.styled'
// import { ProductOutlined } from 'antd';
import { ProductOutlined, ShoppingCartOutlined,
    SketchOutlined} from '@ant-design/icons';

// import { IonIcon } from '@ionic/react'

const Admin = () => {
    return(
        <>
            <Styled.AdminContainer>
                {/* <h1>Admin Page</h1> */}
            

<div className="sidebar">
      <div className="logo">
        <h2>LOGO</h2>
      </div>
      <div className="sidebar_menu">
        <div className="sidebar_content">
          <div className="active-line"></div>
          <div className="active">
            <div className="menuElement-active">
            <ProductOutlined />
              <a href="index.html">
                <p>Dashboard</p>
              </a>
            </div>
          </div>
        </div>
        <div className="menuElement">
        <ShoppingCartOutlined />
          <a href="order.html">
            <p>Order</p>
          </a>
        </div>
        <div className="menuElement">
        <SketchOutlined />
          <p>Product</p>
        </div>
        <div className="menuElement">
          {/* <IonIcon name="mic-outline" /> */}
          <p>Marketing</p>
        </div>
        <div className="menuElement">
          {/* <IonIcon name="chatbubbles-outline" /> */}
          <p>Client Caring</p>
        </div>
        <div className="menuElement">
          {/* <IonIcon name="people-outline" /> */}
          <p>Customer</p>
        </div>
        <div className="menuElement">
          {/* <IonIcon name="document-outline" /> */}
          <p>Staff</p>
        </div>
        <div className="menuElement">
          {/* <IonIcon name="documents-outline" /> */}
          <p>Manager</p>
        </div>
        <div className="menuElement">
          {/* <IonIcon name="color-palette-outline" /> */}
          <p>Theme</p>
        </div>
      </div>
      <div className="accOut">
        <div className="accInfor">
          {/* <IonIcon name="person-circle-outline" /> */}
          <div className="accInfor_name-role">
            <p className="accInfor_name">Trang.admin</p>
            <p className="accOut_role">Admin</p>
          </div>
        </div>
        {/* <IonIcon name="log-out-outline" /> */}
      </div>
    </div>

    </Styled.AdminContainer>
        </>
    )
};

export default Admin;