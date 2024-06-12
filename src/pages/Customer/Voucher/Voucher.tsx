import React from 'react';
import styled from 'styled-components';
// import 'font-awesome/css/font-awesome.min.css';
import AccountCus from '@/components/Customer/Account Details/AccountCus';
import RingVoucher from '@/components/Customer/Voucher/RingVoucher';
import DiamondVoucher from '@/components/Customer/Voucher/DiamondVoucher';

const Voucher = () => {
  return (
    <Main>
      <AccountCus />
      <Titles>Voucher</Titles>
      <Section>
        <TypeVoucher>Ring Voucher</TypeVoucher>
        <RingVoucher/>
        <TypeVoucher>Diamond Voucher</TypeVoucher>
        <DiamondVoucher/>
      </Section>
    </Main>
  );
};


export default Voucher;

const Main = styled.div`
  margin-bottom: 20rem;
`;

const Section = styled.div`
  margin: 0 11rem 0 10rem;
  
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

const TypeVoucher = styled.div`
  font-size: 28px;
  display: flex;
  justify-content: space-around;
  padding: 2rem 0 0.5rem 1rem;
`;