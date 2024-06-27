import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, List, Row, Col, Card, Typography } from 'antd';
import { HeartFilled } from '@ant-design/icons';

interface Product {
  id: string;
  shape: string;
  metal: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  image1?: string;
  image2?: string;
  image3?: string;
  hoverImage: string;
  description: string;
}

interface WishListPageProps {
  wishList: Product[]; 
}

const { Text, Title } = Typography;

const WishListPage: React.FC<WishListPageProps> = ({ wishList }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    console.log('Clicked product:', productId);
  };

  return (
    <div>
      <h1>Wishlist</h1>
      <Button onClick={() => navigate("/")}>Back to Products</Button>
      <List>
        <Row gutter={[16, 16]}>
          {wishList.map((product) => (
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
                      onMouseOver={(e) => (e.currentTarget.src = product.hoverImage)}
                      onMouseOut={(e) => (e.currentTarget.src = product.image)}
                      onClick={() => handleProductClick(product.id)}
                    />
                    {product.salePrice && (
                      <div className="sale-badge">SALE</div>
                    )}
                  </>
                }
              >
                <div className="product-info">
                  <Title level={4} className="product-name">
                    <div onClick={() => handleProductClick(product.id)}>
                      {product.name}
                    </div>
                    <HeartFilled className="wishlist-icon" />
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
    </div>
  );
};

export default WishListPage;
