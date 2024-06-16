import * as React from "react";
import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
}

const imagesData = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FbanerRingGuide0.png?alt=media&token=a27ceaf0-5a7a-4248-bc46-dbe0b4917365",
    alt: "Image 1"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FbannerRingGuide1.png?alt=media&token=153af4e8-a9f3-4d71-a5c5-6032488bfa08",
    alt: "Image 2"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FimgRingChart.png?alt=media&token=cac7b874-bb88-4e40-a4fc-fd105887fb6c",
    alt: "Image 3"
  }
];

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <Img loading="lazy" src={src} alt={alt} />;
};

const RingGuide: React.FC = () => {
  return (
    <>
      <MainSection>
        <ImageSection>
          <ImageContainer>
            <Column>
              <Image src={imagesData[0].src} alt={imagesData[0].alt} />
            </Column>
            <Column>
              <Image src={imagesData[1].src} alt={imagesData[1].alt} />
            </Column>
          </ImageContainer>
        </ImageSection>

        <ContentSection>
          <Title>Using Our Free Ring Sizer</Title>
          <Paragraph>
            Our free plastic ring sizer makes determining ring size a breeze.
            Simply slide your finger into the sizer until you find a size that
            feels right. We recommend trying a half size up and half size down
            as well to find your precise fit. The right size should be snug
            enough so the plastic ring won't fall off but loose enough to slide
            over the knuckle.
          </Paragraph>

          <Title>Measuring Ring Size With Our Printable Ring Size Chart</Title>
          <Paragraph>
            If you're looking to measure a ring size in a hurry, our printable
            ring sizer is the perfect tool to help. Simply print out the guide
            and place a ring the wearer already owns over the circles, matching
            the inside of the ring to the circle nearest in size. If the ring is
            between two circle sizes, choose the larger size. <br />
            <br /> Our printable ring size guide also includes a ring size chart
            with precise diameter measurements and their corresponding ring
            sizes along with international ring sizes. With our online ring
            sizer, you'll quickly find out the right size. <br />
            <br /> Refer to our free printable guide to see the US ring size
            chart along with charts for men’s and women’s ring sizing in Europe,
            the UK, Japan, Hong Kong and Switzerland. With a quick printable
            ring size chart for the most popular sizing systems, it’s easy to
            find the perfect fit from our wide selection of high-quality rings.
          </Paragraph>

          <Title>Average Ring Sizes for Women and Men</Title>
          <DetailsSection>
            <TextColumn>
              <Paragraph>
                The average ring size for women ranges from size 3 to size 9.
                The most purchased women's rings range between size 5 and size
                7. Size 6 is the most popular. The average ring size for men
                ranges from size 6 to size 13. The most purchased men's rings
                range between size 8 to 10-½. Size 9 is the most popular. <br />
                <br /> These standard ring sizes can help guide you in the right
                direction. If you do not see the size you need, contact our
                experts for help placing a special order. There are also a
                number of at-home methods to find your ring size.
              </Paragraph>
            </TextColumn>
            <ImageColumn>
              <Image src={imagesData[2].src} alt={imagesData[2].alt} />
            </ImageColumn>
          </DetailsSection>

          <Title>Measure Your Ring Size With These Steps:</Title>
          <UnorderedList>
            <li>1. Wrap string or paper around the base of your finger.</li>
            <li>2. Mark the point where the ends meet with a pen.</li>
            <li>
              3. Measure the string or paper with a ruler (mm) then divide by 3.14
              (or Pi) to get the diameter of the ring.
            </li>
            <li>
              4. Pick the closest measurement on the ring size chart to find your
              ring size.
            </li>
          </UnorderedList>

          <Title>More Ring Sizing Tips</Title>
          <UnorderedList>
            <li>
              1. Measure the inside of another ring that fits using a tape measure
              and our printable ring sizer.
            </li>
            <li>
              2. The ring should fit your finger comfortably: snug enough so it won't
              3. fall off, but loose enough to slide over your knuckle with relative
              ease.
            </li>
            <li>
              4. When the knuckle is bigger than the base of the finger, measure both
              places and pick a size in between the two.
            </li>
            <li>
              5. Measure your ring size at the end of the day when your fingers are
              warm. Finger size changes depending on the time of day and the
              weather, and your fingers are actually smaller in the early morning
              and in cold weather. Also, keep in mind that fingers on your dominant
              hand are usually larger.
            </li>
            <li>
              6. Measure 3 to 4 times for more accuracy.
            </li>
          </UnorderedList>
        </ContentSection>
      </MainSection>
    </>
  );
};

export default RingGuide;

const MainSection = styled.main`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 80px 0;
`;

const ImageSection = styled.section`
  gap: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-bottom: 1px solid #bbb4b4;
  border-top: 1px solid #bbb4b4;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContentSection = styled.section`
  display: flex;
  margin-top: 48px;
  width: 100%;
  flex-direction: column;
  padding: 0 59px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  color: #000;
  font: 400 36px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Paragraph = styled.p`
  color: #000;
  margin: 15px 0 15px 0;
  font: 400 24px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const UnorderedList = styled.ul`
  color: #000;
  margin-top: 25px;
  font: 400 24px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  li {
    margin-bottom: 10px;
    list-style: none;
  }
`;

const DetailsSection = styled.section`
  /* align-self: center; */
  margin-top: 9px;
  width: 100%;
  max-width: 1210px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const TextColumn = styled.article`
  display: flex;
  flex-direction: column;
  width: 61%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 39%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  /* gap: 20px; */
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;
