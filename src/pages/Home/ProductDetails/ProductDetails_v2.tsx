import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
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
  // ProductSectionViewed,
  StyledPagination,
  CustomBreadcrumb,
} from "./ProductDetails.styled";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { showAllMaterial } from "@/services/materialAPI";
import { getProductDetails } from "@/services/productAPI";
import { getImage } from "@/services/imageAPI";
import { Stars } from "../AboutUs/AboutUs.styled";
import { diamonds } from "../AllDiamond/AllDiamond.props";
// import { showAllJewelryType } from "@/services/jewelryTypeAPI";
// import { get } from "@/services/apiCaller";
// import { showAllMaterial } from "@/services/materialAPI";
// import { showAllSize } from "@/services/sizeAPI";

const ProductDetails_v2: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const getParamsID = id ? parseInt(id) : 0;
  const [foundProduct, setFoundProduct] = useState<Product | null>(null);
  const [foundProductDetail, setFoundProductDetail] = useState<any | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductDetails(Number(getParamsID));
        const fetchData = response.data?.data;

        if (fetchData) {
          const fetchProduct = {
            id: fetchData.ProductID,
            name: fetchData.Name,
            brand: fetchData.Brand,
            quantity: fetchData.Quantity,
            stars: fetchData.Stars || 0,
            shape: fetchData.JewelrySetting?.DiamondShape,
            totalDiamondPrice: fetchData.TotalDiamondPrice,
            discount: fetchData.Discount?.PercentDiscounts || 0,
            salePrice: fetchData.SalePrice, // Assuming there's a salePrice field
            jewelryType: fetchData.JewelrySetting?.jewelryType?.Name, // Ensure correct nesting
            diamonds: fetchData.Diamond?.map((diamond: any) => ({
              id: diamond?.DiamondID,
              name: diamond?.Name,
              shape: diamond?.Shape,
              cut: diamond?.Cut,
              price: diamond?.Price,
              discountPrice: diamond?.DiscountPrice,
              color: diamond?.Color,
              carat: diamond?.WeightCarat,
              percentDepth: diamond?.PercentDepth,
              lengthOnWidthRatio: diamond?.LengthOnWidthRatio,
              clarity: diamond?.Clarity
            })),
            averageCarat: (fetchData.Diamond?.map((diamond: any) => diamond?.WeightCarat).reduce((rs: number, current: number) => rs + current, 0) / fetchData.Diamond?.length).toFixed(2) || 'Complex',
            images: fetchData.UsingImage?.map((image: any) => ({
              id: image?.UsingImageID,
              url: getImage(image.UsingImageID),
            })),
            JewelrySettingVariants: fetchData.JewelrySetting?.jewelrySettingVariant?.map((variant: any) => ({
              id: variant.JewelrySettingVariantID,
              sizeID: variant.SizeID,
              materialID: variant.MaterialJewelryID,
              weight: variant.Weight,
              quantity: variant.Quantity,
              price: variant.Price
            })),
            firstPriceProduct: (fetchData.TotalDiamondPrice + fetchData.JewelrySetting?.jewelrySettingVariant[0]?.Price) * (100 - fetchData.Discount?.PercentDiscounts) / 100,
            //Prrr: jewelry.totalDiamondPrice?0

          };
          console.log("API detail response ", fetchProduct.jewelryType);
          setFoundProductDetail(fetchProduct);
        } else {
          console.error('fetchData is undefined or null');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, []);

  const [metals, setMetal] = useState<any[]>([])
  useEffect(() => {
    const fetchMetal = async () => {
      try {
        const response = await showAllMaterial()
        if (response && response.data && Array.isArray(response.data.data)){
          const fetchMaterial = response.data?.data?.map((material: any)=>({
            id: material?.MaterialJewelryID,
            name: material?.Name,
            sellPrice: material?.SellPrice
          }));
          setMetal(fetchMaterial);
          
          
        } else {
          console.error("Unexpected API response format:", response.data);
        }
        
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchMetal();
  }, [])
  useEffect(() => {
    console.log("Updated foundProductDetail:", foundProductDetail);
  }, [foundProductDetail]);

  useEffect(() => {
    console.log("Updated", metals);
  }, [metals]);

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

  //Metal
  const metalData = [
    { id: "yellow", label: "14k", type: "14K Yellow Gold" },
    { id: "white", label: "14k", type: "14K White Gold" },
    { id: "rose", label: "14k", type: "14K Rose Gold" },
    { id: "platinum", label: "Pt", type: "Platinum" },
  ];
  const [selectedMetal, setSelectedMetal] = useState("");
  const [metalType, setMetalType] = useState("");

  // interface MetalData {
  //   id: string;
  //   label: string;
  //   type: string;
  // }

  // const [metalData, setMetalData] = useState<MetalData[]>([]);
  // const [selectedMetal, setSelectedMetal] = useState("");
  // const [metalType, setMetalType] = useState("");
  // useEffect(() => {
  //   const fetchMetalData = async () => {
  //     try {
  //       const response = await showAllMaterial();
  //       if (response.status === 200) {
  //         const apiData = response.data.data; // Accessing the correct data array
  //         const mappedData = apiData.map((item: any) => ({
  //           id: item.Name.toLowerCase().replace(/ /g, ""),
  //           label: item.Name.includes("14K") ? "14k" : "Pt",
  //           type: item.Name,
  //         }));
  //         setMetalData(mappedData);
  //         if (mappedData.length > 0) {
  //           setSelectedMetal(mappedData[0].id);
  //           setMetalType(mappedData[0].type);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching metal data:", error);
  //     }
  //   };

  //   fetchMetalData();
  // }, []);

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
  // const [sizes, setSizes] = useState<any[]>([]); // Replace 'any' with a more specific type if possible
  // const [selectedSize, setSelectedSize] = useState<number | null>(null);

  // useEffect(() => {
  //   const fetchSizes = async () => {
  //     try {
  //       const response = await showAllSize(); // Assuming this function fetches sizes from the API
  //       if (response.status === 200) {
  //         setSizes(response.data.data); // Assuming the sizes array is in 'data' property of the response
  //         if (response.data.data.length > 0) {
  //           setSelectedSize(response.data.data[0].sizeId); // Assuming 'sizeId' is the property of each size object
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error fetching sizes:', error);
  //     }
  //   };

  //   fetchSizes();
  // }, []);

  // const handleClick = (sizeId: number) => {
  //   setSelectedSize(sizeId);
  //   // Handle any other logic related to selecting a size, such as updating UI or making API calls
  // };

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

  // //PARAM
  // const { id } = useParams<{ id: string }>();
  // const [foundProduct, setFoundProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedThumb, setSelectedThumb] = useState(0);

  const [sameBrandProducts, setSameBrandProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const product = products.find((product) => product.id === id);
  //   if (product) {
  //     setFoundProduct(product);
  //     setMainImage(product.images[0]);
  //     setSelectedThumb(0);

  //     const filteredProducts = products.filter(
  //       (p) => p.firm === product.firm && p.id !== product.id
  //     );

  //     const maxProductsToShow = 4;
  //     const productsToShow =
  //       filteredProducts.length <= maxProductsToShow
  //         ? filteredProducts
  //         : filteredProducts
  //           .sort(() => 0.5 - Math.random())
  //           .slice(0, maxProductsToShow);

  //     setSameBrandProducts(productsToShow);
  //   } else {
  //     setFoundProduct(null);
  //   }
  // }, [id, products]);

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    // const mainImageUrl = getImage(foundProductDetail?.images[0]?.id);
    // setFoundProduct(product);
    // setMainImage(mainImageUrl);
    // setSelectedThumb(0);
    const mainImageUrl = getImage(foundProductDetail?.images[0]?.id);
    console.log("Main image: " + foundProductDetail?.images[0]?.id)
    setMainImage(mainImageUrl);
    setSelectedThumb(0);
    const maxProductsToShow = 4;
    // const productsToShow =
    //   filteredProducts.length <= maxProductsToShow
    //     ? filteredProducts
    //     : filteredProducts
    //       .sort(() => 0.5 - Math.random())
    //       .slice(0, maxProductsToShow);

    // setSameBrandProducts(productsToShow);

  }, [id, products, foundProductDetail]);
  // if (!foundProduct) {
  //   return <div>Product not found</div>;
  // }
  if (!foundProductDetail) {
    return <div>Product not found</div>;
  }

  const thumbnailImages =
    foundProduct?.images.filter((src: any): src is string => !!src) || [];

  const thumbnailImagesDetail =
    foundProductDetail?.images?.map(
      (img: any) => getImage(img.id)
    ) || [];

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };

  const changeImageDetail = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };


  const handleButtonClick = (id: any, type: any) => {
    setSelectedMetal(id);
    setMetalType(type);
  };

  //2 same

  // const recentlyProductIds = ["20", "3", "16", "2"];
  // const recentlyViewedProducts = products.filter((product) =>
  //   recentlyProductIds.includes(product.id)
  // );
  return (
    <Body>
      <div>
        <CustomBreadcrumb
          separator=">"
          items={[
            { title: "Home", href: "/" },
            { title: "All Product", href: "/all" },
            { title: `${foundProductDetail?.jewelryType} - #${foundProductDetail?.id}` },
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
                      {thumbnailImagesDetail.map((src: any, index: any) => (
                        <Item
                          key={index}
                          className={selectedThumb === index ? "selected" : ""}
                          onClick={() => changeImageDetail(src, index)}
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
                  <Title className="main-title">{foundProductDetail?.name}</Title>
                  <ProductRating>
                    {[...Array(Number(foundProductDetail?.stars))].map((_, i) => (
                      <StarFilled key={i} />
                    ))}
                  </ProductRating>
                </Heading>
                <ProductInfo>
                  <div className="wrap">
                    <div className="info-box">{foundProductDetail?.diamonds[0]?.clarity}</div>
                    <div className="info-box">{foundProductDetail?.averageCarat}</div>
                    <div className="info-box">{foundProductDetail?.diamonds[0]?.color}</div>
                  </div>
                </ProductInfo>
                {foundProductDetail?.jewelryType.toLowerCase() !==
                  "men-engagement-ring" &&
                  foundProductDetail?.jewelryType.toLowerCase() !==
                  "men-wedding-ring" && (
                    <ProductMetal>
                      <span className="fill">Metal Type: {metalType}</span>
                      <div className="wrap">
                        {metalData.map((metal) => (
                          <button
                            key={metal.id}
                            className={`metal-button ${metal.id} ${selectedMetal === metal.id ? "selected" : ""
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
                {foundProductDetail?.jewelryType?.toLowerCase().includes("ring") && (
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
                            className={`size-button ${selectedSize === size ? "selected" : ""
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
                        {foundProductDetail?.salePrice
                          ? foundProductDetail?.salePrice
                          : foundProductDetail?.price}
                      </CurrentPrice>
                      {foundProductDetail?.salePrice && (
                        <div className="wrap">
                          <BeforePrice>${foundProductDetail?.price}</BeforePrice>
                          <Discount>- {foundProductDetail?.percentSale}</Discount>
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
              <h3>{foundProductDetail?.name}</h3>
              <p>{foundProductDetail?.description}</p>
              <p>{foundProductDetail?.description}</p>
            </TextBlock>
            <DotGrid>
              <div className="wrapper2">
                <ListBlock>
                  <h4>What is this?</h4>
                  <ul>
                    <li>ID Number: {foundProductDetail?.id}</li>
                    <li>Firm: {foundProductDetail?.brand}</li>
                    {/* <li>Width: {foundProductDetail?.width}</li> */}
                    <li>Quantity: {foundProductDetail?.quantity}</li>
                    <li>Shape: {foundProductDetail?.shape}</li>
                    <li>Total Carat (Average): {foundProductDetail?.averageCarat}</li>
                    <li>Color: {foundProductDetail?.diamonds[0]?.color}</li>
                    <li>Clarity: {foundProductDetail?.diamonds[0]?.clarity}</li>
                    <li>Setting Type: {foundProductDetail?.jewelryType}</li>
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
                <Card
                  style={{ borderRadius: "0" }}
                  hoverable
                  className="product-card"
                  cover={
                    <>
                      <Link to={`/product/${product.id}`}>
                        <img
                          style={{ borderRadius: "0" }}
                          src={product.images[0]}
                          alt={product.name}
                          className="product-image"
                          onMouseOver={(e) =>
                            (e.currentTarget.src = product.images[2])
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.src = product.images[0])
                          }
                        />
                      </Link>
                      {product.salePrice && (
                        <div className="sale-badge">SALE</div>
                      )}
                    </>
                  }
                >
                  <div className="product-info">
                    <Title level={4} className="product-name">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
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
      {/* <ProductSectionViewed>
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
                      <Link to={`/product/${product.id}`}>
                        <img
                          style={{ borderRadius: "0" }}
                          src={product.images[0]}
                          alt={product.name}
                          className="product-image"
                          onMouseOver={(e) =>
                            (e.currentTarget.src = product.images[2])
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.src = product.images[0])
                          }
                        />
                      </Link>
                      {product.salePrice && (
                        <div className="sale-badge">SALE</div>
                      )}
                    </>
                  }
                >
                  <div className="product-info">
                    <Title level={4} className="product-name">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
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
      </ProductSectionViewed> */}
    </Body>
  );
};

export default ProductDetails_v2;
