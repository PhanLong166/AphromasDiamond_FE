import React, { useState, useEffect } from "react";
import { Container, List } from "./WeddingList.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
// import { jewelryWeddingData } from "./WeddingList.data";
import FAQ from "@/components/FAQs/FAQs";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Banner from "@/components/Banner/Banner";
import { showAllProduct } from "@/services/productAPI";
import { getImage } from "@/services/imageAPI";

const WeddingList: React.FC = () => {
  const { ringShape } = useParams<{ ringShape: string }>();
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

  const jewelryWeddingData: Record<string, any> = {
    "round-wedding-ring": {
      title: "Round Diamond Wedding Rings",
      description:
        "The round brilliant cut diamond ring is a timeless classic, celebrated for its exceptional sparkle and brilliance. With 58 facets designed to maximize light reflection, this shape remains a popular choice for its versatility and enduring elegance.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Wedding Ring" && product.shape === "Round"
      ),
      faqs: [
        {
          key: "1",
          label:
            "Round Ring What is the average cost of a womens diamond wedding ring?",
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "princess-wedding-ring": {
      title: "Princess Diamond Wedding Rings",
      description:
        "A princess cut diamond ring offers a modern twist with its square or rectangular shape and clean, sharp lines. Known for its contemporary appeal and stunning sparkle, this cut combines sophistication with a bold edge, making it a favorite for those seeking a unique statement.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Wedding Ring" && product.shape === "Princess"
      ),
      faqs: [
        {
          key: "1",
          label:
            "Princess Ring What is the average cost of a womens diamond wedding ring?",
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "heart-wedding-ring": {
      title: "Heart Diamond Wedding Rings",
      description:
        "The heart cut diamond ring is a truly romantic choice, featuring a distinctive heart shape that symbolizes love and affection. With its unique and playful design, this cut offers a stunning and sentimental option for a memorable and cherished piece.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Wedding Ring" && product.shape === "Heart"
      ),
      faqs: [
        {
          key: "1",
          label:
            "Heart Ring What is the average cost of a womens diamond wedding ring?",
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "oval-wedding-ring": {
      title: "Oval Diamond Wedding Rings",
      description:
        "The oval cut diamond ring features an elongated shape that exudes elegance and grace. With its similar brilliance to the round cut but with a distinctive twist, the oval cut creates the illusion of greater size and a refined, sophisticated look.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Wedding Ring" && product.shape === "Oval"
      ),
      faqs: [
        {
          key: "1",
          label:
            "Oval Ring What is the average cost of a womens diamond wedding ring?",
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "cushion-wedding-ring": {
      title: "Cushion Diamond Wedding Rings",
      description:
        "The cushion cut diamond ring combines a square or rectangular shape with rounded corners, giving it a soft and romantic appearance. This vintage-inspired cut enhances the diamond's brilliance and offers a warm, classic feel with its distinctive sparkle.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Wedding Ring" && product.shape === "Cushion"
      ),
      faqs: [
        {
          key: "1",
          label:
            "Cushion Ring What is the average cost of a womens diamond wedding ring?",
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "emerald-wedding-ring": {
      title: "Emerald Diamond Wedding Rings",
      description:
        "An emerald cut diamond ring showcases a rectangular shape with stepped facets that highlight clarity and elegance. Its unique cut provides a sophisticated, vintage appeal, emphasizing the diamond's depth and purity with a refined, timeless charm.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Wedding Ring" && product.shape === "Emerald"
      ),
      faqs: [
        {
          key: "1",
          label:
            "Emerald Ring What is the average cost of a womens diamond wedding ring?",
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "asscher-wedding-ring": {
      title: "Asscher Diamond Wedding Rings",
      description:
        "The asscher cut diamond ring features a square shape with beveled corners and a stepped faceting pattern. Known for its vintage-inspired elegance and captivating depth, this cut offers a unique and glamorous touch to any jewelry collection.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Wedding Ring" && product.shape === "Asscher"
      ),
      faqs: [
        {
          key: "1",
          label:
            "Asscher Ring What is the average cost of a womens diamond wedding ring?",
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "marquise-wedding-ring": {
      title: "Marquise Diamond Wedding Rings",
      description:
        "The marquise cut diamond ring features an elongated, boat-like shape with pointed ends, designed to maximize carat weight and create the illusion of a larger stone. This shape is perfect for those seeking a dramatic and elegant look with a touch of flair.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Wedding Ring" && product.shape === "Marquise"
      ),
      faqs: [
        {
          key: "1",
          label:
            "Marquise Ring What is the average cost of a womens diamond wedding ring?",
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "radiant-wedding-ring": {
      title: "Radiant Diamond Wedding Rings",
      description:
        "The radiant cut diamond ring combines the elegance of the emerald cut with the brilliance of the round cut. Featuring cropped corners and a faceted design, this shape offers a vibrant sparkle and a modern, sophisticated appeal.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Wedding Ring" && product.shape === "Radiant"
      ),
      faqs: [
        {
          key: "1",
          label:
            "Radiant Ring What is the average cost of a womens diamond wedding ring?",
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "pear-wedding-ring": {
      title: "Pear Diamond Wedding Rings",
      description:
        "A pear cut diamond ring blends the brilliance of a round cut with the unique shape of a teardrop. This shape offers a romantic and elegant look, with its elongated form and graceful curves creating a stunning and eye-catching centerpiece.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Wedding Ring" && product.shape === "Pear"
      ),
      faqs: [
        {
          key: "1",
          label:
            "Pear Ring What is the average cost of a womens diamond wedding ring?",
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
  };

  if (!ringShape || !jewelryWeddingData[ringShape]) {
    return <div>Invalid diamond ring selected.</div>;
  }

  const currentJewelryWeddingData = jewelryWeddingData[ringShape];

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

  const faqs = jewelryWeddingData[ringShape]?.faqs || [];

  return (
    <Container>
      <div>
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: currentJewelryWeddingData.title },
          ]}
        />
      </div>
      <Banner
        bannerImage={currentJewelryWeddingData.bannerImage}
        title={currentJewelryWeddingData.title}
        description={currentJewelryWeddingData.description}
      />
      <List>
        <Row gutter={[16, 16]}>
          {currentJewelryWeddingData.products.map((product: any) => (
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
                  onClick={() => navigate(config.routes.public.allWedding)}
                >
                  SHOW ALL
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </List>

      <FAQ title={currentJewelryWeddingData.title} faqs={faqs} />
    </Container>
  );
};

export default WeddingList;
