import { FieldType } from "@/components/AuthForm/AuthForm.fields";
import { Input, InputNumber, Select, Switch } from "antd";
import { ClarityType_Option, ColorType, FluorescenceType_Option, RateType_Option, ShapeType } from "../../Diamond.type";
import TextArea from "antd/es/input/TextArea";

export const DiamondField: FieldType[] = [
    {
        key: 1,
        label: "Diamond Name",
        name: "Name",
        rules: [
            {
                required: true,
                message: "Diamond Name is required.",
            },
            {
                pattern: /^[a-zA-Z0-9\s()-.]*$/,
                message:
                    "Only alphabet, numbers, (), - and . are allowed.",
            },
            {
                max: 300,
                message:
                    "Diamond Name must be at most 300 characters long.",
            },
            {
                min: 2,
                message: "Diamond Name must be at least 2 characters"
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
        label: "Charge Rate (%)",
        name: "ChargeRate",
        rules: [
            {
                required: true,
                message: "Rate is required.",
            },
            {
                type: "number",
                min: 1,
                max: 300,
                message:
                    "Must be a positive number and less than or equal to 300",
            },
        ],
        children: <InputNumber className="formItem" placeholder="150" />
    },
    {
        key: 3,
        label: "Price",
        name: "Price",
        rules: [
            {
                required: true,
                message: "Price is required.",
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
    {
        key: 4,
        label: "Shape",
        name: "Shape",
        rules: [
            {
                required: true
            }
        ],
        children:
            <Select
                className="formItem"
                placeholder="Select Shape"
                options={ShapeType}
            />
    },
    {
        key: 5,
        label: "Color",
        name: "Color",
        rules: [
            {
                required: true
            }
        ],
        children:
            <Select
                className="formItem"
                placeholder="Select Color"
                options={ColorType}
            />
    },
    {
        key: 6,
        label: "Polish",
        name: "Polish",
        rules: [
            {
                required: true
            }
        ],
        children:
            <Select
                className="formItem"
                placeholder="Select Polish"
                options={RateType_Option}
            />
    },
    {
        key: 7,
        label: "Cut",
        name: "Cut",
        rules: [
            {
                required: true
            }
        ],
        children:
            <Select
                className="formItem"
                placeholder="Select Cut"
                options={RateType_Option}
            />
    },
    {
        key: 8,
        label: "Length/Width Ratio",
        name: "LengthOnWidthRatio",
        rules: [
            {
                required: true,
            },
            {
                min: 0.1,
                max: 2, 
                type: 'number'
            }
        ],
        children: <InputNumber className="formItem" placeholder="1,01" />,
    },
    {
        key: 9,
        label: "Clarity",
        name: "Clarity",
        rules: [
            {
                required: true
            },
        ],
        children:
            <Select
                className="formItem"
                placeholder="Select Clarity"
                options={ClarityType_Option}
            />
    },
    {
        key: 10,
        label: "Symmetry",
        name: "Symmetry",
        rules: [
            {
                required: true
            }
        ],
        children:
            <Select
                className="formItem"
                placeholder="Select Symmetry"
                options={RateType_Option}
            />
    },
    {
        key: 11,
        label: "Carat Weight",
        name: "WeightCarat",
        rules: [
            {
                required: true
            },
            {
                min: 0.5,
                max: 10,
                type: 'number',
            }
        ],
        children: <InputNumber className="formItem" placeholder="1,01" />,
    },
    {
        key: 12,
        label: "Table %",
        name: "PercentTable",
        rules: [
            {
                required: true
            }
        ],
        children: <InputNumber className="formItem" placeholder="56.0" />,
    },
    {
        key: 13,
        label: "Depth %",
        name: "PercentDepth",
        rules: [
            {
                required: true
            }
        ],
        children: <InputNumber className="formItem" placeholder="63.8" />
    },
    {
        key: 14,
        label: "Fluorescence",
        name: "Fluorescence",
        rules: [
            {
                required: true
            }
        ],
        children:
            <Select
                className="formItem"
                placeholder="Select Symmetry"
                options={FluorescenceType_Option}
            />
    },
    {
        key: 15,
        label: "Diamond Cutter",
        name: "Cutter",
        rules: [
            {
                required: true,
                message: "Diamond Cutter is required.",
            },
            {
                pattern: /^[a-zA-Z0-9\s()-.]*$/,
                message:
                    "Only alphabet, numbers, (), - and . are allowed.",
            },
            {
                max: 300,
                message:
                    "Diamond Cutter must be at most 300 characters long.",
            },
            {
                whitespace: true,
                message: "Not only has whitespace.",
            },
        ],
        children: <Input className="formItem" placeholder="Fill Name" />
    },
    {
        key: 16,
        label: "Active",
        name: "IsActive",
        rules: [],
        children: <Switch defaultChecked defaultValue={true} />
    },
    {
        key: 17,
        label: "Description",
        name: "Description",
        rules: [
            {
                required: true,
                message: "Description is required.",
            },
            {
                pattern: /^[a-zA-Z0-9\s()-.]*$/,
                message:
                    "Only alphabet, numbers, (), - and . are allowed.",
            },
            {
                whitespace: true,
                message: "Not only has whitespace.",
            },
        ],
        children:
            <TextArea
                placeholder="Description"
                allowClear
            />
    },
]