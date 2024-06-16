import { MailFilled, PhoneFilled, ShoppingCartOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import * as Styled from './TopMenu.styled';
import Search from 'antd/es/input/Search';
import { Link } from 'react-router-dom';
import config from '@/config';
import { Avatar, Dropdown, Space } from 'antd';

const TopMenu = () => {
    return (
        <>
            <Styled.TopMenuContainer>
                <Styled.TopMenuFlexbox>
                    <Styled.Contact>
                        <Styled.Phone>
                            <PhoneFilled style={{ paddingRight: "5px" }} />
                            (000) 000 000
                        </Styled.Phone>
                        <Styled.Email>
                            <MailFilled style={{ paddingRight: "5px" }} />
                            info@gmail.com
                        </Styled.Email>
                    </Styled.Contact>
                    <Styled.Feature>
                        <Search
                            placeholder='Search'
                            allowClear
                        />
                        <Link to={config.routes.customer.cart}>
                            <ShoppingCartOutlined />
                        </Link>
                        <Link to="/login">
                            <SmileOutlined />
                        </Link>
                        <Dropdown arrow placement='bottomRight' trigger={['click']}>
                            <Space style={{ cursor: 'pointer' }}>
                                <Avatar size={40} icon={<UserOutlined />} />
                            </Space>
                        </Dropdown>
                    </Styled.Feature>
                </Styled.TopMenuFlexbox>
            </Styled.TopMenuContainer>
        </>
    );
};

export default TopMenu;