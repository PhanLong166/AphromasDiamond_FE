import styled from "styled-components";
import { theme } from "../../../themes";
export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const Banner = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/CollectionComing%2Fbanner.png?alt=media&token=c5bdc235-1543-43a8-a9c1-c2ba5f3e708e");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
  font-weight: bold;
`;

export const SectionTitle = styled.h3`
  text-align: left;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${theme.color.primary};
`;
export const MainTitle = styled.h1`
  text-align: center;
  font-size: 60px;
  font-family: "Great Vibes";
  margin-bottom: 20px;
  font-weight: 400;
  color: ${theme.color.primary};
`;

export const BigTitle = styled.h2`
  text-align: left;
  font-size: 24px;
  color: ${theme.color.primary};
  max-width: 70%;
  margin-bottom: 10px;
`;

export const MainImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Section = styled.div`
  margin: 30px auto;
  .mainImageSection {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
  }

  .number {
    text-align: right;
    padding-top: 1px;
    color: ${theme.color.primary};
  }
`;

export const SectionContent = styled.p`
  text-align: left;
  font-size: 14px;
  width: 50%;
  color: #45413e;
`;
export const RightContent = styled.p`
  text-align: right;
  font-size: 14px;
   color: #45413e;
`;

export const FullImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const DesignImage = styled.img`
  height: 700px;
  width: 100%;
  object-fit: cover;
`;
