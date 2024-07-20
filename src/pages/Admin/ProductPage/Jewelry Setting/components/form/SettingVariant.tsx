import React, { useState } from "react";
import { Table, Button, Popconfirm, Select, Input } from "antd";
import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import Popover from "antd/lib/popover";

const PriceCalculation = (
  <div>
    (Weight * Price per Gram + Auxiliary Cost + Production Cost)* Charge Rate
  </div>
);

interface MaterialTableProps {
  materials: any[];
  sizes: any[];
}

const MaterialTable: React.FC<MaterialTableProps> = ({ materials, sizes }) => {
  const [dataMaterial, setDataMaterial] = useState<any[]>([]); //RingMaterialDataType
  const [setSelectedMaterial] = useState<any>();
  const [setSelectedSize] = useState<any>();

  const handleFieldChange = (fieldName: keyof any, value: any, id: any) => {
    const newData = [...dataMaterial];
    const index = newData.findIndex((item) => id === item.key);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item, [fieldName]: value });
      setDataMaterial(newData);
    }
  };

  const handleDelete = (id: React.Key) => {
    const newData = dataMaterial.filter((item) => item.id !== id);
    setDataMaterial(newData);
  };

  const handleAdd = () => {
    const newKey =
      dataMaterial.length > 0
        ? String(Number(dataMaterial[dataMaterial.length - 1].key) + 1)
        : "1";
    const newData: any = {
      key: newKey,
      jewelrySettingID: "",
      jewelrySettingVariantID: "",
      materialID: "",
      weight: 0,
      sizeID: "",
      amount: 0,
      price: 0,
    };
    setDataMaterial([...dataMaterial, newData]);
  };

  const EditableCell_Material: React.FC<{
    title: React.ReactNode;
    editable: boolean;
    value: any;
    onChange: (value: any) => void;
  }> = ({ editable, value, onChange }) => {
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

  const columnsMaterial: TableColumnsType<any> = [
    {
      title: "Material",
      dataIndex: "materialID",
      key: "materialID",
      render: () => (
        <Select
          placeholder="Select Material"
          onChange={(value) => setSelectedMaterial(value)}
        >
          {materials.map((material: any) => (
            <Select.Option key={material.materialID} value={material.materialID}>
              {material.materialName}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Size Value",
      dataIndex: "sizeID",
      render: () => (
        <Select
          placeholder="Select Size"
          onChange={(value) => setSelectedSize(value)}
        >
          {sizes.map((size: any) => (
            <Select.Option key={size.sizeID} value={size.sizeID}>
              {size.sizeValue}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (_, record) => (
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
      render: (_, record) => (
        <EditableCell_Material
          title="Price"
          editable={true}
          value={record.price}
          onChange={(value) => handleFieldChange("amount", value, record.key)}
        />
      ),
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_, record) =>
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
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button>
      <Table
        dataSource={dataMaterial}
        columns={columnsMaterial}
        rowClassName={() => "editable-row"}
        bordered
        pagination={false}
      />
    </>
  );
};

export default MaterialTable;
