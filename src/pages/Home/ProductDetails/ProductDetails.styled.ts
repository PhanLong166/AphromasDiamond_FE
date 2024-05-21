import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
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
  &.selected {
    background-color: #fbf6ef;
    border-radius: 20px;
    border: solid 2px #dac0a3;
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
  height: 585px;
  overflow: hidden;
  background-color: #fbf6ef;
  border-radius: 30px;
  img {
    width: 100%;
    height: 585px;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 0;
  color: #102c57;
  font-size: 24px;
  font-family: "Playfair Display", serif;
  padding-bottom: 8px;
`;

export const ProductRating = styled.span`
  color: #D8A25A;
  font-size: 20px;
`;

export const ProductMetal = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  span {
    color: #102c57;
    font-family: "Crimson Text", serif;
    font-weight: 600;
    font-size: 15px;
  }
`;

export const ProductCarat = styled(ProductMetal)``;

export const RingSizeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RingSizeSelect = styled.select`
  padding: 8px 20px 8px 5px;
  font-size: 12px;
  color: #102c57;
  opacity: .7;
  border-radius: 10px;
`;

export const RingSizeHelp = styled.a`
  text-decoration: none;
  color: #102c57;
  font-size: 12px;
  font-weight: bold;
`;

export const SelectButton = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 400px;
  background-color: #dac0a3;
  border-radius: 20px;
`;

export const SelectionTitle = styled.h5`
  margin: 0;
  font-size: 14px;
  text-align: left;
  font-family: "Playfair Display", sans-serif;
  color: #102c57;
`;

export const SelectName = styled.p`
  margin: 0;
  font-size: 12px;
  text-align: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  padding-left: 12px;
`;

export const ArrowIcon = styled.span`
  margin-left: 10px;
  color: #fff;
  i {
    font-size: 25px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  gap: 10px;
`;

export const Button = styled.button`
  flex-grow: 1;
  padding: 20px;
  text-align: center;
  background-color: #102c57;
  color: #f8f0e5;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  font-family: "Poppins" sans-serif;
  font-weight: bold;
  &:hover {
    background-color: #D8A25A;
    transition: all .45s ease;
  }
`;

export const Shipping = styled.div`
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
    color: #102c57;
    font-family: "Crimson Text", sans-serif;
    font-size: 16px;
    font-weight: bold;
  }
  i {
    color: #102c57;
    padding-right: 5px;
  }
  .delivery {
    font-weight: 500;
  }
`;

export const CurrentPrice = styled.span`
  font-size: 25px;
  font-family: "Inika", serif;
  font-weight: bold;
  color: #102c57;
`;

export const BeforePrice = styled.span`
  color: #d9d9d9;
  text-decoration: line-through;
  font-family: "Inika", serif;
`;

export const Discount = styled.span`
  display: inline-block;
  width: 50px;
  font-size: 18px;
  padding: 8px;
  background-color: #102c57;
  color: #fff;
  margin-left: -10px;
  text-align: center;
  border-radius: 5px;
  line-height: 1;
  font-family: "Inika", serif;
`;

