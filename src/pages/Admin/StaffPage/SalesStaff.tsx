import * as Styled from "../StaffPage/SalesStaff.styled";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import {
  // Select,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
} from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import StaffMenu from "@/components/Admin/SalesStaffMenu/StaffMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Item {
  key: React.Key;
  staffID: string;
  staffName: string;
  email: string;
}

const originData: Item[] = [
  {
    key: "1",
    staffID: "12345121",
    staffName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "2",
    staffID: "12345122",
    staffName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "3",
    staffID: "12345123",
    staffName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "4",
    staffID: "12345124",
    staffName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "5",
    staffID: "12345125",
    staffName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "6",
    staffID: "12345126",
    staffName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "7",
    staffID: "12345127",
    staffName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "8",
    staffID: "12345128",
    staffName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "9",
    staffID: "12345129",
    staffName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "10",
    staffID: "12345130",
    staffName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
];

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof Item;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
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

const SalesStaff = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [editingKey, setEditingKey] = useState<React.Key>("");

  const isEditing = (record: Item) => record.key === editingKey;
  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      staffID: "",
      staffName: "",
      email: "",
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
  save;

  const columns = [
    {
      title: "Staff ID",
      dataIndex: "staffID",
      editable: true,
      sorter: (a: Item, b: Item) => a.staffID.localeCompare(b.staffID),
    },
    {
      title: "Staff Name",
      dataIndex: "staffName",
      defaultSortOrder: "descend",
      editable: true,
      sorter: (a: Item, b: Item) => a.staffName.length - b.staffName.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      editable: true,
      // sorter: (a: Item, b: Item) => a.email.length - b.email.length,
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
        inputType: col.dataIndex === "discountPercent" ? "number" : "text",
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

  return (
    <>
      <Styled.AdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <StaffMenu />

          <Styled.AdPageContent>
          <Styled.AdPageContent_Head>
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
                <Link to="">
                  <button>
                    <PlusCircleOutlined />
                    Add New Staff
                  </button>
                </Link>
              </Styled.AddButton>
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
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
                    // onChange: cancel,
                    pageSize: 6,
                  }}
                />
              </Form>
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.AdminArea>
    </>
  );
};

export default SalesStaff;

// import * as Styled from "../ProductPage/JewelryType.styled";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import type { ColumnType } from "antd";
// import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
// import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
// import StaffMenu from "@/components/Admin/SalesStaffMenu/StaffMenu";

// interface Item {
//   key: React.Key;
//   staffID: string;
//   staffName: string;
//   email: string;
// }

// const originData: Item[] = [
//   {
//     key: "1",
//     staffID: "12345121",
//     staffName: "Ajmal Abdul Rahiman",
//     email: "xinchao@gmail.com",
//   },
//   {
//     key: "2",
//     staffID: "12345122",
//     staffName: "Ajmal Abdul Rahiman",
//     email: "xinchao@gmail.com",
//   },
//   {
//     key: "3",
//     staffID: "12345123",
//     staffName: "Ajmal Abdul Rahiman",
//     email: "xinchao@gmail.com",
//   },
//   {
//     key: "4",
//     staffID: "12345124",
//     staffName: "Ajmal Abdul Rahiman",
//     email: "xinchao@gmail.com",
//   },
//   {
//     key: "5",
//     staffID: "12345125",
//     staffName: "Ajmal Abdul Rahiman",
//     email: "xinchao@gmail.com",
//   },
//   {
//     key: "6",
//     staffID: "12345126",
//     staffName: "Ajmal Abdul Rahiman",
//     email: "xinchao@gmail.com",
//   },
//   {
//     key: "7",
//     staffID: "12345127",
//     staffName: "Ajmal Abdul Rahiman",
//     email: "xinchao@gmail.com",
//   },
//   {
//     key: "8",
//     staffID: "12345128",
//     staffName: "Ajmal Abdul Rahiman",
//     email: "xinchao@gmail.com",
//   },
//   {
//     key: "9",
//     staffID: "12345129",
//     staffName: "Ajmal Abdul Rahiman",
//     email: "xinchao@gmail.com",
//   },
//   {
//     key: "10",
//     staffID: "12345130",
//     staffName: "Ajmal Abdul Rahiman",
//     email: "xinchao@gmail.com",
//   },
// ];

// interface EditableCellProps {
//   editing: boolean;
//   dataIndex: keyof Item;
//   title: React.ReactNode;
//   inputType: "number" | "text";
//   record: Item;
//   index: number;
//   // children: React.ReactNode;
// }

// const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
//   editing,
//   dataIndex,
//   title,
//   inputType,
//   children,
//   ...restProps
// }) => {
//   const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

//   return (
//     <td {...restProps}>
//       {editing ? (
//         <Form.Item
//           name={dataIndex}
//           style={{ margin: 0 }}
//           rules={[
//             {
//               required: true,
//               message: `Please Input ${title}!`,
//             },
//           ]}
//         >
//           {inputNode}
//         </Form.Item>
//       ) : (
//         children
//       )}
//     </td>
//   );
// };

