import { createGlobalStyle } from "styled-components";
import { theme } from "../../../../themes";

import { Breadcrumb, Pagination, Collapse } from "antd";

export const CustomBreadcrumb = styled(Breadcrumb)`
  margin-left: 175px;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 1400px;
  margin: 0 auto;
`;
export const StyledPagination = styled(Pagination)`
  display: block;
  text-align: center;
  margin: 20px auto;
`;

export const StyledCollapse = styled(Collapse)`
.ant-collapse-item {
  background-color: #ffffff;
}
.ant-collapse-header-text {
  color: ${theme.color.primary};
}
.ant-collapse-content {
  background-color: #f4f2ee;
  color: #45413e;
}
.ant-collapse-expand-icon {
  color: ${theme.color.primary};
}
.ant-collapse-header {
  border-radius: 8px;
}
`;


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
    no-repeat center center;
  background-size: cover;
  display: flex;
  margin-bottom: 40px;
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

export const FAQs = styled.section`
  display: flex;
  margin: 50px auto;
  max-width: 1400px;
  justify-content: space-between;
`;

export const LeftFAQ = styled.div`
  width: 50%;
  padding-right: 20px;

  h2 {
    font-size: 32px;
    font-weight: 600;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }
  .ant-collapse {
    border-radius: 5px;
  }

  .ant-collapse-item {
    background-color: #f4f2ee;
  }

  .ant-collapse-header {
    border-radius: 5px;
  }
`;

export const List = styled.div`
  max-width: 1400px;
  margin: 0px auto;
  margin-top: 40px;

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
