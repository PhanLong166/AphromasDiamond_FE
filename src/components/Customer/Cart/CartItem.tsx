/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Tag } from 'antd'; // Import Select nếu bạn sử dụng từ ant design
import { useNavigate } from "react-router-dom";
import config from "@/config";
import * as Styled from './CartItem.styled';
import { useEffect, useState } from 'react';
import { getDiamondDetails } from '@/services/diamondAPI';
import { getProductDetails } from '@/services/productAPI';
import { getImage } from '@/services/imageAPI';
import { OrderLineDetail } from '@/services/orderLineAPI';
import { showAllSize } from '@/services/sizeAPI';

type CartItemProps = {
  OrderLineID: number;
  DiamondID?: number;
  ProductID?: number;
  name: string;
  designer: string;
  price: number;
  images: string;
  type: string;
  handleRemove?: () => void
}
const CartItem = ({
  // type,
  name,
  designer,
  price,
  images,
  DiamondID,
  ProductID,
  OrderLineID,
  handleRemove
}: CartItemProps) => {
  const navigate = useNavigate();
  const [diamond, setDiamond] = useState<any>();
  const [product, setProduct] = useState<any>();
  const [orderline, setOrderline] = useState<any>();
  const [sizes, setSizes] = useState<any[]>([]);

  const handleView = () => {
    navigate(config.routes.public.diamondDetail.replace(':id', `${DiamondID}`));
  }

  useEffect(() => {
    const fetchOrderlineData = async () => {
      const { data } = await OrderLineDetail(OrderLineID ? OrderLineID : 0);
      setOrderline(data.data);
    }
    fetchOrderlineData();

    const fetchDiamondData = async () => {
      const { data } = await getDiamondDetails(DiamondID ? DiamondID : 0);
      setDiamond(data.data);
    }
    fetchDiamondData();

    const fetchProductData = async () => {
      const { data } = await getProductDetails(ProductID ? ProductID : 0);
      setProduct(data.data);
    }
    fetchProductData();

    const fetchSizesData = async () => {
      const { data } = await showAllSize();
      setSizes(data.data);
    }
    fetchSizesData();
  }, [])

  return (
    <Styled.ItemContainer>
      <Styled.ActionText>
        <Flex gap="small" wrap>
          <Button type="text" onClick={handleView}>VIEW</Button>
          <Button type="text" onClick={handleRemove}>REMOVE</Button>
        </Flex>
      </Styled.ActionText>

      {diamond && (
        <Styled.ItemDetails>
          <Styled.ItemInfo>
            {/* <ItemImage src={image} alt='default-image.jpg' /> */}
            {images && images.length > 0 && (
              <Styled.ItemImage src={images} alt='Image' />
            )}
          </Styled.ItemInfo>
          <Styled.ItemDescription>
            <Styled.ProductDescription>
              <Styled.ItemType>{name}</Styled.ItemType>
              <Styled.Description>By {designer}</Styled.Description>
              <div>
                {diamond ? (
                  [
                    diamond.Clarity,
                    diamond.Color,
                    diamond.Cut,
                    diamond.WeightCarat
                  ].map((property, index) => (
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
            </Styled.ProductDescription>
          </Styled.ItemDescription>
          <Styled.ItemPrice>${price}</Styled.ItemPrice>
        </Styled.ItemDetails>
      )}

      {product && (
        <Styled.ItemDetails>
          <Styled.ItemInfo>
            {getImage(product?.UsingImage[0]?.UsingImageID) && (
              <Styled.ItemImage src={getImage(product?.UsingImage[0]?.UsingImageID)} alt='Image' />
            )}
          </Styled.ItemInfo>
          <Styled.ItemDescription>
            <Styled.ProductDescription>
              <Styled.ItemType>{product?.Name}</Styled.ItemType>
              <Styled.Description>By {product?.Brand}</Styled.Description>
              <div>
                {orderline ? (
                  // [
                  //   orderline?.Inscription, 
                  //   orderline?.SizeID, 
                  //   orderline?.JewelrySettingVariantID,
                  // ].map((property, index) => (
                  //   <Tag
                  //     key={index}
                  //     bordered={false}
                  //     color='processing'
                  //   >
                  //     {property}
                  //   </Tag>
                  // ))
                  <>
                    {orderline?.Inscription && (
                      <Tag bordered={false} color='processing'>
                        Inscription: {orderline?.Inscription}
                      </Tag>
                    )}
                    {orderline?.SizeID && (
                      <Tag bordered={false} color='processing'>
                        Size: {sizes.find((size: any) => size.SizeID === orderline?.SizeID)?.SizeValue}
                      </Tag>
                    )}
                    {orderline?.JewelrySettingVariantID && (
                      <Tag bordered={false} color='processing'>
                      {
                        product?.JewelrySetting?.jewelrySettingVariant?.
                          find((item: any) => item.JewelrySettingVariantID === orderline?.JewelrySettingVariantID)?.
                          materialJewelry?.Name
                      }
                    </Tag>
                    )}
                  </>

                ) : ''}
              </div>
            </Styled.ProductDescription>
          </Styled.ItemDescription>
          <Styled.ItemPrice>
            ${
              orderline?.DiscountPrice
            }
          </Styled.ItemPrice>
        </Styled.ItemDetails>
      )}

    </Styled.ItemContainer>
  );
};


export default CartItem;
