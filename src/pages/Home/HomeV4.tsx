import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../themes";
import { Row, Col, Typography, Pagination } from "antd";

const { Title } = Typography;
import {
  Body,
  Categories,
  Container,
  Contain,
  DotGrid,
  Heading,
  Cate,
  CateImage,
  CateTitle,
  Shape,
  ShapeItem,
  ContainShape,
  DotImage,
  DotTitle,
  Banner2,
  Feature,
  About,
  Banner4,
  Banner4Container,
  Banner3,
  Banner3Container,
  ProductItem,
  ProductImage,
  ItemName,
  Price,
  StyledImage,
  StyledContent,
  StyledText,
  ButtonSale,
  ButtonAbout,
  AboutText,
  AboutContent,
  ContainBrand,
  Brand,
  BrandItem,
} from "./HomeV4.styled";

import { Link } from "react-router-dom";
import { Carousel } from "antd";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner.png?alt=media&token=0394f1be-0bc6-47c3-9776-ec6edbb49a9f",
  "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner_4.png?alt=media&token=a6e6aabe-a969-4b02-8660-e44118da1b04",
  "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner_2.png?alt=media&token=4cedc076-d124-41fd-9ca2-d6fe32bf8f26",
  "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner_6.png?alt=media&token=f47c7382-21cb-4e21-95b0-e76f2581d19b",
];

const categories = [
  {
    href: "/product",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Frings.png?alt=media&token=c98d3b13-b088-4446-beec-818451532578",
    title: "Rings",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fnecklaces.png?alt=media&token=f93e37c0-56ba-465b-8cd4-bae4e0f2f01b",
    title: "Necklaces",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fearring.png?alt=media&token=9463ef63-fd14-469e-85c4-acaadab99c89",
    title: "Earrings",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbracelets.png?alt=media&token=153a1833-4a24-465d-8cd8-27e2e7d8bb73",
    title: "Bracelets",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fchokers.png?alt=media&token=87149e42-e447-49f3-a5f1-274054d33ffb",
    title: "Chokers",
  },
  {
    href: "/product",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FAnklets.png?alt=media&token=4e1b0051-2862-46d2-bfc4-5063adf2995b",
    title: "Anklets",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FBangles.png?alt=media&token=9e311318-1224-4c59-9c64-12a552139b90",
    title: "Bangles",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FPendants.png?alt=media&token=952c14cf-4c39-4560-b9e2-79a4ff31258d",
    title: "Pendants",
  },
];

const shapes = [
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Froundshape.jpg?alt=media&token=7b5a2b64-dd48-4820-b629-95ca68b70d42",
    title: "Round",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fprincessshape.jpg?alt=media&token=c60b33dd-8ef7-4661-98a3-978f0483f8fc",
    title: "Princess",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fcushionshap.jpg?alt=media&token=67d271c0-d75d-498d-b75c-d35048749069",
    title: "Cushion",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fovalshape.jpg?alt=media&token=500f0670-bc32-44d4-8acb-623705a3333c",
    title: "Oval",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Femeraldshape.jpg?alt=media&token=63a5cedb-652c-4391-86e3-6f4114caa8de",
    title: "Emerald",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fpearshape.jpg?alt=media&token=406f5c80-251c-479e-8264-f3044beccd62",
    title: "Pear",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fasschershape.jpg?alt=media&token=365da7a9-f60c-4fd4-989f-dd6e35e39009",
    title: "Asscher",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fheartshape.jpg?alt=media&token=877c29bb-5993-48fc-9f40-c33152dfb622",
    title: "Heart",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fradiantshape.jpg?alt=media&token=9848b421-1322-466c-837c-fda46cb3807a",
    title: "Radiant",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fmarquiseshape.jpg?alt=media&token=bb18d51b-1230-4829-a677-2ec98998b215",
    title: "Marquise",
  },
  // Add more shapes as needed
];

const brand = [
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FBvlgari.png?alt=media&token=9702661b-d3a5-49b5-9bf7-87adc932fa7d",
    title: "Bvlgari",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FCartier.jpg?alt=media&token=e8d641af-9dd1-41a4-9375-9e3eeb687a71",
    title: "Cartier",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FHarryWinston.png?alt=media&token=55b3feaa-45ca-406d-bdb1-bf11582eeeba",
    title: "Harry Winston",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FTiffany%26Co..png?alt=media&token=f9e75673-a2bc-4b37-9ffc-589ddc1fca20",
    title: "Tiffany & Co.",
  },

  // Add more shapes as needed
];

