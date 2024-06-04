import React from "react";
import VoucherCard from "./CartVoucher"; // Đường dẫn tới file chứa component VoucherCard
import styled from "styled-components";

const Voucher = () => {
  return (
    <Main>
      <Title>Voucher</Title>
    <VoucherCardContainer>
      
      
      <VoucherCard
        imageSrc="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf" // Đường dẫn hình ảnh
        status="Active" 
        voucherType="Back Friday Voucher" 
        price="50$" 
        shopName="Aphromas Diamond" 
      />
      <VoucherCard
        imageSrc="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf" // Đường dẫn hình ảnh
        status="Active" 
        voucherType="Back Friday Voucher" 
        price="50$" 
        shopName="Aphromas Diamond" 
      />
      <VoucherCard
        imageSrc="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf" // Đường dẫn hình ảnh
        status="No Active" 
        voucherType="Back Friday Voucher" 
        price="50$" 
        shopName="Aphromas Diamond" 
      />
      <VoucherCard
        imageSrc="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf" // Đường dẫn hình ảnh
        status="Active" 
        voucherType="Back Friday Voucher" 
        price="50$" 
        shopName="Aphromas Diamond" 
      />
       <VoucherCard
        imageSrc="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf" // Đường dẫn hình ảnh
        status="Active" 
        voucherType="Back Friday Voucher" 
        price="50$" 
        shopName="Aphromas Diamond" 
      />
      <VoucherCard
        imageSrc="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf" // Đường dẫn hình ảnh
        status="No Active" // Trạng thái của voucher
        voucherType="Back Friday Voucher" // Loại voucher
        price="50$" // Giá của voucher
        shopName="Aphromas Diamond" // Tên cửa hàng
      />
      </VoucherCardContainer>
      </Main>
  );
};

export default Voucher;
const VoucherCardContainer = styled.div`
  display: flex;
  gap: 20px; // Khoảng cách giữa các VoucherCard
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-evenly;
  padding-top: 5rem;
  padding-bottom: 12rem;
  // @media (min-width: 768px) {
  //   justify-content: space-between; /* Hiển thị hai VoucherCard trên một hàng */
  // }
  
`;
const Title = styled.h1`
  color: #000;
  font: 600 32px 'Crimson Text', sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;
const Main = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 29px;
  background: #fff;

`;