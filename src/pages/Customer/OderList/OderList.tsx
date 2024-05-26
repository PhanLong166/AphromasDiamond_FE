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
            <Text><span><i className="fa-solid fa-heart"></i></span>Wishlist</Text>
              
          </Anchor>
          <Anchor href="/signout">
            <Text><span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>Sign Out</Text>
          </Anchor>
        </FlexColumn>
        <Banner src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FOrderList%2FBanner-LuxuryDiamondCompany-1300x600-S1860.jpg?alt=media&token=0b9d1885-a948-4d3f-9677-a35334124a22" alt="Banner Image" />
        <Options>
          <OptionLink href="/account-details">Account Details</OptionLink>
          <OptionLink style={{fontWeight: 800}} href="/orders">My Orders</OptionLink>
          <OptionLink href="/history">History</OptionLink>
          <OptionLink href="/notifications">Notifications</OptionLink>
          <OptionLink href="/vouchers">Voucher</OptionLink>
        </Options>
        <Title>All Orders</Title>
        <Filters>

          <CustomSelects>
            <CustomInput>
              <InputText><span><i className="fa-solid fa-magnifying-glass fa-sm"></i></span>Search</InputText>
            </CustomInput>
            <Text><label>Category</label>
              <select id="Category">
                <option value="">Sample</option>
                <option value="4.5">Sample</option>
                <option value="5">Sample</option>
                <option value="5.5">Sample</option>
                <option value="6">Sample</option>
              </select>
            </Text>
            <CustomSelect>
              <Text><label>Price</label>
                <select id="ringSize">
                  <option value="4">Sample</option>
                  <option value="4.5">Sample</option>
                  <option value="5">Sample</option>
                  <option value="5.5">Sample</option>
                  <option value="6">Sample</option>
                </select></Text>
            </CustomSelect>
            <CustomSelect>
              <Text><label>Status</label>
                <select id="Status">
                  <option value="4">Sample</option>
                  <option value="4.5">Sample</option>
                  <option value="5">Sample</option>
                  <option value="5.5">Sample</option>
                  <option value="6">Sample</option>
                </select></Text>
            </CustomSelect>
            <CustomSelect>
              <Text><label>Date</label>
                <select id="Date">
                  <option value="4">Sample</option>
                  <option value="4.5">Sample</option>
                  <option value="5">Sample</option>
                  <option value="5.5">Sample</option>
                  <option value="6">Sample</option>
                </select></Text>
            </CustomSelect>
          </CustomSelects>
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
  background: #fff;
  width: 100%;
  padding: 23px 60px;
  color: #818594;
  font: 15px/150% 'Crimson Text', sans-serif;
  border-bottom: 1px solid #000;
  

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
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;


const Text = styled.span`
  font-family: 'Poppins', sans-serif;
  display: flex;
 gap: 20px;
 margin-top: 35px;
 border-radius: 7px;
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
max-width: 1146px;  
gap: 20px;
font-size: 16px;
justify-content: center;  
align-items: center;  


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
  width: 228px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const CustomSelect = styled.div`
  display: flex;
  gap: 20px;
  color: #000;
  //  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  padding: 7px 26px;
  justify-content: space-between;
  
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;
const CustomSelects = styled.div`
display: flex;
  gap: 20px;
  color: #000;
   //border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  padding: 7px 26px;
  justify-content: space-between;
  align-items: center;
  align-items: baseline;
  font-size: 18px;

`;

const InputText = styled.span`
  font-family: 'Inter', sans-serif;
  
  `;

const Table = styled.table`
margin-top: 45px;
width: 100%;
max-width: 1146px;  // Đặt cùng chiều ngang với Filters
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