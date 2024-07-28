import { FieldType } from "@/components/AuthForm/AuthForm.fields";
import { Input, Select } from "antd";
import { Brand_Option } from "../../../Jewelry.type";

export const ReguJewelryField: FieldType[] = [
    {
        key: 1,
        label: "Jewelry Name",
        name: "Name",
        rules: [
            {
                required: true,
                message: "Jewelry Name is required.",
            },
            {
                pattern: /^[a-zA-Z0-9\s()-.]*$/,
                message:
                    "Only alphabet, numbers, (), - and . are allowed.",
            },
            {
                max: 300,
                message:
                    "Jewelry Name must be at most 300 characters long.",
            },
            {
                whitespace: true,
                message: "Not only has whitespace.",
            },
        ],
        children: <Input className="formItem" placeholder="Fill Name" />
    },
    {
        key: 2,
        label: "Brand",
        name: "Brand",
        rules: [
            {
                required: true
            }
        ],
        children:
            <Select
                className="formItem"
                placeholder="Select Shape"
                options={Brand_Option}
            />
    }
]