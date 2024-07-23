import { useAppDispatch } from "@/hooks";
import { Button, Form, FormInstance } from "antd";
import { NotificationInstance } from "antd/es/notification/interface";
import React, { useState } from "react";
import { uploadSliceProduct } from "../slice";
import { createProduct } from "@/services/jewelryAPI";

interface SubmitButtonProps {
    form: FormInstance;
    current: number;
    setCurrent: (value: number) => void;
    api: NotificationInstance
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
    form,
    children,
    setCurrent,
    current,
    api
}) => {
    // const [submittable, setSubmittable] = React.useState<boolean>(false);
    const [submittable, setSubmittable] = useState(false);
    const dispatch = useAppDispatch();

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
        form
            .validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));

    }, [values]);

    const productValues: object = {
        ...values
    }
    console.log(productValues);

    const addProduct = async (productValues: object) => {
        try {
            const { data } = await createProduct(productValues);
            if (data.statusCode !== 200) throw new Error(data.message);
            else {
                api.success({
                    message: 'Notification',
                    description:
                        'Create information successfully!'
                })
                setCurrent(current + 1);
                dispatch(uploadSliceProduct.actions.setProductID(data?.data?.ProductID));
            }
        } catch (error: any) {
            api.error({
                message: 'Error',
                description: error.message || "An error occurred!"
            })
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