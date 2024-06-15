import {apiMethod, ApiRequest, axiosRequest, ServerConfig} from "@/models/index";

export interface Article {
    id?: number
    user_id?: number
    category_id: number
    title: string
    content: string
    created_at?: string
    updated_at?: string
    created_by?: number
    updated_by?: number
    user_name?: string
    category_name?: string
    tags?: string
    page?: string
}

export default class ArticlesModel {
    private readonly url: string;

    constructor() {
        this.url = "/api/v1/articles"
    }

    public List = async (): Promise<any> => {
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

    public GetArticle = async (articleId: number): Promise<any> => {
        try {
            const apiRequest: ApiRequest = {
                method: apiMethod.GET
                , url:`${this.url}/${articleId}`
            }

            const {data} = await axiosRequest(apiRequest, ServerConfig);
            return data;
        } catch (err: any) {
            throw err.response.data;
        }
    }

    public PostArticle = async (article: Article, token: string | null): Promise<any> => {
        try {
            const apiRequest: ApiRequest = {
                method: apiMethod.POST
                , url:`${this.url}/create`
                , data: article
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