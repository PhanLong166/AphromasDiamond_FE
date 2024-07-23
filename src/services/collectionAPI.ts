import { get, post, put, remove } from "./apiCaller";

export const showAllCollection = () => {
    return get(`/collection/showAll`);
}

export const createCollection = (collection: object) => {
    return post(`/collection/create`, collection);
}

export const updateCollection = (id: number, collection: object) => {
    return put(`/collection/update/${id}`, collection);
}

export const deleteCollection = (id: number) => {
    return remove(`/collection/delete/${id}`);
}

