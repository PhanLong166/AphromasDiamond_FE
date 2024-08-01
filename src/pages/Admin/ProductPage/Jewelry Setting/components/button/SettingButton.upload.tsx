import { useAppSelector } from "@/hooks";
import { uploadImage } from "@/services/imageAPI";
import { Button } from "antd";
import { NotificationInstance } from "antd/es/notification/interface";


interface SubmitButtonProps {
    current: number;
    setCurrent: (value: number) => void;
    api: NotificationInstance;
}

const UploadButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
    children,
    current,
    setCurrent,
    api
}) => {
    const JewelrySettingID = useAppSelector((state) => state.uploadSetting.JewelrySettingID);
    const imageUploadList = useAppSelector((state) => state.uploadSetting.imageUploadList);

    const uploadSettingImage = async () => {
        try {
            await uploadImage(imageUploadList, undefined, undefined, JewelrySettingID);
            api.success({
                message: 'Notification',
                description: 'Upload image successfully!'
            });
            setCurrent(current + 1);
        } catch (error: any) {
            api.error({
                message: 'Error',
                description: error ? error.message : error.message
            });
        }
    }

    return (
        <>
            <Button
                type="primary"
                htmlType="submit"
                onClick={uploadSettingImage}
            >
                {children}
            </Button>
        </>
    )
};

export default UploadButton;