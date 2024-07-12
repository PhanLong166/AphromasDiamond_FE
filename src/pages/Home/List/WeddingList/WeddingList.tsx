import React, { useState, useEffect } from "react";
import {
  Container,
  Banner,
  LeftSection,
  FAQs,
  LeftFAQ,
  List,
  StyledPagination,
  CustomBreadcrumb,
  StyledCollapse
} from "./WeddingList.styled";
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
import { jewelryWeddingData } from "./WeddingList.data";

const WeddingList: React.FC = () => {
  const { ringShape } = useParams<{ ringShape: string }>();
  const navigate = useNavigate();

  if (!ringShape || !jewelryWeddingData[ringShape]) {
    return <div>Invalid diamond ring selected.</div>;
  }

  const currentJewelryWeddingData = jewelryWeddingData[ringShape];

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

  const faqs = jewelryWeddingData[ringShape]?.faqs || [];

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
              title: currentJewelryWeddingData.title,
            },
          ]}
        />
      </div>
      <Banner
        style={{
          backgroundImage: `url(${currentJewelryWeddingData.bannerImage})`,
        }}
      >
        <div className="bannerContent">
          <LeftSection>
            <h2>{currentJewelryWeddingData.title}</h2>
            <div className="subheading">
              {currentJewelryWeddingData.description}
            </div>
            <button className="consult-button button_slide slide_right">
              <span>CONTACT US FOR CONSULTATION</span>
            </button>
          </LeftSection>
        </div>
      </Banner>
      <List>
        <Row gutter={[16, 16]}>
          {currentJewelryWeddingData.products.map((product: any) => (
            <Col key={product.id} span={6}>
              <Card
                key={product.id}
                style={{ borderRadius: "0" }}
                hoverable
                className="product-card"
                cover={
                  <>
                    <Link to={`/product/${product.id}`} >
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
                    <Link to={`/product/${product.id}`} >
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
                  onClick={() => navigate(config.routes.public.allWedding)}
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
        total={currentJewelryWeddingData.products.length}
        onChange={handleChangePage}
      />

      <FAQs>
        <LeftFAQ>
          <h2>FAQs about {currentJewelryWeddingData.title}</h2>
        </LeftFAQ>
        <StyledCollapse
          items={faqs.map((faq: any) => ({
            key: faq.key,
            label: faq.label,
            children: <p>{faq.children}</p>,
          }))}
          defaultActiveKey={["1"]}
          onChange={onChange}
        />
      </FAQs>
    </Container>
  );
};

export default WeddingList;
