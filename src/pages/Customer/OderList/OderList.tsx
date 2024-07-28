import styled from "styled-components";
import {
  Space,
  Table,
  Modal,
  TableColumnsType,
  Tag,
  TableProps,
  Button,
} from "antd";
import AccountCus from "@/components/Customer/Account Details/AccountCus";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { orderRelation, showAllOrder, updateOrder } from "@/services/orderAPI";
import { showAllAccounts } from "@/services/accountApi";
import useAuth from "@/hooks/useAuth";
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
  VoucherPrice?: string;
  Shippingfee?: number; 
}

const formatPrice = (price: number | bigint) => {
  return `$ ${new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(price)}`;
};

const formatDateTime = (dateTime: string) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(new Date(dateTime));
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
    // Get CustomerID
    const customerID = account.CustomerID;
    console.log("Customer ID: ", customerID);
    // Get all orders have CustomerID===
    const customerOrders = res.filter(
      (order: { CustomerID: number }) => order.CustomerID === customerID
    );
    console.log("Check customerOrders: ", customerOrders);

    // Fetch detailed info for each filtered order
    const detailedOrders = await Promise.all(
      customerOrders.map(async (order: DataType) => {
        const detailedOrder = await fetchOrderRelation(order.OrderID);

        return {
          ...order,
          TotalPrice: detailedOrder.TotalPrice,
          // VoucherPrice: detailedOrder.VoucherPrice,
        };
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

const handleComfirm = async (orderID: number) => {
  try {
    const order = {
      OrderStatus: "Completed",
      IsPayed: true,
      IsActive: true,
    };
    await updateOrder(orderID, order);
  } catch (error) {
    console.error(error);
  }
};

const OrderList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrderID, setSelectedOrderID] = useState<number | null>(null);
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
    if (selectedOrderID) {
      handleComfirm(selectedOrderID);
    }
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
      render: (text) => formatDateTime(text),
      sorter: (a: DataType, b: DataType) =>
        a.OrderDate.localeCompare(b.OrderDate),
    },
    {
      title: "Total Price",
      dataIndex: "TotalPrice",
      render: (_, record) => {
        const price = record.VoucherPrice  || record.TotalPrice ;
        const shippingFee = record.Shippingfee || 0;
        const totalPrice = parseFloat(price || "0") + shippingFee;
        return formatPrice(Number(totalPrice || 0));
      },
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
        } else if (OrderStatus === "Delivered") {
          color = "blue";
        }

        return (
          <Tag color={color} key={OrderStatus}>
            {OrderStatus.toUpperCase()}
          </Tag>
        );
      },
      filters: [
        { text: "Completed", value: "Completed" },
        { text: "Canceled", value: "Canceled" },
        { text: "Delivering", value: "Delivering" },
        { text: "Pending", value: "Pending" },
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
          {record.OrderStatus === "Delivered" && (
            <Button
              type="primary"
              onClick={() => {
                setSelectedOrderID(record.OrderID);
                setShowModal(true);
              }}
            >
              Confirm
            </Button>
          )}
        </Space>
      ),
      width: 134,
    },
  ];

  return (
    <main>
      <AccountCus />
      <Section>
        <Title>My Order</Title>
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
        title="Comfirm Order"
        visible={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to comfirm this order?</p>
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

export default OrderList;
