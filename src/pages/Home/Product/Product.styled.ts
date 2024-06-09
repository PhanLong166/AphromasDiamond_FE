import { createGlobalStyle } from "styled-components";
import { theme } from "../../../themes";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,100..900;1,100..900&display=swap');
  body {
    font-family: 'Great Vibes', cursive;
  }
`;

export default GlobalStyle;

import styled from "styled-components";

export const Container = styled.div`
  background-color: ${theme.color.white};
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

  .consult-button {
    padding: 15px 20px;
    background-color: #f1f1f1;
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
    color: ${theme.color.white};
  }
`;

export const RightSection = styled.div`
  img {
    width: 65%;
    height: auto;
    border-radius: 10px;
    margin-left: 50px;
  }
`;

export const ListProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const ProductItem = styled.div`
  background-color: transparent;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: all 0.45s ease;
  }

  img {
    width: 200px;
    height: 250px;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .link-add:hover {
    text-decoration: underline;
  }

  h4 {
    font-weight: 700;
    font-size: 18px;
    margin: 10px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }
`;

export const ProductImage = styled.img`
  width: 80%;
  height: auto;
  filter: drop-shadow(0 10px 15px #0009);
  padding-bottom: 10px;
`;

export const ItemName = styled.p`
  color: ${theme.color.primary};
  font-size: 14px;
  font-family: "Gantari", sans-serif;
  text-align: left;
  padding: 0 15px;
`;

export const Price = styled.p`
  font-family: "Gantari", sans-serif;
  color: ${theme.color.primary};
  font-weight: 600;
  font-size: 14px;
  margin-top: 10px;
  text-align: left;
  padding: 0 15px;
`;

// export const AddCartButton = styled.button`
//     background-color: ${theme.color.primary};;
//     color: ${theme.color.white};;
//     padding: 12px 10px;
//     border-radius: 8px;
//     border: none;
//     cursor: pointer;
//     margin-top: 10px;
//     width: 100%;
//     box-sizing: border-box;

//     &:hover {
//         font-size: 14px;
//         transition: all .45s ease;
//     }

// `;

// export const AddLink = styled.a`
//     text-decoration: none;
//     font-family: "Poppins", sans-serif;
//     font-weight: 600;
// `;

export const CustomCard = styled.div`
  background-color: #f1f1f1;
  width: 300px;
  margin-left: 10px;
  height: 330px;
  border-radius: 16px;
`;

export const CustomCardContent = styled.div`
  padding: 20px;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-top: 120px;
  font-family: "Gantari", sans-serif;
`;

export const CustomCardTitle = styled.h6`
  font-size: 15px;
  margin-bottom: 30px;
  font-family: "Gantari", sans-serif;
  color: #45413e;
  font-weight: 500;
`;

export const CustomButton = styled.button`
  text-decoration: none;
  padding: 12px 20px;
  color: ${theme.color.primary};
  background-color: #f1f1f1;
  font-size: 13px;
  font-family: "Gantari", sans-serif;
  border: none;
  border: 1px solid;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
   color: ${theme.color.white};
    transition: all 0.45s ease;
    background-color: ${theme.color.primary};
  }
`;

export const FAQs = styled.section`
  display: flex;
  margin: 50px auto;
  max-width: 1200px;
  justify-content: space-between;
`;

export const LeftFAQ = styled.div`
  width: 50%;
  padding-right: 20px;

  h2 {
    font-size: 30px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }
`;

export const Wrapper = styled.div`
  max-width: 50%;
  margin-left: 0;
`;

export const Accordion = styled.button`
  background-color: ${theme.color.secondary};
  color: ${theme.color.primary};
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  padding: 20px 30px;
  border: none;
  outline: none;
  transition: 0.4s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Gantari", sans-serif;
  font-weight: 600;

  i {
    font-size: 1.6rem;
  }
`;

export const Panel = styled.div`
  padding: 0 18px;
  color: #45413e;
  background-color: ${theme.color.secondary};
  padding: 0 2rem 2.5rem 2rem;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease-out, visibility 0.4s ease-out;
  visibility: hidden;

  &.active {
    max-height: 500px;
    visibility: visible;
  }

  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 16px;
    line-height: 1.4;
    font-family: "Gantari", sans-serif;
  }
`;

export const FAQ = styled.div`
  margin: 10px 80px;

  &.active {
    border: none;
    width: 50%;
  }
`;
