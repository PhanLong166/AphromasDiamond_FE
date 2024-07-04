import styled from "styled-components";
import { theme } from "../../../themes";

const GlobalStyle = `
  
`;

export default GlobalStyle;

export const Container = styled.div`
  background-color: #ffffff;
`;

export const Banner = styled.section`
  background: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Learn%2Flearnaboutbanner.jpeg?alt=media&token=8fe62efb-f5a7-4620-87ec-c1b9896e2d3c")
    no-repeat center center;
  background-size: cover;
  display: flex;
  height: 450px;
`;

export const LeftSection = styled.div`
  width: 50%;
  max-width: 1600px;
  margin: 120px 60px;

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

  .consult-button {
    padding: 15px 20px;
    background-color: #efe2d4;
    color: ${theme.color.primary};
    border: 1px solid;
    cursor: pointer;
    font-size: 14px;

    font-family: "Gantari", sans-serif;
    margin-top: 10px;
    font-weight: 500;
  }
  .button_slide {
    letter-spacing: 1px;
    cursor: pointer;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
  }
  .slide_right:hover {
    box-shadow: inset 400px 0 0 0 ${theme.color.primary};
    color: #efe2d4;
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
 font-family: "Great Vibes";
  font-size: 30px;
  font-weight: 400;
 
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
