import { useState } from "react";
import { Breadcrumb } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
const { Title, Text } = Typography;
import { products } from "./../shared/ListOfProducts";
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
  ButtonAdd,
  Space,
  List,
  ProductSectionViewed,
} from "./ProductDetails.styled";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import { Pagination } from "antd";

const CustomBreadcrumb = styled(Breadcrumb)`
  max-width: 1320px;
  margin: 0 auto;
  padding-top: 20px;
`;

const ProductDetails = () => {
  const images = {
    yellow: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_1.webp?alt=media&token=a7ebfeca-9fa1-4250-887f-69a7cdd0e11a",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_4.webp?alt=media&token=c964ce76-26c7-404d-8fc7-e173ef7a79c3",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_5.webp?alt=media&token=6428b184-9347-499e-bfd8-2d7f9666cdde",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_3.webp?alt=media&token=61c10714-2ce3-439f-bc9c-e61a8b32ad48",
    ],
    white: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_1_b.webp?alt=media&token=4bec468a-76a0-45b2-becd-cef57a006f1d",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_4_b.webp?alt=media&token=da52e2fa-0443-4e44-8578-543a06551803",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_5_b.webp?alt=media&token=00aeadec-fa72-404d-9b6b-e8c38b65e65c",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_3_b.webp?alt=media&token=f1e0020f-38cc-484c-9418-badfa38a0ff9",
    ],
    rose: [],
    platinum: [],
  };
  const [mainImage, setMainImage] = useState(images.yellow[0]);
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [metalType, setMetalType] = useState<keyof typeof images>("yellow");

  const [metalAvailability] = useState({
    yellow: images.yellow.length > 0,
    white: images.white.length > 0,
    rose: images.rose.length > 0,
    platinum: images.platinum.length > 0,
  });

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };
  const handleMetalClick = (type: keyof typeof images) => {
    if (metalAvailability[type]) {
      setMetalType(type);
      setMainImage(images[type][0]);
      setSelectedThumb(0);
    }
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

  // const { id } = useParams();
  // const product = products.find((product) => product.id === id);

  //fill product for same brand
  const sameProductIds = ["1", "2", "3", "4"];
  const sameBrandProducts = products.filter((product) =>
    sameProductIds.includes(product.id)
  );
  //fille product for recently
  const recentlyProductIds = ["16", "18", "20", "12"];
  const recentlyViewedProducts = products.filter((product) =>
    recentlyProductIds.includes(product.id)
  );

  const navigate = useNavigate();

  const reviewsData = [
    {
      name: "Olivia Williams",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt1.jpg?alt=media&token=fda03330-bebc-42a9-a7aa-568f2f9cdb9f",
      rating: 5,
      date: "November 10, 2021",
      highlight: "Awesome Product",
      comment:
        "Absolutely love my new diamond ring! It's elegant, timeless, and the perfect addition to my jewelry collection.",
      reply:
        " Absolutely love my new diamond ring! It's elegant, timeless, and the perfect addition to my jewelry collection.",
    },
    {
      name: "Phoenix Knight",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt2.jpg?alt=media&token=31ba6ae3-17f5-4f7e-b1b3-d316d7019068",
      rating: 5,
      date: "March 7, 2022",
      highlight: "Awesome Product",
      comment:
        "This diamond ring is truly magnificent and captivating, capturing attention with its radiant brilliance and undeniable allure.",
      reply:
        " Absolutely love my new diamond ring! It's elegant, timeless, and the perfect addition to my jewelry collection.",
    },
    {
      name: "Serena Sterling",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt3.jpg?alt=media&token=ade8454c-a9da-4cdc-89a3-74ebf5b5e387",
      rating: 5,
      date: "October 16, 2022",
      highlight: "Awesome Product",
      comment:
        "The diamond on this ring has excellent clarity and radiance, capturing and refracting light in a mesmerizing display of brilliance and fire.",
      reply:
        " Absolutely love my new diamond ring! It's elegant, timeless, and the perfect addition to my jewelry collection.",
    },
  ];

  const [wishList, setWishList] = useState<string[]>([]);

  const toggleWishList = (productId: string) => {
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
                      {images[metalType].map((src: string, index: number) => (
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
                    <button
                      className={`metal-button white ${
                        metalType === "white" ? "selected" : ""
                      }`}
                      onClick={() => handleMetalClick("white")}
                      disabled={!metalAvailability.white}
                    >
                      <span>14k</span>
                    </button>
                    <button
                      className={`metal-button yellow ${
                        metalType === "yellow" ? "selected" : ""
                      }`}
                      onClick={() => handleMetalClick("yellow")}
                      disabled={!metalAvailability.yellow}
                    >
                      <span>14k</span>
                    </button>
                    <button
                      className={`metal-button rose ${
                        metalType === "rose" ? "selected" : ""
                      }`}
                      onClick={() => handleMetalClick("rose")}
                      disabled={!metalAvailability.rose}
                    >
                      <span>14k</span>
                    </button>
                    <button
                      className={`metal-button platinum ${
                        metalType === "platinum" ? "selected" : ""
                      }`}
                      onClick={() => handleMetalClick("platinum")}
                      disabled={!metalAvailability.platinum}
                    >
                      <span>Pt</span>
                    </button>
                  </div>
                </ProductMetal>
                <div>
                  <RingSizeContainer>
                    <RingSize>Select size</RingSize>
                    <RingSizeHelp href={config.routes.public.ringGuide}>
                      Ring size help
                    </RingSizeHelp>
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
                  <ButtonAdd
                    className="add"
                    onClick={() => navigate(config.routes.customer.cart)}
                  >
                    ADD TO CART
                  </ButtonAdd>
                  <Button className="checkout button_slide slide_right">
                    <span>CHECKOUT</span>
                  </Button>
                </ButtonContainer>
                <Shipping>
                  <ShippingList>
                    <ShippingItem>
                      <span>Free shipping & return</span>
                    </ShippingItem>

                    <ShippingItem>
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
                  <span>{reviewsData.length} reviews</span>
                </div>
              </div>
              <div className="body-review">
                {reviewsData.map((review, index) => (
                  <div key={index} className="profile">
                    <div className="thumb-name">
                      <div className="image">
                        <img src={review.avatar} alt="" />
                      </div>
                      <div className="grouping">
                        <div className="name">{review.name}</div>
                        <div className="rating">
                          {[...Array(review.rating)].map((_, i) => (
                            <StarFilled
                              key={i}
                              style={{ color: "#D8A25A", fontSize: "16px" }}
                            />
                          ))}
                        </div>
                        <div className="date grey-color">On {review.date}</div>
                      </div>
                    </div>
                    <div className="comment">
                      <strong>{review.highlight}</strong>
                      <p className="grey-color">{review.comment}</p>
                    </div>
                    <div className="reply">
                      <strong>Seller's Feedback</strong>
                      <p className="grey-color">{review.reply}</p>
                      <div className="date grey-color">On {review.date}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Pagination defaultCurrent={1} total={10} />
              </div>
            </Review>
          </ProductAbout>
        </div>
      </Contain>
      <ProductSection>
        <Title>
          <h2>SAME BRAND</h2>
        </Title>
        <List>
          <Row gutter={[16, 16]}>
            {sameBrandProducts.map((product) => (
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
            {recentlyViewedProducts.map((product) => (
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
