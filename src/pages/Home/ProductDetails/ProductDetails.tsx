import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography, Empty, Rate, notification } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
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
  ProductRating,
  ProductMetal,
  ProductInfo,
  RingSizeContainer,
  RingSize,
  RingSizeHelp,
  ProductPrice,
  ButtonContainer,
  Button,
  // Shipping,
  // ShippingList,
  // ShippingItem,
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
  // ProductSectionViewed,
  StyledPagination,
  Condition,
  CustomBreadcrumb,
} from "./ProductDetails.styled";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { showAllSize } from "@/services/sizeAPI";
import { getProductDetails, showAllProduct } from "@/services/productAPI";
import { getImage } from "@/services/imageAPI";
import { showAllFeedback } from "@/services/feedBackAPI";
import useAuth from "@/hooks/useAuth";
import config from "@/config";
import { createOrderLine, OrderLineBody, showAllOrderLineForAdmin } from "@/services/orderLineAPI";
const ProductDetails: React.FC = () => {
  //tab description + cmt
  const [activeTab, setActiveTab] = useState("product-description");

  const showTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  //Metal
  const metalData = [
    { id: 1, key: "yellow", label: "14k", type: "14K Yellow Gold" },
    { id: 2, key: "white", label: "14k", type: "14K White Gold" },
    { id: 3, key: "rose", label: "14k", type: "14K Rose Gold" },
    { id: 4, key: "platinum", label: "Pt", type: "Platinum" },
  ];
  const [selectedMetal, setSelectedMetal] = useState(1);
  const [metalType, setMetalType] = useState("");
  const [sizes, setSizes] = useState<any[]>([]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  useEffect(() => {
    const fetchSizes = async () => {
      try {
        const response = await showAllSize();
        if (response.status === 200) {
          setSizes(response.data.data);
          if (response.data.data.length > 0) {
            setSelectedSize(response.data.data[0].sizeId);
          }
        }
      } catch (error) {
        console.error("Error fetching sizes:", error);
      }
    };

    fetchSizes();
  }, []);

  const handleClick = (sizeId: number) => {
    setSelectedSize(sizeId);
  };

  //inscription
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inscription, setInscription] = useState<string>("");
  const [resetModal, setResetModal] = useState<boolean>(false);
  const [reviewsData, setReviewsData] = useState<any[]>([]);
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
  const { role, user } = useAuth();
  const [foundProduct, setFoundProduct] = useState<any | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [sameBrandProducts, setSameBrandProducts] = useState<any[]>([]);
  const [productId, setProductId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [jewelrySettingVariant, setJewelrySettingVariant] = useState(0);
  const [cartList, setCartList] = useState<any[]>([]);
  const [api, contextHolder] = notification.useNotification();

  const fetchFeedbackDetail = async (productId: number) => {
    try {
      console.log("Fetching feedback details for product ID:", productId);
      const response = await showAllFeedback(productId);
      if (response.status === 200) {
        setReviewsData(
          response.data.data.map((feedback: any) => ({
            name: feedback.account ? feedback.account.Name : "Anonymous",
            rating: feedback.Stars,
            date: new Date(feedback.CommentTime).toLocaleDateString(),
            highlight: "For AD",
            comment: feedback.Comment,
            productId: feedback.ProductID,
          }))
        );
        console.log("Review: ", reviewsData);
      } else {
        console.error("Error fetching feedback:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch feedback details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProductDetails = async () => {
    try {
      console.log("Fetching product details...");
      const response = await getProductDetails(Number(id));
      if (response.status === 200) {
        const product = response.data.data;
        setFoundProduct({
          ...product,
          FinalPrice: Number(
            (product.TotalDiamondPrice +
            product.JewelrySetting?.jewelrySettingVariant?.find((item: any) => item.MaterialJewelryID === Number(selectedMetal))?.Price)
          ),
          DiscountFinalPrice: Number(
            (product.TotalDiamondPrice +
            product.JewelrySetting?.jewelrySettingVariant?.find((item: any) => item.MaterialJewelryID === Number(selectedMetal))?.Price)
            *((100 - product?.Discount?.PercentDiscounts) / 100)
          )
        });
        const productId = product.ProductID;
        setProductId(productId);

        if (product.UsingImage && product.UsingImage.length > 0) {
          const mainImageUrl = getImage(product.UsingImage[0].UsingImageID);
          setMainImage(mainImageUrl);
        } else {
          setMainImage("");
        }
        setSelectedThumb(0);

        const weightCarat = product.WeightCarat;
        const params = { weightCarat };
        console.log(params);
        const sameWeightProductsResponse = await showAllProduct();

        if (sameWeightProductsResponse.status === 200) {
          if (
            sameWeightProductsResponse.data &&
            Array.isArray(sameWeightProductsResponse.data.data)
          ) {
            const fetchedDiamonds = sameWeightProductsResponse.data.data.map(
              (jewelry: any) => ({
                id: jewelry.ProductID,
                name: jewelry.Name,
                brand: jewelry.Brand,
                totalDiamondPrice: jewelry.TotalDiamondPrice,
                firstPrice: jewelry.FirstPrice,
                discountFirstPrice: jewelry.DiscountFirstPrice,
                jewelryType: jewelry.JewelrySetting?.jewelryType?.Name,
                images: jewelry.UsingImage.map((image: any) => ({
                  id: image.UsingImageID,
                  url: getImage(image.UsingImageID),
                })),
              })
            );

            const maxProductsToShow = 4;

            // Assuming you have a variable for the current brand
            const currentBrand = product.Brand;

            // Filter products by the current brand
            const sameBrandProducts = fetchedDiamonds.filter(
              (item: any) =>
                item.brand === currentBrand && item.id !== productId
            );

            const productsToShow =
              sameBrandProducts.length <= maxProductsToShow
                ? sameBrandProducts
                : sameBrandProducts
                  .sort(() => 0.5 - Math.random())
                  .slice(0, maxProductsToShow);

            setSameBrandProducts(productsToShow);
          } else {
            setSameBrandProducts([]);
          }
        } else {
          setSameBrandProducts([]);
        }
        if (productId !== null) {
          await fetchFeedbackDetail(productId);
        }
      } else {
        setFoundProduct(null);
      }
    } catch (error) {
      console.error("Failed to fetch diamond details:", error);
      setFoundProduct(null);
    } finally {
      setIsLoading(false);
      console.log("Loading: ", isLoading);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id, productId]);

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
  }, [id])

  const handleAddToCart = async () => {
    if (role) {
      try {
        const OrderLineChild: OrderLineBody = {
          Quantity: 1,
          DiamondID: null,
          CustomerID: user?.CustomerID,
          ProductID: Number(id),
          OrderID: null,
          Inscription: inscription !== "" ? inscription : null,
          InscriptionFont: null,
          JewelrySettingVariantID: jewelrySettingVariant,
          SizeID: selectedSize
        }

        if (cartList.find((cart) => cart.ProductID === id)) {
          api.warning({
            message: "Notification",
            description: "The product is already in your cart",
          });
        } else {
          const { data } = await createOrderLine(OrderLineChild);
          if (data.statusCode === 404) throw new Error("Network error");
          if (data.statusCode !== 200) throw new Error(data.message);
          navigate(config.routes.customer.cart);
        }
      } catch (error: any) {
        api.error({
          message: 'Error',
          description: error.message || 'An error occurred'
        });
      }
    } else {
      navigate(config.routes.public.login);
    }
  }

  const handleCheckout = async () => {
    if (role) {
      try {
        const OrderLineChild: OrderLineBody = {
          Quantity: 1,
          DiamondID: null,
          CustomerID: user?.CustomerID,
          ProductID: Number(id),
          OrderID: null,
          Inscription: inscription !== "" ? inscription : null,
          InscriptionFont: null,
          JewelrySettingVariantID: jewelrySettingVariant,
          SizeID: selectedSize
        }

        if (cartList.find((cart) => cart.ProductID === id)) {
          api.warning({
            message: "Notification",
            description: "The product is already in your cart",
          });
        } else {
          const { data } = await createOrderLine(OrderLineChild);
          if (data.statusCode === 404) throw new Error("Network error");
          if (data.statusCode !== 200) throw new Error(data.message);
          navigate(config.routes.customer.cart);
        }
      } catch (error: any) {
        api.error({
          message: 'Error',
          description: error.message || 'An error occurred'
        });
      }
      navigate(config.routes.customer.checkout);
    } else {
      navigate(config.routes.public.login);
    }
  }

  if (!foundProduct) {
    return <div>Product not found</div>;
  }

  const thumbnailImages =
    foundProduct?.UsingImage?.map((img: any) => getImage(img.UsingImageID)) ||
    [];
  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };

  const handleButtonClick = (id: any, type: any) => {
    setSelectedMetal(id);
    setMetalType(type);
    fetchProductDetails();
    const JewelrySettingVariantID = Number(
      foundProduct?.JewelrySetting?.jewelrySettingVariant?.
      find((item: any) => item.MaterialJewelryID === Number(selectedMetal))?.
      JewelrySettingVariantID
    );
    setJewelrySettingVariant(JewelrySettingVariantID);
  };

  const matchingReviews = reviewsData.filter(
    (review) => foundProduct && foundProduct.ProductID === review.productId
  );
  //Avg rating
  const totalReviews = matchingReviews.length;
  const totalRating = matchingReviews.reduce(
    (acc, curr) => acc + curr.rating,
    0
  );
  const averageRating = totalRating / totalReviews;
  const summaryRating =
    matchingReviews.length > 0 ? averageRating.toFixed(1) : "0.0";
  const reviewsCount = matchingReviews.length > 0 ? matchingReviews.length : 0;

  return (
    <Body>
      {contextHolder}
      <div>
        <CustomBreadcrumb
          separator=">"
          items={[
            { title: "Home", href: "/" },
            { title: "All Product", href: "/all" },
            {
              title: `${foundProduct.JewelrySetting.jewelryType.Name} - #${foundProduct.ProductID}`,
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
                    {foundProduct.Stars === 0 ? <>
                      {foundProduct.Stars}
                      <Rate disabled defaultValue={foundProduct.Stars} />
                    </> : "No reviews"}
                  </ProductRating>
                </Heading>
                <ProductInfo>
                  <div className="wrap">
                    <div className="info-box">
                      {foundProduct.JewelrySetting.jewelryType.Name}
                    </div>
                    <div>
                      {foundProduct.JewelrySetting.jewelryType.Name.includes(
                        "Men"
                      ) ? (
                        <div className="info-box">
                          {
                            foundProduct?.JewelrySetting
                              ?.jewelrySettingVariant[0]?.materialJewelry.Name
                          }
                        </div>
                      ) : (
                        <div className="info-box">
                          {foundProduct.JewelrySetting.DiamondShape}
                        </div>
                      )}
                    </div>
                    <div className="info-box">
                      {foundProduct.JewelrySetting.Name}
                    </div>
                  </div>
                </ProductInfo>
                {foundProduct.JewelrySetting.jewelryType.Name !==
                  "Men Engagement Ring" &&
                  foundProduct.JewelrySetting.jewelryType.Name !==
                  "Men Wedding Ring" && (
                    <ProductMetal>
                      <span className="fill">Metal Type: {metalType}</span>
                      <div className="wrap">
                        {metalData.map((metal) => (
                          <button
                            key={metal.id}
                            className={`metal-button ${metal.key} ${selectedMetal === metal.id ? "selected" : ""
                              }`}
                            onClick={() =>
                              handleButtonClick(metal.id, metal.type)
                            }
                          >
                            <span>{metal.label}</span>
                          </button>
                        ))}
                      </div>
                    </ProductMetal>
                  )}
                {foundProduct.JewelrySetting.jewelryType.Name.includes(
                  "Ring"
                ) && (
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
                              key={size.SizeValue}
                              className={`size-button ${selectedSize === size.SizeID ? "selected" : ""
                                }`}
                              onClick={() => handleClick(size.SizeID)}
                            >
                              {parseInt(size.SizeValue)}
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
                      <CurrentPrice>${foundProduct.DiscountFinalPrice}</CurrentPrice>
                      {foundProduct.DiscountFirstPrice && (
                        <div className="wrap">
                          <BeforePrice>
                            ${foundProduct.DiscouFirstPrice}
                          </BeforePrice>
                          <Discount>
                            - {foundProduct.Discount?.PercentDiscounts}%
                          </Discount>
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
              <p>{foundProduct.Description}</p>
            </TextBlock>
            <DotGrid>
              <div className="wrapper2">
                <ListBlock>
                  <h4>What is this?</h4>
                  <ul>
                    <li>ID Number: {foundProduct.ProductID}</li>
                    <li>Firm: {foundProduct.Brand}</li>
                    <li>
                      Type: {foundProduct.JewelrySetting.jewelryType.Name}
                    </li>
                    {!foundProduct.JewelrySetting.jewelryType.Name.includes(
                      "Men"
                    ) && (
                        <li>
                          Diamond Shape:{" "}
                          {foundProduct.JewelrySetting.DiamondShape}
                        </li>
                      )}
                    <li>
                      Quantity:{" "}
                      {foundProduct.TotalQuantityJewelrySettingVariants}
                    </li>
                    <li>Setting: {foundProduct.JewelrySetting.Name}</li>
                    {foundProduct.Discount &&
                      foundProduct.Discount.DiscountID && (
                        <li>Promotion: {foundProduct.Discount.Name}</li>
                      )}
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
              {reviewsData.length > 0 ? (
                <div className="reviews-section">
                  <div className="head-review">
                    <div className="sum-rating">
                      <strong>{summaryRating}</strong>
                      <span>
                        {reviewsCount}{" "}
                        {reviewsCount === 1 ? "review" : "reviews"}
                      </span>
                    </div>
                  </div>
                  <hr style={{ width: "112%", marginBottom: "-10px" }} />
                  <div className="body-review">
                    {matchingReviews.length > 0 ? (
                      matchingReviews.map((review, index) => (
                        <div key={index} className="profile">
                          <div className="thumb-name">
                            <div className="image">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2FRemove-bg.ai_1722105671395.png?alt=media&token=441a4bb8-0da2-4426-ad91-cdbfd9c9115c"
                                alt=""
                              />
                            </div>
                            <div className="grouping">
                              <div className="name">{review.name}</div>
                              <div className="rating">
                                {Array.from(
                                  { length: review.rating },
                                  (_, i) => (
                                    <StarFilled
                                      key={i}
                                      style={{
                                        color: "#D8A25A",
                                        fontSize: "16px",
                                      }}
                                    />
                                  )
                                )}
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
                      ))
                    ) : (
                      <Empty
                        style={{ marginTop: "30px" }}
                        description="No reviews available"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <Empty description="No reviews available" />
              )}
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
                <Card
                  key={product.id}
                  style={{ borderRadius: "0" }}
                  hoverable
                  className="product-card"
                  cover={
                    product.images.length > 0 ? (
                      <>
                        <Link to={`/product/${product.id}`}>
                          <img
                            style={{ borderRadius: "0" }}
                            src={product.images[0]?.url || ""}
                            alt={product.name}
                            className="product-image"
                            onMouseOver={(e) =>
                            (e.currentTarget.src =
                              product.images[1]?.url ||
                              product.images[0]?.url ||
                              "")
                            }
                            onMouseOut={(e) =>
                            (e.currentTarget.src =
                              product.images[0]?.url || "")
                            }
                          />
                        </Link>
                        {product.discountFirstPrice && (
                          <div className="sale-badge">SALE</div>
                        )}
                      </>
                    ) : (
                      <div>No Image Available</div>
                    )
                  }
                >
                  <div className="product-info">
                    <Title level={4} className="product-name">
                      <Link to={`/product/${product.id}`}>
                        <div>{product.name}</div>
                      </Link>
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
                      {product.discountFirstPrice ? (
                        <>
                          <Text className="product-price">
                            ${product.discountFirstPrice}
                          </Text>
                          <Text delete className="product-sale-price">
                            ${product.firstPrice}
                          </Text>
                        </>
                      ) : (
                        <Text className="product-price">
                          ${product.firstPrice}
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
  );
};

export default ProductDetails;
