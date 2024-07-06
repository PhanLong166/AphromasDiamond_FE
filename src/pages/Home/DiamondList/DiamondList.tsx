import React, { useState, useEffect } from "react";
import {
  Container,
  Banner,
  LeftSection,
  FAQs,
  LeftFAQ,
  List,
  StyledCollapse,
  CustomBreadcrumb,
  StyledPagination,
} from "./DiamondList.styled";
import {
  Card,
  Col,
  Row,
  Typography,
} from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
import { diamondData } from "./DiamondList.data";



const DiamondList: React.FC = () => {
  const { diamondShape } = useParams<{ diamondShape: string }>();
  const navigate = useNavigate();

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


  const faqs = diamondData[diamondShape]?.faqs || [];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  

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
                      onMouseOut={(e) => (e.currentTarget.src = diamond.image)}
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
      <StyledPagination
        current={currentPage}
        pageSize={pageSize}
        total={currentDiamondData.diamonds.length}
        onChange={handleChangePage}
      />

      <FAQs>
        <LeftFAQ>
          <h2>FAQs about {currentDiamondData.title}</h2>
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

export default DiamondList;
