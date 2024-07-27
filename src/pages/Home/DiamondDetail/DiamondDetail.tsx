import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Link from '@/components/Link';
import { Card, Col, notification, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
const { Title, Text } = Typography;
// import { diamonds, Diamond } from "../shared/ListOfDiamond";

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
  // ProductSectionViewed,
  CustomBreadcrumb,
  StyledPagination
} from "./DiamondDetail.styled";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import config from "@/config";
import { getDiamondDetails, showDiamonds } from "@/services/diamondAPI";
// import { getImage } from "@/services/imageAPI";
import { createOrderLine, OrderLineBody, showAllOrderLineForAdmin } from "@/services/orderLineAPI";
import { getImage } from "@/services/imageAPI";

type NotificationType = 'success' | 'error';

const DiamondDetails: React.FC = () => {
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

  // const recentlyProductIds = ["2", "4", "3", "5"];
  // const recentlyViewedProducts = diamonds.filter((diamond) =>
  //   recentlyProductIds.includes(diamond.id)
  // );

  //Avg rating
  const totalReviews = reviewsData.length;
  const totalRating = reviewsData.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRating = totalRating / totalReviews;

  //PARAM
  const { id } = useParams<{ id: string }>();
  const getParamsID = id ? parseInt(id) : 0;
  const { role, user } = useAuth();
  const [foundProduct, setFoundProduct] = useState<any | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [cartList, setCartList] = useState<any[]>([]);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = async (type: NotificationType, message: string) => {
    api[type]({
      message: `${type.charAt(0).toUpperCase() + type.slice(1)} Notification`,
      description: message
    })
  }

  const [sameBrandProducts, setSameBrandProducts] = useState<any[]>([]);
  // const [recentlyViewedProducts, setRecentlyViewedProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchDiamondDetails = async () => {
      try {
        const response = await getDiamondDetails(Number(id));
        if (response.status === 200) {
          const product = response.data.data;
          setFoundProduct(product);
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
            if (sameWeightProductsResponse.data && Array.isArray(sameWeightProductsResponse.data.data)) {
              const fetchedDiamonds = sameWeightProductsResponse.data.data.map((item: any) => ({
                id: item.DiamondID,
                name: item.Name,
                cut: item.Cut,
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
              }));

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
        } else {
          setFoundProduct(null);
        }
      } catch (error) {
        console.error("Failed to fetch diamond details:", error);
        setFoundProduct(null);
      }
    };

    fetchDiamondDetails();

    const fetchCart = async () => {
      const orderlines = await showAllOrderLineForAdmin();
      const cartItems = orderlines.data.data.filter((item: any) => item.OrderID === null && item.CustomerID === user?.CustomerID);
      setCartList(cartItems);
    }

    fetchCart();
  }, [id, cartList]);

  if (!foundProduct) {
    return <div>Diamond not found</div>;
  }

  const thumbnailImages =
    foundProduct?.usingImage?.map(
      (img: any) => getImage(img.UsingImageID)
    ) || [];

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };

  const handleAddToCart = async () => {

    if (role) {
      try {
        const OrderLineChild: OrderLineBody = {
          Quantity: 1,
          DiamondID: getParamsID,
          CustomerID: user?.CustomerID,
          ProductID: null,
          OrderID: null
        }

        if (cartList.find((cart) => cart.DiamondID === getParamsID)) {
          api.warning({
            message: 'Notification',
            description: 'The product is already in your cart'
          })
        }
        else {
          const { data } = await createOrderLine(OrderLineChild);
          if (data.statusCode === 404) throw new Error('Network error');
          if (data.statusCode !== 200) throw new Error(data.message);
          await openNotification('success', 'The product has been successfully added to the cart');
          navigate(config.routes.customer.cart);
        }

      } catch (error: any) {
        await openNotification('error', error.message || 'Server error');
      }

    } else {
      navigate(config.routes.public.login)
    }
    // navigate(config.routes.customer.cart);
  }

  const handleCheckout = async () => {
    if (role) {
      
      const OrderLineChild: OrderLineBody = {
        Quantity: 1,
        DiamondID: getParamsID,
        CustomerID: user?.CustomerID,
        ProductID: null,
        OrderID: null
      }

      if (cartList.find((cart) => cart.DiamondID === getParamsID)) {
        api.warning({
          message: 'Notification',
          description: 'The product is already in your cart'
        })
      }
      else {
        const { data } = await createOrderLine(OrderLineChild);
        if (data.statusCode === 404) throw new Error('Network error');
        if (data.statusCode !== 200) throw new Error(data.message);
        await openNotification('success', 'The product has been successfully added to the cart');
        navigate(config.routes.customer.checkout);
      }
    } else navigate(config.routes.public.login);
  };
  // useEffect(() => {
  //   const addToRecentlyViewed = (productId: string) => {
  //     if (!recentlyViewedProducts.some((product) => product.DiamondID === productId)) {
  //       // Create a new list with the updated product added
  //       const updatedList = [
  //         { ...foundProduct, id: foundProduct.DiamondID },
  //         ...recentlyViewedProducts.slice(0, 3) // Keep up to 4 items
  //       ];
  //       // Update state with the new list
  //       setRecentlyViewedProducts(updatedList);
  //     }
  //   };

  //   // Add current product to recently viewed on load if foundProduct is defined
  //   if (foundProduct) {
  //     addToRecentlyViewed(foundProduct.DiamondID);
  //   }
  // }, [foundProduct, recentlyViewedProducts]);

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
                    <Title className="main-title">{foundProduct.Name}</Title>
                    <ProductRating>
                      {[...Array(foundProduct.Star)].map((_, i) => (
                        <StarFilled key={i} />
                      ))}
                    </ProductRating>
                  </Heading>
                  <ProductInfo>
                    <div className="wrap">
                      <div className="info-box">{foundProduct.Clarity}</div>
                      <div className="info-box">{foundProduct.WeightCarat}</div>
                      <div className="info-box">{foundProduct.Color}</div>
                      <div className="info-box">{foundProduct.Shape}</div>
                      <div className="info-box">{foundProduct.Cut}</div>
                    </div>
                  </ProductInfo>
                  <hr style={{ borderTop: "1px solid #d9d9d9" }}></hr>
                  <ProductPrice>
                    <div className="product-group">
                      <div className="product-price">
                        <CurrentPrice>
                          $
                          {foundProduct.DiscountPrice
                            ? foundProduct.DiscountPrice
                            : foundProduct.Price}
                        </CurrentPrice>
                        {foundProduct.DiscountPrice && (
                          <div className="wrap">
                            <BeforePrice>${foundProduct.Price}</BeforePrice>
                            {/* <Discount>- {foundProduct?.DiscountID?.PercentDiscount}</Discount> */}
                          </div>
                        )}
                      </div>
                    </div>
                  </ProductPrice>
                </Entry>
                <div className="outlet">
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
                  <Shipping>
                    <ShippingList>
                      <ShippingItem>
                        <span>Free shipping & return</span>
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
              <Review >
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
                      <div className="comment reply">
                        <strong>{review.highlight}</strong>
                        <p className="grey-color">{review.comment}</p>
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
                        <Link to={`/diamond/${diamond.id}`} >
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
                        <Link to={`/diamond/${diamond.id}`} >
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
        </ProductSection >
      </Body >
    </>
  );
};

export default DiamondDetails;
{/* <ProductSectionViewed>
        <Title>
          <h2>RECENTLY VIEWED</h2>
        </Title>
        <List>
          <Row gutter={[16, 16]}>
            {recentlyViewedProducts.map((diamond) => (
              <Col key={diamond.id} span={6}>
                <Link to={`/diamond/${diamond.id}`} underline zoom scroll>
                  <Card
                    style={{ borderRadius: "0" }}
                    hoverable
                    className="product-card"
                    cover={
                      <>
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
                          {diamond.salePrice && (
                            <div className="sale-badge">SALE</div>
                          )}
                        </>
                      }
                    >
                      <div className="product-info">
                        <Title level={4} className="product-name">
                          {diamond.name}
                          {wishList.includes(diamond.id.toString()) ? (
                            <HeartFilled
                              className="wishlist-icon"
                              onClick={() => toggleWishList(diamond.id.toString())}
                            />
                          ) : (
                            <HeartOutlined
                              className="wishlist-icon"
                              onClick={() => toggleWishList(diamond.id.toString())}
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
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </List>
      </ProductSectionViewed> */}

