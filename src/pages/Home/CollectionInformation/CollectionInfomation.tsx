import React from "react";
import { Row, Col, Button } from "antd";
import {
  Container,
  Section,
  Title,
  Subtitle,
  Content,
  Image,
  MainImage,
  MainTitle,
} from "./CollectionInformation.styled";

const CollectionInformation: React.FC = () => {
  return (
    <Container>
      <MainTitle>Valentine's Day !</MainTitle>
      <Row gutter={[10, 10]}>
        <Col span={4}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2FWE_ARE_010_1024x1024.webp?alt=media&token=48a5c376-30a5-46d5-bc5d-7a5b009da3c8"
            alt="Image 1"
            style={{ height: "225px", width: "100%", objectFit: "cover" }}
          />
        </Col>
        <Col span={4}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2FWE_ARE_001_04_1024x1024.webp?alt=media&token=0c72f78d-04bd-4b56-bf5f-7c25432f1d10"
            alt="Image 2"
            style={{ height: "225px", width: "100%", objectFit: "cover" }}
          />
        </Col>
        <Col span={4}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fp11_1.webp?alt=media&token=422889c5-8e23-40b8-ba34-8448b7a8194d"
            alt="Image 3"
            style={{ height: "225px", width: "100%", objectFit: "cover" }}
          />
        </Col>
        <Col span={4}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fp16_2.webp?alt=media&token=0d0a5fd0-23c6-4374-991e-f50224016025"
            alt="Image 4"
            style={{ height: "225px", width: "100%", objectFit: "cover" }}
          />
        </Col>
        <Col span={4}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2FWE_ARE_001_03_1024x1024.webp?alt=media&token=24b0c2ee-b058-4b8f-90aa-37343ea06baa"
            alt="Image 5"
            style={{ height: "225px", width: "100%", objectFit: "cover" }}
          />
        </Col>
        <Col span={4}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fp1_1.webp?alt=media&token=53c1ded4-49cf-4d35-a99b-76e51095085d"
            alt="Image 6"
            style={{ height: "225px", width: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>

      {/* Section 1: UNCONDITIONAL LOVE */}
      <Section>
        <Title>UNCONDITIONAL LOVE</Title>
        <Subtitle>ABOUT FAMILY, ABOUT LOVE</Subtitle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <MainImage
            src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fcollection1.webp?alt=media&token=c3e8aa8d-0b4d-4b6e-ae95-01db41d3743e"
            alt="Main Image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <Content>
          Unconditional love unconditional love unconditional love a safety net
          or place where we can be our true self and be liked for who we are.
          family is not just a common blood, but a common commitment to
          something greater. couple love is made of the people who we decide to
          spend our time and energy to and most importantly: our love.
        </Content>
      </Section>

      {/* Section 2: Celebrate Love & Empowerment */}
      <Section>
        <Title>Celebrate Love & Empowerment</Title>
        <Subtitle>
          The Perfect Gift to Honor Self-Love and Independence
        </Subtitle>
        <Row>
          <Col span={6}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fp65_2.webp?alt=media&token=5bfc9e20-cdd0-4b18-9dcc-bab9fe6120dc"
              alt="Image 7"
              style={{ height: "300px", objectFit: "cover", width: "100%" }}
            />
          </Col>
          <Col span={6}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fp64_2.webp?alt=media&token=0b0e74ed-60e1-492f-97af-3ae559424eaa"
              alt="Image 8"
              style={{ height: "300px", objectFit: "cover", width: "100%" }}
            />
          </Col>
          <Col span={6}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fp37_2.webp?alt=media&token=0eb06eea-a22d-42b5-ab2d-4489379fc255"
              alt="Image 9"
              style={{ height: "300px", objectFit: "cover", width: "100%" }}
            />
          </Col>
          <Col span={6}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fp11_2.webp?alt=media&token=56e142d8-d603-41bb-9a69-f4685b09cf1d"
              alt="Image 10"
              style={{ height: "300px", objectFit: "cover", width: "100%" }}
            />
          </Col>
        </Row>

        <Button type="primary">SHOP NOW</Button>
        <Content>
          Our special Valentine’s Day collection offers more than just beautiful
          jewelry; it’s a commitment to supporting women’s initiatives
          worldwide. By choosing our pieces, you celebrate self-love,
          confidence, and independence. Each item is designed to empower and
          inspire.
        </Content>
      </Section>

      {/* Section 3: Sparkle with Purpose */}
      <Section>
        <Row gutter={16}>
          <Col span={12}>
            <Title>Sparkle with Purpose</Title>
            <Subtitle>
              Perfect Gift to Honor Self-Love and Independence
            </Subtitle>
            <Content>
              Our Valentine’s Day collection features exquisite items that
              symbolize more than love. Every piece is a testament to the
              strength and confidence of women everywhere. Celebrate your loved
              ones with gifts that carry a powerful message of empowerment.
            </Content>
          </Col>
          <Col span={12} style={{ position: "relative" }}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fp46_2.webp?alt=media&token=12387194-7208-424a-8a99-63d4b0846d42"
              alt="Image 11"
              style={{ width: "100%", height: "700px" }}
            />
            <Button
              type="primary"
              style={{
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1, // Set a higher zIndex to ensure the button is above the image
              }}
            >
              SHOP NOW
            </Button>
          </Col>
        </Row>
      </Section>
      {/* Section: Timeless Elegance for Modern Women */}
      <Section>
        <Title>Timeless Elegance for Modern Women</Title>
        <Row gutter={16}>
          {/* Column 1 */}
          <Col xs={24} sm={12}>
            <Content>
              Discover the perfect blend of elegance and empowerment with our
              Valentine’s Day collection. Our designs are crafted to inspire
              modern women to embrace their strength and beauty. Each piece is a
              celebration of love and independence.
            </Content>
          </Col>
          {/* Column 2 */}
          <Col xs={24} sm={12} style={{ position: "relative" }}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fp50_2.webp?alt=media&token=5843ab99-f89c-4e91-ad4b-f9d66b136311"
              alt="Image 1"
              style={{ width: "100%", height: "700px" }}
            />
            <Button
              type="primary"
              style={{
                position: "absolute",
                bottom: "4px",
                left: "-106px",
                zIndex: 1, // Set a higher zIndex to ensure the button is above the image
              }}
            >
              SHOP NOW
            </Button>
          </Col>
        </Row>
      </Section>

      {/* Section: Gifts that Give Back */}
      <Section>
        <Title>Gifts that Give Back</Title>
        <Subtitle>A Symbol of Love and Equality</Subtitle>
        <Row gutter={16}>
          {/* Column 1 */}
          <Col xs={24} sm={12}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fp45_1.webp?alt=media&token=05e54227-0e46-484a-b431-9dd55f3c9690"
              alt="Image 2"
              style={{ width: "100%", height: "700px" }}
            />
          </Col>
          {/* Column 2 */}
          <Col xs={24} sm={12}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2Fp45_2.webp?alt=media&token=84c2aab7-c966-4099-bbec-5959f83f55fe"
              alt="Image 3"
              style={{ width: "100%", height: "700px" }}
            />
          </Col>
        </Row>
        <Button type="primary">SHOP NOW</Button>
      </Section>

      {/* Section: Love Beyond Boundaries */}
      <Section>
        <Title>Love Beyond Boundaries</Title>
        <Subtitle>Celebrate the Power of Women</Subtitle>
        <Row gutter={16}>
          {/* Column 1 */}
          <Col
            xs={24}
            sm={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Button type="primary">SHOP NOW</Button>
          </Col>
          {/* Column 2 */}
          <Col xs={24} sm={12}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionInformation%2FScreenshot%202024-06-19%20173204.png?alt=media&token=42bf69c0-8171-45ee-a334-2b07ded3df82"
              alt="Image 4"
              style={{ width: "100%", height: "700px" }}
            />
          </Col>
          {/* Column 3 */}
          <Col
            xs={24}
            sm={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Content>
              Our Valentine’s Day collection transcends the ordinary,
              celebrating the power and resilience of women everywhere. Each
              piece is a tribute to self-love, confidence, and independence.
              Choose a gift that not only expresses love but also supports the
              empowerment of women and girls globally.
            </Content>
          </Col>
        </Row>
      </Section>
    </Container>
  );
};

export default CollectionInformation;
