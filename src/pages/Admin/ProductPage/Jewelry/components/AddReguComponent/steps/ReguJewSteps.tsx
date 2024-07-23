import { Button, Form, Steps, theme, UploadFile } from "antd";
import { SetStateAction, useState } from "react";
import SubmitButton from "../button/ReguProductButton.submit";
import { NotificationInstance } from "antd/es/notification/interface";
import ProductImageUpload from "../upload/ReguJewImage.upload";
import UploadButton from "../button/ReguProductButton.upload";
import AddProductForm from "../form/ReguJewForm";

type ProductStepsType = {
    title: string;
    content?: JSX.Element | string;
}

type ProductStepsProps = {
    api: NotificationInstance;
    fileList: UploadFile[];
    setFileList: React.Dispatch<SetStateAction<UploadFile<any>[]>>;
    docsList?: UploadFile[];
    setDocsList?: React.Dispatch<SetStateAction<UploadFile<any>[]>>;
    onChangeImg: (value: any) => void;
    onPreview: (value: any) => void;
    setIsAdding?: (values: any) => void;
    fetchData: () => Promise<void>
}

const ProductSteps = ({
    api,
    fileList,
    setFileList,
    onChangeImg,
    onPreview,
    fetchData
}: ProductStepsProps) => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [form] = Form.useForm();
    const [imageForm] = Form.useForm();

    const steps: ProductStepsType[] = [
        {
            title: 'Information',
            content: (
                <AddProductForm
                />
            )
        },
        {
            title: 'Image',
            content: (
                <ProductImageUpload
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
            title: 'Complete',
            content: 'Finish create product'
        }
    ];

    // const next = () => setCurrent(current + 1);

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
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => {
                        fetchData();
                    }}>
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

export default ProductSteps;