import React, { useState } from "react";
import { Row, Col, Typography, Pagination } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
const { Title, Text } = Typography;

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
  Banner2Container,
  Feature,
  About,
  Banner4,
  Banner4Container,
  Banner3,
  Banner3Container,
  StyledImage,
  StyledContent,
  StyledText,
  ButtonSale,
  ButtonAbout,
  AboutText,
  AboutContent,
  AboutContainer,
  ContainBrand,
  Brand,
  BrandItem,
  Button,
  BannerContent,
  Banner,
  StyledCarousel,
  StyledLink,
  StyledCard,
} from "./Home.styled";

import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import config from "@/config";
import { useDocumentTitle } from "@/hooks";

const categories = [
  {
    href: `${config.routes.public.productList}`,
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
    href: "/list",
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
    href: "/brand",
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

interface Product {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  hoverImage: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "SOFIA TWO FINGER RING",
    price: 100,
    salePrice: 98,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_1.webp?alt=media&token=a7ebfeca-9fa1-4250-887f-69a7cdd0e11a",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_2.webp?alt=media&token=e043514e-f66c-4397-987e-27a44ea87578",
  },
  {
    id: 2,
    name: "RAIN SOLITARY RING",
    price: 59,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp2_1.webp?alt=media&token=8d8f6760-e2ac-45eb-8c6b-880ff64e95bc",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp2_2.webp?alt=media&token=bc0adf15-7ad9-4507-8d17-e8a27d624417",
  },

  {
    id: 3,
    name: "GALA STAMP RING",
    price: 100,
    salePrice: 90,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp3_1.webp?alt=media&token=7dd02d2a-24f9-4b31-a809-bccfa25cefde",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp3_2.webp?alt=media&token=330beb5e-ee10-429c-8b8b-1df54073a294",
  },
  {
    id: 4,
    name: "THE ROCKS RING SET",
    price: 185,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp4_1.webp?alt=media&token=bdc15cce-29cd-401c-bf79-105b6bc66592",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp4_2.webp?alt=media&token=90ee67f1-59c9-42b4-b851-ddc2104a96a4",
  },
  {
    id: 5,
    name: "DIAMONDS AND GOLD BALANCE RING",
    price: 520,
    salePrice: 445,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp5_1.webp?alt=media&token=e29bfcd0-9170-4bd9-ba64-c58326decdaa",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp5_2.webp?alt=media&token=9867ffe1-d125-4ff7-906f-0fc95e993761",
  },
  {
    id: 6,
    name: "DIAMONDS AND GOLD NORA RING",
    price: 585,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp6_1.webp?alt=media&token=1239447c-a395-4239-8bde-1e6f7f7730ed",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp6_2.webp?alt=media&token=775559ab-5d42-4b24-9e0b-d95b173c07c6",
  },

  {
    id: 7,
    name: "DIAMONDS ETERNITY MINI RING",
    price: 900,
    salePrice: 845,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp7_1.webp?alt=media&token=146832c4-dd52-4901-aae7-49853ac469eb",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp7_2.webp?alt=media&token=932b6133-fe30-46c5-861a-4efed29340fc",
  },
  {
    id: 8,
    name: "DIAMONDS AND GOLD LOOP RING",
    price: 585,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp8_1.webp?alt=media&token=0b64e6fb-9eed-4acb-b2b5-1fbaa4434458",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp8_2.webp?alt=media&token=2011db85-85f2-4c8c-a18b-1ebfabe24965",
  },
];

const Home: React.FC = () => {
  useDocumentTitle('Aphromas Diamond')
  
  
  const pageSize = 4;
  const [current, setCurrent] = useState(1);

  const handlePageChange = (page: any) => {
    setCurrent(page);
  };

  const paginatedProducts = products.slice(
    (current - 1) * pageSize,
    current * pageSize
  );
  const [wishList, setWishList] = useState<number[]>([]);

  const toggleWishList = (productId: number) => {
    setWishList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const navigate = useNavigate();

  return (
    <Body>
      <Container>
        <Banner>
          <BannerContent>
            <h2>To Love and Cherish</h2>
            <p>
              Discover timeless elegance with our exquisite diamond jewelry,
              crafted to celebrate your most cherished moments. Each piece is
              designed to embody the essence of love and sophistication, making
              it perfect for commemorating special occasions. Indulge in our
              luxurious collection and let our jewelry be a symbol of your
              everlasting memories.
            </p>
            <Button>
              <button
                className="shopAll"
                onClick={() => navigate(config.routes.public.allProduct)}
              >
                SHOP ALL
              </button>
              <button className="shopSale">SHOP SALE JEWELRY</button>
            </Button>
          </BannerContent>
        </Banner>
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
          <Banner2Container>
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
                  <Heading>
                    <h2 className="title">UP TO 50%</h2>
                  </Heading>
                  <StyledText>
                    Don't miss out on our Dazzling Deals! For a limited time,
                    enjoy an incredible 50% off on a wide range of products.
                    Whether you're looking to upgrade your tech, refresh your
                    wardrobe, or find the perfect gift, now is the perfect time
                    to save big!
                  </StyledText>
                  <ButtonSale>
                    <button>SHOP NOW</button>
                  </ButtonSale>
                </StyledContent>
              </Col>
            </Row>
          </Banner2Container>
        </Banner2>
        <Feature>
          <Row gutter={[16, 16]} style={{ height: "100%" }}>
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
                <div
                  key={product.id}
                  className="card-wrapper"
                  style={{ marginBottom: index === 0 ? "16px" : "0" }}
                >
                  <StyledCard
                    style={{ borderRadius: "0", height: "100%" }}
                    hoverable
                    className="product-card"
                    cover={
                      <>
                        <img
                          style={{ borderRadius: "0" }}
                          src={product.image}
                          alt={product.name}
                          className="product-image"
                          onMouseOver={(e) =>
                            (e.currentTarget.src = product.hoverImage)
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.src = product.image)
                          }
                        />
                        {product.salePrice && (
                          <div className="sale-badge">SALE</div>
                        )}
                      </>
                    }
                  >
                    <div className="product-info">
                      <Title level={4} className="product-name">
                        {product.name}
                        {wishList.includes(product.id) ? (
                          <HeartFilled
                            className="wishlist-icon"
                            onClick={() => toggleWishList(product.id)}
                          />
                        ) : (
                          <HeartOutlined
                            className="wishlist-icon"
                            onClick={() => toggleWishList(product.id)}
                          />
                        )}
                      </Title>
                      <div className="price-container">
                        <Text className="product-price">
                          $
                          {product.salePrice
                            ? product.salePrice
                            : product.price}
                        </Text>
                        {product.salePrice && (
                          <Text delete className="product-sale-price">
                            ${product.price}
                          </Text>
                        )}
                      </div>
                    </div>
                  </StyledCard>
                </div>
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
                <div
                  key={product.id}
                  className="card-wrapper"
                  style={{ marginBottom: index === 0 ? "16px" : "0" }}
                >
                  <StyledCard
                    style={{ borderRadius: "0", height: "100%" }}
                    hoverable
                    className="product-card"
                    cover={
                      <>
                        <img
                          style={{ borderRadius: "0" }}
                          src={product.image}
                          alt={product.name}
                          className="product-image"
                          onMouseOver={(e) =>
                            (e.currentTarget.src = product.hoverImage)
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.src = product.image)
                          }
                        />
                        {product.salePrice && (
                          <div className="sale-badge">SALE</div>
                        )}
                      </>
                    }
                  >
                    <div className="product-info">
                      <Title level={4} className="product-name">
                        {product.name}
                        {wishList.includes(product.id) ? (
                          <HeartFilled
                            className="wishlist-icon"
                            onClick={() => toggleWishList(product.id)}
                          />
                        ) : (
                          <HeartOutlined
                            className="wishlist-icon"
                            onClick={() => toggleWishList(product.id)}
                          />
                        )}
                      </Title>
                      <div className="price-container">
                        <Text className="product-price">
                          $
                          {product.salePrice
                            ? product.salePrice
                            : product.price}
                        </Text>
                        {product.salePrice && (
                          <Text delete className="product-sale-price">
                            ${product.price}
                          </Text>
                        )}
                      </div>
                    </div>
                  </StyledCard>
                </div>
              ))}
            </Col>
            <Col span={8} style={{ paddingLeft: "16px" }}>
              <div className="custom-cover">
                <img
                  alt="example"
                  src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FEAR_x2.png?alt=media&token=1325ae2e-f30b-4c1f-9886-fb4bb49a8783"
                  style={{ height: "1030px" }}
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
            <h5>HAPPY</h5>
            <h2>VALENTINE'S DAY!</h2>
            <h6>
              Celebrate Valentine's Day with our exclusive diamond jewelry sale!
              Find the perfect gift to express your love with our stunning
              selection of diamond pieces. From elegant necklaces to dazzling
              rings, our collection is designed to make this Valentine's Day
              truly unforgettable.
            </h6>
            <Button>
              <button
                onClick={() => navigate(config.routes.public.collectionInfo)}
              >
                SHOPPING NOW!
              </button>
              <button onClick={() => navigate(config.routes.public.collection)}>
                ALL COLLECTION
              </button>
            </Button>
          </Banner4Container>
        </Banner4>
        <Banner3>
          <Banner3Container>
            <h5>BST</h5>
            <h2>
              GET READY!
              <br /> AUTUMN IS COMING...
            </h2>

            <button onClick={() => navigate(config.routes.public.coming)}>
              DO GET IT!
            </button>
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
        <AboutContainer>
          <About id="about" className="about container">
            <Row gutter={[0, 0]}>
              <Col xs={24} md={12}>
                <AboutContent>
                  <Heading>
                    <h2 className="title"> ABOUT OUR COMPANY</h2>
                  </Heading>
                  <AboutText>
                    Welcome to Aphromas Diamond, where the beauty and elegance
                    of diamonds are celebrated in every piece of jewelry. With
                    years of experience, we offer unique designs, exceptional
                    quality, and professional service. Our mission is to create
                    jewelry that not only looks stunning but also carries deep
                    meaning. We use the finest materials and craftsmanship to
                    ensure every product is perfect. Our dedicated team is
                    always ready to help you find the perfect piece, whether
                    it's a special gift, an engagement ring, or a set for a
                    memorable occasion.
                  </AboutText>

                  <ButtonAbout>
                    <button
                      onClick={() => navigate(config.routes.public.about)}
                    >
                      LEARN ABOUT
                    </button>
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
        </AboutContainer>
      </Container>
    </Body>
  );
};

export default Home;
