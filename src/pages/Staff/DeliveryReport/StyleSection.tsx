import React from 'react';
import styled from 'styled-components';

interface CardProps {
    imageSrc: string;
    altText: string;
    status: string;
    count: number;
}



const StatusCard: React.FC<CardProps> = ({ imageSrc, altText, status, count }) => (
  <Article>
    <Image loading="lazy" src={imageSrc} alt={altText} className="status-card__image" />
    <Content className="status-card__content">
      <Status className="status-card__status">{status}</Status>
      <Count className="status-card__count">{count}</Count>
    </Content>
  </Article>
);

export default StatusCard;

const Article = styled.article`
  background-color: #151542;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  color: #000;
  font-weight: 500;
  width: 100%;
  padding-top: 35px;
  padding-bottom: 35px;
  padding-left: 35px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Image = styled.img`
  object-fit: auto;
  object-position: center;
  width: 115px;
  idth: 115px;
    height: 100px;
  max-width: 100%;
`;

const Content = styled.div`
color: #fff;
display: flex;
flex-direction: column;
padding-left: 21px;
//   gap: 20px;
`;

const Status = styled.div`
  font: 16px 'Inter', sans-serif;
`;

const Count = styled.div`
  margin-top: 19px;
  font: 20px 'Inter', sans-serif;
`;