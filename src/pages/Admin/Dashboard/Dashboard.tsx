import * as Styled from "./Dashboard.styled";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import { ArrowRightOutlined } from "@ant-design/icons";
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

const calculateKpiTotal = (startYear: any, startMonth: any, increasePerMonth: any) => {
  const currentDate = new Date();
  const startDate = new Date(startYear, startMonth - 1); 
  const monthsPassed = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
  return monthsPassed * increasePerMonth;
};

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [cancelOrders, setCancelOrders] = useState<any[]>([]);
  const [customers, setCustomers] = useState<any[]>([]);
  const [discounts, setDiscounts] = useState<any[]>([]);
  const [diamonds, setDiamonds] = useState<any[]>([]);
  const [jewelrys, setJewelrys] = useState<any[]>([]);
  const [customersTotal, setCustomersTotal] = useState(0);
  const [ordersTotal, setOrdersTotal] = useState(0);
  const [cancelOrdersTotal, setCancelOrdersTotal] = useState(0);
  const [revenes, setRevenes] = useState<any | null>(null);

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

      const formattedRevene = {
        startDate: reveneData.StartDate,
        endDate: reveneData.EndDate,
        totalRevenueInTime: reveneData.TotalRevenueInTime,
        mostRevenueInTime: reveneData.MostRevenueInTime,
        mostQuantiyInTime: reveneData.MostQuantiyInTime,
        orderResults: reveneData.OrderResults.map((order: any) => ({
          month: order.month,
          revenue: order.revenue,
          orderQuantity: order.orderQuantity,
        })),
      };

      setCustomers(formattedCustomers);
      setOrders(formattedOrders);
      setDiamonds(formattedDiamonds);
      setJewelrys(formattedJewelryList);
      setDiscounts(formattedDiscounts);
      setCancelOrders(formattedCancelOrders);
      setRevenes(formattedRevene);

      const startYear = 2024; 
      const startMonth = 1;
      const increaseCustomer = 10; 
      const increaseOrder = 10; 
      const increaseCancelOrder = 2; 
      const totalCustomerKpi = calculateKpiTotal(startYear, startMonth, increaseCustomer);
      const totalOrderKpi = calculateKpiTotal(startYear, startMonth, increaseOrder);
      const totalCancelOrderKpi = calculateKpiTotal(startYear, startMonth, increaseCancelOrder);
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
                {/* <StatistiBox
                  value={cancelOrders.length}
                  label="Cancel Orders"
                  total={(cancelOrders.length * 100 / cancelOrdersTotal).toFixed(2)}
                /> */}
                <Styled.TopMonth>
                  <p className="topMonth_title">Top month</p>
                  <h2>{revenes?.mostRevenueInTime?.month}</h2>
                  <p className="topMonth-statisti">{revenes?.mostRevenueInTime?.revenue} sold so far</p>
                </Styled.TopMonth>
              </Styled.DBContent_1>

              <Styled.DBContent_2>
                <Styled.Revenue>
                  <Styled.Revenue_Title>
                    <h2>Revenue Report</h2>
                    {/* <p className="revenueTotal">{`$${data.revene}`}</p> */}
                    <p className="revenueTotal">{revenes?.totalRevenueInTime}$</p>
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
                            {/* <p className="order_eleCusName">
                              {order.customerID}
                            </p> */}
                          </div>
                          <p className="order_eleDate">{order.orderDate.replace("T", " ").replace(".000Z", " ")}</p>
                          <div className="order_elePrice">
                            ${order.price}
                          </div>
                        </div>
                      ))}
                  </Styled.RecentOrders_List>
                </Styled.RecentOrders>
              </Styled.DBContent_2>

              <Styled.DBContent_3>
                <Styled.Element>
                  <Styled.Ele_Title>
                    <Styled.MainTitle>
                      <h2>Diamonds</h2>
                    </Styled.MainTitle>
                    <Link to="/admin/product">
                      <Styled.ViewAll>
                        <p>View All</p>
                        <ArrowRightOutlined />
                      </Styled.ViewAll>
                    </Link>
                  </Styled.Ele_Title>
                  <Styled.Ele_Content>
                    {diamonds
                      .slice(0, 4)
                      .map((diamond: any) => (
                        <div className="shell_ele" key={diamond.diamondID}>
                          <div className="shell_eleName">
                            {/* <img
                              src={diamond.images && diamond.images[0] ? diamond.images[0].url : "default-image-url"}
                              alt={diamond.diamondName} /> */}
                            <p>{diamond.diamondName}</p>
                          </div>
                          <Link to={`/admin/product/diamond/detail/${diamond.diamondID}`}>
                            <button className="shell_eleButton">View</button>
                          </Link>
                        </div>
                      ))}
                  </Styled.Ele_Content>
                </Styled.Element>

                <Styled.Element>
                  <Styled.Ele_Title>
                    <Styled.MainTitle>
                      <h2>Jewelrys</h2>
                    </Styled.MainTitle>
                    <Link to="/admin/product/jewelry">
                      <Styled.ViewAll>
                        <p>View All</p>
                        <ArrowRightOutlined />
                      </Styled.ViewAll>
                    </Link>
                  </Styled.Ele_Title>
                  <Styled.Ele_Content>
                    {jewelrys
                      .slice(0, 4)
                      .map((jewelry: any) => (
                        <div className="shell_ele" key={jewelry.jewelryID}>
                          <div className="shell_eleName">
                            {/* <img
                              src={jewelry.images && jewelry.images[0] ? jewelry.images[0].url : "default-image-url"}
                              alt={jewelry.jewelryName} /> */}
                            <p>{jewelry.jewelryName}</p>
                          </div>
                          <Link to={`/admin/product/jewelry/detail/${jewelry.jewelryID}`}>
                            <button className="shell_eleButton">View</button>
                          </Link>
                        </div>
                      ))}
                  </Styled.Ele_Content>
                  <div className="chatNofi_content"></div>
                </Styled.Element>

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
                    {discounts
                    .slice(0, 4)
                    .map((discount: any) => (
                      <div className="shell_ele" key={discount.discountID}>
                        <div className="shell_eleName">
                          <p>{discount.discountName}</p>
                        </div>
                        <div className="shell_elePercent">
                          <p>{discount.percentDiscounts}%</p>
                        </div>
                        {/* <Link to={`/admin/marketing/discount/detail/${discount.discountID}`}>
                        <button className="shell_eleButton">View</button>
                        </Link> */}
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
