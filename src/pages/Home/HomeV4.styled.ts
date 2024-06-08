import styled from "styled-components";
import { theme } from "../../themes";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
`;

export default GlobalStyle;

export const Body = styled.div`
  background-color: ${theme.color.white};
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner.png?alt=media&token=0394f1be-0bc6-47c3-9776-ec6edbb49a9f")
    no-repeat center center;
  background-size: cover;
  margin-bottom: 70px;
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
    font-family: "Poppins", sans-serif;
    color: ${theme.color.primary};
  }

  .title {
    font-size: 32px;
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
    color: ${theme.color.primary};
  }
`;

export const Contain = styled.div`
  margin: 40px auto;
  max-width: 1320px;
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
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  text-align: center;
  margin-top: 15px;
`;

export const LeftButtonWrapper = styled.div`
  position: absolute;
  top: 117.5%;
  transform: translateY(-50%);
  z-index: 1;
`;

export const RightButtonWrapper = styled.div`
  position: absolute;
  top: 117.5%;
  right: 107px;
  transform: translateY(-50%);
  z-index: 1;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #696969;
  border: none;
  opacity: 0.5;

  &:hover {
    opacity: 0.8;
    background-color: #fff;
    transition: all 0.45s ease;
  }
`;

// export const WrapperShape = styled.div`
//     display: grid;
//     --grid-col: 140px;
//     grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-col), 100%), 1fr));

// `;

export const ContainShape = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  justify-content: center;
`;

export const Shape = styled.section`
  padding: 20px 0;
`;

// export const ShapeWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     .shapebox .wrapper {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: center;
//     }
// `;

// export const ShapeItem = styled.div`
//     margin: 10px;
//     text-align: center;

// `;

// export const DotImage = styled.div`
//     img {
//     max-width: 100px;
//     height: auto;
//     background-color: #fff;
//     padding: 40px 20px;
//     border-radius: 10px;
//     &:hover {
//         transform: translateY(-5px);
//         cursor: pointer;
//     }
// }
// `;

// export const DotInfo = styled.div`

// `;

// export const DotTitle = styled.div`
// margin: 10px 20px 0 0;
//     font-size: 15px;
//     color: ${theme.color.white};
//      font-family: "Poppins", sans-serif;

// `;

// export const ButtonShape = styled.button`
// padding: 10px;
// cursor: pointer;
// border-radius: 50%;
// background-color: ${theme.color.primary};;
// border: solid 2px ${theme.color.white};;

//     &:hover {
//         transform: translateY(-5px);
//         transition: all .45s ease;
//     }
// `;
// export const RightButtonShape = styled.div`
// position: absolute;
//     top: 82%;
//     transform: translateY(-50%);
//     right: 10px;

// `;

// export const LeftButtonShape = styled.div`
// position: absolute;
//     top: 82%;
//     transform: translateY(-50%);

// `;

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

export const DotInfo = styled.div``;

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
  max-width: 1300px;
  margin: 60px auto;
`;

export const Banner2Container = styled.div`
  color: ${theme.color.primary};
  text-align: center;
  margin-top: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  h6 {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    color: ${theme.color.primary};
    font-weight: bold;
    padding-top: 60px;
  }

  h2 {
    font-size: 50px;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    padding-top: 10px;
    color: ${theme.color.primary};
  }
  button {
    padding: 1rem 2rem;
    font-size: 1rem;
    color: ${theme.color.white};
    outline: none;
    border: none;
    border-radius: 8px;
    background-color: ${theme.color.primary};
    cursor: pointer;
    margin-top: 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    transition: all 0.45s ease;
    margin-bottom: 60px;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const Countdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

export const Square = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${theme.color.white};
  display: grid;
  place-content: center;
  border-radius: 12px;
  span {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 550px;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  background-color: #dbdad6;
  padding: 50px;

  .super {
    color: ${theme.color.primary};
    font-size: 14px;
    font-weight: 500;
  }
  .upTo {
    font-size: 40px;
    font-weight: 600;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
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
    font-family: "Poppins", serif;
    font-weight: 600;
    transition: all 0.45s ease;
    align-self: flex-start;
    margin-top: 55px;
    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
      transition: all 0.45s ease;
    }
  }
`;

export const Feature = styled.section`
  max-width: 1300px;
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
    font-weight: 300;
    font-size: 14px;
  }
  .best {
    font-size: 32px;
    font-family: "Poppins", sans-serif;
    color: ${theme.color.primary};
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
    font-family: "Poppins", serif;
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

export const Row = styled.div`
  padding: 30px 30px;
  background-color: ${theme.color.primary};
  border-radius: 10px;
  transition: all 0.45s ease;

  .main-row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
  }

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

export const RowText = styled.div`
  margin-bottom: 20px;
  h6 {
    font-family: "Poppins", serif;
    font-size: 12px;
    font-weight: 300;
    color: #fff;
    margin-bottom: 1.5rem;
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }
  h5 {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 2rem;
    font-family: "Poppins", sans-serif;
  }
  .row-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: ${theme.color.secondary};
    color: ${theme.color.primary};
    font-size: 12px;
    border-radius: 8px;
    transition: all 0.45s ease;
    text-decoration: none;
    font-family: "Poppins", serif;
    font-weight: 600;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const RowImg = styled.div`
  width: 200px;
  img {
    width: 200px;
    height: auto;
    max-width: 100%;
  }
`;

export const RowButton = styled.a``;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  background-color: #f8f5ee;
  padding: 50px;
  .about {
    font-size: 32px;
    font-weight: 600;
    color: ${theme.color.primary};
  }
`;
export const About = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 70px;
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
    font-family: "Poppins", serif;
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

export const Banner3Container = styled.div`
  max-width: 1320px;
  margin: 60px auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h6 {
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    color: ${theme.color.primary};
    font-weight: 500;
  }
  h2 {
    font-size: 32px;
    text-align: left;
    margin-top: 40px;
    font-family: "Poppins", sans-serif;
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
    font-family: "Poppins", serif;
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
  max-width: 1320px;
  margin: 60px auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h6 {
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    color: ${theme.color.white};
    font-weight: 500;
    text-align: right;
    width: 50%;
  }
  h2 {
    font-size: 32px;
    text-align: right;
    margin-top: 40px;
    font-family: "Poppins", sans-serif;
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
    font-family: "Poppins", serif;
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
  max-width: 1320px;
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
