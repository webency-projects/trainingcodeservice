export type UserRegister = {
    firstName: string;
    lastName: string;
    inviteToken: string;
    email: string;
    password: string;
}

export type UserAuth = {
    email: string;
    password: string;
}