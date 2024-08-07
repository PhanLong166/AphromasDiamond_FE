import React, { useState, useEffect } from "react";
import {
  Container,
  List,
  // StyledPagination,
} from "./EngagementDesignerList.styled";

import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
// import { designerData } from "./EngagementDesignerList.data";
import FAQ from "@/components/FAQs/FAQs";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Banner from "@/components/Banner/Banner";
import { showAllProduct } from "@/services/productAPI";
import { getImage } from "@/services/imageAPI";

const EngagementDesignerList: React.FC = () => {
  const { designer } = useParams<{ designer: string }>();
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await showAllProduct();
        console.log("API response:", response.data.data);

        if (response && response.data && Array.isArray(response.data.data)) {
          const fetchedProducts = response.data.data.map((jewelry: any) => ({
            id: jewelry.ProductID,
            name: jewelry.Name,
            brand: jewelry.Brand,
            totalDiamondPrice: jewelry.TotalDiamondPrice,
            firstPrice: jewelry.FirstPrice,
            discountFirstPrice: jewelry.DiscountFirstPrice,
            type: jewelry.JewelrySetting.jewelryType.Name,
            jewelryType: jewelry.JewelrySetting?.jewelryType?.Name,
            images: jewelry.UsingImage.map((image: any) => ({
              id: image.UsingImageID,
              url: getImage(image.UsingImageID),
            })),
          }));

          console.log(fetchedProducts);

          setProducts(fetchedProducts);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const designerData: Record<string, any> = {
    zaczacposen: {
      title: "Engagement Ring of Zac Zac Posen",
      description:
        "Zac Posen’s jewelry collection is renowned for its bold and innovative designs that blend high fashion with luxurious craftsmanship. Each piece reflects the brand’s commitment to elegance and modern sophistication, featuring unique details and intricate artistry. Zac Posen’s jewelry adds a touch of glamour and contemporary flair to any ensemble, making it a standout choice for those who appreciate distinctive and stylish adornments.",
      products: products.filter(
        (product) =>
          product.brand === "Zac Zac Posen" &&
          product.jewelryType.includes("Engagement Ring")
      ),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: (
            <p>
              {" "}
              Our women's diamond rings range from $900 to $1000 depending on
              several factors, including the type of metal and diamond carat
              weight.
            </p>
          ),
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: (
            <p>
              {" "}
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20grown%20diamonds.jpeg?alt=media&token=63d86a3e-c0cb-48ea-a8e7-38e650e17425",
    },
    bellavaughan: {
      title: "Engagement Ring of Bella Vaughan",
      description:
        "Bella Vaughan’s jewelry collection is celebrated for its timeless elegance and refined craftsmanship. Known for its classic designs with a modern twist, Bella Vaughan creates pieces that feature intricate detailing and high-quality materials. Each piece embodies sophistication and grace, offering a touch of luxury that enhances any look with understated beauty and lasting appeal.",
      products: products.filter(
        (product) =>
          product.brand === "Bella Vaughan" &&
          product.jewelryType.includes("Engagement Ring")
      ),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: (
            <p>
              {" "}
              Our women's diamond rings range from $700 to $800 depending on
              several factors, including the type of metal and diamond carat
              weight.
            </p>
          ),
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: (
            <p>
              {" "}
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FBrandBvl.jpg?alt=media&token=344f0091-7993-435a-9fc1-e6f689f0e976",
    },
    bluenile: {
      title: "Engagement Ring of Blue Nile Studio",
      description:
        "Blue Nile Studio offers a diverse and stylish range of fine jewelry, known for its commitment to quality and innovation. Featuring a blend of classic and contemporary designs, Blue Nile Studio’s pieces are crafted with precision and care, using the finest materials. The collection highlights elegant simplicity and modern sophistication, making it an excellent choice for those seeking beautiful and enduring jewelry.",
      products: products.filter(
        (product) =>
          product.brand === "Blue Nile Studio" &&
          product.jewelryType.includes("Engagement Ring")
      ),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: (
            <p>
              {" "}
              Our women's diamond rings range from $500 to $600 depending on
              several factors, including the type of metal and diamond carat
              weight.
            </p>
          ),
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: (
            <p>
              {" "}
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FBlue%20Nile%20diamond%20jewelry.jpeg?alt=media&token=79f02baa-b4cf-4368-b838-2c7baa50d305",
    },
    thegallerycollection: {
      title: "Engagement Ring of The Gallery Collection",
      description:
        "The Gallery Collection is renowned for its exquisite craftsmanship and artistic designs. Featuring a range of stunning jewelry pieces, each creation showcases exceptional quality and attention to detail. The collection blends classic elegance with contemporary style, offering unique and sophisticated options that make a statement and reflect timeless beauty.",
      products: products.filter(
        (product) =>
          product.brand === "The Gallery Collection" &&
          product.jewelryType.includes("Engagement Ring")
      ),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: (
            <p>
              {" "}
              Our women's diamond rings range from $276 to $56,024 depending on
              several factors, including the type of metal and diamond carat
              weight.
            </p>
          ),
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: (
            <p>
              {" "}
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Flab_diamonds_sale_banner.6a518.jpg?alt=media&token=b7d30ece-f543-4890-b7de-7c37e1286dfb",
    },
  };

  if (!designer || !designerData[designer]) {
    return <div>Invalid jewelry type selected.</div>;
  }

  const currentDesignerData = designerData[designer];

  const [wishList, setWishList] = useState<string[]>([]);

  useEffect(() => {
    const savedWishList = sessionStorage.getItem("wishlist");
    if (savedWishList) {
      setWishList(JSON.parse(savedWishList));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const toggleWishList = (productId: string) => {
    setWishList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const faqs = designerData[designer]?.faqs || [];

  return (
    <Container>
      <div>
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: currentDesignerData.title },
          ]}
        />
      </div>
      <Banner
        bannerImage={currentDesignerData.bannerImage}
        title={currentDesignerData.title}
        description={currentDesignerData.description}
      />
      <List>
        <Row gutter={[16, 16]}>
          {currentDesignerData.products.map((product: any) => (
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
                            (e.currentTarget.src = product.images[0]?.url || "")
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
          <Col span={6}>
            <Card className="show-all-card">
              <div className="show-all-content">
                <Text className="show-all-text">
                  Don't see what you're looking for? <br />
                  Browse our full catalog
                </Text>
                <button
                  className="show-all-button"
                  onClick={() => navigate(config.routes.public.allEngagement)}
                >
                  SHOW ALL
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </List>
      {/* <StyledPagination
        current={currentPage}
        pageSize={pageSize}
        total={currentDesignerData.products.length}
        onChange={handleChangePage}
      /> */}

      <FAQ title={currentDesignerData.title} faqs={faqs} />
    </Container>
  );
};

export default EngagementDesignerList;
