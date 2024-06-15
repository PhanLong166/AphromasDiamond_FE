import * as Styled from "../ProductPage/JewelryType.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { SearchOutlined, PlusCircleOutlined, SaveOutlined, } from "@ant-design/icons";
import type { TableProps } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Button,
} from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";

interface Item {
  key: React.Key;
  jewelryTypeID: string;
  jewelryTypeName: string;
}

const originData: Item[] = [
  {
    key: "1",
    jewelryTypeID: "12345121",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "2",
    jewelryTypeID: "12345122",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "3",
    jewelryTypeID: "12345123",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "4",
    jewelryTypeID: "12345124",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "5",
    jewelryTypeID: "12345125",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "6",
    jewelryTypeID: "12345126",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "7",
    jewelryTypeID: "12345127",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "8",
    jewelryTypeID: "12345128",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "9",
    jewelryTypeID: "12345129",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "10",
    jewelryTypeID: "12345130",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
];

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

// UPLOAD IMAGES

// const { Dragger } = Upload;

// const props: UploadProps = {
//   name: "file",
//   multiple: true,
//   action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (status === "done") {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log("Dropped files", e.dataTransfer.files);
//   },
// };



const JewelryType = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [isAdding, setIsAdding] = useState(false);
  const [editingKey, setEditingKey] = useState<React.Key>("");
  const isEditing = (record: Item) => record.key === editingKey;
  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      jewelryTypeID: "",
      jewelryTypeName: "",
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
      title: "Jewelry Type ID",
      dataIndex: "jewelryTypeID",
      editable: true,
      sorter: (a: Item, b: Item) =>
        a.jewelryTypeID.localeCompare(b.jewelryTypeID),
    },
    {
      title: "Jewelry Type Name",
      dataIndex: "jewelryTypeName",
      editable: true,
      sorter: (a: Item, b: Item) =>
        a.jewelryTypeName.length - b.jewelryTypeName.length,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      className: "TextAlign",
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
        originData.length >= 1 ? (
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
        inputType: col.dataIndex === "price" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  mergedColumns;

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

  const handleSave = () => {
    // Logic để lưu dữ liệu mới
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  // const onChangeAdd = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   console.log(e);
  // };

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

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
                      Add New Jewelry Type
                    </button>
                  </Styled.AddButton>
                </>
              )) || (
                <>
                  <Styled.AddContent_Title>
                    <p>Add Jewelry Type</p>
                  </Styled.AddContent_Title>
                </>
              )}
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {isAdding ? (
                <>
                <Form layout="vertical" className="AdPageContent_Content">
                  <Styled.FormItem>
                    <Form.Item label="Jewelry Type ID">
                      <Input className="formItem" placeholder="D1234" />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item label="Jewelry Type Name">
                      <Input className="formItem" placeholder="Filled" />
                    </Form.Item>
                  </Styled.FormItem>
                </Form>
                <Styled.ActionBtn>
                  <Button
                    type="primary"
                    onClick={handleSave}
                    className="MainBtn"
                  >
                    <SaveOutlined />
                    Save
                  </Button>
                  <Button
                    onClick={handleCancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </Button>
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

export default JewelryType;
