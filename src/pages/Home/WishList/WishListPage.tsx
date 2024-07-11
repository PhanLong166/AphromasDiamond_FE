import React, { useState, useEffect } from "react";
import { products } from "./../shared/ListOfProducts";
import { HeartFilled } from "@ant-design/icons";
import Link from "@/components/Link";
import {
  Section,
  Container,
  Heading,
  List,
  CloseButton,
  StyledPagination,
  CustomBreadcrumb,
} from "./WishListPage.styled";
import { Card, Col, Row, Typography } from "antd";
import FilterSortJewelry from "@/components/FilterSortJewelry/FilterSortJewelry";
import { CloseOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const WishListPage: React.FC = () => {
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

  const getRandomProducts = (productArray: any, numProducts: any) => {
    const shuffled = productArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numProducts);
  };
  ``;
  const randomProducts = getRandomProducts(products, 6);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const handleChangePage = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <Section>
      <div>
        <CustomBreadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "My WishList",
            },
          ]}
        />
      </div>
      <Container className="wide">
        <Heading>
          <h2>MY WISHLIST</h2>
        </Heading>
        <FilterSortJewelry />
        <hr
          style={{
            maxWidth: "1400px",
            margin: "32px auto",
            border: "1px solid rgba(21, 21, 66, 0.3)",
          }}
        />
        <List>
          <Row gutter={[16, 16]}>
            {randomProducts.map((product: any) => (
              <Col key={product.id} span={6}>
                <Card
                  key={product.id}
                  style={{ borderRadius: "0" }}
                  hoverable
                  className="product-card"
                  cover={
                    <>
                      <Link to={`/product/${product.id}`} underline zoom scroll>
                        <img
                          style={{ borderRadius: "0", position: "relative" }}
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
                      <CloseButton
                        onClick={() => toggleWishList(product.id)}
                        aria-label="Close"
                        style={{ width: "20%" }}
                      >
                        <div className="close-icon-wrapper">
                          <CloseOutlined className="close-icon" />
                        </div>
                      </CloseButton>
                      {product.salePrice && (
                        <div className="sale-badge">SALE</div>
                      )}
                    </>
                  }
                >
                  <div className="product-info">
                    <Title level={4} className="product-name">
                      <Link to={`/product/${product.id}`} underline zoom scroll>
                        <div>{product.name}</div>
                      </Link>
                      <HeartFilled
                        className="wishlist-icon"
                        onClick={() => toggleWishList(product.id)}
                      />
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
          </Row>
        </List>
        <StyledPagination
          current={currentPage}
          pageSize={pageSize}
          total={randomProducts.length}
          onChange={handleChangePage}
        />
      </Container>
    </Section>
  );
};

export default WishListPage;
