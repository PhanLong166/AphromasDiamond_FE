import { get, put } from "./apiCaller"

export const uploadImage = () => {

}

export const updateImage = (id: number, image: object) => {
    return put(`/usingImage/update/${id}`, image);
}

export const getImage = (id: number) => {
    return get(`/usingImage/${id}`);
}