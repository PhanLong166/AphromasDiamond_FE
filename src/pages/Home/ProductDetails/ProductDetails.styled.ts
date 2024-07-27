import styled from "styled-components";
import { theme } from "../../../themes";
import { Pagination } from "antd";
import { Breadcrumb } from "antd";

export const CustomBreadcrumb = styled(Breadcrumb)`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 20px;
`;

//
export const StyledPagination = styled(Pagination)`
  display: block;
  text-align: center;
  margin: 20px auto;
`;

export const Body = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: ${theme.color.white};
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1320px;
  justify-content: center;
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`;

export const ProductDotGrid = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const OuterThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ThumbnailImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img:hover {
    border: solid 1px #b1b1b1;
  }
`;

export const OuterMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const MainImage = styled.div`
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  padding-top: 0;
`;

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .main-title {
    margin: 0;
    color: ${theme.color.primary};
    font-size: 30px;
    font-family: "Gantari", sans-serif;
    padding-bottom: 5px;
    font-weight: 400;
    letter-spacing: 1px;
  }
  .button-container {
    display: flex;
    gap: 10px;
  }
  .button-container {
    margin-top: 10px;
  }
  .size-button {
    width: 100px;
    height: 40px;
    border: 1px solid #b1b1b1;
    color: ${theme.color.primary};
    background-color: white;
    font-size: 12px;
    font-weight: 200;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .size-button:hover {
    border-color: ${theme.color.primary};
  }

  .size-button.selected {
    border-color: ${theme.color.primary};
    background-color: #f4f2ee;
  }
`;

export const Heading = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${theme.color.primary};
  font-size: 30px;
  font-family: "Gantari", sans-serif;
  padding-bottom: 8px;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const ProductRating = styled.span`
  color: #d8a25a;
  font-size: 20px;
`;

export const ProductMetal = styled.div`
  .wrap {
    display: flex;
    gap: 10px;
  }
  .fill {
    font-weight: 400;
    font-size: 14px;
  }
  span {
    color: ${theme.color.primary};
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    font-size: 14px;
  }

  .metal-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }

  button.white {
    background-color: #d9d9d9;
  }

  button.yellow {
    background-color: #d8a25a;
  }

  button.rose {
    background-color: #f4cfc6;
  }

  button.platinum {
    background-color: #696969;
  }

  button.selected,
  button:hover:not(.selected) {
    box-shadow: inset 0 0 0 4px #fff;
  }
  button[disabled] {
    pointer-events: none; 
    opacity: 0.5; 
  }
`;

export const ProductInfo = styled.div`
  span {
    color: ${theme.color.primary};
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    font-size: 14px;
  }

  .wrap {
    display: flex;
    gap: 10px; /* Khoảng cách giữa các hộp */
  }

  .info-box {
    width: 60px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    color: ${theme.color.primary};
    opacity: 0.8;
  }
`;

export const RingSizeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

export const RingChoose = styled.select`
  .button-container {
    display: flex;
    gap: 10px;
  }

  .size-button {
    width: 50px;
    height: 50px;
    border: 2px solid gray;
    color: red;
    background-color: white;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .size-button:hover {
    border-color: red;
  }

  .size-button.selected {
    border-color: red;
    background-color: #ffe5e5;
  }
`;

export const RingSizeHelp = styled.a`
  text-decoration: underline;
  color: ${theme.color.primary};
  font-weight: 400;
  font-size: 14px;
`;

export const RingSize = styled.div`
  color: ${theme.color.primary};
  font-weight: 400;
  font-size: 14px;
`;

// export const SelectButton = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   margin-bottom: 5px;
//   cursor: pointer;
//   width: 520px;
//   background-color: ${theme.color.secondary};
//   border-radius: 8px;
// `;

export const SelectionTitle = styled.h5`
  margin: 0;
  font-size: 14px;
  text-align: left;
  font-family: "Gantari", sans-serif;
  color: ${theme.color.primary};
`;

export const SelectName = styled.p`
  margin: 0;
  font-size: 12px;
  text-align: center;
  color: #45413e;
  font-family: "Gantari", sans-serif;
  padding-left: 12px;
`;

export const ArrowIcon = styled.span`
  margin-left: 10px;
  color: ${theme.color.primary};
  i {
    font-size: 25px;
  }
`;
export const RingSizeSelectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 200px; /* Adjust based on your design needs */
  margin-bottom: 10px;

  .option {
    padding: 10px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
    background-color: white;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
    }
  }

  .option.selected {
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
  }
