import { Table } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

interface Product {
    id: string;
    name: string;
    quantity: number;
    price: number;
    imageUrl: string;
    type: string;
    size?: string;
  }
  const sampleOrder: OrderProps = {
    invoiceDate: "14 Dec 2022",
    dueDate: "14 Dec 2022",
    status: "Pending",
    orderId: "123456",
    name: "Ha Thi Huyen Trang",
    phone: "0937250913",
    email: "hthuyentrange@gmail.com",
    address: "123A Hoang Dieu 2, Linh Trung, Thu Duc, Viet Nam",
    products: [
      {
        id: "1",
        name: "Double Row Diamond Chevron Engagement Ring In 14k (1/3 Ct. Tw.) 1.37 Carat H-VS2 Marquise Cut Diamond",
        quantity: 1,
        price: 5030,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FRing%2Fring.jpg?alt=media&token=17427822-c905-4e96-a881-25ea17ce2fa7",
        size: "8",
        type: "ring",
      },
      {
        id: "2",
        name: "Aquamarine Stud Ring In 14k White Gold (7mm)",
        quantity: 2,
        price: 4000,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FRing%2Fring1.jpg?alt=media&token=1fd5a503-9856-403a-a250-60ab0f42b372",
        size: "8",
        type: "ring",
      },
      {
        id: "3",
        name: "Aquamarine Stud Diamond In 14k White Gold (7mm)",
        quantity: 1,
        price: 4000,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FDiamond%2Fdiamond.jpg?alt=media&token=2ec444c6-4d86-4c57-a126-34e12c6231b2",
        type: "diamond",
      },
    ],
    paymentMethod:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FOrderDetails%2Fimage%2022.png?alt=media&token=1220c865-58a2-48d2-9112-e52cc3c11579",
    discount: 503,
    vat: 503,
    shippingFee: 0,
    total: 9033,
  };

  interface OrderProps {
    invoiceDate: string;
    dueDate: string;
    status: string;
    orderId: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    products: Product[];
    paymentMethod: string;
    discount: number;
    vat: number;
    shippingFee: number;
    total: number;
  }

  const columns: ColumnsType<Product> = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={record.imageUrl}
            alt={text}
            style={{ width: "70px", marginRight: "10px" }}
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      render: (text, record) => (record.type === "ring" ? text : ""),
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, record) =>
        formatPrice(Number(record.price) * record.quantity),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space style={{ width: 134 }} size="middle">
          {/* <Link to="/order-details">Feedback</Link> */}
          <Button type="link" onClick={() => setIsModalVisible(true)}>Feedback</Button>
        </Space>
      ),
      width: 134,
    },
  ];

const ReviewHistory = () => {
    const [order, setOrder] = useState<OrderProps | null>(null);
    const {
        invoiceDate,
        dueDate,
        status,
        name,
        phone,
        email,
        address,
        products,
        paymentMethod,
        discount,
        vat,
        shippingFee,
      } = order;
    return (
        
        
            <ProductsWrapper>
          <OrderID>Order ID #{order.orderId}</OrderID>
          <Table
            style={{ backgroundColor: "#e8e8e8" }}
            columns={columns}
            dataSource={products}
            pagination={false}
            rowKey="id"
          />
         
        </ProductsWrapper>
        
    );
};


const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  padding: 46px 0;
  border-bottom: 1px solid;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const OrderID = styled.h2`
  font-weight: 600;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export default ReviewHistory;