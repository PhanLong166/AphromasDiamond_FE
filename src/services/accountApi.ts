import { get, post } from "./apiCaller";

// interface UpdateAccount {
//     fullName: string;
//     phoneNumber: string;
//     role: string;
//     email: string;
//     address: string;
// }

export const getCustomer = (id: number) => {
    return post(`/auth/getCustomer/${id}`);
}

export const showAllAccounts = () => {
    return get('/auth/ShowAllAccounts');
}

export const detailsAccounts = (id: number) => {
    return post(`/auth/detailAccount/${id}`);
}