import styled from 'styled-components';


interface OrderData {
  rowNumber: number;
  
  orderDate: string;
 
  price: string;
  status: string;
}

const data: OrderData[] = [
  { rowNumber: 1,  orderDate: '2 Jan 2023',  price: '1000$', status: 'Pending' },
  { rowNumber: 2,  orderDate: '14 Dec 2022',  price: '2450$', status: 'Delivered' },
  { rowNumber: 3,  orderDate: '14 Dec 2022',  price: '700$', status: 'Pending' },
  { rowNumber: 4,  orderDate: '14 Dec 2022',  price: '1520$', status: 'Canceled' },
  { rowNumber: 5,  orderDate: '14 Dec 2022',  price: '2000$', status: 'Delivered' },
  { rowNumber: 6, orderDate: '14 Dec 2022',  price: '5000$', status: 'Delivering' },
];

const OrderList = () => {
  return (
    <main>
      <Section>
        <Title>All Orders</Title>
        <Filters>

          <CustomSelects>
            <CustomInput>
              <InputText><span style={{gap: 12}}><i className="fa-solid fa-magnifying-glass fa-sm"></i></span>Search</InputText>
            </CustomInput>
            <Text><label>Category:</label>
              <select id="Category">
                <option value="">Diamond</option>
                <option value="">Ring</option>
                <option value="">Pendant</option>
              </select>
            </Text>
            <CustomSelect>
              <Text><label>Price:</label>
                <select id="Price">
                  <option value="">Under 2000$</option>
                  <option value="">Above 2000$</option>
                </select></Text>
            </CustomSelect>
            <CustomSelect>
              <Text><label>Status</label>
                <select id="Status:">
                  <option value="">Delivering</option>
                  <option value="">Delivered</option>
                  <option value="">Pending</option>
                  <option value="">Canceled</option>
                </select></Text>
            </CustomSelect>
            <CustomSelect>
              <Text><label>Date:</label>
                <select id="Date">
                  <option value="">Today</option>
                  <option value="">Yesterday</option>
                  <option value="">10 days ago</option>
                  <option value="">20 days ago</option>
                  <option value="">30 days ago</option>
                </select></Text>
            </CustomSelect>
          </CustomSelects>
        </Filters>
       
        <Table>
          <thead>
            <tr>
              <TableHeader>No</TableHeader>
              
              <TableHeader>Order Date</TableHeader>
              
              <TableHeader>Price</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.rowNumber}>
                <TableData>{order.rowNumber}</TableData>
                <TableData>{order.orderDate}</TableData>               
                <TableData>{order.price}</TableData>
                <TableData>{order.status}</TableData>
                <TableData>
                  <ActionLink >View | Cancel</ActionLink>
                </TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>
    </main>
  );
};


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 29px;
  background: #fff;
`;

const Text = styled.span`
  font-family: 'Poppins', sans-serif;
  display: flex;
 gap: 5px;
 margin-top: 35px;
 border-radius: 7px;
`;

const Title = styled.h1`
  color: #000;
  font: 600 32px 'Crimson Text', sans-serif;
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
  // gap: 12px;
  color: #828282;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 52.56px;
  padding: 4px 7px;
  width: 228px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const CustomSelect = styled.div`
  display: flex;
  gap: 5px;
  color: #000;
  //  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  padding: 7px 4px;
  justify-content: space-between;
  
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;
const CustomSelects = styled.div`
display: flex;
  gap: 5px;
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
  display: flex;
    gap: 3px;
  
  `;

  const Table = styled.table`
  margin-top: 45px;
  width: 100%;
  max-width: 1471px;
  border-spacing: 0 15px;
  padding-left: 15rem;
  padding-bottom: 15rem;
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