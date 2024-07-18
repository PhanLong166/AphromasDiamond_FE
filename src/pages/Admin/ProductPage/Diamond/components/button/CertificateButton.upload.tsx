import { useAppSelector } from "@/hooks"
import { createCertificate } from "@/services/certificateAPI";
import { uploadImage } from "@/services/imageAPI";
import { Button, Form, FormInstance } from "antd"
import { NotificationInstance } from "antd/es/notification/interface";

interface SubmitButtonProps {
    form: FormInstance;
    current: number;
    setCurrent: (value: number) => void;
    api: NotificationInstance;
}

const CertificateUploadButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
    children,
    form,
    current,
    setCurrent,
    api
}) => {
    const DiamondID = useAppSelector((state) => state.upload.DiamondID);
    const fileUploadList = useAppSelector((state) => state.upload.docsUploadList);
    
    const values = Form.useWatch([], form);
    const certificateValues: object = {
        ...values,
        DiamondID: DiamondID
    }
    console.log(certificateValues);
    const uploadDiamondCertificate = async () => {
        try {
            const { data } = await createCertificate(certificateValues);
            if(data.statusCode !== 200) throw new Error(data);
            await uploadImage(fileUploadList, undefined, undefined, undefined, data?.data?.CertificateID);
            api.success({
                message: 'Notification',
                description: 'Upload certificate successfully!'
            });
            setCurrent(current + 1);
        } catch (error: any) {
            api.error({
                message: 'Error',
                description: error ? error.message : 'An error occurred'
            });
        }
    }
    
    return (
        <Button
            type="primary"
            htmlType="submit"
            onClick={uploadDiamondCertificate}
        >
            {children}
        </Button>
    )
};

export default CertificateUploadButton;