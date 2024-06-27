import styled from 'styled-components';
import { Space, Table, Modal, TableColumnsType, Tag, TableProps } from 'antd';
import AccountCus from '@/components/Customer/Account Details/AccountCus';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import DropdownButton from './DropdownButton';

interface DataType {
  key: string;
  No: string;
  product: string;
  orderDate: string;
  price: number;
  status: string;
}

const initialData: DataType[] = [
  {
    key: '1',
    No: '1',
    product: 'Diamond Ring',
    orderDate: '24 Dec 2023',
    price: 1000,
    status: 'Delivered'
  },
  {
    key: '2',
    No: '2',
    product: 'Diamond Earrings',
    orderDate: '24 June 2023',
    price: 2000,
    status: 'Canceled',
  },
  {
    key: '3',
    No: '3',
    product: 'Diamond Necklaces',
    orderDate: '27 Jan 2024',
    price: 2000,
    status: 'Canceled',
  },
  {
    key: '4',
    No: '4',
    product: 'Diamond Braclets',
    orderDate: '24 Dec 2023',
    price: 7000,
    status: 'Delivered'
  },
  {
    key: '5',
    No: '5',
    product: 'Diamond Chokers',
    orderDate: '27 Dec 2023',
    price: 2000,
    status: 'Canceled',
  },
  {
    key: '6',
    No: '6',
    product: 'Diamond Round',
    orderDate: '27 Jan 2024',
    price: 5000,
    status: 'Pending',
  },
  {
    key: '7',
    No: '7',
    product: 'Diamond Bracelets',
    orderDate: '24 Dec 2023',
    price: 7000,
    status: 'Delivered'
  },
  {
    key: '8',
    No: '8',
    product: 'Diamond Chokers',
    orderDate: '27 Dec 2023',
    price: 2000,
    status: 'Canceled',
  },
  {
    key: '9',
    No: '9',
    product: 'Diamond Marquise',
    orderDate: '27 Jan 2024',
    price: 5000,
    status: 'Pending',
  },
  {
    key: '10',
    No: '10',
    product: 'Diamond Oval',
    orderDate: '27 Jan 2024',
    price: 5000,
    status: 'Pending',
  },
  {
    key: '11',
    No: '11',
    product: 'Diamond Emerald',
    orderDate: '27 Jan 2024',
    price: 5000,
    status: 'Delivering',
  },
  {
    key: '12',
    No: '12',
    product: 'Diamond Cushion',
    orderDate: '27 Jan 2024',
    price: 5000,
    status: 'Delivering',
  },
  {
    key: '13',
    No: '13',
    product: 'Diamond Braclets',
    orderDate: '24 Dec 2023',
    price: 7000,
    status: 'Delivered'
  },
  {
    key: '14',
    No: '14',
    product: 'Diamond Chokers',
    orderDate: '27 Dec 2023',
    price: 2000,
    status: 'Canceled',
  },
  {
    key: '15',
    No: '15',
    product: 'Diamond Radiant',
    orderDate: '27 Jan 2024',
    price: 5000,
    status: 'Pending',
  },
  {
    key: '16',
    No: '16',
    product: 'Diamond Bracelets',
    orderDate: '24 Dec 2023',
    price: 7000,
    status: 'Delivered'
  },
  {
    key: '17',
    No: '17',
    product: 'Dimaond Princess',
    orderDate: '27 Dec 2023',
    price: 2000,
    status: 'Canceled',
  },
  
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const History = () => {
  // const [data] = useState<DataType[]>(initialData); // Initial data for the table
  // const [filteredData, setFilteredData] = useState<DataType[]>(data); // State for filtered data
  const [showModal, setShowModal] = useState(false);
`
  
`
  const handleCancelClick = () => {
    setShowModal(true);
  };

  const handleOk = () => {
    setShowModal(false);
    // Handle the actual cancel logic here
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const columns: TableColumnsType<DataType> = [
    { title: 'No', dataIndex: 'No'},
    { title: 'Order Date', dataIndex: 'orderDate',
      // defaultSortOrder: "descend",
      sorter:  (a: DataType, b: DataType) => a.orderDate.localeCompare(b.orderDate),
     },
     {
      title: 'Product',
      dataIndex: 'product',
      filters: [
        {
          text: 'Diamond',
          value: 'Diamond',
        },
        {
          text: 'Jewelry',
          value: 'Jewelry',
          children: [
            {
              text: 'Ring',
              value: 'Ring',
            },
            {
              text: 'Necklaces',
              value: 'Necklaces',
            },
            {
              text: 'Earrings',
              value: 'Earrings',
            },
            {
              text: 'Bracelets',
              value: 'Bracelets',
            },
            {
              text: 'Chokers',
              value: 'Chokers',
            },
          ],
        },
        {
          text: 'Diamond Shape',
          value: 'Diamond Shape',
          children: [
            {
              text: 'Round',
              value: 'Round',
            },
            {
              text: 'Princess',
              value: 'Princess',
            },
            {
              text: 'Cushion',
              value: 'Cushion',
            },
            {
              text: 'Oval',
              value: 'Oval',
            },
            {
              text: 'Emerald',
              value: 'Emerald',
            },
            {
              text: 'Pear',
              value: 'Pear',
            },
            {
              text: 'Asscher',
              value: 'Asscher',
            },
            {
              text: 'Heart',
              value: 'Heart',
            },
            {
              text: 'Radiant',
              value: 'Radiant',
            },
            {
              text: 'Marquise',
              value: 'Marquise',
            },
          ],
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.product.includes(value as string),
      width: '30%',
    },
    // { title: 'Product', dataIndex: 'product',
    //   showSorterTooltip: { target: "full-header" },
    //   sorter: (a: DataType, b: DataType) => a.product.length - b.product.length,
    //   sortDirections: ["descend"],
    //   filters: [
    //     { text: "Diamond Ring", value: "Diamond Ring" },
    //     { text: "Diamond Earrings", value: "Diamond Earrings" },
    //     { text: "Diamond Necklaces", value: "Diamond Necklaces" },
    //     { text: "Diamond Braclets", value: "Diamond Braclets" },
    //     { text: "Diamond Chokers", value: "Diamond Chokers" },
    //   ],
    //   onFilter: (value, record) => record.product.indexOf(value as string) === 0,
    //  },
    { title: 'Price', dataIndex: 'price',
      // defaultSortOrder: "descend",
    sorter: (a: DataType, b: DataType) => a.price - b.price,
     },
    { title: 'Status', dataIndex: 'status',
    render: (_, { status }) => {
      let color = "green";
      if (status === "Pending") {
        color = "grey";
      // } else if (status === "Confirmed") {
      //   color = "yellow";
      } else if (status === "Delivering") {
        color = "geekblue";
      } else if (status === "Delivered") {
        color = "green";
      } else if (status === "Canceled") {
        color = "volcano";
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
    filters: [
      { text: "Pending", value: "Pending" },
      { text: "Confirmed", value: "Delivered" },
      { text: "Delivering", value: "Delivering" },
      // { text: "Completed", value: "Completed" },
      { text: "Cancelled", value: "Cancelled" },
    ],
    onFilter: (value, record) => record.status.indexOf(value as string) === 0,
     },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space style={{ width: 134 }} size="middle">
          <Link to="/order-details">View</Link>
          <a onClick={handleCancelClick}>Cancel</a>
        </Space>
      ),
      width: 134,
    },
  ];

  // const menuItems1 = [
  //   { text: 'Rings', link: '#action1' },
  //   { text: 'Necklaces', link: '#action2' },
  //   { text: 'Earrings', link: '#action3' },
  //   { text: 'Braclets', link: '#action4' },
  //   { text: 'Chokers', link: '#action5' },
  // ];

  // const menuItems2 = [
  //   { text: 'Hight-Low', link: '#option1' },
  //   { text: 'Low-Hight', link: '#option2' },
  // ];

  // const menuItems3 = [
  //   { text: 'Newest', link: '#action1' },
  //   { text: '10 days ago', link: '#action2' },
  // ];

  // const menuItems4 = [
  //   { text: 'Delivered', link: '#option2' },
  //   { text: 'Canceled', link: '#option4' },
  // ];

  return (
    <main>
      <AccountCus />
      <Section>
        <Title>History</Title>
        
          
        <TableContainer>
          <Table columns={columns} dataSource={initialData} pagination={{ pageSize: 6 }} onChange={onChange} />
        </TableContainer>
        
      </Section>
      <Modal
      
        title="Cancel Order"
        open={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to cancel this order?</p>
      </Modal>
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

// const Text = styled.span`
//   font-family: 'Poppins', sans-serif;
//   display: flex;
//   gap: 5px;
//   margin-top: 35px;
//   border-radius: 7px;
// `;

const Title = styled.h1`
  color: #000;
  font: 600 32px 'Crimson Text', sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

// const Filters = styled.div`
//   display: flex;
//   margin-top: 53px;
//   width: 100%;
//   max-width: 1400px;
//   gap: 20px;
//   font-size: 16px;
//   justify-content: flex-start;
//   align-items: center;

//   @media (max-width: 991px) {
//     flex-wrap: wrap;
//     margin-top: 40px;
//   }
// `;

// const CustomSelect = styled.div`
//   display: flex;
//   gap: 5px;
//   color: #000;
//   border-radius: 7px;
//   justify-content: space-between;

//   @media (max-width: 991px) {
//     padding-left: 20px;
//   }
// `;
// const CustomSelects = styled.div`
//   display: flex;
//   gap: 5px;
//   color: #000;
//   border-radius: 7px;
//   justify-content: space-between;
//   align-items: baseline;
//   font-size: 18px;
//   width: 96%;
// `;

const TableContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1400px;
  grid-gap: 15px;
  margin-top: 45px;
  padding-bottom: 11rem;

  @media (max-width: 991px) {
    margin-top: 40px;
    grid-template-columns: 1fr;
  }
`;

export default History;