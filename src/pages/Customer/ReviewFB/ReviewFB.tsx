import AccountCus from "@/components/Customer/Account Details/AccountCus";
import { Avatar, Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;
const ReviewFB = () => {
  return (
    <Container>
      <div>
        <AccountCus />
      </div>
      <CartContainer>
        <Content>
          <Card style={{ width: 300, marginTop: 16 }}>
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card style={{ width: 300, marginTop: 16 }}>
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card style={{ width: 300, marginTop: 16 }}>
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card style={{ width: 300, marginTop: 16 }}>
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Content>
      </CartContainer>
    </Container>
  );
};

export default ReviewFB;

const Container = styled.div``;

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 1400px;
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;
