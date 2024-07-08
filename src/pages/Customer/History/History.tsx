import styled from 'styled-components';
import { Space, Table, Modal, TableColumnsType, Tag, TableProps } from 'antd';
import AccountCus from '@/components/Customer/Account Details/AccountCus';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { initialData, DataType } from './data';
// import DropdownButton from './DropdownButton';



const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const History = () => {

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
    
    { title: 'Price', dataIndex: 'price',
      // defaultSortOrder: "descend",
    sorter: (a: DataType, b: DataType) => a.price - b.price,
     },
    { title: 'Status', dataIndex: 'status',
    render: (_, { status }) => {
      let color = "green";
      if (status === "Pending") {
        color = "grey";
      } else if (status === "Completed") {
        color = "#32CD32";
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
      // { text: "Pending", value: "Pending" },
      { text: "Delivered", value: "Delivered" },
      // { text: "Delivering", value: "Delivering" },
      { text: "Completed", value: "Completed" },
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