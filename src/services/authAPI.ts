import { post } from "./apiCaller"

export const login = (account: object) => {
    return post('/auth/login', account);
}

export const register = (account: object) => {
    return post('/auth/register', account);
}