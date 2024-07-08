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
import { useParams } from "react-router-dom";
import Link from "@/components/Link";
import { products } from "./../shared/ListOfProducts";
const CustomBreadcrumb = styled(Breadcrumb)`
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 1400px;
  margin: 0 auto;
`;

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
  const { jewelryType } = useParams<{ jewelryType: string }>();
  const jewelryData: Record<string, any> = {
    "top-ten-bracelet": {
      title: "Top Ten Bracelets",
      overlay: "Diamond Bracelets",
      overlayText:
        "Discover the elegance of our top 10 diamond rings at our exclusive jewelry store. Each ring features meticulously selected diamonds set in exquisite designs, perfect for celebrating life's most cherished moments. Elevate your style with the unparalleled brilliance and timeless beauty of our premium diamond collection.",
      description:
        "Elevate your style with our diamond bracelets, crafted to perfection in yellow gold, white gold, rose gold, or platinum. Each bracelet features meticulously set diamonds that sparkle with every movement, offering a luxurious and timeless accessory for any occasion. Whether worn alone as a statement piece or layered with other jewelry, our bracelets are designed to enhance your beauty and express your individuality with sophistication and grace.",
      products: products.filter(
        (product) => product.categories === "bracelet" && product.gift === true
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fnecklacelist.jpeg?alt=media&token=e518f32c-79ba-4898-9438-4a294882b4e9",
    },

    "top-ten-necklace": {
      title: "Top Ten Necklaces",
      overlay: "Diamond Necklaces",
      overlayText:
        "Discover the elegance of our top 10 diamond rings at our exclusive jewelry store. Each ring features meticulously selected diamonds set in exquisite designs, perfect for celebrating life's most cherished moments. Elevate your style with the unparalleled brilliance and timeless beauty of our premium diamond collection.",
      description:
        "Adorn yourself with our exquisite diamond necklaces, crafted to capture attention and admiration. Set in yellow gold, white gold, rose gold, or platinum, each necklace showcases the beauty of diamonds in designs that range from classic to contemporary, making them a stunning addition to any jewelry collection. Whether worn as a centerpiece for formal occasions or as an everyday luxury, our necklaces are designed to complement your style and elevate your look with timeless elegance.",
      products: products.filter(
        (product) => product.categories === "necklace" && product.gift === true
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FDesign%20Your%20Own%20Pendant.jpeg?alt=media&token=9e6ba197-39d3-4b7e-84f3-a185792eb4aa",
    },
    "top-ten-earrings": {
      title: "Top Ten Earrings",
      overlay: "Diamond Earrings",
      overlayText:
        "Discover the elegance of our top 10 diamond rings at our exclusive jewelry store. Each ring features meticulously selected diamonds set in exquisite designs, perfect for celebrating life's most cherished moments. Elevate your style with the unparalleled brilliance and timeless beauty of our premium diamond collection.",
      description:
        "Make a statement with our diamond earrings, designed to enhance your natural beauty and style. Available in yellow gold, white gold, rose gold, or platinum settings, each pair of earrings features sparkling diamonds that add a touch of glamour and sophistication to any ensemble. Whether worn for a special occasion or as an everyday indulgence, our earrings are crafted with precision to reflect your unique personality and enhance your presence with timeless elegance and refinement.",
      products: products.filter(
        (product) => product.categories === "earrings" && product.gift === true
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20Diamond%20Earring.jpeg?alt=media&token=7fe4d3e5-6894-4b52-90b8-ac1d94b5f588",
    },
    "top-ten-ring": {
      title: "Top Ten Rings",
      overlay: "Diamond Ring",
      overlayText:
        "Discover the elegance of our top 10 diamond rings at our exclusive jewelry store. Each ring features meticulously selected diamonds set in exquisite designs, perfect for celebrating life's most cherished moments. Elevate your style with the unparalleled brilliance and timeless beauty of our premium diamond collection.",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter(
        (product) => product.type === "Ring" && product.gift === true
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20grown%20diamonds.jpeg?alt=media&token=63d86a3e-c0cb-48ea-a8e7-38e650e17425",
    },
  };

  if (!jewelryType || !jewelryData[jewelryType]) {
    return <div>Invalid jewelry type selected.</div>;
  }

  const currentJewelryData = jewelryData[jewelryType];

  const faqs = jewelryData[jewelryType]?.faqs || [];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

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
                title: currentJewelryData.title,
              },
            ]}
          />
        </div>
        <Banner
          style={{ backgroundImage: `url(${currentJewelryData.bannerImage})` }}
        >
          <div className="bannerContent">
            <LeftSection>
              <h2>{currentJewelryData.title}</h2>
              <div className="subheading">{currentJewelryData.description}</div>
            </LeftSection>
          </div>
        </Banner>
        <InfoSection>
          <Overlay>
            <h2>{currentJewelryData.overlay}</h2>
            <p>{currentJewelryData.overlayText}</p>
          </Overlay>
        </InfoSection>
        <GiftSection>
          <div className="gift-section">
            {currentJewelryData.products.map((product: any, index: any) =>
              index % 2 === 0 ? (
                <div key={product.id} className="gift-item1">
                  <div className="gift-img1">
                    <img src={product.images[0]} alt={product.name} />
                  </div>

                  <div className="gift-text1">
                    <h2 className="title">{product.name}</h2>

                    <p>{product.description}</p>
                    <div className="gift-button1">
                      <Link
                        to={`/product/${product.id}`}
                        className="link-add"
                        underline
                        zoom
                        scroll
                      >
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={product.id} className="gift-item">
                  <div className="gift-text">
                    <h2 className="title">{product.name}</h2>

                    <p>{product.description}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="link-add"
                      underline
                      zoom
                      scroll
                    >
                      <div className="gift-button">LEARN MORE</div>
                    </Link>
                  </div>

                  <div className="gift-img">
                    <img src={product.images[0]} alt={product.name} />
                  </div>
                </div>
              )
            )}
          </div>
        </GiftSection>
        <FAQs>
          <LeftFAQ>
            <h2>FAQs about {currentJewelryData.title}</h2>
          </LeftFAQ>
          <StyledCollapse
            items={faqs.map((faq: any) => ({
              key: faq.key,
              label: faq.label,
              children: <p>{faq.children}</p>,
            }))}
            defaultActiveKey={["1"]}
            onChange={onChange}
          />
        </FAQs>
      </Container>
    </>
  );
};

export default Gift;
