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

    });
}



