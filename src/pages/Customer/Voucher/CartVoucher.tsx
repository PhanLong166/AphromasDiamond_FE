import * as React from "react";
import styled from "styled-components";

interface VoucherCardProps {
  imageSrc: string;
  status: string;
  voucherType: string;
  price: string;
  shopName: string;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ imageSrc, status, voucherType, price, shopName }) => {
  return (
    <StyledCard>
      <CardContent>
        <StyledImage src={imageSrc} alt={voucherType} />
        <StatusInfo>
          <StatusWrapper>
            <StatusDot isActive={status === "Active"} />
            <StatusText isActive={status === "Active"}>{status === "Active" ? "Action" : "No Action"}</StatusText>
          </StatusWrapper>
          <Details>
            <Detail>
              <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/c218693848a8542cc1ccb7df8e57bd17ed066f598620d433fe502d087cca6299?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="" />
              <Label>{voucherType}</Label>
            </Detail>
            <Detail>
              <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/a65a7b76743050eb34864e4578009f0aa60c3a69aeb06708daff055a0c0a231f?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="" />
              <Label>Online Shipping</Label>
            </Detail>
            <Detail>
              <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c22dfc5774eda52e42b5f1aacb86319164f1d47b721e1cdf1197d487cd32c34?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="" />
              <Label>{price}</Label>
            </Detail>
            <Detail>
              <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba093e4cbde54523567f82f610b2af2304b990faac54e98e37008ac33bbc98fd?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="" />
              <Label>{shopName}</Label>
            </Detail>
          </Details>
        </StatusInfo>
      </CardContent>
      <ExtraInfo>
        {/* <strong>Voucher</strong>
        <span>Online voucher</span>
        <strong>{price}</strong> */}
        {/* <Underline>{shopName}</Underline> */}
      </ExtraInfo>
    </StyledCard>
  );
};

const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

const StatusInfo = styled.div`
  margin-left: 20px;
`;

const StyledCard = styled.article`
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  border: 1px solid #000;
  background-color: #fff;
  
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 250px;
  border: 1px solid #000;
  object-fit: cover;
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`;

interface StatusDotProps {
  isActive: boolean;
}

const StatusDot = styled.div<StatusDotProps>`
  background-color: ${({ isActive }) => (isActive ? "#177c0f" : "#eb5050")};
  border-radius: 50%;
  width: 10px;
  height: 12px;
`;

const StatusText = styled.p<StatusDotProps>`
  color: ${({ isActive }) => (isActive ? "#4bbf41" : "#eb5050")};
  font-family: Inter, sans-serif;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5rem;
  font-weight: 400;
  font-size: 15px;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;

const Label = styled.p`
  font-family: Poppins, sans-serif;
`;

const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 12px;
  margin-top: 20px;
  gap: 10px;
`;

// const Underline = styled.p`
//   font-family: Poppins, sans-serif;
//   text-decoration: underline;
// `;

export default VoucherCard;
