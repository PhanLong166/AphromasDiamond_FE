import { Button, Form, Steps, theme, UploadFile } from "antd";
import { SetStateAction, useState } from "react";
import DiamondForm from "../form/DiamondForm";
import { DiamondField } from "../form/DiamondFrom.field";
import SubmitButton from "../button/DiamondButton.submit";
import { NotificationInstance } from "antd/es/notification/interface";
import DiamondImageUpload from "../upload/DiamondImage.upload";
import UploadButton from "../button/DiamondButton.upload";
import DiamondCertificateUpload from "../upload/DiamonCertificate.upload";

type DiamondStepsType = {
    title: string;
    content?: JSX.Element | string;
}

type DiamondStepsProps = {
    api: NotificationInstance;
    fileList: UploadFile[];
    setFileList: React.Dispatch<SetStateAction<UploadFile<any>[]>>;
    docsList: UploadFile[];
    setDocsList: React.Dispatch<SetStateAction<UploadFile<any>[]>>;
    onChangeImg: (value: any) => void;
    onPreview: (value: any) => void;
    setIsAdding: (values: any) => void;
}

const DiamondSteps = ({
    api,
    fileList,
    setFileList,
    docsList,
    setDocsList,
    onChangeImg,
    onPreview,
    setIsAdding
}: DiamondStepsProps) => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [form] = Form.useForm();
    const [imageForm] = Form.useForm();
    const [certificateForm] = Form.useForm();

    const steps: DiamondStepsType[] = [
        {
            title: 'Information',
            content: (
                <DiamondForm
                    fields={DiamondField}
                    form={form}
                />
            )
        },
        {
            title: 'Image',
            content: (
                <DiamondImageUpload
                    form={imageForm}
                    fileList={fileList}
                    setFileList={setFileList}
                    onChangeImg={onChangeImg}
                    onPreview={onPreview}
                    api={api}
                />
            )
        },
        {
            title: 'Certificate',
            content: (
                <DiamondCertificateUpload
                    docsList={docsList}
                    setDocsList={setDocsList}
                    form={certificateForm}
                    api={api}
                />
            )
        },
        {
            title: 'Complete',
            content: 'Finish create diamond'
        }
    ];

    const next = () => setCurrent(current + 1);

    const prev = () => setCurrent(current - 1);

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title
    }));

    const contentStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '260px',
        color: token.colorTextTertiary,
        backgroundColor: token.colorWhite,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        padding: 20,
    };

    return (
        <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 &&
                    steps[current].title === "Information" && (
                        <SubmitButton
                            form={form}
                            current={current}
                            setCurrent={setCurrent}
                            api={api}
                        >
                            Next
                        </SubmitButton>
                    )}
                {current < steps.length - 1 &&
                    steps[current].title === "Image" && (
                        <UploadButton
                            current={current}
                            setCurrent={setCurrent}
                            api={api}
                        >
                            Next
                        </UploadButton>
                    )}
                {current < steps.length - 1 &&
                    steps[current].title === "Certificate" && (
                        <Button type="primary" onClick={next}>
                            Next
                        </Button>
                    )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => setIsAdding(false)}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    )
}

export default DiamondSteps;