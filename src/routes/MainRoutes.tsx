import MainLayout from "@/layouts/MainLayout";
import config from "../config";
import Account from "../pages/Customer/AccountDetail/AccountDetail";
import Cart from "../pages/Customer/Cart/Cart";
import Checkout from "../pages/Customer/Checkout/Checkout";
import OrderList from "../pages/Customer/OderList/OderList";
import Voucher from "../pages/Customer/Voucher/Voucher";
import { Navigate, Outlet } from "react-router-dom";
import ProductList from "@/pages/Home/List/ProductList/ProductList";
import AllProduct from "@/pages/Home/AllProduct/AllProduct";

import NotiPage from "@/pages/Customer/Nofications/Nofications";

// import Reply from "@/pages/Home/Reply/Reply";
// import FeedbackSale from "@/pages/Home/SaleStaff/FeedbackSale";
// import FeedbackCompleted from "@/pages/Home/SaleStaff/FeedbackCompleted";
import History from "@/pages/Customer/History/History";
import Home from "@/pages/Home/Home";
import About from "@/pages/Home/AboutUs/AboutUs";
import LearnAbout from "@/pages/Home/LearnAbout/LearnAbout";
import Gift from "@/pages/Home/List/Gift/Gift";
import RingGuide from "@/pages/Home/RingGuilde/RingGuide";

// import OrderDetails from "@/pages/Customer/OrderDetails/OrderDetails";
import AllDiamond from "@/pages/Home/AllDiamond/AllDiamond";
import useAuth from "@/hooks/useAuth";
import { Role } from "@/utils/enum";
import AllCollection from "@/pages/Home/AllCollection/AllCollection";
import CollectionInformation from "@/pages/Home/CollectionInformation/CollectionInfomation";
// import useAuth from "@/hooks/useAuth";
import OrderDetail from "@/pages/Customer/OrderDetails/OrderDetails";
import CollectionComing from "@/pages/Home/CollectionComing/CollectionComing";
import FindSize from "@/pages/Home/DocumentPage/FindSize/FindSize";
// import WishListPage from "@/pages/Home/WishList/WishListPage";
import Learn4cs from "@/pages/Home/DocumentPage/Learn4cs/Learn4cs";
import Certification from "@/pages/Home/DocumentPage/Certification/Certification";
import DiamondShape from "@/pages/Home/DocumentPage/DiamondShape/DiamondShape";
import BuyingGuide from "@/pages/Home/DocumentPage/BuyingGuide/BuyingGuide";
import EngagementEdu from "@/pages/Home/DocumentPage/EngagementEdu/EngagementEdu";
import WeddingEdu from "@/pages/Home/DocumentPage/WeddingEdu/WeddingEdu";
import MetalEdu from "@/pages/Home/DocumentPage/MetalEdu/MetalEdu";
import EarringEdu from "@/pages/Home/DocumentPage/EarringEdu/EarringEdu";
import NecklaceEdu from "@/pages/Home/DocumentPage/NecklaceEdu/NecklaceEdu";
import BraceletEdu from "@/pages/Home/DocumentPage/BraceletEdu/BraceletEdu";
import ThankPageSuccess from "@/pages/Home/ThankPage/ThankPageSuccess";
import ThankPageFail from "@/pages/Home/ThankPage/ThankPageFail";
import ProductDetails from "@/pages/Home/ProductDetails/ProductDetails";
import DiamondDetails from "@/pages/Home/DiamondDetail/DiamondDetail";
import BrandList from "@/pages/Home/BrandList/BrandList";
import DiamondList from "@/pages/Home/List/DiamondList/DiamondList";
import DiamondRingList from "@/pages/Home/List/DiamondRingList/DiamondRingList";

import FirmList from "@/pages/Home/List/FirmList/FirmList";
import GiftFirmList from "@/pages/Home/List/GiftFirmList/GiftFirmList";
import CutterList from "@/pages/Home/List/CutterList/CutterList";
import DesignerList from "@/pages/Home/List/DesignerList/DesignerList";
import EngagementList from "@/pages/Home/List/EngagementList/EngagementList";
import AllEngagementRing from "@/pages/Home/AllEngagementRing/AllEngagementRing";
import MenEngagementRing from "@/pages/Home/List/MenEngagementRing/MenEngagementRing";
import EngagementDesignerList from "@/pages/Home/List/EngagementDesignerList/EngagementDesignerList";
import AllWeddingRing from "@/pages/Home/AllWeddingRing/AllWeddingRing";
import WeddingList from "@/pages/Home/List/WeddingList/WeddingList";

