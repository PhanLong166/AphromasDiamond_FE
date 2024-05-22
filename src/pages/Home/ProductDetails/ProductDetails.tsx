import { useState } from 'react';
import {
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
  ProductMetal,
  ProductCarat,
  RingSizeContainer,
  RingSizeSelect,
  RingSizeHelp,
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
  Discount
} from './ProductDetails.styled';

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState('/ProductDetailsPage/Image/item1.png');
  const [selectedThumb, setSelectedThumb] = useState(0);

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };


  return (
    <Section>
      <Container>
        <Wrap>
          <ProductDotGrid>
            <Wrapper>
              <ImageContainer>
                <OuterThumb>
                  <ThumbnailImage>
                    {['/ProductDetailsPage/Image/item1.png', '/ProductDetailsPage/Image/item2.png', '/ProductDetailsPage/Image/item3.png', '/ProductDetailsPage/Image/item4.png'].map((src, index) => (
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
                <Title>Three-Stone Trapezoid Sidestone Diamond Ring</Title>
                <ProductRating>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                </ProductRating>
              </Heading>
              <ProductMetal>
                <span className="fill">Metal Type:</span>
                <div className="wrap">
                  <button className="white selected"><span>14k</span></button>
                  <button className="yellow"><span>14k</span></button>
                  <button className="rose"><span>14k</span></button>
                  <button className="platinum"><span>Pt</span></button>
                </div>
              </ProductMetal>
              <ProductCarat>
                <span className="fill">Total carat:</span>
                <div className="wrap">
                  <button disabled>0.25</button>
                  <button>0.5</button>
                  <button className="selected">1</button>
                  <button>2</button>
                </div>
              </ProductCarat>
              <RingSizeContainer>
                <RingSizeSelect name="ring-size" id="ring-size">
                  <option value="" disabled selected>Ring Size</option>
                  {[...Array(13).keys()].map((_, i) => (
                    <option key={i + 8} value={i + 8}>{i + 8}</option>
                  ))}
                </RingSizeSelect>
                <RingSizeHelp href="#">Ring size help</RingSizeHelp>
              </RingSizeContainer>
              <div className="product-group">
                <div className="product-price">
                  <CurrentPrice>$45.00</CurrentPrice>
                  <div className="wrap">
                    <BeforePrice>$50.00</BeforePrice>
                    <Discount>-25%</Discount>
                  </div>
                </div>
              </div>
            </Entry>
            <div className="outlet">
              <SelectButton>
                <div>
                  <SelectionTitle>Select Voucher</SelectionTitle>
                  <SelectName>Anniversary Gifts 30% </SelectName>
                </div>
                <ArrowIcon><i className='bx bx-chevron-right'></i></ArrowIcon>
              </SelectButton>
              <SelectButton>
                <div>
                  <SelectionTitle>Select Payment Method</SelectionTitle>
                  <SelectName>Payment via MoMo e-wallet</SelectName>
                </div>
                <ArrowIcon><i className='bx bx-chevron-right'></i></ArrowIcon>
              </SelectButton>
              <ButtonContainer>
                <Button>ADD TO CART</Button>
                <Button>CHECKOUT</Button>
              </ButtonContainer>
              <Shipping>
                <ShippingList>
                  <ShippingItem>
                    <i className='bx bxs-gift'></i>
                    <span>Free shipping & return</span>
                  </ShippingItem>
                  <ShippingItem>
                    <i className='bx bx-home-smile'></i>
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
  );
};

export default ProductDetails;
