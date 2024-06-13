// import { useState } from "react";
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
// import { CaretDownOutlined } from "@ant-design/icons";
// const { Title, Text } = Typography;
import {} from "@ant-design/icons";
import { Collapse } from "antd";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import { theme } from "../../../themes";
const CustomBreadcrumb = styled(Breadcrumb)`
  margin-left: 175px;
  padding-top: 10px;
  padding-bottom: 10px;
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

const giftData = [
  {
    id: 1,
    title: "The Pink Star",
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
    img: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift1.jpg?alt=media&token=d572a775-8c7d-4e0e-9bba-f320cc69ab0b",
  },
  {
    id: 2,
    title: "The Oppenheimer Blue",
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
    img: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift2.jpg?alt=media&token=8821c1ed-ad56-493a-bde9-8ad9d943ad09",
  },
  {
    id: 3,
    title: "The Pink Star",
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
    img: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift1.jpg?alt=media&token=d572a775-8c7d-4e0e-9bba-f320cc69ab0b",
  },
  {
    id: 4,
    title: "The Oppenheimer Blue",
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
    img: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift2.jpg?alt=media&token=8821c1ed-ad56-493a-bde9-8ad9d943ad09",
  },
  {
    id: 5,
    title: "The Oppenheimer Blue",
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
    img: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift2.jpg?alt=media&token=8821c1ed-ad56-493a-bde9-8ad9d943ad09",
  },
  {
    id: 6,
    title: "The Pink Star",
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
    img: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift1.jpg?alt=media&token=d572a775-8c7d-4e0e-9bba-f320cc69ab0b",
  },
  {
    id: 7,
    title: "The Oppenheimer Blue",
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
    img: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift2.jpg?alt=media&token=8821c1ed-ad56-493a-bde9-8ad9d943ad09",
  },
  {
    id: 8,
    title: "The Oppenheimer Blue",
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
    img: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift2.jpg?alt=media&token=8821c1ed-ad56-493a-bde9-8ad9d943ad09",
  },
  {
    id: 9,
    title: "The Pink Star",
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
    img: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift1.jpg?alt=media&token=d572a775-8c7d-4e0e-9bba-f320cc69ab0b",
  },
  {
    id: 10,
    title: "The Oppenheimer Blue",
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
    img: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Fgift2.jpg?alt=media&token=8821c1ed-ad56-493a-bde9-8ad9d943ad09",
  },
];

const Gift = () => {
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // const toggleAccordion = (index: number) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };
  const StyledCollapse = styled(Collapse)`
    .ant-collapse-item {
      background-color: #ffffff;
       
    }
       .ant-collapse-header-text {
       color: ${theme.color.primary};
       }
      .ant-collapse-content {
      background-color: #F5F2ED;
      color: #45413e;
      }
      .ant-collapse-expand-icon {
       color: ${theme.color.primary};
      }
       .ant-collapse-header {
       border-radius: 8px;
     
       }
  `;

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
              vintage-style engagement rings. Hand-engraved details, beaded-edge
              milgrain and pavé accent diamonds are featured throughout this
              intricately crafted collection. Pair these settings with a
              traditional round diamond, or make them even more unique with
              fancy-cut diamonds. Choose the vintage engagement ring that
              matches timeless styles such as Art Deco, mid-century and other
              20th century fashions.
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
            {giftData.map((item, index) =>
              index % 2 === 0 ? (
                <div key={item.id} className="gift-item1">
                  <div className="gift-img1">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="gift-text1">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="gift-button1">
                      <a href="/all" className="link-add">
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={item.id} className="gift-item">
                  <div className="gift-text">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="gift-button">
                      <a href="/all" className="link-add">
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                  <div className="gift-img">
                    <img src={item.img} alt={item.title} />
                  </div>
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
