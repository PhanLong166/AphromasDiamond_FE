import React, { useState, useEffect } from "react";
import { products } from "./../shared/ListOfProducts";
import { Section, Container, Heading, List, StyledPagination, CustomBreadcrumb } from "./AllProduct.styled";
import {Col, Row } from "antd";
import FilterSortJewelry from "@/components/FilterSortJewelry/FilterSortJewelry";
import ProductCard from "@/components/ProductCard/ProductCard";

const AllProduct: React.FC = () => {
  const excludedCategories = [
    "wedding-ring",
    "engagement-ring",
    "men-engagement-ring",
    "men-wedding-ring",
  ];

  const [filteredProducts] = useState(
    products.filter(
      (product) => !excludedCategories.includes(product.categories)
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
              title: "All Product",
            },
          ]}
        />
      </div>
      <Container className="wide">
        <Heading>
          <h2>ALL JEWELRYS</h2>
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
               <ProductCard
                 product={product}
                 wishList={wishList}
                 toggleWishList={toggleWishList}
               />
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

export default AllProduct;
