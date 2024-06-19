import { get, post } from "./apiCaller";

export const showAllDiamond = () => {
    return get('/diamond/showAll');
}

export const getDiamondDetails = (diamondID: number) => {
    return get(`/diamond/${diamondID}`)
}

export const createDiamond = (diamond: object) => {
    return post('/diamond/create', diamond);
}