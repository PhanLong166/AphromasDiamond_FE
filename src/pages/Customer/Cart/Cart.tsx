// import * as React from 'react';
import { Link } from "react-router-dom";
import * as CartStyled from './Cart.styled';
import { Button, Flex, Select } from "antd";
import PromoCodeSection from "../../../components/Customer/Checkout/PromoCode";
import { useDocumentTitle } from "@/hooks";

const Cart = () => {
  useDocumentTitle('Cart | Aphromas Diamond');
  
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
            <CartStyled.CountCart>MY CART 4 ITEMS</CartStyled.CountCart>

            
            <CartStyled.MainSection>
              <CartStyled.Column>
                <CartStyled.ItemContainer>
                  <CartStyled.ActionText>
                    <Flex gap="small" wrap>
                      <Button type="text">VIEW</Button>
                      <Button type="text">REMOVE</Button>
                    </Flex>
                  </CartStyled.ActionText>
                  <CartStyled.ItemDetails>
                    <CartStyled.ItemInfo>
                      <CartStyled.ItemImage
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FDiamond%2Fdiamond.png?alt=media&token=55aa167f-b20b-482c-b18b-56e5b372219e"
                        alt="Diamond (Loose)"
                      />
                    </CartStyled.ItemInfo>
                    <CartStyled.ItemDescription>
                      <CartStyled.ProductDescription>
                        <CartStyled.ItemType>Diamond (Loose)</CartStyled.ItemType>
                        1.52 Carat F-VS1 Princess Cut Diamond <br />
                        SKU&nbsp;18633320
                      </CartStyled.ProductDescription>
                      <CartStyled.AddOptions>
                        <CartStyled.AddOption>
                          <Flex gap="small" wrap>
                            <Button type="text">+Add a Ring</Button>
                          </Flex>
                        </CartStyled.AddOption>
                        <CartStyled.AddOption>
                          <Flex gap="small" wrap>
                            <Button type="text">+Add a Pendant</Button>
                          </Flex>
                        </CartStyled.AddOption>
                      </CartStyled.AddOptions>
                    </CartStyled.ItemDescription>
                    <CartStyled.ItemPrice>$8,000</CartStyled.ItemPrice>
                  </CartStyled.ItemDetails>
                </CartStyled.ItemContainer>
                <CartStyled.ItemContainer>
                  <CartStyled.ActionText>
                    {" "}
                    <Flex gap="small" wrap>
                      <Button type="text">VIEW</Button>
                      <Button type="text">REMOVE</Button>
                    </Flex>
                  </CartStyled.ActionText>
                  <CartStyled.ItemDetails>
                    <CartStyled.ItemInfo>
                      <CartStyled.ItemImage
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FDiamond%2Fdiamond.jpg?alt=media&token=2ec444c6-4d86-4c57-a126-34e12c6231b2"
                        alt="Diamond (Loose)"
                      />
                    </CartStyled.ItemInfo>
                    <CartStyled.ItemDescription>
                      <CartStyled.ProductDescription>
                        <CartStyled.ItemType>Diamond (Loose)</CartStyled.ItemType>
                        Lab Grown Diamond Low Dome Eternity <br />
                        SKU&nbsp;18633320
                      </CartStyled.ProductDescription>
                      <CartStyled.AddOptions>
                        <CartStyled.AddOption>
                          <Flex gap="small" wrap>
                            <Button type="text">+Add a Ring</Button>
                          </Flex>
                        </CartStyled.AddOption>
                        <CartStyled.AddOption>
                          <Flex gap="small" wrap>
                            <Button type="text">+Add a Pendant</Button>
                          </Flex>
                        </CartStyled.AddOption>
                      </CartStyled.AddOptions>
                    </CartStyled.ItemDescription>
                    <CartStyled.ItemPrice>$8,000</CartStyled.ItemPrice>
                  </CartStyled.ItemDetails>
                </CartStyled.ItemContainer>
                <CartStyled.ItemContainer>
                  <CartStyled.ActionText>
                    {" "}
                    <Flex gap="small" wrap>
                      <Button type="text">VIEW</Button>
                      <Button type="text">REMOVE</Button>
                    </Flex>
                  </CartStyled.ActionText>
                  <CartStyled.ItemDetails>
                    <CartStyled.ItemInfo>
                      <CartStyled.ItemImage
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FRing%2Fring.png?alt=media&token=5933d121-78ec-44c7-ab0a-42e2531b532f"
                        alt="Diamond (Loose)"
                      />
                    </CartStyled.ItemInfo>
                    <CartStyled.ItemDescription>
                      <CartStyled.ProductDescription>
                        <CartStyled.ItemType>Diamond (Loose)</CartStyled.ItemType>
                        1.52 Carat F-VS1 Princess Cut Diamond <br />
                        SKU&nbsp;18633320
                      </CartStyled.ProductDescription>
                      <Select
                        placeholder="Ring Size"
                        style={{ width: 110 }}
                        options={[
                          { value: "1", label: "4" },
                          { value: "2", label: "4.5" },
                          { value: "3", label: "5" },
                          { value: "4", label: "5.5" },
                          { value: "5", label: "6" },
                          { value: "6", label: "6.5" },
                        ]}
                      />
                    </CartStyled.ItemDescription>
                    <CartStyled.RingPrice>$8,000</CartStyled.RingPrice>
                  </CartStyled.ItemDetails>
                </CartStyled.ItemContainer>
                <CartStyled.ItemContainer>
                  <CartStyled.ActionText>
                    
                    <Flex gap="small" wrap>
                      <Button type="text">VIEW</Button>
                      <Button type="text">REMOVE</Button>
                    </Flex>
                  </CartStyled.ActionText>
                  <CartStyled.ItemDetails>
                    <CartStyled.ItemInfo>
                      <CartStyled.ItemImage
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FRing%2Fring.png?alt=media&token=5933d121-78ec-44c7-ab0a-42e2531b532f"
                        alt="Diamond (Loose)"
                      />
                    </CartStyled.ItemInfo>
                    <CartStyled.ItemDescription>
                      <CartStyled.ProductDescription>
                        <CartStyled.ItemType>Diamond (Loose)</CartStyled.ItemType>
                        1.52 Carat F-VS1 Princess Cut Diamond <br />
                        SKU&nbsp;18633320
                      </CartStyled.ProductDescription>
                      <Select
                        placeholder="Ring Size"
                        style={{ width: 110 }}
                        options={[
                          { value: "1", label: "4" },
                          { value: "2", label: "4.5" },
                          { value: "3", label: "5" },
                          { value: "4", label: "5.5" },
                          { value: "5", label: "6" },
                          { value: "6", label: "6.5" },
                        ]}
                      />
                    </CartStyled.ItemDescription>
                    <CartStyled.RingPrice>$8,000</CartStyled.RingPrice>
                  </CartStyled.ItemDetails>
                </CartStyled.ItemContainer>
              </CartStyled.Column>
              <CartStyled.Sidebar>
                <CartStyled.SummaryContainer>
                  <CartStyled.SummaryDetails>
                    <CartStyled.SummaryRow>
                      <CartStyled.SummaryLabel>Subtotal</CartStyled.SummaryLabel>
                      <CartStyled.SummaryValue>$10,000</CartStyled.SummaryValue>
                    </CartStyled.SummaryRow>
                    <CartStyled.SummaryRow>
                      <CartStyled.SummaryLabel>Shipping</CartStyled.SummaryLabel>
                      <CartStyled.SummaryValue>Free</CartStyled.SummaryValue>
                    </CartStyled.SummaryRow>
                    {/* <CartStyled.PromoCode>
                    <CartStyled.PromoIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f0f0a858913ade2024229e06f2a2b2de3377d9aca01b958e1d53f25d9c31bad?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Promo code icon" />
                    <CartStyled.PromoText>Promo Code</CartStyled.PromoText>
                  </CartStyled.PromoCode> */}
                    <PromoCodeSection onApplyVoucher={(discount) => {discount}}/>
                    <CartStyled.SummaryTotal>
                      <CartStyled.TotalLabel>Total</CartStyled.TotalLabel>
                      <CartStyled.TotalValue>$10,000</CartStyled.TotalValue>
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


