import styled from 'styled-components';
// import type { MenuProps } from 'antd';
// import {  Space } from 'antd';
import {  Table} from 'antd';
import type { TableProps } from 'antd';




interface DataType {
  key: string;
  nofi: string;
  date: string;
  
}


const data: DataType[] = [
  {
    key: '1',
    nofi: 'AphromasDiamond: Order success. The order has been approved and is ready to be shipped. ',
    date: '1 June 2024 at 8:00 a.m',
  },
  {
    key: '2',
    nofi: 'AphromasDiamond: Order pending approach. Order is pending approval, please wait.',
    date: '1 June 2024 at 8:00 a.m',
  },
  {
    key: '3',
    nofi: 'AphromasDiamond: Please check your cart. 1 item in cart is unavailable',
    date: '1 June 2024 at 8:00 a.m',
  },
  {
    key: '4',
    nofi: 'AphromasDiamond: Order is delivering. The delivery person will contact you soon, please keep an eye on your phone.',
    date: '1 June 2024 at 8:00 a.m',
  },
  {
    key: '5',
    nofi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. ',
    date: '1 June 2024 at 8:00 a.m',
  },
  {
    key: '6',
    nofi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    date: '1 June 2024 at 8:00 a.m',
  },
  {
    key: '7',
    nofi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. ',
    date: '1 June 2024 at 8:00 a.m',
  },
  {
    key: '8',
    nofi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    date: '1 June 2024 at 8:00 a.m',
  },
 
];
const columns: TableProps<DataType>['columns'] = [

  {
    title: '',
    dataIndex: 'nofi',
    key: 'nofi',
  },
  {
    title: '',
    dataIndex: 'date',
    key: 'date',
  },
];


const NotiPage = () => {
  return (
    <main>
      <Section>
        <Title>Nofications</Title>
        
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
//   max-width: 1146px;
//   gap: 20px;
//   font-size: 16px;
//   justify-content: center;
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
//   // padding: 7px 4px;
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
//   width: 100%;



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

export default NotiPage;
