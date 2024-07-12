import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import PromoCodeSection from "../../../Customer/Checkout/PromoCode";
import { items } from "../../Data/data";
import { showAllOrderLineForAdmin } from "@/services/orderLineAPI";
import { showDiamonds } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";
interface CartItemProps {
  name: string;
  image: string;
  sku: string;
  price: string;
}

const CartItem: React.FC<CartItemProps> = ({ name, image, sku, price }) => (
  <CartItemContainer>
    <div>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
    </div>
    <ItemInfo>
      <ItemName>{name}</ItemName>
      <ItemSku>{sku}</ItemSku>
    </ItemInfo>
    <ItemPrice>{price}</ItemPrice>
  </CartItemContainer>
);

const Summary: React.FC = () => {
  const [discount, setDiscount] = useState(0);
  const [shippingCost] = useState(0);
  const [orderLineItems, setOrderLineItems] = useState<any[]>([]);
  const [diamondList, setDiamondList] = useState<any[]>([]);
  const onApplyVoucher = (discount: number) => {
    setDiscount(discount);
  };

  const fetchData = async () => {
    try {
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
        OrderLineItem.CustomerID === 1
        && OrderLineItem.OrderID === null
        && (OrderLineItem.DiamondID !== null || OrderLineItem.ProductID !== null)
      ))
      setOrderLineItems(getOrderLineItems);

      const response = await showDiamonds({page: 1});
      setDiamondList(response.data.data);
      console.log(diamondList);
      console.log(getOrderLineItems);
    } catch (error: any) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, [])

  const calculateTotal = (
    subtotal: number,
    discount: number,
    shippingCost: number
  ) => {
    let newShippingCost = shippingCost;
    if (items.length < 2) {
      newShippingCost = 15;
      console.log(shippingCost);
    } else {
      newShippingCost = 0;
    }

    return subtotal - (subtotal * discount) / 100 + newShippingCost;
  };

  const subtotalNumber = items.reduce((acc, item) => {
    return acc + parseFloat(item.price.replace(/[$,]/g, ""));
  }, 0);
  const total = calculateTotal(subtotalNumber, discount, shippingCost).toFixed(
    0
  );

  return (
    <SummarySection>
      <ItemNumber>
        <NumberItem>{items.length} ITEMS</NumberItem>
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
        const diamond = diamondList.find(d => d && d.DiamondID === item.DiamondID);
        return (
          <CartItem
            key={index}
            name={diamond ? diamond.Name : item.name}
            image={diamond ? getImage(diamond.usingImage[0].UsingImageID) : item.image}
            sku={item.sku}
            price={diamond ? diamond.Price : 0}
          />
        );
      })}
      <EditTotal>
        {" "}
        {discount > 0 && (
          <AppliedPromo>
            <p>Discount: {discount}%</p>
          </AppliedPromo>
        )}
      </EditTotal>
      <EditTotal>
        <p>Shipping: {items.length < 2 ? "$15" : "Free"}</p>
      </EditTotal>
      <EditTotal>
        <p>Subtotal: ${subtotalNumber}</p>
      </EditTotal>

      <PromoCodeSection onApplyVoucher={onApplyVoucher} />
      <EditTotal1>
        <p>Total: ${total}</p>
      </EditTotal1>
    </SummarySection>
  );
};

export default Summary;

const AppliedPromo = styled.div`
  margin-top: 10px;
`;

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
  word-spacing: 290px;
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
