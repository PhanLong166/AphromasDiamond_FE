import styled from "styled-components";
import { theme } from "../../themes";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { Card, Carousel } from "antd";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
`;

export default GlobalStyle;

export const Body = styled.div`
  background-color: ${theme.color.white};
`;

export const Banner = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FWeddingSale0624_Desktop.6ca83.jpg?alt=media&token=aa38703e-113f-45d5-94da-d71102bee885");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  text-align: left;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1340px;
  width: 100%;

  h2 {
    font-size: 32px;
    margin-bottom: 0.5em;
    font-weight: 600;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
    margin-bottom: 36px;
  }

  p {
    font-size: 16px;
    margin-bottom: 1em;
    max-width: 660px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }
`;

export const Button = styled.div`
  display: flex;
  gap: 1em;

  button {
    font-size: 12px;
    padding: 10px 20px;
    background-color: #ddd5ca;
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
      color: #ddd5ca;
      transition: all 0.45s ease;
    }
  }
`;

export const Container = styled.div``;

export const Categories = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const Heading = styled.div`
  text-align: center;
  h5 {
    padding-bottom: 10px;
    font-weight: 300;
    font-size: 14px;
  }
  .title-cate {
    font-size: 32px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }

  .title {
    font-size: 32px;
    margin-bottom: 20px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }
`;

export const Contain = styled.div`
  margin: 40px auto;
  max-width: 1340px;
`;

export const DotGrid = styled.div``;

export const Cate = styled.div`
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

export const CateImage = styled.div`
  img {
    max-width: 240px;
    height: auto;
    background-color: ${theme.color.secondary};
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    transform: translateY(-1px);
  }
`;

export const CateTitle = styled.p`
  color: ${theme.color.primary};
  font-size: 15px;
  font-family: "Gantari", sans-serif;
  cursor: pointer;
  text-align: center;
  margin-top: 15px;
`;

export const ContainShape = styled.div`
  margin: 0 auto;
  max-width: 1340px;
  justify-content: center;
`;

export const Shape = styled.section`
  padding: 20px 0;
`;

export const ShapeItem = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
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

export const Banner2 = styled.section`
  margin: 60px auto;
  background-color: #dbdad6;
  height: fix-content;
