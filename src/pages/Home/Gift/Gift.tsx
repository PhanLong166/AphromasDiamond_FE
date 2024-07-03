import { useState } from "react";
import {
  Container,
  LeftSection,
  Banner,
  InfoSection,
  Overlay,
  GiftSection,
  FAQs,
  LeftFAQ,
} from "./Gift.styled";

import {} from "@ant-design/icons";
import { Collapse } from "antd";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import { theme } from "../../../themes";

import { Link} from "react-router-dom";
import { products } from "./../shared/ListOfProducts";
const CustomBreadcrumb = styled(Breadcrumb)`
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 1400px;
  margin: 0 auto;
`;

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
];

const labels = [
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


const Gift = () => {

  const StyledCollapse = styled(Collapse)`
    .ant-collapse-item {
      background-color: #ffffff;
    }
    .ant-collapse-header-text {
      color: ${theme.color.primary};
    }
    .ant-collapse-content {
      background-color: #f5f2ed;
      color: #45413e;
    }
    .ant-collapse-expand-icon {
      color: ${theme.color.primary};
    }
    .ant-collapse-header {
      border-radius: 8px;
    }
  `;
  const [filteredProducts] = useState(products);
 
  return (
    <>
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
                title: "Gift",
              },
            ]}
          />
        </div>
        <Banner>
          <div className="bannerContent">
            <LeftSection>
              <h2>Top Ten Rings</h2>
              <div className="subheading">
                Get heirloom-quality beauty with our captivating selection of
                vintage-style engagement rings. Hand-engraved details,
                beaded-edge milgrain and pavé accent diamonds are featured
                throughout this intricately crafted collection. Pair these
                settings with a traditional round diamond, or make them even
                more unique with fancy-cut diamonds. Choose the vintage
                engagement ring that matches timeless styles such as Art Deco,
                mid-century and other 20th century fashions.
              </div>
            </LeftSection>
          </div>
        </Banner>
        <InfoSection>
          <Overlay>
            <h2>Diamond Rings</h2>
            <p>
              Discover the elegance of our top 10 diamond rings at our exclusive
              jewelry store. Each ring features meticulously selected diamonds
              set in exquisite designs, perfect for celebrating life's most
              cherished moments. Elevate your style with the unparalleled
              brilliance and timeless beauty of our premium diamond collection.
            </p>
          </Overlay>
        </InfoSection>
        <GiftSection>
          <div className="gift-section">
            {filteredProducts.map((product, index) =>
              index % 2 === 0 ? (
                <div key={product.id} className="gift-item1">
                  <Link to={`/product/${product.id}`}>
                    <div className="gift-img1">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </Link>
                  <div className="gift-text1">
                    <Link to={`/product/${product.id}`}>
                      <h2 className="title">{product.name}</h2>
                    </Link>
                    <p>{product.description}</p>
                    <div className="gift-button1">
                      <Link to={`/product/${product.id}`} className="link-add">
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={product.id} className="gift-item">
                  <div className="gift-text">
                    <Link to={`/product/${product.id}`}>
                      <h2 className="title">{product.name}</h2>
                    </Link>
                    <p>{product.description}</p>
                    <Link to={`/product/${product.id}`} className="link-add">
                      <div className="gift-button">LEARN MORE</div>
                    </Link>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <div className="gift-img">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </GiftSection>
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
    </>
  );
};

export default Gift;
