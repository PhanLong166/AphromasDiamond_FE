export enum PageEnum {
    LOGIN = 'Login',
    REGISTER = 'Register',
    FORGOT_PASSWORD = 'ForgotPassword',
    SET_PASSWORD = 'SetPassword'
}

export const Role: {[key: string]: string} = {
    CUSTOMER: 'ROLE_CUSTOMER',
    DELI_STAFF: "ROLE_DELISTAFF",
    SALE_STAFF: "ROLE_SALESSTAFF",
    MANAGER: "ROLE_MANAGER",
    ADMIN: "ROLE_ADMIN"
}

export enum LinkEnum {
    LINK = 'Link',
    NAV_LINK = 'NavLink'
}

export enum CustomAction {
    SET_SELECTED_DIAMOND = 'SetSelectedDimond',
    SET_SELECTED_SETTING = 'SetSelectedSetting',
    SET_COMPLETED_RING = 'SetCompletedRing'
}

