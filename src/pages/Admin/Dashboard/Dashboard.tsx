import * as Styled from "./Dashboard.styled";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
// import { Link } from 'react-router-dom';
import { ArrowRightOutlined, SendOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import StatistiBox from "./StatistiBox";
import LineChart from "./LineChart";
import { Link } from "react-router-dom";
import { showAllDiamond } from "@/services/diamondAPI";
import { showAllProduct } from "@/services/productAPI";
import { showAllOrder, showReveneSummary } from "@/services/orderAPI";
import { showAllAccounts } from "@/services/authAPI";
import { getImage } from "@/services/imageAPI";
import { showAllDiscount } from "@/services/discountAPI";

// interface Chat {
//   name: string;
//   imgSrc: string;
// }

// interface ShellElement {
//   name: string;
// }

// interface OrderElement {
//   orderID: string;
//   cusID: string;
//   date: string;
//   price: number;
// }

// const shellElements: ShellElement[] = [
//   { name: "AphromasDiamond" },
//   { name: "AphromasDiamond" },
//   { name: "AphromasDiamond" },
//   { name: "AphromasDiamond" },
// ];

// const ringShellElements: ShellElement[] = [
//   { name: "Emerald Cut Diamond" },
//   { name: "Petite Micropavé Diamond Ring" },
//   { name: "Petite Halo Solitaire Diamond Ring" },
//   { name: "Twisted Halo Diamond Ring" },
// ];

// const orderElement: OrderElement[] = [
//   { orderID: "12345122", cusID: "JimGreen", date: "2023-01-02", price: 890 },
//   { orderID: "12345121", cusID: "JoeBlack", date: "2023-01-03", price: 560 },
//   { orderID: "12345123", cusID: "JimRed", date: "2023-01-04", price: 700 },
//   { orderID: "12345124", cusID: "JoeBlack", date: "2023-01-06", price: 701 },
// ];

// const [data, setData] = useState({
//   customers: 678,
//   customers_Total: 1000,
//   orders: 1024,
//   orders_Total: 2000,
//   cancel_Orders: 143,
//   revene: 19460,
//   chats: [],
//   shellElements: [],
//   jewelryElements: [],
//   ringShellElements: [],
// });

const calculateKpiTotal = (startYear: any, increasePerYear: any) => {
  const currentYear = new Date().getFullYear();
  const yearsPassed = currentYear - startYear;
  return yearsPassed * increasePerYear;
};

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [cancelOrders, setCancelOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [diamonds, setDiamonds] = useState([]);
  const [jewelrys, setJewelrys] = useState([]);
  const [customersTotal, setCustomersTotal] = useState(0);
  const [ordersTotal, setOrdersTotal] = useState(0);
  const [cancelOrdersTotal, setCancelOrdersTotal] = useState(0);
  const [revenes, setRevenes] = useState([]);

  const fetchData = async () => {
    try {
      const responseCustomers = await showAllAccounts();
      const responseOrders = await showAllOrder();
      const responseDiamonds = await showAllDiamond();
      const responseJewelry = await showAllProduct();
      const responseDiscount = await showAllDiscount();
      const responseRevenes = await showReveneSummary();

      const { data: customersData } = responseCustomers.data;
      const { data: ordersData } = responseOrders.data;
      const { data: reveneData } = responseRevenes.data;
      const { data: diamondsData } = responseDiamonds.data;
      const { data: jewelryData } = responseJewelry.data;
      const { data: discountsData } = responseDiscount.data;

      const formattedCustomers = customersData
      .filter((customer: any) => (customer.CustomerID !== null && customer.Role === "ROLE_CUSTOMER"))
      .map((customer: any) => ({
        accountID: customer.AccountID,
        customerName: customer.Name,
        role: customer.Role,
        customerID: customer.CustomerID
      }));

      const formattedOrders = ordersData
      .map((order: any) => ({
        orderID: order.OrderID,
        orderDate: order.OrderDate,
        price: order.Price,
        customerID: order.CustomerID,
      }));

      const formattedCancelOrders = ordersData
      .filter((order: any) => (order.OrderStatus === "Cancelled"))
      .map((order: any) => ({
        orderID: order.OrderID,
        orderDate: order.OrderDate,
        price: order.Price,
        orderStatus: order.OrderStatus,
      }));

      const formattedDiamonds = diamondsData.map((diamond: any) => ({
        diamondID: diamond.DiamondID,
        diamondName: diamond.Name,
        price: diamond.Price,
        images: diamond.usingImage.map((image: any) => ({
          id: image.UsingImageID,
          name: image.Name,
          url: getImage(image.UsingImageID),
        })),
      }));

      const formattedJewelryList = jewelryData?.map((jewelry: any) => ({
        jewelryID: jewelry.ProductID,
        jewelryName: jewelry.Name,
        totalQuantitySettingVariants: jewelry.TotalQuantityJewelrySettingVariants,
        images: jewelry.UsingImage.map((image: any) => ({
          id: image.UsingImageID,
          name: image.Name,
          url: getImage(image.UsingImageID),
        })),
      }));

      const formattedDiscounts = discountsData
      .map((discount: any) => ({
        discountID: discount.DiscountID,
        discountName: discount.Name,
        percentDiscounts: discount.PercentDiscounts,
      }));

      const formattedRevene = reveneData
        .map((revene: any) => ({
          startDate: revene.StartDate,
          endDate: revene.EndDate,
          mostRevenueInTime: revene.MostRevenueInTime,
          mostQuantiyInTime: revene.MostQuantiyInTime,
        }));

      setCustomers(formattedCustomers);
      setOrders(formattedOrders);
      setDiamonds(formattedDiamonds);
      setJewelrys(formattedJewelryList);
      setDiscounts(formattedDiscounts);
      setCancelOrders(formattedCancelOrders);
      setRevenes(formattedRevene);

      const startYear = 2024; 
      const increaseCustomer = 50; 
      const increaseOrder = 100; 
      const increaseCancelOrder = 50; 
      const totalCustomerKpi = calculateKpiTotal(startYear, increaseCustomer);
      const totalOrderKpi = calculateKpiTotal(startYear, increaseOrder);
      const totalCancelOrderKpi = calculateKpiTotal(startYear, increaseCancelOrder);
      setCustomersTotal(totalCustomerKpi);
      setOrdersTotal(totalOrderKpi);
      setCancelOrdersTotal(totalCancelOrderKpi);
    } catch (error) {
      console.error("Failed to fetch infor:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Styled.GlobalStyle/>
      <Styled.AdminContainer>
        <Sidebar />

        {/* <Styled.hehe> */}
          <Styled.AdminPage>
            <Styled.TopPage>
            <Styled.TitlePage>
              <h1>Dashboard</h1>
              <p>View all status from the dashboard</p>
            </Styled.TitlePage>
            <Styled.DBContent>
              <Styled.DBContent_1>
                <StatistiBox
                  value={customers.length}
                  label="Total Customers"
                  total={(customers.length * 100 / customersTotal).toFixed(2)}
                />
                <StatistiBox
                  value={orders.length}
                  label="Total Orders"
                  total={(orders.length * 100 / ordersTotal).toFixed(2)}
                />
                <StatistiBox
                  value={cancelOrders.length}
                  label="Cancel Orders"
                  total={(cancelOrders.length * 100 / cancelOrdersTotal).toFixed(2)}
                />
                <Styled.TopMonth>
                  <p className="topMonth_title">Top month</p>
                  <h2>November 2023</h2>
                  <p className="topMonth-statisti">96K sold so far</p>
                </Styled.TopMonth>
              </Styled.DBContent_1>

              <Styled.DBContent_2>
                <Styled.Revenue>
                  <Styled.Revenue_Title>
                    <h2>Revenue Report</h2>
                    {/* <p className="revenueTotal">{`$${data.revene}`}</p> */}
                    <p className="revenueTotal">1222</p>
                  </Styled.Revenue_Title>
                  <Styled.Revenue_Content>
                    <LineChart isDashboard={true} />
                  </Styled.Revenue_Content>
                </Styled.Revenue>

                <Styled.RecentOrders>
                  <Styled.RecentOrders_Title>
                    <Styled.MainTitle>
                      <h2>Recent Orders</h2>
                    </Styled.MainTitle>
                    <Link to="/admin/order">
                      <Styled.ViewAll>
                        <p>View All</p>
                        <ArrowRightOutlined />
                      </Styled.ViewAll>
                    </Link>
                  </Styled.RecentOrders_Title>
                  <Styled.RecentOrders_List>
                    {orders
                      .sort((a: any, b: any) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime())
                      .slice(0, 4)
                      .map((order: any) => (
                        <div className="order_ele" key={order.orderID}>
                          <div className="order_eleInfor">
                            <p className="order_eleID">{order.orderID}</p>
                            <p className="order_eleCusName">
                              {order.customerID}
                            </p>
                          </div>
                          <p className="order_eleDate">{order.orderDate}</p>
                          <div className="order_elePrice">
                            ${order.price}
                          </div>
                        </div>
                      ))}
                  </Styled.RecentOrders_List>
                </Styled.RecentOrders>
              </Styled.DBContent_2>

              <Styled.DBContent_3>
                <Styled.ChatGene>
                  <Styled.ChatGene_Title>
                    <Styled.MainTitle>
                      <h2>Diamonds</h2>
                    </Styled.MainTitle>
                    <Link to="/admin/client-caring">
                      <Styled.ViewAll>
                        <p>View All</p>
                        <ArrowRightOutlined />
                      </Styled.ViewAll>
                    </Link>
                  </Styled.ChatGene_Title>
                  <Styled.ChatGene_Content>
                    {diamonds
                      .slice(0, 4)
                      .map((diamond: any) => (
                        <div className="cusChat" key={diamond.diamondID}>
                          <div className="cusChat_ava-name">
                            <img
                              src={diamond.images && diamond.images[0] ? diamond.images[0].url : "default-image-url"}
                              alt={diamond.diamondName} />
                            <p>{diamond.diamondName}</p>
                          </div>
                          <Link to={`/admin/product/diamond/detail/${diamond.diamondID}`}>
                            <button className="shell_eleButton">View</button>
                          </Link>
                        </div>
                      ))}
                  </Styled.ChatGene_Content>
                  <div className="chatNofi_content"></div>
                </Styled.ChatGene>

                <Styled.Element>
                  <Styled.Ele_Title>
                    <h2>Promotional</h2>
                    <Link to="/admin/marketing">
                      <Styled.ViewAll>
                        <p>View All</p>
                        <ArrowRightOutlined />
                      </Styled.ViewAll>
                    </Link>
                  </Styled.Ele_Title>
                  <Styled.Ele_Content>
                    {shellElements.map((ShellElement, index) => (
                      <div className="shell_ele" key={index}>
                        <div className="shell_eleName">
                          <p>{ShellElement.name}</p>
                        </div>
                        <button className="shell_eleButton">View</button>
                      </div>
                    ))}
                  </Styled.Ele_Content>
                </Styled.Element>

                <Styled.Element>
                  <Styled.Ele_Title>
                    <h2>Product</h2>
                    <Link to="/admin/product">
                      <Styled.ViewAll>
                        <p>View All</p>
                        <ArrowRightOutlined />
                      </Styled.ViewAll>
                    </Link>
                  </Styled.Ele_Title>

                  <Styled.Ele_Content>
                    {/* <Styled.Ele_TableTitle>
                            <p>Name</p>
                            <p>Action</p>
                        </Styled.Ele_TableTitle> */}
                    {ringShellElements.map((ringShellElements, index) => (
                      <div className="shell_ele" key={index}>
                        <div className="shell_eleName">
                          <p>{ringShellElements.name}</p>
                        </div>
                        <button className="shell_eleButton">View</button>
                      </div>
                    ))}
                  </Styled.Ele_Content>
                </Styled.Element>
              </Styled.DBContent_3>
            </Styled.DBContent>
            </Styled.TopPage>
          </Styled.AdminPage>
          
      </Styled.AdminContainer>
    </>
  );
};

export default Dashboard;
