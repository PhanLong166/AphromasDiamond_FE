/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Select } from "antd";
import { diamondvouchers} from "../Data/data";
interface PromoCodeSectionProps {
  onApplyVoucher: (discount: number) => void;
}

const PromoCodeSection: React.FC<PromoCodeSectionProps> = ({ onApplyVoucher }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedVoucher, setSelectedVoucher] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [availableVouchers, setAvailableVouchers] = useState<any[]>([]);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    // Set all vouchers as available regardless of product type
    const allVouchers = [...diamondvouchers, ];
    setAvailableVouchers(allVouchers.filter(voucher => !voucher.used));
  }, []);

  const handleApplyClick = () => {
    const voucher = availableVouchers.find(voucher => voucher.buttonLabel === selectedVoucher);
    if (voucher) {
      const discount = parseFloat(voucher.price);
      onApplyVoucher(discount);

      // Mark voucher as used
      const updatedVouchers = availableVouchers.map(v => {
        if (v.buttonLabel === selectedVoucher) {
          return { ...v, used: true };
        }
        return v;
      });

      setAvailableVouchers(updatedVouchers);
      setSelectedVoucher(null);
      setError("");
    } else {
      setError("Please select a valid promo code");
    }
  };


  return (
    <PromoCodeContainer>
      <CollapseButton onClick={toggleCollapse}>
        Promo Code <span><DownOutlined /></span>
      </CollapseButton>
      {!isCollapsed && (
        <PromoForm>
          <Select
            allowClear
            placeholder="Select a promo code"
            style={{ width: '100%' }}
            onChange={(value) => {
              if (value === undefined) {
                setSelectedVoucher(null);
                setError("");
                onApplyVoucher(0); // Không thực hiện discount khi giá trị bị xóa
              } else {
                setSelectedVoucher(value as string);
              }
            }}
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
    background-color: #151542;
    color: #ffffff;
    border: 1px solid #151542;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Gantari", sans-serif;
    font-weight: 400;
    transition: all 0.45s ease;
    &:hover {
    color: #000000;
    background-color: #efefef;
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
