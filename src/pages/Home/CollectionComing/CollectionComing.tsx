import React from "react";
import { Row, Col } from "antd";
import { data } from "./data";
import {
  Container,
  Banner,
  SectionTitle,
  SectionContent,
  FullImage,
  Section,
  MainImage,
  MainTitle,
  BigTitle,
  RightContent,
  DesignImage,
} from "./CollectionComing.styled";
// import { Link } from "react-router-dom";

const CollectionComing: React.FC = () => {
  return (
    <>
      <Banner>{data.banner.title}</Banner>

      {/* Section 1 */}
      <Section>
        <MainTitle>{data.mainTitle.title}</MainTitle>

        <div className="mainImageSection">
          <MainImage src={data.mainTitle.src} alt="Whispers of Enchantment" />
        </div>
      </Section>
      <Container>
        {/* Section 2 */}
        <Section>
          <Row gutter={[10, 10]}>
            <Col span={12}></Col>
            <Col className="number" span={3}>
              ({data.section2.number})
            </Col>
            <Col span={9}>
              <SectionTitle>{data.section2.title}</SectionTitle>
              <SectionContent>{data.section2.content}</SectionContent>
            </Col>
          </Row>
        </Section>

        {/* Section 3 */}
        <Section>
          <Row gutter={[10, 10]}>
            <Col span={12}></Col>
            <Col className="number" span={3}>
              ({data.section3.number})
            </Col>
            <Col span={9}>
              <SectionTitle>{data.section3.title}</SectionTitle>
              <BigTitle>{data.section3.bigTitle}</BigTitle>
              <FullImage src={data.section3.src} alt="Our Vision" />
            </Col>
          </Row>
        </Section>
        <Section>
          {/* Section 4 */}
          <Row gutter={[10, 10]}>
            <Col span={12}></Col>
            <Col span={12}>
              <RightContent>{data.section4.content}</RightContent>
            </Col>
          </Row>
        </Section>

        {/* Section 5 */}
        <Section>
          <Row gutter={[10, 10]}>
            <Col span={12}>
              <div className="imgDesign">
                <DesignImage src={data.section5.images[0]} alt="Image 1" />
              </div>
            </Col>
            <Col span={12}>
              <div className="imgDesign">
                <DesignImage src={data.section5.images[1]} alt="Image 2" />
              </div>
            </Col>
          </Row>
        </Section>
        {/* Section 6 */}
        <Section>
          <Row gutter={[10, 10]}>
            <Col className="number" span={3}>
              ({data.section6.number})
            </Col>
            <Col span={9}>
              <SectionTitle>{data.section6.title}</SectionTitle>
              <SectionContent>{data.section6.content}</SectionContent>
            </Col>
            <Col span={12}></Col>
          </Row>
        </Section>

        {/* Section 7 */}
        <Section>
          <Row gutter={[10, 10]}>
            <Col className="number" span={3}>
              ({data.section7.number})
            </Col>
            <Col span={9}>
              <SectionTitle>{data.section7.title}</SectionTitle>
              <SectionContent>{data.section7.content}</SectionContent>
            </Col>
            <Col span={12}></Col>
          </Row>
        </Section>
      </Container>
      {/* Section 8 */}
      <Section>
        <Row>
          <Col span={12}>
            <FullImage
              src={data.section8.images[0]}
              alt="Image 3"
              style={{ height: "96%" }}
            />
          </Col>
          <Col span={12}>
            <FullImage src={data.section8.images[1]} alt="Image 4" />
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default CollectionComing;
