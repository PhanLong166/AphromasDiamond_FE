/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Modal, Form, Input, Rate, Button } from "antd";
import { createFeedback } from "@/services/feedBackAPI";

interface ReviewFormProps {
  visible: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
  orderId: string | null;
  accountId: number | null;
  diamondId: number | null;
  productId: number | null;
}

const ReviewForm: React.FC<ReviewFormProps> = ({
  visible,
  onCreate,
  onCancel,
  orderId,
  accountId,
  diamondId,
  productId,
}) => {
  const [form] = Form.useForm();

   React.useEffect(() => {
    form.setFieldsValue({
      diamondId: diamondId || null,
      productId: productId || null,
    });
    console.log("Diamond ID in form: ", diamondId);
    console.log("Product ID in form: ", productId);
  }, [diamondId, productId, form]);
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log("Values before submission: ", values);

      if (!diamondId && !productId) {
        throw new Error("No valid ID for feedback");
      }

      const feedbackData = {
        Stars: values.stars,
        Comment: values.comment,
        CommentTime: new Date().toISOString(),
        IsActive: true,
        DiamondID: values.diamondId ||diamondId || null,
        JewelrySettingID: null,
        OrderID: orderId,
        AccountID: accountId,
        ProductID:  values.productId || productId || null,
      };
      

      await createFeedback(feedbackData);
      onCreate(feedbackData);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <Modal
      visible={visible}
      title="Submit Your Feedback"
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" name="review_form">
        <Form.Item
          name="stars"
          label="Rating"
          rules={[{ required: true, message: "Please rate the product" }]}
        >
          <Rate />
        </Form.Item>
        <Form.Item
          name="comment"
          label="Comment"
          rules={[{ required: true, message: "Please write a comment" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item name="diamondId" style={{ display: "none" }}>
          <Input />
        </Form.Item>
        <Form.Item name="productId" style={{ display: "none" }}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReviewForm;
