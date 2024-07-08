import React, { useState, useEffect } from "react";
import {
  Container,
  Banner,
  LeftSection,
  FAQs,
  LeftFAQ,
  List,
} from "./ProductList.styled";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import { Collapse } from "antd";
import { Card, Col, Row, Typography, Pagination } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { theme } from "../../../themes";
import { products } from "./../shared/ListOfProducts";
import { Link, useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
const CustomBreadcrumb = styled(Breadcrumb)`
  margin-left: 175px;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProductList: React.FC = () => {
  const [wishList, setWishList] = useState<string[]>([]);
  const [filteredProducts] = useState(products);
  const navigate = useNavigate();

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
              title: "Round Ring",
            },
          ]}
        />
      </div>
      <Banner>
        <div className="bannerContent">
          <LeftSection>
            <h2>Round Rings</h2>
            <div className="subheading">
              Get heirloom-quality beauty with our captivating selection of
              vintage-style engagement rings. Hand-engraved details, beaded-edge
              milgrain and pavé accent diamonds are featured throughout this
              intricately crafted collection. Pair these settings with a
              traditional round diamond, or make them even more unique with
              fancy-cut diamonds. Choose the vintage engagement ring that
              matches timeless styles such as Art Deco, mid-century and other
              20th century fashions.
            </div>
            <button className="consult-button button_slide slide_right">
              <span>CONTACT US FOR CONSULTATION</span>
            </button>
          </LeftSection>
        </div>
      </Banner>
      <List>
        <Row gutter={[16, 16]}>
          {filteredProducts.map((product) => (
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
                        src={product.images[0]}
                        alt={product.name}
                        className="product-image"
                        onMouseOver={(e) =>
                          (e.currentTarget.src = product.images[1])
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
                <button className="show-all-button"
                 onClick={() => navigate(config.routes.public.allProduct)}
                >SHOW ALL</button>
              </div>
            </Card>
          </Col>
        </Row>
      </List>
      <div style={{ textAlign: "center", margin: "20px auto" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={products.length}
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

export default ProductList;
