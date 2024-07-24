/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const AddressDetails: React.FC<{
  provinces: any[];
  districts: any[];
  wards: any[];
  selectedProvince: number | null;
  selectedDistrict: number | null;
  onProvinceChange: (provinceId: unknown) => void;
  onDistrictChange: (districtId: unknown) => void;
  onFinish: (values: any) => void;
}> = ({
  provinces,
  districts,
  wards,
  selectedProvince,
  selectedDistrict,
  onProvinceChange,
  onDistrictChange,
  onFinish,
}) => {
    const [form] = Form.useForm();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

    const handleFormSubmit = async () => {
      try {
        const values = await form.validateFields();
        onFinish(values);
        console.log(values);
      } catch (error) {
        console.error('Validation failed:', error);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handlePaymentChange = (value: unknown) => {
      setSelectedPaymentMethod(value as string);
    };

    return (
      <Section>
        <h2>Shipping & Billing</h2>
        <EditPTag>
          <p style={{ fontSize: '19px' }}>
            Address Delivery
            <span>
              <hr />
            </span>
          </p>
        </EditPTag>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
        >


          <InputRow>
            <InputGroup>
              <Form.Item
                label="Name"
                name="Name"
                rules={[{ required: true }]}
              >
                <StyledInput type="text" placeholder="Enter the name of receiver" />
              </Form.Item>
            </InputGroup>

            <InputGroup>
              <Form.Item
                label="Email"
                name="Email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please enter exactly email format'
                  },
                  {
                    max: 50,
                    message: 'Email do not exceed 50 characters'
                  }
                ]}
              >
                <StyledInput type="text" placeholder="Enter contact mail" />
              </Form.Item>
            </InputGroup>
          </InputRow>

          <InputRow>
            <InputGroup>
              <Form.Item
                label="City"
                name="province"
                rules={[{ required: true, message: 'City is required' }]}
              >
                <StyledSelect
                  showSearch
                  value={selectedProvince || undefined}
                  onChange={(value: unknown) => onProvinceChange(value)}
                  placeholder="Select City"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option?.children.toLowerCase().startsWith(input.toLowerCase())
                  }
                >
                  {provinces.map((province) => (
                    <Option key={province.id} value={province.id}>
                      {province.name}
                    </Option>
                  ))}
                </StyledSelect>
              </Form.Item>
            </InputGroup>

            <InputGroup>
              <Form.Item
                label="District"
                name="district"
                rules={[{ required: true, message: 'District is required' }]}
              >
                <StyledSelect
                  showSearch
                  value={selectedDistrict || undefined}
                  onChange={(value) => onDistrictChange(value)}
                  placeholder="Select District"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option?.children.toLowerCase().startsWith(input.toLowerCase())
                  }
                >
                  {districts.map((district) => (
                    <Option key={district.id} value={district.id}>
                      {district.name}
                    </Option>
                  ))}
                </StyledSelect>
              </Form.Item>
            </InputGroup>

            <InputGroup>
              <Form.Item
                label="Ward"
                name="ward"
                rules={[{ required: true, message: 'Ward is required' }]}
              >
                <StyledSelect
                  showSearch
                  disabled={!selectedDistrict}
                  placeholder="Select Ward"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option?.children.toLowerCase().startsWith(input.toLowerCase())
                  }
                >
                  {wards.map((ward) => (
                    <Option key={ward.id} value={ward.id}>
                      {ward.name}
                    </Option>
                  ))}
                </StyledSelect>
              </Form.Item>
            </InputGroup>
          </InputRow>

          <InputRow>
            <InputGroup>
              <Form.Item
                label="Address Details"
                name="addressDetails"
                rules={[{ required: true, message: 'Address Details are required' }]}
              >
                <StyledInput type="text" placeholder="Enter Address" />
              </Form.Item>
            </InputGroup>

            <InputGroup>
              <Form.Item
                label="Phone Number"
                name="PhoneNumber"
                rules={[
                  { required: true, message: 'Phone Number is required' },
                  { 
                    pattern: /^(0|\+?84)(3|5|7|8|9)[0-9]{8}$/, 
                    message: 'Please enter the correct phone number format' 
                  }
                ]}
              >
                <StyledInput type="text" placeholder="Enter phone number" />
              </Form.Item>
            </InputGroup>
          </InputRow>

          <Form.Item
            label="Payment Method"
            name="Method"
            rules={[{ required: true, message: 'Payment Method is required' }]}
          >
            <StyledSelect placeholder="Select Payment Method" onChange={handlePaymentChange}>
              <Option value="VNPay">VnPay</Option>
              <Option value="Momo">Momo</Option>
              <Option value="Paypal">Paypal</Option>
              <Option value="COD">COD</Option>
            </StyledSelect>
          </Form.Item>

          {selectedPaymentMethod && (
            <PaymentImage
              src={
                selectedPaymentMethod === "vnpay"
                  ? "https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg"
                  : selectedPaymentMethod === "momo"
                    ? "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FOrderDetails%2Fimage%2022.png?alt=media&token=1220c865-58a2-48d2-9112-e52cc3c11579"
                    : "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FPayment%20-%20Img%2F122290830_132545211952745_2371548508191512996_n.jpg?alt=media&token=13186094-eb53-4e6c-98a0-1e7fe06b3664"
              }
              alt={
                selectedPaymentMethod === "vnpay"
                  ? "VnPay"
                  : selectedPaymentMethod === "momo"
                    ? "Momo"
                    : "COD"
              }
            />
          )}

          <Form.Item>
            <Editbtn>

              <Btn className='btn' type="submit">

                Continue
              </Btn>

            </Editbtn>
          </Form.Item>
        </Form>
      </Section>
    );
  };

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
`;

const StyledSelect = styled(Select)`
  width: 100%;
  margin-bottom: 10px;
  height: 35px;
  .ant-select-selector {
    /* border-radius: 10px !important; */
  }
`;

const StyledInput = styled(Input)`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  /* border-radius: 10px; */
  transition: border-color 0.3s, background-color 0.3s;
  padding-left: 10px;
  height: 33.4px;

  &:hover {
    border-color: #1677ff;
  }
`;

const EditPTag = styled.p`
  font-weight: bold;
`;

const PaymentImage = styled.img`
  width: 100px;
  object-fit: contain;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;


const Editbtn = styled.div`
  display: flex;
  justify-content: flex-end;
 
  `;
const Btn = styled.button`
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

export default AddressDetails;
