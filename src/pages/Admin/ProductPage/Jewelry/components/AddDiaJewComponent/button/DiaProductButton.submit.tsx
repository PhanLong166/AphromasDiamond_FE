import { useAppDispatch, useAppSelector } from "@/hooks";
import { Button, Form, FormInstance } from "antd";
import { NotificationInstance } from "antd/es/notification/interface";
import React, { useState } from "react";
import { uploadSliceDiaProduct } from "../slice";
import { createProduct } from "@/services/jewelryAPI";
import { updateDiamond } from "@/services/diamondAPI";

interface SubmitButtonProps {
  form: FormInstance;
  current: number;
  setCurrent: (value: number) => void;
  api: NotificationInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
  setCurrent,
  current,
  api,
}) => {
  const [submittable, setSubmittable] = useState(false);
  const dispatch = useAppDispatch();
  const DiamondID = useAppSelector((state) => state.uploadDiaProduct.DiamondID);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [values]);

  const productValues: object = {
    ...values,
  };

  const addProduct = async (productValues: object) => {
    try {
      const { data } = await createProduct(productValues);
      if (data.statusCode !== 200) throw new Error(data.message);

      const newProductID = data?.data?.ProductID;
      console.log('Product created with ProductID:', newProductID);

      const updateData = { ProductID: newProductID };
      const updateResponse = await updateDiamond(DiamondID, updateData);
      console.log('Diamond update response:', updateResponse);

      api.success({
        message: 'Notification',
        description: 'Create information successfully!',
      });
      setCurrent(current + 1);
      dispatch(uploadSliceDiaProduct.actions.setProductID(newProductID));
    } catch (error: any) {
      console.error('Error updating diamond:', error);
      api.error({
        message: 'Error',
        description: error.message || 'An error occurred!',
      });
    }
  };

  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      onClick={() => addProduct(productValues)}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
