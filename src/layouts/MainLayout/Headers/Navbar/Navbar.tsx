import React from 'react';
import * as Styled from './Navbar.styled';
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, type MenuProps } from "antd";
import { Link } from 'react-router-dom';
import { items } from './Navbar.items';

const Navbar: React.FC = () => {
    return (
        <>
            <Styled.NavbarContainer>
                <Styled.NavbarFlexbox>
                    <Styled.Logo>
                        <Link to="/">APHROMAS</Link>
                    </Styled.Logo>
                    <Styled.MenuFrame>
                        {/* <Dropdown 
                            menu={{ 
                                items: items, 
                            }}
                            >
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
                        </Space> */}
                        <Styled.NavbarComponent
                            mode='horizontal'
                            items={items}
                        />
                    </Styled.MenuFrame>
                </Styled.NavbarFlexbox>
            </Styled.NavbarContainer>
        </>
    )
};

export default Navbar;