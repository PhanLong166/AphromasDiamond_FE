import { get } from "./apiCaller";

// interface UpdateAccount {
//     fullName: string;
//     phoneNumber: string;
//     role: string;
//     email: string;
//     address: string;
// }

export const getInfoCurrentUser = () => {
    return get(`/account/current`);
}

