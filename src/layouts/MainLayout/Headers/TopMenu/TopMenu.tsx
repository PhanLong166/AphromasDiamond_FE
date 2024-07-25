import { HeartOutlined, MailFilled, PhoneFilled, ShoppingCartOutlined } from '@ant-design/icons';
import * as Styled from './TopMenu.styled';
import Search from 'antd/es/input/Search';
import { Link, useNavigate } from 'react-router-dom';
import config from '@/config';
import { HeaderProps } from './TopMenu.type';
import Toolbar from '@/components/Toolbar';
import { MenuProps } from 'antd';
import cookieUtils from '@/services/cookieUtils';

const items: MenuProps['items'] = [
    {
        label: <Link to={config.routes.customer.account}>Profile</Link>,
        key: config.routes.customer.account
    },
    {
        type: 'divider'
    },
    {
        label: (
            <Link to={config.routes.public.login} onClick={() => cookieUtils.clear()}>
                Logout
            </Link>
        ),
        key: config.routes.public.login
    }
];

const TopMenu = ({
    role
}: HeaderProps) => {
    const navigate = useNavigate();

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
                        <Link to={config.routes.public.wish}>
                            <HeartOutlined />
                        </Link>

                        {role ? (
                            <>
                                <Link to={config.routes.customer.cart}>
                                    <ShoppingCartOutlined style={{ fontSize: '30px' }} />
                                </Link>

                                <Toolbar
                                    menu={items}
                                />
                            </>
                        ) : (
                            <Styled.TopMenuButton
                                onClick={() => navigate(config.routes.public.login)}
                            >
                                Login
                            </Styled.TopMenuButton>
                        )}
                    </Styled.Feature>
                </Styled.TopMenuFlexbox>
            </Styled.TopMenuContainer>
        </>
    );
};

export default TopMenu;