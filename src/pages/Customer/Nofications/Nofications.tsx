import styled from 'styled-components';
// import type { MenuProps } from 'antd';
// import { Space } from 'antd';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import AccountCus from '@/components/Customer/Account Details/AccountCus';

interface DataType {
  key: string;
  nofi: string;
  date: string;
  description: string;
}

const data: DataType[] = [
  {
    key: '1',
    nofi: 'Order success',
    date: '1 June 2024 at 8:00 a.m',
    description: 'AphromasDiamond: Order success. The order has been approved and is ready to be shipped.',
  },
  {
    key: '2',
    nofi: 'Order pending',
    date: '1 June 2024 at 8:00 a.m',
    description: 'AphromasDiamond: Order pending approach. Order is pending approval, please wait.',
  },
  {
    key: '3',
    nofi: 'Check your cart',
    date: '1 June 2024 at 8:00 a.m',
    description: 'AphromasDiamond: Please check your cart. 1 item in cart is unavailable.',
  },
  {
    key: '4',
    nofi: 'Order delivering',
    date: '1 June 2024 at 8:00 a.m',
    description: 'AphromasDiamond: Order is delivering. The delivery person will contact you soon, please keep an eye on your phone.',
  },
  {
    key: '5',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    key: '6',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    key: '7',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    key: '8',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    key: '9',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    key: '10',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    key: '11',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    key: '12',
    nofi: 'Lorem ipsum',
    date: '1 June 2024 at 8:00 a.m',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
];

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Notification Message',
    dataIndex: 'nofi',
    key: 'nofi',
    render: (text, record) => (
      <div>
        <strong>{text}</strong>
        <div>{record.description}</div>
      </div>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

const NotiPage = () => {
  return (
    <main>
      <AccountCus />
      <Section>
        <Title>Notifications</Title>
        <TableContainer>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 6 }}
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

export default NotiPage;
