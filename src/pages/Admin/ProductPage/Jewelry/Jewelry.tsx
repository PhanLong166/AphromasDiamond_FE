// import * as Styled from "./Jewelry.styled";
// import { useEffect, useState } from "react";
// import { Space, Table, Input, Button } from "antd";
// import {
//   SearchOutlined,
//   PlusCircleOutlined,
//   EyeOutlined,
// } from "@ant-design/icons";
// import type { TableColumnsType, TableProps } from "antd";
// import { Modal } from "antd"; 
// import { Link, useNavigate } from "react-router-dom"; 
// import Sidebar from "@/components/Admin/Sidebar/Sidebar";
// import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
// import { getImage } from "@/services/imageAPI";
// import { showAllProduct } from "@/services/jewelryAPI";


// const Jewelry = () => {
//   const [searchText, setSearchText] = useState("");
//   const [jewelryList, setJewelryList] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false); 
//   const navigate = useNavigate(); 

//   const fetchData = async () => {
//     try {
//       const responseJewelrys = await showAllProduct();
  
//       const jewelrysData = responseJewelrys.data;
  
//       const formattedJewelryList = jewelrysData.map(async (jewelry: any) => ({
//         jewelryID: jewelry.ProductID,
//         jewelryName: jewelry.Name,
//         inscription: jewelry.Inscription,
//         inscriptionFont: jewelry.InscriptionFont,
//         brand: jewelry.Brand,
//         jewelrySettingID_Jewelry: jewelry.JewelrySettingID,
//         accountID: jewelry.AccountID,
//         totalDiamondPrice: jewelry.TotalDiamondPrice,
//         collectionID: jewelry.CollectionID,
//         discountID: jewelry.DiscountID,
//         totalQuantitySettingVariants: jewelry.TotalQuantityJewelrySettingVariants,
//         images: await Promise.all(jewelry.UsingImage?.map(async (image: any) => ({
//           id: image.UsingImageID,
//           name: image.Name,
//           url: await getImage(image.UsingImageID),
//         }))),
//       }));
  
//       console.log("Formatted Jewelry:", formattedJewelryList);
//       setJewelryList(formattedJewelryList);
//     } catch (error) {
//       console.error("Failed to fetch jewelrys:", error);
//     }
//   };
  

//   useEffect(() => {
//     fetchData();
//   }, []);

// // SEARCH
//   const onSearch = (value: string) => {
//     console.log("Search:", value);
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       onSearch(searchText);
//     }
//   };

//   const columns: TableColumnsType<any> = [
//     {
//       title: "Jewelry ID",
//       dataIndex: "jewelryID",
//       defaultSortOrder: "descend",
//       sorter: (a, b) => parseInt(a.jewelryID) - parseInt(b.jewelryID),
//     },
//     {
//       title: "Image",
//       key: "jewelryImg",
//       className: "TextAlign",
//       render: (_, record) => (
//         <a href="#" target="_blank" rel="noopener noreferrer">
//           <img
//             src={
//               record.images && record.images[0]
//                 ? record.images[0].url
//                 : "default-image-url"
//             }
//             alt={record.jewelryName}
//             style={{ width: "50px", height: "50px" }}
//           />
//         </a>
//       ),
//     },
//     {
//       title: "Jewelry Name",
//       dataIndex: "jewelryName",
//       showSorterTooltip: { target: "full-header" },
//       onFilter: (value, record) =>
//         record.jewelryName.indexOf(value as string) === 0,
//       sorter: (a, b) => a.jewelryName.length - b.jewelryName.length,
//       sortDirections: ["descend"],
//     },
//     {
//       title: "Brand",
//       dataIndex: "brand",
//       key: "brand",
//       // filters: JewelryType_Filter,
//       onFilter: (value, record) => record.brand.indexOf(value as string) === 0,
//       sortDirections: ["descend"],
//     },
//     {
//       title: "Detail",
//       key: "detail",
//       className: "TextAlign",
//       render: (_, { jewelryID }) => (
//         <Space size="middle">
//           <Link to={`/admin/product/jewelry/detail/${jewelryID}`}>
//             <EyeOutlined />
//           </Link>
//         </Space>
//       ),
//     },
//   ];

