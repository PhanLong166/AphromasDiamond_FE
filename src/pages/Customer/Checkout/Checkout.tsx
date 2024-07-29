/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { notification, Steps } from "antd";
import AddressDetails from "../../../components/Customer/Checkout/AddressDetails";
import { getProvinces, getDistricts, getWards } from "./api";
import Summary from "@/components/Customer/Checkout/Summary/Summary";
import { createOrder, OrderAPIProps } from "@/services/orderAPI";
import { showAllOrderLineForAdmin, updateOrderLine } from "@/services/orderLineAPI";
import config from "@/config";
import useAuth from "@/hooks/useAuth";
import { getCustomer } from "@/services/accountApi";
import { OrderStatus, PaymentMethodEnum } from "@/utils/enum";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { orderSlice } from "@/layouts/MainLayout/slice/orderSlice";
import { createOrderPaypal } from "@/services/paymentAPI";

const description = "This is a description";
const Checkout: React.FC = () => {
  const { AccountID, user } = useAuth();
  const [CustomerID, setCustomerID] = useState<number>();
  const [Customer, setCustomer] = useState<any>(null);
  // const [form] = Form.useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [provinces, setProvinces] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [districts, setDistricts] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [wards, setWards] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedVoucher, setSelectedVoucher] = useState<any | null>(null);
  const VoucherID = useAppSelector((state) => state.order.VoucherID);
  const ShippingFee = useAppSelector((state) => state.order.Shippingfee);
  const TotalPrice = useAppSelector((state) => state.order.Total);
  const [api, contextHolder] = notification.useNotification();

  const fetchProvincesData = async () => {
    try {
      const data = await getProvinces();
      setProvinces(data);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  const getCustomerDetail = async () => {
    if (AccountID === null) return;
    const customer = await getCustomer(AccountID ? AccountID : 0);
    setCustomer(customer?.data?.data);
    // console.log('Customer: ', Customer);
    setCustomerID(customer ? customer.data.data.CustomerID : 0);
    console.log('Customer ID: ', CustomerID);
  }

  React.useEffect(() => {
    getCustomerDetail();
    fetchProvincesData();
  }, [Customer?.CustomerID, AccountID]);

  // React.useEffect(() => {
  //   const voucher = localStorage.getItem("selectedVoucher");
  //   if (voucher) {
  //     setSelectedVoucher(JSON.parse(voucher));
  //     console.log(selectedVoucher);
  //   }
  // }, []);
  React.useEffect(() => {
    getCustomerDetail();
    fetchProvincesData();
    // Retrieve selected voucher from local storage
    const voucher = localStorage.getItem("selectedVoucher");
    if (voucher) {
      setSelectedVoucher(JSON.parse(voucher));
    }
  }, [AccountID]);

  const onFinish = async (values: any) => {
    try {
      //Convert address
      const provinceData = await getProvinces();
      const provinceName = provinceData.find((province: any) => province.id === values.province).name;
      
      const districtData = await getDistricts(values.province);
      const districtName = districtData.find((district: any) => district.id === values.district).name;

      const wardData = await getWards(values.district);
      const wardName = wardData.find((ward: any) => ward.id === values.ward).name;
      
      const requestBodyOrder: OrderAPIProps = {
        OrderDate: new Date(),
        CompleteDate: new Date(),
        IsPayed: false,
        CustomerID: CustomerID ? CustomerID : null,
        OrderStatus: OrderStatus.PENDING,
        IsActive: true,
        PaymentID: `${values.Method}`,
        NameReceived: values.Name,
        PhoneNumber: values.PhoneNumber,
        Email: Customer?.Email,
        Address: `${values.addressDetails}, ${wardName}, ${districtName}, ${provinceName}`,
        Shippingfee: ShippingFee,
        VoucherID: VoucherID !== selectedVoucher.VoucherID ? VoucherID : undefined
      }

      const responeOrder = await createOrder(requestBodyOrder);
      if (responeOrder.data.statusCode !== 200) throw new Error(responeOrder.data.message);

      const getOrderID = responeOrder.data.data.OrderID;
      dispatch(orderSlice.actions.setOrderID(getOrderID));
      console.log(getOrderID);
      const getOrderLine = await showAllOrderLineForAdmin();
      getOrderLine.data.data.filter((
        orderLineItem: {
          CustomerID: number,
          OrderID: number | null,
          DiamondID: number | null,
          ProductID: number | null,
        }
      ) => orderLineItem.CustomerID === user?.CustomerID &&
      orderLineItem.OrderID === null &&
        (orderLineItem.DiamondID !== null || orderLineItem.ProductID !== null)
      )
        .map(async (item: any) => {
          const linkOrder = await updateOrderLine(item.OrderLineID, {
            ...item,
            OrderID: getOrderID
          });
          if (linkOrder.data.statusCode !== 200) throw new Error(linkOrder.data.message);
        });
      if (!updateOrderLine) throw new Error();

      if (values.Method === PaymentMethodEnum.PAYPAL) {
          const createPayment = await createOrderPaypal(TotalPrice);
          window.location.href = createPayment.data.links[1].href;
      } else {
        navigate(config.routes.public.success);
      }
    } catch (error: any) {
      api.error({
        message: 'Error',
        description: error.message || 'An error occured'
      });
    }
  }

  const handleProvinceChange = async (provinceId: unknown) => {
    setSelectedProvince(provinceId as number);
    setSelectedDistrict(null); // Reset lại quận/huyện khi thay đổi tỉnh/thành phố
    try {
      const data = await getDistricts(provinceId as number);
      setDistricts(data);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const handleDistrictChange = async (districtId: unknown) => {
    setSelectedDistrict(districtId as number);
    try {
      const data = await getWards(districtId as number);
      setWards(data);
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };

  return (
    <main>
      {contextHolder}
      <ContainerHeader>
        <Header>Checkout</Header>
      </ContainerHeader>
      <StepEdit>
        <Steps
          className="steps-edit"
          current={1}
          status="wait"
          items={[
            {
              title: "Checkout",
              description,
            },
            {
              title: "Order",

              description,
            },
            {
              title: "Finish",
              description,
            },
          ]}
        />
      </StepEdit>
      <Wrapper>
        <StyledLink>
          <Link to="/cart">BACK TO CART</Link>
        </StyledLink>
        <Content>
          <Formm>
            {/* <ContactInfo email={Customer?.Email} onEdit={handleEdit} /> */}
            <AddressDetails
              onFinish={onFinish}
              provinces={provinces}
              districts={districts}
              wards={wards}
              selectedProvince={selectedProvince}
              selectedDistrict={selectedDistrict}
              onProvinceChange={handleProvinceChange}
              onDistrictChange={handleDistrictChange}
            />
          </Formm>
          <StyledSummary />
        </Content>
      </Wrapper>
    </main>
  );
};

export default Checkout;

const StyledSummary = styled(Summary)`
  flex: 1;
  line-height: 40px;
`;

const StepEdit = styled.div`
  display: flex;
  justify-content: space-around;
  .steps-edit {
    max-width: 1000px;
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.header`
  background: #fff;
  width: 1400px;
  color: #818594;
  font: 14px / 150% "Crimson Text", sans-serif;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  padding: 10px 0;
  display: flex;
  margin-bottom: 2rem;
  @media (max-width: 991px) {
    padding: 0 20px 0 30px;
    margin-top: 40px;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const StyledLink = styled.a`
  color: #000;
  text-decoration: underline;
  margin-top: 57px;
  margin-bottom: 10px;
  width: 1400px;
  font: 250 10px/150% Poppins, sans-serif;
  
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 1400px;
  align-items: flex-start;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const Formm = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


