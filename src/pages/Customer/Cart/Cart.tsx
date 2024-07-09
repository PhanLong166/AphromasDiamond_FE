/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import { Link } from "react-router-dom";
import * as CartStyled from "./Cart.styled";
// import { Button, Flex, Select } from "antd";
import PromoCodeSection from "../../../components/Customer/Checkout/PromoCode";
import { useDocumentTitle } from "@/hooks";
import { items } from "../../../components/Customer/Data/data";
import { useEffect, useState } from "react";
import CartItem from "@/components/Customer/Cart/CartItem";
import { showAllOrderLineForAdmin } from "@/services/orderLineAPI";
import { getDiamondDetails, getImageDiamond } from "@/services/diamondAPI";

const fetchCartItemsWithDetails = async () => {
  try {
    // Gọi API để lấy tất cả các dòng đặt hàng
    const { data } = await showAllOrderLineForAdmin();
    
    // Lọc ra các sản phẩm có OrderID là null
    const cartItems = data.data.filter(
      (cartItem: { OrderID: null }) => cartItem.OrderID === null
    );
    
      
    // Dùng Promise.all để đảm bảo tất cả các yêu cầu API được thực hiện và trả về đầy đủ trước khi tiếp tục
    const detailedCartItems = await Promise.all(
      cartItems.map(async (item: { DiamondID: number }) => {
        // Gọi API để lấy thông tin chi tiết về kim cương dựa vào DiamondID
        // console.log(item)
        const { data: diamondDetails } = await getDiamondDetails(
          item.DiamondID
        );
        console.log(diamondDetails.data)
        // Dùng dữ liệu của diamond để chọn type vì Swagger chưa có type diamond với ring :)
        const type = diamondDetails.data.WeightCarat ? "diamond" : "ring";
        // Kết hợp thông tin chi tiết vào từng item trong giỏ hàng
        return { ...item, diamondDetails: diamondDetails.data, type };
      })
      
    );
    
    // Trả về danh sách các sản phẩm trong giỏ hàng kèm theo thông tin chi tiết về kim cương
    return detailedCartItems;
  } catch (error) {
    console.log("errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
  }
};


const Cart = () => {
  useDocumentTitle("Cart | Aphromas Diamond");

  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const loadCartItems = async () => {
      const items = await fetchCartItemsWithDetails();
      // Check if items is undefined before calling setCartItems
      if(items){
        setCartItems(items);
      }
    };
    
    loadCartItems();
  }, []);

  const [discount, setDiscount] = useState(0);
  const onApplyVoucher = (discount: number) => {
    setDiscount(discount);
  };

  const calculateTotal = (
    subtotal: number,
    discount: number,
    shippingCost: number
  ) => {
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
            <CartStyled.CountCart>
              MY CART {cartItems.length} ITEMS
            </CartStyled.CountCart>

            <CartStyled.MainSection>
              <CartStyled.Column>
                {cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    DiamondID={item.DiamondID}
                    description={
                      item.diamondDetails.Description ||
                      "No description available"
                    }
                    name={
                      item.diamondDetails.Name || "No description available"
                    }
                    price={item.diamondDetailsPrice}
                    type={item.type}
                    // name={item.diamondDetails.Name || "No description available"}
                    // description={item.diamondDetails.Description || "No description available"}

                    // sku={item.diamondDetails.DiamondID}
                    // price={item.diamondDetailsPrice}
                    // type={item.type} // Loại sản phẩm: 'diamond' hoặc 'ring'
                    // ringOptions={[
                    //   { value: "1", label: "4" },
                    //   { value: "2", label: "4.5" },
                    //   { value: "3", label: "5" },
                    //   { value: "4", label: "5.5" },
                    //   { value: "5", label: "6" },
                    //   { value: "6", label: "6.5" },
                    // ]}
                  />
                ))}
              </CartStyled.Column>
              <CartStyled.Sidebar>
                <CartStyled.SummaryContainer>
                  <CartStyled.SummaryDetails>
                    {" "}
                    {discount > 0 && (
                      <CartStyled.AppliedPromo>
                        Discount:
                        <CartStyled.AppliedPromoValuve>
                          {discount}%
                        </CartStyled.AppliedPromoValuve>
                      </CartStyled.AppliedPromo>
                    )}
                    <CartStyled.SummaryRow>
                      <CartStyled.SummaryLabel>
                        Shipping
                      </CartStyled.SummaryLabel>
                      <CartStyled.SummaryValue>
                        {items.length < 2 ? "15$" : "Free"}
                      </CartStyled.SummaryValue>
                    </CartStyled.SummaryRow>
                    <CartStyled.SummaryRow>
                      <CartStyled.SummaryLabel>
                        Subtotal
                      </CartStyled.SummaryLabel>
                      <CartStyled.SummaryValue>
                        ${subtotal}
                      </CartStyled.SummaryValue>
                    </CartStyled.SummaryRow>
                    <PromoCodeSection onApplyVoucher={onApplyVoucher} />
                    <CartStyled.SummaryTotal>
                      <CartStyled.TotalLabel>Total</CartStyled.TotalLabel>
                      <CartStyled.TotalValue>${total}</CartStyled.TotalValue>
                    </CartStyled.SummaryTotal>
                  </CartStyled.SummaryDetails>
                  <Link to="/checkout">
                    <CartStyled.CheckoutButton>
                      CHECKOUT
                    </CartStyled.CheckoutButton>
                  </Link>
                  <CartStyled.OrDivider>OR</CartStyled.OrDivider>
                  <Link to="/thanks-page">
                    <CartStyled.PaymentMethodImage
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCart%2Fvnpay-logo-vinadesign-25-12-57-55.jpg?alt=media&token=5c8bd77d-6a86-478e-83d7-44d4e1227e5c"
                      alt="Credit card icons"
                    />
                  </Link>
                  <Link to="thanks-page">
                    <CartStyled.PaymentMethodImage
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCart%2Fimage%2022%20(1).png?alt=media&token=086cc881-2091-4405-8a2e-6fc25d6e6c77"
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
