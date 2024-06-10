import styled from "styled-components";
import { Link, NavLink as RouterNavLink } from 'react-router-dom';

const AccountCus = () => {
  return (
    <MainContainer>
      <Header>My Account</Header>
      <Section>
        <AccountActions>
          <Text><span><i className="fa-solid fa-heart"></i></span>Wishlist</Text>
          <Text><span><i className="fa-solid fa-arrow-right-from-bracket"></i></span><Link to="/login">Sign Out</Link></Text>
        </AccountActions>
        <ProfileSection>
          <ProfileImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58c425c0dfdc13b98bd59ddae43e37c2f8382c9add805d23c126aecaab4bff46?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Profile Background" />
          <UserName>Le Phuoc Loc</UserName>
          <ProfileTitle>My Account</ProfileTitle>
        </ProfileSection>
        <NavSection>
          <StyledNavLink to="/account">Account Details</StyledNavLink>
          <StyledNavLink to="/order-list">My Orders</StyledNavLink>
          <StyledNavLink to="/history">History</StyledNavLink>
          <StyledNavLink to="/noti">Nofications</StyledNavLink>
          <StyledNavLink to="/voucher">Voucher</StyledNavLink>
        </NavSection>
      </Section>
    </MainContainer>
  );
};

const MainContainer = styled.div``;

const Header = styled.header`
  background: #fff;
    width: 100%;
    color: #818594;
    font: 14px / 150% 'Crimson Text', sans-serif;
    border-bottom: 1px solid #e4e4e4;
    border-top: 1px solid #e4e4e4;
    padding: 4px 0;
    margin-left: 9.5rem;

  @media (max-width: 991px) {
    padding: 0 20px 0 30px;
    margin-top: 40px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background: #fff;
`;

const Text = styled.span`
  font-family: 'Poppins', sans-serif;
  display: flex;
  gap: 5px;
  margin-top: 35px;
  border-radius: 7px;
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

const StyledNavLink = styled(RouterNavLink)`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: #000;
  text-decoration: none;
  padding: 10px 15px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #fff;
     background-color: #102c57;
  }

  &.active {
    font-weight: 600;
    color: #fff;
    background-color: #102c57;
  }
`;

const NavSection = styled.nav`
  border-color: rgba(0, 0, 0, 1);
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
  font: italic 400 32px 'Crimson Text', -apple-system, Roboto, Helvetica, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
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

const ProfileTitle = styled.h3`
  position: relative;
  margin: 15px 0 87px;
  font: 600 25px 'Crimson Text', sans-serif;
  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

export default AccountCus;
