import React, { useState } from 'react';
import {

  Container,
  Banner,
  LeftSection,
  RightSection,
  ProductList,
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


const Product: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <Container>
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
          <img src="/ProductPage/Image/banner.png" alt="Product Image" />
        </RightSection>
      </Banner>

      <ProductList>
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductItem key={index}>
            <a href="/ProductDetailsPage/Main/details.html">
              <ProductImage src={`./ProductPage/Image/product${index % 6 + 1}.png`} alt="" />
            </a>
            <a href="/ProductDetailsPage/Main/details.html">
              <ItemName>Petite Pavé Leaf Halo Diamond Engagement Ring</ItemName>
            </a>
            <Price>$13.99</Price>
            <AddCartButton>
            <AddLink href="#">Add To Cart</AddLink>
            </AddCartButton>
          </ProductItem>
        ))}
        <CustomCard>
          <CustomCardContent>
            <CustomCardTitle>Don't see what you're looking for? <br /> Browse our full catalog</CustomCardTitle>
            <CustomButton>
              <a href="/AllProductPage/Main/index.html" className="link-add">Show All</a>
            </CustomButton>
          </CustomCardContent>
        </CustomCard>
      </ProductList>

      <FAQs>
        <LeftFAQ>
          <h2>FAQs ABOUT PRODUCT</h2>
        </LeftFAQ>
        <Wrapper>
          {['Is rose gold a popular choice for engagement rings?', 'What gives rose gold its pink color?', 'Is rose gold more expensive than yellow gold?', 'Are rose gold engagement rings more durable than yellow gold rings?'].map((question, index) => (
            <div className={`faq ${activeIndex === index ? 'active' : ''}`} key={index}>
              <Accordion onClick={() => toggleAccordion(index)}>
                {question}
                <i className='bx bx-chevron-down'></i>
              </Accordion>
              <Panel style={{ display: activeIndex === index ? 'block' : 'none' }}>
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
