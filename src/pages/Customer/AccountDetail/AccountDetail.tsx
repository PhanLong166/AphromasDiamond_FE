import styled from 'styled-components';
import { ChangeEvent, FormEvent, useState } from 'react';
import AccountCus from '@/components/Customer/Account Details/AccountCus';


interface Address {
  street: string;
  city: string;
  phone: string;
  country: string;
}

interface Account {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}

const Account = () => {
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);
  const [isAccountModalOpen, setAccountModalOpen] = useState(false);

  const [address, setAddress] = useState<Address>({
    street: '191-103 Integer Rd.',
    city: 'Forrest Ray',
    phone: '(404) 960-3807',
    country: 'Mexico',
  });

  const [account, setAccount] = useState<Account>({
    firstName: 'Le Phuoc',
    lastName: 'Loc',
    phone: '(404) 960-3807',
    email: 'loclpse171201@gmail.com',
    password: '*************',
  });

  const [tempAddress, setTempAddress] = useState<Address>({ ...address });
  const [tempAccount, setTempAccount] = useState<Account>({ ...account });

  const [addressErrors, setAddressErrors] = useState<Partial<Address>>({});
  const [accountErrors, setAccountErrors] = useState<Partial<Account>>({});

  const validateAddress = (address: Address) => {
    const errors: Partial<Address> = {};
    if (!address.street) errors.street = 'Street address is required';
    if (!address.city) errors.city = 'City is required';
    if (!address.phone) errors.phone = 'Phone number is required';
    if (!address.country) errors.country = 'Country is required';
    return errors;
  };

  const validateAccount = (account: Account) => {
    const errors: Partial<Account> = {};
    if (!account.firstName) errors.firstName = 'First name is required';
    if (!account.lastName) errors.lastName = 'Last name is required';
    if (!account.phone) errors.phone = 'Phone number is required';
    if (!account.email) errors.email = 'Email is required';
    if (!account.password) errors.password = 'Password is required';
    return errors;
  };

  const handleAddressEdit = () => {
    setTempAddress({ ...address });
    setAddressModalOpen(true);
  };

  const handleAccountEdit = () => {
    setTempAccount({ ...account });
    setAccountModalOpen(true);
  };

  const closeModal = () => {
    setAddressModalOpen(false);
    setAccountModalOpen(false);
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleAccountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };

  const handleAddressSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateAddress(tempAddress);
    if (Object.keys(errors).length === 0) {
      setAddress(tempAddress);
      closeModal();
    } else {
      setAddressErrors(errors);
    }
  };

  const handleAccountSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateAccount(tempAccount);
    if (Object.keys(errors).length === 0) {
      setAccount(tempAccount);
      closeModal();
    } else {
      setAccountErrors(errors);
    }
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
                  value={tempAddress.street}
                  onChange={handleAddressChange}
                />
                {addressErrors.street && <Error>{addressErrors.street}</Error>}
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={tempAddress.city}
                  onChange={handleAddressChange}
                />
                {addressErrors.city && <Error>{addressErrors.city}</Error>}
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={tempAddress.phone}
                  onChange={handleAddressChange}
                />
                {addressErrors.phone && <Error>{addressErrors.phone}</Error>}
              </label>
              <label>
                Country:
                <input
                  type="text"
                  name="country"
                  value={tempAddress.country}
                  onChange={handleAddressChange}
                />
                {addressErrors.country && <Error>{addressErrors.country}</Error>}
              </label>
              <ModalActions>
                <button type="submit">Save</button>
                <button type="button" onClick={closeModal}>Cancel</button>
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
                  value={tempAccount.firstName}
                  onChange={handleAccountChange}
                />
                {accountErrors.firstName && <Error>{accountErrors.firstName}</Error>}
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={tempAccount.lastName}
                  onChange={handleAccountChange}
                />
                {accountErrors.lastName && <Error>{accountErrors.lastName}</Error>}
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={tempAccount.phone}
                  onChange={handleAccountChange}
                />
                {accountErrors.phone && <Error>{accountErrors.phone}</Error>}
              </label>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={tempAccount.email}
                  onChange={handleAccountChange}
                />
                {accountErrors.email && <Error>{accountErrors.email}</Error>}
              </label>
              <label>
                Current Password:
                <input
                  type="password"
                  name="password"
                  value={tempAccount.password}
                  onChange={handleAccountChange}
                />
                {accountErrors.password && <Error>{accountErrors.password}</Error>}
              </label>
              <ModalActions>
                <button type="submit">Save</button>
                <button type="button" onClick={closeModal}>Cancel</button>
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
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

const InfoTitle = styled.div`
  font-family: 'Crimson Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 25px;
`;

const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
`;

const Description = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 0.75px;
  margin-top: 6px;
  font-size: 15px;
  @media (max-width: 991px) {
    margin-top: 10px;
  }
`;

const Detail = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 0.75px;
  margin-top: 6px;
`;

const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  padding-top: 22px;
  font-size: 17px;
`;

const EditButton = styled.button`
  font-size: 12px;
  padding: 10px 20px;
  background-color: #fff9f7;
  color: #151542;
  border: none;
  border: 1px solid #151542;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Gantari", sans-serif;
  font-weight: 600;
  align-self: flex-end;
  transition: all 0.45s ease;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #102c57;
    color: #fff;
    transition: all 0.45s ease;
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
    gap: 10px;
    margin-top: 20px;
    align-content: center;
    flex-wrap: wrap;

  button {
    font-size: 12px;
    padding: 10px 20px;
    background-color: #fff9f7;
    color: #151542;
    border: none;
    border: 1px solid #151542;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    transition: all 0.45s ease;
    width: 100%;

    &:hover {
      background-color: #102c57;
      color: #fff;
      transition: all 0.45s ease;
    }
  }
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;

export default Account;
