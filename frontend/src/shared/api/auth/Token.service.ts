
class TokenService {
    getLocalRefreshToken() {
        return localStorage.getItem("refreshToken");
    }

    getLocalAccessToken() {
        return localStorage.getItem("token");
    }

    updateLocalAccessToken(newToken:string) {
        localStorage.setItem("token", JSON.stringify(newToken));
    }

    getToken() {
        return localStorage.getItem("token");
    }

    setToken(token:string) {
        localStorage.setItem("token", token);
    }

    removeToken() {
        localStorage.removeItem("token");
    }
}
export default new TokenService();