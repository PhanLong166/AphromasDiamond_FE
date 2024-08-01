import React, { useEffect, useState } from "react";
import {
  Section,
  List,
  FAQs,
  LeftFAQ,
  CustomBreadcrumb,
  StyledCollapse,
  StyledPagination,
  Banner,
  LeftSection,
} from "./AllDiamond.styled";
import { Card, Col, Row, Typography, Spin } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { labels, texts } from "./AllDiamond.props";
import { useDocumentTitle } from "@/hooks";
import { showAllDiamond } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

const items = texts.map((text, index) => ({
  key: (index + 1).toString(),
  label: labels[index],
  children: <p>{text}</p>,
}));

const onChange = (key: any) => {
  console.log(key);
};

const AllDiamond: React.FC = () => {
  useDocumentTitle("Diamond | Aphromas Diamond");

  const [diamonds, setDiamonds] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [wishList, setWishList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await showAllDiamond();
        console.log("API response:", response.data.data);

        if (response && response.data && Array.isArray(response.data.data)) {
          const fetchedDiamonds = response.data.data

            .filter(
              (item: any) => item.IsActive === true && item.Quantity === 1
            )
            .map((item: any) => ({
              id: item.DiamondID,
              name: item.Name,
              cut: item.Cut,
              price: item.Price,
              color: item.Color,
              description: item.Description,
              isActive: item.IsActive,
              clarity: item.Clarity,
              cutter: item.Cutter,
              shape: item.Shape,
              discountPrice: item.DiscountPrice,
              images: item.usingImage.map((image: any) => ({
                id: image.UsingImageID,
                name: image.Name,
                url: getImage(image.UsingImageID),
              })),
            }));

          console.log(fetchedDiamonds);

          setDiamonds(fetchedDiamonds);
          setLoading(false);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching diamonds:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Spin tip="Loading..." />
      </div>
    );
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
              title: "All Diamond",
            },
          ]}
        />
      </div>
      <Banner>
        <div className="bannerContent">
          <LeftSection>
            <h2>ALL DIAMONDS</h2>
            <h1>Because Your Occasion is Brilliant</h1>
            <div className="subheading">
              Cherished for their unique beauty and timeless elegance, diamonds
              are the ultimate way to mark your moment and create a sparkling
              memory. Each diamond, with its distinct brilliance, captures the
              essence of your special occasion, making it unforgettable. Whether
              it's a symbol of love or a personal achievement, a diamond
              elevates the significance of life's precious events, turning them
              into lasting, luminous milestones.
            </div>
          </LeftSection>
        </div>
      </Banner>
      <hr
        style={{
          maxWidth: "1400px",
          margin: "20px auto",
          border: "1px solid rgba(21, 21, 66, 0.3)",
        }}
      />
      <List>
        <Row gutter={[16, 16]}>
          {diamonds
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map((diamond: any) => (
              <Col key={diamond.id} span={6}>
                <Card
                  style={{ borderRadius: "0" }}
                  hoverable
                  className="product-card"
                  cover={
                    <>
                      <Link to={`/diamond/${diamond.id}`}>
                        <img
                          style={{ borderRadius: "0" }}
                          src={
                            diamond.images && diamond.images.length > 0
                              ? diamond.images[0].url
                              : "/default-image.jpg"
                          }
                          alt={diamond.name}
                          className="product-image"
                          onMouseOut={(e) =>
                            (e.currentTarget.src =
                              diamond.images && diamond.images.length > 0
                                ? diamond.images[0].url
                                : "/default-image.jpg")
                          }
                        />
                      </Link>
                      {diamond.discountPrice &&
                        diamond.discountPrice !== diamond.price && (
                          <div className="sale-badge">SALE</div>
                        )}
                    </>
                  }
                >
                  <div className="product-info">
                    <Title level={4} className="product-name">
                      <Link to={`/diamond/${diamond.id}`}>{diamond.name}</Link>
                      {wishList.includes(diamond.id) ? (
                        <HeartFilled
                          className="wishlist-icon"
                          onClick={() => toggleWishList(diamond.id)}
                        />
                      ) : (
                        <HeartOutlined
                          className="wishlist-icon"
                          onClick={() => toggleWishList(diamond.id)}
                        />
                      )}
                    </Title>
                    <div className="price-container">
                      <Text className="product-price">
                        $
                        {diamond.discountPrice &&
                        diamond.discountPrice !== diamond.price
                          ? diamond.discountPrice
                          : diamond.price}
                      </Text>
                      {diamond.discountPrice &&
                        diamond.discountPrice !== diamond.price && (
                          <Text delete className="product-sale-price">
                            ${diamond.price}
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
        total={diamonds.length}
        onChange={handleChangePage}
      />
      <FAQs>
        <LeftFAQ>
          <h2>FAQs ABOUT DIAMONDS</h2>
        </LeftFAQ>
        <StyledCollapse
          items={items}
          defaultActiveKey={["1"]}
          onChange={onChange}
        />
      </FAQs>
    </Section>
  );
};

export default AllDiamond;
