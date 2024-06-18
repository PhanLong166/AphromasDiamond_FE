
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
        about: '/about',
        gift: '/gift',
        ringGuide: '/ring-guide',
        diamond: '/diamond'
    },
    customer: {
        account: '/account',
        cart: '/cart',
        checkout: '/checkout',
        orderList: '/order-list',
        orderSuccess: '/confirm',
        history: '/history',
        voucher: '/voucher',
        notification: '/noti',
        // orderDetails:'/order-details'
        orderDetails: '/order-details'
    },
    admin: {
        dashboard: '/admin',
        order: '/admin/order',
        pendingOrder: '/admin/order/pending',
        confirmedOrder: '/admin/order/confirmed',
        deliveringOrder: '/admin/order/delivering',
        completedOrder: '/admin/order/completed',
        cancelledOrder: '/admin/order/cancelled',
        product: '/admin/product',
        addProduct: '/admin/product/add/product',
        addJewelry: '/admin/product/add/jewelry',
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
    salesStaff: {
        dashboard: '/sales-staff',
        order: '/sales-staff/order',
        confirmedOrder: '/sales-staff/order/confirmed',
        deliveringOrder: '/sales-staff/order/delivering',
        completedOrder: '/sales-staff/order/completed',
        cancelledOrder: '/sales-staff/order/cancelled',
        product: '/sales-staff/product',
        diamond: '/sales-staff/product/diamond',
        ringSettingProduct: '/sales-staff/product/ring-setting',
        ringProduct: '/sales-staff/product/ring',
        jewelryTypeProduct: '/sales-staff/product/product-type',
        materialProduct: '/sales-staff/product/material',
        clientCaring: '/sales-staff/client-caring',
        feedback: '/sales-staff/client-caring/feedback',
    },
    deliStaff: {
        // dashboard: '/delistaff',
        deliveryReport: '/delivery-staff/delivery-report'
    },
    api: {
        loginGoogle: '/auth/signin'
    }
};

export default routes;