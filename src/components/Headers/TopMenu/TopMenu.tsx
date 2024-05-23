import { MailFilled, MailOutlined, PhoneFilled, ShoppingCartOutlined, SmileOutlined } from '@ant-design/icons';
import * as Styled from './TopMenu.styled';
import Search from 'antd/es/input/Search';
import { Link } from 'react-router-dom';

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
                        <ShoppingCartOutlined />
                        <Link to="/login">
                            <SmileOutlined />
                        </Link>
                    </Styled.Feature>
                </Styled.TopMenuFlexbox>
            </Styled.TopMenuContainer>
        </>
    );
};

export default TopMenu;