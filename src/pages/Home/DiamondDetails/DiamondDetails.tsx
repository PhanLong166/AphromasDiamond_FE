import { useState } from 'react';
// import { Pagination } from 'antd';
import {  Breadcrumb  } from 'antd';
import styled from 'styled-components';
import {
  Body,
  Section,
  Container,
  Wrap,
  ProductDotGrid,
  Wrapper,
  ImageContainer,
  OuterThumb,
  ThumbnailImage,
  Item,
  OuterMain,
  MainImage,
  ProductDetail,
  Entry,
  Heading,
  Title,
  ProductRating,
  // ProductMetal,
  ProductInfo,
  // RingSizeContainer,
  // RingSizeSelect,
  // RingSizeHelp,
  ProductPrice,
  SelectButton,
  SelectionTitle,
  SelectName,
  ArrowIcon,
  ButtonContainer,
  Button,
  Shipping,
  ShippingList,
  ShippingItem,
  CurrentPrice,
  BeforePrice,
  Discount,
  Contain,
  Tabbed, 
  ProductAbout, 
  TextBlock, 
  DotGrid, 
  ListBlock, 
  Review, 
  ProductSection,
  ListProduct,
  ProductItem,
  ProductImage,
  ItemName,
  Price,
  AddCartButton,
  AddLink,
  HeadingTitle,
  // PageLink
} from './DiamondDetails.styled';
import {StarFilled, RightOutlined, GiftFilled, HomeFilled} from '@ant-design/icons';

const CustomBreadcrumb = styled(Breadcrumb)`
margin-left: 175px;
padding-top: 20px;
`;


