import $api from "../http"
import {AxiosResponse} from "axios"
import {AuthResponse} from "@shared/api/models/response/AuthResponse.ts";
import {UserAuth, UserRegister} from "@entities/user/model/UserTypes.ts";

export default class AuthService {
    static async login(data: UserAuth): Promise<AxiosResponse<AuthResponse>> {
        console.log(data)
        return $api.post("/auth/authenticate", data)
    }

    static async register(data: UserRegister): Promise<AxiosResponse<AuthResponse>> {
        console.log(data)
        return $api.post("/auth/register", data)
    }
    static async logout(): Promise<void> {
        return $api.post("/auth/logout")
    }
}