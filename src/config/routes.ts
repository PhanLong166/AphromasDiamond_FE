
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
        allProduct: '/all',
        homev2: '/homev2',
        learn: '/learn'
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
        diamondProduct: '/admin/product/diamond',
        ringSettingProduct: '/admin/product/ring-setting',
        ringProduct: '/admin/product/ring',
        jewelryTypeProduct: '/admin/product/jewelry-type',
        materialProduct: '/admin/product/material',
        marketing: '/admin/marketing',
        clientCaring: '/admin/client-caring',
        feedback: '/admin/client-caring/feedback',
        customer: '/admin/customer',
        salesStaff: '/admin/sales-staff',
        deliveryStaff: '/admin/staff/delivery-staff',
        manager: '/admin/manager',
        theme: '/admin/theme'
    },
    staff: {
        dashboard: '/staff',
        deliveryReport: '/staff/delivery-report'
    },
    api: {
        loginGoogle: '/auth/signin'
    }
};

export default routes;