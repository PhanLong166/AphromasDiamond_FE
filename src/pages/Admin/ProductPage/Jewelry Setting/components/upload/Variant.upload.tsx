import { useEffect, useState } from "react";
import { Button, Input, Popconfirm, Popover, Select, Table, TableColumnsType } from "antd";
import { useAppDispatch } from "@/hooks";
import { uploadSliceSetting } from "../slice";
import { showAllMaterial } from "@/services/materialAPI";
import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";
import * as Styled from "../../RingSetting.styled";

const PriceCalculation = (
    <div>
        (Weight * Price per Gram + Auxiliary Cost + Production Cost)* Charge Rate
    </div>
);

const VariantUpload = () => {
    const [materials, setMaterials] = useState<any[]>([]);
    const dispatch = useAppDispatch();
    const [dataMaterial, setDataMaterial] = useState<any[]>([]); //RingMaterialDataType

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseMaterials = await showAllMaterial();
                const { data: materialsData } = responseMaterials.data;

                const formattedMaterials = materialsData.map((material: any) => ({
                    materialID: material.MaterialJewelryID,
                    materialName: material.Name,
                    sellPrice: material.SellPrice,
                }));

                setMaterials(formattedMaterials);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleVariantChange = (value: number) => {
        dispatch(uploadSliceSetting.actions.setJewelrySettingVariantID(value));
    };

    // ADD MATERIAL TABLE
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
                const newVariantID = dataMaterial.length > 0
                ? Number(dataMaterial[dataMaterial.length - 1].jewelrySettingVariantID) + 1
                : 1;
        const newData: any = {
            key: newKey,
            jewelrySettingID: "",
            jewelrySettingVariantID: newVariantID,
            materialID: "",
            weight: 0,
            sizeID: "",
            amount: 0,
            price: 0,
        };
        setDataMaterial([...dataMaterial, newData]);
        handleVariantChange(newVariantID);
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

    const handleMaterialChange = (value: number, key: React.Key) => {
        const newData = [...dataMaterial];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, { ...item, materialID: value });
            setDataMaterial(newData);
        }
    };

    const columnsMaterial: TableColumnsType<any> = [
        {
            title: "Material",
            dataIndex: "materialID",
            key: "materialID",
            // editable: true,
            render: (_: any, record) => (
                <Select
                    placeholder="Select Material"
                    value={record.materialID}
                    // onChange={(value) => setSelectedMaterial(value)}
                    onChange={(value) => handleMaterialChange(value, record.key)}
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
        // <Form.Item
        //     label="Diamond"
        //     name="DiamondID"
        //     rules={[{ required: true }]}
        // >
        //     <Select
        //         placeholder="Select Diamond"
        //         options={diamonds.map(c => ({ label: c.Name, value: c.DiamondID }))}
        //         onChange={handleVariantChange}
        //     />
        // </Form.Item>

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
    );
};

export default VariantUpload;
