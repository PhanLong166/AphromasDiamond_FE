import { FieldType } from "@/components/AuthForm/AuthForm.fields";
import { Input, InputNumber, Select, Switch } from "antd";
import { ClarityType_Option, ColorType, FluorescenceType_Option, RateType_Option, ShapeType } from "../../Diamond.type";
import TextArea from "antd/es/input/TextArea";
import { Brand_Option } from "../../../Jewelry.type";
import { showAllDiamond } from "@/services/diamondAPI";

export const ProductField: FieldType[] = [
    {
        key: 1,
        label: "Product Name",
        name: "Name",
        rules: [
            {
                required: true,
                message: "Product Name is required.",
            },
            {
                pattern: /^[a-zA-Z0-9\s()-.]*$/,
                message:
                    "Only alphabet, numbers, (), - and . are allowed.",
            },
            {
                max: 300,
                message:
                    "Product Name must be at most 300 characters long.",
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
                placeholder="Select Brand"
                options={Brand_Option}
            />
    },
    {
        key: 3,
        label: "Collection",
        name: "Collection",
        rules: [
            {
                required: true
            }
        ],
        children:
            <Select
                className="formItem"
                placeholder="Select Color"
                options={}
            />
    },
    {
        key: 4,
        label: "Discount",
        name: "Discount",
        rules: [
            {
                required: true
            }
        ],
        children:
            <Select
                className="formItem"
                placeholder="Select Discount"
                options={}
            />
    },
    {
        key: 5,
        label: "Description",
        name: "Inscription",
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
                placeholder="Inscription"
                allowClear
            />
    },
]