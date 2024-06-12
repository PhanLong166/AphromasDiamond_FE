import * as Styled from "./Dashboard.styled";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
// import { Link } from 'react-router-dom';
import { ArrowRightOutlined, SendOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import StatistiBox from "./StatistiBox";
import LineChart from "./LineChart";
import { Link } from "react-router-dom";

// import { IonIcon } from '@ionic/react'

interface Chat {
  name: string;
  imgSrc: string;
}

interface ShellElement {
  name: string;
}

interface OrderElement {
  orderID: string;
  cusID: string;
  date: string;
  price: number;
}

const Dashboard = () => {
  const chats: Chat[] = [
    {
      name: "Aphromas Diamond",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/z2997477598872_57e3387a49bd183f37bfcce959c1cf29.jpg?alt=media&token=c6ac8714-1739-4c0e-95b5-9f366fd81048",
    },
    {
      name: "Aphromas Diamond",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/%3BNCT%20chatroom%20-%20ended%3B.jpg?alt=media&token=e1cafd80-754a-431f-81c9-0d514f938dc0",
    },
    {
      name: "Aphromas Diamond",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/248671492_405943994418474_7837095966314867087_n.jpg?alt=media&token=d0100107-c017-4601-bbc7-51da0ffbec57",
    },
  ];

  const shellElements: ShellElement[] = [
    { name: "AphromasDiamond" },
    { name: "AphromasDiamond" },
    { name: "AphromasDiamond" },
    { name: "AphromasDiamond" },
  ];

  //   const jewelryElements: ShellElement[] = [
  //     { name: "Rings" },
  //     { name: "Necklaces" },
  //     { name: "Earrings" },
  //     { name: "Bracelets" },
  //   ];

  const ringShellElements: ShellElement[] = [
    { name: "Emerald Cut Diamond" },
    { name: "Petite Micropavé Diamond Ring" },
    { name: "Petite Halo Solitaire Diamond Ring" },
    { name: "Twisted Halo Diamond Ring" },
  ];

  const orderElement: OrderElement[] = [
    { orderID: "12345122", cusID: "JimGreen", date: "2023-01-02", price: 890 },
    { orderID: "12345121", cusID: "JoeBlack", date: "2023-01-03", price: 560 },
    { orderID: "12345123", cusID: "JimRed", date: "2023-01-04", price: 700 },
    { orderID: "12345124", cusID: "JoeBlack", date: "2023-01-06", price: 701 },
  ];

  const [data, setData] = useState({
    customers: 678,
    customers_Total: 1000,
    orders: 1024,
    orders_Total: 2000,
    cancel_Orders: 143,
    revene: 19460,
    chats: [],
    shellElements: [],
    jewelryElements: [],
    ringShellElements: [],
  });

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      const response = await fetch("/path-to-your-data-source");
      const result = await response.json();
      setData(result);
    };

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
                {/* <Styled.StatistiBox>
                                <p className="statistics">678</p>
                                <p className="statistics_explain">Total Customers</p>
                            </Styled.StatistiBox>
                            <Styled.StatistiBox>
                                <p className="statistics">1,024</p>
                                <p className="statistics_explain">Total Orders</p>
                            </Styled.StatistiBox>
                            <Styled.StatistiBox>
                                <p className="statistics">$19,217</p>
                                <p className="statistics_explain">Annual revenue</p>
                            </Styled.StatistiBox> */}

                <StatistiBox
                  value={data.customers}
                  label="Total Customers"
                  total={(data.customers * 100) / data.customers_Total}
                />
                <StatistiBox
                  value={data.orders}
                  label="Total Orders"
                  total={(data.orders * 100) / data.orders_Total}
                />
                <StatistiBox
                  value={data.cancel_Orders}
                  label="Cancel Orders"
                  total={(data.cancel_Orders * 100) / data.orders}
                />
                <Styled.TopMonth>
                  <p className="topMonth_title">Top month</p>
                  <h2>November 2023</h2>
                  <p className="topMonth-statisti">96K sold so far</p>
                </Styled.TopMonth>
                {/* <Styled.TopTime>
                    <Styled.TopYear>
                    <p className="topYear_title">Top year</p>
                    <h2>2023</h2>
                    <p className="topYear-Detail">96K sold so far</p>
                    </Styled.TopYear>
                </Styled.TopTime> */}
              </Styled.DBContent_1>

              <Styled.DBContent_2>
                <Styled.Revenue>
                  <Styled.Revenue_Title>
                    <h2>Revenue Report</h2>
                    <p className="revenueTotal">{`$${data.revene}`}</p>
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
                    {orderElement.map((OrderElement, index) => (
                      <div className="order_ele" key={index}>
                        <div className="order_eleInfor">
                          <p className="order_eleID">{OrderElement.orderID}</p>
                          <p className="order_eleCusName">
                            {OrderElement.cusID}
                          </p>
                        </div>
                        <p className="order_eleDate">{OrderElement.date}</p>
                        <div className="order_elePrice">
                          ${OrderElement.price}
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
                      <h2>Chats</h2>
                      <p>0 unread messages</p>
                    </Styled.MainTitle>
                    <Link to="/admin/client-caring">
                      <Styled.ViewAll>
                        <p>View All</p>
                        <ArrowRightOutlined />
                      </Styled.ViewAll>
                    </Link>
                  </Styled.ChatGene_Title>
                  <Styled.ChatGene_Content>
                    {chats.map((chat, index) => (
                      <div className="cusChat" key={index}>
                        <div className="cusChat_ava-name">
                          <img src={chat.imgSrc} alt={chat.name} />
                          <p>{chat.name}</p>
                        </div>
                        <div className="cusChat_link">
                          <SendOutlined />
                        </div>
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
                    {/* <Styled.Ele_TableTitle>
                            <p>Name</p>
                            <p>Action</p>
                        </Styled.Ele_TableTitle> */}
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
