import {apiMethod, ApiRequest, axiosRequest, ServerConfig} from "@/models/index";

export default class CategoriesModel {
    private readonly url: string;

    constructor() {
        this.url = "/api/v1/categories"
    }

    public List = async ():Promise<any> => {
        try {
            const apiRequest: ApiRequest = {
                method: apiMethod.GET
                , url: this.url
            }

            const {data} = await axiosRequest(apiRequest, ServerConfig);
            return data;
        } catch (err: any) {
            throw err.response.data;
        }
    }
}