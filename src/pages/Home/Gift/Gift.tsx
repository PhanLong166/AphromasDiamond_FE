
import { 
    Container,
    RightSection,
    LeftSection,
    Banner,
    InfoSection,
    Overlay,
    GiftItem,
    GiftImg,
    GiftText,
    GiftButton
    // GiftSection
 
   
} from './Gift.styled';

// const { Title, Text } = Typography;
import { } from '@ant-design/icons';
import styled from 'styled-components';
import {  Breadcrumb  } from 'antd';
const CustomBreadcrumb = styled(Breadcrumb)`
margin-left: 175px;
padding-top: 10px;
padding-bottom: 10px;
`;


const Gift = () => {
    return (
        <>
        <Container>
        <div>
      <CustomBreadcrumb
        separator=">"
        items={[
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'Gift',
          },
          
        ]}
      />
    </div>
    <Banner>
        <LeftSection>
          <h2>Top Ten Rings</h2>
          <div className="subheading">
          Get heirloom-quality beauty with our captivating selection of vintage-style engagement rings. Hand-engraved details, beaded-edge milgrain and pavé accent diamonds are featured throughout this intricately crafted collection. Pair these settings with a traditional round diamond, or make them even more unique with fancy-cut diamonds. Choose the vintage engagement ring that matches timeless styles such as Art Deco, mid-century and other 20th century fashions.
          </div>
        </LeftSection>
        <RightSection>
          <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproductmain1.png?alt=media&token=ebecd04a-3bec-45e1-bbf6-767f4c94f890" alt="Product Image" />
        </RightSection>
      </Banner>
      <InfoSection>
        <Overlay>
        <h2>Diamond Rings</h2>
         <p>Discover the elegance of our top 10 diamond rings at our exclusive jewelry store. Each ring features meticulously selected diamonds set in exquisite designs, perfect for celebrating life's most cherished moments. Elevate your style with the unparalleled brilliance and timeless beauty of our premium diamond collection.</p>
        </Overlay>
      </InfoSection>
   
    <GiftItem>
        <GiftImg>
            <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift1.jpg?alt=media&token=d572a775-8c7d-4e0e-9bba-f320cc69ab0b" alt=""/>
        </GiftImg>
        <GiftText>
        <h2>The Pink Star</h2>
                <p>Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.
                </p>
        <GiftButton>
            <a href="/all" className="link-add">LEARN MORE</a>
        </GiftButton>
        </GiftText>
        

      </GiftItem>
      <GiftItem>
        
        <GiftText>
        <h2>The Oppenheimer Blue</h2>
        <p>Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.
        </p>
        <GiftButton>
            <a href="/all" className="link-add">LEARN MORE</a>
        </GiftButton>      
        </GiftText>
        <GiftImg>
            <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift2.jpg?alt=media&token=8821c1ed-ad56-493a-bde9-8ad9d943ad09" alt="" />
        </GiftImg>
      </GiftItem>
      
        </Container>
        </>
       
    );
}

export default Gift;
