import { get, post, put, remove } from "./apiCaller";

export const showAllSetting = () => {
    return get(`/jewelrySetting/showAll`);
}

export const getSettingDetails = (jewelrySettingID: number) => {
    return get(`/jewelrySetting/detail/${jewelrySettingID}`)
}

export const createSetting = (jewelrySetting: object) => {
    return post(`/jewelrySetting/create`, jewelrySetting);
}

export const updateSetting = (id: number, jewelrySetting: object) => {
    return put(`/jewelrySetting/update/${id}`, jewelrySetting);
}

export const deleteSetting = (id: number) => {
    return remove(`/jewelrySetting/delete/${id}`);
}

