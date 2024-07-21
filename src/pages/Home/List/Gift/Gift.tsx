import FAQ from "@/components/FAQs/FAQs";
import { jewelryData } from "./Gift.data";
import {
  Container,
  LeftSection,
  Banner,
  InfoSection,
  Overlay,
  GiftSection,
} from "./Gift.styled";

import { Link, useParams } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const Gift = () => {
 
  const { jewelryType } = useParams<{ jewelryType: string }>();

  if (!jewelryType || !jewelryData[jewelryType]) {
    return <div>Invalid jewelry type selected.</div>;
  }

  const currentJewelryData = jewelryData[jewelryType];

  const faqs = jewelryData[jewelryType]?.faqs || [];

  return (
    <>
      <Container>
        <div>
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: currentJewelryData.title },
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
        <FAQ title={currentJewelryData.title} faqs={faqs} />
      </Container>
    </>
  );
};

export default Gift;
