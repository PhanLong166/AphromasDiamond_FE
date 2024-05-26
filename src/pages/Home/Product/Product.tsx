import React, { useState } from 'react';
import {

  Container,
  Banner,
  LeftSection,
  RightSection,
  ListProduct,
  ProductItem,
  ProductImage,
  ItemName,
  Price,
  AddCartButton,
  AddLink,
  CustomCard,
  CustomCardContent,
  CustomCardTitle,
  CustomButton,
  FAQs,
  LeftFAQ,
  Wrapper,
  Accordion,
  Panel,
} from './Product.styled';
import { CaretDownOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {  Breadcrumb  } from 'antd';
import { Link } from 'react-router-dom';
const CustomBreadcrumb = styled(Breadcrumb)`
margin-left: 175px;
padding-top: 10px;
padding-bottom: 10px;
`;

const Product: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

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
            title: 'Round Ring',
          },
          
        ]}
      />
    </div>
      <Banner>
        <LeftSection>
          <h2>Round Rings</h2>
          <div className="subheading">
            Get heirloom-quality beauty with our captivating selection of vintage-style engagement rings. Hand-engraved details, beaded-edge milgrain and pavé accent diamonds are featured throughout this intricately crafted collection. Pair these
            settings with a traditional round diamond, or make them even more unique with fancy-cut diamonds. Choose the vintage engagement ring that matches timeless styles such as Art Deco, mid-century and other 20th century fashions.
          </div>
          <button className="consult-button">Contact us for consultation</button>
        </LeftSection>
        <RightSection>
          <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproductmain1.png?alt=media&token=ebecd04a-3bec-45e1-bbf6-767f4c94f890" alt="Product Image" />
        </RightSection>
      </Banner>

      <ListProduct>
      {[
          { href: '/details', name: 'Petite Pavé Leaf Halo Diamond Engagement Ring', price: '$13.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct6.png?alt=media&token=36f7203c-a296-48b0-8ad2-4bfb3105d102' },
          { href: '#', name: 'Shank Double Pavé Diamond Engagement Ring', price: '$16.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct2.png?alt=media&token=fa0d4535-33eb-4fcc-8a67-5ed310fd3f7f' },
          { href: '#', name: 'Shank Triple Pavé Diamond Engagement Ring', price: '$19.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct3.png?alt=media&token=29b58243-7981-4e8d-a6b3-2c964de6ab7d' },
          { href: '#', name: 'Graduated Milgrain Diamond Engagement Ring', price: '$11.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct4.png?alt=media&token=ed7b509a-55f7-4b14-a6c6-c46107d25acb' },
          { href: '#', name: 'Six-Prong Hand-Engraved Diamond Engagement Ring', price: '$13.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct5.png?alt=media&token=fcedf915-c5f5-4215-9226-7f8088c4102e' },
          { href: '#', name: 'Tapered Baguette Diamond Engagement Ring', price: '$15.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct6.png?alt=media&token=36f7203c-a296-48b0-8ad2-4bfb3105d102' },
          { href: '#', name: 'Shank Double Lave Diamond Engagement Ring', price: '$17.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct7.png?alt=media&token=6da53894-3b1f-47f6-8c95-e073e76c0dc7' },
          { href: '#', name: 'Stone Trapezoid Sidestone Diamond Ring', price: '$23.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct8.png?alt=media&token=50ddd742-2448-4e09-9294-d27c6d986543' },
          { href: '#', name: 'Petite Pavé Leaf Halo Diamond Engagement Ring', price: '$13.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct9.png?alt=media&token=55c3fb6a-569b-41cf-b994-b6d657424695' },
          { href: '#', name: 'Shank Double Pavé Diamond Engagement Ring', price: '$16.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct10.png?alt=media&token=e2150433-8343-47fc-b009-9f13d9d77349' },
          { href: '#', name: 'Shank Triple Pavé Diamond Engagement Ring', price: '$19.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct11.png?alt=media&token=e8d6c46c-fc91-4547-bfda-6aa6ded17c7f' },
                   
          ].map(product => (
            <ProductItem key={product.name}>
            <Link to={product.href}>
              <ProductImage src={product.imgSrc} alt={product.name} />
              <ItemName>{product.name}</ItemName>
              <Price>{product.price}</Price>
            </Link>
            <AddCartButton>
                <AddLink href="#">Add To Cart</AddLink>
            </AddCartButton>
            </ProductItem>
          ))}
        <CustomCard>
          <CustomCardContent>
            <CustomCardTitle>Don't see what you're looking for? <br /> Browse our full catalog</CustomCardTitle>
            <CustomButton>
              <a href="/all" className="link-add">Show All</a>
            </CustomButton>
          </CustomCardContent>
        </CustomCard>
      </ListProduct>

      <FAQs>
        <LeftFAQ>
          <h2>FAQs ABOUT PRODUCT</h2>
        </LeftFAQ>
        <Wrapper>
        {['Is rose gold a popular choice for engagement rings?', 'What gives rose gold its pink color?', 'Is rose gold more expensive than yellow gold?', 'Are rose gold engagement rings more durable than yellow gold rings?'].map((question, index) => (
  <div className={`faq ${activeIndex === index ? 'active' : ''}`} key={index}>
    <Accordion onClick={() => toggleAccordion(index)} >
      {question }
      <CaretDownOutlined/>
    </Accordion>
    <Panel className={activeIndex === index ? 'active' : ''}>
      <p>Copper alloy is added to yellow gold to create rose gold, and it also strengthens the gold, making it a more durable, tarnish-free option than a yellow gold engagement ring.</p>
    </Panel>
  </div>
))}
        </Wrapper>
      </FAQs>
    </Container>
 
  );
};

export default Product;
