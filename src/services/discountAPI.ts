import { get, post, put, remove } from "./apiCaller";

export const showAllDiscount = () => {
    return get(`/discount/showAll`);
}

export const createDiscount = (discount: object) => {
    return post(`/discount/create`, discount);
}

export const updateDiscount = (id: number, discount: object) => {
    return put(`/discount/update/${id}`, discount);
}

export const deleteDiscount = (id: number) => {
    return remove(`/discount/delete/${id}`);
}

