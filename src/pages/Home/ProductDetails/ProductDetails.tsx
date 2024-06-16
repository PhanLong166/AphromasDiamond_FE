import { useState } from "react";
// import { Pagination } from 'antd';
import { Breadcrumb } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Card, Col, Row, Typography, Pagination, Carousel } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { theme } from "../../../themes";
const { Title, Text } = Typography;
import InscriptionModal from "@/components/InscriptionModal/InscriptionModal";
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
  // Title,
  ProductRating,
  ProductMetal,
  ProductInfo,
  RingSizeContainer,
  RingSize,
  RingSizeHelp,
  ProductPrice,
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
  HeadingTitle,
  ButtonAdd,
  Space,
  List,
  ProductSectionViewed,
  // PageLink
} from "./ProductDetails.styled";
import { StarFilled } from "@ant-design/icons";

const CustomBreadcrumb = styled(Breadcrumb)`
  max-width: 1320px;
  margin: 0 auto;
  padding-top: 20px;
`;

const CustomCarousel = styled(Carousel)`
  .slick-dots li button {
    background-color: ${theme.color.primary} !important;
    bottom: -30px;
  }
`;

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_1.webp?alt=media&token=a7ebfeca-9fa1-4250-887f-69a7cdd0e11a"
  );
  const [selectedThumb, setSelectedThumb] = useState(0);

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };

  const [activeTab, setActiveTab] = useState("product-description");

  const showTab = (tabId: string) => {
    setActiveTab(tabId);
  };
  const sizes = [8, 10, 12, 14, 16, 18];

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleClick = (size: number) => {
    setSelectedSize(size);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inscription, setInscription] = useState<string>("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSave = (text: string) => {
    setInscription(text);
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    setInscription("");
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

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
  ];

  const vieweds: Product[] = [
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
  ];

  const [wishList, setWishList] = useState<number[]>([]);

  const toggleWishList = (productId: number) => {
    setWishList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };
  return (
    <Body>
      <div>
        <CustomBreadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Round Ring",
              href: "/product",
            },
            {
              title: "All Product",
              href: "/all",
            },
            {
              title: "Ring - #012345",
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
                      {[
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_1.webp?alt=media&token=a7ebfeca-9fa1-4250-887f-69a7cdd0e11a",
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_4.webp?alt=media&token=c964ce76-26c7-404d-8fc7-e173ef7a79c3",
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_5.webp?alt=media&token=6428b184-9347-499e-bfd8-2d7f9666cdde",
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_3.webp?alt=media&token=a776dc16-0595-453d-8d59-75692d3527ce",
                      ].map((src, index) => (
                        <Item
                          key={index}
                          className={selectedThumb === index ? "selected" : ""}
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
                  <Title className="main-title">SOFIA TWO FINGER RING</Title>
                  <ProductRating>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </ProductRating>
                </Heading>
                <ProductInfo>
                  <div className="wrap">
                    <div className="info-box">SI2</div>
                    <div className="info-box">0.16carat</div>
                    <div className="info-box">1.80mm</div>
                  </div>
                </ProductInfo>
                <ProductMetal>
                  <span className="fill">Metal Type:</span>
                  <div className="wrap">
                    <button className="metal-button white ">
                      <span>14k</span>
                    </button>
                    <button className="metal-button yellow selected">
                      <span>14k</span>
                    </button>
                    <button className="metal-button rose">
                      <span>14k</span>
                    </button>
                    <button className="metal-button platinum">
                      <span>Pt</span>
                    </button>
                  </div>
                </ProductMetal>
                <div>
                  <RingSizeContainer>
                    <RingSize>Select size</RingSize>
                    <RingSizeHelp href="#">Ring size help</RingSizeHelp>
                  </RingSizeContainer>
                  <div className="button-container">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`size-button ${
                          selectedSize === size ? "selected" : ""
                        }`}
                        onClick={() => handleClick(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="inscription-container">
                  {inscription ? (
                    <Space>
                      <span className="inscription">Your inscription</span>:{" "}
                      <span>{inscription}</span>
                      <CloseOutlined
                        style={{
                          fontSize: "12px",
                          marginLeft: "3px",
                          cursor: "pointer",
                          backgroundColor: "#eee",
                          borderRadius: "50%",
                          color: "#DB7F67",
                        }}
                        onClick={handleDelete}
                      />
                    </Space>
                  ) : (
                    <Button onClick={showModal}>+ Add free inscription</Button>
                  )}
                  <InscriptionModal
                    visible={isModalVisible}
                    onClose={handleClose}
                    onSave={handleSave}
                  />
                </div>
                <ProductPrice>
                  <div className="product-group">
                    <div className="product-price">
                      <CurrentPrice>$75,0</CurrentPrice>
                      <div className="wrap">
                        <BeforePrice>$100,00</BeforePrice>
                        <Discount>-25%</Discount>
                      </div>
                    </div>
                  </div>
                </ProductPrice>
              </Entry>
              <div className="outlet">
                <ButtonContainer>
                  <ButtonAdd className="add">ADD TO CART</ButtonAdd>
                  <Button className="checkout button_slide slide_right">
                    <span>CHECKOUT</span>
                  </Button>
                </ButtonContainer>
                <Shipping>
                  <ShippingList>
                    <ShippingItem>
                      {/* <GiftFilled/> */}
                      <span>Free shipping & return</span>
                    </ShippingItem>

                    <ShippingItem>
                      {/* <HomeFilled/> */}
                      <span>Estimate delivery: &#160;</span>
                      <span className="delivery"> 01 - 07 Jan, 2024</span>
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
                  className={
                    activeTab === "product-description" ? "active-tab" : ""
                  }
                >
                  <a href="#0" onClick={() => showTab("product-description")}>
                    <span>Product detail</span>
                  </a>
                </li>
                <li
                  id="tab-product-review"
                  className={activeTab === "product-review" ? "" : ""}
                >
                  <a href="#0" onClick={() => showTab("product-review")}>
                    <span>Reviews</span>
                  </a>
                </li>
              </ul>
            </nav>
          </Tabbed>
          <ProductAbout
            id="product-description"
            className={activeTab === "product-description" ? "active" : "hide"}
          >
            {/* Product detail content */}
            <TextBlock>
              <h3>Three-Stone Trapezoid Sidestone Diamond Ring</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt
                accusamus possimus ex voluptas, perferendis reiciendis?
              </p>
              <p>
                Dolor sit amet consectetur adipisicing elit. Esse nobis aperiam
                aliquam alias fuga earum neque iste ipsa nesciunt accusamus
                possimus ex voluptas.
              </p>
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
                    <li>
                      Our effort to design beautiful jewelry in top quality.
                    </li>
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
          <ProductAbout
            id="product-review"
            className={activeTab === "product-review" ? "active" : "hide"}
          >
            {/* Review content */}
            <Review>
              <div className="head-review">
                <div className="sum-rating">
                  <strong>5.0</strong>
                  <span>3 reviews</span>
                </div>
                <button className="view-all-button">All</button>
              </div>
              <div className="body-review">
                <div className="profile">
                  <div className="thumb-name">
                    <div className="image">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt1.jpg?alt=media&token=fda03330-bebc-42a9-a7aa-568f2f9cdb9f"
                        alt=""
                      />
                    </div>
                    <div className="grouping">
                      <div className="name">Olivia Williams</div>
                      <div className="rating">
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                      </div>
                      <div className="date grey-color">
                        On November 10, 2021
                      </div>
                    </div>
                  </div>
                  <div className="comment">
                    <strong>Awesome Product</strong>
                    <p className="grey-color">
                      Absolutely love my new diamond ring! It's elegant,
                      timeless, and the perfect addition to my jewelry
                      collection.
                    </p>
                  </div>
                  <div className="reply">
                    <strong>Seller's Feedback</strong>
                    <p className="grey-color">
                      Absolutely love my new diamond ring! It's elegant,
                      timeless, and the perfect addition to my jewelry
                      collection.
                    </p>
                    <div className="date grey-color">On November 10, 2021</div>
                  </div>
                </div>
                <div className="profile">
                  <div className="thumb-name">
                    <div className="image">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt2.jpg?alt=media&token=31ba6ae3-17f5-4f7e-b1b3-d316d7019068"
                        alt=""
                      />
                    </div>
                    <div className="grouping">
                      <div className="name">Phoenix Knight</div>
                      <div className="rating">
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                      </div>
                      <div className="date grey-color">On March 7, 2022</div>
                    </div>
                  </div>
                  <div className="comment">
                    <strong>Awesome Product</strong>
                    <p className="grey-color">
                      This diamond ring is truly magnificent and captivating,
                      capturing attention with its radiant brilliance and
                      undeniable allure.
                    </p>
                  </div>
                  <div className="reply">
                    <strong>Seller's Feedback</strong>
                    <p className="grey-color">
                      Absolutely love my new diamond ring! It's elegant,
                      timeless, and the perfect addition to my jewelry
                      collection.
                    </p>
                    <div className="date grey-color">On March 7, 2022</div>
                  </div>
                </div>
                <div className="profile">
                  <div className="thumb-name">
                    <div className="image">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt3.jpg?alt=media&token=ade8454c-a9da-4cdc-89a3-74ebf5b5e387"
                        alt=""
                      />
                    </div>
                    <div className="grouping">
                      <div className="name">Serena Sterling</div>
                      <div className="rating">
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                      </div>
                      <div className="date grey-color">On October 16, 2022</div>
                    </div>
                  </div>
                  <div className="comment">
                    <strong>Awesome Product</strong>
                    <p className="grey-color">
                      The diamond on this ring has excellent clarity and
                      radiance, capturing and refracting light in a mesmerizing
                      display of brilliance and fire.
                    </p>
                  </div>
                  <div className="reply">
                    <strong>Seller's Feedback</strong>
                    <p className="grey-color">
                      Absolutely love my new diamond ring! It's elegant,
                      timeless, and the perfect addition to my jewelry
                      collection.
                    </p>
                    <div className="date grey-color">On October 16, 2022</div>
                  </div>
                </div>
              </div>
            </Review>
          </ProductAbout>
        </div>
      </Contain>
      <ProductSection>
        <Title >
          <h2>SAME BRAND</h2>
        </Title>
        <List>
          <Row gutter={[16, 16]}>
            {products.map((product) => (
              <Col key={product.id} span={6}>
                <Card
                  style={{ borderRadius: "0" }}
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
                        ${product.salePrice ? product.salePrice : product.price}
                      </Text>
                      {product.salePrice && (
                        <Text delete className="product-sale-price">
                          ${product.price}
                        </Text>
                      )}
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </List>
      </ProductSection>
      <ProductSectionViewed>
        <Title>
          <h2>RECENTLY VIEWED</h2>
        </Title>
        <List>
          <Row gutter={[16, 16]}>
            {vieweds.map((product) => (
              <Col key={product.id} span={6}>
                <Card
                  style={{ borderRadius: "0" }}
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
                        ${product.salePrice ? product.salePrice : product.price}
                      </Text>
                      {product.salePrice && (
                        <Text delete className="product-sale-price">
                          ${product.price}
                        </Text>
                      )}
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </List>
      </ProductSectionViewed>
    </Body>
  );
};

export default ProductDetails;
