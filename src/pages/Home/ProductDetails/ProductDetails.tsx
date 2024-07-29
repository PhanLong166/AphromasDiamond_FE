import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
const { Title, Text } = Typography;
// import { products, Product } from "../shared/ListOfProducts";
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
  // Review,
  ProductSection,
  ButtonAdd,
  Space,
  List,
  // ProductSectionViewed,
  // StyledPagination,
  Condition,
  CustomBreadcrumb,
} from "./ProductDetails.styled";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import { showAllJewelryType } from "@/services/jewelryTypeAPI";
// import { get } from "@/services/apiCaller";
// import { showAllMaterial } from "@/services/materialAPI";
import { showAllSize } from "@/services/sizeAPI";
import { getProductDetails, showAllProduct } from "@/services/productAPI";
import { getImage } from "@/services/imageAPI";
import { showAllFeedback } from "@/services/feedBackAPI";
const ProductDetails: React.FC = () => {
  //tab description + cmt
  const [activeTab, setActiveTab] = useState("product-description");

  const showTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  //Metal
  const metalData = [
    { id: "yellow", label: "14k", type: "14K Yellow Gold" },
    { id: "white", label: "14k", type: "14K White Gold" },
    { id: "rose", label: "14k", type: "14K Rose Gold" },
    { id: "platinum", label: "Pt", type: "Platinum" },
  ];
  const [selectedMetal, setSelectedMetal] = useState("");
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
  const [foundProduct, setFoundProduct] = useState<any | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [sameBrandProducts, setSameBrandProducts] = useState<any[]>([]);
  const [productId, setProductId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log("Fetching product details...");
        const response = await getProductDetails(Number(id));
        if (response.status === 200) {
          const product = response.data.data;
          setFoundProduct(product);
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
                  salePrice: jewelry.SalePrice,
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

          // Call fetchFeedbackDetail if diamondId is set
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
      }
    };

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
              diamondId: feedback.DiamondID,
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

    fetchProductDetails();
  }, [id, productId]);

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
  };

  return (
    <Body>
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
                    {Array.from({ length: foundProduct.Stars }, (_, i) => (
                      <StarFilled key={i} />
                    ))}
                  </ProductRating>
                </Heading>
                <ProductInfo>
                  <div className="wrap">
                    <div className="info-box">
                      {foundProduct.JewelrySetting.jewelryType.Name}
                    </div>
                    <div className="info-box">
                      {foundProduct.JewelrySetting.DiamondShape}
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
                            className={`metal-button ${metal.id} ${
                              selectedMetal === metal.id ? "selected" : ""
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
                {foundProduct.JewelrySetting.jewelryType.Name === "Ring" && (
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
                            className={`size-button ${
                              selectedSize === size.SizeValue ? "selected" : ""
                            }`}
                            onClick={() => handleClick(size.SizeValue)}
                          >
                            {size.SizeValue}
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
                        {foundProduct.FirstPrice +
                          foundProduct.TotalDiamondPrice}
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
                <Condition>
                  <div className="payment-options-box">
                    <h3>Tip for Free Shipping:</h3>
                    <li>Free shipping on orders of 2 or more items</li>
                  </div>
                </Condition>
                <ButtonContainer>
                  <ButtonAdd className="add" onClick={() => navigate("/cart")}>
                    ADD TO CART
                  </ButtonAdd>
                  <Button className="checkout button_slide slide_right">
                    <span>CHECKOUT</span>
                  </Button>
                </ButtonContainer>
                {/* <Shipping>
                  <ShippingList>
                    <ShippingItem>
                      <span>Free shipping & return</span>
                    </ShippingItem>
                    <ShippingItem>
                      <span>Estimate delivery: &#160;</span>
                      <span className="delivery"> 01 - 07 Jan, 2024</span>
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
                    <li>
                      Diamond Shape: {foundProduct.JewelrySetting.DiamondShape}
                    </li>
                    <li>
                      Quantity:{" "}
                      {foundProduct.TotalQuantityJewelrySettingVariants}
                    </li>
                    <li>Collection: {foundProduct?.CollectionID}</li>
                    <li>Setting: {foundProduct.JewelrySetting.Name}</li>
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
            {/* <Review>
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
            </Review> */}
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
                        {product.salePrice && (
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
                      <Text className="product-price">
                        ${product.firstPrice + product.totalDiamondPrice}
                      </Text>
                      {product.salePrice && (
                        <Text delete className="product-sale-price">
                          ${product.totalDiamondPrice}
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
