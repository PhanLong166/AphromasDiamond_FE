import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

  body {
    font-family: 'Great Vibes', cursive;
  }
`;

export default GlobalStyle;

import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8f0e5;
`;

export const Banner = styled.section`
  background-color: #eadbc8;
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
    text-align: center;
    font-family: 'Great Vibes';
    font-weight: 500;
    color: #102c57;
  }

  .subheading {
    font-size: 15px;
    margin-bottom: 10px;
    line-height: 1.5;
    text-align: center;
    font-family: "Crimson Text", sans-serif;
    color: #45413e;
  }

  .consult-button {
    padding: 10px 20px;
    background-color: #102c57;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 14px;
    align-self: center;
    margin-left: 180px;
    font-family: "Poppins", sans-serif;
    margin-top: 10px;

    &:hover {
      background-color: #d8a25a;
      color: #45413e;
     
      transition: all 0.45s ease;
    }
  }
`;

export const RightSection = styled.div`
  img {
    width: 50%;
    height: auto;
    border-radius: 10px;
    margin-left: 100px;
  }
`;

export const ProductList = styled.section`
  padding: 20px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 35px;
  padding-top: 0;
`;

export const ProductItem = styled.div`
    background-color: transparent;
    padding: 10px;
    border-radius: 15px;
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
        transition: all .45s ease;
  }

  img {
    width: 200px;
    height: 200px;
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
    font-family: "Crimson Text", serif;
    color: #102c57;
}
`;

export const ProductImage = styled.img`
    width: 80%;
    height: auto;
    filter: drop-shadow(0 10px 15px #0009);
    padding-bottom: 10px;
`;

export const ItemName = styled.p`
  color: #102c57;
  font-size: 18px;
  font-weight: 500;
  font-family: "Crimson Text", serif;
`;

export const Price = styled.p`
    font-size: small;
    font-family: "Inika", serif;
    color: 45413E;
    font-weight: 600;
    font-size: 14px;
`;

export const AddCartButton = styled.button`
    background-color: #102c57;
    color: #f8f0e5;
    padding: 12px 10px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    
    &:hover {
        background: #D8A25A;
        transition: all .45s ease;
    }   

`;

export const AddLink = styled.a`
    text-decoration: none;
`;

export const CustomCard = styled.div`
  background-color: #eadbc8;
  width: 90%;
  margin-left: 16px;
  height: 103%;
  margin-top: 48px;
  border-radius: 30px;
`;

export const CustomCardContent = styled.div`
  padding: 20px;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-top: 100px;
`;

export const CustomCardTitle = styled.h6`
  font-size: 17px;
  margin-bottom: 30px;
  font-family: "Crimson Text", sans-serif;
  color: #102c57;
  font-weight: 500;
`;

export const CustomButton = styled.button`
  text-decoration: none;
  padding: 10px 30px;
  color: #f8f0e5;
  background-color: #102c57;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  border-color: transparent;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: #d8a25a;
    transition: all 0.45s ease;
  }
`;

export const FAQs = styled.section`
  display: flex;
`;


export const LeftFAQ = styled.div`
  width: 30%;
  padding-right: 20px;
  padding-top: 20px;
`;

export const Wrapper = styled.div`
  max-width: 100%;
  margin: auto;
`;

export const Accordion = styled.button`
  background-color: #f8f0e5;
  color: #102c57;
  cursor: pointer;
  font-size: 18px;
  width: 100%;
  padding: 2rem 2.5rem;
  border: none;
  outline: none;
  transition: 0.4s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Crimson Text", sans-serif;
  font-weight: 600;

  i {
    font-size: 1.6rem;
  }

  &:hover {
    background-color: #eadbc8;
  }
`;

export const Panel = styled.div`
  padding: 0 18px;
  color: #45413e;
  display: none;
  background-color: #f8f0e5;
  padding: 0 2rem 2.5rem 2rem;
  overflow: hidden;

  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 16px;
    line-height: 1.4;
    font-family: "Crimson Text", sans-serif;
  }
`;

export const FAQ = styled.div`
  margin: 10px 0;

  &.active {
    border: none;
  }
`;
