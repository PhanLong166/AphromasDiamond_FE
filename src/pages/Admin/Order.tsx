import * as Styled from './Order.styled'
import { Link } from 'react-router-dom';
import { ProductOutlined, ShoppingCartOutlined,
    SketchOutlined, AudioOutlined, CommentOutlined,
    TeamOutlined, CustomerServiceOutlined, KeyOutlined,
    LayoutOutlined, SmileOutlined, LogoutOutlined,
    SearchOutlined, UpOutlined, FilterOutlined, 
    ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
    
    const Order = () => {
        return(
            <>
                <Styled.OrderAdmin>
                <div className="dashboardArea">
        <div className="sidebar">
            <div className="logo">
                <h2>LOGO</h2>
            </div>
            <div className="sidebar_menu">
                <div className="menuElement">
                    <ProductOutlined />
                    <Link to="/admin">
                        <p>Dashboard</p>
                    </Link>
                </div>
                <div className="sidebar_content">
                    <div className="active-line"></div>
                    <div className="active">
                        <div className="menuElement-active">
                            <ShoppingCartOutlined />
                            <a href="/order">
                                <p>Order</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="menuElement">
                    <SketchOutlined />
                    <p>Product</p>
                </div>
                <div className="menuElement">
                    <AudioOutlined />
                    <p>Marketing</p>
                </div>
                <div className="menuElement">
                    <CommentOutlined />
                    <p>Client Caring</p>
                </div>
                <div className="menuElement">
                    <TeamOutlined />
                    <p>Customer</p>
                </div>
                <div className="menuElement">
                    <CustomerServiceOutlined />
                    <p>Staff</p>
                </div>
                <div className="menuElement">
                    <KeyOutlined />
                    <p>Manager</p>
                </div>
                <div className="menuElement">
                    <LayoutOutlined />
                    <p>Theme</p>
                </div>
            </div>
            <div className="accOut">
                <div className="accInfor">
                    <SmileOutlined />
                    <div className="accInfor_name-role">
                        <p className="accInfor_name">Trang.admin</p>
                       
                        <p className="accOut_role">Admin</p>
                    </div>
                </div>
                <LogoutOutlined />
            </div>
        </div>

        <div className="dashboard">
            <div className="titlePage">
                <h1>Order Management</h1>
                <p>View and manage Orders</p>
            </div>
            <div className="orderCatalog">
                <div className="orderCatalog_ele">
                    <div className="adMenu_active-line"></div>
                    <h3>Pending confirm</h3>
                </div>
                <div className="orderCatalog_ele">
                    <div className="adMenu_line"></div>
                    <h3>Confirmed</h3>
                </div>
                <div className="orderCatalog_ele">
                    <div className="adMenu_line"></div>
                    <h3>Delivering</h3>
                </div>
                <div className="orderCatalog_ele">
                    <div className="adMenu_line"></div>
                    <h3>Delivered</h3>
                </div>
                <div className="orderCatalog_ele">
                    <div className="adMenu_line"></div>
                    <h3>Cancelled</h3>
                </div>
            </div>
            <div className="orderContent">
                <div className="orderContent_header">
                    <h2>Pending confirm</h2>
                    <div className="orderContent_header-benefit">
                        <div  className="searchArea">
                            <input className="searchInput"></input>
                            <SearchOutlined />
                        </div>
                        <button>
                            Sort by
                            <UpOutlined />
                        </button>
                        <button>
                            <FilterOutlined /> 
                            Filters
                        </button>
                    </div>
                </div>
                <div className="pendConfirm_table">
                    <table>
                        <tr>
                            <th>No</th>
                            <th>ID Order</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Confirm</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>#12345123</td>
                            <td>2 Jan 2023</td>
                            <td>Esther Eden</td>
                            <td>$701</td>
                            <td>
                                <button className="pendStatus">Pending
                                </button>
                            </td>
                            <td><button className="confirmBtn">Confirm
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>#12345124</td>
                            <td>3 Jan 2023</td>
                            <td>Esther Eden</td>
                            <td>$701</td>
                            <td>
                                <button className="pendStatus">Pending
                                </button>
                            </td>
                            <td><button className="confirmBtn">Confirm
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>#12345125</td>
                            <td>4 Jan 2023</td>
                            <td>Ajmal Abdul Rahiman</td>
                            <td>$701</td>
                            <td>
                                <button className="pendStatus">Pending
                                </button>
                            </td>
                            <td><button className="confirmBtn">Confirm
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>#12345126</td>
                            <td>5 Jan 2023</td>
                            <td>Ajmal Abdul Rahiman</td>
                            <td>$701</td>
                            <td>
                                <button className="pendStatus">Pending
                                </button>
                            </td>
                            <td><button className="confirmBtn">Confirm
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>#12345127</td>
                            <td>6 Jan 2023</td>
                            <td>Ajmal Abdul Rahiman</td>
                            <td>$701</td>
                            <td>
                                <button className="pendStatus">Pending
                                </button>
                            </td>
                            <td><button className="confirmBtn">Confirm
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>06</td>
                            <td>#12345128</td>
                            <td>7 Jan 2023</td>
                            <td>Ajmal Abdul Rahiman</td>
                            <td>$701</td>
                            <td>
                                <button className="pendStatus">Pending
                                </button>
                            </td>
                            <td><button className="confirmBtn">Confirm
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="pendConfirm_table-footer">
                    <div className="pageNum">
                        <p className="nowPage">1</p>
                        <p>of</p>
                        <p className="lastPage">5</p>
                    </div>
                    <div className="movePage">
                        <button className="backArrow">
                        <ArrowLeftOutlined />
                        </button>
                        <button className="nextArrow">
                        <ArrowRightOutlined />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
                </Styled.OrderAdmin> 
                </>
    )
};

export default Order; 