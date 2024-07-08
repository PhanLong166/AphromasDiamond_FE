import styled from "styled-components";
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import config from "@/config";
import cookieUtils from "@/services/cookieUtils";

const AccountCus = () => {
  return (
    <MainContainer>
      <EditHeader>
        <Header>My Account</Header>
      </EditHeader>
      <Section>
        <AccountActions>
          <Text><span><i className="fa-solid fa-heart"></i></span>Wishlist</Text>
          <Text><span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
            <Link to={config.routes.public.home} onClick={() => cookieUtils.clear()}>
              Sign Out
            </Link>
          </Text>
        </AccountActions>
        <ProfileSection>
          <ProfileImage loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FAccount%2Fbanner.png?alt=media&token=7726f33e-43c5-49e3-88de-ff6ad1a3d334" alt="Profile Background" />
          <UserName>Le Phuoc Loc</UserName>
          <ProfileTitle>My Account</ProfileTitle>
        </ProfileSection>
        <NavSection>
          <StyledNavLink to="/account">Account Details</StyledNavLink>
          <StyledNavLink to="/order-list">My Orders</StyledNavLink>
          <StyledNavLink to="/history">History</StyledNavLink>
          <StyledNavLink to="/noti">Notifications</StyledNavLink>
          <StyledNavLink to="/voucher">Voucher</StyledNavLink>
        </NavSection>
      </Section>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  align-items: center;
  background: #fff;
  width: 100%;
  max-width: 1400px;
  color: #818594;
  font: 14px / 150% 'Crimson Text', sans-serif;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  display: flex;
  padding: 10px 0;
  
  /* @media (max-width: 991px) {
    padding: 0 20px;
    margin-top: 40px;
  } */
`;

const EditHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
  padding: 10px;
  font-family: "Poppins", san-serif;
  width: 100%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
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
  margin-bottom: 1rem;
  width: 100%;
  max-width: 1400px;
  gap: 20px;
  font-size: 13px;
  color: #000;
  font-weight: 400;
  line-height: 150%;
  justify-content: space-between;
  /* @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  } */
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
  max-width: 1400px;
  align-items: start;
  gap: 20px;
  font-size: 13px;
  color: #000;
  font-weight: 275;
  line-height: 150%;
  padding: 33px 20px 6px;
  
  /* @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  } */
`;

const ProfileImage = styled.img`
  position: absolute;
  inset: 0;
  height: auto;
  width: auto;
  max-height: 65vh;
  max-width: 1400px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const UserName = styled.h2`
  position: relative;
  margin-top: 152px;
  font: italic 400 25px 'Crimson Text', -apple-system, Roboto, Helvetica, sans-serif;
  padding-left: 15px;
  /* @media (max-width: 991px) {
    margin-top: 40px;
  } */
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  min-height: 490px;
  width: 100%;
  max-width: 1400px;
  align-items: start;
  color: #000;
  line-height: 150%;
  padding: 80px 80px 80px 21px;
  /* @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  } */
`;

const ProfileTitle = styled.h3`
  position: relative;
  margin: 15px 0 87px;
  font: 600 21px 'Crimson Text', sans-serif;
  padding-left: 15px;
  /* @media (max-width: 991px) {
    margin-bottom: 40px;
  } */
`;

export default AccountCus;
