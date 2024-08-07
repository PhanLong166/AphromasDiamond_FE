/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import PromoCodeSection from "../../../Customer/Checkout/PromoCode";
import { showAllOrderLineForAdmin } from "@/services/orderLineAPI";
import { showAllDiamond } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";
import { showAllProduct } from "@/services/jewelryAPI";
import useAuth from "@/hooks/useAuth";
import { getCustomer } from "@/services/accountApi";
import { useAppDispatch } from "@/hooks";
import { orderSlice } from "@/layouts/MainLayout/slice/orderSlice";
interface CartItemProps {
  name: string;
  image: string;
  sku?: string;
  price: string;
}

const CartItem: React.FC<CartItemProps> = ({ name, image, sku, price }) => (
  <CartItemContainer>
    <div>
      <ImageContainer>
        <img src={image} alt="Image" />
      </ImageContainer>
    </div>
    <ItemInfo>
      <ItemName>{name}</ItemName>
      <ItemSku>{sku}</ItemSku>
    </ItemInfo>
    <ItemPrice>${price}</ItemPrice>
  </CartItemContainer>
);

const Summary: React.FC = () => {
  const [discount, setDiscount] = useState(0);
  const [voucherID, setVoucherID] = useState<number | undefined>(undefined);
  const [orderLineItems, setOrderLineItems] = useState<any[]>([]);
  const [diamondList, setDiamondList] = useState<any[]>([]);
  const [productList, setProductList] = useState<any[]>([]);
  const { AccountID } = useAuth();
  const [customer, setCustomer] = useState<any>();
  const dispatch = useAppDispatch()

  const onApplyVoucher = (discount: number, voucherID: number) => {
    setDiscount(discount);
    setVoucherID(voucherID);
    localStorage.setItem("selectedVoucher", JSON.stringify({ discount, voucherID }));
  };
  console.log(discount);
  console.log(voucherID);

  const fetchData = React.useCallback(async () => {
    try {
      const customerResponse = await getCustomer(AccountID || 0);
      setCustomer(customerResponse.data.data);

      const { data } = await showAllOrderLineForAdmin();
      if (data.statusCode !== 200) throw new Error();

      const getOrderLineItems = data.data.filter((
        OrderLineItem: {
          CustomerID: number,
          OrderID: number | null
          DiamondID: number | null,
          ProductID: number | null
        }
      ) => (
        OrderLineItem.CustomerID === customer?.CustomerID
        && OrderLineItem.OrderID === null
        && (OrderLineItem.DiamondID !== null || OrderLineItem.ProductID !== null)
      ));
      setOrderLineItems(getOrderLineItems);

      //Get diamond list
      const response = await showAllDiamond();
      setDiamondList(response.data.data);

      //Get product list
      const productResponse = await showAllProduct();
      setProductList(productResponse.data.data);

      //Display result
      console.log('Cart: ', orderLineItems);
    } catch (error: any) {
      console.error(error);
    }
  }, [AccountID, customer?.CustomerID]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const calculateTotal = (
    subtotal: number,
    discount: number,
    shippingCost: number
  ) => {
    return subtotal - (subtotal * discount) / 100 + shippingCost;
  };
  // const subtotalNumber = items.reduce((acc, item) => {
  //   return acc + parseFloat(item.price.replace(/[$,]/g, ""));
  // }, 0);

  const shippingCost = orderLineItems.length === 1 ? 15 : 0;
  dispatch(orderSlice.actions.setShippingfee(shippingCost));

  const subtotalNumber = () => {
    let temp = 0;
    orderLineItems.map(async (item) => {
      temp += item.DiscountPrice;
    })
    return temp;
  }

  const total = calculateTotal(subtotalNumber(), discount, shippingCost).toFixed(2);
  dispatch(orderSlice.actions.setTotal(Number(total)));
  return (
    <SummarySection>
      <ItemNumber>
        <NumberItem>{orderLineItems.length} ITEMS</NumberItem>
        <Link to="/cart">
          <p
            style={{
              cursor: "pointer",
              fontSize: "13px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            EDIT CART
          </p>
        </Link>
      </ItemNumber>
      {orderLineItems.map((item: any, index: any) => {
        if (item?.DiamondID) {
          const diamond = diamondList.find(d => d && d.DiamondID === item.DiamondID);
          return (
            <CartItem
              key={index}
              name={diamond ? diamond.Name : item.name}
              image={diamond ? getImage(diamond.usingImage[0]?.UsingImageID) : item.image}
              sku={item.sku}
              price={diamond ? diamond.Price : 0}
            />
          );
        } else {
          const product = productList.find(p => p && p.ProductID === item.ProductID);
          return (
            <CartItem
              key={index}
              name={product ? product.Name : ""}
              image={product ? getImage(product.UsingImage[0]?.UsingImageID) : ""}
              price={item.DiscountPrice}
            />
          )
        }
      })}
      <EditTotal>
        {" "}
        {discount > 0 && (
          <>
            <p>Discount {`(${discount}%)`}: </p>
            <p>{`-$${(subtotalNumber() * discount / 100).toFixed(2)}`}</p>
          </>
        )}
      </EditTotal>
      <EditTotal>
        <p>Shipping: </p>
        <p>{orderLineItems.length === 1 ? "$15.00" : "Free"}</p>
      </EditTotal>
      <EditTotal>
        <p>Subtotal: </p>
        <p>${subtotalNumber().toFixed(2)}</p>
      </EditTotal>

      <PromoCodeSection onApplyVoucher={onApplyVoucher} />
      <EditTotal1>
        <p>Total:</p>
        <p> ${total}</p>
      </EditTotal1>
    </SummarySection>
  );
};

export default Summary;

const SummarySection = styled.section`
  display: flex;
  flex: 1;
  line-height: 53px;
  flex-direction: column;
  padding: 35px 20px;
  border: 1px solid #ddd;
`;

const ItemNumber = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 20px; */
`;

const NumberItem = styled.p`
  font-size: 13px;
  font-family: Poppins, sans-serif;
`;

const EditTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
`;

const EditTotal1 = styled(EditTotal)`
  font-size: 17px;
  font-weight: bold;
  word-spacing: 313px;
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  /* padding-top: 18px; */
  //   margin-top: 10px; */
  border-bottom: 2px solid #e8e2e2;
  img {
    max-width: 100px;
  }
  /* div {
     flex: 1;
  } */
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.p`
  /* font-weight: bold; */
  font-size: 17px;
`;

const ItemSku = styled.p`
  font-size: 17px;
`;

const ItemPrice = styled.p`
  color: #333;
  font-size: 17px;
`;
