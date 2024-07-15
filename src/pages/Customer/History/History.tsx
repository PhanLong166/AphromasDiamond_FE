import styled from "styled-components";
import { Space, Table, Modal, TableColumnsType, Tag, TableProps } from "antd";
import AccountCus from "@/components/Customer/Account Details/AccountCus";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { showAllOrder } from "@/services/orderAPI";
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
}

const fetchAllOrder = async () => {
  try {
    const { data } = await showAllOrder();
    console.log("Check API: ", data.data);

    // Lọc và lấy ra những đơn hàng có trạng thái là "Completed" hoặc "Canceled"
    const filteredOrders = data.data.filter(
      (order: DataType) =>
        order.OrderStatus === "Completed" || order.OrderStatus === "Canceled"
    );

    console.log("Check filteredOrders: ", filteredOrders);

    return filteredOrders;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const History = () => {
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const filteredOrders = await fetchAllOrder();
      setOrders(filteredOrders);
    };

    fetchData();
  }, []);

  const handleOk = () => {
    setShowModal(false);
    // Handle the actual cancel logic here
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const columns: TableColumnsType<DataType> = [
    // { title: "No", dataIndex: "No" },
    {
      title: "OrderID",
      dataIndex: "OrderID",
      sorter: (a: DataType, b: DataType) => a.OrderID - b.OrderID,
    },
    {
      title: "Order Date",
      dataIndex: "OrderDate",
      // defaultSortOrder: "descend",
      sorter: (a: DataType, b: DataType) =>
        a.OrderDate.localeCompare(b.OrderDate),
    },

    // {
    //   title: "Price",
    //   dataIndex: "price",
    //   // defaultSortOrder: "descend",
    //   sorter: (a: DataType, b: DataType) => a.Price - b.price,
    // },
    {
      title: "Status",
      dataIndex: "OrderStatus",
      render: (_, { OrderStatus }) => {
        let color = "green";
        if (OrderStatus === "Pending") {
          color = "grey";
        } else if (OrderStatus === "Completed") {
          //   color = "#32CD32";
          // } else if (OrderStatus === "Delivering") {
          //   color = "geekblue";
          // } else if (OrderStatus === "Delivered") {
          //   color = "green";
          // }
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
        // { text: "Pending", value: "Pending" },
        // { text: "Delivered", value: "Delivered" },
        // { text: "Delivering", value: "Delivering" },
        { text: "Completed", value: "Completed" },
        { text: "Cancelled", value: "Cancelled" },
      ],
      onFilter: (value, record) =>
        record.OrderStatus.indexOf(value as string) === 0,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space style={{ width: 134 }} size="middle">
          <Link to="/order-details">View</Link>
          <a>Review FB</a>
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
