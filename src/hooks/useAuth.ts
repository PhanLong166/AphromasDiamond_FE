import { getInfoCurrentUser } from "@/services/accountApi";
import cookieUtils from "@/services/cookieUtils";
import { Role } from "@/utils/enum";
import { useCallback, useEffect, useState } from "react";

type PayloadType = {
    id: number;
    role: string;
    fullname: string;
    email: string;
}

type JwtType = {
    exp: number;
    payload: PayloadType;
}

export type UserType = {
    emailAddress: string;
    emailValidationStatus: boolean;
    fullName: string;
    phoneNumber: string | null;
}

const getRole = () => {
    const decoded = cookieUtils.decodeJwt() as JwtType;

    if (!decoded || !decoded.payload || !decoded.payload.role) return null;

    return Role[decoded.payload.role];
}

const useAuth = () => {
    const [role, setRole] = useState<string | null>(getRole());
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<UserType>();

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

            const getInfo = async () => {
                const { data } = await getInfoCurrentUser();
                setUser(data);
            };

            getInfo();
        } finally {
            setLoading(false);
        }

        const intervalId = setInterval(checkTokenExpiration, 5000);

        return () => clearInterval(intervalId);
    }, [checkTokenExpiration]);

    return {loading, role, user};
};

export default useAuth;