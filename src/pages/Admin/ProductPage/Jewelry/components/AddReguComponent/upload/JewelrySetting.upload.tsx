
import { useEffect, useState } from "react";
import { showAllSetting } from "@/services/jewelrySettingAPI";
import { Form, Select } from "antd";
import { FormInstance } from "antd/lib";
// import * as Styled from "../../../Jewelry.styled";
import { NotificationInstance } from "antd/es/notification/interface";

// const { TextArea } = Input;

type SettingUpload = {
    form: FormInstance<any>;
    api: NotificationInstance;
}

const SettingUpload = ({
    form,
    // api
}: SettingUpload) => {
    const [settings, setSettings] = useState<any[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {const responseSettings = await showAllSetting();
                const { data: settingsData } = responseSettings.data;
                setSettings(settingsData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Form form={form} layout="vertical" className="AdPageContent_Content">
            <Form.Item
                label="Jewelry Setting"
                name="JewelrySetting"
                rules={[{ required: true }]}
            >
                <Select placeholder="Select Jewelry Setting" options={settings.map(c => ({ label: c.Name, value: c.JewelrySettingID }))} />
            </Form.Item>
        </Form>
    );
};
export default SettingUpload;