//   // Add New
//   const handleAddNew = () => {
//     setIsModalVisible(true);
//   };
  
//   const handleModalOkCancel = () => {
//     setIsModalVisible(false);
//   };
  
//   const handleAddJewelry = () => {
//     setIsModalVisible(false);
//     navigate("/admin/product/jewelry/add/diamond-jewelry"); // Update this line
//   };
  
//   const handleAddCustomRing = () => {
//     setIsModalVisible(false);
//     navigate("/admin/product/jewelry/add/regular-jewelry"); // Update this line
//   };

//   const onChangeTable: TableProps<any>["onChange"] = (
//     pagination,
//     filters,
//     sorter,
//     extra
//   ) => {
//     console.log("params", pagination, filters, sorter, extra);
//   };

//   return (
//     <>
//       <Styled.GlobalStyle />
//       <Styled.ProductAdminArea>
//         <Sidebar />

//         <Styled.AdminPage>
//           <ProductMenu />

//           <Styled.AdPageContent>
//             <Styled.AdPageContent_Head>
//               <Styled.AdPageContent_HeadLeft>
//                 <Styled.SearchArea>
//                   <Input
//                     className="searchInput"
//                     type="text"
//                     placeholder="Search here..."
//                     value={searchText}
//                     onChange={(e) => setSearchText(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                     prefix={<SearchOutlined className="searchIcon" />}
//                   />
//                 </Styled.SearchArea>
//               </Styled.AdPageContent_HeadLeft>

//               <Styled.AddButton>
//                 <button onClick={handleAddNew}>
//                   <PlusCircleOutlined />
//                   Add New Product
//                 </button>
//               </Styled.AddButton>
//             </Styled.AdPageContent_Head>

//             <Styled.AdminTable>
//               <Table
//                 className="table"
//                 columns={columns}
//                 dataSource={jewelryList}
//                 pagination={{ pageSize: 6 }}
//                 onChange={onChangeTable}
//                 showSorterTooltip={{ target: "sorter-icon" }}
//               />
//             </Styled.AdminTable>
//           </Styled.AdPageContent>
//         </Styled.AdminPage>

//         <Modal
//           title="Select an Option"
//           visible={isModalVisible}
//           onOk={handleModalOkCancel}
//           onCancel={handleModalOkCancel}
//           style={{ width: "100%" }}
//           footer={[
//             <Button key="cancel" onClick={handleModalOkCancel}>
//               Cancel
//             </Button>,
//           ]}
//         >
//           <Button
//             type="primary"
//             onClick={handleAddJewelry}
//             style={{ marginRight: "10px", backgroundColor: "#151542" }}
//           >
//             Add Regular Jewelry
//           </Button>
//           <Button
//             type="primary"
//             style={{ backgroundColor: "#151542" }}
//             onClick={handleAddCustomRing}
//           >
//             Add Diamond Jewelry
//           </Button>
//         </Modal>
//       </Styled.ProductAdminArea>
//     </>
//   );
// };

// export default Jewelry;


import * as Styled from "./Jewelry.styled";
import { useEffect, useState } from "react";
import { Space, Table, Input, Button } from "antd";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
// import { Link } from "react-router-dom";
import { Modal } from "antd"; // Add this line
import { Link, useNavigate } from "react-router-dom"; 
// import { productData, ProductDataType } from "../ProductData"; // Import data here
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
// import { JewelryType_Filter } from "./Jewelry.type";
import { getImage } from "@/services/imageAPI";
import { showAllSetting } from "@/services/jewelrySettingAPI";
import { showAllDiamond } from "@/services/diamondAPI";
import { showAllProduct } from "@/services/jewelryAPI";