const MainRouter = () => {
  const { role } = useAuth();
  if (role?.includes(Role.ADMIN))
    return <Navigate to={config.routes.admin.dashboard} />;
  if (role?.includes(Role.SALES_STAFF))
    return <Navigate to={config.routes.salesStaff.acceptedOrder} />;
  if (role?.includes(Role.DELI_STAFF))
    return <Navigate to={config.routes.deliStaff.deliveryPending} />;

  return <MainLayout />;
};

const CustomerRouter = () => {
  //Use when you have database
  // const { role } = useAuth();
  // return role?.includes(Role.CUSTOMER) ? <Outlet /> : <Navigate to={config.routes.public.login} />;

  //Use when you don't have database
  return <Outlet />;
};

const publicRoutes = {
  children: [
    { path: config.routes.public.home, element: <Home /> },
    { path: config.routes.public.productDetail, element: <ProductDetails /> },
    { path: config.routes.public.diamondDetail, element: <DiamondDetails /> },
    { path: config.routes.public.jewelryList, element: <ProductList /> },
    { path: config.routes.public.diamondList, element: <DiamondList /> },
    {
      path: config.routes.public.diamondRingList,
      element: <DiamondRingList />,
    },
    { path: config.routes.public.designerList, element: <DesignerList /> },
    { path: config.routes.public.firmList, element: <FirmList /> },
    { path: config.routes.public.cutterList, element: <CutterList /> },
    { path: config.routes.public.allEngagement, element: <AllEngagementRing /> },
    { path: config.routes.public.allWedding, element: <AllWeddingRing /> },
    { path: config.routes.public.engagementShape, element: <EngagementList /> },
    { path: config.routes.public.weddingShape, element: <WeddingList /> },
    { path: config.routes.public.engagementDesigner, element: <EngagementDesignerList /> },
    { path: config.routes.public.menEngagement, element: <MenEngagementRing /> },
    { path: config.routes.public.allProduct, element: <AllProduct /> },
    { path: config.routes.public.about, element: <About /> },
    { path: config.routes.public.gift, element: <Gift /> },
    { path: config.routes.public.giftFirm, element: <GiftFirmList /> },
    { path: config.routes.public.ringGuide, element: <RingGuide /> },
    { path: config.routes.public.diamond, element: <AllDiamond /> },
    { path: config.routes.public.collection, element: <AllCollection /> },
    {
      path: config.routes.public.collectionInfo,
      element: <CollectionInformation />,
    },
    { path: config.routes.public.coming, element: <CollectionComing /> },
    { path: config.routes.public.learn, element: <LearnAbout /> },
    { path: config.routes.public.size, element: <FindSize /> },
    { path: config.routes.public.cs, element: <Learn4cs /> },
    { path: config.routes.public.certification, element: <Certification /> },
    { path: config.routes.public.shape, element: <DiamondShape /> },
    { path: config.routes.public.buying, element: <BuyingGuide /> },
    { path: config.routes.public.engagementEdu, element: <EngagementEdu /> },
    { path: config.routes.public.weddingEdu, element: <WeddingEdu /> },
    { path: config.routes.public.metalEdu, element: <MetalEdu /> },
    { path: config.routes.public.earringEdu, element: <EarringEdu /> },
    { path: config.routes.public.necklaceEdu, element: <NecklaceEdu /> },
    { path: config.routes.public.braceletEdu, element: <BraceletEdu /> },
    { path: config.routes.public.success, element: <ThankPageSuccess /> },
    { path: config.routes.public.fail, element: <ThankPageFail /> },
    { path: config.routes.public.brand, element: <BrandList /> },
  ],
};

const customerRoutes = {
  element: <CustomerRouter />,
  children: [
    { path: config.routes.customer.cart, element: <Cart /> },
    { path: config.routes.customer.checkout, element: <Checkout /> },
    { path: config.routes.customer.account, element: <Account /> },
    { path: config.routes.customer.orderList, element: <OrderList /> },
    { path: config.routes.customer.history, element: <History /> },
    { path: config.routes.customer.voucher, element: <Voucher /> },
    { path: config.routes.customer.notification, element: <NotiPage /> },
    { path: config.routes.customer.orderDetails, element: <OrderDetail /> },
  ],
};

const MainRoutes = {
  path: "/",
  element: <MainRouter />,
  children: [publicRoutes, customerRoutes],
};

export default MainRoutes;