`;

export const Banner2Container = styled.div`
  max-width: 1340px;
  margin: 0 auto;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 500px;
  height: 100%;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: #dbdad6;
  height: 100%;

  .super {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 27px;
  }
  .title {
    margin-top: 13px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

export const StyledText = styled.p`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  color: #45413e;
  text-align: right;
  padding-left: 70px;
  font-weight: 400;
`;

export const ButtonSale = styled.div`
  button {
    font-size: 12px;
    padding: 10px 20px;
    background-color: #dbdad6;
    color: ${theme.color.primary};
    border: none;
    border: 1px solid ${theme.color.primary};
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    transition: all 0.45s ease;
    align-self: flex-start;
    margin-top: 40px;
    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
      transition: all 0.45s ease;
    }
  }
`;

export const Feature = styled.section`
  max-width: 1340px;
  margin: 0 auto;

  .main-title {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 32px;
    left: 0;
    width: 100%;
    text-align: left;
    z-index: 1;
  }
  .pageBest {
    position: absolute;
    bottom: 26px;
    left: 42%;
  }
  .little {
    padding-bottom: 10px;
    font-weight: 400;
    font-size: 14px;
  }
  .best {
    font-size: 32px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
    font-weight: 700;
  }

  .custom-cover {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .custom-cover img {
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    padding-bottom: 20%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    h2 {
      font-weight: 200;
      font-family: "Montserrat", sans-serif;
      font-size: 26px;
    }
  }

  .overlay .ant-typography {
    color: white;
  }

  .overlay button {
    margin-top: 10px;
    font-size: 12px;
    padding: 10px 20px;
    background-color: #fff9f7;
    color: ${theme.color.primary};
    border: none;
    border: 1px solid ${theme.color.primary};
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    transition: all 0.45s ease;
    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
      transition: all 0.45s ease;
    }
  }
`;

export const ProductItem = styled.div`
  background-color: #f9f3f1;
  text-align: center;
  padding: 10px;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: all 0.45s ease;
    background-color: transparent;
  }

  img {
    width: 200px;
    height: 250px;
  }

  .link-add:hover {
    text-decoration: underline;
  }

  h4 {
    font-weight: 700;
    font-size: 16px;
    margin: 10px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }
`;

export const ProductImage = styled.img`
  width: 80%;
  height: auto;
  filter: drop-shadow(0 10px 15px #0009);
`;

export const ItemName = styled.div`
  color: ${theme.color.primary};
  font-size: 14px;
  font-family: "Gantari", sans-serif;
  padding: 0 15px;
  text-align: center;
`;

export const Price = styled.span`
  font-family: "Gantari", sans-serif;
  color: ${theme.color.primary};
  font-weight: 600;
  font-size: 14px;
  margin-top: 10px;

  padding: 0 15px;
`;

export const FeatureContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 2rem;
  align-items: center;
  margin-top: 5px;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 99.3%;
  background-color: #f8f5ee;
  padding: 40px 0;
  padding-right: 100px;
  .about {
    font-size: 32px;
    font-weight: 600;
    color: ${theme.color.primary};
  }
`;
export const About = styled.section`
  max-width: 1340px;
  margin: 0 auto;
  margin-bottom: 70px;
  
`;

export const AboutContainer = styled.div`
  background-color: #f8f5ee;
`;

export const ButtonAbout = styled.div`
  button {
    font-size: 12px;
    padding: 10px 20px;
    background-color: #f8f5ee;
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

export const AboutText = styled.div`
  font-size: 16px;
  color: #45413e;
`;

export const Banner3 = styled.section`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fengagement.39cf5%20(1).jpg?alt=media&token=7fe9e59e-a77e-4eba-bd05-cc98777a3d8a");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
`;
export const ButtonSection = styled.div``;
export const Banner3Container = styled.div`
  max-width: 1340px;
  margin: 60px auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h5 {
    font-size: 14px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
    font-weight: 400;
  }
  h2 {
    font-size: 32px;
    text-align: left;
    margin-top: 40px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
    font-weight: 700;
  }
  button {
    font-size: 12px;
    padding: 10px 20px;
    background-color: #fff9f7;
    color: ${theme.color.primary};
    border: none;
    border: 1px solid ${theme.color.primary};
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    transition: all 0.45s ease;
    align-self: flex-start;
    margin-top: 40px;
    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
      transition: all 0.45s ease;
    }
  }
`;

export const Banner4 = styled.section`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2FastorCollectionBanner.5937c.jpg?alt=media&token=bc54bf08-cff1-415f-a21f-058a5cbbd1cc");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
`;

export const Banner4Container = styled.div`
  max-width: 1340px;
  margin: 60px auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h5 {
    font-weight: 400;
    font-size: 14px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.white};
  }
  h6 {
    font-size: 16px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.white};
    font-weight: 500;
    text-align: right;
    width: 50%;
  }
  h2 {
    font-size: 32px;
    text-align: right;
    margin-top: 40px;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.white};
    font-weight: 700;
    margin-bottom: 10px;
  }
  button {
    font-size: 12px;
    padding: 10px 20px;
    background-color: #68aab9;
    color: ${theme.color.white};
    border: none;
    border: 1px solid ${theme.color.white};
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    transition: all 0.45s ease;
    align-self: flex-end;
    margin-top: 40px;
    &:hover {
      background-color: ${theme.color.white};
      color: ${theme.color.primary};
      transition: all 0.45s ease;
    }
  }
`;

export const ContainBrand = styled.div`
  margin: 0 auto;
  max-width: 1360px;
  justify-content: center;
`;

export const Brand = styled.section`
  padding: 60px 0;
`;

export const BrandItem = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
`;

export const StyledCarousel = styled(Carousel)`
    .slick-slide {
      display: flex;
      justify-content: center;
    }

    .slick-dots {
      bottom: -10px;
    }

    .slick-dots li {
      margin: 0 2px;
    }

    .slick-dots li button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${theme.color.primary};
      justify-content: center;
    }

    .slick-dots li.slick-active button {
      background: ${theme.color.primary};
      justify-content: center;
    }
  `;
export const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  `;

export const StyledCard = styled(Card)`
    .product-image {
      width: 100%;
      height: 328px;
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
    }

    .product-sale-price {
      font-size: 12px;
      color: #888;
      text-decoration: line-through;
    }
  `;
