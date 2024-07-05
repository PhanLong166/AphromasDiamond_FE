import * as Styled from "../Jewelry Setting/RingSetting.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  // InboxOutlined,
  SaveOutlined,
  EyeOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import type {
  FormInstance,
  TableColumnsType,
  TableProps,
  UploadProps,
  GetProp,
  UploadFile,
  // GetRef,
  // InputRef,
} from "antd";
import {
  Form,
  Input,
  InputNumber,
  Table,
  Button,
  Select,
  Upload,
  // message,
  Space,
  Popconfirm,
  Popover,
} from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../../components/Admin/ProductMenu/ProductMenu";
import { SortOrder } from "antd/es/table/interface";
import TextArea from "antd/es/input/TextArea";
import {
  ringData,
  RingDataType,
  productData,
  RingMaterialDataType,
  // ringMaterialData,
  materialData,
  MaterialDataType,
  // ProductDataType,
} from "../ProductData"; // Import data here
import { Link } from "react-router-dom";
import ImgCrop from "antd-img-crop";
import { JewelryType_Filter } from "./RingSetting.type";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof RingDataType;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: RingDataType;
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

// MATERIAL TABLE
const calculateJewelrySettingPrice = (
  weight: number,
  pricePerGram: number,
  auxiliaryCost: number,
  productionCost: number
) => {
  return weight * pricePerGram + auxiliaryCost + productionCost;
};

const getMaterialDetails = (
  materialID: string,
  materialData: MaterialDataType[]
) => {
  return materialData.find((material) => material.materialID === materialID);
};

const PriceCalculation = (
  <div>
    (Weight * Price per Gram + Auxiliary Cost + Production Cost)* Charge Rate
  </div>
);

const materialOptions = [
  { value: "M12345121", label: "14K White Gold" },
  { value: "M12345122", label: "14K Yellow Gold" },
  { value: "M12345123", label: "14K Rose Gold" },
  { value: "M12345124", label: "18K White Gold" },
  { value: "M12345125", label: "18K Yellow Gold" },
  { value: "M12345126", label: "18K Rose Gold" },
  { value: "M12345127", label: "Platinum" },
];

const sizeOptions = [
  { value: "SZ01", label: 8 },
  { value: "SZ02", label: 10 },
  { value: "SZ03", label: 12 },
  { value: "SZ04", label: 14 },
  { value: "SZ05", label: 16 },
  { value: "SZ06", label: 18 },
];

