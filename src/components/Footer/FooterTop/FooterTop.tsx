import { Input } from 'antd';
import * as Styled from './FooterTop.styled';
import { FacebookFilled, InstagramFilled, MailFilled, TwitterCircleFilled } from '@ant-design/icons';

const FooterTop = () => {
    return (
        <>
            <Styled.TopContainer>
                <Styled.TopFlexbox>
                    <Styled.ContactUs>
                        <Styled.TitleCategory>Information</Styled.TitleCategory>
                        <Styled.DescriptionContact>
                            Lorem ipsum dolor sit amet consectetur.
                            Bibendum consequat laoreet turpis in pellentesque sem id ut.
                            Feugiat quam porttitor in augue sed quis pellentesque quam purus.
                            Ac euismod ac proin vitae vulputate.
                            Urna facilisis varius vestibulum at gravida turpis.
                            Viverra imperdiet convallis elementum sed mauris.
                            Ultricies in morbi eu felis nibh tellus.
                        </Styled.DescriptionContact>
                        <Input size='large' placeholder='large size' prefix={<MailFilled/>}></Input>
                        <Styled.SNSContainer>
                            <FacebookFilled/>
                            <InstagramFilled />
                            <TwitterCircleFilled />
                        </Styled.SNSContainer>
                    </Styled.ContactUs>
                    <Styled.CategoryContainer>
                        <Styled.NavigationTitle>
                            <Styled.TitleCategory>Navigation</Styled.TitleCategory>
                        </Styled.NavigationTitle>
                    </Styled.CategoryContainer>
                </Styled.TopFlexbox>
            </Styled.TopContainer>
        </>
    );
}

export default FooterTop;