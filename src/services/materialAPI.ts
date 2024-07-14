import { get, post, put, remove } from "./apiCaller"

export const showAllMaterial = () => {
    return get(`/materialjewelry/showAll`);
}

export const createMaterial = (jewelryMaterial: object) => {
    return post(`/materialjewelry/create`, jewelryMaterial);
}

export const updateMaterial = (id: number, jewelryMaterial: object) => {
    return put(`/materialjewelry/update/${id}`, jewelryMaterial);
}

export const deleteMaterial = (id: number) => {
    return remove(`/materialjewelry/delete/${id}`);
}