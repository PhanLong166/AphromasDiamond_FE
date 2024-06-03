import styled from 'styled-components';
import { theme } from "../../../themes";

export const Section = styled.div`
  margin: 0 auto;
  background-color: ${theme.color.white};;
`;

export const Container = styled.div`
  padding-top: 30px;
`;

export const Wrap = styled.div``;

export const Heading = styled.div`
  h2 {
    font-size: 32px;
    text-align: center;
    margin: 30px auto;
    font-family: "Playfair Display", serif;
    color: ${theme.color.primary};;
    font-weight: 700;
    margin-bottom: 50px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: 60px;
  margin-left: 20px;
`;

export const Sidebar = styled.div``;

export const SidebarWrap = styled.div``;

export const SidebarContent = styled.div`
  margin-left: 30px;
`;

export const SidebarTitle = styled.div`
  font-size: 24px;
  font-family: "Crimson Text", serif;
  color: ${theme.color.primary};;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Widget = styled.div``;

export const Summary = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  label {
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    span {
      font-weight: 600;
      font-family: "Crimson Text", serif;
      color: ${theme.color.primary};;
      font-size: 18px;
    }

    i {
      font-size: 20px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.045s ease;
    }
  }

  .bx-chevron-down {
    color: ${theme.color.primary};;
  }
`;

export const Accord = styled.div`
  padding: 10px;
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.45s ease;

  input:checked ~ & {
    max-height: 1000px;
    opacity: 1;
    visibility: visible;
  }

  input:checked ~ label i {
    transform: rotate(180deg);
  }
`;

export const Wapper = styled.ul`
  padding-left: 15px;
  margin-top: 20px;
  height: 230px;

  li {
    list-style: none;
    text-decoration: none;
    color: ${theme.color.primary};;
    cursor: pointer;
    font-size: 17px;

    a {
      font-family: "Crimson Text", serif;
      opacity: 0.8;
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const ListItem = styled.li``;

export const CategoryContent = styled.div``;

export const Sorter = styled.div`
  .menu-trigger {
    i {
      display: block;
    }
  }

  .grey-color {
    color: #696969;
  }
`;

export const Left = styled.div`
  font-size: 16px;
  font-family: "Crimson Text", serif;

`;

export const ProductSection = styled.section``;

export const ListProduct = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
align-items: center;
text-align: center;
justify-content: center;
padding: 35px;
padding-left: 20px;
`;

export const ProductItem = styled.div`
    background-color: transparent;
    padding: 10px;
    border-radius: 8px;
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
    color: ${theme.color.primary};;
}
`;

export const ProductImage = styled.img`
    width: 80%;
    height: auto;
    filter: drop-shadow(0 10px 15px #0009);
    padding-bottom: 10px;
`;

export const ItemName = styled.p`
  color: ${theme.color.primary};;
  font-size: 17px;
  font-weight: 600;
  font-family: "Crimson Text", serif;
`;

export const Price = styled.p`
    font-family: "Poppins", serif;
    color: #45413E;
    font-weight: 600;
    font-size: 16px;
    margin-top: 10px
`;

export const AddCartButton = styled.button`
    background-color: ${theme.color.primary};;
    color: ${theme.color.white};;
    padding: 12px 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
   
    
    
    &:hover {
        font-size: 14px;
        transition: all .45s ease;
    }   

`;

export const AddLink = styled.a`
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
`;

export const MoreButton = styled.button`
    border-width: 0;
   
    margin: 60px 0 100px;
    text-align: center;

   a {
    text-decoration: none;
    color: ${theme.color.white};;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    padding: 15px 20px;
    background-color: ${theme.color.primary};;
    border-radius:8px;
   }
        
`;

export const ButtonContainer = styled.div`
  button {
    border-width: 0;
    margin: 30px auto;
  }
`;

export const LoadMoreButton = styled.button`
  background: none;
  padding: 0;
  border: none;
  
`;

export const MoreLink = styled.a`
  padding: 15px 20px;
  background-color: ${theme.color.primary};;
  border-radius: 8px;
  text-decoration: none;
  color: ${theme.color.white};;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;

`;

export const PageLink = styled.a`
  margin: 0 5px;
  padding: 5px 10px;
  color: ${theme.color.primary};;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #101010;
  }
`;

export const Paging = styled.div`
margin-left: 430px;
margin-bottom: 40px;
`;




