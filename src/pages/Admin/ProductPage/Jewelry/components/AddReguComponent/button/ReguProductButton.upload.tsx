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
    const ProductID = useAppSelector((state) => state.uploadProduct.ProductID);
    const imageUploadList = useAppSelector((state) => state.uploadProduct.imageUploadList);

    const uploadDiamondImage = async () => {
        try {
            await uploadImage(imageUploadList, ProductID);
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
                onClick={uploadDiamondImage}
            >
                {children}
            </Button>
        </>
    )
};

export default UploadButton;