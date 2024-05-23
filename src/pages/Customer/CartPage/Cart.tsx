import * as Styled from './Cart.styled'

const Cart = () => {
    const products = [
        {
          title: 'Diamond (Loose)',
          description: '1.52 Carat F-VS1 Princess Cut Diamond\nSKU 18633320',
          price: '$8,000',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/77e18e78db1048a2ef9289b66a8b623840e01a792002a180a5674237669d080a?apiKey=12413e1d25a644e99d7d15180401ebba&',
        },
        {
          title: 'Lab Grown Diamond Low Dome Enternity',
          description: '1.52 Carat F-VS1 Princess Cut Diamond\nSKU 18633320',
          price: '$8,000',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d390c8fca96fc694888a2d3a9cf3c75e05dab916440fcab452b4b3fd6c33b09d?apiKey=12413e1d25a644e99d7d15180401ebba&',
        },
      ];
    
      return (
        <Styled.CartContainer>
          <Styled.CartContent>
            <Styled.CartMain>
              <Styled.ProductsSection>
                {products.map((product, index) => (
                  <Styled.ProductComponent key={index} {...product} />
                ))}
              </Styled.ProductsSection>
              <Styled.SummarySection>
                <Styled.Summary>
                  <Styled.SummaryContent>
                    <Styled.SummaryItem>
                      <Styled.SummaryLabel>Subtotal</Styled.SummaryLabel>
                      <Styled.SummaryValue>$10,000</Styled.SummaryValue>
                    </Styled.SummaryItem>
                    <Styled.SummaryItem>
                      <Styled.SummaryLabel>Shipping</Styled.SummaryLabel>
                      <Styled.SummaryValue>Free</Styled.SummaryValue>
                    </Styled.SummaryItem>
                  </Styled.SummaryContent>
                  <Styled.PromoCode>
                    <Styled.SummaryLabel>Promo Code</Styled.SummaryLabel>
                  </Styled.PromoCode>
                  <Styled.SummaryItem>
                    <Styled.SummaryLabel>Total</Styled.SummaryLabel>
                    <Styled.SummaryValue>$10,000</Styled.SummaryValue>
                  </Styled.SummaryItem>
                  <Styled.CheckoutButton>CHECKOUT</Styled.CheckoutButton>
                  <Styled.SummaryLabel>OR</Styled.SummaryLabel>
                  <Styled.AlternativePayments>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf80dd34693b8ee36689f6cdbf9c8af4d9dd7c2416ceab835ab7d256a0a98cc2?apiKey=12413e1d25a644e99d7d15180401ebba&"
                      alt="Payment Method 1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7dfd775276b304c961268c7106f9586aecbb972a877c1150bdab755dcaa79a2?apiKey=12413e1d25a644e99d7d15180401ebba&"
                      alt="Payment Method 2"
                    />
                  </Styled.AlternativePayments>
                </Styled.Summary>
              </Styled.SummarySection>
            </Styled.CartMain>
          </Styled.CartContent>
        </Styled.CartContainer>
      );
};

export default Cart;