import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { showAllVoucher } from "@/services/voucherAPI";
import { Pagination } from "antd";

interface Voucher {
  VoucherID: number;
  VoucherCode: string;
  Description: string;
  StartDate: string;
  EndDate: string;
  PercentDiscounts: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour time format
    timeZone: "UTC", // Specify time zone if necessary
  }).format(date);
};

const formatPercent = (percentString: string) => {
  const percent = parseFloat(percentString);
  // Format the number to remove trailing zeros
  return percent.toFixed(2).replace(/\.00$/, '');
};

const App = () => {
  const [vouchersList, setVoucherList] = useState<Voucher[]>([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); 
  const getAllVouchers = async () => {
    try {
      const { data } = await showAllVoucher();
      setVoucherList(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllVouchers();
  }, []);
  // const availableVouchers = vouchersList;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vouchersList.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
    <Container>
    {currentItems.map((voucher) => (
      <GigItem key={voucher.VoucherID} {...voucher} />
    ))}
   
  </Container>
    <Pagination 
    style={{ marginTop: "45px",display:"flex",justifyContent:"center" }}
    current={currentPage}
    pageSize={itemsPerPage}
    total={vouchersList.length}
    onChange={handlePageChange}
  />
  </div>
  );
};

interface GigProps {
  VoucherCode: string;
  Description: string;
  StartDate: string;
  EndDate: string;
  PercentDiscounts: string;
  
}

const GigItem: React.FC<GigProps> = ({
  VoucherCode,
  Description,
  StartDate,
  EndDate,
  PercentDiscounts,
}) => (
  <Item>
    <ItemRight>
      <Number>{formatPercent(PercentDiscounts)}</Number>
      <Character>%</Character>
      <UpBorder />
      <DownBorder />
    </ItemRight>
    <ItemLeft>
      {/* <Event>{Description}</Event> */}
      <Title>{Description}</Title>
      <Schedule>
        <Icon className="fa fa-table" />
        <Text>
          {formatDate(StartDate)} <br /> <br />  {formatDate(EndDate)}
        </Text>
      </Schedule>
      <Fix />
      {/* <Location>
        <Icon className="fa fa-map-marker" />
        <Text>
          {location} <br /> {locationDetails}
        </Text>
      </Location> */}
      <Fix />
      <Row>
        <Buttons>{VoucherCode}</Buttons>
      </Row>
    </ItemLeft>
  </Item>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 20px;
  max-width: 1180px;
  margin: 0 auto;
  overflow: hidden;
`;

const Item = styled.div`
  padding: 10px;
  background: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
`;

const ItemRight = styled.div`
  padding: 20px;
  position: relative;
  text-align: center;
  border-right: 1px dotted #999;
`;

const Number = styled.h2`
  font-size: 30px;
  color: #102c57;
`;

const Character = styled.p`
  color: #555;
  font-size: 22px;
`;

const UpBorder = styled.span`
  padding: 10px 20px;
  background-color: #ddd;
  border-radius: 50%;
  position: relative;
  top: -127px;
  left: 100%;
  transform: translateX(-50%);
`;

const DownBorder = styled.span`
  padding: 10px 20px;
  background-color: #ddd;
  border-radius: 50%;
  position: relative;
  bottom: -65px;
  left: 50%;
  transform: translateX(-50%);
`;

const ItemLeft = styled.div`
  flex: 1;
  padding: 10px 0 10px 34px;
`;

// const Event = styled.p`
//   color: #102c57;
//   font-size: 15px;
//   margin-bottom: 9px;
// `;

const Title = styled.h2`
  color: #102c57;
  font-size: 24px;
  margin-bottom: 12px;
`;

const Schedule = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
`;

const Icon = styled.div`
  margin-right: 10px;
  font-size: 20px;
  color: #666;
`;

const Text = styled.p`
  color: #000;
  margin: 0;
`;

const Fix = styled.div`
  clear: both;
`;

// const Location = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
//   font-size: 15px;
// `;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Buttons = styled.div`
  font-size: 12px;
  padding: 10px 20px;
  background-color: #fff9f7;
  color: #151542;
  border: 1px solid #151542;
  /* cursor: pointer; */
  transition: background-color 0.3s ease;
  font-family: "Gantari", sans-serif;
  font-weight: 600;
  transition: all 0.45s ease;
`;

export default App;
