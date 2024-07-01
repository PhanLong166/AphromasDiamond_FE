import { useState } from "react";
import styled from "styled-components";

const PaymentMethod: React.FC = () => {
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  
    const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedPayment(event.target.value);
    };
  
    return (
      <PaymentSection>
        <PaymentDropdown
          onChange={handlePaymentChange}
          value={selectedPayment || ""}
        >
          <option value="">
            <h2>Payment Method</h2>
          </option>
          <option value="vnpay">VnPay</option>
          <option value="momo">Momo</option>
          <option value="cod">COD</option>
        </PaymentDropdown>
        {selectedPayment && (
          <PaymentImage
            src={
              selectedPayment === "vnpay"
              ? "https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg"
              : selectedPayment === "momo"
              ? "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FOrderDetails%2Fimage%2022.png?alt=media&token=1220c865-58a2-48d2-9112-e52cc3c11579"
              : "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FPayment%20-%20Img%2F122290830_132545211952745_2371548508191512996_n.jpg?alt=media&token=13186094-eb53-4e6c-98a0-1e7fe06b3664"
            }
            alt={
              selectedPayment === "vnpay"
                ? "VnPay"
                : selectedPayment === "momo"
                ? "Momo"
                : "cod"
            }
          />
        )}
      </PaymentSection>
    );
  };
  export default PaymentMethod;

  const PaymentSection = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;

const PaymentDropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 380px;
  border-radius: 10px;
  transition: border-color 0.3s, background-color 0.3s;

  &:hover {
    border-color: #1677ff;
  }
`;

const PaymentImage = styled.img`
  width: 178px;
  object-fit: contain;
  margin-top: 15px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;