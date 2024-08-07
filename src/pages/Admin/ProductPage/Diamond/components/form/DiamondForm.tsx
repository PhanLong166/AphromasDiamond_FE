import { FieldType } from "@/components/AuthForm/AuthForm.fields";
import { Form, FormInstance } from "antd";
import * as Styled from "../../Diamond.styled";

type DiamondFormProps = {
    fields: FieldType[];
    form: FormInstance<any>;
}

const DiamondForm = ({
    fields,
    form
}: DiamondFormProps) => (
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
    </Form>
)

export default DiamondForm;