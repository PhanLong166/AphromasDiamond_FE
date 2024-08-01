
import { useEffect, useState } from "react";
import { showAllSetting } from "@/services/jewelrySettingAPI";
import { Form, Select } from "antd";


const DiaSettingUpload = () => {
    const [settings, setSettings] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseSettings = await showAllSetting();
                const { data: settingsData } = responseSettings.data;
                setSettings(settingsData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Form.Item
            label="Jewelry Setting"
            name="JewelrySettingID"
            rules={[{ required: true }]}
        >
            <Select placeholder="Select Jewelry Setting" options={settings.map(c => ({ label: c.Name, value: c.JewelrySettingID }))} />
        </Form.Item>
    );
};
export default DiaSettingUpload;