import { useAppDispatch, useAppSelector } from "@/hooks";
import { Button, Form, FormInstance } from "antd";
import { NotificationInstance } from "antd/es/notification/interface";
import React, { useState } from "react";
import { uploadSliceSetting } from "../slice";
import { createSetting } from "@/services/jewelrySettingAPI";
import { updateSettingVariant } from "@/services/settingVariantAPI";

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
    const JewelrySettingVariantID = useAppSelector((state) => state.uploadSetting.JewelrySettingVariantID);

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
        form
            .validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));

    }, [values]);

    const settingValues: object = {
        ...values,
    }

    const addSetting = async (settingValues: object) => {
        try {
            const { data } = await createSetting(settingValues);
            if (data.statusCode !== 200) throw new Error(data.message);
            
            const newJewelrySettingID = data?.data?.JewelrySettingID;
            console.log('Jewelry Setting created with JewelrySettingID:', newJewelrySettingID);
      
            const updateData = { JewelrySettingID: newJewelrySettingID };
            const updateResponse = await updateSettingVariant(JewelrySettingVariantID, updateData);
            console.log('Variant update response:', updateResponse);

                api.success({
                    message: 'Notification',
                    description:
                        'Create information successfully!'
                })
                setCurrent(current + 1);
                dispatch(uploadSliceSetting.actions.setJewelrySettingID(data?.data?.JewelrySettingID));
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
            onClick={() => addSetting(settingValues)}
        >
            {children}
        </Button>
    );
};

export default SubmitButton;