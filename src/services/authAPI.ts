import { post } from "./apiCaller"

export const login = (account: object) => {
    return post('/auth/signin', account);
}

export const register = (account: object) => {
    return post('/auth/signup', account);
}