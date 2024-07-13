/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post, put, remove } from "./apiCaller";

export const showAllDiamond = () => {
    return get(`/diamond/showAll`);
}

export const showDiamonds = (params: any) => {
    return get(`/diamond/showDiamonds`,params);
}

export const getDiamondDetails = (diamondID: number) => {
    return get(`/diamond/${diamondID}`)
}

export const createDiamond = (diamond: object) => {
    return post(`/diamond/create`, diamond);
}

export const updateDiamond = (id: number, diamond: object) => {
    return put(`/diamond/update/${id}`, diamond);
}

export const deleteDiamond = (id: number) => {
    return remove(`/diamond/update/${id}`);
}

export const getImageDiamond = (id: number) => {
    return get(`/usingImage/${id}`)
}