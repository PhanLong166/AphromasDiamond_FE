import { get, post, put, remove } from "./apiCaller";

export const showAllOrderLineForAdmin = () => {
    return get('/orderLine/showAll');
}

export const showAllOrderLineForCustomer = () => {
    return get('/orderLine/showorderLines');
}

export const orderLineDetail = (id: number) => {
    return get(`/orderLine/${id}`);
}

export const createorderLine = (orderLine: object) => {
    return post('/orderLine/create', orderLine);
}

export const updateorderLine = (id: number, orderLine: object) => {
    return put(`/orderLine/update/${id}`, orderLine);
}

export const deleteorderLine = (id: number) => {
    return remove(`/orderLine/delete/${id}`);
}