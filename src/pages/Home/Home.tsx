// import { useEffect, useRef } from 'react';
// import { SwiperContainer, SwiperWrapper, SwiperSlide, SwiperButtonNext, SwiperButtonPrev, SwiperPagination } from './Home.styled';
// import Swiper from 'swiper';

// const Home = () => {
//     const swiperRef = useRef(null);

//     useEffect(() => {
//         if (swiperRef.current) {
//             const swiper = new Swiper(swiperRef.current, {
//                 navigation: {
//                     nextEl: ".swiper-button-next",
//                     prevEl: ".swiper-button-prev",
//                 },
//             });

//             return () => {
//                 swiper.destroy();
//             };
//         }
//     }, []);

//     return (
//         <SwiperContainer ref={swiperRef} className="mySwiper">
//             <SwiperWrapper>
//                 <SwiperSlide>
//                     <img src="" alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="/HomePage/Image/banner2.png" alt="" />
//                 </SwiperSlide>
//             </SwiperWrapper>
//             <SwiperButtonNext />
//             <SwiperButtonPrev />
//             <SwiperPagination />
//         </SwiperContainer>
//     );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import {
    Body,
    Banner,
    Categories,
    Container,
    Contain,
    DotGrid,
    Wrapper,
    Heading,
    Cate,
    CateImage,
    CateTitle,
    LeftButtonWrapper,
    RightButtonWrapper,
    Button,
    Shape,
    ShapeItem,
    LeftButtonShape,
    RightButtonShape,
    ButtonShape,
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
    Banner3Container
} from './Home.styled';

