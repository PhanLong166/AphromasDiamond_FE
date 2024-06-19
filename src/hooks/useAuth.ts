import cookieUtils from "@/services/cookieUtils";
import { useCallback, useEffect, useState } from "react";

// type PayloadType = {
//     id: number;
//     role: string;
//     fullname: string;
//     email: string;
// }

type JwtType = {
    AccountID: number;
    Email: string;
    Role: string;
    exp: number;
    iat: number;
}

export type UserType = {
    emailAddress: string;
    emailValidationStatus: boolean;
    fullName: string;
    phoneNumber: string | null;
}

const getRole = () => {
    const decoded = cookieUtils.decodeJwt() as JwtType;
    if (!decoded || !decoded.Role) return null;

    return decoded.Role;
}

const useAuth = () => {
    const [role, setRole] = useState<string | null>(getRole());
    const [loading, setLoading] = useState(false);
    // const [user, setUser] = useState<UserType>();

    const token = cookieUtils.getToken();

    const checkTokenExpiration = useCallback(() => {
        if (token) {
            const decoded = cookieUtils.decodeJwt() as JwtType;

            if(!decoded || decoded.exp < Date.now() / 1000) {
                setRole(null);
                cookieUtils.deleteUser();
                return;
            }
        }
    }, [token]);

    useEffect(() => {
        const token = cookieUtils.getToken();

        if(!token) {
            setRole(null);
            return;
        }

        try {
            setLoading(true);

            setRole(getRole());

        } finally {
            setLoading(false);
        }

        const intervalId = setInterval(checkTokenExpiration, 5000);

        return () => clearInterval(intervalId);
    }, [checkTokenExpiration]);

    return {loading, role};
};

export default useAuth;