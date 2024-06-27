import styled from 'styled-components';
import { useState } from 'react';
import { Table } from 'antd';
import type { TableProps, TableColumnType } from 'antd';
import AccountCus from '@/components/Customer/Account Details/AccountCus';

interface DataType {
  key: string;
  nofi: string;
  date: string;
  description: string;
  read: boolean;
}

const initialData: DataType[] = [
  {
    key: '1',
    nofi: 'Order success',
    date: '1 June 2023 at 8:00 a.m',
    description: 'AphromasDiamond: Order success. The order has been approved and is ready to be shipped.',
    read: false,
  },
  {
    key: '2',
    nofi: 'Order pending',
    date: '14 June 2020 at 8:00 a.m',
    description: 'AphromasDiamond: Order pending approach. Order is pending approval, please wait.',
    read: false,
  },
  {
    key: '3',
    nofi: 'Check your cart',
    date: '15 June 2024 at 8:00 a.m',
    description: 'AphromasDiamond: Please check your cart. 1 item in cart is unavailable.',
    read: false,
  },
  {
    key: '4',
    nofi: 'Order delivering',
    date: '16 June 2024 at 8:00 a.m',
    description: 'AphromasDiamond: Order is delivering. The delivery person will contact you soon, please keep an eye on your phone.',
    read: false,
  },
  {
    key: '5',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    read: false,
  },
  {
    key: '6',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    read: false,
  },
  {
    key: '7',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    read: false,
  },
  {
    key: '8',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    read: false,
  },
  {
    key: '9',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    read: false,
  },
  {
    key: '10',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    read: false,
  },
  {
    key: '11',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    read: false,
  },
  {
    key: '12',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    read: false,
  },
];

const NotiPage = () => {
  const [data, setData] = useState(initialData);

  const handleRowClick = (record: DataType) => {
    const updatedData = data.map((item) =>
      item.key === record.key ? { ...item, read: true } : item
    );
    setData(updatedData);
  };

  const columns: TableColumnType<DataType>[] = [
    {
      title: 'Notification Message',
      dataIndex: 'nofi',
      key: 'nofi',
      filters: [
        { text: 'Unread', value: 'unread' },
        { text: 'Read', value: 'read' },
      ],
      onFilter: (value, record) => (value === 'read' ? record.read : !record.read),
      render: (text, record) => (
        <NofiContainer>
          {!record.read && <UnreadDot />}
          <div>
            <strong>{text}</strong>
            <div>{record.description}</div>
          </div>
        </NofiContainer>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter:  (a: DataType, b: DataType) => a.date.localeCompare(b.date),
    },
  ];

  return (
    <main>
      <AccountCus />
      <Section>
        <Title>Notifications</Title>
        <TableContainer>
          <StyledTable
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 6 }}
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
            })}
            rowClassName={(record) => (record.read ? 'read' : 'unread')}
          />
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

const Title = styled.h1`
  color: #000;
  font: 600 32px 'Crimson Text', sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const TableContainer = styled.div`
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

const StyledTable = styled(Table)<TableProps<DataType>>`
cursor: pointer;
  .read {
    background-color: #f0f0f0;
  }
  .unread {
    background-color: #ffffff;
  }
`;

const NofiContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UnreadDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  margin-right: 8px;
`;

export default NotiPage;
