export interface ApiResponse {
    status: string
    message: string
    translate: string
    data?: any
}

export const ApiStatus = {
    ERROR: "error",
    SUCCESS: "success"
}