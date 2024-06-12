// import * as Styled from "./RingSetting.styled";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
// // import type { TableColumnsType, TableProps } from "antd";
// import {
//   Select,
//   Form,
//   Input,
//   InputNumber,
//   Popconfirm,
//   Table,
//   Typography,
// } from "antd";
// import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
// import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";

// interface Item {
//   key: React.Key;
//   ringSettingID: string;
//   ringSettingImg: string;
//   ringSettingName: string;
//   price: number;
//   type: string;
//   width: number;
//   material: string;
// }

// const originData: Item[] = [
//   {
//     key: "1",
//     ringSettingID: "12345121",
//     ringSettingImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
//     price: 4.08,
//     type: "Ring",
//     width: 2.8,
//     material: "14K White Gold",
//   },
//   {
//     key: "2",
//     ringSettingID: "12345122",
//     ringSettingImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
//     price: 5.08,
//     type: "Ring",
//     width: 2.8,
//     material: "14K White Gold",
//   },
//   {
//     key: "3",
//     ringSettingID: "12345123",
//     ringSettingImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
//     price: 7.08,
//     type: "Ring",
//     width: 2.8,
//     material: "14K White Gold",
//   },
//   {
//     key: "4",
//     ringSettingID: "12345124",
//     ringSettingImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
//     price: 6.08,
//     type: "Ring",
//     width: 2.8,
//     material: "14K White Gold",
//   },
//   {
//     key: "5",
//     ringSettingID: "12345125",
//     ringSettingImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
//     price: 3.08,
//     type: "Ring",
//     width: 2.8,
//     material: "14K White Gold",
//   },
//   {
//     key: "6",
//     ringSettingID: "12345126",
//     ringSettingImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
//     price: 9.08,
//     type: "Ring",
//     width: 2.8,
//     material: "14K White Gold",
//   },
//   {
//     key: "7",
//     ringSettingID: "12345127",
//     ringSettingImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
//     price: 2.04,
//     type: "Ring",
//     width: 2.8,
//     material: "14K White Gold",
//   },
//   {
//     key: "8",
//     ringSettingID: "12345128",
//     ringSettingImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
//     price: 7.03,
//     type: "Ring",
//     width: 2.8,
//     material: "14K White Gold",
//   },
//   {
//     key: "9",
//     ringSettingID: "12345129",
//     ringSettingImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
//     price: 5.07,
//     type: "Ring",
//     width: 2.8,
//     material: "14K White Gold",
//   },
//   {
//     key: "10",
//     ringSettingID: "12345130",
//     ringSettingImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
//     price: 4.2,
//     type: "Ring",
//     width: 2.8,
//     material: "14K White Gold",
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
//   let inputNode;
//   if (dataIndex === "type") {
//     inputNode = (
//       <Select
//         defaultValue="record.type"
//         className="custom-select"
//         style={{ width: 120, background: "#FFF7E8", color: "#102C57" }}
//         options={[
//           { value: "Ring", label: "Ring" },
//           { value: "Necklace", label: "Necklace" },
//           { value: "Earring", label: "Earring" },
//           { value: "Bracelet", label: "Bracelet" },
//           { value: "Anklet", label: "Anklet" },
//           { value: "Bangle", label: "Bangle" },
//           { value: "Choker", label: "Choker" },
//           { value: "Pendant", label: "Pendant" },
//         ]}
//       />
//     );
//   } else if (dataIndex === "material") {
//     inputNode = (
//       <Select
//         defaultValue="14K White Gold"
//         className="custom-select"
//         style={{ width: 120, background: "#FFF7E8", color: "#102C57" }}
//         options={[
//           { value: "14K White Gold", label: "14K White Gold" },
//           { value: "14K Yellow Gold", label: "14K Yellow Gold" },
//           { value: "14K Rose Gold", label: "14K Rose Gold" },
//           { value: "18K White Gold", label: "18K White Gold" },
//           { value: "18K Yellow Gold", label: "18K Yellow Gold" },
//           { value: "18K Rose Gold", label: "18K Rose Gold" },
//           { value: "Platinum", label: "Platinum" },
//         ]}
//       />
//     );
//   } else {
//     inputNode = inputType === "number" ? <InputNumber /> : <Input />;
//   }

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

