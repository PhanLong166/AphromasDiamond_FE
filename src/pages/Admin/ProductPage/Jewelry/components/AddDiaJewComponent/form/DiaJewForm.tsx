import { Form } from "antd";
import { FieldType } from "@/components/AuthForm/AuthForm.fields";
import { FormInstance } from "antd/lib";
import DiamondUpload from "../upload/Diamond.upload";
import * as Styled from "../../../Jewelry.styled";
import DiaSettingUpload from "../upload/JewelrySetting.upload";

type DiaJewelryFormProps = {
    fields: FieldType[];
    form: FormInstance<any>;
}

const AddProductForm = ({
    fields,
    form
}: DiaJewelryFormProps) => (
    <Form
    form={form}
    layout="vertical"
    className="AdPageContent_Content"
>
    {fields.map((field) => (
        <Styled.FormItem key={field.key}>
            <Form.Item
                label={field.label}
                name={field.name}
                rules={field.rules}
                validateFirst
            >
                {field.children}
            </Form.Item>
        </Styled.FormItem>
    ))}
    <DiamondUpload/>
    <DiaSettingUpload/>
</Form>
)

export default AddProductForm;