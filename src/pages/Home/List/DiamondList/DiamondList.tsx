import React, { useState, useEffect } from "react";
import { Container, List } from "./DiamondList.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
import { showAllDiamond } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";
import FAQ from "@/components/FAQs/FAQs";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Banner from "@/components/Banner/Banner";

const DiamondList: React.FC = () => {
  const { diamondShape } = useParams<{ diamondShape: string }>();
  const navigate = useNavigate();
  const [diamonds, setDiamonds] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(loading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await showAllDiamond(); // Call the function to get the promise
        console.log("API response:", response.data.data);

        if (response && response.data && Array.isArray(response.data.data)) {
          const fetchedDiamonds = response.data.data.map((item: any) => ({
            id: item.DiamondID,
            name: item.Name,
            cut: item.Cut,
            price: item.Price,
            color: item.Color,
            description: item.Description,
            isActive: item.IsActive,
            clarity: item.Clarity,
            shape: item.Shape,
            discountPrice: item.DiscountPrice,
            images: item.usingImage.map((image: any) => ({
              id: image.UsingImageID,
              name: image.Name,
              url: getImage(image.UsingImageID),
            })),
          }));

          console.log(fetchedDiamonds);

          setDiamonds(fetchedDiamonds);
          setLoading(false);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching diamonds:", error);
      }
    };
    fetchData();
  }, []);

  const diamondData: Record<string, any> = {
    "round-shape": {
      title: "Round Diamonds",
      description:
        "The round brilliant cut diamond is celebrated for its unmatched sparkle and brilliance. With 58 meticulously cut facets, it maximizes light reflection and delivers a dazzling display. Its timeless and versatile shape makes it a classic choice for any engagement or special occasion.",
      diamonds: diamonds.filter((diamond) => diamond.shape === "Round"),
      faqs: [
        {
          key: "1",
          label:
            "What makes round diamonds the most popular choice for engagement rings?",
          children: (
            <p>
              {" "}
              Round diamonds are highly favored for their brilliant cut, which
              maximizes light reflection, giving them unparalleled sparkle and
              brilliance.
            </p>
          ),
        },
        {
          key: "2",
          label: "How is the quality of a round diamond determined?",
          children: (
            <p>
              {" "}
              The quality of a round diamond is assessed based on the 4 Cs:
              Carat (weight), Cut (shape and quality of the cut), Color (absence
              of color), and Clarity (absence of internal and external flaws).
            </p>
          ),
        },
        {
          key: "3",
          label: "What settings are best suited for round diamonds?",
          children: (
            <p>
              {" "}
              Round diamonds are versatile and look stunning in a variety of
              settings, including solitaire, halo, three-stone, and vintage
              settings, each enhancing the stone's natural brilliance in unique
              ways.
            </p>
          ),
        },
        {
          key: "4",
          label: "How do I care for and clean my round diamond jewelry?",
          children: (
            <p>
              {" "}
              To maintain the sparkle of your round diamond, clean it regularly
              using a soft brush and mild soap, avoid harsh chemicals, and store
              it separately to prevent scratches. Regular professional cleaning
              is also recommended.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "princess-shape": {
      title: "Princess Diamonds",
      description:
        "The princess cut diamond features a contemporary square or rectangular shape with sharp, clean lines. Known for its modern appeal and vibrant sparkle, this cut highlights the diamond's brilliance in a unique and stylish way, making it a popular choice for a bold and elegant look.",
      diamonds: diamonds.filter((diamond) => diamond.shape === "Princess"),
      faqs: [
        {
          key: "1",
          label: "How is the quality of a princess diamond assessed?",
          children: (
            <p>
              {" "}
              The quality is determined by the 4 Cs: Carat (weight), Cut
              (quality of the cut), Color (absence of color), and Clarity
              (absence of internal and external flaws).
            </p>
          ),
        },
        {
          key: "2",
          label: "What sets princess diamonds apart?",
          children: (
            <p>
              {" "}
              Princess diamonds are known for their square shape with pointed
              corners and brilliant faceting, offering a modern and elegant
              look.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "heart-shape": {
      title: "Heart Diamonds",
      description:
        "The heart cut diamond is a symbol of love and romance, featuring a distinctive heart shape. This cut combines elegance with a playful design, offering a sentimental and eye-catching gemstone that represents deep affection and makes for a memorable and cherished piece.",
      diamonds: diamonds.filter((diamond) => diamond.shape === "Heart"),
      faqs: [
        {
          key: "1",
          label:
            "Heart Diamond What is the average cost of a womens diamond wedding ring?",
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
    "oval-shape": {
      title: "Oval Diamonds",
      description:
        "The oval cut diamond combines the brilliance of a round cut with an elongated, graceful shape. This cut enhances the diamond’s size appearance while offering a sophisticated and elegant look. Its unique form makes it a standout choice for those seeking a refined and distinctive gemstone.",
      diamonds: diamonds.filter((diamond) => diamond.shape === "Oval"),
      faqs: [
        {
          key: "1",
          label:
            "Oval Diamond What is the average cost of a womens diamond wedding ring?",
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
    "cushion-shape": {
      title: "Cushion Diamonds",
      description:
        "The cushion cut diamond has a classic shape with rounded corners, giving it a soft and romantic feel. This cut’s unique faceting pattern enhances the diamond’s brilliance and warmth, making it a beloved choice for its vintage-inspired elegance and timeless appeal.",
      diamonds: diamonds.filter((diamond) => diamond.shape === "Cushion"),
      faqs: [
        {
          key: "1",
          label:
            "Cushion Diamond What is the average cost of a womens diamond wedding ring?",
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
    "emerald-shape": {
      title: "Emerald Diamonds",
      description:
        "The emerald cut diamond is known for its rectangular shape and stepped facets that emphasize clarity and elegance. This cut offers a sophisticated, vintage-inspired look, showcasing the diamond’s natural beauty with a striking, refined appearance.",
      diamonds: diamonds.filter((diamond) => diamond.shape === "Emerald"),
      faqs: [
        {
          key: "1",
          label:
            "Emerald Diamond What is the average cost of a womens diamond wedding ring?",
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
    "asscher-shape": {
      title: "Asscher Diamonds",
      description:
        "The asscher cut diamond features a square shape with beveled corners and a stepped faceting pattern. This cut combines vintage charm with modern sophistication, creating a captivating and elegant appearance that highlights the diamond’s depth and clarity.",
      diamonds: diamonds.filter((diamond) => diamond.shape === "Asscher"),
      faqs: [
        {
          key: "1",
          label:
            "Asscher Diamond What is the average cost of a womens diamond wedding ring?",
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
    "marquise-shape": {
      title: "Marquise Diamonds",
      description:
        "The marquise cut diamond is distinguished by its elongated, boat-like shape with pointed ends. Designed to maximize carat weight, this cut creates a dramatic and elegant look, offering a striking and unique visual impact that makes it a favorite for standout jewelry pieces.",
      diamonds: diamonds.filter((diamond) => diamond.shape === "Marquise"),
      faqs: [
        {
          key: "1",
          label:
            "Marquise Diamond What is the average cost of a womens diamond wedding ring?",
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
    "radiant-shape": {
      title: "Radiant Diamonds",
      description:
        "The radiant cut diamond merges the elegance of the emerald cut with the brilliance of the round cut. With cropped corners and a faceted design, this cut provides a vibrant sparkle and a modern, sophisticated look that captures attention with its dynamic beauty.",
      diamonds: diamonds.filter((diamond) => diamond.shape === "Radiant"),
      faqs: [
        {
          key: "1",
          label:
            "Radiant Diamond What is the average cost of a womens diamond wedding ring?",
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
    "pear-shape": {
      title: "Pear Diamonds",
      description:
        "The pear cut diamond features a teardrop shape that combines the brilliance of a round cut with an elongated form. This cut offers a graceful and elegant look, with its unique shape enhancing the diamond’s sparkle and making it a charming choice for those seeking a touch of romance.",
      diamonds: diamonds.filter((diamond) => diamond.shape === "Pear"),
      faqs: [
        {
          key: "1",
          label:
            "Pear Diamond What is the average cost of a womens diamond wedding ring?",
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
  };

  if (!diamondShape || !diamondData[diamondShape]) {
    return <div>Invalid diamond shape selected.</div>;
  }

  const currentDiamondData = diamondData[diamondShape];
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

  const faqs = diamondData[diamondShape]?.faqs || [];

  return (
    <Container>
      <div>
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: currentDiamondData.title },
          ]}
        />
      </div>
      <Banner
        bannerImage={currentDiamondData.bannerImage}
        title={currentDiamondData.title}
        description={currentDiamondData.description}
      />
      <List>
        <Row gutter={[16, 16]}>
          {currentDiamondData.diamonds.map((diamond: any) => (
            <Col key={diamond.id} span={6}>
              <Card
                style={{ borderRadius: "0" }}
                hoverable
                className="product-card"
                cover={
                  <>
                    <Link to={`/diamond/${diamond.id}`}>
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
                    {diamond.discountPrice &&
                      diamond.discountPrice !== diamond.price && (
                        <div className="sale-badge">SALE</div>
                      )}
                  </>
                }
              >
                <div className="product-info">
                  <Title level={4} className="product-name">
                    <Link to={`/diamond/${diamond.id}`}>{diamond.name}</Link>
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
                      {diamond.discountPrice &&
                      diamond.discountPrice !== diamond.price
                        ? diamond.discountPrice
                        : diamond.price}
                    </Text>
                    {diamond.discountPrice &&
                      diamond.discountPrice !== diamond.price && (
                        <Text delete className="product-sale-price">
                          ${diamond.price}
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
                  onClick={() => navigate(config.routes.public.diamond)}
                >
                  SHOW ALL
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </List>
      <FAQ title={currentDiamondData.title} faqs={faqs} />
    </Container>
  );
};

export default DiamondList;