// const RingSetting = () => {
//   const [form] = Form.useForm();
//   const [data, setData] = useState<Item[]>(originData);
//   const [editingKey, setEditingKey] = useState<React.Key>("");
//   const isEditing = (record: Item) => record.key === editingKey;
//   const edit = (record: Partial<Item> & { key: React.Key }) => {
//     form.setFieldsValue({
//       ringSettingID: "",
//       ringSettingImg: "",
//       ringSettingName: "",
//       price: "",
//       type: "",
//       width: "",
//       material: "",
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

//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "ringSettingID",
//       editable: true,
//       sorter: (a: Item, b: Item) =>
//         a.ringSettingID.localeCompare(b.ringSettingID),
//     },
//     {
//       title: "Image",
//       key: "ringSettingImg",
//       className: "TextAlign",
//       render: (_: unknown, record: Item) => (
//         <img
//           src={record.ringSettingImg}
//           alt={record.ringSettingName}
//           style={{ width: "50px", height: "50px" }}
//         />
//       ),
//     },
//     {
//       title: "Name",
//       dataIndex: "ringSettingName",
//       editable: true,
//       sorter: (a: Item, b: Item) =>
//         a.ringSettingName.length - b.ringSettingName.length,
//     },
//     {
//       title: "Price",
//       dataIndex: "price",
//       editable: true,
//       sorter: (a: Item, b: Item) => a.price - b.price,
//     },
//     {
//       title: "Type",
//       dataIndex: "type",
//       key: "type",
//       editable: true,
//       filters: [
//         { text: "Ring", value: "Ring" },
//         { text: "Necklace", value: "Necklace" },
//         { text: "Earring", value: "Earring" },
//         { text: "Bracelet", value: "Bracelet" },
//         { text: "Anklet", value: "Anklet" },
//         { text: "Bangle", value: "Bangle" },
//         { text: "Choker", value: "Choker" },
//         { text: "Pendant", value: "Pendant" },
//       ],
//       onFilter: (value: string, record: Item) =>
//         record.type.indexOf(value as string) === 0,
//     },
//     {
//       title: "Width",
//       dataIndex: "width",
//       editable: true,
//       sorter: (a: Item, b: Item) => a.width - b.width,
//     },
//     {
//       title: "Material",
//       dataIndex: "material",
//       key: "material",
//       editable: true,
//       filters: [
//         { text: "14K White Gold", value: "14KWhiteGold" },
//         { text: "14K Yellow Gold", value: "14KYellowGold" },
//         { text: "14K Rose Gold", value: "14KRoseGold" },
//         { text: "18K White Gold", value: "18KWhiteGold" },
//         { text: "18K Yellow Gold", value: "18KYellowGold" },
//         { text: "18K Rose Gold", value: "18KRoseGold" },
//         { text: "Platinum", value: "Platinum" },
//       ],
//       onFilter: (value: string, record: Item) =>
//         record.material.indexOf(value as string) === 0,
//     },
//     {
//       title: "Edit",
//       dataIndex: "edit",
//       className: "TextAlign SmallSize",
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

//   const mergedColumns /*: TableProps['columns'] */ = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record: Item) => ({
//         record,
//         inputType:
//           col.dataIndex === "price" || col.dataIndex === "width"
//             ? "number"
//             : "text",
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
//           <ProductMenu />

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

// export default RingSetting;

// import * as Styled from "./Marketing.styled";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   SearchOutlined,
//   PlusCircleOutlined,
// } from "@ant-design/icons";
// import type { ColumnType, TableProps } from "antd";
// // import type { ColumnsType, ColumnType } from "antd/es/table";

// import {
//   Form,
//   Input,
//   InputNumber,
//   Popconfirm,
//   Table,
//   Typography,
// } from "antd";
// import Sidebar from "../../../components/Admin/Sidebar/Sidebar";

// interface Item {
//   key: React.Key;
//   promotionID: string;
//   discountPercent: number;
//   startDate: string;
//   endDate: string;
// }

