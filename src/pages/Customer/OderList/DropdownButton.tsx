import React from 'react';
import { Menu, Dropdown, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

// Định nghĩa kiểu cho các mục trong menu
type MenuItem = {
  link: string;
  text: string;
};

// Định nghĩa kiểu cho các tham số của DropdownButton
interface DropdownButtonProps {
  buttonText: string;
  menuItems: MenuItem[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ buttonText, menuItems }) => {
  const menu = (
    <Menu>
      {menuItems.map((item, index) => (
        <Menu.Item key={index}>
          <a href={item.link}>{item.text}</a>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button>
            {buttonText} <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default DropdownButton;
