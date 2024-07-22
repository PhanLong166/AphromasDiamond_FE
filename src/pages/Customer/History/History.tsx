import styled from "styled-components";
import { Space, Table, Modal, TableColumnsType, Tag, TableProps } from "antd";
import AccountCus from "@/components/Customer/Account Details/AccountCus";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { orderRelation, showAllOrder } from "@/services/orderAPI";
import useAuth from "@/hooks/useAuth";
import { showAllAccounts } from "@/services/accountApi";
// import DropdownButton from './DropdownButton';

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

interface DataType {
  OrderID: number;
  OrderDate: string;
  CompleteDate: string;
  CustomerID: string | null;
  OrderStatus: string; // Thêm OrderStatus vào đây nếu chưa có
  IsActive: boolean;
  AccountDeliveryID: string | null;
  AccountSaleID: string | null;
  TotalPrice?: string;
}

const formatPrice = (price: number | bigint) => {
  return `$ ${new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(price)}`;
};
const fetchAllOrder = async (AccountID: number) => {
  try {
    const { data } = await showAllOrder();
    console.log("Check API: ", data.data);
    const res = data.data;

    // Get all accounts
    const getAllAccounts = await showAllAccounts();
    console.log(getAllAccounts.data.data);
    // Find AccountID
    const account = getAllAccounts.data.data.find(
      (acc: { AccountID: number }) => acc.AccountID === AccountID
    );
    if (!account) {
      console.log("Account not found");
      return [];
    }
    console.log(account);
    // Get CustomerID
    const customerID = account.CustomerID;
    console.log("Customer ID: ", customerID);
    // Get all orders have CustomerID===
    const customerOrders = res.filter(
      (order: { CustomerID: number }) => order.CustomerID === customerID
    );
    console.log("Check customerOrders: ", customerOrders);
    // Filter orders with status "Completed" or "Canceled"
    const customerOrdersFilter = customerOrders.filter(
      (order: DataType) =>
        order.OrderStatus === "Completed" || order.OrderStatus === "Canceled"
    );
    console.log(customerOrdersFilter);

    // Fetch detailed info for each filtered order
    const detailedOrders = await Promise.all(
      customerOrdersFilter.map(async (order: DataType) => {
        const detailedOrder = await fetchOrderRelation(order.OrderID);
        return { ...order, TotalPrice: detailedOrder.TotalPrice };
      })
    );

    console.log("Check detailedOrders: ", detailedOrders);

    return detailedOrders;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchOrderRelation = async (id: number) => {
  try {
    const { data } = await orderRelation(id);
    console.log("Check API: ", data.data);
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const History = () => {
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState<DataType[]>([]);
  const navigate = useNavigate();
  const { AccountID } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      if (AccountID) {
        const detailedOrders = await fetchAllOrder(AccountID);
        setOrders(detailedOrders);
      }
    };

    fetchData();
  }, [AccountID]);
  const handleOk = () => {
    setShowModal(false);
    // Handle the actual cancel logic here
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "OrderID",
      dataIndex: "OrderID",
      sorter: (a: DataType, b: DataType) => a.OrderID - b.OrderID,
    },
    {
      title: "Order Date",
      dataIndex: "OrderDate",
      sorter: (a: DataType, b: DataType) =>
        a.OrderDate.localeCompare(b.OrderDate),
    },
    {
      title: "Total Price",
      dataIndex: "TotalPrice",
      render: (text) => formatPrice(text),
      sorter: (a: DataType, b: DataType) =>
        parseFloat(a.TotalPrice || "0") - parseFloat(b.TotalPrice || "0"),
    },
    {
      title: "Status",
      dataIndex: "OrderStatus",
      render: (_, { OrderStatus }) => {
        let color = "green";
        if (OrderStatus === "Pending") {
          color = "grey";
        } else if (OrderStatus === "Completed") {
          color = "#32CD32";
        } else if (OrderStatus === "Canceled") {
          color = "volcano";
        }
        return (
          <Tag color={color} key={OrderStatus}>
            {OrderStatus.toUpperCase()}
          </Tag>
        );
      },
      filters: [
        { text: "Completed", value: "Completed" },
        { text: "Cancelled", value: "Canceled" },
      ],
      onFilter: (value, record) =>
        record.OrderStatus.indexOf(value as string) === 0,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space style={{ width: 134 }} size="middle">
          <a
            onClick={() => navigate(`/order-details?orderId=${record.OrderID}`)}
          >
            View
          </a>
        </Space>
      ),
      width: 134,
    },
  ];

  return (
    <main>
      <AccountCus />
      <Section>
        <Title>History</Title>
        <TableContainer>
          <Table
            columns={columns}
            dataSource={orders}
            pagination={{ pageSize: 6 }}
            onChange={onChange}
          />
        </TableContainer>
      </Section>
      <Modal
        title="Cancel Order"
        visible={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to cancel this order?</p>
      </Modal>
    </main>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 29px;
  background: #fff;
`;

const Title = styled.h1`
  color: #000;
  font: 600 32px "Crimson Text", sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const TableContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1400px;
  grid-gap: 15px;
  margin-top: 45px;
  padding-bottom: 11rem;

  @media (max-width: 991px) {
    margin-top: 40px;
    grid-template-columns: 1fr;
  }
`;

export default History;
