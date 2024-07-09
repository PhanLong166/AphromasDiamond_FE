import React, { useState, useEffect } from "react";
import {
  Container,
  Banner,
  LeftSection,
  List,
  BrandItem,
  Brand,
  Heading,
  ContainBrand,
  DotGrid,
  DotImage,
  DotTitle,
} from "./BrandList.styled";
import styled from "styled-components";
import { Breadcrumb } from "antd";

import { Card, Col, Row, Typography, Pagination } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { products } from "./../shared/ListOfProducts";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
const { Title, Text } = Typography;

const CustomBreadcrumb = styled(Breadcrumb)`
  margin-left: 175px;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 1400px;
  margin: 0 auto;
`;

const BrandList: React.FC = () => {
  const [wishList, setWishList] = useState<string[]>([]);
  const [filteredProducts] = useState(products);

  const brand = [
    {
      href: "#",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FBvlgari.png?alt=media&token=9702661b-d3a5-49b5-9bf7-87adc932fa7d",
      title: "Chopard",
    },
    {
      href: "#",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FCartier.jpg?alt=media&token=e8d641af-9dd1-41a4-9375-9e3eeb687a71",
      title: "Cartier",
    },
    {
      href: "#",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FHarryWinston.png?alt=media&token=55b3feaa-45ca-406d-bdb1-bf11582eeeba",
      title: "Harry Winston",
    },
    {
      href: "#",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FTiffany%26Co..png?alt=media&token=f9e75673-a2bc-4b37-9ffc-589ddc1fca20",
      title: "Tiffany & Co.",
    },
  ];

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
              title: "Bvlgari",
            },
          ]}
        />
      </div>
      <Banner>
        <div className="bannerContent">
          <LeftSection>
            <h2>Bvlgari</h2>
            <div className="subheading">
              Bvlgari, a high-end Italian jewelry brand, is renowned for its
              exquisite and luxurious designs. Founded in 1884 in Rome, Bvlgari
              has become a symbol of opulence and sophistication. With a perfect
              blend of traditional craftsmanship and modern style, Bvlgari's
              jewelry collections often draw inspiration from ancient Roman
              architecture and culture. The sparkling gemstones, combined with
              distinctly Italian designs, create unique works of art that
              captivate jewelry lovers around the world.
            </div>
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
                          (e.currentTarget.src = product.images[0])
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
      <Brand>
        <Heading>
          <h2 className="title">OTHER BRANDS</h2>
        </Heading>
        <ContainBrand>
          <DotGrid>
            <Carousel
              slidesToShow={4}
              slidesToScroll={3}
              dots={true}
              infinite={false}
              arrows={false}
            >
              {brand.map((brands, index) => (
                <BrandItem key={index}>
                  <DotImage>
                    <Link to={brands.href}>
                      <img src={brands.imgSrc} alt={brands.title} />
                    </Link>
                    <DotTitle>{brands.title}</DotTitle>
                  </DotImage>
                </BrandItem>
              ))}
            </Carousel>
          </DotGrid>
        </ContainBrand>
      </Brand>
    </Container>
  );
};

export default BrandList;
