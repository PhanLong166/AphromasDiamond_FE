import { get, post, put, remove } from "./apiCaller"

export type OrderAPIProps = {
    OrderID: number;
    OrderDate: string;
    CompletetDate: string;
    CustomerID: number;
    PaymentID: string;
    IsPaid: boolean;
    Shippingfee: number;
    OrderStatus: number;
    AccountDeliveryID: number;
    AccountSaleID: number;
    ReasonReturn: string;
    Note: string;
    IsActive: boolean;
}

export const showAllOrderForAdmin = () => {
    return get(`/order/showAll`);
}

export const showAllOrderForCustomer = () => {
    return get(`/order/showOrders`);
}

export const orderDetail = (id: number) => {
    return get(`/order/${id}`);
}

export const orderRelation = (id: number) => {
    return get(`/order/relations/${id}`);
}

export const createOrder = (order: object) => {
    return post(`/order/create`, order);
}

export const updateOrder = (id: number, order: object) => {
    return put(`/order/update/${id}`, order);
}

export const deleteOrder = (id: number) => {
    return remove(`/order/delete/${id}`);
}