const DiamondDetails = () => {
  const [mainImage, setMainImage] = useState('https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fdiamond4.png?alt=media&token=4edd602a-13fb-47bc-814a-1edb9e5d1ebd');
  const [selectedThumb, setSelectedThumb] = useState(0);

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };

  const [activeTab, setActiveTab] = useState('product-description');

    const showTab = (tabId: string) => {
        setActiveTab(tabId);
    };

 




  return (
    <Body>
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
            href: '/product',
          },
          {
            title: 'All Product',
            href: '/all',
          },
          {
            title: 'Ring - #012345',
          },
        ]}
      />
    </div>
    <Section>
      
      <Container>
        
        <Wrap>
          <ProductDotGrid>
            <Wrapper>
              <ImageContainer>
                <OuterThumb>
                  <ThumbnailImage>
                    {['https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fdiamond4.png?alt=media&token=4edd602a-13fb-47bc-814a-1edb9e5d1ebd', 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fdetail2.png?alt=media&token=c8bb1a0f-6aee-4b01-b6e8-0ff0f87cdf32', 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fdetail1.png?alt=media&token=082ad015-12bc-4c26-8328-716564f2896b'].map((src, index) => (
                      <Item
                        key={index}
                        className={selectedThumb === index ? 'selected' : ''}
                        onClick={() => changeImage(src, index)}
                      >
                        <img src={src} alt={`Thumb ${index + 1}`} />
                      </Item>
                    ))}
                  </ThumbnailImage>
                </OuterThumb>
                <OuterMain>
                  <MainImage>
                    <img id="mainImage" src={mainImage} alt="Main" />
                  </MainImage>
                </OuterMain>
              </ImageContainer>
            </Wrapper>
          </ProductDotGrid>
          <ProductDetail>
            <Entry>
              <Heading>
                <Title>Three-Stone Trapezoid Sidestone Diamond</Title>
                <ProductRating>
                  <StarFilled/>
                  <StarFilled/>
                  <StarFilled/>
                  <StarFilled/>
                  <StarFilled/>
                </ProductRating>
              </Heading>
              <ProductInfo>
                <div className="wrap">
                  <div className="info-box">SI2</div>
                  <div className="info-box">0.16carat</div>
                  <div className="info-box">1.80mm</div>
                </div>
              </ProductInfo>
              <ProductPrice>
              <div className="product-group">
                <div className="product-price">
                  <CurrentPrice>$37.50</CurrentPrice>
                  <div className="wrap">
                    <BeforePrice>$50.00</BeforePrice>
                    <Discount>-25%</Discount>
                  </div>
                </div>
              </div>
              </ProductPrice>
              
            </Entry>
            <div className="outlet">
              <SelectButton>
                <div>
                  <SelectionTitle>Select Voucher</SelectionTitle>
                  <SelectName>Anniversary Gifts 30% </SelectName>
                </div>
                <ArrowIcon><RightOutlined/></ArrowIcon>
              </SelectButton>
              <SelectButton>
                <div>
                  <SelectionTitle>Select Payment Method</SelectionTitle>
                  <SelectName>Payment via MoMo e-wallet</SelectName>
                </div>
                <ArrowIcon><RightOutlined/></ArrowIcon>
              </SelectButton>
              <ButtonContainer>
                <Button>ADD TO CART</Button>
                <Button>CHECKOUT</Button>
              </ButtonContainer>
              <Shipping>
                <ShippingList>
                  <ShippingItem>
                    <GiftFilled/>
                    <span>Free shipping & return</span>
                  </ShippingItem>
                  <ShippingItem>
                    <HomeFilled/>
                    <span>Estimate delivery:</span>
                    <span className="delivery">01 - 07 Jan, 2024</span>
                  </ShippingItem>
                </ShippingList>
              </Shipping>
            </div>
          </ProductDetail>
        </Wrap>
      </Container>
    </Section>
    <Contain>
            <div className="tabbed">
                <Tabbed>
                    <nav>
                        <ul className="wrapper">
                            <li 
                                id="tab-product-description" 
                                className={activeTab === 'product-description' ? 'active-tab' : ''}
                            >
                                <a href="#0" onClick={() => showTab('product-description')}>
                                    <span>Product detail</span>
                                </a>
                            </li>
                            <li 
                                id="tab-product-review" 
                                className={activeTab === 'product-review' ? '' : ''}
                            >
                                <a href="#0" onClick={() => showTab('product-review')}>
                                    <span>Reviews</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </Tabbed>
                <ProductAbout id="product-description" className={activeTab === 'product-description' ? 'active' : 'hide'}>
                    {/* Product detail content */}
                    <TextBlock>
                        <h3>Three-Stone Trapezoid Sidestone Diamond Ring</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?</p>
                        <p>Dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas.</p>
                    </TextBlock>
                    <DotGrid>
                        <div className="wrapper2">
                            <ListBlock>
                                <h4>What is this?</h4>
                                <ul>
                                    <li>ID Number: 501410r14</li>
                                    <li>Width: 2.00mm</li>
                                    <li>Quantity: 16</li>
                                    <li>Shape: Round</li>
                                    <li>Total Carat (Average): 0.24</li>
                                    <li>Color: I</li>
                                    <li>Clarity: SI2</li>
                                    <li>Setting Type: Pave </li>
                                </ul>
                            </ListBlock>
                            <ListBlock>
                                <h4>What makes our product unique?</h4>
                                <ul>
                                    <li>New style and pretty design.</li>
                                    <li>Our effort to design beautiful jewelry in top quality.</li>
                                </ul>
                            </ListBlock>
                            <ListBlock>
                                <h4>About?</h4>
                                <ul>
                                    <li>Lorem ipsum.</li>
                                    <li>Dolor sit amet consectetur adipisicing elit.</li>
                                </ul>
                            </ListBlock>
                        </div>
                    </DotGrid>
                </ProductAbout>
                <ProductAbout id="product-review" className={activeTab === 'product-review' ? 'active' : 'hide'}>
                    {/* Review content */}
                    <Review>
                        <div className="head-review">
                            <div className="sum-rating">
                                <strong>5.0</strong>
                                <span>3 reviews</span>
                            </div>
                            <button className="view-all-button">All</button>
                {/* <Pagination
                    current={current}
                    onChange={onChange}
                    total={50}
                    itemRender={(page, type, originalElement) => {
                    if (type === 'page') {
                    if (page === 1) {
                       return originalElement;
                    } else {
                        return <PageLink href={`/page-${page}`}>{page}</PageLink>;
                   }
                    }
                  return originalElement;
                   }}/> */}
   
                        </div>
                        <div className="body-review">
                            <div className="profile">
                                <div className="thumb-name">
                                    <div className="image">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt1.jpg?alt=media&token=fda03330-bebc-42a9-a7aa-568f2f9cdb9f" alt="" />
                                    </div>
                                    <div className="grouping">
                                        <div className="name">Olivia Williams</div>
                                        <div className="rating">
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>                                            
                                        </div>
                                        <div className="date grey-color">On November 10, 2021</div>
                                    </div>
                                </div>
                                <div className="comment">
                                    <strong>Awesome Product</strong>
                                    <p className="grey-color">Absolutely love my new diamond ring! It's elegant, timeless, and the perfect addition to my jewelry collection.</p>
                                </div>
                                <div className="reply">
                                    <strong>Seller's Feedback</strong>
                                    <p className="grey-color">Absolutely love my new diamond ring! It's elegant, timeless, and the perfect addition to my jewelry collection.</p>
                                    <div className="date grey-color">On November 10, 2021</div>
                                </div>
                            </div>
                            <div className="profile">
                                <div className="thumb-name">
                                    <div className="image">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt2.jpg?alt=media&token=31ba6ae3-17f5-4f7e-b1b3-d316d7019068" alt="" />
                                    </div>
                                    <div className="grouping">
                                        <div className="name">Phoenix Knight</div>
                                        <div className="rating">
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>                                            
                                        </div>
                                        <div className="date grey-color">On March 7, 2022</div>
                                    </div>
                                </div>
                                <div className="comment">
                                    <strong>Awesome Product</strong>
                                    <p className="grey-color">This diamond ring is truly magnificent and captivating, capturing attention with its radiant brilliance and undeniable allure.</p>
                                </div>
                                <div className="reply">
                                    <strong>Seller's Feedback</strong>
                                    <p className="grey-color">Absolutely love my new diamond ring! It's elegant, timeless, and the perfect addition to my jewelry collection.</p>
                                    <div className="date grey-color">On March 7, 2022</div>
                                </div>
                            </div>
                            <div className="profile">
                                <div className="thumb-name">
                                    <div className="image">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt3.jpg?alt=media&token=ade8454c-a9da-4cdc-89a3-74ebf5b5e387" alt="" />
                                    </div>
                                    <div className="grouping">
                                        <div className="name">Serena Sterling</div>
                                        <div className="rating">
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>
                                        <StarFilled style={{ color: '#D8A25A', fontSize: '16px'}}/>                                            
                                        </div>
                                        <div className="date grey-color">On October 16, 2022</div>
                                    </div>
                                </div>
                                <div className="comment">
                                    <strong>Awesome Product</strong>
                                    <p className="grey-color">The diamond on this ring has excellent clarity and radiance, capturing and refracting light in a mesmerizing display of brilliance and fire.</p>
                                </div>
                                <div className="reply">
                                    <strong>Seller's Feedback</strong>
                                    <p className="grey-color">Absolutely love my new diamond ring! It's elegant, timeless, and the perfect addition to my jewelry collection.</p>
                                    <div className="date grey-color">On October 16, 2022</div>
                                </div>
                            </div>
                        </div>
                    </Review>
                </ProductAbout>
            </div>
        </Contain>
        <ProductSection>
          <HeadingTitle>
          <h2>SAME BRAND</h2>
          </HeadingTitle>
                <ListProduct>
                  {[
                    { name: 'Petite Pavé Leaf Halo Diamond Engagement Ring', price: '$13.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct1.png?alt=media&token=8c409126-be7d-4d54-8475-3e3539ad9743' },
                    { name: 'Shank Double Pavé Diamond Engagement Ring', price: '$16.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct2.png?alt=media&token=fa0d4535-33eb-4fcc-8a67-5ed310fd3f7f' },
                    { name: 'Shank Triple Pavé Diamond Engagement Ring', price: '$19.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct3.png?alt=media&token=29b58243-7981-4e8d-a6b3-2c964de6ab7d' }
                  ].map(product => (
                    <ProductItem key={product.name}>
                      <ProductImage src={product.imgSrc} alt={product.name} />
                      <ItemName>{product.name}</ItemName>
                      <Price>{product.price}</Price>
                      <AddCartButton>
                      <AddLink href="#">Add To Cart</AddLink>
                      </AddCartButton>
                    </ProductItem>
                  ))}
                </ListProduct>
        </ProductSection>
        <ProductSection>
          <HeadingTitle>
          <h2>RECENTLY VIEWED</h2>
          </HeadingTitle>
                <ListProduct>
                  {[
                    { name: 'Shank Double Lave Diamond Engagement Ring', price: '$17.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct7.png?alt=media&token=6da53894-3b1f-47f6-8c95-e073e76c0dc7' },
                    { name: 'Stone Trapezoid Sidestone Diamond Ring', price: '$23.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct8.png?alt=media&token=50ddd742-2448-4e09-9294-d27c6d986543' },
                    { name: 'Six-Prong Hand-Engraved Diamond Engagement Ring', price: '$13.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct9.png?alt=media&token=55c3fb6a-569b-41cf-b994-b6d657424695' }
                  ].map(product => (
                    <ProductItem key={product.name}>
                      <ProductImage src={product.imgSrc} alt={product.name} />
                      <ItemName>{product.name}</ItemName>
                      <Price>{product.price}</Price>
                      <AddCartButton>
                      <AddLink href="#">Add To Cart</AddLink>
                      </AddCartButton>
                    </ProductItem>
                  ))}
                </ListProduct>
        </ProductSection>
        
    </Body>
  );
};

export default DiamondDetails;
