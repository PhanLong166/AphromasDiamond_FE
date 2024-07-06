import { post } from "./apiCaller"

export const login = (account: object) => {
    return post(`/auth/signin`, account);
}

export const register = (account: object) => {
    return post(`/auth/signup`, account);
}

export const registerCustomer = (account: object) => {
    return post(`/auth/signupCustomer`, account);
}