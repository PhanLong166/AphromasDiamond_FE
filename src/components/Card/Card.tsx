import React from "react";
import { Card, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

interface ProductCardProps {
  product: any;
  wishList: string[];
  toggleWishList: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, wishList, toggleWishList }) => (
  <Card
    style={{ borderRadius: "0" }}
    hoverable
    className="product-card"
    cover={
      <>
        <Link to={`/product/${product.id}`}>
          <img
            style={{ borderRadius: "0" }}
            src={product.images[0]}
            alt={product.name}
            className="product-image"
            onMouseOver={(e) => (e.currentTarget.src = product.images[2])}
            onMouseOut={(e) => (e.currentTarget.src = product.images[0])}
          />
        </Link>
        {product.salePrice && <div className="sale-badge">SALE</div>}
      </>
    }
  >
    <div className="product-info">
      <Title level={4} className="product-name">
        <Link to={`/product/${product.id}`}>
          <div>{product.name}</div>
        </Link>
        {wishList.includes(product.id) ? (
          <HeartFilled className="wishlist-icon" onClick={() => toggleWishList(product.id)} />
        ) : (
          <HeartOutlined className="wishlist-icon" onClick={() => toggleWishList(product.id)} />
        )}
      </Title>
      <div className="price-container">
        <Text className="product-price">
          ${product.salePrice ? product.salePrice : product.price}
        </Text>
        {product.salePrice && <Text delete className="product-sale-price">${product.price}</Text>}
      </div>
    </div>
  </Card>
);

export default ProductCard;