// const originData: Item[] = [
//   {
//     key: "1",
//     promotionID: "12345121",
//     discountPercent: 10,
//     startDate: "2 Jan 2023",
//     endDate: "2 Jan 2024",
//   },
//   {
//     key: "2",
//     promotionID: "12345122",
//     discountPercent: 10,
//     startDate: "2 Jan 2023",
//     endDate: "2 Jan 2024",
//   },
//   {
//     key: "3",
//     promotionID: "12345123",
//     discountPercent: 10,
//     startDate: "2 Jan 2023",
//     endDate: "2 Jan 2024",
//   },
//   {
//     key: "4",
//     promotionID: "12345124",
//     discountPercent: 10,
//     startDate: "2 Jan 2023",
//     endDate: "2 Jan 2024",
//   },
//   {
//     key: "5",
//     promotionID: "12345125",
//     discountPercent: 10,
//     startDate: "2 Jan 2023",
//     endDate: "2 Jan 2024",
//   },
//   {
//     key: "6",
//     promotionID: "12345126",
//     discountPercent: 10,
//     startDate: "2 Jan 2023",
//     endDate: "2 Jan 2024",
//   },
//   {
//     key: "7",
//     promotionID: "12345127",
//     discountPercent: 10,
//     startDate: "2 Jan 2023",
//     endDate: "2 Jan 2024",
//   },
//   {
//     key: "8",
//     promotionID: "12345128",
//     discountPercent: 10,
//     startDate: "2 Jan 2023",
//     endDate: "2 Jan 2024",
//   },
//   {
//     key: "9",
//     promotionID: "12345129",
//     discountPercent: 10,
//     startDate: "2 Jan 2023",
//     endDate: "2 Jan 2024",
//   },
//   {
//     key: "10",
//     promotionID: "12345130",
//     discountPercent: 10,
//     startDate: "2 Jan 2023",
//     endDate: "2 Jan 2024",
//   },
// ];

// interface EditableCellProps {
//   editing: boolean;
//   dataIndex: keyof Item;
//   title: React.ReactNode;
//   inputType: "number" | "text";
//   record: Item;
//   index: number;
//   children: React.ReactNode;
// }

// const EditableCell: React.FC<EditableCellProps> = ({
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

// const Marketing = () => {
//   const [form] = Form.useForm();
//   const [data, setData] = useState<Item[]>(originData);
//   const [editingKey, setEditingKey] = useState<React.Key>("");
//   const isEditing = (record: Item) => record.key === editingKey;
//   const edit = (record: Partial<Item> & { key: React.Key }) => {
//     form.setFieldsValue({
//       promotionID: "",
//       discountPercent: "",
//       startDate: "",
//       endDate: "",
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

//   const columns/*: ColumnType<Item> */ = [
//     {
//       title: "ID",
//       dataIndex: "promotionID",
//       editable: true,
//       sorter: (a: Item, b: Item) => a.promotionID.localeCompare(b.promotionID),
//     },
//     {
//       title: "% discount",
//       dataIndex: "discountPercent",
//       defaultSortOrder: "descend",
//       editable: true,
//       sorter: (a: Item, b: Item) => a.discountPercent - b.discountPercent,
//     },
//     {
//       title: "Start Date",
//       dataIndex: "startDate",
//       editable: true,
//       sorter: (a: Item, b: Item) => a.startDate.length - b.startDate.length,
//     },
//     {
//       title: "End Date",
//       dataIndex: "endDate",
//       editable: true,
//       sorter: (a: Item, b: Item) => a.endDate.length - b.endDate.length,
//     },
//     {
//       title: "Edit",
//       dataIndex: "edit",
//       className: "TextAlign SmallSize",
//       render: (_: unknown, record: Item) => {
//         const editable = isEditing(record);
//         return editable ? (
//           <span>
//             <Typography.Link
//               onClick={() => save(record.key)}
//               style={{ marginRight: 8, fontSize: "16px" }}
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

//   const mergedColumns: TableProps['columns'] = columns.map((col: ColumnType<Item>) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record: Item) => ({
//         record,
//         inputType: col.dataIndex === "discountPercent" ? "number" : "text",
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record),
//       }),
//     };
//   });

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
//           <Styled.ContentPage>
//             <Styled.TitlePage>
//               <h1>Marketing Management</h1>
//               <p>View and manage Promotion</p>
//             </Styled.TitlePage>

//             <Styled.AdPageContent>
//               <Styled.AdPageContent_Head>
//                 <Styled.SearchArea>
//                   <SearchOutlined className="searchIcon" />
//                   <input
//                     className="searchInput"
//                     type="text"
//                     // size="large"
//                     placeholder="Search here..."
//                     value={searchText}
//                     onChange={(e) => setSearchText(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                   />
//                 </Styled.SearchArea>
//                 <Link to="">
//                   <button>
//                     <PlusCircleOutlined />
//                     Add New Diamond
//                   </button>
//                 </Link>
//               </Styled.AdPageContent_Head>

