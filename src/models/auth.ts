import {apiMethod, ApiRequest, axiosRequest, ServerConfig} from "@/models/index";

export interface Auth {
    email: string
    password: string
}

export default class AuthModel {
    private readonly url: string;

    constructor() {
        this.url = "/api/v1/auths"
    }

    public Login = async (auth: Auth):Promise<any> => {
        try {
            const apiRequest: ApiRequest = {
                method: apiMethod.POST
                , url: `${this.url}/login`
                , data: auth
            }

            const {data} = await axiosRequest(apiRequest, ServerConfig);
            return data;
        } catch (err: any) {
            throw err.response.data;
        }
    }

    public Logout = async (token: string):Promise<any> => {
        try {
            const apiRequest: ApiRequest = {
                method: apiMethod.GET
                , url: `${this.url}/logout`
                , headers: {
                    Authorization:token,
                }
            }

            const {data} = await axiosRequest(apiRequest, ServerConfig);
            return data;
        } catch (err: any) {
            throw err.response.data;
        }
    }
}