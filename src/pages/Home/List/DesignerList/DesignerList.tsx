import React, { useState, useEffect } from "react";
import {
  Container,
  Banner,
  LeftSection,
  FAQs,
  LeftFAQ,
  List,
} from "./DesignerList.styled";
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
import { products } from "./../../shared/ListOfProducts";
import { useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
import Link from '@/components/Link';

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

const DesignerList: React.FC = () => {
  const { designer } = useParams<{ designer: string }>();
  const navigate = useNavigate();

  const excludedCategories = [
    "wedding-ring",
    "engagement-ring",
    "men-engagement-ring",
    "men-wedding-ring",
  ];

  const designerData: Record<string, any> = {
    zaczacposen: {
      title: "Zac Zac Posen",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter((product) => product.designer === "Zac Zac Posen" && !excludedCategories.includes(product.categories)),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $900 to $1000 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20grown%20diamonds.jpeg?alt=media&token=63d86a3e-c0cb-48ea-a8e7-38e650e17425",
    },
    bellavaughan: {
      title: "Bella Vaughan",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter((product) => product.designer === "Bella Vaughan" && !excludedCategories.includes(product.categories)),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $700 to $800 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FBrandBvl.jpg?alt=media&token=344f0091-7993-435a-9fc1-e6f689f0e976",
    },
    bluenile: {
      title: "Blue Nile Studio",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter((product) => product.designer === "Blue Nile Studio" && !excludedCategories.includes(product.categories)),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $500 to $600 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FBlue%20Nile%20diamond%20jewelry.jpeg?alt=media&token=79f02baa-b4cf-4368-b838-2c7baa50d305",
    },
    thegallerycollection: {
      title: "The Gallery Collection",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter((product) => product.designer === "The Gallery Collection" && !excludedCategories.includes(product.categories)),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: <p> Our women's diamond rings range from $276 to $56,024 depending on several factors, including the type of metal and diamond carat weight.</p>,
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: <p> Yes, diamond rings make perfect weddings rings and engagement rings.</p>,
        },
      ],
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Flab_diamonds_sale_banner.6a518.jpg?alt=media&token=b7d30ece-f543-4890-b7de-7c37e1286dfb",
    },
  };

 
  if (!designer || !designerData[designer]) {
    return <div>Invalid jewelry type selected.</div>;
  }

  const currentDesignerData = designerData[designer];

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

 
  const faqs = designerData[designer]?.faqs || [];

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
              title: currentDesignerData.title,
            },
          ]}
        />
      </div>
      <Banner style={{ backgroundImage: `url(${currentDesignerData.bannerImage})` }}>
        <div className="bannerContent">
          <LeftSection>
            <h2>{currentDesignerData.title}</h2>
            <div className="subheading">{currentDesignerData.description}</div>
            <button className="consult-button button_slide slide_right">
              <span>CONTACT US FOR CONSULTATION</span>
            </button>
          </LeftSection>
        </div>
      </Banner>
      <List>
        <Row gutter={[16, 16]}>
          {currentDesignerData.products.map((product: any) => (
            <Col key={product.id} span={6}>
              <Link to={`/product/${product.id}`} underline zoom scroll>
                <Card
                  key={product.id}
                  style={{ borderRadius: "0" }}
                  hoverable
                  className="product-card"
                  cover={
                    <>
                      <img
                        style={{ borderRadius: "0" }}
                        src={product.images[0]}
                        alt={product.name}
                        className="product-image"
                        onMouseOver={(e) =>
                          (e.currentTarget.src = product.images[2])
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.src = product.images[0])
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
                  onClick={() => navigate(config.routes.public.jewelryList.replace(":jewelryType", "ring"))}
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
        total={currentDesignerData.products.length}
        onChange={handleChangePage}
      />

      <FAQs>
        <LeftFAQ>
          <h2>FAQs about {currentDesignerData.title}</h2>
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

export default DesignerList;
