import styled from "styled-components";
import { Select, Button, Flex } from 'antd'; // Import Select nếu bạn sử dụng từ ant design

interface CartItemProps {
    name: string;
    image: string;
    sku: string;
    description: string;
    price: string;
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ringOptions: any [];
  }
  const CartItem: React.FC<CartItemProps> = ({ name, image, sku, description, price, type, ringOptions })=> {
  return (
    <ItemContainer>
      <ActionText>
        <Flex gap="small" wrap>
          <Button type="text">VIEW</Button>
          <Button type="text">REMOVE</Button>
        </Flex>
      </ActionText>
      
      <ItemDetails>
        <ItemInfo>
          <ItemImage src={image} alt={name} />
        </ItemInfo>
        <ItemDescription>
          <ProductDescription>
            <ItemType>{name}</ItemType>
            <Description>{description}</Description>
            {type === 'diamond' ? (
              <>
                <div>{sku}</div>
                <AddOptions>
                  <AddOption>
                    <Flex gap="small" wrap>
                      <Button type="text">+Add a Ring</Button>
                    </Flex>
                  </AddOption>
                  <AddOption>
                    <Flex gap="small" wrap>
                      <Button type="text">+Add a Pendant</Button>
                    </Flex>
                  </AddOption>
                </AddOptions>
              </>
            ) : (
              <>
                <div>{sku}</div>
                <Select
                  placeholder="Ring Size"
                  style={{ width: 120, marginTop: '3rem' }}
                  options={ringOptions}
                />
              </>
            )}
          </ProductDescription>
        </ItemDescription>
        <ItemPrice>{price}</ItemPrice>
      </ItemDetails>
      
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  
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

const ActionText = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  letter-spacing: 1.95px;
  align-self: flex-end;
  font: 300 13px/150% Poppins, sans-serif;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding: 20px;

`;

const ItemInfo = styled.div`
  align-items: center;
`;

const Description = styled.div`

`;

const ItemImage = styled.img`
  width: 192px;
  height: 153px;
  aspect-ratio: 1.43;
  object-fit: contain;
  align-self: center;;
`;

const ItemDescription = styled.div`
    display: flex;
  flex-direction: column;
  gap: 46px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProductDescription = styled.div`
  letter-spacing: 0.15px;
  font: 400 15px/1.5 Poppins, sans-serif;
`;

const ItemType = styled.div`
  font: 600 15px/150% Poppins, sans-serif;
  padding-bottom: 10px;
  //  margin-left: 13px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const AddOptions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 3rem;
`;

const AddOption = styled.div`
  font: 300 10px/150% Poppins, sans-serif;
  border-radius: 53px;
  border: 1px dashed rgba(0, 0, 0, 1);
  padding: 0px 15px;

  &:hover {
    color: #fff;
    background-color: #102c57;
  }

  &.active {
    font-weight: 600;
    color: #fff;
    background-color: #102c57;
  }
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ItemPrice = styled.div`
  
  letter-spacing: 0.6px;
  font: 400 15px/150% Poppins, sans-serif;
  //  margin-top: 196px;
  margin-left: 106px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default CartItem;
