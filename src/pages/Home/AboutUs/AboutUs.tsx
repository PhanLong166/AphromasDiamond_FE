// About.tsx
import {
  Body,
  ContainerBanner,
  LeftSidebar,
  Main,
  RightSidebar,
  Heading,
  Slogan,
  Article,
  FeaturedImage,
  Paragraph,
  Welcome,
  Team,
  TeamImage,
  TeamImageCo,
  ImageService,
  Service,
  Why,
  Commitment,
  Customer,
  HeadingCustomer,
  CustomersContainer,
  Box,
  Stars,
  CustomerImage,
  Mission,
  Design,
  FullImage,
  Section,
  //  StarIcon
} from "./AboutUs.styled";
import styled from "styled-components";
import { Row, Col, Typography } from "antd";
const { Title, Text } = Typography;
import { Breadcrumb } from "antd";
import {
  LikeOutlined,
  FieldTimeOutlined,
  SettingOutlined,
  BulbOutlined,
  StarFilled,
} from "@ant-design/icons";
const CustomBreadcrumb = styled(Breadcrumb)`
  margin-left: 175px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const About = () => {
  return (
    <Body>
      <div>
        <CustomBreadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "About Us",
            },
          ]}
        />
      </div>
      <ContainerBanner>
        <LeftSidebar>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Faboutright.jpg?alt=media&token=3e30b0bc-bf84-4f04-b9b2-f3307d6fdae0"
            alt="picture of a person"
          />
        </LeftSidebar>
        <Main>
          <Heading>
            Aphromas Diamond <Slogan>Slogan</Slogan>
          </Heading>
          <Article>
            <FeaturedImage
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Fmainabout.jpg?alt=media&token=d0503044-6f7d-4b41-881f-290059c1710f"
              alt="Article's featured image"
            />
            <Paragraph>
              Aphromas Diamond, a premier diamond store, was founded in 1975 in
              New York City by three visionaries: Richard Morgan, Isabella
              Rossi, and Ahmed Khan. Richard, a renowned gemologist from London,
              Isabella, an artistic jewelry designer from Italy, and Ahmed, a
              strategic businessman from Dubai, combined their expertise to
              create a brand synonymous with quality and elegance.
            </Paragraph>
            <Paragraph>
              In 1975, the trio launched Aphromas Diamond in New York's Diamond
              District, naming it after Aphrodite, the Greek goddess of love and
              beauty. Their mission was to offer unmatched quality and
              craftsmanship with a personal touch. Their commitment to
              excellence quickly earned them a reputation for exquisite diamond
              collections and bespoke jewelry.
            </Paragraph>
            <Paragraph>
              Throughout the 1980s and 1990s, Aphromas Diamond expanded to Los
              Angeles, Paris, and Dubai. They emphasized ethical sourcing,
              ensuring all diamonds were conflict-free. Their dedication to
              quality and innovation solidified their global presence.
            </Paragraph>
            <Paragraph>
              Today, Aphromas Diamond is a globally recognized brand, led by the
              second generation. They have embraced technology with an
              e-commerce platform, maintaining the founders' vision of
              exceptional quality and personalized service. The store offers a
              diverse range of jewelry, from classic to contemporary designs.
            </Paragraph>
            <Paragraph>
              The founders' passion and commitment to excellence transformed
              Aphromas Diamond into a global leader. As the company looks to the
              future, it remains dedicated to innovation and ethical practices,
              ensuring its legacy of beauty and brilliance continues for
              generations.
            </Paragraph>
          </Article>
        </Main>
        <RightSidebar>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Faboutleft.jpg?alt=media&token=0c015220-324f-4e6d-ac3d-5ebb74a3bb16"
            alt="tall cover photo"
          />
        </RightSidebar>
      </ContainerBanner>
      <Welcome>
        <div className="container">
          <Row>
            <Col span={24}>
              <div className="section_title_all">
                <Title level={2} className="title">
                  WELCOME TO APHROMAS DIAMOND
                </Title>
                <Text className="section_subtitle">
                  Where timeless elegance meets exceptional craftsmanship.
                  <br />
                  Discover the brilliance of our exquisite diamond collections
                  and bespoke jewelry designs.
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </Welcome>
      <Team>
        <div className="container">
          <div className="section_title_team">
            <Title level={2} className="title_team">
              OUR COLLABORATOR
            </Title>
            <Text className="subtitle_team">
              We proudly partner with esteemed designers and brands to bring you
              the finest in jewelry design. <br />
              These collaborations ensure a diverse range of exquisite and
              unique pieces for every special moment.
            </Text>
          </div>

          <Row gutter={[16, 16]}>
            <Col md={8} sm={24}>
              <div className="team">
                <div className="team-image">
                  <TeamImageCo>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Fbluenile11.jpg?alt=media&token=cf50fba2-1569-4c20-b847-c1c70c8778b3"
                      className="img-circle img-responsive"
                    />
                  </TeamImageCo>
                </div>
                <div className="team-content">
                  <Title level={5} className="team-name">
                    Blue Nile Studio
                  </Title>
                  <div className="team-role">Collaborating Designers</div>
                  <div className="team-description"></div>
                </div>
              </div>
            </Col>
            <Col md={8} sm={24}>
              <div className="team">
                <div className="team-image">
                  <TeamImageCo>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2F824b209a5388b17f93a7b5fc46fac847.jpg?alt=media&token=3bb76016-43fa-463a-bd91-f62fb30eef29"
                      className="img-circle img-responsive"
                    />
                  </TeamImageCo>
                </div>
                <div className="team-content">
                  <Title level={5} className="team-name">
                    Zac Zac Posen
                  </Title>
                  <div className="team-role">Collaborating Designers</div>
                  <div className="team-description"></div>
                </div>
              </div>
            </Col>
            <Col md={8} sm={24}>
              <div className="team">
                <div className="team-image">
                  <TeamImageCo>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2FBV2_jpg_1200x1200.webp?alt=media&token=1a1dba29-b473-4bc7-a5a1-4c4477ba86fb"
                      className="img-circle img-responsive"
                    />
                  </TeamImageCo>
                </div>
                <div className="team-content">
                  <Title level={5} className="team-name">
                    Bella Vaughan
                  </Title>
                  <div className="team-role">Collaborating Designers</div>
                  <div className="team-description"></div>
                </div>
              </div>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col md={4} sm={8} xs={12}>
              <div className="team">
                <div className="team-image">
                  <TeamImage>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Felegant-logo-bvlgari-kristina-bailey.jpg?alt=media&token=1a91a391-21af-4168-8404-2d7d1c8240f3"
                      className="img-circle img-responsive"
                    />
                  </TeamImage>
                </div>
                <div className="team-content">
                  <Title level={5} className="team-name">
                    Bvlgari
                  </Title>
                  <div className="team-role">Collaborating Brands</div>
                  <div className="team-description"></div>
                </div>
              </div>
            </Col>
            <Col md={4} sm={8} xs={12}>
              <div className="team">
                <div className="team-image">
                  <TeamImage>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/NewAbout%2F520c04e6-d8e6-4e88-aee3-2ef6bead9bb7.jpg?alt=media&token=47e4efbd-8b60-444a-a405-80dc996c16a3"
                      className="img-circle img-responsive"
                    />
                  </TeamImage>
                </div>
                <div className="team-content">
                  <Title level={5} className="team-name">
                    Tiffany & Co.
                  </Title>
                  <div className="team-role">Collaborating Brands</div>
                  <div className="team-description"></div>
                </div>
              </div>
            </Col>
            <Col md={4} sm={8} xs={12}>
              <div className="team">
                <div className="team-image">
                  <TeamImage>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/NewAbout%2F76d08f93-676a-488d-babd-57880b61b5ac.jpg?alt=media&token=7ccb8f23-c653-432a-b829-b1eca1125a38"
                      className="img-circle img-responsive"
                    />
                  </TeamImage>
                </div>
                <div className="team-content">
                  <Title level={5} className="team-name">
                    Harry Winston
                  </Title>
                  <div className="team-role">Collaborating Brands</div>
                  <div className="team-description"></div>
                </div>
              </div>
            </Col>
            <Col md={4} sm={8} xs={12}>
              <div className="team">
                <div className="team-image">
                  <TeamImage>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/NewAbout%2Fbc265a25-37c3-4431-8791-370ae36ddc7f.jpg?alt=media&token=57e1e86c-5437-48b2-b7e6-8050a9a60d92"
                      className="img-circle img-responsive"
                    />
                  </TeamImage>
                </div>
                <div className="team-content">
                  <Title level={5} className="team-name">
                    Cartier
                  </Title>
                  <div className="team-role">Collaborating Brands</div>
                  <div className="team-description"></div>
                </div>
              </div>
            </Col>
            <Col md={4} sm={8} xs={12}>
              <div className="team">
                <div className="team-image">
                  <TeamImage>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2FVC.jpg?alt=media&token=bb351a0c-b218-46d4-9e60-336ced2aeaa6"
                      className="img-circle img-responsive"
                    />
                  </TeamImage>
                </div>
                <div className="team-content">
                  <Title level={5} className="team-name">
                    Van Cleef & Arpels
                  </Title>
                  <div className="team-role">Collaborating Brands</div>
                  <div className="team-description"></div>
                </div>
              </div>
            </Col>
            <Col md={4} sm={8} xs={12}>
              <div className="team">
                <div className="team-image">
                  <TeamImage>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2FCho.jpg?alt=media&token=12c44512-c008-4d26-8a24-cfa707d40376"
                      className="img-circle img-responsive"
                    />
                  </TeamImage>
                </div>
                <div className="team-content">
                  <Title level={5} className="team-name">
                    Chopard
                  </Title>
                  <div className="team-role">Collaborating Brands</div>
                  <div className="team-description"></div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Team>
      <Mission>
        <div className="app-container">
          <div className="title-container">
            <Title level={2} className="title">
              SEEKING ARDENTLY
            </Title>
            <Title level={5} className="subtitle">
              ON CREATIVITY
            </Title>
          </div>

          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2FWE_ARE_005_01_1024x1024.webp?alt=media&token=d94e1fb3-e1af-46ca-954f-f0e5ff68635c"
              alt="Slide 1"
            />
          </div>

          <div className="description-container">
            <Title level={5} className="subtitle">
              OUR MISSION
            </Title>
            <Text className="description">
              CREATIVITY BUILDS INVISIBLE BRIDGES: IT CONNECTS COUNTRIES,
              CULTURES AND SUBCULTURES AND IT CONNECTS US WITH OURSELVES AND
              OTHERS. CREATIVITY MEANS EXPLORATION: IT UNBLOCKS OLD PATTERNS AND
              WAYS OF THINKING AND IT MAKES US SEE THE WORLD WITH FRESH EYES.
            </Text>
          </div>
        </div>
      </Mission>
      <Service>
        <div className="serviceSession">
          <Row gutter={[16, 16]} justify="center" align="middle">
            <Col lg={12}>
              <div className="service-content">
                <h2 className="service-title">OUR SERVICE</h2>
                <Title className="title-little" level={2}>
                  Exceptional Service at Aphromas Diamond
                </Title>
                <p>
                  At Aphromas Diamond, we deliver unparalleled service and
                  personalized attention. Our expert team guides you through
                  every step of your jewelry journey to find the perfect piece
                  that tells your unique story.{" "}
                </p>
                <br />
                <p>
                  From bespoke designs to comprehensive aftercare, we are
                  committed to exceeding your expectations and ensuring an
                  exceptional experience.
                </p>
                <br />
              </div>
            </Col>
            <Col lg={12}>
              <div>
                <ImageService>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2FScreenshot%202024-06-09%20204604.png?alt=media&token=033d4756-31cd-46e3-87c2-f0d66f43b8a2"
                    className="img-circle img-responsive"
                  />
                </ImageService>
              </div>
            </Col>
          </Row>
        </div>
      </Service>

      <Why>
        <div className="container">
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <div className="section-head">
                <Title level={2}>WHY CHOOSE US?</Title>
                <p>
                  When you choose Aphromas Diamond, you choose elegance,
                  excellence, and a timeless symbol of beauty.
                </p>
              </div>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <div className="item">
                <span className="icon feature_box_col_one">
                  <LikeOutlined />
                </span>
                <Title level={5}>Unmatched Quality</Title>
                <p>
                  If our customer has any problem and any query we are always
                  happy to help then.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <div className="item">
                <span className="icon feature_box_col_two">
                  <FieldTimeOutlined />
                </span>
                <Title level={5}>Timeless Elegance</Title>
                <p>
                  If our customer has any problem and any query we are always
                  happy to help then.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <div className="item">
                <span className="icon feature_box_col_three">
                  <SettingOutlined />
                </span>
                <Title level={5}>Personalized Service</Title>
                <p>
                  If our customer has any problem and any query we are always
                  happy to help then.
                </p>
              </div>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <div className="item">
                <span className="icon feature_box_col_five">
                  <BulbOutlined />
                </span>
                <Title level={5}>Expertise and Knowledge</Title>
                <p>
                  If our customer has any problem and any query we are always
                  happy to help then.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Why>
      <Design>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <Row gutter={[8, 8]}>
            <Col span={6}>
              <h2>DESIGN</h2>
            </Col>
            <Col span={6}>
              <div style={{ textAlign: "left" }}>
                <div style={{ marginBottom: "8px" }}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2FWE_ARE_008_1024x1024.webp?alt=media&token=0d4d1185-ed5e-4930-bee5-83cb7af43cc3"
                    alt="Design Process"
                    style={{ width: "320px", height: "460px" }}
                  />
                </div>
                <div style={{ padding: "10px 16px" }}>
                  <strong>FROM DRAWING TO REALITY</strong>

                  <p style={{ marginBottom: "1em", marginTop: "1em" }}>
                    The creative process starts at our atelier in Barcelona,
                    where our specialized creative team works in every design
                    with absolute demand and carefulness, from the first sketch
                    to the material selection and the development of the final
                    samples of every jewel.
                  </p>
                  <p>
                    {" "}
                    The manufacturing of our pieces combines an attentive
                    handcraft expertise with the latest technology, which is
                    applied in different stages until reaching the final jewelry
                    piece
                  </p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div style={{ textAlign: "left" }}>
                <div style={{ marginBottom: "8px" }}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2FWE_ARE_009_1024x1024.webp?alt=media&token=1d5f341d-2cda-445c-be9c-b159c0206f12"
                    alt="Digital Process"
                    style={{ width: "320px", height: "460px" }}
                  />
                </div>
                <div style={{ padding: "10px 16px" }}>
                  <strong>DIGITAL TRIDIMENSIONAL PROCESS</strong>
                  <p style={{ marginBottom: "1em", marginTop: "1em" }}>
                    From the final hand-drawn sketches of every piece, the
                    digital design team generates a 3D model with the support of
                    specialized software. Is at that stage where we set the
                    final details and technical features of the jewel.
                  </p>
                  <p style={{ marginBottom: "1em" }}>
                    <strong>MOLDING:</strong> In order to materialize the piece,
                    we start printing every part of the jewel with high
                    precision 3D printers, with wax as the base material.
                    Afterwards, the negative of this impression is set in
                    silicon, becoming the prime design mould. We refill this
                    mould with wax in order to replicate the piece and we
                    replicate this step as many times as the number of pieces we
                    plan to produce.
                  </p>
                  <p style={{ marginBottom: "1em" }}>
                    <strong>CARVING:</strong> Once silver is finally solidified,
                    the cast is carefully removed. Then we carve the tree pieces
                    with a pressurized water jet. We hand polish every piece for
                    the first time to get solid silver bodies. This is a unique
                    moment: a jewel fragment is born.
                  </p>
                  <p style={{ marginBottom: "1em" }}>
                    <strong>POLISHING AND PLATING:</strong> When the raw silver
                    pieces are ready, we start the polishing stage divided into
                    three phases: First of all, we generally use wet slate
                    slices to remove big surface imperfections. Secondly, we
                    remove the possible scratches generated by the slate with
                    linen and cotton wheels. To conclude the polish phase, we
                    use a wet brush for the final finishing. If the design
                    requires it, we plate the piece in 18 karat gold and we let
                    it dry.
                  </p>
                  <p>
                    <strong>QUALITY CONTROL:</strong> Once all the pieces of the
                    production are finished, the quality department performs an
                    exhaustive piece by piece visual and tactile control, as
                    well as a use test with a sample of each production which is
                    then melted again to reuse the material. Finally, we insert
                    each jewel in an airtight bag that protects it during
                    storage.
                  </p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div style={{ textAlign: "left" }}>
                <div style={{ marginBottom: "8px" }}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2FWE_ARE_010_1024x1024.webp?alt=media&token=43dedeba-6a49-4a70-9e49-450b04840a58"
                    alt="Details"
                    style={{ width: "320px", height: "460px" }}
                  />
                </div>
                <div style={{ padding: "10px 16px" }}>
                  <strong>BEAUTY LIES IN DETAILS</strong>
                  <p style={{ marginBottom: "1em", marginTop: "1em" }}>
                    Commitment to quality is a fundamental pillar in each
                    PDPAOLA jewel. We produce our collection with 925 sterling
                    silver, 18 karat gold, brass, semi-precious stones and
                    zirconias. In addition of going through strict quality
                    controls and being carefully selected, these materials make
                    each piece genuine and unique.
                  </p>
                  <p>
                    Our workshops are comprised with a great team of craftsmen
                    that ally with avant-garde technology, bringing an
                    exceptional finishing to every jewel. The expertise of the
                    hand-finished details and the high precision of the tools in
                    our facilities allow us to create every piece with the
                    highest level of demand.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Design>
      <Commitment>
        <div className="container">
          <Row>
            <Col span={24}>
              <div className="section_title_all">
                <Title level={2} className="title">
                  OUR COMMITMENT
                </Title>
                <Text className="section_subtitle">
                  Our commitment at Aphromas Diamond extends beyond providing
                  exquisite diamond jewelry; it's a promise to uphold the
                  highest standards of quality, integrity, and customer
                  satisfaction. We are dedicated to exceeding expectations,
                  ensuring ethical practices, and creating lasting relationships
                  with our clients. With every piece we offer and every
                  interaction we have, our commitment remains unwavering,
                  ensuring that your experience with us is nothing short of
                  exceptional.
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </Commitment>

      <Customer>
        <HeadingCustomer>
          <h2>WHAT OUR CUSTOMERS SAY</h2>
        </HeadingCustomer>
        <CustomersContainer>
          <Box>
            <Stars>
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
            </Stars>
            <p>
              Aphromas Diamond is my go-to choice when it comes to high-quality
              diamond jewelry. Every purchase I've made here has exceeded my
              expectations in terms of craftsmanship and aesthetics. The staff
              is always very dedicated and professional in their consultations.
              Highly satisfied!
            </p>
            <h3>Michael Smith</h3>
            <CustomerImage src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-11.png?alt=media&token=76911c67-040f-4b86-b209-55ddce2be455" />
          </Box>
          <Box>
            <Stars>
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
            </Stars>
            <p>
              I bought a diamond necklace from Aphromas Diamond as an
              anniversary gift for my wife. She absolutely loves it and keeps
              saying how exquisite the design is, and how brilliant and
              luxurious the diamond looks. The product truly lives up to its
              value, and the service at the store was very professional.
            </p>
            <h3>Olivia Williams</h3>
            <CustomerImage src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-10.png?alt=media&token=7c0018d5-1cca-41a5-9b00-ff644956287e" />
          </Box>
          <Box>
            <Stars>
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
              <StarFilled style={{ color: "#D8A25A" }} />
            </Stars>
            <p>
              I recently purchased a diamond ring from Aphromas Diamond and
              couldn't be happier! The quality of the diamond is absolutely
              stunning, sparkling more than I expected. The customer service was
              also exceptional and very attentive, making me feel very confident
              in my purchase.
            </p>
            <h3>Emily Johnson</h3>
            <CustomerImage src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-1.png?alt=media&token=dfa45487-04c0-490d-9b0c-8dc7f5e6b7c5" />
          </Box>
        </CustomersContainer>
      </Customer>
      <Section>
        <Row>
          <Col span={12}>
            <FullImage
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionComing%2Fend_1.jpg?alt=media&token=77d2bc32-b903-4371-a1f5-5b103579e474"
              alt="Image 3"
              style={{ height: "96%" }}
            />
          </Col>
          <Col span={12}>
            <FullImage src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionComing%2Fend_2.jpg?alt=media&token=6c48a9e2-1b66-44ae-9666-ca846ed50c6e" alt="Image 4" />
          </Col>
        </Row>
      </Section>
    </Body>
  );
};

export default About;
