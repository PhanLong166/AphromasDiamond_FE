import React from "react";
import { Row, Col } from "antd";
import { collectionsData } from './data';
import {
  Container,
  Paragraph,
  SubTitle,
  Content,
  GiaContent,
  Title,
  FullWidthBanner,
  Heading,
  Sub,
  HeadingSection,
  HeadingInfo,
  Banner,
  TextOverlay,
} from "./AllCollection.styled";
const { banner, bannerData, sections, allSections } = collectionsData;
const AllCollection: React.FC = () => {
  return (
    <>
      {/* Full screen banner */}
      <FullWidthBanner style={{ backgroundImage: `url(${banner.imageUrl})` }}>
        <Heading>
          <Title>{banner.title}</Title>
          {banner.content.map((text, index) => (
            <Content key={index}>{text}</Content>
          ))}
        </Heading>
      </FullWidthBanner>
      <Container>
        <SubTitle>Aphromas Diamond</SubTitle>
        <Sub>Where Elegance Meets Craftsmanship</Sub>

        {/* Row 1 */}
        <Row gutter={[10, 10]} style={{ marginBottom: "40px" }}>
          <Col span={6}></Col>
          <Col span={6}>
            <Paragraph>
              We are dedicated to bringing you the finest diamond jewelry that
              <span>epitomizes elegance, quality, and timeless beauty</span>.
              Our store has built a reputation for excellence, offering a
              curated selection of exquisite pieces that cater to the diverse
              tastes of our discerning clientele. With a <span>commitment</span>{" "}
              to craftsmanship and unparalleled customer service, we strive to
              make every visit a <span>memorable experience</span>.
            </Paragraph>
          </Col>
          <Col span={6}>
            <Paragraph>
              Our vision is to be a{" "}
              <span>beacon of luxury and sophistication</span> in the world of
              diamond jewelry. We aim to{" "}
              <span>celebrate the unique radiance of every woman</span> through
              our meticulously crafted collections, each telling a story of
              beauty and grace. By blending{" "}
              <span>traditional techniques with contemporary design</span>, we
              create pieces that not only reflect the essence of elegance but
              also resonate with the modern sensibilities of our customers. Our{" "}
              <span>mission</span> is to honor and enhance the natural beauty of
              our clients, making them feel special and cherished with every
              piece they wear.
            </Paragraph>
          </Col>
          <Col span={6}></Col>
        </Row>

        {/* Row 2 */}
        {sections.map((item, index) => (
          <Row key={index} gutter={[10, 10]}>
            <Col span={6}></Col>
            <Col span={6}>
              <HeadingSection>{item.title}</HeadingSection>
              <Paragraph dangerouslySetInnerHTML={{ __html: item.content }} />
            </Col>
            <Col span={12}>
              <img
                src={item.imageUrl}
                alt={item.altText}
                style={{ width: "100%", height: "800px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        ))}
      </Container>

      {/* Row 4 */}
      <Banner>
      <HeadingInfo>{bannerData.heading}</HeadingInfo>
      <GiaContent>{bannerData.giaContent}</GiaContent>
      <button>{bannerData.buttonText}</button>
    </Banner>

      <Container >
        <Row style={{margin: "40px 0"}} gutter={[10,10]}>
          <Col span={6}>
            <HeadingInfo>TOWARDS MORE RESPONSIBLE MATERIALS</HeadingInfo>
            <Paragraph>
              We are introducing more responsible materials that meet
              sustainability criteria in order to promote a circular economy,
              move towards a more responsible supply chain and meet the demands
              of our customers. <br />
              We are constantly searching for innovative materials and
              processes, as well as recognized international tools and
              standards, that will allow us to reduce the environmental and
              social impact of our product. We will keep you posted on our
              progress.
            </Paragraph>
          </Col>
          <Col span={18}></Col>
        </Row>

        <Row style={{margin: "40px 0"}} gutter={[10,10]}>
          <Col span={6}>
            <HeadingInfo>RECYCLED METAL</HeadingInfo>
            <Paragraph>
              By using recycled metals we can avoid the use of new raw materials
              as well as reducing the social, ethical and environmental risks
              associated with the mining process. <br />
              Mining is a process that has harmful environmental impacts and can
              contribute to and is associated with significant adverse effects,
              including those related to human rights and other conflicts such
              as the financing of armed groups, abuses by security contractors,
              money laundering, corruption or duty avoidance. <br />
              The recycled metals we use come from refineries which are
              certified by recognized organisms. <br />
              Expand the tab to see a complete list of our approved
              certifications.
            </Paragraph>
          </Col>
          <Col span={18}></Col>
        </Row>

        {/* Row 5 */}
        {allSections.map((item, index) => (
      <Row key={index} gutter={[10, 10]}>
        <Col span={12}>
          <img
            src={item.imageUrl}
            alt={item.altText}
            style={{ width: "100%", height: "800px", objectFit: "cover" }}
          />
        </Col>
        <Col span={6}>
          <TextOverlay>
            <HeadingSection>{item.heading}</HeadingSection>
            <Paragraph dangerouslySetInnerHTML={{ __html: item.paragraph }} />
          </TextOverlay>
        </Col>
        <Col span={6}></Col>
      </Row>
    ))}

        {/* Row 6 */}
        <Row style={{margin: "40px 0"}} gutter={[10,10]}>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6}>
            <HeadingInfo>ONE TEAM, ONE DREAM</HeadingInfo>
            <Paragraph>
              We are cultivating a culture of collaboration and growth in which
              kindness, cooperation, and empathy are among our key values. We
              want to foster the free exchange of ideas and make our employees
              feel supported and empowered, reinforcing our growth mindset with
              concrete policies. <br />
              These policies include work-life balance and wellbeing policies,
              such as the promotion of telework or health insurance for
              employees, and annual training policies adapted to the interests
              and needs of each team member. We are also working on new
              initiatives such as outdoor and indoor activities or PDP Talks,
              where we will invite people who inspire us on a personal and
              professional level to share their experiences in different areas
              of life. <br />
              It is essential for us that all our employees feel comfortable and
              safe in their workspaces, whether in our stores or head office, so
              we have developed our own Code of Conduct that regulates the
              behavior of people and workspaces, ethics in business activities,
              our relationship with third parties and protects the interests of
              the business. Besides, we have also set up an Ethical Channel
              through which our employees may address their queries or report
              breaches covered by our Code of Conduct and Corporate Policies.
              <br /> Yet, we have many areas to improve and many policies to
              define, as we aim to create concrete objectives and measurable
              change. Keep an eye on this space for future updates.
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllCollection;
