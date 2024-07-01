import React from "react";
import styled from "styled-components";
import PaymentMethod from "./PaymentMethod";

interface AddressDetailsProps {
  address: string;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provinces: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  districts: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  wards: any[];
  selectedProvince: number | null;
  selectedDistrict: number | null;
  onProvinceChange: (provinceId: number) => void;
  onDistrictChange: (districtId: number) => void;
}

const AddressDetails: React.FC<AddressDetailsProps> = ({
  provinces,
  districts,
  wards,
  selectedProvince,
  selectedDistrict,
  onProvinceChange,
  onDistrictChange,
}) => {
  return (
    <Section>
      <h2>Shipping & Billing</h2>
      <EditPTag>
      <p style={{fontSize: "19px"}}>
        Address Delivery
        <span>
          <hr></hr>
        </span>
      </p>
      </EditPTag>
      <InputRow>
        <InputGroup>
          <StyledLabel htmlFor="province">City</StyledLabel>
          <StyledSelect
            id="province"
            value={selectedProvince || ""}
            onChange={(e) => onProvinceChange(parseInt(e.target.value))}
          >
            <option value="">Select City</option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </StyledSelect>
        </InputGroup>
        <InputGroup>
          <StyledLabel htmlFor="district">District</StyledLabel>
          <StyledSelect
            id="district"
            value={selectedDistrict || ""}
            onChange={(e) => onDistrictChange(parseInt(e.target.value))}
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </StyledSelect>
        </InputGroup>
      </InputRow>
      <InputRow>
        <InputGroup>
          <StyledLabel htmlFor="ward">Ward</StyledLabel>
          <StyledSelect id="ward" disabled={!selectedDistrict}>
            <option value="">Select Ward</option>
            {wards.map((ward) => (
              <option key={ward.id} value={ward.id}>
                {ward.name}
              </option>
            ))}
          </StyledSelect>
        </InputGroup>
        <InputGroup>
        <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
        <StyledInput type="text" id="phoneNumber" placeholder="Enter phone number" />
      </InputGroup>
       
      </InputRow>
      
      <InputGroup>
          <StyledLabel htmlFor="address">Address Details</StyledLabel>
          <StyledInput type="text" id="address" placeholder="Enter Address" />
          
        </InputGroup>
        <PaymentMethod />
    </Section>
  );
};

export default AddressDetails;

const Section = styled.section`
  box-shadow: rgba(27, 27, 27, 0.17) 0px 2px 5px;
  border: 1px solid #e8e2e2;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 48px 40px;
  font-weight: 400;
  font-size: 16px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  &:hover{
      border-color: #1677ff;
    }
    
`;

const StyledLabel = styled.label`
  margin-bottom: 11px;
`;

const StyledSelect = styled.select`
  padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    width: 380px;
    border-radius: 10px;
    transition: border-color 0.3s, background-color 0.3s;

    &:hover {
    border-color: #1677ff;
  }
`;

const StyledInput = styled.input`
   padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    /* width: 380px; */
    border-radius: 10px;
    transition: border-color 0.3s, background-color 0.3s;
   padding-left: 10px;

   &:hover {
    border-color: #1677ff;
  }
`;

const EditPTag = styled.p`
  font-weight: bold;
  
`;
