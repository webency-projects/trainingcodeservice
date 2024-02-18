import $api from "../http"
import {AxiosResponse} from "axios"
import {AuthResponse} from "@shared/api/models/response/AuthResponse.ts";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post("/auth/authenticate", {email, password})
    }

    static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post("/auth/register", {email, password})
    }
    static async logout(): Promise<void> {
        return $api.post("/auth/logout")
    }
}