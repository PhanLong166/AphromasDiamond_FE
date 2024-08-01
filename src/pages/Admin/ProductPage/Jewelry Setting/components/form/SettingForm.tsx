import { FieldType } from "@/components/AuthForm/AuthForm.fields";
import { Form, FormInstance } from "antd";
import * as Styled from "../../RingSetting.styled";
import VariantUpload from "../upload/Variant.upload";

type SettingFormProps = {
    fields: FieldType[];
    form: FormInstance<any>;
}

const SettingForm = ({
    fields,
    form
}: SettingFormProps) => (
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
        <VariantUpload/>
    </Form>
)

export default SettingForm;