import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Select } from "antd";
import { vouchers } from './Summary/vouchers';
interface PromoCodeSectionProps {
  onApplyVoucher: (discount: number) => void;
}

const PromoCodeSection: React.FC<PromoCodeSectionProps> = ({ onApplyVoucher }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedVoucher, setSelectedVoucher] = useState<string | null>(null);
  const [error, setError] = useState("");

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleApplyClick = () => {
    const voucher = vouchers.find(voucher => voucher.buttonLabel === selectedVoucher);
    if (voucher) {
      const discount = parseFloat(voucher.price);
      onApplyVoucher(discount);
      setError("");
    } else {
      setError("Please select a valid promo code");
    }
  };

  const availableVouchers = vouchers.filter(voucher => !voucher.used);

  return (
    <PromoCodeContainer>
      <CollapseButton onClick={toggleCollapse}>
        Promo Code <span><DownOutlined /></span>
      </CollapseButton>
      {!isCollapsed && (
        <PromoForm>
          <Select
            placeholder="Select a promo code"
            style={{ width: '100%' }}
            onChange={(value) => setSelectedVoucher(value as string)}
          >
            {availableVouchers.map(voucher => (
              <Select.Option key={voucher.buttonLabel} value={voucher.buttonLabel}>
                {voucher.eventTitle} - {voucher.buttonLabel}
              </Select.Option>
            ))}
          </Select>
          <BtnApply  onClick={handleApplyClick}>
            Apply
          </BtnApply>
          {error && <ErrorText>{error}</ErrorText>}
        </PromoForm>
      )}
    </PromoCodeContainer>
  );
};

export default PromoCodeSection;

const PromoCodeContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 1);
`;

const BtnApply = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  font-size: 15px;
    padding: 7px 20px;
    background-color: #fff;
    color: #000;
    border: 1px solid #151542;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Gantari", sans-serif;
    font-weight: 400;
    transition: all 0.45s ease;
    &:hover {
    color: #fff;
    background-color: #151542;
    transition: all 0.45s ease;
  }
`;

const CollapseButton = styled.div`
  cursor: pointer;
  align-items: center;
  background-color: #fff;
  width: 100%;
  font-size: 17px;
`;

const PromoForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ErrorText = styled.p`
  color: red;
 font-size: 17px;
`;
