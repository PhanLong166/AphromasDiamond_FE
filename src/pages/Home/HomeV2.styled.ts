import styled from 'styled-components';
import { theme } from "../../themes";
import { createGlobalStyle } from 'styled-components';
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
    background: url('https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner.png?alt=media&token=0394f1be-0bc6-47c3-9776-ec6edbb49a9f') no-repeat center center;
    background-size: cover;
    margin-bottom: 70px;
`;


export const Container = styled.div`



`;

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
  color: ${theme.color.primary};;
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
    padding: 50px 0;
   
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
    content: '';
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

export const DotInfo = styled.div`

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
    background-image: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner2.png?alt=media&token=015c67ec-59fb-4b10-b526-9993d961514b");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 0;
`;

export const Banner2Container = styled.div`
    color: ${theme.color.primary};;
    text-align: center;
    margin-top: 0;
     font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 24px;
    h6 {
        font-size: 16px;
         font-family: "Poppins", sans-serif;
        color: ${theme.color.primary};;
        font-weight: bold;
        padding-top: 60px;
    }

    h2 {
        font-size: 50px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
        padding-top: 10px;
        color: ${theme.color.primary};;
    }
    button {
        padding: 1rem 2rem;
        font-size: 1rem;
        color: ${theme.color.white};;
        outline: none;
        border: none;
        border-radius: 8px;
        background-color: ${theme.color.primary};;
        cursor: pointer;
        margin-top: 15px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        transition: all .45s ease;
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
    background-color:  ${theme.color.white};
    display: grid;
    place-content: center;
    border-radius: 12px;
    span {
        font-family: "Poppins", sans-serif;
        font-size: 14px;
    }
`;

export const Feature = styled.section`
    max-width: 1200px; 
    width: 100%;
    margin: 60px auto; 

   
    .nav-buttons {
        top: calc(100% + 20px);
        text-align: right;
    }
    
    .prev-button,
    .next-button {
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #696969;
        margin-bottom: 10px;
        opacity: .6;
    }
    
    .prev-button {
        margin-right: 5px;
    }

    .title-best {
        font-size: 34px;
        margin-bottom: 20px;
         font-family: "Poppins", sans-serif;
        color: ${theme.color.primary};;
        text-align: center;
        font-weight: bolder;
    }

    .prev-button:hover,
    .next-button:hover {
        cursor: pointer;
        color: ${theme.color.primary};;
        opacity: 1;
       
    }
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
    background-color: ${theme.color.primary};;
    border-radius: 10px;
    transition: all .45s ease;
   
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
        background-color: ${theme.color.secondary};;
        color: ${theme.color.primary};;
        font-size: 12px;
        border-radius: 8px;
        transition: all .45s ease;
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

export const About = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
    align-items: center;
    gap: 1rem;
    max-width: 1200px; 
    width: 100%;
    margin: 60px auto;
    padding-bottom: 60px;  
    margin-bottom: 0;
`;

export const AboutImg = styled.div`
    background: ${theme.color.white};;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
    }
`;

export const AboutText = styled.div`
    background: ${theme.color.white};;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    h2 {
        font-size: 32px;
        text-transform: uppercase;
         font-family: "Poppins", sans-serif;
        color: ${theme.color.primary};;
        font-weight: bolder;
    }
    p {
        line-height: 1.5;
        margin-top: 20px;
            margin-bottom: 20px;
            width: 80%;
            text-align: center;
             font-family: "Poppins", sans-serif;
            color: #45413E;
            font-size: 16px;
    }
    .row-btn {
        padding: 10px 15px;
        font-size: 12px;
        color: ${theme.color.white};;
        outline: none;
        border: none;
        border-radius: 10px;
        background-color: ${theme.color.primary};;
        cursor: pointer;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        transition: all .45s ease;
        &:hover {
            transform: translateY(-5px);
        }
    }
`;

export const Banner3 = styled.section`
    background-image: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Home%2Fbanner3.png?alt=media&token=da3e8dcd-be1f-4668-8b66-7ffbaced087c");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50vh;
`;

export const Banner3Container = styled.div`
    padding-left: 50px;
    padding-top: 80px;
    h6 {
        font-size: 16px;
         font-family: "Poppins", sans-serif;
        color: ${theme.color.primary};;
        font-weight: bold;
    }
    h2 {
        font-size: 32px;
        text-align: left;
        margin-top: 40px;
         font-family: "Poppins", sans-serif;
        color: ${theme.color.primary};;
        font-weight: 700;
    }
    button {
        font-size: 12px;
        padding: 10px 20px;
        background-color: ${theme.color.primary};;
        color: ${theme.color.secondary};;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-family: "Poppins", serif;
        font-weight: 600;
        transition: all .45s ease;
        margin-top: 40px;
        &:hover {
            transform: translateY(-5px);
        }
    }
`;

