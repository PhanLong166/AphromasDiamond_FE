import React, { useState, useEffect } from "react";
import { Container, List } from "./FirmList.styled";

import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;
import config from "@/config";
// import { firmData } from "./FirmList.data";
import FAQ from "@/components/FAQs/FAQs";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Banner from "@/components/Banner/Banner";
import { getImage } from "@/services/imageAPI";
import { showAllProduct } from "@/services/productAPI";

const FirmList: React.FC = () => {
  const { jewelryFirm } = useParams<{ jewelryFirm: string }>();
  const navigate = useNavigate();
  const excludedCategories = [
    "Wedding Ring",
    "Engagement Ring",
    "Men Engagement Ring",
    "Men Wedding Ring",
  ];

  const [products, setProducts] = useState<any[]>([]);
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

  const firmData: Record<string, any> = {
    Bvlgari: {
      title: "Bvlgari Firm",
      description:
        "Bvlgari is known for its bold and luxurious jewelry that combines innovative design with high-quality craftsmanship. With a distinctive style that often incorporates vibrant gemstones and unique patterns, Bvlgari’s pieces make a strong statement of elegance and opulence. The brand's jewelry is celebrated for its glamorous aesthetic and exceptional artistry.",
      products: products.filter(
        (product) =>
          product.brand === "Bvlgari" &&
          !excludedCategories.includes(product.jewelryType)
      ),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: (
            <p>
              {" "}
              Our women's diamond rings range from $900 to $1000 depending on
              several factors, including the type of metal and diamond carat
              weight.
            </p>
          ),
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: (
            <p>
              {" "}
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fbulgari.png?alt=media&token=1897c535-f005-4d37-a106-26bf8426d5ba",
    },
    HarryWinston: {
      title: "Harry Winston Firm",
      description:
        "Harry Winston is renowned for its exceptional and opulent jewelry, characterized by its exquisite diamonds and masterful craftsmanship. Known as the King of Diamonds, Harry Winston's pieces feature breathtaking designs and unparalleled brilliance. Each creation reflects the brand's dedication to luxury and sophistication, making it a symbol of high-end elegance.",
      products: products.filter(
        (product) =>
          product.brand === "Harry Winston" &&
          !excludedCategories.includes(product.jewelryType)
      ),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: (
            <p>
              {" "}
              Our women's diamond rings range from $700 to $800 depending on
              several factors, including the type of metal and diamond carat
              weight.
            </p>
          ),
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: (
            <p>
              {" "}
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Flearnaboutbanner.jpeg?alt=media&token=e7168cf6-8434-4cad-95e8-dc5fce8d81af",
    },
    "Tiffany&Co": {
      title: "Tiffany & Co Firm",
      description:
        "Tiffany & Co. is synonymous with timeless elegance and unparalleled quality. The brand's jewelry collection features classic designs and exquisite craftsmanship, with a focus on high-quality gemstones and precious metals. Tiffany's pieces are renowned for their sophistication and enduring beauty, making them iconic symbols of luxury and style.",
      products: products.filter(
        (product) =>
          product.brand === "Tiffany & Co" &&
          !excludedCategories.includes(product.jewelryType)
      ),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: (
            <p>
              {" "}
              Our women's diamond rings range from $500 to $600 depending on
              several factors, including the type of metal and diamond carat
              weight.
            </p>
          ),
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: (
            <p>
              {" "}
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FDesign%20Your%20Own%20Pendant.jpeg?alt=media&token=9e6ba197-39d3-4b7e-84f3-a185792eb4aa",
    },
    Cartier: {
      title: "Cartier Firm",
      description:
        "Cartier is celebrated for its elegant and luxurious jewelry, which combines classic design with modern flair. Known for its meticulous craftsmanship and innovative use of gemstones, Cartier's pieces embody sophistication and refinement. The brand's jewelry is a testament to its rich heritage and commitment to timeless elegance.",
      products: products.filter(
        (product) =>
          product.brand === "Cartier" &&
          !excludedCategories.includes(product.jewelryType)
      ),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: (
            <p>
              {" "}
              Our women's diamond rings range from $300 to $400 depending on
              several factors, including the type of metal and diamond carat
              weight.
            </p>
          ),
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: (
            <p>
              {" "}
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Flab_diamonds_sale_banner.6a518.jpg?alt=media&token=b7d30ece-f543-4890-b7de-7c37e1286dfb",
    },
    "VanCleef&Arpels": {
      title: "Van Cleef & Arpels Firm",
      description:
        "Van Cleef & Arpels is renowned for its exquisite jewelry, which blends timeless elegance with innovative design. Each piece is crafted with meticulous attention to detail, featuring stunning gemstones and intricate settings. The brand's creations are celebrated for their unique artistry and sophisticated charm, making them coveted treasures for any collection.",
      products: products.filter(
        (product) =>
          product.brand === "Van Cleef & Arpels" &&
          !excludedCategories.includes(product.jewelryType)
      ),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: (
            <p>
              {" "}
              Our women's diamond rings range from $276 to $56,024 depending on
              several factors, including the type of metal and diamond carat
              weight.
            </p>
          ),
        },
        {
          key: "2",
          label: "Can weddings rings be diamond rings?",
          children: (
            <p>
              {" "}
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FBrandBvl.jpg?alt=media&token=344f0091-7993-435a-9fc1-e6f689f0e976",
    },
  };
  if (!jewelryFirm || !firmData[jewelryFirm]) {
    return <div>Invalid jewelry type selected.</div>;
  }

  const currentFirmData = firmData[jewelryFirm];
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

  const faqs = firmData[jewelryFirm]?.faqs || [];

  return (
    <Container>
      <div>
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: currentFirmData.title },
          ]}
        />
      </div>
      <Banner
        bannerImage={currentFirmData.bannerImage}
        title={currentFirmData.title}
        description={currentFirmData.description}
      />
      <List>
        <Row gutter={[16, 16]}>
          {currentFirmData.products.map((product: any) => (
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
                            (e.currentTarget.src = product.images[0]?.url || "")
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
          <Col span={6}>
            <Card className="show-all-card">
              <div className="show-all-content">
                <Text className="show-all-text">
                  Don't see what you're looking for? <br />
                  Browse our full catalog
                </Text>
                <button
                  className="show-all-button"
                  onClick={() => navigate(config.routes.public.allProduct)}
                >
                  SHOW ALL
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </List>
      <FAQ title={currentFirmData.title} faqs={faqs} />
    </Container>
  );
};

export default FirmList;