//               <Styled.AdminTable>
//                 <Form form={form} component={false}>
//                   <Table
//                     components={{
//                       body: {
//                         cell: EditableCell,
//                       },
//                     }}
//                     bordered
//                     dataSource={data}
//                     columns={mergedColumns}
//                     rowClassName="editable-row"
//                     pagination={{
//                       onChange: cancel,
//                       pageSize: 6,
//                     }}
//                   />
//                 </Form>
//               </Styled.AdminTable>
//             </Styled.AdPageContent>
//           </Styled.ContentPage>
//           <Styled.EndPage></Styled.EndPage>
//         </Styled.AdminPage>
//       </Styled.ProductAdminArea>
//     </>
//   );
// };

// export default Marketing;

import * as Styled from "../ProductPage/RingSetting.styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";
import { SortOrder } from "antd/es/table/interface";

interface Item {
  key: React.Key;
  ringSettingID: string;
  ringSettingImg: string;
  ringSettingName: string;
  price: number;
  type: string;
  width: number;
  material: string;
}
const originData = (): Item[] => {
  const data: Item[] = [
    {
      key: "1",
      ringSettingID: "12345121",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 4.08,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "2",
      ringSettingID: "12345122",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 5.08,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "3",
      ringSettingID: "12345123",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 7.08,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "4",
      ringSettingID: "12345124",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 6.08,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "5",
      ringSettingID: "12345125",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 3.08,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "6",
      ringSettingID: "12345126",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 9.08,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "7",
      ringSettingID: "12345127",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 2.04,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "8",
      ringSettingID: "12345128",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 7.03,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "9",
      ringSettingID: "12345129",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 5.07,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "10",
      ringSettingID: "12345130",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 4.2,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
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

const RingSetting = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [editingKey, setEditingKey] = useState<React.Key>("");
  const isEditing = (record: Item) => record.key === editingKey;
  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      ringSettingID: "",
      ringSettingImg: "",
      ringSettingName: "",
      price: "",
      type: "",
      width: "",
      material: "",
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
      dataIndex: "ringSettingID",
      editable: true,
      sorter: (a: Item, b: Item) =>
        a.ringSettingID.localeCompare(b.ringSettingID),
    },
    {
      title: "Image",
      key: "ringSettingImg",
      className: "TextAlign",
      render: (_: unknown, record: Item) => (
        <img
          src={record.ringSettingImg}
          alt={record.ringSettingName}
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "ringSettingName",
      editable: true,
      sorter: (a: Item, b: Item) =>
        a.ringSettingName.length - b.ringSettingName.length,
    },
    {
      title: "Price",
      dataIndex: "price",
      editable: true,
      sorter: (a: Item, b: Item) => a.price - b.price,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      editable: true,
      defaultSortOrder: "ascend" as SortOrder,
      filters: [
        { text: "Ring", value: "Ring" },
        { text: "Necklace", value: "Necklace" },
        { text: "Earring", value: "Earring" },
        { text: "Bracelet", value: "Bracelet" },
        { text: "Anklet", value: "Anklet" },
        { text: "Bangle", value: "Bangle" },
        { text: "Choker", value: "Choker" },
        { text: "Pendant", value: "Pendant" },
      ],
      onFilter: (value: boolean | React.Key, record: Item) =>
        record.type.indexOf(value as string) === 0,
    },
    {
      title: "Width",
      dataIndex: "width",
      editable: true,
      sorter: (a: Item, b: Item) => a.width - b.width,
    },
    {
      title: "Material",
      dataIndex: "material",
      key: "material",
      editable: true,
      defaultSortOrder: "ascend" as SortOrder,
      filters: [
        { text: "14K White Gold", value: "14KWhiteGold" },
        { text: "14K Yellow Gold", value: "14KYellowGold" },
        { text: "14K Rose Gold", value: "14KRoseGold" },
        { text: "18K White Gold", value: "18KWhiteGold" },
        { text: "18K Yellow Gold", value: "18KYellowGold" },
        { text: "18K Rose Gold", value: "18KRoseGold" },
        { text: "Platinum", value: "Platinum" },
      ],
      onFilter: (value: boolean | React.Key, record: Item) =>
        record.material.indexOf(value as string) === 0,
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
        inputType: col.dataIndex === "price" ? "number" : "text",
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

  return (
    <>
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

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
                    Add New Diamond
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
                    onChange: cancel,
                    pageSize: 6,
                  }}
                />
              </Form>
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default RingSetting;
