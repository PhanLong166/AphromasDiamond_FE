import { get, post, put, remove } from "./apiCaller"

export const login = (account: object) => {
    return post(`/auth/signin`, account);
}

export const register = (account: object) => {
    return post(`/auth/signup`, account);
}

export const registerCustomer = (account: object) => {
    return post(`/auth/signupCustomer`, account);
}

export const showAllAccounts = () => {
    return get(`/auth/accounts`);
}

export const updateAccount = (name: string, account: object) => {
    return put(`/auth/update/${name}`, account);
}

export const deleteAccount = (id: number) => {
    return remove(`/auth/delete/${id}`);
}