// import * as React from 'react';
import { Link } from "react-router-dom";
import * as CartStyled from './Cart.styled';
// import { Button, Flex, Select } from "antd";
import PromoCodeSection from "../../../components/Customer/Checkout/PromoCode";
import { useDocumentTitle } from "@/hooks";
import { items } from "../../../components/Customer/Checkout/Data/data";
import { useState } from "react";
import CartItem from "@/components/Customer/Cart/CartItem";

const Cart = () => {
  useDocumentTitle('Cart | Aphromas Diamond');
  
  const [discount, setDiscount] = useState(0);
  const onApplyVoucher = (discount: number) => {
    setDiscount(discount);
  };

  const calculateTotal = (subtotal: number, discount: number, shippingCost: number) => {
    return subtotal - (subtotal * discount) / 100 + shippingCost;
  };

  const subtotal = items.reduce((acc, item) => {
    return acc + parseFloat(item.price.replace(/[$,]/g, ""));
  }, 0);

  const shippingCost = items.length < 2 ? 15 : 0;
  const total = calculateTotal(subtotal, discount, shippingCost).toFixed(0);

  return (
    <>
      <main>
        <CartStyled.ContainerHeader>
          <CartStyled.Header>Shopping Cart</CartStyled.Header>
        </CartStyled.ContainerHeader>
        <CartStyled.Container>
          <CartStyled.InnerContainer>
            <CartStyled.ContinueShopping>
              <span>
                <i className="fa-solid fa-chevron-up fa-rotate-270"></i>
              </span>
              <Link to={"/all"}>Continue Shopping</Link>
            </CartStyled.ContinueShopping>
            <CartStyled.CountCart>MY CART {items.length} ITEMS</CartStyled.CountCart>

            
            <CartStyled.MainSection>
              <CartStyled.Column>
              {items.map((item, index) => (
          <CartItem
            key={index}
            name={item.name}
            description={item.description || "No description available"}
            image={item.image}
            sku={item.sku}
            price={item.price}
            type={item.type} // Loại sản phẩm: 'diamond' hoặc 'ring'
            ringOptions={[
              { value: "1", label: "4" },
              { value: "2", label: "4.5" },
              { value: "3", label: "5" },
              { value: "4", label: "5.5" },
              { value: "5", label: "6" },
              { value: "6", label: "6.5" },
            ]}
          />
        ))}                         
              </CartStyled.Column>
              <CartStyled.Sidebar>
                
                <CartStyled.SummaryContainer>
                  <CartStyled.SummaryDetails>
                    
                    {" "}
        {discount > 0 && (
          <CartStyled.AppliedPromo>Discount: 
            <CartStyled.AppliedPromoValuve>{discount}%</CartStyled.AppliedPromoValuve>
          </CartStyled.AppliedPromo>
        )}
                     <CartStyled.SummaryRow>
                      <CartStyled.SummaryLabel>Shipping</CartStyled.SummaryLabel>
                      <CartStyled.SummaryValue>{items.length < 2 ? "15$" : "Free"}</CartStyled.SummaryValue>
                    </CartStyled.SummaryRow>
                    <CartStyled.SummaryRow>
                   
                      <CartStyled.SummaryLabel>Subtotal</CartStyled.SummaryLabel>
                      <CartStyled.SummaryValue>${subtotal}</CartStyled.SummaryValue>
                    </CartStyled.SummaryRow>
                   
                    <PromoCodeSection onApplyVoucher={onApplyVoucher}/>
                    <CartStyled.SummaryTotal>
                      <CartStyled.TotalLabel>Total</CartStyled.TotalLabel>
                      <CartStyled.TotalValue>${total}</CartStyled.TotalValue>
                    </CartStyled.SummaryTotal>
                  </CartStyled.SummaryDetails>
                  <Link to="/checkout">
                    <CartStyled.CheckoutButton>CHECKOUT</CartStyled.CheckoutButton>
                  </Link>
                  <CartStyled.OrDivider>OR</CartStyled.OrDivider>
                  <Link to="/thanks-page">
                    <CartStyled.PaymentMethodImage
                      src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg"
                      alt="Credit card icons"
                    />
                  </Link>
                  <Link to="thanks-page">
                    <CartStyled.PaymentMethodImage
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FOrderDetails%2Fimage%2022.png?alt=media&token=1220c865-58a2-48d2-9112-e52cc3c11579"
                      alt="Credit card icons"
                    />
                  </Link>
                </CartStyled.SummaryContainer>
              </CartStyled.Sidebar>
            </CartStyled.MainSection>
            
            <CartStyled.ShippingSection>
              <CartStyled.ShippingIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6933788e6c8896639db19bae2d37194ec1e54bd5cf3292e8cc54f2247afd9959?apiKey=5672b1354002436f9bda9e8bc0a69a3b&"
                alt="Shipping icon"
              />
              <CartStyled.ShippingText>Shipping</CartStyled.ShippingText>
              <CartStyled.ShippingDetails>
                Free Shipping Worldwide <br />
                Overnight Shipping
              </CartStyled.ShippingDetails>
            </CartStyled.ShippingSection>
          </CartStyled.InnerContainer>
        </CartStyled.Container>
      </main>
    </>
  );
};

export default Cart;


