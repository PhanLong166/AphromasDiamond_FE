import styled from 'styled-components';
import DropdownButton from './DropdownButton';
import { Input } from 'antd';
// import type { MenuProps } from 'antd';
import {  Space } from 'antd';
import {  Table} from 'antd';
import type { TableProps } from 'antd';
import AccountCus from '@/components/AccountCus/AccountCus';




interface DataType {
  key: string;
  No: string;
  product: string;
  orderDate: string;
  price: string;
  status: string;
  
}


const data: DataType[] = [
  {
    key: '1',
    No: '1',
    product: 'Diamind Ring',
    orderDate: '24 Dec 2023',
    price: '1000$',
    status: 'Delivered'
  },
  {
    key: '2',
    No: '2',
    product: 'Diamind Earrings',
    orderDate: '24 June 2023',
   price: '2000$',
   status: 'Canceled',
  },
  {
    key: '3',
    No: '3',
    product: 'Diamond Necklaces',
    orderDate: '27 Jan 2024',
    price: '2000$',
   status: 'Pending',
  },
  {
    key: '4',
    No: '4',
    product: 'Diamind Braclets',
    orderDate: '24 Dec 2023',
    price: '7000$',
    status: 'Delivering'
  },
  {
    key: '5',
    No: '5',
    product: 'Diamind Chokers',
    orderDate: '27 Dec 2023',
   price: '2000$',
   status: 'Canceled',
  },
  {
    key: '6',
    No: '6',
    product: 'Diamond Round',
    orderDate: '27 Jan 2024',
    price: '5000$',
   status: 'Pending',
  },
];
const columns: TableProps<DataType>['columns'] = [
  {
    title: 'No',
    dataIndex: 'No',
    key: 'No',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
 
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>View</a>
        <a>Cancel</a>
      </Space>
    ),
  },
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

  return (
    <main>
      <AccountCus />
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
        <Table columns={columns} dataSource={data} />
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
  // padding: 7px 4px;
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
  justify-content: space-between;
  align-items: baseline;
  font-size: 18px;
  width: 100%;
`;


const TableContainer = styled.table`
  display: grid;
  width: 100%;
  max-width: 1167px;
  grid-gap: 15px;
  margin-top: 45px;
  padding-bottom: 11rem;

  @media (max-width: 991px) {
    margin-top: 40px;
    grid-template-columns: 1fr;
  }
`;

export default OrderList;
