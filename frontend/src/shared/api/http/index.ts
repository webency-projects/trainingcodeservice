import axios from "axios"
import {AuthResponse} from "../models/response/AuthResponse.ts";

export const API_URL = "http://localhost:8080/api/v1"

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true
})
export const $publicAPI = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    // config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
},  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && error.config &&  !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true});
            localStorage.setItem("token", response.data.token);
            return $api.request(originalRequest)
        } catch (e) {
            console.log("Не авторизован")
        }
    }
    throw error;
})

export  default $api;