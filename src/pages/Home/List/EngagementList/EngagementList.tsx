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
        "Propose with timeless style when you design a handcrafted ring with a round brilliant diamond. Round diamonds are the most popular choice at AD because of their traditional look and incredible sparkle. This shape is also the most versatile, pairing seamlessly with virtually every setting style offered at AD.",
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
        " Discover the allure of our princess-cut diamond rings, characterized by their clean lines and modern elegance. Available in yellow gold, white gold, rose gold, or platinum settings, these rings are meticulously crafted to capture the essence of grace and luxury, making them ideal for celebrating milestones and special moments. Each ring reflects precision craftsmanship and a contemporary aesthetic, perfect for those who appreciate refined beauty with a touch of glamour.",
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
        "Symbolizing romance and devotion, our heart-shaped diamond rings are a testament to everlasting love. Expertly set in yellow gold, white gold, rose gold, or platinum, each ring is a blend of artistry and emotion, making it a perfect expression of love and affection. With their timeless design and exquisite detailing, these rings are cherished heirlooms that symbolize the deep bond between two individuals.",
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
        "Embrace the distinctive beauty of our oval-shaped diamond rings, known for their timeless appeal and unique charm. Available in yellow gold, white gold, rose gold, or platinum settings, these rings exude sophistication and allure, making them a captivating choice for those who appreciate classic elegance with a modern twist. Each ring is meticulously crafted to enhance the diamond's natural brilliance and fire, creating a piece that stands out with understated elegance and grace.",
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
        "Our cushion-cut diamond rings combine classic charm with contemporary flair. Featuring square-shaped diamonds set in yellow gold, white gold, rose gold, or platinum, these rings are crafted to highlight the diamond's brilliance and fire, making them a stunning choice for those who desire a blend of tradition and luxury. Each ring is designed with meticulous attention to detail, ensuring a piece that is both timeless and distinctive, perfect for making a statement of enduring elegance.",
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
        "Make a statement with our emerald-cut diamond rings, renowned for their striking beauty and bold presence. Set in yellow gold, white gold, rose gold, or platinum, these rings showcase the diamond's clarity and geometric elegance, offering a timeless and sophisticated look for any occasion. Each ring is crafted with precision to enhance the diamond's natural allure, making it a symbol of luxury and refinement that will be cherished for generations.",
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
        "Experience luxury with our asscher-cut diamond rings, distinguished by their octagonal shape and Art Deco-inspired design. Crafted in yellow gold, white gold, rose gold, or platinum, these rings exude vintage charm and modern sophistication, making them a captivating choice for those who appreciate classic elegance with a touch of glamour. Each ring is a testament to superior craftsmanship and timeless design, ideal for marking life's most special moments with style and grace.",
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
        "Celebrate elegance with our marquise-cut diamond rings, distinguished by their elongated shape and graceful curves. Available in yellow gold, white gold, rose gold, or platinum settings, these rings offer a unique blend of vintage charm and contemporary allure, making them an exquisite choice for those who seek timeless beauty and refined craftsmanship. Each ring is crafted with precision to accentuate the diamond's brilliance, creating a piece that embodies sophistication and grace.",
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
        "Our radiant-cut diamond rings are designed to dazzle and delight. Featuring a rectangular shape that maximizes brilliance, these rings are set in yellow gold, white gold, rose gold, or platinum, capturing the essence of sophistication and luxury with every facet. Each ring is meticulously crafted to reflect the diamond's radiance and fire, creating a piece that stands out as a symbol of elegance and refinement, perfect for celebrating love and achievement.",
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
        "Embrace elegance with our pear-shaped diamond rings, admired for their graceful silhouette and feminine allure. Set in yellow gold, white gold, rose gold, or platinum, these rings are designed to reflect the diamond's natural brilliance and sophistication, making them a perfect symbol of everlasting love and refinement. Each ring is a testament to exceptional craftsmanship and timeless design, ideal for marking life's most cherished moments with elegance and style.",
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