const products = [
  {
    href: "/details",
    name: "Petite Pavé Leaf Halo Diamond Engagement Ring",
    price: "$13.99",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct6.png?alt=media&token=36f7203c-a296-48b0-8ad2-4bfb3105d102",
  },
  {
    href: "#",
    name: "Shank Double Pavé Diamond Engagement Ring",
    price: "$16.99",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct2.png?alt=media&token=fa0d4535-33eb-4fcc-8a67-5ed310fd3f7f",
  },
  {
    href: "#",
    name: "Shank Triple Pavé Diamond Engagement Ring",
    price: "$19.99",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct3.png?alt=media&token=29b58243-7981-4e8d-a6b3-2c964de6ab7d",
  },
  {
    href: "#",
    name: "Graduated Milgrain Diamond Engagement Ring",
    price: "$11.00",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct4.png?alt=media&token=ed7b509a-55f7-4b14-a6c6-c46107d25acb",
  },
  {
    href: "#",
    name: "Six-Prong Hand-Engraved Diamond Engagement Ring",
    price: "$13.00",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct5.png?alt=media&token=fcedf915-c5f5-4215-9226-7f8088c4102e",
  },
  {
    href: "#",
    name: "Tapered Baguette Diamond Engagement Ring",
    price: "$15.00",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct6.png?alt=media&token=36f7203c-a296-48b0-8ad2-4bfb3105d102",
  },
  {
    href: "#",
    name: "Shank Double Lave Diamond Engagement Ring",
    price: "$17.00",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct7.png?alt=media&token=6da53894-3b1f-47f6-8c95-e073e76c0dc7",
  },
  {
    href: "#",
    name: "Stone Trapezoid Sidestone Diamond Engagement Ring",
    price: "$23.00",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct8.png?alt=media&token=50ddd742-2448-4e09-9294-d27c6d986543",
  },
];

