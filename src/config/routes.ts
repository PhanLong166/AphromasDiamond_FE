

const routes = {
  public: {
    home: "/",
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    setPassword: "/set-password",
    notFound: "/404",
    product: "/product",
    productDetail: "/product/:id",
    diamondDetail: "/diamond/:id",
    jewelryList: "/jewelry/:jewelryType",
    diamondList: "/diamond/shape/:diamondShape",
    firmList: "/jewelry/firm/:jewelryFirm",
    designerList: "/diamond-ring/designer/:designer",
    diamondRingList: "/diamond-ring/:ringType",
    cutterList: "/diamond/cutter/:diamondCutter",
    allProduct: "/all",
    about: "/about",
    gift: "/gift/:jewelryType",
    giftFirm: "/gift/firm/:jewelryFirm",
    ringGuide: "/ring-guide",
    diamond: "/diamond",
    collection: "/collection",
    collectionInfo: "/info",
    coming: "/coming",
    learn: "/learn",
    size: "/find-ring-size",
    wish: "/wishlist",
    cs:"/learn-4cs",
    certification: "/diamond-certification",
    shape: "/diamond-shape",
    buying: "/buying-guide",
    metalEdu: "/metal-education",
    earringEdu: "/earrings-education",
    necklaceEdu: "/necklaces-education",
    braceletEdu: "/bracelets-education",
    engagementEdu: "/engagement-ring-education",
    weddingEdu: "/wedding-ring-education",
    success: "/success",
    fail: "/fail",
    brand: "/brand",
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
    ringSettingProduct: "/admin/product/jewelry-setting",
    ringSettingDetail: "/admin/product/jewelry-setting/detail/:id",
    ringProduct: "/admin/product/ring",
    jewelryTypeProduct: "/admin/product/jewelry-type",
    materialProduct: "/admin/product/material",
    collection: "/admin/marketing",
    collectionDetail: "/admin/marketing/collection/detail/:id",
    discount: "/admin/marketing/discount",
    discountDetail: "/admin/marketing/discount/detail/:id",
    voucher: "/admin/marketing/voucher",
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
    deliveryPending: "/delivery-staff/delivery-pending",
    deliveryDelivering: "/delivery-staff/delivery-delivering",
    deliveryDelivered: "/delivery-staff/delivery-delivered",
    deliveryReturn: "/delivery-staff/delivery-return",
    deliveryCompleted: "/delivery-staff/delivery-completed",
  },
  api: {
    loginGoogle: "/auth/signin",
  },
};

export default routes;
