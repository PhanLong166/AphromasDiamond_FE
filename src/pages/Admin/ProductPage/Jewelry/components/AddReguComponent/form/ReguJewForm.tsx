
import { FieldType } from "@/components/AuthForm/AuthForm.fields";
import { Form } from "antd";
import { FormInstance } from "antd/lib";
import * as Styled from "../../../Jewelry.styled";
import SettingUpload from "../upload/JewelrySetting.upload";

type ReguJewelryFormProps = {
    fields: FieldType[];
    form: FormInstance<any>;
}

const AddProductForm = ({
    fields,
    form
}: ReguJewelryFormProps) => (
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
        <SettingUpload/>
    </Form>
)

export default AddProductForm;