import { get, post, put, remove } from "./apiCaller"

export const showAllOrderForAdmin = () => {
    return get('/order/showAll');
}

export const showAllOrderForCustomer = () => {
    return get('/order/showOrders');
}

export const orderDetail = (id: number) => {
    return get(`/order/${id}`);
}

export const orderRelation = (id: number) => {
    return get(`/order/relations/${id}`);
}

export const createOrder = (order: object) => {
    return post('/order/create', order);
}

export const updateOrder = (id: number, order: object) => {
    return put(`/order/update/${id}`, order);
}

export const deleteOrder = (id: number) => {
    return remove(`/order/delete/${id}`);
}