`;

export const SelectButton = styled.button`
  padding: 10px 20px;
  text-align: center;
  color: ${theme.color.primary};
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.primary};
  cursor: pointer;
  font-family: "Gantari", sans-serif;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ButtonAdd = styled.button`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  border: none;
  cursor: pointer;
  background-color: ${theme.color.primary};
  color: ${theme.color.white};
  letter-spacing: 2px;
  border: 1px solid ${theme.color.primary};
`;
export const Button = styled.button`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  color: ${theme.color.primary};
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.primary};
  cursor: pointer;
  font-family: "Gantari", sans-serif;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  transition: color 0.4s ease-out; /* Transition for text color */

  &.button_slide {
    letter-spacing: 2px;
  }

  &.slide_right::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.color.primary};
    transition: transform 0.4s ease-out;
    transform: translateX(-100%);
    z-index: 1;
  }

  &.slide_right:hover::before {
    transform: translateX(0);
  }

  &.slide_right:hover {
    color: ${theme.color.white};
  }

  span {
    position: relative;
    z-index: 2; /* Ensure the text is above the sliding background */
  }
`;

export const Shipping = styled.div`
  margin-top: 10px;

  ul {
    padding-left: 0;
  }
`;

export const ShippingList = styled.ul`
  list-style: none;
`;

export const ShippingItem = styled.li`
  display: flex;
  align-items: center;
  span {
    color: ${theme.color.primary};
    font-family: "Gantari", sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .delivery {
    font-weight: 500;
  }
`;

export const ProductPrice = styled.span`
  margin-bottom: 15px;
  .product-group {
    display: flex;
    justify-content: space-between;
  }

  .product-price {
    display: flex;
    align-items: center;
  }

  .product-price .wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
  }

  .wrap::before {
    content: "";
    position: absolute;
    top: 0;
    left: 12px;
    height: 100%;
    width: 1.5px;
    background-color: #696969;
    transform: skewX(-25deg);
  }
`;

export const CurrentPrice = styled.span`
  font-size: 32px;
  font-family: "Gantari", sans-serif;
  font-weight: 500;
  font-style: italic;
  color: #DC143C;
`;

export const BeforePrice = styled.span`
  color: #d9d9d9;
  text-decoration: line-through;
  font-family: "Gantari", sans-serif;
  font-style: italic;
`;

export const Discount = styled.span`
  display: inline-block;
  font-size: 18px;
  padding: 8px;
  background-color: #DC143C;
  color: ${theme.color.white};
  margin-left: -10px;
  text-align: center;
  font-style: italic;

  line-height: 1;
  font-family: "Gantari", sans-serif;
`;

// Riview + Description

export const Contain = styled.div`
  margin: 0 auto;
  max-width: 1400px;
`;

export const Tabbed = styled.div`
  padding-top: 30px;
  nav {
    position: relative;
  }

  nav:before {
    content: "";
    position: absolute;
    left: 0;
    top: 40px;
    height: 1px;
    width: 100%;
    background-color: ${theme.color.primary};
    opacity: 0.4;
  }

  nav ul {
    justify-content: center;
    display: flex;
  }

  nav li {
    list-style: none;
    color: #45413e;
  }

  nav li a {
    position: relative;
    font-size: 18px;
    padding: 20px 0;
    margin-right: 30px;
    white-space: nowrap;
    color: ${theme.color.primary};
    text-decoration: none;
    font-family: "Gantari", sans-serif;
  }

  nav ul :is(li.active a, li a:hover) {
    color: ${theme.color.primary};
    font-weight: bold;
  }

  span {
    font-size: 17px;
  }
`;

export const ProductAbout = styled.div`
  padding: 10px 0;
  max-width: 980px;
  margin: 0 auto;

  h3 {
    font-size: 18px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }

  h4 {
    font-weight: 700;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
    font-size: 16px;
  }

  &.hide {
    display: none;
  }

  &.active {
    display: block;
  }

  //   &.active-tab a span {
  //     font-weight: bold;
  // }

  // &:where(h3,
  //   h4) {
  //       margin-bottom: 15px;
  //   }
`;

