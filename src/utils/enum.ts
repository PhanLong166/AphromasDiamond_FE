export enum PageEnum {
    LOGIN = 'Login',
    REGISTER = 'Register',
    FORGOT_PASSWORD = 'ForgotPassword',
    SET_PASSWORD = 'SetPassword'
}

export const Role: {[key: string]: string} = {
    CUSTOMER: 'CUSTOMER',
    DELI_STAFF: "DELISTAFF",
    SALE_STAFF: "SALESSTAFF",
    MANAGER: "MANAGER",
    ADMIN: "ADMIN"
}

export enum LinkEnum {
    LINK = 'Link',
    NAV_LINK = 'NavLink'
}

