import styled from 'styled-components';
import { ChangeEvent, FormEvent, useState } from 'react';
import AccountCus from '@/components/Customer/Account Details/AccountCus';

const Account = () => {
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);
  const [isAccountModalOpen, setAccountModalOpen] = useState(false);

  const [address, setAddress] = useState({
    street: '191-103 Integer Rd.',
    city: 'Forrest Ray',
    phone: '(404) 960-3807',
    country: 'Mexico',
  });

  const [account, setAccount] = useState({
    firstName: 'Le Phuoc',
    lastName: 'Loc',
    phone: '(404) 960-3807',
    email: 'loclpse171201@gmail.com',
    password: '*************',
  });

  const handleAddressEdit = () => {
    setAddressModalOpen(true);
  };

  const handleAccountEdit = () => {
    setAccountModalOpen(true);
  };

  const closeModal = () => {
    setAddressModalOpen(false);
    setAccountModalOpen(false);
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleAccountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };

  const handleAddressSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
  };

  const handleAccountSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div>
      <AccountCus />
      <MainContainer>
        <Section>
          <ProfileTitle>My Account</ProfileTitle>
          <InfoSection>
            <InfoContainer>
              <Column>
                <Row>
                  <InfoTitle>Address Delivery</InfoTitle>
                  <EditButton onClick={handleAddressEdit}>Edit</EditButton>
                </Row>
                <Row>
                  <Column>
                    <DetailGroup>
                      <Label>STREET ADDRESS</Label>
                      <Description>{address.street}</Description>
                    </DetailGroup>
                    <DetailGroup>
                      <Label>CITY</Label>
                      <Detail>{address.city}</Detail>
                    </DetailGroup>
                    <DetailGroup>
                      <Label>PHONE</Label>
                      <Detail>{address.phone}</Detail>
                    </DetailGroup>
                  </Column>
                  <Column>
                    <DetailGroup>
                      <Label>COUNTRY</Label>
                      <Detail>{address.country}</Detail>
                    </DetailGroup>
                  </Column>
                </Row>
              </Column>
              <Column>
                <Row>
                  <InfoTitle>Account Details</InfoTitle>
                  <EditButton onClick={handleAccountEdit}>Edit</EditButton>
                </Row>
                <Row>
                  <Column>
                    <DetailGroup>
                      <Label>FIRST NAME</Label>
                      <Detail>{account.firstName}</Detail>
                    </DetailGroup>
                    <DetailGroup>
                      <Label>PHONE</Label>
                      <Detail>{account.phone}</Detail>
                    </DetailGroup>
                    <DetailGroup>
                      <Label>EMAIL</Label>
                      <Detail>{account.email}</Detail>
                    </DetailGroup>
                  </Column>
                  <Column>
                    <DetailGroup>
                      <Label>LAST NAME</Label>
                      <Detail>{account.lastName}</Detail>
                    </DetailGroup>
                    <DetailGroup>
                      <Label>CURRENT PASSWORD</Label>
                      <Detail>{account.password}</Detail>
                    </DetailGroup>
                  </Column>
                </Row>
              </Column>
            </InfoContainer>
          </InfoSection>
        </Section>
      </MainContainer>

      {isAddressModalOpen && (
        <Modal>
          <ModalContent>
            <h2>Edit Address Delivery</h2>
            <form onSubmit={handleAddressSubmit}>
              <label>
                Street Address:
                <input
                  type="text"
                  name="street"
                  value={address.street}
                  onChange={handleAddressChange}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleAddressChange}
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={address.phone}
                  onChange={handleAddressChange}
                />
              </label>
              <label>
                Country:
                <input
                  type="text"
                  name="country"
                  value={address.country}
                  onChange={handleAddressChange}
                />
              </label>
              <ModalActions>
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit">Save</button>
              </ModalActions>
            </form>
          </ModalContent>
        </Modal>
      )}

      {isAccountModalOpen && (
        <Modal>
          <ModalContent>
            <h2>Edit Account Details</h2>
            <form onSubmit={handleAccountSubmit}>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={account.firstName}
                  onChange={handleAccountChange}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={account.lastName}
                  onChange={handleAccountChange}
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={account.phone}
                  onChange={handleAccountChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={account.email}
                  onChange={handleAccountChange}
                />
              </label>
              <label>
                Current Password:
                <input
                  type="password"
                  name="password"
                  value={account.password}
                  onChange={handleAccountChange}
                />
              </label>
              <ModalActions>
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit">Save</button>
              </ModalActions>
            </form>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

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
  width: 160vh;
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
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const InfoTitle = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
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
    background-color: #102c57;
    color: #fff;
  }

  @media (max-width: 991px) {
    padding: 6px 20px;
    width: auto;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  form {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px; 
  }

  label {
    display: block;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin-top: 5px;
  }
  h2 {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
  }
`;


const ModalActions = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  button {
    grid-column: span 1; /* Chiếm 2 cột */
    width: 100%;
  }
`;

export default Account;
