import { get, post, put } from "./apiCaller"

export const showAllJewelryType = () => {
    return get(`/jewelrytype/showAll`);
}

export const createJewelryType = (jewelryType: object) => {
    return post(`/jewelrytype/create`, jewelryType);
}

export const updateJewelryType = (id: number, jewelryType: object) => {
    return put(`/jewelryType/update/${id}`, jewelryType);
}