import React from "react";
// import VoucherCard from "./CartVoucher"; // Đường dẫn tới file chứa component VoucherCard
import styled from "styled-components";
import Footer from '@/components/Footer/Footer';
import AccountCus from '@/components/AccountCus/AccountCus';
import Coupon from "./Coupon";
const Voucher = () => {
  return (
    <div>
      
      <AccountCus/>
    <Main>
      <Title>Voucher</Title>
    <VoucherCardContainer>
    <Coupon
        companyLogo="Aphromas Diamond"
        imageUrl="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf"
        discountText="30% OFF YOUR PURCHASE"
        description="Experience the brilliance of luxury with Diamond Jewelers. Enjoy an exclusive 30% discount onour exquisite diamond collection, including rings, necklaces, earrings, and more. Elevate your imeless beauty of diamonds."
        promoCode="BOH232"
        expiryDate="Jan 03, 2021"
      />
     <Coupon
        companyLogo="Aphromas Diamond"
        imageUrl="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf"
        discountText="20% OFF YOUR PURCHASE"
        description="Our diamond coand-selected for its brilliance and quality, ensuring a piece of fine jewelry that captivates hearts. From engagement rings to earrings and necklaces, our diamonds are crafted to adorn you with timeless grace."
        promoCode="BOH232"
        expiryDate="Jan 03, 2021"
      />
       <Coupon
        companyLogo="Aphromas Diamond"
        imageUrl="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf"
        discountText="20% OFF YOUR PURCHASE"
        description="Indulge in the ends are expertly e commemorating a special occasion or treating yourself to a touch of luxury, our exquisite diamonds promise to elevate every moment with their unparalleled brilliance and sophistication."
        promoCode="BOH232"
        expiryDate="Jan 03, 2021"
      />
       <Coupon
        companyLogo="Aphromas Diamond"
        imageUrl="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf"
        discountText="20% OFF YOUR PURCHASE"
        description="Experience the unparalleled brilliance of our and expyour most cherished moments. Whether adorning your finger with a dazzling engagement ring or enhancing your ensemble with a shimmering pendant, our diamonds are the ultimate symbol of refined elegance and enduring romance.."
        promoCode="BOH232"
        expiryDate="Jan 03, 2021"
      />
       <Coupon
        companyLogo="Aphromas Diamond"
        imageUrl="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf"
        discountText="20% OFF YOUR PURCHASE"
        description="Lorem ipsumSea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandi delicatissimi eam ea. In sed nullam laboramus appellantur, mei ei omnis dolorem mnesarchum."
        promoCode="BOH232"
        expiryDate="Jan 03, 2021"
      />
       <Coupon
        companyLogo="Aphromas Diamond"
        imageUrl="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FVoucher%2F41OUbsDqNRL._AC_UY350_.jpg?alt=media&token=59b55fbb-1249-442d-b6a5-4fecc14a98cf"
        discountText="20% OFF YOUR PURCHASE"
        description="Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandi delicatissimi eam ea. In sed nullam laboramus appellantur, mei ei omnis dolorem mnesarchum."
        promoCode="BOH232"
        expiryDate="Jan 03, 2021"
      />
      {/* <VoucherCard
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
      /> */}
      </VoucherCardContainer>
      </Main>
      <Footer/>
      </div>
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
  padding-right: 6.5rem;
  padding-left: 6.5rem;
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