const Jewelry = () => {
  // const [isAdding, setIsAdding] = useState(false);
  const [searchText, setSearchText] = useState("");
<<<<<<< HEAD
  const [api, contextHolder] = notification.useNotification();
  const [jewelrys, setJewelrys] = useState<any[]>([]);
  const [diamonds, setDiamonds] = useState<any[]>([]);
  const [settings, setSettings] = useState<any[]>([]);
=======
  // const [api, contextHolder] = notification.useNotification();
  const [jewelrys, setJewelrys] = useState([]);
  const [diamonds, setDiamonds] = useState([]);
  const [settings, setSettings] = useState([]);
>>>>>>> 8caf947f8ea3b2387dfcd367e2d7ac5cea1ff6d4
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const navigate = useNavigate(); 

  
  // type NotificationType = 'success' | 'info' | 'warning' | 'error';

  // const openNotification = (
  //   type: NotificationType,
  //   method: string,
  //   error: string
  // ) => {
  //   api[type]({
  //     message: type === "success" ? "Notification" : "Error",
  //     description: type === "success" ? `${method} jewelry setting successfully` : error,
  //   });
  // };


  const fetchData = async () => {
    try {
      const responseDiamonds = await showAllDiamond();
      const responseSetting = await showAllSetting();
      const responseJewelryList = await showAllProduct();

      const { data: diamondsData } = responseDiamonds.data;
      const { data: settingsData } = responseSetting.data;
      const { data: jewelryListData } = responseJewelryList.data;

      const formattedDiamonds = diamondsData.map((diamond: any) => ({
        diamondID: diamond.DiamondID,
        diamondName: diamond.Name,
        price: diamond.Price,
        color: diamond.Color,
        shape: diamond.Shape,
        polish: diamond.Polish,
        cut: diamond.Cut,
        lengthOnWidthRatio: diamond.LengthOnWidthRatio,
        clarity: diamond.Clarity,
        symmetry: diamond.Symmetry,
        weightCarat: diamond.WeightCarat,
        percentTable: diamond.PercentTable,
        percentDepth: diamond.PercentDepth,
        fluorescence: diamond.Fluorescence,
        description: diamond.Description,
        exchangeRate: 1,
        chargeRate: diamond.ChargeRate,
        images: diamond.usingImage.map((image: any) => ({
          id: image.UsingImageID,
          name: image.Name,
          url: getImage(image.UsingImageID),
        })),
      }));

      const formattedSettings = settingsData.map((setting: any) => ({
        jewelrySettingID: setting.JewelrySettingID,
        jewelrySettingName: setting.Name,
        productID: setting.ProductID,
        jewelryTypeID: setting.JewelryTypeID,
        productionCost: setting.ProductionCost,
        isActive: setting.IsActive === true,
        jewelrySettingVariant: setting.JewelrySettingVariant.map(
          (variant: any) => ({
            variantID: variant.JewelrySettingVariantID,
            amount: variant.Amount,
            totalPriceVariant: variant.TotalPriceVariant,
            size: {
              sizeID: variant.SizeID,
              sizeValue: variant.SizeValue,
              unitOfMeasure: variant.UnitOfMeasure,
            },
          })
        ),
        images: setting.UsingImage.map((image: any) => ({
          id: image.UsingImageID,
          name: image.Name,
          url: getImage(image.UsingImageID),
        })),
      }));

      const formattedJewelryList = jewelryListData.map((jewelry: any) => ({
        jewelryID: jewelry.ProductID,
        jewelryName: jewelry.Name,
        inscription: jewelry.Inscription,
        inscriptionFont: jewelry.InscriptionFont,
        brand: jewelry.Brand,
        jewelrySettingID_Jewelry: jewelry.JewelrySettingID,
        accountID: jewelry.AccountID,
        totalDiamondPrice: jewelry.TotalDiamondPrice,
        collectionID: jewelry.CollectionID,
        discountID: jewelry.DiscountID,
        totalQuantitySettingVariants: jewelry.TotalQuantityJewelrySettingVariants,
        images: jewelry.UsingImage.map((image: any) => ({
          id: image.UsingImageID,
          name: image.Name,
          url: getImage(image.UsingImageID),
        })),
      }));

      console.log("Formatted Diamonds:", formattedJewelryList); 
      setDiamonds(formattedDiamonds);
      setSettings(formattedSettings);
<<<<<<< HEAD
      setJewelrys(formattedJewelryList);
=======
      setJewelrys(formattedJewelrys);
      console.log(diamonds);
      console.log(settings);
>>>>>>> 8caf947f8ea3b2387dfcd367e2d7ac5cea1ff6d4
    } catch (error) {
      console.error("Failed to fetch diamonds:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

// SEARCH
  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  const columns: TableColumnsType<any> = [
    {
      title: "Jewelry ID",
      dataIndex: "jewelryID",
      defaultSortOrder: "descend",
      sorter: (a, b) => parseInt(a.jewelryID) - parseInt(b.jewelryID),
    },
    {
      title: "Image",
      key: "jewelryImg",
      className: "TextAlign",
      render: (_, record) => (
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={
              record.images && record.images[0]
                ? record.images[0].url
                : "default-image-url"
            }
            alt={record.jewelryName}
            style={{ width: "50px", height: "50px" }}
          />
        </a>
      ),
    },
    {
      title: "Jewelry Name",
      dataIndex: "jewelryName",
      showSorterTooltip: { target: "full-header" },
      onFilter: (value, record) =>
        record.jewelryName.indexOf(value as string) === 0,
      sorter: (a, b) => a.jewelryName.length - b.jewelryName.length,
      sortDirections: ["descend"],
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      // filters: JewelryType_Filter,
      onFilter: (value, record) => record.brand.indexOf(value as string) === 0,
      sortDirections: ["descend"],
    },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: (_, { jewelryID }) => (
        <Space size="middle">
          <Link to={`/admin/product/jewelry/detail/${jewelryID}`}>
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  // Add New
  const handleAddNew = () => {
    setIsModalVisible(true);
  };
  
  const handleModalOkCancel = () => {
    setIsModalVisible(false);
  };
  
  const handleAddJewelry = () => {
    setIsModalVisible(false);
    navigate("/admin/product/jewelry/add/regular-jewelry"); // Update this line
  };
  
  const handleAddCustomRing = () => {
    setIsModalVisible(false);
    navigate("/admin/product/jewelry/add/diamond-jewelry"); // Update this line
  };

  const onChangeTable: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
              <Styled.AdPageContent_HeadLeft>
                <Styled.SearchArea>
                  <Input
                    className="searchInput"
                    type="text"
                    placeholder="Search here..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    prefix={<SearchOutlined className="searchIcon" />}
                  />
                </Styled.SearchArea>
              </Styled.AdPageContent_HeadLeft>

              <Styled.AddButton>
                <button onClick={handleAddNew}>
                  <PlusCircleOutlined />
                  Add New Product
                </button>
              </Styled.AddButton>
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              <Table
                className="table"
                columns={columns}
                dataSource={jewelrys}
                pagination={{ pageSize: 6 }}
                onChange={onChangeTable}
                showSorterTooltip={{ target: "sorter-icon" }}
              />
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>

        <Modal
          title="Select an Option"
          visible={isModalVisible}
          onOk={handleModalOkCancel}
          onCancel={handleModalOkCancel}
          style={{ width: "100%" }}
          footer={[
            <Button key="cancel" onClick={handleModalOkCancel}>
              Cancel
            </Button>,
          ]}
        >
          <Button
            type="primary"
            onClick={handleAddJewelry}
            style={{ marginRight: "10px", backgroundColor: "#151542" }}
          >
            Add Regular Jewelry
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "#151542" }}
            onClick={handleAddCustomRing}
          >
            Add Diamond Jewelry
          </Button>
        </Modal>
      </Styled.ProductAdminArea>
    </>
  );
};

export default Jewelry;