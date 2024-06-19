import styled from "styled-components";
import { theme } from "../../../themes";
export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const FullWidthBanner = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/AllCollection%2Fbanner1.jpeg?alt=media&token=177c113c-d558-45fd-8cb2-e9485eb8062d");
  background-size: cover;
  background-position: left center;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
 padding-left: 40px;
`;

export const Banner = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/AllCollection%2Fbanner2.jpeg?alt=media&token=98299e08-7693-4b06-b006-d7da70b8ee89");
  background-size: cover;
  background-position: left center;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  button {
    font-size: 12px;
    padding: 10px 20px;
    background-color: #ebebeb;
    color: ${theme.color.primary};
    border: none;
    border: 1px solid ${theme.color.primary};
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    transition: all 0.45s ease;
    align-self: flex-start;
    margin-top: 20px;
    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
      transition: all 0.45s ease;
    }
  }
`;

export const Title = styled.h1`
  font-size: 66px;
  color: ${theme.color.white};
  font-family: "Great Vibes";
  font-weight: 400;
`;

export const Heading = styled.div`
  max-width: 600px;
`;

export const Content = styled.p`
  font-size: 16px;
  color: #45413e;
  padding-top: 20px;
  font-weight: 300;
  span {
    color: ${theme.color.primary};
    font-weight: 500;
  }
`;

export const GiaContent = styled.p`
  font-size: 16px;
  color: #45413e;
  font-weight: 300;
  max-width: 800px;
`;

export const SubTitle = styled.h2`
  font-size: 36px;
  color: #101010;
  text-align: center;
  margin-top: 40px;
`;

export const HeadingSection = styled.h2`
  font-size: 18px;
  color: #101010;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const HeadingInfo = styled.h2`
  font-size: 18px;
  color: #101010;
  margin-bottom: 10px;
`;

export const Sub = styled.h2`
  font-size: 20px;
  color: #45413e;
  text-align: center;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: #45413e;
  span {
    font-weight: 600;
  }
`;

export const TextOverlay = styled.div`
  position: absolute;
  bottom: 5px;
`;
