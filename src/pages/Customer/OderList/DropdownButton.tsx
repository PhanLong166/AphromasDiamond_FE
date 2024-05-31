import { Dropdown, Button, Space, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a href="#action1">Action 1</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#action2">Action 2</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="#action3">Action 3</a>
    </Menu.Item>
  </Menu>
);

const DropdownButton = () => {
  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown overlay={menu}>
          <Button>
            Date <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    </Space>
  );
};


export default DropdownButton;