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
            // const { data } = await createCertificate()
        } catch (error) {
            
        }
    }
    
    return (
        <Button
            type="primary"
            htmlType="submit"
            
        >
            {children}
        </Button>
    )
};

export default CertificateUploadButton;