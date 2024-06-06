import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../themes";
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
  LeftButtonWrapper,
  RightButtonWrapper,
  Button,
  Shape,
  ShapeItem,
  ContainShape,
  DotImage,
  DotInfo,
  DotTitle,
  Banner2,
  Banner2Container,
  Countdown,
  Square,
  Feature,
  FeatureContent,
  Row,
  RowText,
  RowImg,
  About,
  AboutImg,
  AboutText,
  Banner3,
  Banner3Container,
} from "./HomeV2.styled";

import {
  RightOutlined,
  LeftOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
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

const HomeV2: React.FC = () => {
  type Carousel = /*unresolved*/ any;
  const carouselRef = React.useRef<Carousel | null>(null);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };
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
      background:${theme.color.primary}; 
      justify-content: center;
    }
  `;

  

  return (
    <Body>
      <Container>
        <Carousel arrows infinite={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "500px", objectFit: "cover" }}
              />
            </div>
          ))}
        </Carousel>
        <Categories>
          <Heading>
            <h5>JEWELRY</h5>
            <h2 className="title-cate">SHOP BY CATEGORIES</h2>
          </Heading>
          <Contain>
            <DotGrid>
              <LeftButtonWrapper>
                <Button className="left-button" onClick={handlePrev}>
                  <LeftOutlined
                    style={{ color: "#102c57", fontSize: "14px" }}
                  />
                </Button>
              </LeftButtonWrapper>

              <Carousel
                ref={carouselRef}
                slidesToShow={5}
                slidesToScroll={3}
                dots={false}
                infinite={false}
              >
                {categories.map((category, index) => (
                  <Cate key={index}>
                    <CateImage>
                      <Link to={category.href}>
                        <img src={category.imgSrc} alt={category.title} />
                      </Link>
                    </CateImage>
                    <div>
                      <Link to={category.href}>
                        <CateTitle>{category.title}</CateTitle>
                      </Link>
                    </div>
                  </Cate>
                ))}
              </Carousel>

              <RightButtonWrapper>
                <Button className="right-button" onClick={handleNext}>
                  <RightOutlined
                    style={{ color: "#102c57", fontSize: "14px" }}
                  />
                </Button>
              </RightButtonWrapper>
            </DotGrid>
          </Contain>
        </Categories>
        <Shape>
          <Heading>
            <h5>DIAMONDS</h5>
            <h2 className="title">SHOP BY SHAPES</h2>
          </Heading>
          <ContainShape>
            <DotGrid>
              {/* <LeftButtonShape>
          <ButtonShape className="left-button">
            <ArrowLeftOutlined style={{color: '#fff', fontSize: '14px'}}/>
          </ButtonShape>
        </LeftButtonShape> */}

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

              {/* <RightButtonShape>
          <ButtonShape className="right-button">
             <ArrowRightOutlined style={{color: '#fff', fontSize: '14px'}}/>
          </ButtonShape>
        </RightButtonShape> */}
            </DotGrid>
          </ContainShape>
        </Shape>
        <Banner2>
          <Banner2Container>
            <h6>SUPER SALE</h6>
            <h2>UP TO 50%</h2>
            <Countdown>
              <Square>
                <span>28</span>
                <span>DAYS</span>
              </Square>
              <Square>
                <span>28</span>
                <span>HRS</span>
              </Square>
              <Square>
                <span>28</span>
                <span>MINS</span>
              </Square>
              <Square>
                <span>28</span>
                <span>SECS</span>
              </Square>
            </Countdown>
            <button>SHOP NOW</button>
          </Banner2Container>
        </Banner2>
        <Feature>
          <Container>
            <h2 className="title-best">BESTSELLER</h2>
            {/* <div className="nav-buttons">
                        <button className="nav-button prev-button"><LeftOutlined/></button>
                        <button className="nav-button next-button"><RightOutlined/></button>
                    </div> */}
            <FeatureContent>
              <Row>
                <div className="main-row">
                  <RowText>
                    <h6>Explore bestseller</h6>
                    <h3>Pandora Droplets Earring</h3>
                    <h5>$33.00</h5>
                    <a href="# " className="row-btn">
                      SHOW DETAILS
                    </a>
                  </RowText>
                  <RowImg>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbestseller3.png?alt=media&token=219690e8-3abd-4942-8d0d-5411bc93e596"
                      alt="Bestseller"
                    />
                  </RowImg>
                </div>
              </Row>
              <Row>
                <div className="main-row">
                  <RowText>
                    <h6>Explore bestseller</h6>
                    <h3>Pandora Droplets Earring</h3>
                    <h5>$33.00</h5>
                    <a href="# " className="row-btn">
                      SHOW DETAILS
                    </a>
                  </RowText>
                  <RowImg>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbestseller1.png?alt=media&token=db3cffe9-fc2c-48fd-b5f8-30a7a6bcf186"
                      alt="Bestseller"
                    />
                  </RowImg>
                </div>
              </Row>
              <Row>
                <div className="main-row">
                  <RowText>
                    <h6>Explore bestseller</h6>
                    <h3>Pandora Droplets Earring</h3>
                    <h5>$33.00</h5>
                    <a href="# " className="row-btn">
                      SHOW DETAILS
                    </a>
                  </RowText>
                  <RowImg>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbestseller2.png?alt=media&token=ab84bb96-fc47-4bd4-9ab1-e118f208d6f9"
                      alt="Bestseller"
                    />
                  </RowImg>
                </div>
              </Row>
            </FeatureContent>
          </Container>
        </Feature>
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
        <About id="about" className="about container">
          <AboutImg>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fabout%20(2).png?alt=media&token=ebc8d076-ccd5-4488-829c-adc79de3b144"
              alt="About Us"
            />
          </AboutImg>
          <AboutText>
            <h2>ABOUT OUR COMPANY</h2>
            <p>
              Welcome to Aphromas Diamond, where the beauty and elegance of
              diamonds are celebrated in every piece of jewelry. With years of
              experience, we offer unique designs, exceptional quality, and
              professional service. Our mission is to create jewelry that not
              only looks stunning but also carries deep meaning. We use the
              finest materials and craftsmanship to ensure every product is
              perfect. Our dedicated team is always ready to help you find the
              perfect piece, whether it's a special gift, an engagement ring, or
              a set for a memorable occasion. Thank you for choosing Aphromas
              Diamond, where we strive to exceed your expectations with every
              diamond jewelry creation.
            </p>
            <a href="# " className="row-btn">
              SHOW DETAILS
            </a>
          </AboutText>
        </About>
      </Container>
    </Body>
  );
};

export default HomeV2;
