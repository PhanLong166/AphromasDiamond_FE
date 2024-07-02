import * as Styled from "./BillPromotion.styled"
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import type { TableProps, FormInstance } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Button,
  Space,
  DatePicker,
} from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import MarketingMenu from "@/components/Admin/MarketingMenu/MarketingMenu";

interface Item {
  key: React.Key;
  promotionID: string;
  discountPercent: number;
  startDate: string;
  endDate: string;
}
const originData = (): Item[] => {
  const data: Item[] = [
    {
      key: "1",
      promotionID: "12345121",
      discountPercent: 10,
      startDate: "2 Jan 2023",
      endDate: "2 Jan 2024",
    },
    {
      key: "2",
      promotionID: "12345122",
      discountPercent: 10,
      startDate: "2 Jan 2023",
      endDate: "2 Jan 2024",
    },
    {
      key: "3",
      promotionID: "12345123",
      discountPercent: 10,
      startDate: "2 Jan 2023",
      endDate: "2 Jan 2024",
    },
    {
      key: "4",
      promotionID: "12345124",
      discountPercent: 10,
      startDate: "2 Jan 2023",
      endDate: "2 Jan 2024",
    },
    {
      key: "5",
      promotionID: "12345125",
      discountPercent: 10,
      startDate: "2 Jan 2023",
      endDate: "2 Jan 2024",
    },
    {
      key: "6",
      promotionID: "12345126",
      discountPercent: 10,
      startDate: "2 Jan 2023",
      endDate: "2 Jan 2024",
    },
    {
      key: "7",
      promotionID: "12345127",
      discountPercent: 10,
      startDate: "2 Jan 2023",
      endDate: "2 Jan 2024",
    },
    {
      key: "8",
      promotionID: "12345128",
      discountPercent: 10,
      startDate: "2 Jan 2023",
      endDate: "2 Jan 2024",
    },
    {
      key: "9",
      promotionID: "12345129",
      discountPercent: 10,
      startDate: "2 Jan 2023",
      endDate: "2 Jan 2024",
    },
    {
      key: "10",
      promotionID: "12345130",
      discountPercent: 10,
      startDate: "2 Jan 2023",
      endDate: "2 Jan 2024",
    },
  ];
  return data.map((item) => ({
    ...item,
    // sellingPrice: calculateSellingPrice(item.buyingPrice)
  }));
};

// const originData = createInitialData();

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof Item;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: Item;
  index: number;
  // children: React.ReactNode;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
  editing,
  dataIndex,
  title,
  inputType,
  // record,
  // index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

// SUBMIT FORM
interface SubmitButtonProps {
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

// DATE PICK

const { RangePicker } = DatePicker;

const BillPromotion = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [isAdding, setIsAdding] = useState(false);
  const [editingKey, setEditingKey] = useState<React.Key>("");
  const isEditing = (record: Item) => record.key === editingKey;
  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      promotionID: "",
      discountPercent: "",
      startDate: "",
      endDate: "",
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      // row.sellingPrice = calculateSellingPrice(row.buyingPrice);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleDelete = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "promotionID",
      editable: true,
      sorter: (a: Item, b: Item) => a.promotionID.localeCompare(b.promotionID),
    },
    {
      title: "% discount",
      dataIndex: "discountPercent",
      editable: true,
      sorter: (a: Item, b: Item) => a.discountPercent - b.discountPercent,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      editable: true,
      sorter: (a: Item, b: Item) => a.startDate.length - b.startDate.length,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      editable: true,
      sorter: (a: Item, b: Item) => a.endDate.length - b.endDate.length,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      className: "TextAlign SmallSize",
      render: (_: unknown, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
    {
      title: "Delete",
      dataIndex: "delete",
      className: "TextAlign",
      render: (_: unknown, record: Item) =>
        data.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const mergedColumns: TableProps["columns"] = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === "buyingPrice" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const [searchText, setSearchText] = useState("");

  const onSearch = (value: string) => {
    console.log("Search:", value);
    // Thực hiện logic tìm kiếm ở đây
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  // Add New
  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

  const handleAddNew = () => {
    setIsAdding(true);
  };

  // const handleSave = () => {
  //   // Logic để lưu dữ liệu mới
  //   setIsAdding(false);
  // };

  const handleCancel = () => {
    setIsAdding(false);
  };

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <MarketingMenu/>

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
              {(!isAdding && (
                <>
                  <Styled.SearchArea>
                    <Input
                      className="searchInput"
                      type="text"
                      // size="large"
                      placeholder="Search here..."
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      prefix={<SearchOutlined className="searchIcon" />}
                    />
                  </Styled.SearchArea>
                  <Styled.AddButton>
                    <button onClick={handleAddNew}>
                      <PlusCircleOutlined />
                      Add New Promotion
                    </button>
                  </Styled.AddButton>
                </>
              )) || (
                <>
                  <Styled.AddContent_Title>
                    <p>Add Promotion</p>
                  </Styled.AddContent_Title>
                </>
              )}
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {isAdding ? (
                <>
                  <Form
                    className="AdPageContent_Content"
                    form={form}
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                  >
                    <Styled.FormItem>
                      <Form.Item label="Promotion ID" name="promotionID" rules={[{ required: true }]}>
                        <Input className="formItem" placeholder="D1234" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="% discount" name="sale" rules={[{ required: true }]}>
                        <InputNumber className="formItem" placeholder="15" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="Start Time" name="startTime" rules={[{ required: true }]}>
                        <RangePicker showTime />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="End Time" name="endTime" rules={[{ required: true }]}>
                        <RangePicker showTime />
                      </Form.Item>
                    </Styled.FormItem>
                  </Form>

                  <Styled.ActionBtn>
                    <Form.Item>
                      <Space>
                        <SubmitButton form={form}>Save</SubmitButton>
                        <Button
                          onClick={handleCancel}
                          style={{ marginLeft: "10px" }}
                        >
                          Cancel
                        </Button>
                      </Space>
                    </Form.Item>
                  </Styled.ActionBtn>
                </>
              ) : (
                <Form form={form} component={false}>
                  <Table
                    components={{
                      body: {
                        cell: EditableCell,
                      },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                      onChange: cancel,
                      pageSize: 6,
                    }}
                  />
                </Form>
              )}
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default BillPromotion;
