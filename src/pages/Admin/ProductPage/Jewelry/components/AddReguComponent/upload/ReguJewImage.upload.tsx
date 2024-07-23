import { Form, FormInstance, Upload, UploadFile, UploadProps } from "antd"
import * as Styled from "../../../Jewelry.styled"
import ImgCrop from "antd-img-crop"
import { SetStateAction, useCallback } from "react";
import { useAppDispatch } from "@/hooks";
import { NotificationInstance } from "antd/es/notification/interface";
import uploadSlice from "../slice";

type ImageUploadProps = {
    fileList: UploadFile[];
    setFileList: React.Dispatch<SetStateAction<UploadFile<any>[]>>;
    onChangeImg: (value: any) => void;
    onPreview: (value: any) => void;
    form: FormInstance<any>;
    api: NotificationInstance;
}

const DiamondImageUpload = ({
    fileList,
    setFileList,
    onPreview,
    form,
    api
}: ImageUploadProps) => {

    const dispatch = useAppDispatch();

    const beforeUpload = () => {
        return false;
    }

    const onChange: UploadProps['onChange'] = useCallback(async ({ fileList: newFileList }: { fileList: UploadFile<any>[] }) => {
        try {
            const imageList = newFileList.map((file) => file.originFileObj);
            setFileList(newFileList);
            dispatch(uploadSlice.actions.setImageUploadList(imageList));
            api.success({
                message: 'Notification',
                description: 'Add image successfully'
            })
        } catch (error: any) {
            api.error({
                message: 'Error',
                description: error ? error.message : 'An error occurred'
            })
        }
    }, [dispatch]);

    return (
        <Form
            form={form}
            layout="vertical"
            className="AdPageContent_Content"
            name="upload"
        >
            <Styled.UploadFile>
                <Form.Item
                    label="Upload Images"
                    name="diamondImg"
                >
                    <ImgCrop quality={1} rotationSlider>
                        <Upload
                            name="diamondImage"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            beforeUpload={beforeUpload}
                            onPreview={onPreview}
                        >
                            {fileList.length < 5 && "+ Upload"}
                        </Upload>
                    </ImgCrop>
                </Form.Item>
            </Styled.UploadFile>
        </Form>
    )
};

export default DiamondImageUpload;