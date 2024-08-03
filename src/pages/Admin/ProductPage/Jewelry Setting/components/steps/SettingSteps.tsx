import { Button, Form, Steps, theme, UploadFile } from "antd";
import { SetStateAction, useState } from "react";
import SettingForm from "../form/SettingForm";
import { SettingField } from "../form/SettingFrom.field";
import SubmitButton from "../button/SettingButton.submit";
import { NotificationInstance } from "antd/es/notification/interface";
import DiamondImageUpload from "../upload/DiamondImage.upload";
import UploadButton from "../button/SettingButton.upload";
// import MaterialTable from "../form/SettingVariant";

type SettingStepsType = {
  title: string;
  content?: JSX.Element | string;
};

type SettingStepsProps = {
  api: NotificationInstance;
  fileList: UploadFile[];
  setFileList: React.Dispatch<SetStateAction<UploadFile<any>[]>>;
  onChangeImg: (value: any) => void;
  onPreview: (value: any) => void;
  setIsAdding: (values: any) => void;
  fetchData: () => Promise<void>
};

const SettingSteps = ({
  api,
  fileList,
  setFileList,
  onChangeImg,
  onPreview,
  setIsAdding,
}: SettingStepsProps) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  // const [tableForm] = Form.useForm();
  const [imageForm] = Form.useForm();

  const steps: SettingStepsType[] = [
    {
      title: 'Information',
      content: (
          <SettingForm
              fields={SettingField}
              form={form}
          />
      )
  },
    {
      title: "Image",
      content: (
        <DiamondImageUpload
          form={imageForm}
          fileList={fileList}
          setFileList={setFileList}
          onChangeImg={onChangeImg}
          onPreview={onPreview}
          api={api}
        />
      ),
    },
    {
      title: "Complete",
      content: "Finish create diamond",
    },
  ];

  // const next = () => setCurrent(current + 1);

  const prev = () => setCurrent(current - 1);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    lineHeight: "260px",
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
        {current < steps.length - 1 && steps[current].title === "Image" && (
          <UploadButton current={current} setCurrent={setCurrent} api={api}>
            Next
          </UploadButton>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => setIsAdding(false)}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default SettingSteps;
