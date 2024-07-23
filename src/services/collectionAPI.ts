import { get, post, put, remove } from "./apiCaller";

export const showAllCollection = () => {
    return get(`/collection/showAll`);
}

export const createProduct = (collection: object) => {
    return post(`/collection/create`, collection);
}

export const updateProduct = (id: number, collection: object) => {
    return put(`/collection/update/${id}`, collection);
}

export const deleteProduct = (id: number) => {
    return remove(`/collection/delete/${id}`);
}

