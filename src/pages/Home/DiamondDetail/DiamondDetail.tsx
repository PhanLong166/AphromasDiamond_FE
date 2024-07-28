import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Link from "@/components/Link";
import { Card, Col, notification, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
const { Title, Text } = Typography;

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
  // Shipping,
  // ShippingList,
  // ShippingItem,
  CurrentPrice,
  BeforePrice,
  // Discount,
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
  CustomBreadcrumb,
  StyledPagination,
  Condition,
  GIA,
} from "./DiamondDetail.styled";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import config from "@/config";
import { getDiamondDetails, showDiamonds } from "@/services/diamondAPI";
import {
  createOrderLine,
  OrderLineBody,
  showAllOrderLineForAdmin,
} from "@/services/orderLineAPI";
import { getImage } from "@/services/imageAPI";
import { Modal } from "antd";
import { showAllFeedback } from "@/services/feedBackAPI";

type NotificationType = "success" | "error";

const DiamondDetails: React.FC = () => {
  //tab description + cmt
  const [activeTab, setActiveTab] = useState("product-description");

  const showTab = (tabId: string) => {
    setActiveTab(tabId);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [reviewsData, setReviewsData] = useState<any[]>([]);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
  const getParamsID = id ? parseInt(id) : 0;
  const { role, user } = useAuth();
  const [foundProduct, setFoundProduct] = useState<any | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [cartList, setCartList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = async (type: NotificationType, message: string) => {
    api[type]({
      message: `${type.charAt(0).toUpperCase() + type.slice(1)} Notification`,
      description: message,
    });
  };

  const [sameBrandProducts, setSameBrandProducts] = useState<any[]>([]);

  const [diamondId, setDiamondId] = useState<number | null>(null);

  useEffect(() => {
    const fetchDiamondDetails = async () => {
      try {
        console.log("Fetching diamond details...");
        const response = await getDiamondDetails(Number(id));
        if (response.status === 200) {
          const product = response.data.data;
          setFoundProduct(product);
          setDiamondId(product.DiamondID); // Lưu diamondId từ API

          if (product.usingImage && product.usingImage.length > 0) {
            const mainImageUrl = getImage(product.usingImage[0].UsingImageID);
            setMainImage(mainImageUrl);
          } else {
            setMainImage("");
          }
          setSelectedThumb(0);

          const weightCarat = product.WeightCarat;
          const params = { weightCarat };
          const sameWeightProductsResponse = await showDiamonds(params);

          if (sameWeightProductsResponse.status === 200) {
            if (
              sameWeightProductsResponse.data &&
              Array.isArray(sameWeightProductsResponse.data.data)
            ) {
              const fetchedDiamonds = sameWeightProductsResponse.data.data.map(
                (item: any) => ({
                  id: item.DiamondID,
                  name: item.Name,
                  cut: item.Cut,
                  stars: item.Stars,
                  price: item.Price,
                  color: item.Color,
                  description: item.Description,
                  isActive: item.IsActive,
                  clarity: item.Clarity,
                  cutter: item.Cutter,
                  images: item.usingImage.map((image: any) => ({
                    id: image.UsingImageID,
                    name: image.Name,
                    url: getImage(image.UsingImageID),
                  })),
                })
              );

              const maxProductsToShow = 4;
              const productsToShow =
                fetchedDiamonds.length <= maxProductsToShow
                  ? fetchedDiamonds
                  : fetchedDiamonds
                      .sort(() => 0.5 - Math.random())
                      .slice(0, maxProductsToShow);

              setSameBrandProducts(productsToShow);
            } else {
              setSameBrandProducts([]);
            }
          } else {
            setSameBrandProducts([]);
          }

          // Call fetchFeedbackDetail if diamondId is set
          if (diamondId !== null) {
            await fetchFeedbackDetail(diamondId);
          }
        } else {
          setFoundProduct(null);
        }
      } catch (error) {
        console.error("Failed to fetch diamond details:", error);
        setFoundProduct(null);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchFeedbackDetail = async (diamondId: number) => {
      try {
        console.log("Fetching feedback details for diamond ID:", diamondId);
        const response = await showAllFeedback(diamondId);
        if (response.status === 200) {
          setReviewsData(
            response.data.data.map((feedback: any) => ({
              name: feedback.account ? feedback.account.Name : "Anonymous",
              rating: feedback.Stars,
              date: new Date(feedback.CommentTime).toLocaleDateString(),
              highlight: "For AD",
              comment: feedback.Comment,
            }))
          );
        } else {
          console.error("Error fetching feedback:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch feedback details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiamondDetails();
  }, [id, diamondId]);

  useEffect(() => {
    const fetchCart = async () => {
      const orderlines = await showAllOrderLineForAdmin();
      const cartItems = orderlines.data.data.filter(
        (item: any) =>
          item.OrderID === null && item.CustomerID === user?.CustomerID
      );
      setCartList(cartItems);
    };

    fetchCart();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!foundProduct) {
    return <div>Diamond not found</div>;
  }

  const thumbnailImages =
    foundProduct?.usingImage?.map((img: any) => getImage(img.UsingImageID)) ||
    [];

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };

  //Avg rating
  const totalReviews = reviewsData.length;
  const totalRating = reviewsData.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRating = totalRating / totalReviews;

  const handleAddToCart = async () => {
    if (role) {
      try {
        const OrderLineChild: OrderLineBody = {
          Quantity: 1,
          DiamondID: getParamsID,
          CustomerID: user?.CustomerID,
          ProductID: null,
          OrderID: null,
        };

        if (cartList.find((cart) => cart.DiamondID === getParamsID)) {
          api.warning({
            message: "Notification",
            description: "The product is already in your cart",
          });
        } else {
          const { data } = await createOrderLine(OrderLineChild);
          if (data.statusCode === 404) throw new Error("Network error");
          if (data.statusCode !== 200) throw new Error(data.message);
          await openNotification(
            "success",
            "The product has been successfully added to the cart"
          );
          navigate(config.routes.customer.cart);
        }
      } catch (error: any) {
        await openNotification("error", error.message || "Server error");
      }
    } else {
      navigate(config.routes.public.login);
    }
    // navigate(config.routes.customer.cart);
  };

  const handleCheckout = () => {
    if (role) {
      navigate(config.routes.customer.checkout);
    } else navigate(config.routes.public.login);
  };

  return (
    <>
      {contextHolder}
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
                title: "Diamond",
                href: config.routes.public.diamond,
              },
              {
                title: id,
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
                        {thumbnailImages.map((src: any, index: any) => (
                          <Item
                            key={index}
                            className={
                              selectedThumb === index ? "selected" : ""
                            }
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
                    <Title className="main-title">{foundProduct.Name}</Title>

                    <ProductRating>
                      {Array.from({ length: foundProduct.Stars }, (_, i) => (
                        <StarFilled key={i} />
                      ))}
                    </ProductRating>
                  </Heading>
                  <ProductInfo>
                    <div className="container">
                      <div className="wrap">
                        <div className="info-box">{foundProduct.Clarity}</div>
                        <div className="info-box">
                          {foundProduct.WeightCarat}
                        </div>
                        <div className="info-box">{foundProduct.Color}</div>
                        <div className="info-box">{foundProduct.Shape}</div>
                        <div className="info-box">{foundProduct.Cut}</div>
                      </div>
                      <GIA>
                        <div>
                          <div onClick={showModal} className="logo">
                            <img
                              className="giaLogo"
                              src="https://ecommo--ion.bluenile.com/static-diamonds-bn/GIALogo.df3f5.png"
                              alt="GIA Logo"
                            />
                            <div>GIA Report</div>
                          </div>
                          <Modal
                            visible={isModalVisible}
                            onCancel={handleCancel}
                            footer={null}
                            centered
                            width={600}
                            closeIcon={<span>✕</span>}
                          >
                            <img
                              src={getImage(
                                foundProduct?.certificate[0]?.usingImages[0]
                                  ?.UsingImageID
                              )}
                              alt="GIA img"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </Modal>
                        </div>
                      </GIA>
                    </div>
                  </ProductInfo>
                  <hr style={{ borderTop: "1px solid #d9d9d9" }}></hr>
                  <ProductPrice>
                    <div className="product-group">
                      <div className="product-price">
                        <CurrentPrice>
                          $
                          {foundProduct.DiscountPrice &&
                          foundProduct.DiscountPrice !== foundProduct.Price
                            ? foundProduct.DiscountPrice
                            : foundProduct.Price}
                        </CurrentPrice>
                        {foundProduct.DiscountPrice &&
                          foundProduct.DiscountPrice !== foundProduct.Price && (
                            <div className="wrap">
                              <BeforePrice>${foundProduct.Price}</BeforePrice>
                              {/* <Discount>
                                - {foundProduct?.DiscountID?.PercentDiscount}
                              </Discount> */}
                            </div>
                          )}
                      </div>
                    </div>
                  </ProductPrice>
                </Entry>

                <div className="outlet">
                  <Condition>
                    <div className="payment-options-box">
                      <h3>Tip for Free Shipping:</h3>
                      <li>Free shipping on orders of 2 or more items</li>
                    </div>
                  </Condition>
                  <ButtonContainer>
                    <ButtonAdd className="add" onClick={handleAddToCart}>
                      ADD TO CART
                    </ButtonAdd>
                    <Button
                      className="checkout button_slide slide_right"
                      onClick={handleCheckout}
                    >
                      <span>CHECKOUT</span>
                    </Button>
                  </ButtonContainer>
                  {/* <Shipping>
                    <ShippingList>
                      <ShippingItem>
                        <span>Free shipping & return</span>
                      </ShippingItem>
                    </ShippingList>
                  </Shipping> */}
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
              className={
                activeTab === "product-description" ? "active" : "hide"
              }
            >
              {/* Product detail content */}
              <TextBlock>
                <h3>{foundProduct.Name}</h3>
                <p>{foundProduct.Description}</p>
              </TextBlock>
              <DotGrid>
                <div className="wrapper2">
                  <ListBlock>
                    <h4>What is this?</h4>
                    <ul>
                      <li>ID Number: {foundProduct.DiamondID}</li>
                      <li>Shape: {foundProduct.Shape}</li>
                      <li>Total Carat (Average): {foundProduct.WeightCarat}</li>
                      <li>Color: {foundProduct.Color}</li>
                      <li>Clarity: {foundProduct.Clarity}</li>
                      <li>Cut: {foundProduct.Cut}</li>
                      <li>Cutter: {foundProduct.Cutter}</li>
                      <li>Percent Depth: {foundProduct.PercentDepth}</li>
                      <li>Length: {foundProduct.LengthOnWidthRatio}</li>
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
                          <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2FRemove-bg.ai_1722105671395.png?alt=media&token=441a4bb8-0da2-4426-ad91-cdbfd9c9115c" alt="" />
                        </div>
                        <div className="grouping">
                          <div className="name">{review.name}</div>
                          <div className="rating">
                            {Array.from({ length: review.rating }, (_, i) => (
                             <StarFilled
                             key={i}
                             style={{ color: "#D8A25A", fontSize: "16px" }}
                           />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="comment reply">
                        <strong>{review.highlight}</strong>
                        <p className="grey-color">{review.comment}</p>
                        <div className="date grey-color">
                            On {review.date}
                          </div>
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
                  <Card
                    style={{ borderRadius: "0" }}
                    hoverable
                    className="product-card"
                    cover={
                      <>
                        <Link to={`/diamond/${diamond.id}`}>
                          <img
                            style={{ borderRadius: "0" }}
                            src={
                              diamond.images && diamond.images.length > 0
                                ? diamond.images[0].url
                                : "/default-image.jpg"
                            }
                            alt={diamond.name}
                            className="product-image"
                            onMouseOut={(e) =>
                              (e.currentTarget.src =
                                diamond.images && diamond.images.length > 0
                                  ? diamond.images[0].url
                                  : "/default-image.jpg")
                            }
                          />
                        </Link>
                        {diamond.salePrice && (
                          <div className="sale-badge">SALE</div>
                        )}
                      </>
                    }
                  >
                    <div className="product-info">
                      <Title level={4} className="product-name">
                        <Link to={`/diamond/${diamond.id}`}>
                          {diamond.name}
                        </Link>
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
                </Col>
              ))}
            </Row>
          </List>
        </ProductSection>
      </Body>
    </>
  );
};

export default DiamondDetails;
