import { get, post, put, remove } from "./apiCaller";

export const showAllProduct = () => {
    return get(`/product/showAll`);
}

// export const getProductDetails = (productID: number) => {
//     return get(`/product/detail/${productID}`)
// }

export const createSetting = (product: object) => {
    return post(`/product/create`, product);
}

export const updateSetting = (id: number, product: object) => {
    return put(`/product/update/${id}`, product);
}

export const deleteSetting = (id: number) => {
    return remove(`/product/delete/${id}`);
}

