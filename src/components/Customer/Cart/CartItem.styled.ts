import { theme } from "@/themes";
import styled from "styled-components";

export const ItemContainer = styled.div`
  
  background-color: #fff;
  box-shadow: rgba(27, 27, 27, 0.17) 0px 2px 5px;
  //  border: 1px solid rgba(0, 0, 0, 1);
  border: 1px solid rgb(232 226 226);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  color: #000;
  //  padding: 16px 39px;
  margin-top: 20px;
  /* height: 210px; */
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const ActionText = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  letter-spacing: 1.95px;
  align-self: flex-end;
  font: 300 13px/150% Poppins, sans-serif;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;

`;

export const ItemInfo = styled.div`
  align-items: center;
`;

export const Description = styled.div`

`;

export const ItemImage = styled.img`
  width: 192px;
  height: 153px;
  aspect-ratio: 1.43;
  object-fit: contain;
  align-self: center;;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const ProductDescription = styled.div`
  letter-spacing: 0.15px;
  font: 400 15px/1.5 Poppins, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemType = styled.div`
  font: 600 15px/150% Poppins, sans-serif;
  padding-bottom: 10px;
  //  margin-left: 13px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

// export const AddOptions = styled.div`
//   display: flex;
//   gap: 20px;
//   margin-top: 3rem;
// `;

// export const AddOption = styled.div`
//   font: 300 10px/150% Poppins, sans-serif;
//   border-radius: 53px;
//   border: 1px dashed rgba(0, 0, 0, 1);
//   padding: 0px 15px;

//   &:hover {
//     color: #fff;
//     background-color: #102c57;
//   }

//   &.active {
//     font-weight: 600;
//     color: #fff;
//     background-color: #102c57;
//   }
//   @media (max-width: 991px) {
//     padding: 0 20px;
//   }
// `;

export const ItemPrice = styled.div`
  
  letter-spacing: 0.6px;
  font: 600 16px/150% Poppins, sans-serif;
  color: ${theme.color.primary};
  margin-left: 106px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;
