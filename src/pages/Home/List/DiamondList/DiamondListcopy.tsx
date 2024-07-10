import React, { useState, useEffect } from "react";
import {
  Container,
  Banner,
  LeftSection,
  FAQs,
  LeftFAQ,
  List,
} from "./DiamondList.styled";
import styled from "styled-components";
import {
  Breadcrumb,
  Collapse,
  Card,
  Col,
  Row,
  Typography,
  Pagination,
} from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { theme } from "../../../../themes";

import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
import { diamonds } from "../../shared/ListOfDiamond";

const CustomBreadcrumb = styled(Breadcrumb)`
  margin-left: 175px;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 1400px;
  margin: 0 auto;
`;

const DiamondList: React.FC = () => {
  const { diamondShape } = useParams<{ diamondShape: string }>();
  const navigate = useNavigate();

  const diamondData: Record<string, any> = {
    "round-shape": {
      title: "Round Diamonds",
      description:
        "Our exquisite round diamond rings are crafted to perfection, showcasing the brilliance of diamonds set in yellow gold, white gold, rose gold, or platinum. Each piece radiates timeless elegance and sophistication, making it a cherished symbol of enduring love and commitment. Whether for a proposal or a milestone anniversary, these rings are designed to captivate hearts and inspire lasting memories.",
      products: diamonds.filter((product) => product.shape === "Round"),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "princess-shape": {
      title: "Princess Diamonds",
      description:
        " Discover the allure of our princess-cut diamond rings, characterized by their clean lines and modern elegance. Available in yellow gold, white gold, rose gold, or platinum settings, these rings are meticulously crafted to capture the essence of grace and luxury, making them ideal for celebrating milestones and special moments. Each ring reflects precision craftsmanship and a contemporary aesthetic, perfect for those who appreciate refined beauty with a touch of glamour.",
      products: diamonds.filter((product) => product.shape === "Princess"),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "heart-shape": {
      title: "Heart Diamonds",
      description:
        "Symbolizing romance and devotion, our heart-shaped diamond rings are a testament to everlasting love. Expertly set in yellow gold, white gold, rose gold, or platinum, each ring is a blend of artistry and emotion, making it a perfect expression of love and affection. With their timeless design and exquisite detailing, these rings are cherished heirlooms that symbolize the deep bond between two individuals.",
      products: diamonds.filter((product) => product.shape === "Heart"),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "oval-shape": {
      title: "Oval Diamonds",
      description:
        "Embrace the distinctive beauty of our oval-shaped diamond rings, known for their timeless appeal and unique charm. Available in yellow gold, white gold, rose gold, or platinum settings, these rings exude sophistication and allure, making them a captivating choice for those who appreciate classic elegance with a modern twist. Each ring is meticulously crafted to enhance the diamond's natural brilliance and fire, creating a piece that stands out with understated elegance and grace.",
      products: diamonds.filter((product) => product.shape === "Oval"),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "cushion-shape": {
      title: "Cushion Diamonds",
      description:
        "Our cushion-cut diamond rings combine classic charm with contemporary flair. Featuring square-shaped diamonds set in yellow gold, white gold, rose gold, or platinum, these rings are crafted to highlight the diamond's brilliance and fire, making them a stunning choice for those who desire a blend of tradition and luxury. Each ring is designed with meticulous attention to detail, ensuring a piece that is both timeless and distinctive, perfect for making a statement of enduring elegance.",
      products: diamonds.filter((product) => product.shape === "Cushion"),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "emerald-shape": {
      title: "Emerald Diamonds",
      description:
        "Make a statement with our emerald-cut diamond rings, renowned for their striking beauty and bold presence. Set in yellow gold, white gold, rose gold, or platinum, these rings showcase the diamond's clarity and geometric elegance, offering a timeless and sophisticated look for any occasion. Each ring is crafted with precision to enhance the diamond's natural allure, making it a symbol of luxury and refinement that will be cherished for generations.",
      products: diamonds.filter((product) => product.shape === "Emerald"),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "asscher-shape": {
      title: "Asscher Diamonds",
      description:
        "Experience luxury with our asscher-cut diamond rings, distinguished by their octagonal shape and Art Deco-inspired design. Crafted in yellow gold, white gold, rose gold, or platinum, these rings exude vintage charm and modern sophistication, making them a captivating choice for those who appreciate classic elegance with a touch of glamour. Each ring is a testament to superior craftsmanship and timeless design, ideal for marking life's most special moments with style and grace.",
      products: diamonds.filter((product) => product.shape === "Asscher"),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "marquise-shape": {
      title: "Marquise Diamonds",
      description:
        "Celebrate elegance with our marquise-cut diamond rings, distinguished by their elongated shape and graceful curves. Available in yellow gold, white gold, rose gold, or platinum settings, these rings offer a unique blend of vintage charm and contemporary allure, making them an exquisite choice for those who seek timeless beauty and refined craftsmanship. Each ring is crafted with precision to accentuate the diamond's brilliance, creating a piece that embodies sophistication and grace.",
      products: diamonds.filter((product) => product.shape === "Marquise"),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "radiant-shape": {
      title: "Radiant Diamonds",
      description:
        "Our radiant-cut diamond rings are designed to dazzle and delight. Featuring a rectangular shape that maximizes brilliance, these rings are set in yellow gold, white gold, rose gold, or platinum, capturing the essence of sophistication and luxury with every facet. Each ring is meticulously crafted to reflect the diamond's radiance and fire, creating a piece that stands out as a symbol of elegance and refinement, perfect for celebrating love and achievement.",
      products: diamonds.filter((product) => product.shape === "Radiant"),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "pear-shape": {
      title: "Pear Diamonds",
      description:
        "Embrace elegance with our pear-shaped diamond rings, admired for their graceful silhouette and feminine allure. Set in yellow gold, white gold, rose gold, or platinum, these rings are designed to reflect the diamond's natural brilliance and sophistication, making them a perfect symbol of everlasting love and refinement. Each ring is a testament to exceptional craftsmanship and timeless design, ideal for marking life's most cherished moments with elegance and style.",
      products: diamonds.filter((product) => product.shape === "Pear"),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "de-cutter": {
      title: "Cutter - De Beers Group",
      description:
        "Elevate your style with our diamond bracelets, crafted to perfection in yellow gold, white gold, rose gold, or platinum. Each bracelet features meticulously set diamonds that sparkle with every movement, offering a luxurious and timeless accessory for any occasion. Whether worn alone as a statement piece or layered with other jewelry, our bracelets are designed to enhance your beauty and express your individuality with sophistication and grace.",
      products: diamonds.filter(
        (product) => product.cutter === "De Beers Group"
      ),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fnecklacelist.jpeg?alt=media&token=e518f32c-79ba-4898-9438-4a294882b4e9",
    },

    "arlosa-cutter": {
      title: "Cutter - Arlosa",
      description:
        "Adorn yourself with our exquisite diamond necklaces, crafted to capture attention and admiration. Set in yellow gold, white gold, rose gold, or platinum, each necklace showcases the beauty of diamonds in designs that range from classic to contemporary, making them a stunning addition to any jewelry collection. Whether worn as a centerpiece for formal occasions or as an everyday luxury, our necklaces are designed to complement your style and elevate your look with timeless elegance.",
      products: diamonds.filter((product) => product.cutter === "Arlosa"),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FDesign%20Your%20Own%20Pendant.jpeg?alt=media&token=9e6ba197-39d3-4b7e-84f3-a185792eb4aa",
    },
    "rio-cutter": {
      title: "Cutter - Rio Tinto Diamonds",
      description:
        "Make a statement with our diamond earrings, designed to enhance your natural beauty and style. Available in yellow gold, white gold, rose gold, or platinum settings, each pair of earrings features sparkling diamonds that add a touch of glamour and sophistication to any ensemble. Whether worn for a special occasion or as an everyday indulgence, our earrings are crafted with precision to reflect your unique personality and enhance your presence with timeless elegance and refinement.",
      products: diamonds.filter(
        (product) => product.cutter === "Rio Tinto Diamonds"
      ),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20Diamond%20Earring.jpeg?alt=media&token=7fe4d3e5-6894-4b52-90b8-ac1d94b5f588",
    },
    "petra-cutter": {
      title: "Cutter - Petra Diamonds",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: diamonds.filter(
        (product) => product.cutter === "Petra Diamonds"
      ),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20grown%20diamonds.jpeg?alt=media&token=63d86a3e-c0cb-48ea-a8e7-38e650e17425",
    },
    "lucara-cutter": {
      title: "Cutter - Lucara Diamond",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: diamonds.filter(
        (product) => product.cutter === "Lucara Diamond"
      ),
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fbulgari.png?alt=media&token=1897c535-f005-4d37-a106-26bf8426d5ba",
    },
  };

  if (!diamondShape || !diamondData[diamondShape]) {
    return <div>Invalid diamond shape selected.</div>;
  }

  const currentDiamondData = diamondData[diamondShape];

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

  const texts = [
    `
     Our women's diamond rings range from $276 to $56,024 depending on several factors, including the type of metal and diamond carat weight.
    `,
    `
      Yes, diamond rings make perfect weddings rings and engagement rings.
    `,
    `
      Women’s diamond wedding rings are available in platinum along with yellow, white and rose gold. 
    `,
    `
     Our women's diamond rings range from $276 to $56,024 depending on several factors, including the type of metal and diamond carat weight.
    `,
    `
      Yes, diamond rings make perfect weddings rings and engagement rings.
    `,
    `
      Women’s diamond wedding rings are available in platinum along with yellow, white and rose gold. 
    `,
  ];

  const labels = [
    "What is the average cost of a womens diamond wedding ring?",
    "Can weddings rings be diamond rings?",
    "What metals are best for diamond wedding bands?",
    "What is the average cost of a womens diamond wedding ring?",
    "Can weddings rings be diamond rings?",
    "What metals are best for diamond wedding bands?",
  ];

  const items = texts.map((text, index) => ({
    key: (index + 1).toString(),
    label: labels[index],
    children: <p>{text}</p>,
  }));

  const onChange = (key: any) => {
    console.log(key);
  };

  const StyledCollapse = styled(Collapse)`
    .ant-collapse-item {
      background-color: #ffffff;
    }
    .ant-collapse-header-text {
      color: ${theme.color.primary};
    }
    .ant-collapse-content {
      background-color: #f4f2ee;
      color: #45413e;
    }
    .ant-collapse-expand-icon {
      color: ${theme.color.primary};
    }
    .ant-collapse-header {
      border-radius: 8px;
    }
  `;

  return (
    <Container>
      <div>
        <CustomBreadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: currentDiamondData.title,
            },
          ]}
        />
      </div>
      <Banner
        style={{ backgroundImage: `url(${currentDiamondData.bannerImage})` }}
      >
        <div className="bannerContent">
          <LeftSection>
            <h2>{currentDiamondData.title}</h2>
            <div className="subheading">{currentDiamondData.description}</div>
            <button className="consult-button button_slide slide_right">
              <span>CONTACT US FOR CONSULTATION</span>
            </button>
          </LeftSection>
        </div>
      </Banner>
      <List>
        <Row gutter={[16, 16]}>
          {currentDiamondData.diamonds.map((diamond: any) => (
            <Col key={diamond.id} span={6}>
              <Link to={`/diamond/${diamond.id}`}>
                <Card
                  style={{ borderRadius: "0" }}
                  hoverable
                  className="product-card"
                  cover={
                    <>
                      <img
                        style={{ borderRadius: "0" }}
                        src={diamond.image}
                        alt={diamond.name}
                        className="product-image"
                        onMouseOut={(e) =>
                          (e.currentTarget.src = diamond.image)
                        }
                      />
                      {diamond.salePrice && (
                        <div className="sale-badge">SALE</div>
                      )}
                    </>
                  }
                >
                  <div className="product-info">
                    <Title level={4} className="product-name">
                      {diamond.name}
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
                        ${diamond.salePrice ? diamond.salePrice : diamond.price}
                      </Text>
                      {diamond.salePrice && (
                        <Text delete className="product-sale-price">
                          ${diamond.price}
                        </Text>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
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
      <div style={{ textAlign: "center", margin: "20px auto" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={currentDiamondData.products.length}
          onChange={handleChangePage}
        />
      </div>

      <FAQs>
        <LeftFAQ>
          <h2>FAQs ABOUT PRODUCT</h2>
        </LeftFAQ>
        <StyledCollapse
          items={items}
          defaultActiveKey={["1"]}
          onChange={onChange}
        />
      </FAQs>
    </Container>
  );
};

export default DiamondList;
