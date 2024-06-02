const routes = {
    public: {
        home: '/',
        login: '/login',
        register: '/register',
        forgotPassword: '/forgot-password',
        setPassword: '/set-password',
        notFound: '/404',
        product: '/product',
        productList: '/list',
        allProduct: '/all'
    },
    customer: {
        account: '/account',
        cart: '/cart',
        checkout: '/checkout',
        orderList: '/order-list',
        orderSuccess: '/confirm',
        history: '/history',
        voucher: '/voucher',
        notification: '/noti'
    },
    admin: {
        dashboard: '/admin',
        order: '/admin/order',
        confirmedOrder: '/admin/order/confirmed',
        deliveringOrder: '/admin/order/delivering',
        completedOrder: '/admin/order/completed',
        cancelledOrder: '/admin/order/cancelled',
        product: '/admin/product',
        ringSettingProduct: '/admin/product/ring-setting',
        ringProduct: '/admin/product/ring',
        jewelryProduct: '/admin/product/jewelry',
        jewelryTypeProduct: '/admin/product/jewelry-type',
        materialProduct: '/admin/product/material',
        marketing: '/admin/marketing',
        clientCaring: '/admin/client-caring',
        customer: '/admin/customer',
        staff: '/admin/staff',
        manager: '/admin/manager',
        theme: '/admin/theme'
    },
    api: {
        loginGoogle: 'auth/callback/google/redirect'
    }
};

export default routes;