import {UserRegister} from "@entities/user/model/UserTypes.ts";
import {AxiosResponse} from "axios";
import {AuthResponse} from "@shared/api/models/response/AuthResponse.ts";
import {$publicAPI} from "@shared/api/http";

export default class publicAuthService {
    static async register(data: UserRegister): Promise<AxiosResponse<AuthResponse>> {
        console.log(data)
        return $publicAPI.post("/auth/register", data)
    }
}