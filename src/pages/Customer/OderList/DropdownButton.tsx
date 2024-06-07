// DropdownButton.js
import { Dropdown, Button, Space, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const DropdownButton = (buttonText: any, menuItems: any ) => {
  const menu = (
    <Menu>
      {menuItems.map((item: any, index: any) => (
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