export const TextBlock = styled.div`
  padding-bottom: 30px;
  margin-top: 25px;
  p {
    color: #45413e;
    font-family: "Gantari", sans-serif;
    font-size: 15px;
    line-height: 1.4;
    padding-left: 3px;
  }
`;

export const DotGrid = styled.div`
  .wrapper2 {
    display: flex;
    gap: 60px;
    margin: 0 auto;
  }
`;

export const ListBlock = styled.div`
  li {
    color: #45413e;
    font-family: "Gantari", sans-serif;
    font-size: 15px;
  }
`;

export const Review = styled.div`
  max-width: 770px;
  margin: 0 auto;

  .head-review {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    border-bottom: 1px solid ${theme.color.primary};
    padding-top: 10px;
    padding-bottom: 5px;
    justify-content: space-between;

    .view-all-button {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 14px;
    }

    .view-all-button:hover {
      transform: translateY(-3px);
      transition: all 0.45s ease;
    }

    strong {
      font-size: 40px;
      font-family: "Gantari", sans-serif;
      color: ${theme.color.primary};
    }

    span {
      position: relative;
      padding-left: 20px;
      color: ${theme.color.primary};
      font-family: "Gantari", sans-serif;
      font-size: 14px;

      &::before {
        height: 50px;
        top: -30px;
        content: "";
        position: absolute;
        top: 0;
        left: 12px;
        height: 100%;
        width: 1.5px;
        background-color: #696969;
        transform: skewX(-25deg);
      }
    }
  }

  .body-review {
    margin: 0 auto;
    max-width: 800px;

    .profile {
      margin-top: 30px;

      .thumb-name {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
      }

      .image {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        margin-right: 20px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .rating {
        padding-top: 0;
      }

      .grouping {
        line-height: initial;
        margin-bottom: 0;
      }

      .name,
      .reply strong {
        font-weight: bold;
        color: ${theme.color.primary};
        font-family: "Gantari", sans-serif;
        font-size: 15px;
      }

      .date {
        font-size: 10px;
        margin-top: 5px;
        font-family: "Gantari", sans-serif;
        color: #45413e;
      }

      .comment {
        padding-left: 92px;
        font-family: "Gantari", sans-serif;
        color: #45413e;

        p {
          margin-top: 5px;
          font-size: 15px;
        }

        strong {
          color: ${theme.color.primary};
          font-size: 15px;
          font-family: "Gantari", sans-serif;
        }
      }

      .reply {
        margin-left: 92px;
        background-color: #f1f1f1;
        width: fit-content;
        padding: 10px;
        border-radius: 10px;
        margin-top: 10px;

        p {
          margin-top: 5px;
          font-size: 15px;
          color: #45413e;
          font-family: "Gantari", sans-serif;
        }
      }
    }
  }
`;

// SAME + RECENTLY
export const ProductSection = styled.section`
  margin: 60px auto;
  max-width: 1400px;
  margin-bottom: 60px;
`;
export const ProductSectionViewed = styled.section`
  margin: 60px auto;
  max-width: 1400px;
  margin-bottom: 60px;
`;

export const HeadingTitle = styled.h2`
  color: ${theme.color.primary};
  font-size: 22px;
  font-family: "Gantari", sans-serif;
  font-weight: 400;
`;
export const ListProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 35px 10px;
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
    align-items: center;
    justify-content: center;
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
  padding: 0 25px;
`;

export const Price = styled.p`
  font-family: "Gantari", sans-serif;
  color: ${theme.color.primary};
  font-weight: 600;
  font-size: 14px;
  margin-top: 10px;
  text-align: left;
  padding: 0 25px;
`;

export const AddCartButton = styled.button`
  background-color: ${theme.color.primary};
  color: ${theme.color.white};
  padding: 12px 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    font-size: 14px;
    transition: all 0.45s ease;
  }
`;

export const AddLink = styled.a`
  text-decoration: none;
  font-family: "Gantari", sans-serif;
  font-weight: 600;
`;

export const PageLink = styled.a``;
export const Space = styled.div`
  span {
    font-size: 18px;
    color: ${theme.color.primary};
  }
  .inscription {
    text-decoration: underline;
    color: ${theme.color.primary};
  }

  .inscription-content {
  cursor: pointer;
  }
`;

export const List = styled.div`
  max-width: 1400px;
  margin: 0px auto;
  margin-top: 20px;

  .product-image {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
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
`;
