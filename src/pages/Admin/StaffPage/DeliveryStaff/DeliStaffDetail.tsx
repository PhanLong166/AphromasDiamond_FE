import * as Styled from "./DeliStaffDetail.styled";
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
import StaffMenu from "@/components/Admin/SalesStaffMenu/StaffMenu";
import { deliveryStaffData, DeliveryStaffDataType } from "./DeliveryStaffData";
import { orderData, OrderDataType } from "../../OrderPage/OrderData";

const DeliStaffDetail = () => {
  const { id } = useParams<{ id: string }>();

  const activeStaff = deliveryStaffData.find((staff) => staff.staffID === id);

  const orderList = orderData.filter(
    (order) => order.deliveryStaff === activeStaff?.staffName
  );

  // EDIT
  const [isEditing, setIsEditing] = useState(false);
  const [editedStaff, setEditedStaff] = useState(activeStaff);
  const [data, setData] = useState<OrderDataType[]>(orderList);

  useEffect(() => {
    if (activeStaff) {
      setEditedStaff(activeStaff);
      setData(orderList);
    }
  }, [activeStaff, id]);

  const handleFieldChange = (
    fieldName: keyof DeliveryStaffDataType,
    value: any
  ) => {
    setEditedStaff({
      ...editedStaff!,
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
      title: "Customer",
      dataIndex: "cusName",
      sorter: (a, b) => a.cusName.localeCompare(b.cusName),
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

  // DELETE STAFF
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.PageAdminArea>
        <Sidebar />
        <Styled.AdminPage>
          <StaffMenu />

          <Styled.PageContent>
            {activeStaff ? (
              <>
                {isEditing ? (
                  <>
                    <Styled.PageContent_Bot>
                      <Styled.PageDetail_Title>
                        <p>Delivery Staff Detail</p>
                      </Styled.PageDetail_Title>
                      <Styled.PageDetail_Infor>
                        <Form.Item
                          label="Staff ID"
                          className="InforLine_Title-Edit"
                        >
                          <Input
                            value={editedStaff?.staffID}
                            onChange={(e) =>
                              handleFieldChange("staffID", e.target.value)
                            }
                            disabled
                          />
                        </Form.Item>
                        <Form.Item
                          label="Staff Name"
                          className="InforLine_Title-Edit"
                        >
                          <Input
                            value={editedStaff?.staffName}
                            onChange={(e) =>
                              handleFieldChange("staffName", e.target.value)
                            }
                          />
                        </Form.Item>
                        <Form.Item
                          label="Email"
                          className="InforLine_Title-Edit"
                        >
                          <Input
                            value={editedStaff?.email}
                            onChange={(e) =>
                              handleFieldChange("email", e.target.value)
                            }
                          />
                        </Form.Item>
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
                      <Button className="MainBtn" onClick={handleSave}>
                        <SaveOutlined />
                        Save Change
                      </Button>
                      <Link to="/admin/marketing">
                        <Button style={{ marginLeft: "10px" }}>Back</Button>
                      </Link>
                    </Styled.ActionBtn>
                  </>
                ) : (
                  <>
                    <Styled.PageContent_Bot>
                      <Styled.PageDetail_Title>
                        <p>Delivery Staff Detail</p>
                      </Styled.PageDetail_Title>
                      <Styled.PageDetail_Infor>
                        <Styled.InforLine>
                          <p className="InforLine_Title">Staff ID</p>
                          <p>{editedStaff?.staffID}</p>
                        </Styled.InforLine>
                        <Styled.InforLine>
                          <p className="InforLine_Title">Staff Name</p>
                          <p>{editedStaff?.staffName}</p>
                        </Styled.InforLine>
                        <Styled.InforLine>
                          <p className="InforLine_Title">Email</p>
                          <p>{editedStaff?.email}</p>
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
                        <Button
                          onClick={() => setIsEditing(true)}
                          type="primary"
                          style={{ marginBottom: 16 }}
                          className="MainBtn"
                        >
                          Edit
                        </Button>
                        <Link to="/admin/staff/delivery-staff">
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
                          Are you sure you want to delete this staff?
                        </Modal>
                      </Styled.ActionBtn_Right>
                    </Styled.ActionBtn>
                  </>
                )}
              </>
            ) : (
              <p>No Staff found.</p>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default DeliStaffDetail;
