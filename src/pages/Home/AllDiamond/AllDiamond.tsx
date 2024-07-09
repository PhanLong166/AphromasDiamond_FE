import React, { useEffect, useState } from "react";
import { Section, Heading, List, FAQs, LeftFAQ, CustomBreadcrumb, StyledCollapse, StyledPagination } from "./AllDiamond.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { showAllDiamond } from "@/services/diamondAPI";
import FilterSortDiamond from "@/components/FilterSortDiamond/FilterSortDiamond";

import { diamonds } from "../shared/ListOfDiamond";

import { labels, texts } from "./AllDiamond.props";
import { useDocumentTitle } from "@/hooks";
import Link from '@/components/Link';

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
  useDocumentTitle('Diamond | Aphromas Diamond')

  const [filteredDiamonds, setFilteredDiamonds] = useState(diamonds);
  console.log(setFilteredDiamonds);
  const [wishList, setWishList] = useState<string[]>([]);

  const toggleWishList = (productId: string) => {
    setWishList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const handleChangePage = (page: any) => {
    setCurrentPage(page);
  };

  const [diamond, setDiamond] = useState();
  useEffect(() => {
    async () => {
      const { data } = await showAllDiamond();
      setDiamond(data.data);
      console.log(diamond);
    };
  }, []);

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
      <Heading>
        <h2>ALL DIAMONDS</h2>
      </Heading>
      <FilterSortDiamond />
      <hr
        style={{
          maxWidth: "1400px",
          margin: "20px auto",
          border: "1px solid rgba(21, 21, 66, 0.3)",
        }}
      />
      <List>
        <Row gutter={[16, 16]}>
          {filteredDiamonds.map((diamond) => (
            <Col key={diamond.id} span={6}>
              <Link to={`/diamond/${diamond.id}`} underline zoom scroll>
              <Card
                style={{ borderRadius: "0" }}
                hoverable
                className="product-card"
                cover={
                  <>
                    <img
                      style={{ borderRadius: "0" }}
                      src={diamond.images[0]}
                      alt={diamond.name}
                      className="product-image"
                      onMouseOut={(e) => (e.currentTarget.src = diamond.images[0])}
                    />
                    {diamond.salePrice && (
                      <div className="sale-badge">SALE</div>
                    )}
                  </>
                }
              >
                <div className="product-info">
                  <Title level={4} className="product-name">
                    {diamond.name}
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
                      ${diamond.salePrice ? diamond.salePrice : diamond.price}
                    </Text>
                    {diamond.salePrice && (
                      <Text delete className="product-sale-price">
                        ${diamond.price}
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
        total={filteredDiamonds.length}
        onChange={handleChangePage}
      />
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
    </Section>
  );
};

export default AllDiamond;
