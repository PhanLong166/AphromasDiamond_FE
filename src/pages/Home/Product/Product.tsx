import React, { useState } from "react";
import {
  Container,
  Banner,
  LeftSection,
  FAQs,
  LeftFAQ,
  List,
} from "./Product.styled";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import { Collapse } from "antd";
import { Card, Col, Row, Typography, Pagination} from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { theme } from "../../../themes";
const { Title, Text } = Typography;
const CustomBreadcrumb = styled(Breadcrumb)`
  margin-left: 175px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

interface Product {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  hoverImage: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "SOFIA TWO FINGER RING",
    price: 100,
    salePrice: 98,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_1.webp?alt=media&token=a7ebfeca-9fa1-4250-887f-69a7cdd0e11a",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_2.webp?alt=media&token=e043514e-f66c-4397-987e-27a44ea87578",
  },
  {
    id: 2,
    name: "RAIN SOLITARY RING",
    price: 59,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp2_1.webp?alt=media&token=8d8f6760-e2ac-45eb-8c6b-880ff64e95bc",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp2_2.webp?alt=media&token=bc0adf15-7ad9-4507-8d17-e8a27d624417",
  },

  {
    id: 3,
    name: "GALA STAMP RING",
    price: 100,
    salePrice: 90,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp3_1.webp?alt=media&token=7dd02d2a-24f9-4b31-a809-bccfa25cefde",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp3_2.webp?alt=media&token=330beb5e-ee10-429c-8b8b-1df54073a294",
  },
  {
    id: 4,
    name: "THE ROCKS RING SET",
    price: 185,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp4_1.webp?alt=media&token=bdc15cce-29cd-401c-bf79-105b6bc66592",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp4_2.webp?alt=media&token=90ee67f1-59c9-42b4-b851-ddc2104a96a4",
  },
  {
    id: 5,
    name: "DIAMONDS AND GOLD BALANCE RING",
    price: 520,
    salePrice: 445,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp5_1.webp?alt=media&token=e29bfcd0-9170-4bd9-ba64-c58326decdaa",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp5_2.webp?alt=media&token=9867ffe1-d125-4ff7-906f-0fc95e993761",
  },
  {
    id: 6,
    name: "DIAMONDS AND GOLD NORA RING",
    price: 585,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp6_1.webp?alt=media&token=1239447c-a395-4239-8bde-1e6f7f7730ed",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp6_2.webp?alt=media&token=775559ab-5d42-4b24-9e0b-d95b173c07c6",
  },

  {
    id: 7,
    name: "DIAMONDS ETERNITY MINI RING",
    price: 900,
    salePrice: 845,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp7_1.webp?alt=media&token=146832c4-dd52-4901-aae7-49853ac469eb",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp7_2.webp?alt=media&token=932b6133-fe30-46c5-861a-4efed29340fc",
  },
  {
    id: 8,
    name: "DIAMONDS AND GOLD LOOP RING",
    price: 585,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp8_1.webp?alt=media&token=0b64e6fb-9eed-4acb-b2b5-1fbaa4434458",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp8_2.webp?alt=media&token=2011db85-85f2-4c8c-a18b-1ebfabe24965",
  },
  {
    id: 9,
    name: "BRIGHT HEART RING",
    price: 120,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_1.webp?alt=media&token=c910282c-3053-4d26-9e91-963215878e9e",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_2.webp?alt=media&token=e5a7c595-4898-4881-af00-71e6233b7a1e",
  },

  {
    id: 10,
    name: "FIVE RING",
    price: 100.0,
    salePrice: 85.0,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp12_1.webp?alt=media&token=9df847ac-bffc-41f6-b122-c5be30fdba55",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp12_2.webp?alt=media&token=a6665e88-6452-4bf6-9093-239e4a2a4711",
  },
  {
    id: 11,
    name: "DIAMONDS AND GOLD DOU RING",
    price: 640,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp13_1.webp?alt=media&token=1e650bab-f310-4372-be4d-064b3e779e34",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp13_2.webp?alt=media&token=6a460ce6-7a95-4028-8ad7-544e06772ff7",
  },
];

const Product: React.FC = () => {
  const [wishList, setWishList] = useState<number[]>([]);

  const toggleWishList = (productId: number) => {
    setWishList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  

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

  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

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
          {products.map((product) => (
            <Col key={product.id} span={6}>
              <Card
                style={{ borderRadius: "0" }}
                hoverable
                className="product-card"
                cover={
                  <>
                    <img
                      style={{ borderRadius: "0" }}
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      onMouseOver={(e) =>
                        (e.currentTarget.src = product.hoverImage)
                      }
                      onMouseOut={(e) => (e.currentTarget.src = product.image)}
                    />
                    {product.salePrice && (
                      <div className="sale-badge">SALE</div>
                    )}
                  </>
                }
              >
                <div className="product-info">
                  <Title level={4} className="product-name">
                    {product.name}
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
                <button className="show-all-button">SHOW ALL</button>
              </div>
            </Card>
          </Col>
        </Row>
      </List>
      <div style={{ textAlign: 'center', margin: '20px auto' }}>
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

export default Product;
