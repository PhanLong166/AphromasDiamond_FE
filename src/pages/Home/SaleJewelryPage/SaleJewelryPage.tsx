import React, { useState, useEffect } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

import {
  Section,
  Container,
  Heading,
  List,
  StyledPagination,
  CustomBreadcrumb,
} from "./SaleJewelryPage.styled";
import { Card, Col, Row, Typography } from "antd";
import FilterSortJewelry from "@/components/FilterSortJewelry/FilterSortJewelry";
import { Link } from "react-router-dom";
import { showAllProduct } from "@/services/productAPI";
import { getImage } from "@/services/imageAPI";

const { Title, Text } = Typography;

const SaleJewelryPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await showAllProduct();
        console.log("API response:", response.data.data);

        if (response && response.data && Array.isArray(response.data.data)) {
          const fetchedProducts = response.data.data.map((jewelry: any) => ({
            id: jewelry.ProductID,
            name: jewelry.Name,
            brand: jewelry.Brand,
            totalDiamondPrice: jewelry.TotalDiamondPrice,
            firstPrice: jewelry.FirstPrice,
            discountFirstPrice: jewelry.DiscountFirstPrice,
            percentDiscount: jewelry.Discount.PercentDiscounts,
            type: jewelry.JewelrySetting.jewelryType.Name,
            jewelryType: jewelry.JewelrySetting?.jewelryType?.Name,
            images: jewelry.UsingImage.map((image: any) => ({
              id: image.UsingImageID,
              url: getImage(image.UsingImageID),
            })),
          }));

          console.log(fetchedProducts);

          setProducts(fetchedProducts);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.discountFirstPrice &&
        product.percentDiscount &&
        product.percentDiscount <= 50
    );
    setFilteredProducts(filtered);
  }, [products]);

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
              title: "Shop Sale Jewelry ",
            },
          ]}
        />
      </div>
      <Container className="wide">
        <Heading>
          <h2>SALE JEWELRY - UP TO 50%</h2>
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
            {filteredProducts
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((product) => (
                <Col key={product.id} span={6}>
                  <Card
                    key={product.id}
                    style={{ borderRadius: "0" }}
                    hoverable
                    className="product-card"
                    cover={
                      product.images.length > 0 ? (
                        <>
                          <Link to={`/product/${product.id}`}>
                            <img
                              style={{ borderRadius: "0" }}
                              src={product.images[0]?.url || ""}
                              alt={product.name}
                              className="product-image"
                              onMouseOver={(e) =>
                                (e.currentTarget.src =
                                  product.images[1]?.url ||
                                  product.images[0]?.url ||
                                  "")
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.src =
                                  product.images[0]?.url || "")
                              }
                            />
                          </Link>
                          {product.discountFirstPrice && (
                            <div className="sale-badge">SALE</div>
                          )}
                        </>
                      ) : (
                        <div>No Image Available</div>
                      )
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
                        {product.discountFirstPrice ? (
                          <>
                            <Text className="product-price">
                              ${product.discountFirstPrice}
                            </Text>
                            <Text delete className="product-sale-price">
                              ${product.firstPrice}
                            </Text>
                          </>
                        ) : (
                          <Text className="product-price">
                            ${product.firstPrice}
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
          total={filteredProducts.length}
          onChange={handleChangePage}
        />
      </Container>
    </Section>
  );
};

export default SaleJewelryPage;