// const SalesStaff = () => {
//   const [form] = Form.useForm();
//   const [data, setData] = useState<Item[]>(originData);
//   const [editingKey, setEditingKey] = useState<React.Key>("");
//   const isEditing = (record: Item) => record.key === editingKey;
//   const edit = (record: Partial<Item> & { key: React.Key }) => {
//     form.setFieldsValue({
//       staffID: "",
//       staffName: "",
//       email: "",
//       ...record,
//     });
//     setEditingKey(record.key);
//   };
//   const cancel = () => {
//     setEditingKey("");
//   };
//   const save = async (key: React.Key) => {
//     try {
//       const row = (await form.validateFields()) as Item;
//       const newData = [...data];
//       const index = newData.findIndex((item) => key === item.key);
//       if (index > -1) {
//         const item = newData[index];
//         newData.splice(index, 1, {
//           ...item,
//           ...row,
//         });
//         setData(newData);
//         setEditingKey("");
//       } else {
//         newData.push(row);
//         setData(newData);
//         setEditingKey("");
//       }
//     } catch (errInfo) {
//       console.log("Validate Failed:", errInfo);
//     }
//   };

//   const handleDelete = (key: React.Key) => {
//     const newData = data.filter((item) => item.key !== key);
//     setData(newData);
//   };

//   const columns: ColumnType<Item>[] = [
//     {
//       title: "Staff ID",
//       dataIndex: "staffID",
//       editable: true,
//       sorter: (a: Item, b: Item) => a.staffID.localeCompare(b.staffID),
//     },
//     {
//       title: "Staff Name",
//       dataIndex: "staffName",
//       defaultSortOrder: "descend",
//       editable: true,
//       sorter: (a: Item, b: Item) => a.staffName.length - b.staffName.length,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       editable: true,
//       // sorter: (a: Item, b: Item) => a.email.length - b.email.length,
//     },
//     {
//       title: "Edit",
//       dataIndex: "edit",
//       className: "TextAlign",
//       render: (_: unknown, record: Item) => {
//         const editable = isEditing(record);
//         return editable ? (
//           <span>
//             <Typography.Link
//               onClick={() => save(record.key)}
//               style={{ marginRight: 8 }}
//             >
//               Save
//             </Typography.Link>
//             <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
//               <a>Cancel</a>
//             </Popconfirm>
//           </span>
//         ) : (
//           <Typography.Link
//             disabled={editingKey !== ""}
//             onClick={() => edit(record)}
//           >
//             Edit
//           </Typography.Link>
//         );
//       },
//     },
//     {
//       title: "Delete",
//       dataIndex: "delete",
//       className: "TextAlign",
//       render: (_: unknown, record: Item) =>
//         originData.length >= 1 ? (
//           <Popconfirm
//             title="Sure to delete?"
//             onConfirm={() => handleDelete(record.key)}
//           >
//             <a>Delete</a>
//           </Popconfirm>
//         ) : null,
//     },
//   ];

//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record: Item) => ({
//         record,
//         inputType: col.dataIndex === "staffID" ? "text" : "text",
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record),
//       }),
//     };
//   });
//   mergedColumns;

//   const [searchText, setSearchText] = useState("");

//   const onSearch = (value: string) => {
//     console.log("Search:", value);
//     // Thực hiện logic tìm kiếm ở đây
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       onSearch(searchText);
//     }
//   };

//   return (
//     <>
//       <Styled.ProductAdminArea>
//         <Sidebar />

//         <Styled.AdminPage>
//           <StaffMenu />

//           <Styled.AdPageContent>
//             <Styled.AdPageContent_Head>
//               <Styled.SearchArea>
//                 <Input
//                   className="searchInput"
//                   type="text"
//                   // size="large"
//                   placeholder="Search here..."
//                   value={searchText}
//                   onChange={(e) => setSearchText(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   prefix={<SearchOutlined className="searchIcon" />}
//                 />
//               </Styled.SearchArea>
//               <Styled.AddButton>
//                 <Link to="">
//                   <button>
//                     <PlusCircleOutlined />
//                     Add New Diamond
//                   </button>
//                 </Link>
//               </Styled.AddButton>
//             </Styled.AdPageContent_Head>

//             <Styled.AdminTable>
//               <Form form={form} component={false}>
//                 <Table
//                   components={{
//                     body: {
//                       cell: EditableCell,
//                     },
//                   }}
//                   bordered
//                   dataSource={data}
//                   columns={mergedColumns}
//                   rowClassName="editable-row"
//                   pagination={{
//                     onChange: cancel,
//                     pageSize: 6,
//                   }}
//                 />
//               </Form>
//             </Styled.AdminTable>
//           </Styled.AdPageContent>
//         </Styled.AdminPage>
//       </Styled.ProductAdminArea>
//     </>
//   );
// };

// export default SalesStaff;
