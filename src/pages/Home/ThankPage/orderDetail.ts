export interface OrderDetail {
    orderId: string;
    date: string;
    customer: string;
    totalItems: string;
    amount: string;
    paymentMethod: string;
  }
  
  export const orderDetail: OrderDetail = {
    orderId: "#123456",
    date: "March 20, 2024",
    customer: "Yoo In Na",
    totalItems: "3",
    amount: "$321.00",
    paymentMethod: "VNPay"
  };