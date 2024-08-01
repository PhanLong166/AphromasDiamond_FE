import React, { useState, useEffect } from "react";
import { Container, List } from "./EngagementList.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
// import { jewelryEngagementData } from "./EngagementList.data";
import FAQ from "@/components/FAQs/FAQs";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Banner from "@/components/Banner/Banner";
import { showAllProduct } from "@/services/productAPI";
import { getImage } from "@/services/imageAPI";

const EngagementList: React.FC = () => {
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

  const jewelryEngagementData: Record<string, any> = {
    "round-engagement-ring": {
      title: "Round Diamond Engagement Rings",
      description:
        "The round brilliant cut diamond ring is a quintessential choice, renowned for its timeless elegance and exceptional sparkle. Featuring a classic round shape with 58 precisely cut facets, this design maximizes light reflection and brilliance. Its versatility makes it a popular choice for various settings and styles, ensuring it remains a favorite for those seeking a ring that combines tradition with breathtaking radiance.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Engagement Ring" && product.shape === "Round"
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
    "princess-engagement-ring": {
      title: "Princess Diamond Engagement Rings",
      description:
        "A princess cut diamond ring offers a contemporary twist on traditional designs with its bold square or rectangular shape and sharp, clean lines. This modern cut is known for its impressive brilliance and fire, which are highlighted by its unique faceting pattern. The princess cut’s geometric elegance and striking visual impact make it an ideal choice for those who appreciate a blend of sophistication and modern flair.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Engagement Ring" &&
          product.shape === "Princess"
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
    "heart-engagement-ring": {
      title: "Heart Diamond Engagement Rings",
      description:
        "The heart cut diamond ring is a truly romantic and symbolic choice, featuring a distinctive heart shape that represents love and affection. This unique cut combines elegance with a playful design, creating a memorable and sentimental piece. The heart cut’s charming and eye-catching appearance makes it an ideal choice for expressing deep feelings and celebrating a special bond.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Engagement Ring" && product.shape === "Heart"
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
    "oval-engagement-ring": {
      title: "Oval Diamond Engagement Rings",
      description:
        "The oval cut diamond ring features an elongated shape that exudes grace and elegance. Its unique form combines the brilliance of the round cut with an elongated silhouette, creating a stunning visual effect. The oval cut is known for its ability to enhance the diamond’s size appearance, offering a refined and sophisticated look that complements various settings and styles with its elegant charm.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Engagement Ring" && product.shape === "Oval"
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
    "cushion-engagement-ring": {
      title: "Cushion Diamond Engagement Rings",
      description:
        "The cushion cut diamond ring blends a square or rectangular shape with softly rounded corners, offering a romantic and vintage-inspired look. This cut is renowned for its captivating sparkle and warmth, achieved through its unique faceting pattern. The cushion cut’s classic appeal and timeless charm make it an enduring choice for those who value both beauty and sentimentality in their jewelry.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Engagement Ring" &&
          product.shape === "Cushion"
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
    "emerald-engagement-ring": {
      title: "Emerald Diamond Engagement Rings",
      description:
        "An emerald cut diamond ring showcases a rectangular shape with broad, flat facets arranged in a step-like fashion. This cut highlights the diamond's clarity and depth, creating a sophisticated and timeless appeal. Its unique design emphasizes the diamond’s natural beauty with a vintage-inspired elegance, making it a distinguished choice for those who appreciate classic and understated luxury.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Engagement Ring" &&
          product.shape === "Emerald"
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
    "asscher-engagement-ring": {
      title: "Asscher Diamond Engagement Rings",
      description:
        "The asscher cut diamond ring features a square shape with cropped corners and a distinctive stepped faceting pattern. Known for its vintage-inspired charm, this cut combines old-world elegance with a contemporary edge. The asscher cut's captivating depth and precision create a stunning visual impact, making it a perfect choice for those who seek a glamorous and unique statement piece.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Engagement Ring" &&
          product.shape === "Asscher"
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
    "marquise-engagement-ring": {
      title: "Marquise Diamond Engagement Rings",
      description:
        "The marquise cut diamond ring features an elongated shape with pointed ends, designed to maximize the carat weight and create an impressive visual effect. Its unique form creates the illusion of a larger stone and adds a touch of drama and sophistication. The marquise cut’s elegant and striking appearance makes it an excellent choice for those seeking a ring with a bold and distinctive character.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Engagement Ring" &&
          product.shape === "Marquise"
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
    "radiant-engagement-ring": {
      title: "Radiant Diamond Engagement Rings",
      description:
        "The radiant cut diamond ring merges the refined elegance of the emerald cut with the brilliance of the round cut. Featuring cropped corners and a faceted design, this cut offers a vibrant and scintillating sparkle. The radiant cut’s modern and sophisticated appearance makes it an ideal choice for those who desire a striking and dynamic look with exceptional radiance.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Engagement Ring" &&
          product.shape === "Radiant"
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
    "pear-engagement-ring": {
      title: "Pear Diamond Engagement Rings",
      description:
        "A pear cut diamond ring combines the brilliance of a round cut with the distinctive shape of a teardrop. This cut offers a graceful and elegant look, with its elongated form creating a stunning and eye-catching centerpiece. The pear cut's unique shape enhances the diamond’s sparkle and visual appeal, making it a perfect choice for those who appreciate a blend of romance and sophistication.",
      products: products.filter(
        (product) =>
          product.jewelryType === "Engagement Ring" && product.shape === "Pear"
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

  if (!ringShape || !jewelryEngagementData[ringShape]) {
    return <div>Invalid diamond ring selected.</div>;
  }

  const currentJewelryEngagementData = jewelryEngagementData[ringShape];

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

  const faqs = jewelryEngagementData[ringShape]?.faqs || [];

  return (
    <Container>
      <div>
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: currentJewelryEngagementData.title },
          ]}
        />
      </div>
      <Banner
        bannerImage={currentJewelryEngagementData.bannerImage}
        title={currentJewelryEngagementData.title}
        description={currentJewelryEngagementData.description}
      />
      <List>
        <Row gutter={[16, 16]}>
          {currentJewelryEngagementData.products.map((product: any) => (
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
      <FAQ title={currentJewelryEngagementData.title} faqs={faqs} />
    </Container>
  );
};

export default EngagementList;
