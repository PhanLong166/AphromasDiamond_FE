import { get, post, put, remove } from "./apiCaller"

export const showAllSize = () => {
    return get(`/size/showAll`);
}

export const createSize = (size: object) => {
    return post(`/size/create`, size);
}

export const updateSize = (id: number, size: object) => {
    return put(`/size/update/${id}`, size);
}

export const deleteSize = (id: number) => {
    return remove(`/size/delete/${id}`);
}