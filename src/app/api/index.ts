export interface ApiResponse {
    status: string
    message: string
    translate: string
    data?: any
    http_code?: number
}

export const ApiStatus = {
    ERROR: "error",
    SUCCESS: "success"
}