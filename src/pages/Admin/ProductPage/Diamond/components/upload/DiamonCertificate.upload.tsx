import { Form, FormInstance, Select, Upload, UploadFile, UploadProps } from "antd"
import { NotificationInstance } from "antd/es/notification/interface";
import * as Styled from '../../Diamond.styled';
import { InboxOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { SetStateAction, useCallback, useEffect } from "react";
import uploadSlice from "../slice";
import { CertificateType_Option } from "../../Diamond.type";
import { createCertificate, updateCertificate } from "@/services/certificateAPI";
import { uploadImage } from "@/services/imageAPI";

const { Dragger } = Upload

type CertificateUploadProps = {
    form: FormInstance<any>;
    api: NotificationInstance;
    docsList: UploadFile[];
    setDocsList: React.Dispatch<SetStateAction<UploadFile<any>[]>>;
}

const DiamondCertificateUpload = ({
    docsList,
    setDocsList,
    form,
    api
}: CertificateUploadProps) => {
    const dispatch = useAppDispatch();

    const DiamondID = useAppSelector((state) => state.upload.DiamondID);
    const fileUploadList = useAppSelector((state) => state.upload.docsUploadList);
    const values = Form.useWatch([], form);

    // const props: UploadProps = {
    //     name: "file",
    //     multiple: true,
    //     async onChange(info) {
    //         const { status } = info.file;
    //         if (status !== "uploading") {
    //             console.log("PDF Upload", info.fileList);
    //         }
    //         if (status === "done") {
    //             api.success({
    //                 message: 'Notification',
    //                 description: `${info.file.name} file uploaded successfully.`
    //             });
    //         } else if (status === "error") {
    //             api.error({
    //                 message: 'Error',
    //                 description: `${info.file.name} file upload failed.`
    //             });
    //         }
    //     },
    //     onDrop(e) {
    //         console.log("Dropped files", e.dataTransfer.files);
    //     },
    // };

    const beforeUpload = () => {
        return false;
    }

    const onChange: UploadProps['onChange'] = useCallback(
        async ({ fileList: newFileList }: { fileList: UploadFile<any>[] }) => {
        try {
            const docsList = newFileList.map((file) => file.originFileObj);
            setDocsList(newFileList);
            dispatch(uploadSlice.actions.setDocsUploadList(docsList));
            console.log(fileUploadList);
            const { data } = await createCertificate({
                ...values,
                DiamondID: DiamondID
            });
            if(data.statusCode !== 201) throw new Error(data.error);
            await uploadImage(fileUploadList, undefined, undefined, undefined, data?.data?.CertificateID);
            api.success({
                message: 'Notification',
                description: 'Add certificate successfully'
            });
        } catch (error: any) {
            api.error({
                message: 'Error',
                description: error ? error.message : 'An error occurred'
            });
        }
    }, [dispatch]);

    return (
        <Form
            form={form}
            layout="vertical"
            name="upload"
        >
            <Styled.UploadFile>
                <Form.Item
                    label="Certificate Type"
                    name="Name"
                >
                    <Select
                        className="formItem"
                        placeholder="Select Certificate"
                        options={CertificateType_Option}
                    />
                </Form.Item>
                <Form.Item
                    label="Upload Certificate"
                >
                    <Dragger
                        fileList={docsList}
                        onChange={onChange}
                        multiple={false}
                        beforeUpload={beforeUpload}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                            Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly
                            prohibited from uploading company data or other
                            banned files.
                        </p>
                    </Dragger>
                </Form.Item>
            </Styled.UploadFile>
        </Form>
    )
}

export default DiamondCertificateUpload;