const EditableMaterialCell: React.FC<{
  title: React.ReactNode;
  editable: boolean;
  value: any;
  onChange: (value: any) => void;
  options?: { value: string; label: string }[];
}> = ({
  editable,
  value,
  onChange,
}) => {
  return (
    <td>
      {editable ? (
        materialOptions ? (
          <Select value={value} onChange={onChange}>
            {materialOptions.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        ) : (
          <Input value={value} onChange={(e) => onChange(e.target.value)} />
        )
      ) : (
        value
      )}
    </td>
  );
};

const EditableSizeCell: React.FC<{
  title: React.ReactNode;
  editable: boolean;
  value: any;
  onChange: (value: any) => void;
  options?: { value: string; label: number }[];
}> = ({
  editable,
  value,
  onChange,
  options
}) => {
  return (
    <td>
      {editable ? (
        options ? (
          <Select value={value} onChange={onChange}>
            {options.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        ) : (
          <Input value={value} onChange={(e) => onChange(e.target.value)} />
        )
      ) : (
        value
      )}
    </td>
  );
};

const EditableCell_Material: React.FC<{
  title: React.ReactNode;
  editable: boolean;
  value: any;
  onChange: (value: any) => void;
}> = ({
  editable,
  value,
  onChange,
}) => {
  return (
    <td>
      {editable ? (
        <Input value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        value
      )}
    </td>
  );
};



const JewelrySetting = () => {
  const [form] = Form.useForm();
  const [data] = useState<RingDataType[]>(ringData);
  // const [currency, setCurrency] = useState<"VND" | "USD">("USD");
  const [isAdding, setIsAdding] = useState(false);

  //  Change Currency
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // const handleCurrencyChange = (value: "VND" | "USD") => {
  //   setCurrency(value);
  // };

  // const convertPrice = (
  //   price: number,
  //   exchangeRate: number,
  //   currency: "VND" | "USD"
  // ) => {
  //   if (currency === "VND") {
  //     return price * exchangeRate;
  //   }
  //   return price;
  // };

  // const sellingPrice = (price: number, markupPercentage: number) => {
  //   return price * (1 + markupPercentage / 100);
  // };

  const columns: TableColumnsType<RingDataType> = [
    {
      title: "Jewelry Setting ID",
      dataIndex: "jewelrySettingID",
      sorter: (a: RingDataType, b: RingDataType) =>
        a.jewelrySettingID.localeCompare(b.jewelrySettingID),
    },
    {
      title: "Image",
      key: "jewelrySettingImg",
      className: "TextAlign",
      render: (_: unknown, record: RingDataType) => (
        <img
          src={record.jewelrySettingImg}
          alt={record.jewelrySettingName}
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      title: "Jewelry Setting Name",
      dataIndex: "jewelrySettingName",
      sorter: (a: RingDataType, b: RingDataType) =>
        a.jewelrySettingName.length - b.jewelrySettingName.length,
    },
    // {
    //   title: `Cost Price (${currency})`,
    //   key: "price",
    //   sorter: (a: RingDataType, b: RingDataType) =>
    //     convertPrice(a.price, a.exchangeRate, currency) -
    //     convertPrice(b.price, b.exchangeRate, currency),
    //   render: (_: unknown, record: RingDataType) => {
    //     const convertedPrice = convertPrice(
    //       record.price,
    //       record.exchangeRate,
    //       currency
    //     );
    //     return `${convertedPrice.toFixed(2)} ${currency}`;
    //   },
    // },
    // {
    //   title: `Selling Price (${currency})`,
    //   key: "sellingPrice",
    //   render: (_: unknown, record: RingDataType) => {
    //     const convertedPrice = convertPrice(
    //       record.price,
    //       record.exchangeRate,
    //       currency
    //     );
    //     const price = sellingPrice(convertedPrice, record.markupPercentage);
    //     return `${price.toFixed(2)} ${currency}`;
    //   },
    // },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      defaultSortOrder: "ascend" as SortOrder,
      filters: JewelryType_Filter,
      onFilter: (value: boolean | React.Key, record: RingDataType) =>
        record.type.indexOf(value as string) === 0,
    },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: (_, { jewelrySettingID }) => (
        <Space size="middle">
          <Link
            to={`/admin/product/jewelry-setting/detail/${jewelrySettingID}`}
          >
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  const [searchText, setSearchText] = useState("");

  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  const handleAddNew = () => {
    setIsAdding(true);
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  const onChangeTable: TableProps<RingDataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  // UPLOAD IMAGES
  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);

  const onChangeImg: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  // MATERIAL TABLE
  const [dataMaterial, setDataMaterial] = useState<RingMaterialDataType[]>([]);

  const handleFieldChange = (fieldName: keyof RingMaterialDataType, value: any, key: any) => {
    const newData = dataMaterial.map((item) =>
      item.key === key ? { ...item, [fieldName]: value } : item
    );
    setDataMaterial(newData);
  };

  // const handleSave = (row: RingMaterialDataType) => {
  //   const newData = dataMaterial.map((item) =>
  //     row.key === item.key ? { ...item, ...row } : item
  //   );
  //   setDataMaterial(newData);
  // };

  const handleDelete = (key: React.Key) => {
    const newData = dataMaterial.filter((item) => item.key !== key);
    setDataMaterial(newData);
  };

  const handleAdd = () => {
    const newKey = dataMaterial.length > 0 ? String(Number(dataMaterial[dataMaterial.length - 1].key) + 1) : "1";
    const newData: RingMaterialDataType = {
      key: newKey,
      jewelrySettingID: "",
      jewelrySettingVariantID: "",
      materialID: "",
      sizeID: "",
      amount: 0,
      price: 0,
    };
    setDataMaterial([...dataMaterial, newData]);
  };

  const columnsMaterial = [
    {
      title: "Material Name",
      dataIndex: "materialID",
      editable: true,
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableMaterialCell
          title="Material Name"
          editable={true}
          value={record.materialID}
          onChange={(value) => handleFieldChange("materialID", value, record.key)}
          options={materialOptions}
        />
      ),
    },
    {
      title: "Size Value",
      dataIndex: "sizeID",
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableSizeCell
          title="Size Value"
          editable={true}
          value={record.sizeID}
          onChange={(value) => handleFieldChange("sizeID", value, record.key)}
          options={sizeOptions}
        />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableCell_Material
          title="Amount"
          editable={true}
          value={record.amount}
          onChange={(value) => handleFieldChange("amount", value, record.key)}
        />
      ),
    },
    {
      title: (
        <>
          Jewelry Setting Price
          <Popover
            content={PriceCalculation}
            title="Price Calculation"
            trigger="click"
          >
            <InfoCircleOutlined style={{ marginLeft: 8, fontSize: "12px" }} />
          </Popover>
        </>
      ),
      dataIndex: "price",
      render: (_: unknown, record: RingMaterialDataType) => {
        const materialDetail = getMaterialDetails(
          record.materialID,
          materialData
        );
        if (materialDetail) {
          const pricePerGram = materialDetail.sellingPrice;
          const jewelrySettingPrice = calculateJewelrySettingPrice(
            record.amount,
            pricePerGram,
            0,
            0
          );
          return jewelrySettingPrice;
        }
        return 0;
      },
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_: unknown, record: RingMaterialDataType) =>
        dataMaterial.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        ) : null,
    },
  ];



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
                  <Styled.AdPageContent_HeadLeft>
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

                    {/* <Select
                      defaultValue="USD"
                      style={{ width: 120, height: "45px" }}
                      onChange={handleCurrencyChange}
                      options={[
                        { value: "USD", label: "USD" },
                        { value: "VND", label: "VND" },
                      ]}
                    /> */}
                  </Styled.AdPageContent_HeadLeft>

                  <Styled.AddButton>
                    <button onClick={handleAddNew}>
                      <PlusCircleOutlined />
                      Add New Ring Setting
                    </button>
                  </Styled.AddButton>
                </>
              )) || (
                <>
                  <Styled.AddContent_Title>
                    <p>Add Ring Setting</p>
                  </Styled.AddContent_Title>
                </>
              )}
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {isAdding ? (
                <>
                  <Form layout="vertical" className="AdPageContent_Content">
                    <Styled.FormItem>
                      <Form.Item
                        label="Jewelry Name"
                        name="Jewelry Name"
                      >
                        <Select
                          className="formItem"
                          placeholder="Select Jewelry"
                          onChange={handleChange}
                          options={productData.map((product) => ({
                            value: product.jewelryID,
                            label: product.jewelryName,
                          }))}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    {/* <Styled.FormItem>
                      <Form.Item label="Diamond Shape">
                        <Select
                          //   defaultValue="Select Shape"
                          className="formItem"
                          placeholder="Select Shape"
                          onChange={handleChange}
                          options={[
                            { value: "Round", label: "Round" },
                            { value: "Princess", label: "Princess" },
                            { value: "Cushion", label: "Cushion" },
                            { value: "Oval", label: "Oval" },
                            { value: "Emerald", label: "Emerald" },
                            { value: "Pear", label: "Pear" },
                            { value: "Asscher", label: "Asscher" },
                            { value: "Heart", label: "Heart" },
                            { value: "Radiant", label: "Radiant" },
                            { value: "Marquise", label: "Marquise" },
                          ]}
                        />
                      </Form.Item>
                    </Styled.FormItem> */}
                    <Styled.FormItem>
                      <Form.Item
                        label="Jewelry Setting ID"
                        name="Jewelry Setting ID"
                        rules={[{ required: true }]}
                      >
                        <Input className="formItem" placeholder="D1234" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Jewelry Setting Name"
                        name="Jewelry Setting Name"
                        rules={[{ required: true }]}
                      >
                        <Input className="formItem" placeholder="Filled" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="Jewelry Setting Type">
                        <Select
                          // value="Ring"
                          className="formItem"
                          placeholder="Select Type"
                          onChange={handleChange}
                          options={[
                            { value: "Ring", label: "Ring" },
                            { value: "Necklace", label: "Necklace" },
                            { value: "Earring", label: "Earring" },
                            { value: "Bracelet", label: "Bracelet" },
                            { value: "Anklet", label: "Anklet" },
                            { value: "Bangle", label: "Bangle" },
                            { value: "Choker", label: "Choker" },
                            { value: "Pendant", label: "Pendant" },
                          ]}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Weight (gram)"
                        name="Weight"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="150" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Auxiliary Cost"
                        name="Auxiliary Cost"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="150" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Charge Rate (%)"
                        name="Charge Rate"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="150" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Product Cost"
                        name="Product Cost"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="5000000" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormDescript>
                      <Form.Item
                        label="Description"
                        name="Description"
                        rules={[{ required: true }]}
                      >
                        <TextArea
                          placeholder="Description"
                          allowClear
                          onChange={onChange}
                        />
                      </Form.Item>
                    </Styled.FormDescript>
                    <Styled.UploadFile>
                      <Form.Item label="Upload Images">
                        <ImgCrop rotationSlider>
                          <Upload
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChangeImg}
                            onPreview={onPreview}
                          >
                            {fileList.length < 5 && "+ Upload"}
                          </Upload>
                        </ImgCrop>
                      </Form.Item>
                    </Styled.UploadFile>
                    <Styled.MaterialTable>
                      <Button
                        onClick={handleAdd}
                        type="primary"
                        style={{ marginBottom: 16 }}
                      >
                        Add a row
                      </Button>
                      <Table
                        dataSource={dataMaterial}
                        columns={columnsMaterial}
                        rowClassName={() => "editable-row"}
                        bordered
                        pagination={false}
                      />
                    </Styled.MaterialTable>
                  </Form>
                  <Styled.ActionBtn>
                    <SubmitButton form={form}>
                      <SaveOutlined />
                      Save
                    </SubmitButton>
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
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{ pageSize: 6 }} // Add pagination here
                    onChange={onChangeTable}
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

export default JewelrySetting;