const HomeV4: React.FC = () => {
  type Carousel = /*unresolved*/ any;
  const carouselRef = React.useRef<Carousel | null>(null);
  const StyledCarousel = styled(Carousel)`
    .slick-slide {
      display: flex;
      justify-content: center;
    }

    .slick-dots {
      bottom: -10px;
    }

    .slick-dots li {
      margin: 0 2px;
    }

    .slick-dots li button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${theme.color.primary};
      justify-content: center;
    }

    .slick-dots li.slick-active button {
      background: ${theme.color.primary};
      justify-content: center;
    }
  `;
  const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  `;
  const pageSize = 4;
  const [current, setCurrent] = useState(1);

  const handlePageChange = (page) => {
    setCurrent(page);
  };

  const paginatedProducts = products.slice(
    (current - 1) * pageSize,
    current * pageSize
  );

  return (
    <Body>
      <Container>
        <Carousel arrows infinite={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "450px", objectFit: "cover" }}
              />
            </div>
          ))}
        </Carousel>
        <Categories>
          <Heading>
            <h5>JEWELRY</h5>
            <h2 className="title-cate">BY CATEGORIES</h2>
          </Heading>
          <Contain>
            <DotGrid>
              <StyledCarousel
                slidesToShow={5}
                slidesToScroll={3}
                dots={true}
                infinite={false}
              >
                {categories.map((category, index) => (
                  <Cate key={index}>
                    <StyledLink to={category.href}>
                      <CateImage>
                        <img src={category.imgSrc} alt={category.title} />
                      </CateImage>

                      <CateTitle>{category.title}</CateTitle>
                    </StyledLink>
                  </Cate>
                ))}
              </StyledCarousel>
            </DotGrid>
          </Contain>
        </Categories>
        <Shape>
          <Heading>
            <h5>DIAMONDS</h5>
            <h2 className="title">BY SHAPES</h2>
          </Heading>
          <ContainShape>
            <DotGrid>
              <StyledCarousel
                slidesToShow={4}
                slidesToScroll={3}
                dots={true}
                infinite={false}
                arrows={false}
              >
                {shapes.map((shape, index) => (
                  <ShapeItem key={index}>
                    <DotImage>
                      <Link to={shape.href}>
                        <img src={shape.imgSrc} alt={shape.title} />
                      </Link>
                      <DotTitle>{shape.title}</DotTitle>
                    </DotImage>
                  </ShapeItem>
                ))}
              </StyledCarousel>
            </DotGrid>
          </ContainShape>
        </Shape>
        <Banner2>
          <Row gutter={[0, 0]}>
            <Col xs={24} md={12}>
              <StyledImage
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fmodel.f0d74.jpg?alt=media&token=912a91dc-09f3-43f4-8708-5246d4c912ab"
                alt=""
              />
            </Col>
            <Col xs={24} md={12}>
              <StyledContent>
                <Title
                  level={5}
                  className="super"
                  style={{ paddingBottom: "0" }}
                >
                  SUPER SALE
                </Title>
                <Title level={2} className="upTo" style={{}}>
                  UP TO 50%
                </Title>
                <StyledText>
                  Don't miss out on our Dazzling Deals! For a limited time,
                  enjoy an incredible 50% off on a wide range of products.
                  Whether you're looking to upgrade your tech, refresh your
                  wardrobe, or find the perfect gift, now is the perfect time to
                  save big!
                </StyledText>
                <ButtonSale>
                  <button>SHOP NOW</button>
                </ButtonSale>
              </StyledContent>
            </Col>
          </Row>
        </Banner2>
        <Feature>
          <Row gutter={[16, 25]} style={{ height: "100%" }}>
            <Col span={24}>
              <Title
                level={5}
                className="main-title little"
                style={{ paddingBottom: "0", paddingLeft: "8px" }}
              >
                PRODUCT BY
              </Title>
              <Title
                level={2}
                className="main-title best"
                style={{ paddingLeft: "8px", marginTop: "20px" }}
              >
                NOW TRENDING
              </Title>
            </Col>
            <Col
              span={8}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {paginatedProducts.slice(0, 2).map((product, index) => (
                <ProductItem
                  key={product.name}
                  style={{ marginBottom: index === 0 ? "16px" : "0" }}
                >
                  <Link to={product.href}>
                    <ProductImage src={product.imgSrc} alt={product.name} />
                    <ItemName>{product.name}</ItemName>
                    <Price>{product.price}</Price>
                  </Link>
                </ProductItem>
              ))}
            </Col>
            <Col
              span={8}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {paginatedProducts.slice(2, 4).map((product, index) => (
                <ProductItem
                  key={product.name}
                  style={{ marginBottom: index === 0 ? "16px" : "0" }}
                >
                  <Link to={product.href}>
                    <ProductImage src={product.imgSrc} alt={product.name} />
                    <ItemName>{product.name}</ItemName>
                    <Price>{product.price}</Price>
                  </Link>
                </ProductItem>
              ))}
            </Col>
            <Col span={8} style={{ paddingLeft: "16px" }}>
              <div className="custom-cover">
                <img
                  alt="example"
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FEAR_x2.png?alt=media&token=1325ae2e-f30b-4c1f-9886-fb4bb49a8783"
                />
                <div className="overlay">
                  <Title level={2} style={{ color: "white" }}>
                    The brilliance of diamond masterpieces!
                  </Title>
                  <button>SHOP NOW!</button>
                </div>
              </div>
            </Col>
            <Col span={16}>
              <Pagination
                className="pageBest"
                current={current}
                pageSize={pageSize}
                total={products.length}
                onChange={handlePageChange}
              />
            </Col>
          </Row>
        </Feature>
        <Banner4>
          <Banner4Container>
            <h6>HAPPY</h6>
            <h2>VALENTINE'S DAY!</h2>
            <h6>
              Celebrate Valentine's Day with our exclusive diamond jewelry sale!
              Find the perfect gift to express your love with our stunning
              selection of diamond pieces. From elegant necklaces to dazzling
              rings, our collection is designed to make this Valentine's Day
              truly unforgettable.
            </h6>
            <button>SHOPPING NOW!</button>
          </Banner4Container>
        </Banner4>
        <Banner3>
          <Banner3Container>
            <h6>BST</h6>
            <h2>
              GET READY!
              <br /> AUTUMN IS COMING...
            </h2>
            <button>DO GET IT!</button>
          </Banner3Container>
        </Banner3>
        <Brand>
          <Heading>
            <h5>DISCOVER</h5>
            <h2 className="title">POPULAR BRANDS</h2>
          </Heading>
          <ContainBrand>
            <DotGrid>
              <Carousel
                slidesToShow={4}
                slidesToScroll={3}
                dots={true}
                infinite={false}
                arrows={false}
              >
                {brand.map((brands, index) => (
                  <BrandItem key={index}>
                    <DotImage>
                      <Link to={brands.href}>
                        <img src={brands.imgSrc} alt={brands.title} />
                      </Link>
                      <DotTitle>{brands.title}</DotTitle>
                    </DotImage>
                  </BrandItem>
                ))}
              </Carousel>
            </DotGrid>
          </ContainBrand>
        </Brand>
        <About id="about" className="about container">
          <Row gutter={[0, 0]}>
            <Col xs={24} md={12}>
              <AboutContent>
                <Title level={2} className="about" style={{}}>
                  ABOUT OUR COMPANY
                </Title>
                <AboutText>
                  Welcome to Aphromas Diamond, where the beauty and elegance of
                  diamonds are celebrated in every piece of jewelry. With years
                  of experience, we offer unique designs, exceptional quality,
                  and professional service. Our mission is to create jewelry
                  that not only looks stunning but also carries deep meaning. We
                  use the finest materials and craftsmanship to ensure every
                  product is perfect. Our dedicated team is always ready to help
                  you find the perfect piece, whether it's a special gift, an
                  engagement ring, or a set for a memorable occasion. Thank you
                  for choosing Aphromas Diamond, where we strive to exceed your
                  expectations with every diamond jewelry creation.
                </AboutText>
                <ButtonAbout>
                  <button>SHOP NOW</button>
                </ButtonAbout>
              </AboutContent>
            </Col>
            <Col xs={24} md={12}>
              <StyledImage
                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FValuing-a-Jewelry-Store-1080x675.jpg?alt=media&token=2811a397-f833-4161-907c-a252db575b26"
                alt=""
              />
            </Col>
          </Row>
        </About>
      </Container>
    </Body>
  );
};

export default HomeV4;
