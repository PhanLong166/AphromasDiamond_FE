import { get, post, put, remove } from "./apiCaller"

export type OrderAPIProps = {
    OrderID?: number;
    OrderDate: Date;
    CompleteDate: Date;
    CustomerID: number | null;
    NameReceived: string;
    PhoneNumber: string;
    Email: string;
    Address: string;
    PaymentID?: string;
    IsPayed: boolean;
    Shippingfee?: number;
    OrderStatus: string;
    AccountDeliveryID?: number;
    AccountSaleID?: number;
    ReasonReturn?: string;
    Note?: string;
    IsActive: boolean;
    VoucherID?: number;
}

export const showAllOrder = () => {
    return get(`/order/showAll`);
}

export const showOrdersPage = () => {
    return get(`/order/showOrders`);
}

export const orderDetail = (id: number) => {
    return get(`/order/detail/${id}`);
}

export const orderRelation = (id: number) => {
    return get(`/order/detail/${id}`);
}

export const createOrder = (order: object) => {
    return post(`/order/create`, order);
}

export const updateOrder = (id: number, order: Partial<OrderAPIProps>) => {
    return put(`/order/update/${id}`, order);
}

export const deleteOrder = (id: number) => {
    return remove(`/order/delete/${id}`);
}