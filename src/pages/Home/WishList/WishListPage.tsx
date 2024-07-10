import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import { products } from "./../shared/ListOfProducts";

import { HeartFilled } from "@ant-design/icons";
import Link from "@/components/Link";
import { Section, Container, Heading, List } from "./WishListPage.styled";
import { Card, Col, Row, Typography, Pagination } from "antd";
import FilterSortJewelry from "@/components/FilterSortJewelry/FilterSortJewelry";
import { CloseOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const CustomBreadcrumb = styled(Breadcrumb)`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 20px;
`;

const StyledPagination = styled(Pagination)`
  display: block;
  text-align: center;
  margin: 20px auto;
`;

const CloseButton = styled.button`
  position: absolute;
  bottom: 95px;
  right: 0;
  background-color: #000;
  opacity: 0.5;
  border: none;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000;
    opacity: 1;
     transition: background-color 0.3s ease;
  }

  .close-icon-wrapper {
    color: #fff;
    transition: color 0.3s ease;
  }
`;

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
``
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
                <Link to={`/product/${product.id}`} underline zoom scroll>
                  <Card
                    key={product.id}
                    style={{ borderRadius: "0" }}
                    hoverable
                    className="product-card"
                    cover={
                      <>
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
                        <div>{product.name}</div>
                        <HeartFilled
                          className="wishlist-icon"
                          onClick={() => toggleWishList(product.id)}
                        />
                      </Title>
                      <div className="price-container">
                        <Text className="product-price">
                          $
                          {product.salePrice
                            ? product.salePrice
                            : product.price}
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
