import { useEffect, useState } from "react";
import { Form, Select } from "antd";
import { useAppDispatch } from "@/hooks";
import { showAllDiamond } from "@/services/diamondAPI";
import { uploadSliceDiaProduct } from "../slice";

const DiamondUpload = () => {
    const [diamonds, setDiamonds] = useState<any[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseDiamonds = await showAllDiamond();
                const { data: diamondsData } = responseDiamonds.data;

                const filteredDiamonds = diamondsData.filter((diamond: any) => diamond.ProductID === null && diamond.Quantity === 1);

                setDiamonds(filteredDiamonds);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleDiamondChange = (value: number) => {
        dispatch(uploadSliceDiaProduct.actions.setDiamondID(value));
    };

    return (
        <Form.Item
            label="Diamond"
            name="DiamondID"
            rules={[{ required: true }]}
        >
            <Select
                placeholder="Select Diamond"
                options={diamonds.map(c => ({ label: c.Name, value: c.DiamondID }))}
                onChange={handleDiamondChange}
            />
        </Form.Item>
    );
};

export default DiamondUpload;
