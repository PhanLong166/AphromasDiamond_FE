const routes = {
  public: {
    home: "/",
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    setPassword: "/set-password",
    notFound: "/404",
    product: "/product",
    productList: "/list",
    allProduct: "/all",
    about: "/about",
    gift: "/gift",
    ringGuide: "/ring-guide",
    diamond: "/diamond",
    collection: "/collection",
    collectionInfo: "/info",
    coming: "/coming",
    learn: "/learn",
    size: "/size",
    wish: "/wishlist"
  },
  customer: {
    account: "/account",
    cart: "/cart",
    checkout: "/checkout",
    orderList: "/order-list",
    orderSuccess: "/confirm",
    history: "/history",
    voucher: "/voucher",
    notification: "/noti",
    // orderDetails:'/order-details'
    orderDetails: "/order-details",
  },
  admin: {
    dashboard: "/admin",
    order: "/admin/order",
    pendingOrder: "/admin/order/pending",
    acceptedOrder: "/admin/order/accepted",
    assignedOrder: "/admin/order/assigned",
    deliveringOrder: "/admin/order/delivering",
    deliveredOrder: "/admin/order/delivered",
    completedOrder: "/admin/order/completed",
    cancelledOrder: "/admin/order/cancelled",
    orderDetail: "/admin/order/detail/:id",
    product: "/admin/product",
    diamondDetail: "/admin/product/diamond/detail/:id",
    jewelryProduct: "/admin/product/jewelry",
    jewelryDetail: "/admin/product/detail/:id",
    addProduct: "/admin/product/add/product",
    addJewelry: "/admin/product/add/jewelry",
    diamondProduct: "/admin/product/diamond",
    ringSettingProduct: "/admin/product/ring-setting",
    ringProduct: "/admin/product/ring",
    jewelryTypeProduct: "/admin/product/jewelry-type",
    materialProduct: "/admin/product/material",
    marketing: "/admin/marketing",
    clientCaring: "/admin/client-caring",
    feedback: "/admin/client-caring/feedback",
    customer: "/admin/customer",
    salesStaff: "/admin/sales-staff",
    deliveryStaff: "/admin/staff/delivery-staff",
    manager: "/admin/manager",
    theme: "/admin/theme",
  },
  salesStaff: {
    order: "/sales-staff",
    pendingOrder: "/sales-staff/order/pending",
    acceptedOrder: "/sales-staff/order/accepted",
    assignedOrder: "/sales-staff/order/assigned",
    deliveringOrder: "/sales-staff/order/delivering",
    deliveredOrder: "/sales-staff/order/delivered",
    completedOrder: "/sales-staff/order/completed",
    cancelledOrder: "/sales-staff/order/cancelled",
    orderDetail: "/sales-staff/order/detail/:id",
    diamond: "/sales-staff/product",
    diamondDetail: "/sales-staff/product/diamond/detail/:id",
    jewelry: "/sales-staff/product/jewelry",
    jewelryDetail: "/sales-staff/product/jewelry/detail/:id",
    ringSettingProduct: "/sales-staff/product/jewelry-setting",
    jewelryTypeProduct: "/sales-staff/product/jewelry-type",
    materialProduct: "/sales-staff/product/material",
    marketing: "/sales-staff/marketing",
    clientCaring: "/sales-staff/client-caring",
    feedback: "/sales-staff/client-caring/feedback",
  },
  deliStaff: {
    // dashboard: '/delistaff',
    deliveryReport: "/delivery-staff/delivery-report",
  },
  api: {
    loginGoogle: "/auth/signin",
  },
};

export default routes;
