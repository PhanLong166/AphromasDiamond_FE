import { get, post, put, remove } from "./apiCaller"

export const showAllJewelryType = () => {
    return get(`/jewelrytype/showAll`);
}

export const createJewelryType = (jewelryType: object) => {
    return post(`/jewelrytype/create`, jewelryType);
}

export const updateJewelryType = (id: number, jewelryType: object) => {
    return put(`/jewelrytype/update/${id}`, jewelryType);
}

export const deleteJewelryType = (id: number) => {
    return remove(`/jewelrytype/delete/${id}`);
}