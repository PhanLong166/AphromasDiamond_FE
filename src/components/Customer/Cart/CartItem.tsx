/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, Button, Flex, Tag } from 'antd'; // Import Select nếu bạn sử dụng từ ant design
import { useNavigate } from "react-router-dom";
import config from "@/config";
import * as Styled from './CartItem.styled';
import { useEffect, useState } from 'react';
import { getDiamondDetails } from '@/services/diamondAPI';

type CartItemProps = {
  OrderLineID: number;
  DiamondID: number;
  name: string;
  designer: string;
  price: number;
  images: string;
  type: string;
  handleRemove?: () => void
}
const CartItem = ({
  type,
  name,
  designer,
  price,
  images,
  DiamondID,
  handleRemove
}: CartItemProps) => {
  const navigate = useNavigate();
  const [diamond, setDiamond] = useState<any>();

  const handleView = () => {
    navigate(config.routes.public.diamondDetail.replace(':id', `${DiamondID}`));
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDiamondDetails(DiamondID);
      setDiamond(data.data);
    }

    fetchData();
  }, [])

  return (
    <Styled.ItemContainer>
      <Styled.ActionText>
        <Flex gap="small" wrap>
          <Button type="text" onClick={handleView}>VIEW</Button>
          <Button type="text" onClick={handleRemove}>REMOVE</Button>
        </Flex>
      </Styled.ActionText>

      <Styled.ItemDetails>
        <Styled.ItemInfo>
          {/* <ItemImage src={image} alt='default-image.jpg' /> */}
          {images && images.length > 0 && (
            <Styled.ItemImage src={images} alt='Image.png' />
          )}
        </Styled.ItemInfo>
        <Styled.ItemDescription>
          <Styled.ProductDescription>
            <Styled.ItemType>{name}</Styled.ItemType>
            <Styled.Description>By {designer}</Styled.Description>
            {type === 'diamond' ? (
              <div>
                {diamond ? (
                  [diamond.Clarity, diamond.Color, diamond.Cut, diamond.WeightCarat].map((property, index) => (
                    <Tag 
                      key={index} 
                      bordered={false}
                      color='processing'
                    >
                      {property}
                    </Tag>
                  ))
                ) : ''}
              </div>
            ) : (
              <>
                <div>{name}</div>
                <Select
                  placeholder="Ring Size"
                  style={{ width: 120, marginTop: '3rem' }}
                // options={ringOptions}
                />
              </>
            )}
          </Styled.ProductDescription>
        </Styled.ItemDescription>
        <Styled.ItemPrice>${price}</Styled.ItemPrice>
      </Styled.ItemDetails>

    </Styled.ItemContainer>
  );
};


export default CartItem;
