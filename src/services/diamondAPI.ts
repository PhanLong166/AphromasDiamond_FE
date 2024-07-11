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

<<<<<<< HEAD
export const getImageDiamond = (id: number) => {
    return get(`/usingImage/${id}`)
=======
export const getDiamondImages = (id: number) => {
    return get(`/usingImage/${id}`); 
>>>>>>> a7a638898515467ee1c6565b9c1694ea4ba974c4
}