import styled from 'styled-components';
import AccountCus from '@/components/AccountCus/AccountCus';

const Account = () => {
  return (
    <div>
      <AccountCus/>
    <MainContainer>
      
      <Section>
        <ProfileTitle>My Account</ProfileTitle>
        <InfoSection>
          <InfoContainer>
            <Column>
              <InfoItem>
                <InfoTitle>Address Delivery</InfoTitle>
                <SubTitle>STREET ADDRESS</SubTitle>
                <Description>191-103 Integer Rd.</Description>
                <DetailGroup>
                  <Label>CITY</Label>
                  <Detail>Forrest Ray</Detail>
                  <Label>PHONE </Label>
                  <Detail>(404) 960-3807</Detail>
                </DetailGroup>
              </InfoItem>
            </Column>
            <Column>
              <InfoItem>
                <EditButton>Edit</EditButton>
                <Label>COUNTRY</Label>
                <Detail>Mexico</Detail>
              </InfoItem>
            </Column>
            <Column>
              <InfoItem>
                <InfoTitle>Account Details</InfoTitle>
                <DetailGroup>
                  <Label>First Name</Label>
                  <Detail>Le Phuoc</Detail>
                  <Label>Last Name</Label>
                  <Detail>Loc</Detail>
                  <Label>Phone</Label>
                  <Detail>(404) 960-3807</Detail>
                </DetailGroup>
              </InfoItem>
            </Column>
            <Column>
              <InfoItem>
                <EditButton>Edit</EditButton>
                <Label>Email</Label>
                <Detail>loclpse171201@gmail.com</Detail>
                <Label>Current Password</Label>
                <Detail>*************</Detail>
              </InfoItem>
            </Column>
          </InfoContainer>
        </InfoSection>
      </Section>
    </MainContainer>
    </div>
  );
};

const MainContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Section = styled.section`
border-color: rgba(0, 0, 0, 1);
background-color: #fff;
color: #000;
justify-content: center;
margin: 0 auto;
font: 400 15px / 150% 'Crimson Text', sans-serif;
margin-bottom: 150px;
width: 150vh;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px 0 30px;
  }
`;

const ProfileTitle = styled.div`
  position: relative;
  margin: 15px 0 87px;
  font: 600 32px 'Crimson Text', sans-serif;
  display: flex;
  justify-content: space-around;
  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

const InfoSection = styled.section`
  width: 100%;
  max-width: 1194px;
  padding: 0 20px;
  margin: 0 auto;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: #000;
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const InfoTitle = styled.h4`
  font-family: 'Poppins', sans-serif;
`;

const SubTitle = styled.h5`
  font-family: 'Poppins', sans-serif;
  font-weight: 250;
  align-self: start;
  margin-top: 48px;
  @media (max-width: 991px) {
    margin-top: 40px;
    margin-left: 10px;
  }
`;

const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  letter-spacing: 3.75px;
  margin-top: 12px;
`;

const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -2px;
  align-items: start;
  font-weight: 250;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  padding-top: 22px;
`;

const Detail = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 0.75px;
  margin-top: 6px;
`;

const EditButton = styled.button`
  font-family: 'Poppins', sans-serif;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
  align-self: flex-end;
  width: 100px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #102C57;
    color: #fff;
  }

  @media (max-width: 991px) {
    padding: 6px 20px;
    width: auto;
  }
`;

export default Account;
