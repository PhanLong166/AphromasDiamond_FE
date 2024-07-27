// import React, { useState, useEffect } from "react";
// import { products } from "../shared/ListOfProducts";
// import { Section, Container, Heading, List, StyledPagination, CustomBreadcrumb } from "./AllProduct.styled";
// import { Card, Col, Row, Typography } from "antd";
// import { HeartFilled, HeartOutlined } from "@ant-design/icons";
// import FilterSortJewelry from "@/components/FilterSortJewelry/FilterSortJewelry";
// const { Title, Text } = Typography;
// import { Link } from "react-router-dom";

// const AllProduct: React.FC = () => {
//   const excludedCategories = [
//     "wedding-ring",
//     "engagement-ring",
//     "men-engagement-ring",
//     "men-wedding-ring",
//   ];

//   const [filteredProducts] = useState(
//     products.filter(
//       (product) => !excludedCategories.includes(product.categories)
//     )
//   );

//   const [wishList, setWishList] = useState<string[]>([]);
//   // const navigate = useNavigate();

//   useEffect(() => {
//     const savedWishList = sessionStorage.getItem("wishlist");
//     if (savedWishList) {
//       setWishList(JSON.parse(savedWishList));
//     }
//   }, []);

//   useEffect(() => {
//     sessionStorage.setItem("wishlist", JSON.stringify(wishList));
//   }, [wishList]);

//   const toggleWishList = (productId: string) => {
//     setWishList((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 12;

//   const handleChangePage = (page: any) => {
//     setCurrentPage(page);
//   };

//   // const handleProductClick = (id: any) => {
//   //   navigate(`${config.routes.public.product}/${id}`);
//   // };

//   return (
//     <Section>
//       {/* <Button onClick={() => navigate("/wishlist")}>Go to Wishlist</Button> */}

//       <div>
//         <CustomBreadcrumb
//           separator=">"
//           items={[
//             {
//               title: "Home",
//               href: "/",
//             },
//             {
//               title: "All Product",
//             },
//           ]}
//         />
//       </div>
//       <Container className="wide">
//         <Heading>
//           <h2>ALL JEWELRYS</h2>
//         </Heading>
//         <FilterSortJewelry />
//         <hr
//           style={{
//             maxWidth: "1400px",
//             margin: "32px auto",
//             border: "1px solid rgba(21, 21, 66, 0.3)",
//           }}
//         />
//         <List>
//           <Row gutter={[16, 16]}>
//             {filteredProducts.map((product) => (
//                <Col key={product.id} span={6}>

//                <Card
//                  key={product.id}
//                  style={{ borderRadius: "0" }}
//                  hoverable
//                  className="product-card"
//                  cover={
//                    <>
//                      <Link to={`/product/${product.id}`} >
//                      <img
//                        style={{ borderRadius: "0" }}
//                        src={product.images[0]}
//                        alt={product.name}
//                        className="product-image"
//                        onMouseOver={(e) =>
//                          (e.currentTarget.src = product.images[2])
//                        }
//                        onMouseOut={(e) =>
//                          (e.currentTarget.src = product.images[0])
//                        }
//                      />
//                      </Link>
//                      {product.salePrice && (
//                        <div className="sale-badge">SALE</div>
//                      )}
//                    </>
//                  }
//                >
//                  <div className="product-info">
//                    <Title level={4} className="product-name">
//                    <Link to={`/product/${product.id}`}>
//                      <div>{product.name}</div>
//                      </Link>
//                      {wishList.includes(product.id) ? (
//                        <HeartFilled
//                          className="wishlist-icon"
//                          onClick={() => toggleWishList(product.id)}
//                        />
//                      ) : (
//                        <HeartOutlined
//                          className="wishlist-icon"
//                          onClick={() => toggleWishList(product.id)}
//                        />
//                      )}
//                    </Title>
//                    <div className="price-container">
//                      <Text className="product-price">
//                        $
//                        {product.salePrice
//                          ? product.salePrice
//                          : product.price}
//                      </Text>
//                      {product.salePrice && (
//                        <Text delete className="product-sale-price">
//                          ${product.price}
//                        </Text>
//                      )}
//                    </div>
//                  </div>
//                </Card>

//            </Col>
//          ))}
//           </Row>
//         </List>
//         <StyledPagination
//           current={currentPage}
//           pageSize={pageSize}
//           total={filteredProducts.length}
//           onChange={handleChangePage}
//         />
//       </Container>
//     </Section>
//   );
// };

// export default AllProduct;
import React, { useState, useEffect } from "react";
import {
  Section,
  Container,
  Heading,
  List,
  StyledPagination,
  CustomBreadcrumb,
} from "./AllProduct.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import FilterSortJewelry from "@/components/FilterSortJewelry/FilterSortJewelry";
import { Link } from "react-router-dom";
import { showAllProduct } from "@/services/productAPI";
import { getImage } from "@/services/imageAPI";
import { number } from "yup";

const { Title, Text } = Typography;

const AllProduct_v2: React.FC = () => {
  const excludedCategories = [
    "Wedding Ring",
    "Engagement Ring",
    "Men Engagement Ring",
    "Men Wedding Ring",
  ];

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [wishList, setWishList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

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
            discount: jewelry.Discount?.PercentDiscounts || 0,
            salePrice: jewelry.SalePrice, // Assuming there's a salePrice field
            jewelryType: jewelry.JewelrySetting?.jewelryType?.Name, // Ensure correct nesting
            images: jewelry.UsingImage.map((image: any) => ({
              id: image.UsingImageID,
              url: getImage(image.UsingImageID),
            })),
            JewelrySettingVariants: jewelry.JewelrySetting?.jewelrySettingVariant?.map((variant: any)=> ({
              id: variant.JewelrySettingVariantID,
              sizeID: variant.SizeID,
              materialID: variant.MaterialJewelryID,
              weight: variant.Weight,
              quantity: variant.Quantity,
              price: variant.Price
            })),
            firstPriceProduct: (jewelry.TotalDiamondPrice + jewelry.JewelrySetting?.jewelrySettingVariant[0]?.Price)*(100-jewelry.Discount?.PercentDiscounts)/100,
            //Prrr: jewelry.totalDiamondPrice?0
          }));
          
          console.log(fetchedProducts);
          setProducts(fetchedProducts);
          setLoading(false);
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
      (product) => !excludedCategories.includes(product.jewelryType)
    );
    setFilteredProducts(filtered);
  }, [products]);

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

  const handleChangePage = (page: any) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
              title: "All Product",
            },
          ]}
        />
      </div>
      <Container className="wide">
        <Heading>
          <h2>ALL JEWELRY</h2>
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
                          {product.salePrice && (
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
                        <Text className="product-price">
                          $
                          {product.firstPriceProduct}
                        </Text>
                        {product.salePrice && (
                          <Text delete className="product-sale-price">
                            ${product.totalDiamondPrice}
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

export default AllProduct_v2;


