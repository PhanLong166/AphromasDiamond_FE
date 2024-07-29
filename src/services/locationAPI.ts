import { get } from "./apiCaller"

const apiURL = 'https://open.oapi.vn/';

export const getProvinces = () => {
    get(`${apiURL}/location/provinces?size=63`);
}

export const getDistricts = (provinceId: number) => {
    get(`${apiURL}/location/districts?province${provinceId}=79&size=30`)
}

export const getWards = (districtID: number) => {
    get(`${apiURL}/location/wards?districtId=${districtID}&size=20`)
}