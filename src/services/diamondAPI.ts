import { get, post, put, remove } from "./apiCaller";

export const showAllDiamond = () => {
    return get('/diamond/showAll');
}

export const showDiamonds = () => {
    return get('/diamond/showDiamonds');
}

export const getDiamondDetails = (diamondID: number) => {
    return get(`/diamond/${diamondID}`)
}

export const createDiamond = (diamond: object) => {
    return post('/diamond/create', diamond);
}

export const updateDiamond = (diamond: object) => {
    return put('/diamond/update/{id}', diamond);
}

export const deleteDiamond = () => {
    return remove('/diamond/delete/{id}');
}