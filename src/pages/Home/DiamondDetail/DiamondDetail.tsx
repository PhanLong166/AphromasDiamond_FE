import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
const { Title, Text } = Typography;
import { diamonds, Diamond } from "../shared/ListOfDiamond";
import styled from "styled-components";

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
  ProductInfo,
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
  List,
  ProductSectionViewed,
} from "./DiamondDetail.styled";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";

const DiamondDetails: React.FC = () => {
  //tab description + cmt
  const [activeTab, setActiveTab] = useState("product-description");

  const showTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  //
  const StyledPagination = styled(Pagination)`
  display: block;
  text-align: center;
  margin: 20px auto;
`;

  //data cmt
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
    {
      name: "Serena Sterling",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt3.jpg?alt=media&token=ade8454c-a9da-4cdc-89a3-74ebf5b5e387",
      rating: 4,
      date: "October 16, 2022",
      highlight: "Awesome Product",
      comment:
        "The diamond on this ring has excellent clarity and radiance, capturing and refracting light in a mesmerizing display of brilliance and fire.",
      reply:
        " Absolutely love my new diamond ring! It's elegant, timeless, and the perfect addition to my jewelry collection.",
    },
  ];

  //
  const navigate = useNavigate();

  //wishlist
  const [wishList, setWishList] = useState<string[]>([]);

  const toggleWishList = (productId: string) => {
    setWishList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  //PARAM
  const { id } = useParams<{ id: string }>();
  const [foundProduct, setFoundProduct] = useState<Diamond | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedThumb, setSelectedThumb] = useState(0);

  useEffect(() => {
    const product = diamonds.find((diamond) => diamond.id === id);
    if (product) {
      setFoundProduct(product);
      setMainImage(product.image);
      setSelectedThumb(0);
    } else {
      setFoundProduct(null);
    }
  }, [id, diamonds]);

  if (!foundProduct) {
    return <div>Diamond not found</div>;
  }

  const thumbnailImages = [
    foundProduct.image,
    foundProduct.image1,
    foundProduct.image2,
  ].filter((src): src is string => !!src);

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };

  const sameProductIds = ["1", "2", "3", "4"];
  const sameBrandProducts = diamonds.filter((diamond) =>
    sameProductIds.includes(diamond.id)
  );

  const recentlyProductIds = ["2", "4", "3", "5"];
  const recentlyViewedProducts = diamonds.filter((diamond) =>
    recentlyProductIds.includes(diamond.id)
  );

  
  //Avg rating
  const totalReviews = reviewsData.length;
  const totalRating = reviewsData.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRating = totalRating / totalReviews;

  return (
    <Body>
      <Section>
        <Container>
          <Wrap>
            <ProductDotGrid>
              <Wrapper>
                <ImageContainer>
                  <OuterThumb>
                    <ThumbnailImage>
                      {thumbnailImages.map((src, index) => (
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
                  <Title className="main-title">{foundProduct.name}</Title>
                  <ProductRating>
                    {[...Array(foundProduct.star)].map((_, i) => (
                      <StarFilled key={i} />
                    ))}
                  </ProductRating>
                </Heading>
                <ProductInfo>
                  <div className="wrap">
                    <div className="info-box">{foundProduct.clarity}</div>
                    <div className="info-box">{foundProduct.carat}</div>
                    <div className="info-box">{foundProduct.color}</div>
                    <div className="info-box">{foundProduct.shape}</div>
                    <div className="info-box">{foundProduct.cut}</div>
                  </div>
                </ProductInfo>
                <hr style={{ borderTop: "1px solid #d9d9d9" }}></hr>
                <ProductPrice>
                  <div className="product-group">
                    <div className="product-price">
                      <CurrentPrice>
                        $
                        {foundProduct.salePrice
                          ? foundProduct.salePrice
                          : foundProduct.price}
                      </CurrentPrice>
                      {foundProduct.salePrice && (
                        <div className="wrap">
                          <BeforePrice>${foundProduct.price}</BeforePrice>
                          <Discount>- {foundProduct.percentSale}</Discount>
                        </div>
                      )}
                    </div>
                  </div>
                </ProductPrice>
              </Entry>
              <div className="outlet">
                <ButtonContainer>
                  <ButtonAdd className="add" onClick={() => navigate("/cart")}>
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
              <h3>{foundProduct.name}</h3>
              <p>{foundProduct.description}</p>
              <p>{foundProduct.description}</p>
            </TextBlock>
            <DotGrid>
              <div className="wrapper2">
                <ListBlock>
                  <h4>What is this?</h4>
                  <ul>
                    <li>ID Number: {foundProduct.id}</li>
                    <li>Shape: {foundProduct.shape}</li>
                    <li>Total Carat (Average): {foundProduct.carat}</li>
                    <li>Color: {foundProduct.color}</li>
                    <li>Clarity: {foundProduct.clarity}</li>
                    <li>Cut: {foundProduct.cut}</li>
                    <li>Width: {foundProduct.width}</li>
                    <li>Length: {foundProduct.length}</li>
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
                <strong>{averageRating.toFixed(1)}</strong>
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
                <StyledPagination defaultCurrent={1} total={10} />
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
            {sameBrandProducts.map((diamond) => (
              <Col key={diamond.id} span={6}>
                <Link to={`/diamond/${diamond.id}`}>
                  <Card
                    style={{ borderRadius: "0" }}
                    hoverable
                    className="product-card"
                    cover={
                      <>
                        <img
                          style={{ borderRadius: "0" }}
                          src={diamond.image}
                          alt={diamond.name}
                          className="product-image"
                          onMouseOut={(e) =>
                            (e.currentTarget.src = diamond.image)
                          }
                        />
                        {diamond.salePrice && (
                          <div className="sale-badge">SALE</div>
                        )}
                      </>
                    }
                  >
                    <div className="product-info">
                      <Title level={4} className="product-name">
                        {diamond.name}
                        {wishList.includes(diamond.id) ? (
                          <HeartFilled
                            className="wishlist-icon"
                            onClick={() => toggleWishList(diamond.id)}
                          />
                        ) : (
                          <HeartOutlined
                            className="wishlist-icon"
                            onClick={() => toggleWishList(diamond.id)}
                          />
                        )}
                      </Title>
                      <div className="price-container">
                        <Text className="product-price">
                          $
                          {diamond.salePrice
                            ? diamond.salePrice
                            : diamond.price}
                        </Text>
                        {diamond.salePrice && (
                          <Text delete className="product-sale-price">
                            ${diamond.price}
                          </Text>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
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
            {recentlyViewedProducts.map((diamond) => (
              <Col key={diamond.id} span={6}>
                <Link to={`/diamond/${diamond.id}`}>
                  <Card
                    style={{ borderRadius: "0" }}
                    hoverable
                    className="product-card"
                    cover={
                      <>
                        <img
                          style={{ borderRadius: "0" }}
                          src={diamond.image}
                          alt={diamond.name}
                          className="product-image"
                          onMouseOut={(e) =>
                            (e.currentTarget.src = diamond.image)
                          }
                        />
                        {diamond.salePrice && (
                          <div className="sale-badge">SALE</div>
                        )}
                      </>
                    }
                  >
                    <div className="product-info">
                      <Title level={4} className="product-name">
                        {diamond.name}
                        {wishList.includes(diamond.id) ? (
                          <HeartFilled
                            className="wishlist-icon"
                            onClick={() => toggleWishList(diamond.id)}
                          />
                        ) : (
                          <HeartOutlined
                            className="wishlist-icon"
                            onClick={() => toggleWishList(diamond.id)}
                          />
                        )}
                      </Title>
                      <div className="price-container">
                        <Text className="product-price">
                          $
                          {diamond.salePrice
                            ? diamond.salePrice
                            : diamond.price}
                        </Text>
                        {diamond.salePrice && (
                          <Text delete className="product-sale-price">
                            ${diamond.price}
                          </Text>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </List>
      </ProductSectionViewed>
    </Body>
  );
};

export default DiamondDetails;
