/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Select } from "antd";
import { showAllVoucher } from "@/services/voucherAPI";
import { useAppDispatch } from "@/hooks";
import { orderSlice } from "@/layouts/MainLayout/slice/orderSlice";
interface PromoCodeSectionProps {
  onApplyVoucher: (discount: number, voucherID: number) => void;
}

const PromoCodeSection: React.FC<PromoCodeSectionProps> = ({
  onApplyVoucher,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);
  const [error, setError] = useState("");
  const [availableVouchers, setAvailableVouchers] = useState<any[]>([]);
  const dispatch = useAppDispatch();

  // const handleSelectVoucher = (voucher: Voucher) => {
  //   localStorage.setItem("selectedVoucher", JSON.stringify(voucher));
  // }
  // console.log(selectedVoucher);
  // console.log(handleSelectVoucher);

  interface Voucher {
    buttonLabel: string | null;
    VoucherID: number;
    VoucherCode: string;
    Description: string;
    StartDate: string;
    EndDate: string;
    PercentDiscounts: string;
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getAllVouchers = async () => {
    try {
      const { data } = await showAllVoucher();
      const filteredVouchers = filterValidVouchers(data.data);

      setAvailableVouchers(filteredVouchers);
      console.log(availableVouchers);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllVouchers();
  }, []);

  const filterValidVouchers = (vouchers: Voucher[]) => {
    const currentDate = new Date();
    return vouchers.filter(
      (voucher) => new Date(voucher.EndDate) > currentDate
    );
  };

  const handleApplyClick = () => {
    if (selectedVoucher) {
      const discount = parseFloat(selectedVoucher.PercentDiscounts);
      console.log("Selected Voucher:", selectedVoucher);
      console.log("VoucherID", selectedVoucher.VoucherID);
      console.log("Discount Value:", discount);

      localStorage.removeItem("selectedVoucher");

      dispatch(orderSlice.actions.setVoucherID(selectedVoucher.VoucherID));

      if (!isNaN(discount) && discount > 0) {
        onApplyVoucher(discount, selectedVoucher.VoucherID);
        setError("");
        localStorage.setItem(
          "selectedVoucher",
          JSON.stringify(selectedVoucher)
        );
      } else {
        setError("Invalid discount value");
      }
    } else {
      setError("Please select a valid promo code");
      localStorage.removeItem("selectedVoucher");
      onApplyVoucher(0, 0);
    }
  };

  return (
    <PromoCodeContainer>
      <CollapseButton onClick={toggleCollapse}>
        Promo Code{" "}
        <span>
          <DownOutlined />
        </span>
      </CollapseButton>
      {!isCollapsed && (
        <PromoForm>
          <Select
            allowClear
            placeholder="Select a promo code"
            style={{ width: "100%" }}
            onChange={(value) => {
              const voucher = availableVouchers.find(
                (v) => v.Description === value
              );
              setSelectedVoucher(voucher || null);
              if (!voucher) {
                setError("");
                onApplyVoucher(0, 0);
                localStorage.removeItem("selectedVoucher");
              }
            }}
          >
            {availableVouchers.map((voucher) => (
              <Select.Option
                key={voucher.VoucherID}
                value={voucher.Description}
              >
                {voucher.Description}
              </Select.Option>
            ))}
          </Select>
          <BtnApply onClick={handleApplyClick}>Apply</BtnApply>
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
