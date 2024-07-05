import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
// import { diamondvouchers} from './data';
import { diamondvouchers } from "../../Customer/Checkout/Data/data";

const App = () => {
 
  const availableVouchers = diamondvouchers.filter(diamond => !diamond.used);

  return (
    <Container>
      
      {availableVouchers.map((diamond, index) => (
        <GigItem key={index} {...diamond} />
      ))}
    </Container>
  );
};

interface GigProps {
  price: string;
  character: string;
  eventTitle: string;
  eventName: string;
  date: string;
  time: string;
  location: string;
  locationDetails: string;
  buttonLabel: string;
  buttonLabeles: string;
}

const GigItem: React.FC<GigProps> = ({
  price,
  character,
  eventTitle,
  eventName,
  date,
  time,
  location,
  locationDetails,
  buttonLabel,
 
}) => (
  <Item>
    <ItemRight>
      <Number>{price}</Number>
      <Character>{character}</Character>
      <UpBorder />
      <DownBorder />
    </ItemRight>
    <ItemLeft>
      <Event>{eventTitle}</Event>
      <Title>{eventName}</Title>
      <Schedule>
        <Icon className="fa fa-table" />
        <Text>
          {date} <br /> {time}
        </Text>
      </Schedule>
      <Fix />
      <Location>
        <Icon className="fa fa-map-marker" />
        <Text>
          {location} <br /> {locationDetails}
        </Text>
      </Location>
      <Fix />
      <Row>
        <Buttons>{buttonLabel}</Buttons>
        {/* <Button>{buttonLabeles}</Button> */}
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
  top: -150px;
  left: 100%;
  transform: translateX(-50%);
`;

const DownBorder = styled.span`
  padding: 10px 20px;
  background-color: #ddd;
  border-radius: 50%;
  position: relative;
  bottom: -90px;
  left: 50%;
  transform: translateX(-50%);
`;

const ItemLeft = styled.div`
  flex: 1;
  padding: 10px 0 10px 34px;
`;

const Event = styled.p`
  color: #102c57;
  font-size: 15px;
  margin-bottom: 9px;
`;

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

const Location = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
`;

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
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    transition: all 0.45s ease;
    
`;


export default App;
