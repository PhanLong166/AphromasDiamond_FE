import { Input } from "antd";
import { Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";
import { EyeInvisibleOutlinedIcon, EyeOutlinedIcon } from "./AuthFrom.styled";

export type FieldType = {
    key: number;
    label: string;
    name: string;
    dependencies?: NamePath;
    rules: Rule[];
    children: JSX.Element;
    initialValue?: string;
}

// const validateWhitespace = (_: unknown, value: string) => {
//     if (value && value.trim() === '') {
//         return Promise.reject('Please enter a valid value');
//     }
//     return Promise.resolve();
// }

export const LoginFields: FieldType[] = [
    {
        key: 1,
        label: 'Email',
        name: 'Email',
        rules: [
            {
                required: true,
                type: 'email',
                message: 'Please enter exactly email format'
            },
            {
                max: 50,
                message: 'Email do not exceed 50 characters'
            }
        ],
        children: <Input placeholder="" />,
    },
    {
        key: 2,
        label: 'Password',
        name: 'Password',
        rules: [
            {
                required: true,
                max: 16,
                pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
                message: 'Must be between 8 and 16 characters, including a number, one uppercase letter and one lowercase letter.',
            }
        ],
        children: (
            <Input.Password
                iconRender={(visible) => visible ? <EyeOutlinedIcon /> : <EyeInvisibleOutlinedIcon />}
                placeholder=""
            />
        )
    }
];

export const RegisterFields: FieldType[] = [
    {
        key: 1,
        label: 'Fullname',
        name: 'Name',
        rules: [
            {
                max: 50,
                message: 'Name do not exceed 50 characters'
            }
        ],
        children: <Input placeholder="" />
    },
    {
        key: 2,
        label: 'Phone Number',
        name: 'PhoneNumber',
        rules: [
            {
                required: true,
                max: 20,
                pattern: /^(?=.*[0-9]).{8,20}$/,
                message: 'Phone number must be between 8 to 20 numbers'
            }
        ],
        children: <Input type="number" placeholder="" />
    },
    {
        key: 3,
        label: 'Email',
        name: 'Email',
        rules: [
            {
                required: true,
                type: 'email',
                message: 'Please enter exactly email format'
            },
            {
                max: 50,
                message: 'Email do not exceed 50 characters'
            }
        ],
        children: <Input placeholder="" />
    },
    {
        key: 4,
        label: 'Password',
        name: 'Password',
        rules: [
            {
                required: true,
                max: 16,
                pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
                message: 'Must be between 8 and 16 characters, including a number, one uppercase letter and one lowercase letter.',
            }
        ],
        children: (
            <Input.Password
                iconRender={(visible) => visible ? <EyeOutlinedIcon /> : <EyeInvisibleOutlinedIcon />}
                placeholder=""
            />
        )
    },
]