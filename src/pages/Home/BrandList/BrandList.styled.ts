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
  background: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Brand%2FBrandBvl.jpg?alt=media&token=8505970d-3b32-4899-9ab0-bbc1cfe13a0b")
    no-repeat center center;
  background-size: cover;
  display: flex;
`;

export const LeftSection = styled.div`
  width: 50%;
  max-width: 1600px;
  margin: 100px 60px;

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

export const List = styled.div`
  max-width: 1400px;
  margin: 0px auto;
  margin-top: 60px;

  .product-image {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out; /* Thêm hiệu ứng mượt mà */
  }

  .sale-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 4px 8px;
    font-size: 14px;
    font-weight: 500;
    background-color: #ede0b8;
    color: ${theme.color.primary};
    width: auto;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .product-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 13px;
    color: ${theme.color.primary};
  }

  .wishlist-icon {
    margin-left: 8px;
    cursor: pointer;
    font-size: 16px;
    color: #db7f67;
  }

  .price-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .product-price {
    font-size: 14px;
    color: ${theme.color.primary};
    font-weight: 400;
  }

  .product-sale-price {
    font-size: 12px;
    color: #888;
    text-decoration: line-through;
    margin-top: 2px;
  }

  .show-all-card {
    width: 338px;
    height: 518px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #f0f0f0;
    border-radius: 0;
    background-color: #f4f2ee;
  }

  .show-all-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .show-all-text {
    font-size: 16px;
    margin-bottom: 16px;
    color: #45413e;
  }

  .show-all-button {
    background-color: #f4f2ee;
    color: ${theme.color.primary};
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: 1px solid;
  }

  .show-all-button:hover {
    background-color: ${theme.color.primary};
    color: #f4f2ee;
  }
`;

export const Brand = styled.section`
  max-width: 1420px;
  margin: 40px auto;
`;

export const BrandItem = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
`;
export const Heading = styled.div`
  text-align: left;
  .title {
    font-size: 32px;
    margin-bottom: 20px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
    margin-left: 7px;
  }
`;

export const DotImage = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Makes the container square */
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 0; /* Removes the overlay on hover */
  }
`;

export const DotGrid = styled.div``;

export const ContainBrand = styled.div`
  margin: 0 auto;
  max-width: 1420px;
  justify-content: center;
`;
export const DotTitle = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 10px;
  color: white;
  font-size: 1.2em;
  text-transform: uppercase;
  border-radius: 5px;
  text-align: center;
  z-index: 1; /* Ensures the title is above the image */
`;
