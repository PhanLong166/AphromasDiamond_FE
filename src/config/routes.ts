

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
    allEngagement: "/jewelry/engagement-ring/",
    allWedding: "/jewelry/wedding-ring/",
    engagementShape: "/jewelry/women-engagement-ring/:ringShape",
    weddingShape: "/jewelry/women-wedding-ring/:ringShape",
    menEngagement: "/jewelry/men-engagement-ring/:ringMetal",
    menWedding: "/jewelry/men-wedding-ring/:ringMetal",
    engagementDesigner: "/jewelry/engagement-ring/designer/:designer",
    weddingDesigner: "/jewelry/wedding-ring/designer/:designer",
    sale: "/sale",
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
    reviewFeedBack: "/review-feedback",
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
    jewelryDetail: "/admin/product/jewelry/detail/:id",
    addProduct: "/admin/product/jewelry/add/regular-jewelry",
    AddCustomJewelry: "/admin/product/jewelry/add/diamond-jewelry",
    ringSettingProduct: "/admin/product/jewelry-setting",
    ringSettingDetail: "/admin/product/jewelry-setting/detail/:id",
    jewelryTypeProduct: "/admin/product/jewelry-type",
    materialProduct: "/admin/product/material",
    marketing: "/admin/marketing",
    collectionDetail: "/admin/marketing/collection/detail/:id",
    discount: "/admin/marketing/discount",
    discountDetail: "/admin/marketing/discount/detail/:id",
    voucher: "/admin/marketing/voucher",
    clientCaring: "/admin/client-caring",
    // feedback: "/admin/client-caring/feedback",
    customer: "/admin/customer",
    customerDetail: "/admin/customer/detail/:id",
    salesStaff: "/admin/sales-staff",
    deliveryStaff: "/admin/staff/delivery-staff",
    deliveryStaffDetail: "/admin/staff/delivery-staff/detail/:id",
    manager: "/admin/manager",
  },
  salesStaff: {
    dashboard: "/sales-staff",
    order: "/sales-staff/order",
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
    ringSettingDetail: "/sales-staff/product/jewelry-setting/detail/:id",
    jewelryTypeProduct: "/sales-staff/product/jewelry-type",
    materialProduct: "/sales-staff/product/material",
    collection: "/sales-staff/marketing",
    collectionDetail: "/sales-staff/marketing/collection/detail/:id",
    discount: "/sales-staff/marketing/discount",
    discountDetail: "/sales-staff/marketing/discount/detail/:id",
    voucher: "/sales-staff/marketing/voucher",
    clientCaring: "/sales-staff/client-caring",
    feedback: "/sales-staff/client-caring/feedback",
    feedbackCompleted: "/sales-staff/client-caring/feedback-completed",
  },
  deliStaff: {
    dashboard: '/delivery-staff',
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
