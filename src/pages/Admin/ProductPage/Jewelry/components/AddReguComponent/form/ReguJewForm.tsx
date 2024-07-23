// import { FieldType } from "@/components/AuthForm/AuthForm.fields";
// import { Form, FormInstance } from "antd";
// import * as Styled from "../../Diamond.styled";

// type DiamondFormProps = {
//     fields: FieldType[];
//     form: FormInstance<any>;
// }

// const DiamondForm = ({
//     fields,
//     form
// }: DiamondFormProps) => (
//     <Form
//         form={form}
//         layout="vertical"
//         className="AdPageContent_Content"
//     >
//         {fields.map((field) => (
//             <Styled.FormItem key={field.key}>
//                 <Form.Item
//                     label={field.label}
//                     name={field.name}
//                     rules={field.rules}
//                     validateFirst
//                 >
//                     {field.children}
//                 </Form.Item>
//             </Styled.FormItem>
//         ))}
//     </Form>
// )

// export default DiamondForm;



import { Brand_Option } from "../../../Jewelry.type";
import { showAllCollection } from "@/services/collectionAPI";
import { showAllDiscount } from "@/services/discountAPI";
import { useEffect, useState } from "react";
import { showAllSetting } from "@/services/jewelrySettingAPI";
import { Button, Form, Input, Select } from "antd";

const { TextArea } = Input;

const AddProductForm = () => {
    const [collections, setCollections] = useState<any[]>([]);
    const [discounts, setDiscounts] = useState<any[]>([]);
    const [form] = Form.useForm();
    const [settings, setSettings] = useState<any[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseCollections = await showAllCollection();
                const responseDiscounts = await showAllDiscount();
                const responseSettings = await showAllSetting();

                const { data: collectionsData } = responseCollections.data;
                const { data: discountsData } = responseDiscounts.data;
                const { data: settingsData } = responseSettings.data;

                setCollections(collectionsData);
                setDiscounts(discountsData);
                setSettings(settingsData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Form form={form}>
            <Form.Item
                label="Product Name"
                name="Name"
                rules={[
                    { required: true, message: "Product Name is required." },
                    { pattern: /^[a-zA-Z0-9\s()-.]*$/, message: "Only alphabet, numbers, (), - and . are allowed." },
                    { max: 300, message: "Product Name must be at most 300 characters long." },
                    { whitespace: true, message: "Not only has whitespace." },
                ]}
            >
                <Input placeholder="Fill Name" />
            </Form.Item>
            <Form.Item
                label="Brand"
                name="Brand"
                rules={[{ required: true }]}
            >
                <Select placeholder="Select Brand" options={Brand_Option} />
            </Form.Item>
            <Form.Item
                label="Collection"
                name="Collection"
                rules={[{ required: true }]}
            >
                <Select placeholder="Select Collection" options={collections.map(c => ({ label: c.Name, value: c.ID }))} />
            </Form.Item>
            <Form.Item
                label="Discount"
                name="Discount"
                rules={[{ required: true }]}
            >
                <Select placeholder="Select Discount" options={discounts.map(d => ({ label: d.Name, value: d.ID }))} />
            </Form.Item>
            <Form.Item
                label="Description"
                name="Inscription"
                rules={[
                    { required: true, message: "Description is required." },
                    { pattern: /^[a-zA-Z0-9\s()-.]*$/, message: "Only alphabet, numbers, (), - and . are allowed." },
                    { whitespace: true, message: "Not only has whitespace." },
                ]}
            >
                <TextArea placeholder="Inscription" allowClear />
            </Form.Item>
            <Form.Item
                label="Jewelry Setting"
                name="JewelrySetting"
                rules={[{ required: true }]}
            >
                <Select placeholder="Select Jewelry Setting" options={settings.map(c => ({ label: c.Name, value: c.JewelrySettingID }))} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Add Product</Button>
            </Form.Item>
        </Form>
    );
};

export default AddProductForm;