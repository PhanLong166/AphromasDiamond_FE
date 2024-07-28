import * as Styled from "./DeliveryDeliveingstyled"
import { useState, useEffect } from "react";
import { Button, Space, Table, Tag } from "antd";
import { PoweroffOutlined, SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import OrderMenu from "@/components/Staff/Deli/OrderDeli/OrderMenu";
import useAuth from "@/hooks/useAuth";
import { getAccountDetail } from "@/services/accountApi";
import config from "@/config";
import cookieUtils from "@/services/cookieUtils";

interface DataType {
  key: React.Key;
  no: string;
  orderID: string;
  cusName: string;
  phoneNumber: string;
  product: string;
  address: string;
  statuses: string[];
}

const columns: TableColumnsType<DataType> = [
  {
    title: "No.",
    dataIndex: "no",
    // defaultSortOrder: "descend",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sorter: (a: DataType, b: DataType) => a.no.localeCompare(b.no),
  },
  {
    title: "Order ID",
    dataIndex: "orderID",
    // defaultSortOrder: "descend",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sorter: (a: DataType, b: DataType) => a.orderID.localeCompare(b.orderID),
  },
  {
    title: " Customer",
    dataIndex: "cusName",
    showSorterTooltip: { target: "full-header" },
    filters: [
      { text: "Joe", value: "Joe" },
      { text: "Jim", value: "Jim" },
      { text: "Esther", value: "Esther" },
      { text: "Ajmal", value: "Ajmal" },
    ],
    onFilter: (value, record) => record.cusName.indexOf(value as string) === 0,
    sorter: (a, b) => a.cusName.length - b.cusName.length,
    sortDirections: ["descend"],
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
  },
  {
    title: " Product",
    dataIndex: "product",
    showSorterTooltip: { target: "full-header" },
    filters: [
      { text: "Diamind Ring", value: "Diamind Ring" },
      { text: "Diamond Necklaces", value: "Diamond Necklaces" },
      { text: "Diamond Round", value: "Diamond Round" },
      { text: "Diamond Earrings", value: "Diamond Earrings" },
      { text: "Diamond Bracelets", value: "Diamond Bracelets" },
      { text: "Diamond Chokers", value: "Diamond Chokers" },
    ],
    onFilter: (value, record) => record.product.indexOf(value as string) === 0,
    sorter: (a, b) => a.product.length - b.product.length,
    sortDirections: ["descend"],
  },
  {
    title: "Address",
    dataIndex: "address",
    showSorterTooltip: { target: "full-header" },
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend"],
  },
  {
    title: "Status",
    key: "statuses",
    dataIndex: "statuses",
    render: (_, { statuses }) => (
      <>
        {statuses.map((status) => {
          let color = status.length > 9 ? "geekblue" : "green";
          if (status === "On Hold") {
            color = "volcano";
          } else if (status === "Pending") {
            color = "yellow";
          } else if (status === "Delivering") {
            color = "geekblue";
          } else if (status === "Completed") {
            color = "green";
          }
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button className="confirmBtn">Mark as Delivered</Button>
      </Space>
    ),
  },
];


const initialData: DataType[] = [
  { key: "1", no: "01", orderID: "12345124", cusName: "Joe Black", phoneNumber: "0342672181", address: "23 Linh Chi, Thu Duc, Ho Chi Minh", product: "Diamond Chokers", statuses: ["Delivering"] },
  { key: "2", no: "02", orderID: "12345122", cusName: "Jim Green", phoneNumber: "0342672181", address: "23 Ba Dinh, Ha Noi", product: "Diamond Chokers", statuses: ["Delivering"] },
  { key: "3", no: "03", orderID: "12345121", cusName: "Joe Black", phoneNumber: "0342672181", address: "23 Linh Chi, Tay Thanh, Hai Phong", product: "Diamond Chokers", statuses: ["Delivering"] },
  { key: "4", no: "04", orderID: "12345123", cusName: "Jim Red", phoneNumber: "0342672181", address: "23 Linh Chi, Tay Tien, Can Tho", product: "Diamond Chokers", statuses: ["Delivering"] },
  { key: "5", no: "05", orderID: "12345121", cusName: "Esther Eden", phoneNumber: "0342672182", address: "23 Linh Chi, Quan 1, Ho Chi Minh", product: "Diamond Chokers", statuses: ["Delivering"] },
  { key: "6", no: "06", orderID: "12345125", cusName: "Ajmal Abdul Rahiman", phoneNumber: "0342672186", address: "23 Linh Chi, Quan 3, Ho Chi Minh", product: "Diamond Chokers", statuses: ["Delivering"] },
  { key: "7", no: "07", orderID: "12345127", cusName: "Ajmal Abdul Rahiman", phoneNumber: "0342672181", address: "23 Linh Chi, Binh Tan, Ho Chi Minh", product: "Diamond Necklaces", statuses: ["Delivering"] },
  { key: "8", no: "08", orderID: "12345127", cusName: "Ajmal Abdul Rahiman", phoneNumber: "0342672181", address: "23 Linh Chi, Nam Son, Hue", product: "Diamond Round", statuses: ["Deliveringv"] },
  { key: "9", no: "09", orderID: "12345125", cusName: "Ajmal Abdul Rahiman", phoneNumber: "0342622181", address: "23 Linh Chi, Son Ki, Thuan An", product: "Diamond Earrings", statuses: ["Delivering"] },
  { key: "10", no: "10", orderID: "12345125", cusName: "Ajmal Abdul Rahiman", phoneNumber: "0342612181", address: "23 Linh Chi, Son Ki, Da Nang", product: "Diamond Bracelets", statuses: ["Delivering"] },
];




const DeliveryDelivering = () => {
  const { AccountID } = useAuth();
  const [user, setUser] = useState<any>(null);
  
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);
  const [initialLoad, setInitialLoad] = useState(true); // Trạng thái theo dõi tải ban đầu

  useEffect(() => {
    const fetchData = async () => {
      const user = await getAccountDetail(AccountID ? AccountID : 0);
      console.log(user.data.data);
      setUser(user.data.data);
    }

    fetchData();
    
    if (initialLoad) {
        setFilteredData(initialData);
        setInitialLoad(false);
    }
    if (searchText.trim() === "") { //nếu search k có value sẽ giá trị bảng ban đầu
      setFilteredData(initialData);
      return;
    }

    const filtered = initialData.filter((item) =>
      item.cusName.toLowerCase().includes(searchText.toLowerCase())
    );

    // Sort filtered results to prioritize matching customers
    const sortedFilteredData = filtered.sort((a, b) => {
      // Compare to move matching items to the beginning
      if (a.cusName.toLowerCase().startsWith(searchText.toLowerCase()) && !b.cusName.toLowerCase().startsWith(searchText.toLowerCase())) {
        return -1;
      }
      if (!a.cusName.toLowerCase().startsWith(searchText.toLowerCase()) && b.cusName.toLowerCase().startsWith(searchText.toLowerCase())) {
        return 1;
      }
      return 0;
    });

    setFilteredData(sortedFilteredData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchText((e.target as HTMLInputElement).value);
    }
  };

  return (
    <>
      <Styled.OrderAdminArea>
        <Styled.AdminPage>
        <Styled.HeaderContainer>
            <Styled.TitlePage>
              <h1>Delivery</h1>
              <p>View and manage Delivery</p>
            </Styled.TitlePage>
            <Styled.DeliveryStaff>
              <h1>Hello, {user ? user.Name : null}</h1>
              <Styled.Logout 
                to={config.routes.public.login} 
                onClick={() => cookieUtils.clear()}
              >
                <PoweroffOutlined/> Logout
              </Styled.Logout>
            </Styled.DeliveryStaff>
          </Styled.HeaderContainer>
          <OrderMenu />
          <Styled.OrderContent>
            <Styled.OrderContent_Head>
              <Styled.SearchArea>
                <SearchOutlined className="searchIcon" />
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Search customer..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </Styled.SearchArea>
            </Styled.OrderContent_Head>

            <Styled.Pending_Table>
              <Table
                className="table"
                columns={columns}
                dataSource={filteredData}
                pagination={{ pageSize: 6 }}
                onChange={onChange}
                showSorterTooltip={{ target: "sorter-icon" }}
              />
            </Styled.Pending_Table>
          </Styled.OrderContent>
        </Styled.AdminPage>
      </Styled.OrderAdminArea>
    </>
  );
};

export default DeliveryDelivering;
