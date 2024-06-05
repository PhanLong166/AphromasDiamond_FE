import * as React from "react";
import styled from "styled-components";

interface CardProps {
    imageSrc: string;
    altText: string;
    status: string;
    count: number;
}

const StatusCard: React.FC<CardProps> = ({ imageSrc, altText, status, count }) => (
    <StyledStatusCard
        <img className="status-card__image" loading="lazy" src={imageSrc} alt={altText} />
        <div className="status-card__content">
            <div className="status-card__status">{status}</div>
            <div className="status-card__count">{count}</div>
        </div>
    />
);

const StatusSection: React.FC = () => {
    const cardData = [
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b75f6f0d3363ce4a7b3e9dbc296ef752d1c122349f767147a7f17d402c908c08?apiKey=5672b1354002436f9bda9e8bc0a69a3b&", altText: "On Going Image", status: "On Going", count: 100 },
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b764a5e4b874a61af2290b1bdfb163080db0521b5a66de1be90406e85a07be9f?apiKey=5672b1354002436f9bda9e8bc0a69a3b&", altText: "Shipped Image", status: "Shipped", count: 50 },
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b958fc840baadcbb2b032d09bc8ff3ecca7747732b7cf5bf3a1a839cd737d6f?apiKey=5672b1354002436f9bda9e8bc0a69a3b&", altText: "Completed Image", status: "Completed", count: 75 },
    ];

    return (
        <MainContainer>
            <Section>
                {cardData.map((card, index) => (
                    <StatusCard
                        key={index}
                        imageSrc={card.imageSrc}
                        altText={card.altText}
                        status={card.status}
                        count={card.count}
                    />
                ))}
            </Section>
        </MainContainer>
    );
};

const MainContainer = styled.div`
  max-width: 936px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Section = styled.section`
  display: flex;
  gap: 20px;
  gap: 140px;
  padding-top: 3rem;
  

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const StyledStatusCard = styled(StatusCard)`
  background-color: #eadbc8;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #000;
  font-weight: 500;
  width: 100%;
  margin-top: 40px;
  padding: 43px 44px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }

  &__image {
    object-fit: auto;
    object-position: center;
    width: 100px;
    max-width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__status {
    font: 16px "Inter", sans-serif;
  }

  &__count {
    margin-top: 19px;
    font: 20px "Inter", sans-serif;
  }
`;

export default StatusSection;