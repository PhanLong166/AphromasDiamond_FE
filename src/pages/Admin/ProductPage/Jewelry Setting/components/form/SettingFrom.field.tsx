import { FieldType } from "@/components/AuthForm/AuthForm.fields";
import { Input, InputNumber, Switch } from "antd";

export const SettingField: FieldType[] = [
    {
        key: 1,
        label: "Jewelry Setting Name",
        name: "Name",
        rules: [
            {
                required: true,
                message: "Jewelry Setting Name is required.",
            },
            {
                pattern: /^[a-zA-Z0-9\s()-.]*$/,
                message:
                    "Only alphabet, numbers, (), - and . are allowed.",
            },
            {
                max: 300,
                message:
                    "Jewelry Setting Name must be at most 300 characters long.",
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
        label: "Production Cost",
        name: "ProductionCost",
        rules: [
            {
                required: true,
                message: "Production Cost is required.",
            },
            {
                type: "number",
                min: 0,
                max: 1000000,
                message:
                    "Must be a positive number and less than or equal to $1,000,000 USD.",
            },
        ],
        children: <InputNumber className="formItem" placeholder="4,080" />
    },
    // {
    //     key: 3,
    //     label: "Auxiliary Cost",
    //     name: "AuxiliaryCost",
    //     rules: [
    //         {
    //             required: true,
    //             message: "Auxiliary Cost is required.",
    //         },
    //         {
    //             type: "number",
    //             min: 0,
    //             max: 1000000,
    //             message:
    //                 "Must be a positive number and less than or equal to $1,000,000 USD.",
    //         },
    //     ],
    //     children: <InputNumber className="formItem" placeholder="4,080" />
    // },
    // {
    //     key: 4,
    //     label: "Charge Rate (%)",
    //     name: "ChargeRate",
    //     rules: [
    //         {
    //             required: true,
    //             message: "Rate is required.",
    //         },
    //         {
    //             type: "number",
    //             min: 1,
    //             max: 300,
    //             message:
    //                 "Must be a positive number and less than or equal to 300",
    //         },
    //     ],
    //     children: <InputNumber className="formItem" placeholder="150" />
    // },
    {
        key: 3,
        label: "Active",
        name: "IsActive",
        rules: [],
        children: <Switch defaultChecked defaultValue={true} />
    },
]