import React from 'react';
import styled from 'styled-components';

interface OrderData {
  rowNumber: number;
  orderId: string;
  orderDate: string;
  staff: string;
  price: string;
  status: string;
}

const data: OrderData[] = [
  { rowNumber: 1, orderId: '#12345128', orderDate: '2 Jan 2023', staff: 'Ajmal Abdul Rahiman', price: '1000$', status: 'Pending' },
  { rowNumber: 2, orderId: '#12345128', orderDate: '14 Dec 2022', staff: 'Esther Eden', price: '2450$', status: 'Delivered' },
  { rowNumber: 3, orderId: '#12345128', orderDate: '14 Dec 2022', staff: 'Ajmal Abdul Rahiman', price: '700$', status: 'Pending' },
  { rowNumber: 4, orderId: '#12345128', orderDate: '14 Dec 2022', staff: 'Esther Eden', price: '1520$', status: 'Canceled' },
  { rowNumber: 5, orderId: '#12345128', orderDate: '14 Dec 2022', staff: 'Ajmal Abdul Rahiman', price: '2000$', status: 'Delivered' },
  { rowNumber: 6, orderId: '#12345128', orderDate: '14 Dec 2022', staff: 'Esther Eden', price: '5000$', status: 'Delivering' },
];

const OrderList = () => {
  return (
    <main>
      <Header>My Account</Header>
      <Section>
        <FlexColumn>
          <Anchor href="/wishlist">
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/88bfff5ee32dfca7d0563ed2c4ac0ca7bcf89c5a410104fc9f6b4062d523f8c7?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Wishlist Icon" />
            <Text>Wishlist</Text>
          </Anchor>
          <Anchor href="/signout">
            <Text>Sign Out</Text>
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/b52a55cd61cfd96b2785ded756ed1aac26ee013a7d184b86271d39fe7f934b37?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Sign Out Icon" />
          </Anchor>
        </FlexColumn>
        <Banner src="https://cdn.builder.io/api/v1/image/assets/TEMP/58c425c0dfdc13b98bd59ddae43e37c2f8382c9add805d23c126aecaab4bff46?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Banner Image" />
        <Options>
          <OptionLink href="/account-details">Account Details</OptionLink>
          <OptionLink href="/orders">My Orders</OptionLink>
          <OptionLink href="/history">History</OptionLink>
          <OptionLink href="/notifications">Notifications</OptionLink>
          <OptionLink href="/vouchers">Voucher</OptionLink>
        </Options>
        <Title>All Orders</Title>
        <Filters>
          
          <CustomSelect>
          <CustomInput>
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d180ede1e5a24e1790ffc4498c2d09888ca77d75df2507d9db1d38978cc0fcb?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Search Icon" />
            <InputText>Search</InputText>
          </CustomInput>
            <Text>Category</Text>
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ae71796fbbabb595be68696a3fdcd56833b6024f84a99006c0e287b81d3b21?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Category Icon" />
            <CustomSelect>
            <Text>Price</Text>
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/54df9a144a01eef74ed3aac58f5ca70575889fb9fd34834a3950566de94d41c4?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Price Icon" />
          </CustomSelect>
          <CustomSelect>
            <Text>Status</Text>
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff57ed213a48662aaa3c0f970fc3532f9064cf37866e76a8f6b94a49a41642fb?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Status Icon" />
          </CustomSelect>
          <CustomSelect>
            <Text>Date</Text>
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/964a928af1d2c7df7ec10d83d93ad49b984648b33bc8b7d084a2de245500bc86?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Date Icon" />
          </CustomSelect>
          </CustomSelect>
        </Filters>
        <Filters>
          
        </Filters>
        <Table>
          <thead>
             <tr>
               <TableHeader>No</TableHeader>
               <TableHeader>ID Order</TableHeader>
               <TableHeader>Order Date</TableHeader>
               <TableHeader>Delivering Staff</TableHeader>
               <TableHeader>Price</TableHeader>
               <TableHeader>Status</TableHeader>
               <TableHeader>Actions</TableHeader>
             </tr>
           </thead>
           <tbody>
             {data.map((order) => (
               <tr key={order.rowNumber}>
                 <TableData>{order.rowNumber}</TableData>
                 <TableData>{order.orderId}</TableData>
                 <TableData>{order.orderDate}</TableData>
                 <TableData>{order.staff}</TableData>
                 <TableData>{order.price}</TableData>
                 <TableData>{order.status}</TableData>
                 <TableData>
                   <ActionLink href="#">VIEW | CANCEL</ActionLink>
                 </TableData>
               </tr>
             ))}
           </tbody>
         </Table>
       </Section>
     </main>
   );
 };

const Header = styled.header`
  border: 1px solid rgba(0, 0, 0, 1);
  background: #fff;
  width: 100%;
  padding: 23px 60px;
  color: #818594;
  font: 15px/150% 'Crimson Text', sans-serif;
  margin-top: 44px;

  @media (max-width: 991px) {
    padding: 0 20px 0 30px;
    margin-top: 40px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  background: #fff;
`;

const FlexColumn = styled.div`
  display: flex;
  margin-top: 52px;
  width: 100%;
  max-width: 1219px;
  gap: 20px;
  color: #000;
  font-size: 13px;
  line-height: 150%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const Icon = styled.img`
  width: 12px;
`;

const Text = styled.span`
  font-family: 'Poppins', sans-serif;
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
`;

const Banner = styled.img`
  width: 100%;
  margin-top: 19px;
  max-width: 1219px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Options = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  display: flex;
  margin-top: 6px;
  width: 100%;
  max-width: 1219px;
  gap: 20px;
  color: #000;
  font-size: 13px;
  font-weight: 275;
  line-height: 150%;
  padding: 33px 20px 6px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const OptionLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const Title = styled.h1`
  color: #000;
  margin-top: 64px;
  font: 600 35px/150% 'Poppins', sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Filters = styled.div`
  display: flex;
  margin-top: 53px;
  width: 100%;
  max-width: 1219px;
  gap: 20px;
  font-size: 16px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const CustomInput = styled.div`
  display: flex;
  gap: 12px;
  color: #828282;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 52.56px;
  padding: 4px 12px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const CustomSelect = styled.div`
  display: flex;
  gap: 20px;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  padding: 7px 26px;
  justify-content: space-between;

  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const InputText = styled.span`
  font-family: 'Inter', sans-serif;
`;

const Table = styled.table`
  margin-top: 45px;
  width: 100%;
  max-width: 1146px;
  border-spacing: 0 15px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const TableHeader = styled.th`
  text-align: left;
  font: 600 20px 'Poppins', sans-serif;
  color: #102c57;
`;

const TableData = styled.td`
  padding: 16px 0;
  font-family: 'Poppins', sans-serif;
  color: #102c57;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ActionLink = styled.a`
  font-family: 'Poppins', sans-serif;
  text-decoration: underline;
`;

export default OrderList;