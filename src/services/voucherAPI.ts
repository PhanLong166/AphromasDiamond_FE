import { get, post, put, remove } from "./apiCaller";

export const showAllVoucher = () => {
    return get(`/voucher/showAll`);
}

export const createVoucher = (voucher: object) => {
    return post(`/voucher/create`, voucher);
}

export const updateVoucher = (id: number, voucher: object) => {
    return put(`/voucher/update/${id}`, voucher);
}

export const deleteVoucher = (id: number) => {
    return remove(`/voucher/delete/${id}`);
}

