import { getAccountDetail, getCustomer } from "@/services/accountApi";
import cookieUtils from "@/services/cookieUtils";
import { Role } from "@/utils/enum";
import { useCallback, useEffect, useState } from "react";

type JwtType = {
    AccountID: number;
    Email: string;
    Role: string;
    exp: number;
    iat: number;
}

export type UserType = {
    CustomerID: number;
    AccountID: number;
    Name: string;
    PhoneNumber: string | null;
    Email: string;
    Password: string;
    Birthday: string | null;
    Gender: boolean | null;
    Address: string | null;
}

export type AccountType = {
    AccountID: number;
    Name: string;
    PhoneNumber: string | null;
    Email: string;
    Password: string;
    Role: string;
    CustomerID: null;
}

const getRole = () => {
    const decoded = cookieUtils.decodeJwt() as JwtType;
    if (!decoded || !decoded.Role) return null;

    return decoded.Role;
}

const getAccountID = () => {
    const decoded = cookieUtils.decodeJwt() as JwtType;
    if (!decoded || !decoded.AccountID) return null;

    return decoded.AccountID;
}

const getCustomerDetail = async () => {
    const accID = getAccountID();

    const { data } = await getCustomer(accID ? accID : 0);
    const user = data.data as UserType;

    return user;
}

const getAccountInfo = async () => {
    const accID = getAccountID();

    const { data } = await getAccountDetail(accID ? accID : 0);
    const account = data.data as AccountType;
    
    return account;
}

const useAuth = () => {
    const [role, setRole] = useState<string | null>(getRole());
    const [AccountID, setAccountID] = useState<number | null>(getAccountID());
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<UserType | null>(null);
    const [account, setAccount] = useState<AccountType | null>(null);

    const token = cookieUtils.getToken();

    const checkTokenExpiration = useCallback(() => {
        if (token) {
            const decoded = cookieUtils.decodeJwt() as JwtType;

            if (!decoded || decoded.exp < Date.now() / 1000) {
                setRole(null);
                cookieUtils.deleteUser();
                return;
            }
        }
    }, [token]);

    useEffect(() => {
        const token = cookieUtils.getToken();

        if (!token) {
            setRole(null);
            return;
        }

        const fetchUser = async () => {
            try {
                setLoading(true);

                setRole(getRole());

                setAccountID(getAccountID());

                if (role === Role.CUSTOMER) {
                    const user = await getCustomerDetail();
                    setUser(user);
                } else {
                    const account = await getAccountInfo();
                    setAccount(account);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUser();

        const intervalId = setInterval(checkTokenExpiration, 5000);

        return () => clearInterval(intervalId);
    }, [checkTokenExpiration]);

    return { loading, role, AccountID, user, account };
};

export default useAuth;