import { RightOutlined, LeftOutlined, ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import { Carousel } from 'antd';

const images = [
    'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner.png?alt=media&token=0394f1be-0bc6-47c3-9776-ec6edbb49a9f',
    'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner_4.png?alt=media&token=a6e6aabe-a969-4b02-8660-e44118da1b04',
    'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner_2.png?alt=media&token=4cedc076-d124-41fd-9ca2-d6fe32bf8f26',
    'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner_6.png?alt=media&token=f47c7382-21cb-4e21-95b0-e76f2581d19b'
];

const categories = [
    {
        href: '/product',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Frings.png?alt=media&token=c98d3b13-b088-4446-beec-818451532578',
        title: 'Rings'
    },
    {
        href: '#',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fnecklaces.png?alt=media&token=f93e37c0-56ba-465b-8cd4-bae4e0f2f01b',
        title: 'Necklaces'
    },
    {
        href: '#',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fearring.png?alt=media&token=9463ef63-fd14-469e-85c4-acaadab99c89',
        title: 'Earrings'
    },
    {
        href: '#',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbracelets.png?alt=media&token=153a1833-4a24-465d-8cd8-27e2e7d8bb73',
        title: 'Bracelets'
    },
    {
        href: '#',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fchokers.png?alt=media&token=87149e42-e447-49f3-a5f1-274054d33ffb',
        title: 'Chokers'
    },
    {
        href: '/product',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Frings.png?alt=media&token=c98d3b13-b088-4446-beec-818451532578',
        title: 'Rings'
    },
    {
        href: '#',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fnecklaces.png?alt=media&token=f93e37c0-56ba-465b-8cd4-bae4e0f2f01b',
        title: 'Necklaces'
    },
    {
        href: '#',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fearring.png?alt=media&token=9463ef63-fd14-469e-85c4-acaadab99c89',
        title: 'Earrings'
    }

];

const shapes = [
    { href: "#", imgSrc: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fround.png?alt=media&token=cadd1209-a915-4159-a1dd-391c7bad3b1a", title: "Round" },
    { href: "#", imgSrc: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fprincess.png?alt=media&token=42e764cf-1a58-45c8-b4d7-898f4f55a64d", title: "Princess" },
    { href: "#", imgSrc: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fheart.png?alt=media&token=486195d7-e4f8-4475-a3f8-eb4ebafb72e1", title: "Cushion" },
    { href: "#", imgSrc: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fround.png?alt=media&token=cadd1209-a915-4159-a1dd-391c7bad3b1a", title: "Oval" },
    { href: "#", imgSrc: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fprincess.png?alt=media&token=42e764cf-1a58-45c8-b4d7-898f4f55a64d", title: "Emerald" },
    { href: "#", imgSrc: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fheart.png?alt=media&token=486195d7-e4f8-4475-a3f8-eb4ebafb72e1", title: "Pear" },
    { href: "#", imgSrc: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fheart.png?alt=media&token=486195d7-e4f8-4475-a3f8-eb4ebafb72e1", title: "Asscher" },
    { href: "#", imgSrc: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fround.png?alt=media&token=cadd1209-a915-4159-a1dd-391c7bad3b1a", title: "Heart" },
    { href: "#", imgSrc: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fprincess.png?alt=media&token=42e764cf-1a58-45c8-b4d7-898f4f55a64d", title: "Radiant" },
    { href: "#", imgSrc: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fheart.png?alt=media&token=486195d7-e4f8-4475-a3f8-eb4ebafb72e1", title: "Marquise" }
    // Add more shapes as needed
];

const Home: React.FC = () => {
    type Carousel = /*unresolved*/ any
    const carouselRef = React.useRef<Carousel | null>(null);

    const handlePrev = () => {
        carouselRef.current?.prev();
    };

    const handleNext = () => {
        carouselRef.current?.next();
    };


    return (
        <Body>
            <Container>
                <Carousel arrows infinite={false}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                        </div>
                    ))}
                </Carousel>
                <Categories>
                    <Heading>
                        <h2 className="title-cate">CATEGORIES</h2>
                    </Heading>
                    <Contain>
                        <DotGrid>
                            <LeftButtonWrapper>
                                <Button className="left-button" onClick={handlePrev}>
                                    <LeftOutlined style={{ color: '#102c57', fontSize: '14px' }} />
                                </Button>
                            </LeftButtonWrapper>

                            <Carousel ref={carouselRef} slidesToShow={5} slidesToScroll={3} dots={false} infinite={false}>
                                {categories.map((category, index) => (
                                    <Cate key={index}>
                                        <CateImage>
                                            <a href={category.href}>
                                                <img src={category.imgSrc} alt={category.title} />
                                            </a>
                                        </CateImage>
                                        <div>
                                            <a href={category.href}>
                                                <CateTitle>{category.title}</CateTitle>
                                            </a>
                                        </div>
                                    </Cate>
                                ))}
                            </Carousel>

                            <RightButtonWrapper>
                                <Button className="right-button" onClick={handleNext}>
                                    <RightOutlined style={{ color: '#102c57', fontSize: '14px' }} />
                                </Button>
                            </RightButtonWrapper>
                        </DotGrid>
                    </Contain>
                </Categories>
                <Shape>
                    <Heading>
                        <h2 className="title">DIAMOND SHAPE</h2>
                    </Heading>
                    <ContainShape>
                        <DotGrid>
                            {/* <LeftButtonShape>
          <ButtonShape className="left-button">
            <ArrowLeftOutlined style={{color: '#fff', fontSize: '14px'}}/>
          </ButtonShape>
        </LeftButtonShape> */}

                            <Carousel slidesToShow={10} slidesToScroll={3} dots={false} infinite={false}>
                                {shapes.map((shape, index) => (
                                    <ShapeItem key={index}>
                                        <DotImage>
                                            <a href={shape.href}>
                                                <img src={shape.imgSrc} alt={shape.title} />
                                            </a>
                                        </DotImage>
                                        <DotInfo>
                                            <a href={shape.href}>
                                                <DotTitle>{shape.title}</DotTitle>
                                            </a>
                                        </DotInfo>
                                    </ShapeItem>
                                ))}
                            </Carousel>

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
                                        <a href="# " className="row-btn">SHOW DETAILS</a>
                                    </RowText>
                                    <RowImg>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbestseller3.png?alt=media&token=219690e8-3abd-4942-8d0d-5411bc93e596" alt="Bestseller" />
                                    </RowImg>
                                </div>
                            </Row>
                            <Row>
                                <div className="main-row">
                                    <RowText>
                                        <h6>Explore bestseller</h6>
                                        <h3>Pandora Droplets Earring</h3>
                                        <h5>$33.00</h5>
                                        <a href="# " className="row-btn">SHOW DETAILS</a>
                                    </RowText>
                                    <RowImg>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbestseller1.png?alt=media&token=db3cffe9-fc2c-48fd-b5f8-30a7a6bcf186" alt="Bestseller" />
                                    </RowImg>
                                </div>
                            </Row>
                            <Row>
                                <div className="main-row">
                                    <RowText>
                                        <h6>Explore bestseller</h6>
                                        <h3>Pandora Droplets Earring</h3>
                                        <h5>$33.00</h5>
                                        <a href="# " className="row-btn">SHOW DETAILS</a>
                                    </RowText>
                                    <RowImg>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbestseller2.png?alt=media&token=ab84bb96-fc47-4bd4-9ab1-e118f208d6f9" alt="Bestseller" />
                                    </RowImg>
                                </div>
                            </Row>

                        </FeatureContent>
                    </Container>
                </Feature>
                <Banner3>
                    <Banner3Container>
                        <h6>BST</h6>
                        <h2>GET READY!<br /> AUTUMN IS COMING...</h2>
                        <button>DO GET IT!</button>
                    </Banner3Container>
                </Banner3>
                <About id="about" className="about container">
                    <AboutImg>
                        <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fabout3.png?alt=media&token=f9133ffc-075b-494d-b4be-ceabdbd266f1" alt="About Us" />
                    </AboutImg>
                    <AboutText>
                        <h2>ABOUT OUR COMPANY</h2>
                        <p>Welcome to Aphromas Diamond, where the beauty and elegance of diamonds are celebrated in every piece of jewelry. With years of experience, we offer unique designs, exceptional quality, and professional service. Our mission is to create
                            jewelry that not only looks stunning but also carries deep meaning. We use the finest materials and craftsmanship to ensure every product is perfect. Our dedicated team is always ready to help you find the perfect piece, whether it's
                            a special gift, an engagement ring, or a set for a memorable occasion. Thank you for choosing Aphromas Diamond, where we strive to exceed your expectations with every diamond jewelry creation.</p>
                        <a href="# " className="row-btn">SHOW DETAILS</a>
                    </AboutText>
                </About>
            </Container>
        </Body>


    );

}

export default Home;


