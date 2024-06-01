import axios, { AxiosResponse } from "axios";
import config from "@/config";

export const request = (
    endpoint: string, 
    method: string,
    headers: object = {},
    params: object = {},
    body: object = {},
): Promise<AxiosResponse> => {
    return axios({
        url: config.publicRuntime.API_URL + endpoint,
        method: method,
        headers: Object.assign({}, headers, {Authorization: `Bearer `}),
        params: Object.assign(params),
        data: body,
    });
}



