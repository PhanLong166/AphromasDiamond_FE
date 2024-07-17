import { get, post, put, remove } from "./apiCaller";

export const showAllSettingVariant = () => {
    return get(`/jewelrySettingVariant/showAll`);
}

export const createSettingVariant = (settingVariant: object) => {
    return post(`/jewelrySettingVariant/create`, settingVariant);
}

export const updateSettingVariant = (id: number, settingVariant: object) => {
    return put(`/jewelrySettingVariant/update/${id}`, settingVariant);
}

export const deleteSettingVariant = (id: number) => {
    return remove(`/jewelrySettingVariant/delete/${id}`);
}

