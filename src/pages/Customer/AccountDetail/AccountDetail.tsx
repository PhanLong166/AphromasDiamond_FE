import styled from 'styled-components';

const Account = () => {
  return (
    <MainContainer>
        <Header>My Account</Header>
      <Section>
        
        <AccountActions>
          
            <Text><span><i className="fa-solid fa-heart"></i></span>Wishlist</Text>
            <Text><span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>Sign Out</Text>
          
        </AccountActions>
        <ProfileSection>
          <ProfileImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58c425c0dfdc13b98bd59ddae43e37c2f8382c9add805d23c126aecaab4bff46?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Profile Background" />
          <UserName>Le Phuoc Loc</UserName>
          <ProfileTitle>My Account</ProfileTitle>
        </ProfileSection>
        <NavSection>
          <NavItem>Account Details</NavItem>
          <NavItem>My Orders</NavItem>
          <NavItem>History</NavItem>
          <NavItem>Nofications</NavItem>
          <NavItem>Voucher</NavItem>
        </NavSection>
        <InfoSection>
          <InfoContainer>
            <Column>
              <InfoItem>
                <InfoTitle>Address Delivery</InfoTitle>
                <SubTitle>STRESS ADDRESS</SubTitle>
                <Description>191-103 Integer Rd.</Description>
                <DetailGroup>
                  <Label>CITY</Label>
                  <Detail>Forrest Ray</Detail>
                  <Label>PHONE NUMBER</Label>
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
  );
};

const Header = styled.div`
background: #fff;
  width: 100%;
  padding: 14px 60px;
  color: #818594;
  font: 15px/150% 'Crimson Text', sans-serif;
  border-bottom: 1px solid #000;
`;
const MainContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  border-color: rgba(0, 0, 0, 1);
//   border-style: solid;
  border-top-width: 1px;
  border-bottom-width: 1px;
  background-color: #fff;
  align-self: stretch;
  margin-top: 29px;
  width: 100%;
  align-items: start;
  color: #818594;
  justify-content: center;
  padding: 19px 127px;
  font: 400 15px/150% Crimson Text, sans-serif;
  margin-bottom: 150px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px 0 30px;
  }
`;


const AccountActions = styled.div`
  display: flex;
  margin-top: 75px;
  width: 100%;
  max-width: 1219px;
  gap: 20px;
  font-size: 13px;
  color: #000;
  font-weight: 400;
  line-height: 150%;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;



const Text = styled.span`
  font-family: Poppins, sans-serif;
  gap: 20px;
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  min-height: 490px;
  margin-top: 19px;
  width: 100%;
  max-width: 1219px;
  align-items: start;
  color: #000;
  line-height: 150%;
  padding: 80px 80px 80px 21px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const UserName = styled.h2`
  position: relative;
  margin-top: 152px;
  font: italic 400 20px Crimson Text, -apple-system, Roboto, Helvetica, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProfileTitle = styled.h3`
  position: relative;
  margin: 15px 0 87px;
  font: 600 25px Crimson Text, sans-serif;
  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

const NavSection = styled.nav`
  border-color: rgba(0, 0, 0, 1);
//   border-style: solid;
  border-bottom: solid;
  display: flex;
  width: 100%;
  max-width: 1219px;
  align-items: start;
  gap: 20px;
  font-size: 13px;
  color: #000;
  font-weight: 275;
  line-height: 150%;
  padding: 33px 20px 6px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const NavItem = styled.span`
  font-family: Poppins, sans-serif;
  font-weight: 600;
`;

const InfoSection = styled.section`
  margin-top: 91px;
  width: 100%;
  max-width: 1194px;
  padding: 0 20px;
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
  font-family: Poppins, sans-serif;
`;

const SubTitle = styled.h5`
  font-family: Poppins, sans-serif;
  font-weight: 250;
  align-self: start;
  margin-top: 48px;
  margin-left: 21px;
  @media (max-width: 991px) {
    margin-top: 40px;
    margin-left: 10px;
  }
`;

const Description = styled.p`
  font-family: Poppins, sans-serif;
  letter-spacing: 3.75px;
  margin-top: 12px;
padding-left: 21px;
`;

const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -2px;
  align-items: start;
  font-weight: 250;
  padding: 0 75px 0 21px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Label = styled.label`
  font-family: Poppins, sans-serif;
  padding-top: 22px;
`;

const Detail = styled.span`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  letter-spacing: 0.75px;
  margin-top: 6px;
`;

const EditButton = styled.button`
  font-family: Poppins, sans-serif;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 1);
  background-color: #fff;
  align-self: end;
  width: 117px;
  font-weight: 275;
  line-height: 150%;
  justify-content: center;
  padding: 6px 52px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export default Account;