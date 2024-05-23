const routes = {
    public: {
        home: '/',
        login: '/login',
        register: '/register',
        forgotPassword: '/forgot-password',
        setPassword: '/set-password',
        notFound: '/404'
    },
    customer: {
        profile: '/profile',
        cart: '/cart',
        checkout: '/checkout',
        purchased: '/purchased',
        orderSuccess: '/confirm',
    },
    admin: {
        dashboard: '/admin',
        orders: '/admin/order',
        products: '/admin/product',
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