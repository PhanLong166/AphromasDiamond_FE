import React, { useState, useEffect } from "react";
import {
  Container,
  Banner,
  LeftSection,
  List,
  StyledPagination,
} from "./MenEngagementRing.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
import { menEngagementData } from "./MenEngagementRing.data";
import FAQ from "@/components/FAQs/FAQs";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const MenEngagementRing: React.FC = () => {
  const { ringMetal } = useParams<{ ringMetal: string }>();
  const navigate = useNavigate();

  if (!ringMetal || !menEngagementData[ringMetal]) {
    return <div>Invalid jewelry type selected.</div>;
  }

  const currentMenEngagementData = menEngagementData[ringMetal];

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
        style={{
          backgroundImage: `url(${currentMenEngagementData.bannerImage})`,
        }}
      >
        <div className="bannerContent">
          <LeftSection>
            <h2>{currentMenEngagementData.title}</h2>
            <div className="subheading">
              {currentMenEngagementData.description}
            </div>
            <button className="consult-button button_slide slide_right">
              <span>CONTACT US FOR CONSULTATION</span>
            </button>
          </LeftSection>
        </div>
      </Banner>
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
                  <>
                    <Link to={`/product/${product.id}`}>
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
                    </Link>
                    {product.salePrice && (
                      <div className="sale-badge">SALE</div>
                    )}
                  </>
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
      <StyledPagination
        current={currentPage}
        pageSize={pageSize}
        total={currentMenEngagementData.products.length}
        onChange={handleChangePage}
      />

      <FAQ title={currentMenEngagementData.title} faqs={faqs} />
    </Container>
  );
};

export default MenEngagementRing;
