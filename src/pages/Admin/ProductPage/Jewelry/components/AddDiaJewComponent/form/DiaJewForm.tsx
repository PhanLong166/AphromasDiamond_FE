// import { FieldType } from "@/components/AuthForm/AuthForm.fields";
// import * as Styled from "../../../Jewelry.styled";
// import { useEffect, useState } from "react";

// type ProductFormProps = {
//     fields: FieldType[];
//     form: FormInstance<any>;
// }

// const ProductForm = ({
//     fields,
//     form
// }: ProductFormProps) => (
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

// export default ProductForm;

import { Brand_Option } from "../../../Jewelry.type";
import { showAllCollection } from "@/services/collectionAPI";
import { showAllDiscount } from "@/services/discountAPI";
import { useEffect, useState } from "react";
import { showAllDiamond } from "@/services/diamondAPI";
import { showAllSetting } from "@/services/jewelrySettingAPI";
import { Form, Input, Select } from "antd";

const { TextArea } = Input;

const AddProductForm = () => {
    const [collections, setCollections] = useState<any[]>([]);
    const [discounts, setDiscounts] = useState<any[]>([]);
    const [form] = Form.useForm();
    const [diamonds, setDiamonds] = useState<any[]>([]);
    const [settings, setSettings] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseCollections = await showAllCollection();
                const responseDiscounts = await showAllDiscount();
                const responseDiamonds = await showAllDiamond();
                const responseSettings = await showAllSetting();

                const { data: collectionsData } = responseCollections.data;
                const { data: discountsData } = responseDiscounts.data;
                const { data: diamondsData } = responseDiamonds.data;
                const { data: settingsData } = responseSettings.data;

                setCollections(collectionsData);
                setDiscounts(discountsData);
                setDiamonds(diamondsData);
                setSettings(settingsData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Form form={form} layout="vertical">
            <Form.Item
                label="Product Name"
                name="Name"
                rules={[
                    { required: true, message: "Product Name is required." },
                    // { pattern: /^[a-zA-Z0-9\s()-.]*$/, message: "Only alphabet, numbers, (), - and . are allowed." },
                    // { max: 300, message: "Product Name must be at most 300 characters long." },
                    // { whitespace: true, message: "Not only has whitespace." },
                ]}
                key="Name"
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
                <Select placeholder="Select Collection" options={collections.map(collection => ({ label: collection.CollectionName, value: collection.CollectionID }))} />
            </Form.Item>
            <Form.Item
                label="Discount"
                name="Discount"
                rules={[{ required: true }]}
            >
                <Select placeholder="Select Discount" options={discounts.map(discount => ({ label: discount.Name, value: discount.DiscountID }))} />
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
                label="Diamond"
                name="Diamond"
                rules={[{ required: true }]}
            >
                <Select placeholder="Select Diamond" options={diamonds.map(diamond => ({ label: diamond.Name, value: diamond.DiamondID }))} />
            </Form.Item>
            <Form.Item
                label="Jewelry Setting"
                name="JewelrySetting"
                rules={[{ required: true }]}
            >
                <Select placeholder="Select Jewelry Setting" options={settings.map(setting => ({ label: setting.Name, value: setting.JewelrySettingID }))} />
            </Form.Item>
        </Form>
    );
};

export default AddProductForm;