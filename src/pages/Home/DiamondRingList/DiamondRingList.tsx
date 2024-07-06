import React, { useState, useEffect } from "react";
import {
  Container,
  Banner,
  LeftSection,
  FAQs,
  LeftFAQ,
  List,
} from "./DiamondRingList.styled";
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
import { theme } from "../../../themes";
import { products } from "../shared/ListOfProducts";
import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";

const CustomBreadcrumb = styled(Breadcrumb)`
  margin-left: 175px;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 1400px;
  margin: 0 auto;
`;
const StyledPagination = styled(Pagination)`
  display: block;
  text-align: center;
  margin: 20px auto;
`;

const DiamondRingList: React.FC = () => {
  const { ringType } = useParams<{ ringType: string }>();
  const navigate = useNavigate();

  const jewelryData: Record<string, any> = {
    "round-ring": {
      title: "Round Rings",
      description:
        "Our exquisite round diamond rings are crafted to perfection, showcasing the brilliance of diamonds set in yellow gold, white gold, rose gold, or platinum. Each piece radiates timeless elegance and sophistication, making it a cherished symbol of enduring love and commitment. Whether for a proposal or a milestone anniversary, these rings are designed to captivate hearts and inspire lasting memories.",
      products: products.filter(
        (product) => product.categories === "round-ring"
      ),
      faqs: [
        {
          key: "1",
          label: "Round Ring What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $900 to $1000 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "princess-ring": {
      title: "Princess Rings",
      description:
        " Discover the allure of our princess-cut diamond rings, characterized by their clean lines and modern elegance. Available in yellow gold, white gold, rose gold, or platinum settings, these rings are meticulously crafted to capture the essence of grace and luxury, making them ideal for celebrating milestones and special moments. Each ring reflects precision craftsmanship and a contemporary aesthetic, perfect for those who appreciate refined beauty with a touch of glamour.",
      products: products.filter(
        (product) => product.categories === "princess-ring"
      ),
      faqs: [
        {
          key: "1",
          label: "Princess Ring What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $700 to $800 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "heart-ring": {
      title: "Heart Rings",
      description:
        "Symbolizing romance and devotion, our heart-shaped diamond rings are a testament to everlasting love. Expertly set in yellow gold, white gold, rose gold, or platinum, each ring is a blend of artistry and emotion, making it a perfect expression of love and affection. With their timeless design and exquisite detailing, these rings are cherished heirlooms that symbolize the deep bond between two individuals.",
      products: products.filter(
        (product) => product.categories === "heart-ring"
      ),
      faqs: [
        {
          key: "1",
          label: "Heart Ring What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $500 to $600 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "oval-ring": {
      title: "Oval Rings",
      description:
        "Embrace the distinctive beauty of our oval-shaped diamond rings, known for their timeless appeal and unique charm. Available in yellow gold, white gold, rose gold, or platinum settings, these rings exude sophistication and allure, making them a captivating choice for those who appreciate classic elegance with a modern twist. Each ring is meticulously crafted to enhance the diamond's natural brilliance and fire, creating a piece that stands out with understated elegance and grace.",
      products: products.filter(
        (product) => product.categories === "oval-ring"
      ),
      faqs: [
        {
          key: "1",
          label: "Oval Ring What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $300 to $400 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "cushion-ring": {
      title: "Cushion Rings",
      description:
        "Our cushion-cut diamond rings combine classic charm with contemporary flair. Featuring square-shaped diamonds set in yellow gold, white gold, rose gold, or platinum, these rings are crafted to highlight the diamond's brilliance and fire, making them a stunning choice for those who desire a blend of tradition and luxury. Each ring is designed with meticulous attention to detail, ensuring a piece that is both timeless and distinctive, perfect for making a statement of enduring elegance.",
      products: products.filter(
        (product) => product.categories === "cushion-ring"
      ),
      faqs: [
        {
          key: "1",
          label: "Cushion Ring What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $276 to $56,024 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "emerald-ring": {
      title: "Emerald Rings",
      description:
        "Make a statement with our emerald-cut diamond rings, renowned for their striking beauty and bold presence. Set in yellow gold, white gold, rose gold, or platinum, these rings showcase the diamond's clarity and geometric elegance, offering a timeless and sophisticated look for any occasion. Each ring is crafted with precision to enhance the diamond's natural allure, making it a symbol of luxury and refinement that will be cherished for generations.",
      products: products.filter(
        (product) => product.categories === "emerald-ring"
      ),
      faqs: [
        {
          key: "1",
          label: "Emerald Ring What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $900 to $1000 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "asscher-ring": {
      title: "Asscher Rings",
      description:
        "Experience luxury with our asscher-cut diamond rings, distinguished by their octagonal shape and Art Deco-inspired design. Crafted in yellow gold, white gold, rose gold, or platinum, these rings exude vintage charm and modern sophistication, making them a captivating choice for those who appreciate classic elegance with a touch of glamour. Each ring is a testament to superior craftsmanship and timeless design, ideal for marking life's most special moments with style and grace.",
      products: products.filter(
        (product) => product.categories === "asscher-ring"
      ),
      faqs: [
        {
          key: "1",
          label: "Asscher Ring What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $700 to $800 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "marquise-ring": {
      title: "Marquise Rings",
      description:
        "Celebrate elegance with our marquise-cut diamond rings, distinguished by their elongated shape and graceful curves. Available in yellow gold, white gold, rose gold, or platinum settings, these rings offer a unique blend of vintage charm and contemporary allure, making them an exquisite choice for those who seek timeless beauty and refined craftsmanship. Each ring is crafted with precision to accentuate the diamond's brilliance, creating a piece that embodies sophistication and grace.",
      products: products.filter(
        (product) => product.categories === "marquise-ring"
      ),
      faqs: [
        {
          key: "1",
          label: "Marquise Ring What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $300 to $400 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "radiant-ring": {
      title: "Radiant Rings",
      description:
        "Our radiant-cut diamond rings are designed to dazzle and delight. Featuring a rectangular shape that maximizes brilliance, these rings are set in yellow gold, white gold, rose gold, or platinum, capturing the essence of sophistication and luxury with every facet. Each ring is meticulously crafted to reflect the diamond's radiance and fire, creating a piece that stands out as a symbol of elegance and refinement, perfect for celebrating love and achievement.",
      products: products.filter(
        (product) => product.categories === "radiant-ring"
      ),
      faqs: [
        {
          key: "1",
          label: "Radiant Ring What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $700 to $800 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
    "pear-ring": {
      title: "Pear Rings",
      description:
        "Embrace elegance with our pear-shaped diamond rings, admired for their graceful silhouette and feminine allure. Set in yellow gold, white gold, rose gold, or platinum, these rings are designed to reflect the diamond's natural brilliance and sophistication, making them a perfect symbol of everlasting love and refinement. Each ring is a testament to exceptional craftsmanship and timeless design, ideal for marking life's most cherished moments with elegance and style.",
      products: products.filter(
        (product) => product.categories === "pear-ring"
      ),
      faqs: [
        {
          key: "1",
          label: "Pear Ring What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $700 to $800 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
    },
  };

 
  if (!ringType || !jewelryData[ringType]) {
    return <div>Invalid diamond ring selected.</div>;
  }

  const currentJewelryData = jewelryData[ringType];

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

  
  const faqs = jewelryData[ringType]?.faqs || [];

  const onChange = (key: string | string[]) => {
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
              title: currentJewelryData.title,
            },
          ]}
        />
      </div>
      <Banner style={{ backgroundImage: `url(${currentJewelryData.bannerImage})` }}>
        <div className="bannerContent">
          <LeftSection>
            <h2>{currentJewelryData.title}</h2>
            <div className="subheading">{currentJewelryData.description}</div>
            <button className="consult-button button_slide slide_right">
              <span>CONTACT US FOR CONSULTATION</span>
            </button>
          </LeftSection>
        </div>
      </Banner>
      <List>
        <Row gutter={[16, 16]}>
          {currentJewelryData.products.map((product: any) => (
            <Col key={product.id} span={6}>
              <Link to={`/product/${product.id}`}>
                <Card
                  key={product.id}
                  style={{ borderRadius: "0" }}
                  hoverable
                  className="product-card"
                  cover={
                    <>
                      <img
                        style={{ borderRadius: "0" }}
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        onMouseOver={(e) =>
                          (e.currentTarget.src = product.hoverImage)
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.src = product.image)
                        }
                      />
                      {product.salePrice && (
                        <div className="sale-badge">SALE</div>
                      )}
                    </>
                  }
                >
                  <div className="product-info">
                    <Title level={4} className="product-name">
                      <div>{product.name}</div>
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

      <FAQs>
        <LeftFAQ>
          <h2>FAQs about {currentJewelryData.title}</h2>
        </LeftFAQ>
        <StyledCollapse
          items={faqs.map((faq: any) => ({
            key: faq.key,
            label: faq.label,
            children: <p>{faq.children}</p>,
          }))}
          defaultActiveKey={['1']}
          onChange={onChange}
        />
      </FAQs>
    </Container>
  );
};

export default DiamondRingList;
