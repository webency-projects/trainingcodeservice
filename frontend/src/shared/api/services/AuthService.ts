import $api from "../http"
import {AxiosResponse} from "axios"
import {AuthResponse} from "@shared/api/models/response/AuthResponse.ts";
import {UserAuth} from "@entities/user/model/UserTypes.ts";

export default class AuthService {
    static async login(data: UserAuth): Promise<AxiosResponse<AuthResponse>> {
        return $api.post("/auth/authenticate", data)
    }
    static async logout(): Promise<void> {
        return $api.post("/auth/logout")
    }
}