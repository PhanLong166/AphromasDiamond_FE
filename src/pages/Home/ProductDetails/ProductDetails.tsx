import { useState, useEffect } from "react";
import { Breadcrumb } from "antd";
import { Link, useParams } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
const { Title, Text } = Typography;
import { products, Product } from "../shared/ListOfProducts";
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
import { Pagination } from "antd";

const CustomBreadcrumb = styled(Breadcrumb)`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 20px;
`;

//
const StyledPagination = styled(Pagination)`
  display: block;
  text-align: center;
  margin: 20px auto;
`;

const ProductDetails: React.FC = () => {
  //tab description + cmt
  const [activeTab, setActiveTab] = useState("product-description");

  const showTab = (tabId: string) => {
    setActiveTab(tabId);
  };

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
      rating: 4,
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

  //Avg rating
  const totalReviews = reviewsData.length;
  const totalRating = reviewsData.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRating = totalRating / totalReviews;
  //size
  const sizes = [8, 10, 12, 14, 16, 18];

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleClick = (size: number) => {
    setSelectedSize(size);
  };

  //inscription
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inscription, setInscription] = useState<string>("");
  const [resetModal, setResetModal] = useState<boolean>(false);

  const showModal = () => {
    setResetModal(false);
    setIsModalVisible(true);
  };

  const handleSave = (text: string) => {
    setInscription(text);
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    setInscription("");
    setResetModal(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

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
  const [foundProduct, setFoundProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [sameBrandProducts, setSameBrandProducts] = useState<Product[]>([]);
  const [metalType, setMetalType] = useState<keyof Product["images"]>("yellow");
  const [metalAvailability, setMetalAvailability] = useState({
    yellow: false,
    white: false,
    rose: false,
    platinum: false,
  });

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setFoundProduct(product);
      setMainImage(product.images.yellow[0]);
      setSelectedThumb(0);
      setMetalType("yellow");
      setMetalAvailability({
        yellow: product.images.yellow.length > 0,
        white: product.images.white.length > 0,
        rose: product.images.rose.length > 0,
        platinum: product.images.platinum.length > 0,
      });
  
      // Filter products by the same firm as the found product
      const filteredProducts = products.filter(
        (p) => p.firm === product.firm && p.id !== product.id
      );
  
      // Determine how many products to show (up to 4)
      const maxProductsToShow = 4;
      const productsToShow = filteredProducts.length <= maxProductsToShow
        ? filteredProducts
        : filteredProducts.sort(() => 0.5 - Math.random()).slice(0, maxProductsToShow);
  
      setSameBrandProducts(productsToShow);
    } else {
      setFoundProduct(null);
    }
  }, [id, products]);
  
  if (!foundProduct) {
    return <div>Product not found</div>;
  }
  

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };

  const handleMetalClick = (type: keyof typeof foundProduct.images) => {
    if (metalAvailability[type]) {
      setMetalType(type);
      setMainImage(foundProduct.images[type][0]);
      setSelectedThumb(0);
    }
  };

  //2 same

  const recentlyProductIds = ["20", "3", "16", "2"];
  const recentlyViewedProducts = products.filter((product) =>
    recentlyProductIds.includes(product.id)
  );
  
  return (
    <Body>
      <div>
        <CustomBreadcrumb
          separator=">"
          items={[
            { title: "Home", href: "/" },
            { title: "Round Ring", href: "/product" },
            { title: "All Product", href: "/all" },
            { title: `${foundProduct.type} - #${foundProduct.id}` },
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
                      {foundProduct.images[metalType].map(
                        (src: string, index: number) => (
                          <Item
                            key={index}
                            className={
                              selectedThumb === index ? "selected" : ""
                            }
                            onClick={() => changeImage(src, index)}
                          >
                            <img src={src} alt={`Thumb ${index + 1}`} />
                          </Item>
                        )
                      )}
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
                      disabled={!foundProduct.images.white.length}
                    >
                      <span>14k</span>
                    </button>
                    <button
                      className={`metal-button yellow ${
                        metalType === "yellow" ? "selected" : ""
                      }`}
                      onClick={() => handleMetalClick("yellow")}
                      disabled={!foundProduct.images.yellow.length}
                    >
                      <span>14k</span>
                    </button>
                    <button
                      className={`metal-button rose ${
                        metalType === "rose" ? "selected" : ""
                      }`}
                      onClick={() => handleMetalClick("rose")}
                      disabled={!foundProduct.images.rose.length}
                    >
                      <span>14k</span>
                    </button>
                    <button
                      className={`metal-button platinum ${
                        metalType === "platinum" ? "selected" : ""
                      }`}
                      onClick={() => handleMetalClick("platinum")}
                      disabled={!foundProduct.images.platinum.length}
                    >
                      <span>Pt</span>
                    </button>
                  </div>
                </ProductMetal>
                {foundProduct.type.toLowerCase() === "ring" && (
                  <>
                    <div>
                      <RingSizeContainer>
                        <RingSize>Select size</RingSize>
                        <RingSizeHelp href="/find-ring-size">
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
                          <span
                            className="inscription-content"
                            onClick={showModal}
                          >
                            {inscription}
                          </span>
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
                        <Button onClick={showModal}>
                          + Add free inscription
                        </Button>
                      )}
                      <InscriptionModal
                        visible={isModalVisible}
                        onClose={handleClose}
                        onSave={handleSave}
                        reset={resetModal}
                      />
                    </div>
                  </>
                )}
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
                    <li>Firm: {foundProduct.firm}</li>
                    <li>Width: {foundProduct.width}</li>
                    <li>Quantity: {foundProduct.quantity}</li>
                    <li>Shape: {foundProduct.shape}</li>
                    <li>Total Carat (Average): {foundProduct.carat}</li>
                    <li>Color: {foundProduct.color}</li>
                    <li>Clarity: {foundProduct.clarity}</li>
                    <li>Setting Type: {foundProduct.type}</li>
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
            {sameBrandProducts.map((product) => (
              <Col key={product.id} span={6}>
                <Link to={`/product/${product.id}`}>
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
            {recentlyViewedProducts.map((product) => (
              <Col key={product.id} span={6}>
                <Link to={`/product/${product.id}`}>
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

export default ProductDetails;
