import React, { useState, useEffect } from "react";
import {
  Container,
  // Banner,
  // LeftSection,
  List,
  StyledPagination,
  // CustomBreadcrumb,
} from "./CutterList.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
// import { cutterData } from "./CutterList.data";
import FAQ from "@/components/FAQs/FAQs";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Banner from "@/components/Banner/Banner";
import { showAllDiamond } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";

const CutterList: React.FC = () => {
  const { diamondCutter } = useParams<{ diamondCutter: string }>();
  const [diamonds, setDiamonds] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
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
            cutter: item.Cutter,
            discountPrice: item.DiscountPrice,
            images: item.usingImage.map((image: any) => ({
              id: image.UsingImageID,
              name: image.Name,
              url: getImage(image.UsingImageID),
            })),
          }));

          console.log(fetchedDiamonds);
          console.log(loading);
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
  const cutterData: Record<string, any> = {
    debeers: {
      title: "Cutter - De Beers Group",
      description:
        "Elevate your style with our diamond bracelets, crafted to perfection in yellow gold, white gold, rose gold, or platinum. Each bracelet features meticulously set diamonds that sparkle with every movement, offering a luxurious and timeless accessory for any occasion. Whether worn alone as a statement piece or layered with other jewelry, our bracelets are designed to enhance your beauty and express your individuality with sophistication and grace.",
      diamonds: diamonds.filter(
        (diamond) => diamond.cutter === "De Beers Group"
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fnecklacelist.jpeg?alt=media&token=e518f32c-79ba-4898-9438-4a294882b4e9",
    },

    arlosa: {
      title: "Cutter - Arlosa",
      description:
        "Adorn yourself with our exquisite diamond necklaces, crafted to capture attention and admiration. Set in yellow gold, white gold, rose gold, or platinum, each necklace showcases the beauty of diamonds in designs that range from classic to contemporary, making them a stunning addition to any jewelry collection. Whether worn as a centerpiece for formal occasions or as an everyday luxury, our necklaces are designed to complement your style and elevate your look with timeless elegance.",
      diamonds: diamonds.filter((diamond) => diamond.cutter === "Arlosa"),
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FDesign%20Your%20Own%20Pendant.jpeg?alt=media&token=9e6ba197-39d3-4b7e-84f3-a185792eb4aa",
    },
    riotinto: {
      title: "Cutter - Rio Tinto Diamonds",
      description:
        "Make a statement with our diamond earrings, designed to enhance your natural beauty and style. Available in yellow gold, white gold, rose gold, or platinum settings, each pair of earrings features sparkling diamonds that add a touch of glamour and sophistication to any ensemble. Whether worn for a special occasion or as an everyday indulgence, our earrings are crafted with precision to reflect your unique personality and enhance your presence with timeless elegance and refinement.",
      diamonds: diamonds.filter(
        (diamond) => diamond.cutter === "Rio Tinto Diamonds"
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20Diamond%20Earring.jpeg?alt=media&token=7fe4d3e5-6894-4b52-90b8-ac1d94b5f588",
    },
    petra: {
      title: "Cutter - Petra Diamonds",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      diamonds: diamonds.filter(
        (diamond) => diamond.cutter === "Petra Diamonds"
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20grown%20diamonds.jpeg?alt=media&token=63d86a3e-c0cb-48ea-a8e7-38e650e17425",
    },
    lucara: {
      title: "Cutter - Lucara Diamond",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      diamonds: diamonds.filter(
        (diamond) => diamond.cutter === "Lucara Diamond"
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
  };

  if (!diamondCutter || !cutterData[diamondCutter]) {
    return <div>Invalid cutter selected.</div>;
  }

  const currentCutterData = cutterData[diamondCutter];
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

  const faqs = cutterData[diamondCutter]?.faqs || [];

  return (
    <Container>
      <div>
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: currentCutterData.title },
          ]}
        />
      </div>
      <Banner
        bannerImage={currentCutterData.bannerImage}
        title={currentCutterData.title}
        description={currentCutterData.description}
      />
      <List>
        <Row gutter={[16, 16]}>
          {currentCutterData.diamonds.map((diamond: any) => (
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
      <StyledPagination
        current={currentPage}
        pageSize={pageSize}
        total={currentCutterData.diamonds.length}
        onChange={handleChangePage}
      />

      <FAQ title={currentCutterData.title} faqs={faqs} />
    </Container>
  );
};

export default CutterList;
