import * as Styled from "./CustomerDetail.styled";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import {
  Button,
  Input,
  Form,
  TableColumnsType,
  Table,
  Modal,
  Tag,
} from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { customerData, CustomerDataType } from "./CustomerData";
import { orderData, OrderDataType } from "../OrderPage/OrderData";

const CustomerDetail = () => {
  const { id } = useParams<{ id: string }>();

  const activeCustomer = customerData.find((customer) => customer.customerID === id);

  const orderList = orderData.filter(
    (order) => order.cusName === activeCustomer?.customerName
  );

  // EDIT
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState(activeCustomer);
  const [data, setData] = useState<OrderDataType[]>(orderList);

  useEffect(() => {
    if (activeCustomer) {
      setEditedCustomer(activeCustomer);
      setData(orderList);
    }
  }, [activeCustomer, id]);

  const handleFieldChange = (
    fieldName: keyof CustomerDataType,
    value: any
  ) => {
    setEditedCustomer({
      ...editedCustomer!,
      [fieldName]: value,
    });
  };

  const handleSave = () => {
    // Implement save logic here
    setIsEditing(false);
  };


  const columns: TableColumnsType<OrderDataType> = [
    {
      title: "Order ID",
      dataIndex: "orderID",
      sorter: (a, b) => a.orderID.localeCompare(b.orderID),
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.localeCompare(b.date),
    },
    {
      title: "Delivery Staff",
      dataIndex: "deliveryStaff",
      sorter: (a, b) => a.deliveryStaff.localeCompare(b.deliveryStaff),
    },
    {
      title: "Total Price",
      dataIndex: "total",
      sorter: (a, b) => a.total - b.total,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => {
        let color = "green";
        if (status === "Assigned") {
          color = "orange";
        } else if (status === "Delivering") {
          color = "blue";
        } else if (status === "Delivered") {
          color = "purple";
        } else if (status === "Completed") {
          color = "green";
        } else if (status === "Cancelled") {
          color = "default";
        }
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
      filters: [
        { text: "Assigned", value: "Assigned" },
        { text: "Delivering", value: "Delivering" },
        { text: "Delivered", value: "Delivered" },
        { text: "Completed", value: "Completed" },
        { text: "Cancelled", value: "Cancelled" },
      ],
      onFilter: (value, record) => record.status.indexOf(value as string) === 0,
    },
  ];

  // DELETE CUSTOMER
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.PageAdminArea>
        <Sidebar />
        <Styled.AdminPage>

          <Styled.PageContent>
            {activeCustomer ? (
              <>
                    <Styled.PageContent_Bot>
                      <Styled.PageDetail_Title>
                        <p>Customer Detail</p>
                      </Styled.PageDetail_Title>
                      <Styled.PageDetail_Infor>
                        <Styled.InforLine>
                          <p className="InforLine_Title">Customer ID</p>
                          <p>{editedCustomer?.customerID}</p>
                        </Styled.InforLine>
                        <Styled.InforLine>
                          <p className="InforLine_Title">Customer Name</p>
                          <p>{editedCustomer?.customerName}</p>
                        </Styled.InforLine>
                        <Styled.InforLine>
                          <p className="InforLine_Title">Email</p>
                          <p>{editedCustomer?.email}</p>
                        </Styled.InforLine>
                      </Styled.PageDetail_Infor>
                      <Styled.MaterialTable>
                        <Table
                          dataSource={data}
                          columns={columns}
                          rowClassName={() => "editable-row"}
                          bordered
                          pagination={false}
                        />
                      </Styled.MaterialTable>
                    </Styled.PageContent_Bot>
                    <Styled.ActionBtn>
                      <Styled.ActionBtn_Left>
                        <Link to="/admin/customer">
                          <Button style={{ marginLeft: "10px" }}>Back</Button>
                        </Link>
                      </Styled.ActionBtn_Left>
                      <Styled.ActionBtn_Right>
                        <Button
                          className="DeleteBtn"
                          onClick={() => setIsModalVisible(true)}
                        >
                          Delete
                        </Button>
                        <Modal
                          title="Confirm Deletion"
                          visible={isModalVisible}
                          onOk={() => {
                            // Handle the deletion logic here
                            setIsModalVisible(false);
                          }}
                          onCancel={() => setIsModalVisible(false)}
                        >
                          Are you sure you want to delete this customer?
                        </Modal>
                      </Styled.ActionBtn_Right>
                    </Styled.ActionBtn>
                  
              </>
            ) : (
              <p>No Customer found.</p>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default CustomerDetail;
