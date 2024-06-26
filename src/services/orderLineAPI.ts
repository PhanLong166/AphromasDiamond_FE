import { get, post, put, remove } from "./apiCaller";

export const showAllOrderLineForAdmin = () => {
    return get('/orderLine/showAll');
}

export const showAllOrderLineForCustomer = () => {
    return get('/orderLine/showOrder');
}

export const OrderLineDetail = (id: number) => {
    return get(`/orderLine/${id}`);
}

export const createOrderLine = (orderLine: object) => {
    return post('/orderLine/create', orderLine);
}

export const updateOrderLine = (id: number, orderLine: object) => {
    return put(`/orderLine/update/${id}`, orderLine);
}

export const deleteOrderLine = (id: number) => {
    return remove(`/orderLine/delete/${id}`);
}