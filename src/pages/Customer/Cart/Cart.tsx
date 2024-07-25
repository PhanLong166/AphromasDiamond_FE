/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import * as CartStyled from "./Cart.styled";
// import { Button, Flex, Select } from "antd";
import PromoCodeSection from "../../../components/Customer/Checkout/PromoCode";
import { useAppDispatch, useDocumentTitle } from "@/hooks";
import { useEffect, useState } from "react";
import CartItem from "@/components/Customer/Cart/CartItem";
import { deleteOrderLine, showAllOrderLineForAdmin } from "@/services/orderLineAPI";
import { getDiamondDetails, showAllDiamond } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";
import useAuth from "@/hooks/useAuth";
import { getCustomer } from "@/services/accountApi";
import config from "@/config";
import { Empty, notification } from "antd";
import { cartSlice } from "@/layouts/MainLayout/slice/cartSlice";
import { showAllProduct } from "@/services/jewelryAPI";

const Cart = () => {
  useDocumentTitle("Cart | Aphromas Diamond");

  const [cartItems, setCartItems] = useState<any[]>([]);
  const { AccountID } = useAuth();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useAppDispatch();
  const [diamondList, setDiamondList] = useState<any[]>([]);
  const [productList, setProductList] = useState<any[]>([]);

  const fetchCartItemsWithDetails = async () => {
    try {
      // Gọi API để lấy tất cả các dòng đặt hàng
      const { data } = await showAllOrderLineForAdmin();
      console.log("Check API: ", data.data);

      //Get customer info
      const customer = await getCustomer(AccountID ? AccountID : 0);
      const customerID = customer.data.data.CustomerID;
      console.log('Customer ID: ', customer.data.data.CustomerID);

      //Get diamond list
      const diamonds = await showAllDiamond();
      setDiamondList(diamonds.data.data);
      console.log('Diamond List: ', diamondList);

      //Get product list
      const products = await showAllProduct();
      setProductList(products.data.data);
      console.log('Product List: ', productList);

      // Lọc ra các sản phẩm có OrderID là null
      const cartItems = data.data.filter(
        (cartItem: { OrderID: null, DiamondID: number, ProductID: number, CustomerID: number }) =>
          (cartItem.OrderID === null
            && (cartItem.DiamondID !== null || cartItem.ProductID !== null))
          && cartItem.CustomerID === customerID
      );
      console.log('Cart: ', cartItems);


      // Dùng Promise.all để đảm bảo tất cả các yêu cầu API được thực hiện và trả về đầy đủ trước khi tiếp tục
      const detailedCartItems = await Promise.all(
        cartItems.map(async (item: { DiamondID: number }) => {
          // Gọi API để lấy thông tin chi tiết về kim cương dựa vào DiamondID
          // console.log(item)
          const { data: diamondDetails } = await getDiamondDetails(
            item.DiamondID
          );
          console.log('a', diamondDetails?.data?.usingImage)
          // const usingImageID = diamondDetails.data.usingImage[0].usingImageID;
          // console.log(usingImageID)
          // const imagesDiamond = await getImageDiamond(usingImageID);
          if (diamondDetails && diamondDetails.data && diamondDetails.data.usingImage) {
            const usingImageID = diamondDetails.data.usingImage[0];
            const imageDiamond = getImage(usingImageID?.UsingImageID ? usingImageID.UsingImageID : null);
            const type = diamondDetails.data.WeightCarat ? "diamond" : "ring";
            return { ...item, diamondDetails: diamondDetails.data, type, imageDiamond };
          } else {
            return { ...item, diamondDetails: diamondDetails?.data, type: "unknown", imageDiamond: null };
          }
        })
      );

      // Trả về danh sách các sản phẩm trong giỏ hàng kèm theo thông tin chi tiết về kim cương
      console.log('detailedCartItems', detailedCartItems)
      return detailedCartItems;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    const items = await fetchCartItemsWithDetails();
    // Check if items is undefined before calling setCartItems
    if (items) {
      setCartItems(items);
    }
    dispatch(cartSlice.actions.setLength(cartItems.length));
  };

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

  // const subtotal = items.reduce((acc, item) => {
  //   return acc + parseFloat(item.price.replace(/[$,]/g, ""));
  // }, 0);

  const subtotal = () => {
    let total = 0;
    cartItems.map((item) => {
      total += parseFloat(item?.diamondDetails?.Price);
    });
    return total;
  }

  const shippingCost = cartItems.length === 1 ? 15 : 0;
  const total = calculateTotal(subtotal(), discount, shippingCost).toFixed(2)

  const handleRemove = async (OrderLineID: any) => {
    try {
      const { data } = await deleteOrderLine(OrderLineID);
      if (data.statusCode !== 200) throw new Error;
      else {
        api.success({
          message: 'Notification',
          description: 'Remove product successfully!'
        })
        loadCartItems();
        console.log(data.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleCheckout = () => {
    cartItems.length === 0 ? (
      api.warning({
        message: 'Notification',
        description: "Your cart doesn't have any products!"
      })
    ) : navigate(config.routes.customer.checkout);
  }

  return (
    <>
      <main>
        {contextHolder}
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
                {cartItems.length === 0 ?
                  <Empty
                    description="Your cart doesn't have nothing here"
                  /> :
                  <>
                    {cartItems.map((item, index) => (
                      <CartItem
                        key={index}
                        OrderLineID={item.OrderLineID}
                        DiamondID={item.DiamondID}
                        designer={
                          item.diamondDetails?.Designer ||
                          "No description available"
                        }
                        name={
                          item.diamondDetails?.Name || "No description available"
                        }
                        price={item.diamondDetails?.Price}
                        images={item.imageDiamond}
                        type={item.type}
                        handleRemove={() => handleRemove(item.OrderLineID)}
                      />
                    ))}
                  </>
                }
              </CartStyled.Column>
              <CartStyled.Sidebar>
                <CartStyled.SummaryContainer>
                  <CartStyled.SummaryDetails>
                    {" "}
                    {discount > 0 && (
                      <CartStyled.AppliedPromo>
                        Discount {`(-${discount}%)`}:
                        <CartStyled.AppliedPromoValuve>
                          {`-$${subtotal() * discount / 100}`}
                        </CartStyled.AppliedPromoValuve>
                      </CartStyled.AppliedPromo>
                    )}
                    <CartStyled.SummaryRow>

                      {cartItems.length === 0 ? <></> :
                        <>
                          <CartStyled.SummaryLabel>
                            Shipping
                          </CartStyled.SummaryLabel>
                          <CartStyled.SummaryValue>
                            {cartItems.length === 1 ? "$15.00" : "Free"}
                          </CartStyled.SummaryValue>
                        </>
                      }
                    </CartStyled.SummaryRow>
                    <CartStyled.SummaryRow>
                      <CartStyled.SummaryLabel>
                        Subtotal
                      </CartStyled.SummaryLabel>
                      <CartStyled.SummaryValue>
                        ${subtotal().toFixed(2)}
                      </CartStyled.SummaryValue>
                    </CartStyled.SummaryRow>
                    <PromoCodeSection onApplyVoucher={onApplyVoucher} />
                    <CartStyled.SummaryTotal>
                      <CartStyled.TotalLabel>Total</CartStyled.TotalLabel>
                      <CartStyled.TotalValue>${total}</CartStyled.TotalValue>
                    </CartStyled.SummaryTotal>
                  </CartStyled.SummaryDetails>
                  <CartStyled.CheckoutButton
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </CartStyled.CheckoutButton>
                  {/* <CartStyled.OrDivider>OR</CartStyled.OrDivider>
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
                  </Link> */}
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
