/* eslint-disable @typescript-eslint/no-explicit-any */

import { Modal, Form, Input, Rate } from "antd";
import { useState } from "react";

interface ReviewFormProps {
  visible: boolean;
  onCreate: (values: any) => void; // Update with the correct type
  onCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const ReviewForm: React.FC<ReviewFormProps> = ({
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const [value, setValue] = useState(3);

  return (
    <Modal
      visible={visible}
      title="Rate Product"
      okText="Rate"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="review_form"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="stars"
          label="Rate"
          rules={[{ required: true, message: "Please select number of stars!" }]}
        >
          <Rate tooltips={desc} onChange={setValue} value={value} />
        </Form.Item>

        <Form.Item
          name="comment"
          label="Comment"
          rules={[{ required: true, message: "Please enter comments!" }]}
        >
          <Input.TextArea
            allowClear
            showCount
            maxLength={300}
            placeholder="Tell us how can ưe improve better!"
            rows={4}
            // disabled
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReviewForm;
