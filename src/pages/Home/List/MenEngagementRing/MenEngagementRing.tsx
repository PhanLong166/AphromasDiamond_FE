import React, { useState, useEffect } from "react";
import { Container, List } from "./MenEngagementRing.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
// import { menEngagementData } from "./MenEngagementRing.data";
import FAQ from "@/components/FAQs/FAQs";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Banner from "@/components/Banner/Banner";
import { showAllProduct } from "@/services/productAPI";
import { getImage } from "@/services/imageAPI";

const MenEngagementRing: React.FC = () => {
  const { ringMetal } = useParams<{ ringMetal: string }>();
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
            shape: jewelry.JewelrySetting.DiamondShape,
            totalDiamondPrice: jewelry.TotalDiamondPrice,
            firstPrice: jewelry.FirstPrice,
            salePrice: jewelry.SalePrice,
            materialId: jewelry.JewelrySetting.jewelrySettingVariant[0].MaterialJewelryID,
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

  const menEngagementData: Record<string, any> = {
    "white-gold": {
      title: "Men's White Gold Engagement Bands",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Men Engagement Ring" &&
          product.materialId === 3
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fbulgari.png?alt=media&token=1897c535-f005-4d37-a106-26bf8426d5ba",
    },
    "yellow-gold": {
      title: "Men's Yellow Gold Engagement Bands",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Men Engagement Ring" &&
        product.materialId === 1
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Flearnaboutbanner.jpeg?alt=media&token=e7168cf6-8434-4cad-95e8-dc5fce8d81af",
    },
    "rose-gold": {
      title: "Men's Rose Gold Engagement Bands",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Men Engagement Ring" &&
        product.materialId === 2
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FDesign%20Your%20Own%20Pendant.jpeg?alt=media&token=9e6ba197-39d3-4b7e-84f3-a185792eb4aa",
    },
    platinum: {
      title: "Men's Platinum Engagement Bands",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Men Engagement Ring" &&
        product.materialId === 4
      ),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: (
            <p>
              {" "}
              Our women's diamond rings range from $300 to $400 depending on
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

  if (!ringMetal || !menEngagementData[ringMetal]) {
    return <div>Invalid jewelry type selected.</div>;
  }

  const currentMenEngagementData = menEngagementData[ringMetal];

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

  const faqs = menEngagementData[ringMetal]?.faqs || [];

  return (
    <Container>
      <div>
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: currentMenEngagementData.title },
          ]}
        />
      </div>
      <Banner
        bannerImage={currentMenEngagementData.bannerImage}
        title={currentMenEngagementData.title}
        description={currentMenEngagementData.description}
      />
      <List>
        <Row gutter={[16, 16]}>
          {currentMenEngagementData.products.map((product: any) => (
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

      <FAQ title={currentMenEngagementData.title} faqs={faqs} />
    </Container>
  );
};

export default MenEngagementRing;
