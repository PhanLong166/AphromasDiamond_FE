import { get, post, put, remove } from "./apiCaller"

export const showAllProduct = () => {
    return get(`/product/showAll`);
}

export const getProductDetails = (id: number) => {
    return get(`/product/detail/${id}`)
}

export const createProduct = (product: object) => {
    return post(`/product/create`, product);
}

export const getImageProduct = (id: number) => {
    return get(`/usingImage/${id}`)
}

export const updateDiamond = (id: number, diamond: object) => {
    return put(`/diamond/update/${id}`, diamond);
}

export const deleteDiamond = (id: number) => {
    return remove(`/diamond/update/${id}`);
}

