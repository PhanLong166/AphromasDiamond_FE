import styled from "styled-components";
import { theme } from "../../../themes";

const GlobalStyle = `
  
`;

export default GlobalStyle;

export const Container = styled.div`
  background-color: #ffffff;
`;

export const Banner = styled.section`
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSection = styled.div`
  width: 50%;
  padding: 10px;
  align-items: center;
  margin: 50px 150px;

  h2 {
    font-size: 50px;
    margin-bottom: 10px;
    text-align: left;
    font-family: "Great Vibes";
    font-weight: 500;
    color: ${theme.color.primary};
  }

  .subheading {
    font-size: 15px;
    margin-bottom: 10px;
    line-height: 1.5;
    text-align: left;
    font-family: "Gantari", sans-serif;
    color: #45413e;
  }
`;

export const RightSection = styled.div`
  img {
    width: 65%;
    height: auto;
    border-radius: 10px;
    margin-left: 100px;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 140px;
    display: block;
  }
`;

export const ContentWrapper = styled.div`
text-align: center; 
display: flex;
flex-direction: column;
justify-content: center;
height: 100%; 

h4 {
  color: #151542;
  font-family: "Gantari", sans-serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
}

p{
  font-family: "Gantari", sans-serif;
  color: #45413E
  font-size: 14px;
}
`;

export const LearnItem = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

export const Section = styled.div`
  margin: 60px auto;
  max-width: 1200px;
  .ant-card-body {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid #d9d9d9;
    background-color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
  }
  .ant-card:hover .ant-card-body {
    background-color: #f0f0f0; /* Gray background color on hover */
    cursor: pointer; /* Show pointer cursor on hover */
  }
`;
