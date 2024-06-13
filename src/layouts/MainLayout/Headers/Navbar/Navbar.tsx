import * as Styled from './Navbar.styled';
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, type MenuProps } from "antd";
import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
    {
        key: '1',
        type: 'group',
        label: 'Group title',
        children: [
            {
                key: '1-1',
                label: '1st item',
            },
            {
                key: '1-2',
                label: '2nd menu item',
            },
        ],
    },
    {
        key: '2',
        label: 'sub menu',
        children: [
            {
                key: '2-1',
                label: '3rd menu item',
            },
            {
                key: '2-2',
                label: '4th menu item',
            },
        ],
    },
    {
        key: '3',
        label: 'disabled sub menu',
        disabled: true,
        children: [
            {
                key: '3-1',
                label: '5d menu item',
            },
            {
                key: '3-2',
                label: '6th menu item',
            },
        ],
    },
];

const Navbar = () => {
    return (
        <>
            <Styled.NavbarContainer>
                <Styled.NavbarFlexbox>
                    <Styled.Logo>
                        <Link to="/">APHROMAS</Link>
                    </Styled.Logo>
                    <Styled.DropdownFrame>
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space style={{ color: "gray" }}>
                                    Diamond
                                    <DownOutlined style={{ fontSize: "13px" }} />
                                </Space>
                            </a>
                        </Dropdown>
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space style={{ color: "gray" }}>
                                    Diamond Ring
                                    <DownOutlined style={{ fontSize: "13px" }} />
                                </Space>
                            </a>
                        </Dropdown>
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space style={{ color: "gray" }}>
                                    Jewelry
                                    <DownOutlined style={{ fontSize: "13px" }} />
                                </Space>
                            </a>
                        </Dropdown>
                        <Space style={{ color: "gray" }}>
                            Gifts
                        </Space>
                        <Space style={{ color: "gray" }}>
                            Learn About
                        </Space>
                        <Space style={{ color: "gray" }}>
                            About Us
                        </Space>
                    </Styled.DropdownFrame>
                </Styled.NavbarFlexbox>
            </Styled.NavbarContainer>
        </>
    )
};

export default Navbar;