import React from "react";
import { Row, Col } from "antd";
import { data } from "./data";
import {
  Container,
  Section,
  Title,
  TitleLeft,
  Subtitle,
  Content,
  Image,
  MainImage,
  MainTitle,
  ContentCenter,
  SubtitleLeft,
  ImageHeading,
  CenteredContainer,
  ImageSection,
} from "./CollectionInformation.styled";
import { Link } from "react-router-dom";

const CollectionInformation: React.FC = () => {
  return (
    <Container>
      <Section>
        <MainTitle>{data.mainTitle}</MainTitle>
        <Row gutter={[10, 10]}>
          {data.imageHeadings.map((src, index) => (
            <Col span={4} key={index}>
              <ImageHeading src={src} alt={`Image ${index + 1}`} />
            </Col>
          ))}
        </Row>
      </Section>
      <Section>
        <Title>{data.section1.title}</Title>
        <Subtitle>{data.section1.subtitle}</Subtitle>
        <div className="mainImageSection">
          <MainImage src={data.section1.mainImage} alt="Main Image" />
        </div>
        <ContentCenter className="section1">
          {data.section1.content}
        </ContentCenter>
      </Section>

      {/* Section 2: Celebrate Love & Empowerment */}
      <Section>
        <Title>{data.section2.title}</Title>
        <Subtitle>{data.section2.subtitle}</Subtitle>
        <Row gutter={[5, 5]}>
          {data.section2.images.map((src, index) => (
            <Col span={6} key={index}>
              <ImageSection src={src} alt={`Image ${index + 7}`} />
            </Col>
          ))}
        </Row>

        <CenteredContainer>
          <Link to={"/"}>
            <button>SHOPPING NOW!</button>
          </Link>
        </CenteredContainer>
        <ContentCenter>
          {data.section2.content}
        </ContentCenter>
      </Section>
      <Section>
        <Row gutter={16}>
          <Col span={12}>
            <TitleLeft>{data.section3.title}</TitleLeft>
            <SubtitleLeft>{data.section3.subtitle}</SubtitleLeft>
            <Content>{data.section3.content}</Content>
          </Col>
          <Col span={12} className="section3">
            <Image src={data.section3.image} alt="Image 11" />
            <Link to={"/"}>
              <button className="buttonSection3">SHOPPING NOW!</button>
            </Link>
          </Col>
        </Row>
      </Section>

      <Section>
        <TitleLeft>{data.section4.title}</TitleLeft>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Content>{data.section4.content}</Content>
          </Col>

          <Col xs={24} sm={12} className="section3">
            <Image src={data.section4.image} alt="Image 1" />
            <Link to={"/"}>
              <button className="buttonSection4">SHOPPING NOW!</button>
            </Link>
          </Col>
        </Row>
      </Section>

      <Section>
        <Title>{data.section5.title}</Title>
        <Subtitle>{data.section5.subtitle}</Subtitle>
        <Row gutter={16}>
          {data.section5.images.map((src, index) => (
            <Col xs={24} sm={12} key={index}>
              <Image src={src} alt={`Image ${index + 2}`} />
            </Col>
          ))}
        </Row>
        <CenteredContainer>
          <Link to={"/"}>
            <button>SHOPPING NOW!</button>
          </Link>
        </CenteredContainer>
      </Section>

      <Section>
        <Title>{data.section6.title}</Title>
        <Subtitle>{data.section6.subtitle}</Subtitle>
        <Row gutter={16}>
          <Col className="section6" xs={24} sm={6}>
            <Link to={"/"}>
              <button className="buttonSection6">SHOPPING NOW!</button>
            </Link>
          </Col>
          <Col xs={24} sm={12}>
            <Image src={data.section6.image} alt="Image 4" />
          </Col>
          <Col xs={24} sm={6} className="section6">
            <Content>{data.section6.content}</Content>
          </Col>
        </Row>
      </Section>
    </Container>
  );
};

export default CollectionInformation;
