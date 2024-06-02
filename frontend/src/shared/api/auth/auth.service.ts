import api from "./api";
import TokenService from "./Token.service";

class AuthService {
    login(email:string, password:string) {
        return api
            .post("/auth/authenticate", {
                email,
                password
            })
            .then(response => {
                if (response.data.token) {
                    TokenService.setToken(response.data.token);
                }

                return response.data;
            });
    }

    logout() {
        TokenService.removeToken();
    }

    register(first_name:string, last_name: string , email: string, password: string) {
        return api.post("/auth/register", {
            first_name,
            last_name,
            email,
            password
        });
    }

    getCurrentUser() {
        return TokenService.getToken();
    }
}

export default new AuthService();