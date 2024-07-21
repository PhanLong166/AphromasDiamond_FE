import React, { useState, useEffect } from "react";
import {
  Container,
  Banner,
  LeftSection,
  List,
  StyledPagination,
  // CustomBreadcrumb,
} from "./CutterList.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
import { cutterData } from "./CutterList.data";
import FAQ from "@/components/FAQs/FAQs";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const CutterList: React.FC = () => {
  const { diamondCutter } = useParams<{ diamondCutter: string }>();
  const navigate = useNavigate();

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
        {/* <CustomBreadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: currentCutterData.title,
            },
          ]}
        /> */}
         <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: currentCutterData.title },
          ]}
        />
      </div>
      <Banner
        style={{ backgroundImage: `url(${currentCutterData.bannerImage})` }}
      >
        <div className="bannerContent">
          <LeftSection>
            <h2>{currentCutterData.title}</h2>
            <div className="subheading">{currentCutterData.description}</div>
            <button className="consult-button button_slide slide_right">
              <span>CONTACT US FOR CONSULTATION</span>
            </button>
          </LeftSection>
        </div>
      </Banner>
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
                        src={diamond.images[0]}
                        alt={diamond.name}
                        className="product-image"
                        onMouseOut={(e) =>
                          (e.currentTarget.src = diamond.images[0])
                        }
                      />
                    </Link>
                    {diamond.salePrice && (
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
