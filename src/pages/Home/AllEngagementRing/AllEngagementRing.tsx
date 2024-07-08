import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import { products } from "./../shared/ListOfProducts";

import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import Link from "@/components/Link";
import { Section, Container, Heading, List } from "./AllEngagementRing.styled";
import { Card, Col, Row, Typography, Pagination } from "antd";
import FilterSortJewelry from "@/components/FilterSortJewelry/FilterSortJewelry";

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

const AllEngagementRing: React.FC = () => {
  const includedCategoryKeyword = "engagement-ring";

  const [filteredProducts] = useState(
    products.filter((product) =>
      product.categories.includes(includedCategoryKeyword)
    )
  );

  const [wishList, setWishList] = useState<string[]>([]);
  // const navigate = useNavigate();

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

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const handleChangePage = (page: any) => {
    setCurrentPage(page);
  };

  // const handleProductClick = (id: any) => {
  //   navigate(`${config.routes.public.product}/${id}`);
  // };

  return (
    <Section>
      {/* <Button onClick={() => navigate("/wishlist")}>Go to Wishlist</Button> */}

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
              href: "/list",
            },
            {
              title: "All Product",
            },
          ]}
        />
      </div>
      <Container className="wide">
        <Heading>
          <h2>ALL ENGAGEMENTS RING</h2>
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
            {filteredProducts.map((product) => (
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
          total={filteredProducts.length}
          onChange={handleChangePage}
        />
      </Container>
    </Section>
  );
};

export default AllEngagementRing;
