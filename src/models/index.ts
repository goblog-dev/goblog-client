import axios, {AxiosInstance} from "axios";

export const TIMEOUT: number = 30000

export interface AxiosConfig {
    baseURL: string | undefined
    timeout: number
    headers?: object
}

export const apiMethod = {
    POST: "post"
    , GET: "get"
    , DELETE: "delete"
    , PATCH: "patch"
    , PUT: "put"
}

export interface ApiRequest {
    method: string;
    url: string;
    data?: any;
    headers?: object
}

export const ServerConfig: AxiosConfig = {
    baseURL: process.env.NEXT_PUBLIC_APP_SERVER_HOST,
    timeout: TIMEOUT,
}

export const axiosRequest = async (apiRequest: ApiRequest, config: AxiosConfig) => {
    try {
        const instance: AxiosInstance = axiosInstance(config);
        return await instance({
            method: apiRequest.method
            , url: apiRequest.url
            , data: apiRequest.data
            , headers: apiRequest.headers
        })
    } catch (error) {
        throw error;
    }
}

const axiosInstance = (axiosConfig: AxiosConfig): AxiosInstance => {
    return axios.create(axiosConfig);
}