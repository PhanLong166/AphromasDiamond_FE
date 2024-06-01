import styled from 'styled-components';
import React from 'react';
import DropdownButton from './DropdownButton';
import { Input } from 'antd';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

interface OrderData {
  rowNumber: number;
  orderDate: string;
  product: string;
  price: string;
  status: string;
}


const data: OrderData[] = [
  { rowNumber: 1, product: 'Diamond Ring', orderDate: '2 Jan 2023', price: '1000$', status: 'Pending' },
  { rowNumber: 2, product: 'Diamond Necklaces', orderDate: '14 Dec 2022', price: '2450$', status: 'Delivered' },
  { rowNumber: 3, product: 'Diamond Earrings', orderDate: '14 Dec 2022', price: '700$', status: 'Pending' },
  { rowNumber: 4, product: 'Diamond Braclets', orderDate: '14 Dec 2022', price: '1520$', status: 'Canceled' },
  { rowNumber: 5, product: 'Diamond Chokers', orderDate: '14 Dec 2022', price: '2000$', status: 'Delivered' },
  { rowNumber: 6, product: 'Diamond Round', orderDate: '14 Dec 2022', price: '5000$', status: 'Delivering' },
];

const OrderList = () => {
  const menuItems1 = [
    { text: 'Rings', link: '#action1' },
    { text: 'Necklaces', link: '#action2' },
    { text: 'Earrings', link: '#action3' },
    { text: 'Braclets', link: '#action4' },
    { text: 'Chokers', link: '#action5' },
  ];

  const menuItems2 = [
    { text: 'Hight-Low', link: '#option1' },
    { text: 'Low-Hight', link: '#option2' },

  ];
  const menuItems3 = [
    { text: 'Newest', link: '#action1' },
    { text: '10 days ago', link: '#action2' },

  ];

  const menuItems4 = [
    { text: 'Pending', link: '#option1' },
    { text: 'Delivered', link: '#option2' },
    { text: 'Delivering', link: '#option3' },
    { text: 'Canceled', link: '#option4' },
  ];


  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="#" href="#">
          View
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="#" href="#">
          Cancel
        </a>
      ),
    },

  ];

  return (
    <main>
      <Section>
        <Title>All Orders</Title>
        <Filters>
          <CustomSelects>
            <Input placeholder="Search" />
            <Text>
              <Text>
                <DropdownButton buttonText="Category" menuItems={menuItems1} />
              </Text>
            </Text>
            <CustomSelect>
              <Text><DropdownButton buttonText="Date" menuItems={menuItems3} /></Text>
            </CustomSelect>
            <CustomSelect>
              <Text>
                <DropdownButton buttonText="Price" menuItems={menuItems2} />
              </Text>
            </CustomSelect>
            <CustomSelect>
              <Text>
                <DropdownButton buttonText="Status" menuItems={menuItems4} />
              </Text>
            </CustomSelect>
          </CustomSelects>
        </Filters>
        <TableContainer>
          <TableHeader>No</TableHeader>
          <TableHeader>Product</TableHeader>
          <TableHeader>Order Date</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Actions</TableHeader>
          {data.map((order) => (
            <React.Fragment key={order.rowNumber}>
              <TableData>{order.rowNumber}</TableData>
              <TableData>{order.product}</TableData>
              <TableData style={{ paddingLeft: 10 }}>{order.orderDate}</TableData>
              <TableData>{order.price}</TableData>
              <TableData>{order.status}</TableData>
              <TableData>
                <Editbt>
                  <Dropdown menu={{items}}>
                    <a onClick={(e) => e.preventDefault()}><Space>...</Space></a>
                  </Dropdown>
                </Editbt>
              </TableData>
            </React.Fragment>
          ))}
        </TableContainer>

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
const Editbt = styled.div`
padding-left: 25px;
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


const CustomSelect = styled.div`
  display: flex;
  gap: 5px;
  color: #000;
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
  border-radius: 7px;
  padding: 0px 10px;
  justify-content: space-between;
  align-items: baseline;
  font-size: 18px;
  width: 100%;
`;


const TableContainer = styled.table`
  display: grid;
  width: 100%;
  max-width: 1167px;
  grid-template-columns: 0.5fr 1.3fr 1fr 1fr 1fr 0.5fr;
  grid-gap: 15px;
  margin-top: 45px;
  padding-left: 1rem;
  padding-bottom: 11rem;

  @media (max-width: 991px) {
    margin-top: 40px;
    grid-template-columns: 1fr;
  }
`;



const TableHeader = styled.div`
  text-align: left;
  font: 600 20px 'Poppins', sans-serif;
  color: #102c57;
  padding: 10px 0;
`;

const TableData = styled.div`
  padding: 16px 0;
  font-family: 'Poppins', sans-serif;
  color: #102c57;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;


export default OrderList;
