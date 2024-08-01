import React, { useState, useEffect } from "react";
import { Container, List, StyledPagination } from "./ProductList.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
import FAQ from "@/components/FAQs/FAQs";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Banner from "@/components/Banner/Banner";
import { showAllProduct } from "@/services/productAPI";
import { getImage } from "@/services/imageAPI";

const ProductList: React.FC = () => {
  const { jewelryType } = useParams<{ jewelryType: string }>();
  const navigate = useNavigate();
  const excludedCategories = [
    "Wedding Ring",
    "Engagement Ring",
    "Men Engagement Ring",
    "Men Wedding Ring",
  ];

  const [products, setProducts] = useState<any[]>([]);

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

  const jewelryData: Record<string, any> = {
    bracelet: {
      title: "Bracelet",
      description:
        "A diamond bracelet combines the luxurious allure of diamonds with the elegance of fine jewelry. Featuring a range of designs from delicate tennis bracelets to bold statement pieces, diamond bracelets add a touch of glamour to any ensemble. The timeless sparkle of diamonds ensures that this piece remains a sophisticated and versatile accessory.",
      products: products.filter(
        (product) => product.jewelryType === "Bracelet"
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fnecklacelist.jpeg?alt=media&token=e518f32c-79ba-4898-9438-4a294882b4e9",
    },

    necklace: {
      title: "Necklace",
      description:
        "A diamond necklace is a classic piece of jewelry that offers exceptional elegance and sparkle. With designs ranging from simple, understated pendants to elaborate, statement pieces, a diamond necklace enhances any outfit with its luminous brilliance. Its timeless appeal makes it a cherished addition to any jewelry collection, perfect for celebrating special moments.",
      products: products.filter(
        (product) => product.jewelryType === "Necklace"
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FDesign%20Your%20Own%20Pendant.jpeg?alt=media&token=9e6ba197-39d3-4b7e-84f3-a185792eb4aa",
    },
    earrings: {
      title: "Earrings",
      description:
        "A diamond earring exudes sophistication and charm, offering a radiant touch to any outfit. Available in various styles, from simple studs to elegant drop designs, diamond earrings are designed to capture light and enhance the wearer's natural beauty. Their sparkling brilliance makes them a versatile accessory, perfect for both everyday wear and special occasions.",
      products: products.filter((product) => product.jewelryType === "Earring"),
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20Diamond%20Earring.jpeg?alt=media&token=7fe4d3e5-6894-4b52-90b8-ac1d94b5f588",
    },
    ring: {
      title: "Rings Setting",
      description:
        "A diamond ring is a stunning symbol of elegance and luxury, featuring the timeless brilliance of a finely cut diamond. Whether set in a classic solitaire or a more intricate design, a diamond ring captures light with exceptional sparkle and clarity. Its enduring beauty makes it a perfect choice for special occasions and a cherished piece in any jewelry collection.",
      products: products.filter(
        (product) =>
          product.type === "Rings" &&
          !excludedCategories.includes(product.jewelryType)
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20grown%20diamonds.jpeg?alt=media&token=63d86a3e-c0cb-48ea-a8e7-38e650e17425",
    },
  };

  if (!jewelryType || !jewelryData[jewelryType]) {
    return <div>Invalid jewelry type selected.</div>;
  }

  const currentJewelryData = jewelryData[jewelryType];

  const [wishList, setWishList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const handleChangePage = (page: any) => {
    setCurrentPage(page);
  };

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

  const faqs = jewelryData[jewelryType]?.faqs || [];

  return (
    <Container>
      <div>
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: currentJewelryData.title },
          ]}
        />
      </div>
      <Banner
        bannerImage={currentJewelryData.bannerImage}
        title={currentJewelryData.title}
        description={currentJewelryData.description}
      />
      <hr
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          marginTop: "32px",
          border: "1px solid rgba(21, 21, 66, 0.3)",
        }}
      />
      <List>
        <Row gutter={[16, 16]}>
          {currentJewelryData.products
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map((product: any) => (
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
          <Col span={6}>
            <Card className="show-all-card">
              <div className="show-all-content">
                <Text className="show-all-text">
                  Don't see what you're looking for? <br />
                  Browse our full catalog
                </Text>
                <button
                  className="show-all-button"
                  onClick={() => navigate(config.routes.public.allProduct)}
                >
                  SHOW ALL
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </List>

      <StyledPagination
        current={currentPage}
        pageSize={pageSize}
        total={currentJewelryData.products.length}
        onChange={handleChangePage}
      />

      <FAQ title={currentJewelryData.title} faqs={faqs} />
    </Container>
  );
};

export default ProductList;
