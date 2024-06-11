import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import AccountCus from '@/components/AccountCus/AccountCus';

const App = () => {
  return (
    <Container>
      <GigItem
        day="23"
        month="Feb"
        eventTitle="Special Voucher"
        eventName="Aphromas Store"
        date="Monday 15th 2016"
        time="15:20Pm & 11:00Am"
        location="North, Soth, United State, Amre"
        locationDetails="Party Number 16,20"
        buttonLabel="Voucher"
      />
    </Container>
  );
};

interface GigProps {
  day: string;
  month: string;
  eventTitle: string;
  eventName: string;
  date: string;
  time: string;
  location: string;
  locationDetails: string;
  buttonLabel: string;
}

const GigItem: React.FC<GigProps> = ({ day, month, eventTitle, eventName, date, time, location, locationDetails, buttonLabel }) => (

  <Main>
    <AccountCus />
    <Titles>Voucher</Titles>
    <Section>
      <Item>
        <ItemRight>
          <Number>{day}</Number>
          <Day>{month}</Day>
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
          <Button className="tickets">{buttonLabel}</Button>
        </ItemLeft>
      </Item>
      <Item>
        <ItemRight>
          <Number>{day}</Number>
          <Day>{month}</Day>
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
          <Button className="tickets">{buttonLabel}</Button>
        </ItemLeft>
      </Item>
      
    </Section>
  </Main>
);
const Main = styled.div`

`;

const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20rem;
`;

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  overflow: hidden;
`;

const Titles = styled.h1`
  color: #000;
  font: 600 32px 'Crimson Text', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1.5rem 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Item = styled.div`
  width: 30%;
  padding: 0 20px;
  background: #fff;
  overflow: hidden;
  margin: 10px;
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
  color: #111;
`;

const Day = styled.p`
  color: #555;
  font-size: 15px;
`;

const UpBorder = styled.span`
  padding: 14px 15px;
  background-color: #ddd;
  border-radius: 50%;
  position: absolute;
  top: -80px;
  left: 100%;
  transform: translateX(-50%);
`;

const DownBorder = styled.span`
  padding: 14px 15px;
  background-color: #ddd;
  border-radius: 50%;
  position: absolute;
  bottom: -80px;
  left: 100%;
  transform: translateX(-50%);
`;

const ItemLeft = styled.div`
  // padding: 20px;
  flex: 1;
  padding: 20px 0 20px 34px;
`;

const Event = styled.p`
  color: #555;
  font-size: 15px;
  margin-bottom: 9px;
`;

const Title = styled.h2`
  color: #111;
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
  color: #888;
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

const Button = styled.button`
  color: #fff;
  padding: 5px 11px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background: #777;
`;

export default App;
