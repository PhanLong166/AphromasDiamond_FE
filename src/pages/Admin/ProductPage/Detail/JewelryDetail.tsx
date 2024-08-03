import * as Styled from "./ProductDetail.styled";
import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  Popconfirm,
  Table,
  Popover,
  notification,
} from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import {
  DeleteOutlined,
  InfoCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Brand_Option } from "../Jewelry/Jewelry.type";
import { deleteProduct, getProductDetails } from "@/services/jewelryAPI";
import { showAllSetting } from "@/services/jewelrySettingAPI";
import { showAllMaterial } from "@/services/materialAPI";
import { showAllDiamond } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";
import { deleteSettingVariant } from "@/services/settingVariantAPI";
import { showAllDiscount } from "@/services/discountAPI";
import { showAllJewelryType } from "@/services/jewelryTypeAPI";

const calculateProductPrice = (
  diamondPrice: number,
  totalJewelrySettingPrice: number,
  discount: number
): number => {
  return ((totalJewelrySettingPrice + diamondPrice) * (100 - discount) / 100);
};


const SettingPriceCalculation = (
  <div>
    (Weight * Price per Gram + Auxiliary Cost + Production Cost)* Charge Rate
  </div>
);

const JewelryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeProduct, setActiveProduct] = useState<any | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState<any | null>(null);
  const [isModalVisibleGIA, setIsModalVisibleGIA] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [allDiamonds, setAllDiamonds] = useState<any[]>([]);
  const [allSettings, setAllSettings] = useState<any[]>([]);
  const [allTypes, setAllTypes] = useState<any[]>([]);
  const [dataMaterial, setDataMaterial] = useState<any[]>([]);
  const [allMaterials, setAllMaterials] = useState<any[]>([]);
  const [allDiscounts, setAllDiscounts] = useState<any[]>([]);
  const [productMainImage, setProductMainImage] = useState("");
  const [productSelectedThumb, setProductSelectedThumb] = useState(0);
  const [diamondMainImage, setDiamondMainImage] = useState("");
  const [diamondSelectedThumb, setDiamondSelectedThumb] = useState(0);
  const [settingMainImage, setSettingMainImage] = useState("");
  const [settingSelectedThumb, setSettingSelectedThumb] = useState(0);

  type NotificationType = "success" | "info" | "warning" | "error";

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description:
        type === "success" ? `${method} manager successfully` : error,
    });
  };

  const JewelryPriceCalculation = (
    <div>
      (Diamond Price + Price of each Material Setting) * (100 - discount) / 100
    </div>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProduct = await getProductDetails(Number(id));
        const responseDiamondList = await showAllDiamond();
        const responseSettingList = await showAllSetting();
        const responseMaterial = await showAllMaterial();
        const responseDiscount = await showAllDiscount();
        const responseType = await showAllJewelryType();

        const productData = responseProduct.data.data;
        const { data: diamondListData } = responseDiamondList.data;
        const { data: settingListData } = responseSettingList.data;
        const { data: materialsData } = responseMaterial.data;
        const { data: discountData } = responseDiscount.data;
        const { data: typeData } = responseType.data;

        const formattedDiamondList = diamondListData
          .filter((diamond: any) => (diamond.IsActive && diamond.ProductID === null))
          .map((diamond: any) => ({
            diamondID: diamond.DiamondID,
            diamondName: diamond.Name,
            images: diamond.usingImage.map((image: any) => ({
              id: image.UsingImageID,
              name: image.Name,
              url: getImage(image.UsingImageID),
            })),
          }));

        const formattedSettingList = settingListData.map((setting: any) => ({
          jewelrySettingID: setting.JewelrySettingID,
          images: setting.UsingImage.map((image: any) => ({
            id: image.UsingImageID,
            name: image.Name,
            url: getImage(image.UsingImageID),
          })),
        }));

        const formattedMaterials = materialsData.map((material: any) => ({
          materialID: material.MaterialJewelryID,
          materialName: material.Name,
          sellPrice: material.SellPrice,
        }));

        const formattedDiscounts = discountData.map((discount: any) => ({
          discountID: discount.DiscountID,
          discountName: discount.Name,
        }));

        const formattedTypes = typeData.map((type: any) => ({
          jewelryTypeID: type.JewelryTypeID,
          JewelryTypeName: type.Name,
        }));

        setActiveProduct(productData);
        setEditedProduct({ ...productData });
        setDataMaterial(productData.JewelrySetting.jewelrySettingVariant);
        setAllDiamonds(formattedDiamondList);
        setAllSettings(formattedSettingList);
        setAllMaterials(formattedMaterials);
        setAllDiscounts(formattedDiscounts);
        setAllTypes(formattedTypes);

        if (productData.UsingImage && productData.UsingImage.length > 0) {
          const mainImageURL = `http://localhost:3000/usingImage/${productData.UsingImage[0].UsingImageID}`;
          setProductMainImage(mainImageURL);
        } else {
          setProductMainImage("");
        }
        setProductSelectedThumb(0);

        // SET DIAMOND MAIN IMAGE
        if (productData.Diamond[0]?.usingImage && productData.Diamond[0].usingImage.length > 0) {
          const diamondMainImageURL = `http://localhost:3000/usingImage/${productData.Diamond[0].usingImage[0].UsingImageID}`;
          setDiamondMainImage(diamondMainImageURL);
        } else {
          setDiamondMainImage("");
        }
        setDiamondSelectedThumb(0);

        // SET JEWELRY SETTING MAIN IMAGE
        if (productData.JewelrySetting?.usingImage && productData.JewelrySetting.usingImage.length > 0) {
          const settingMainImageURL = `http://localhost:3000/usingImage/${productData.JewelrySetting.usingImage[0].UsingImageID}`;
          setSettingMainImage(settingMainImageURL);
        } else {
          setSettingMainImage("");
        }
        setSettingSelectedThumb(0);
      } catch (error) {
        console.error("Error fetching jewelry setting details:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    console.log("Active Product:", activeProduct);
  }, [activeProduct]);


  // GIA CERTIFICATE POPUP
  const showModalGIA = () => {
    setIsModalVisibleGIA(true);
  };

  const handleOkGIA = () => {
    setIsModalVisibleGIA(false);
  };

  const handleCancelGIA = () => {
    setIsModalVisibleGIA(false);
  };

  // EDIT INFOR
  // const [editedDiamond, setEditedDiamond] = useState(activeDiamond);
  // const [editedRingSetting, setEditedRingSetting] = useState(activeRingSetting);
  // const [editedRingSettingMaterials, setEditedRingSettingMaterials] = useState(
  //   activeRingSettingMaterials
  // );
  // const [editedCollection, setEditedCollection] = useState(activeCollection);

  const saveChanges = () => {
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const handleFieldChange = (fieldName: string, value: any) => {
    setEditedProduct({
      ...editedProduct!,
      [fieldName]: value,
    });
    // setEditedDiamond({
    //   ...editedDiamond!,
    //   [fieldName]: value,
    // });
    // setEditedRingSetting({
    //   ...editedRingSetting!,
    //   [fieldName]: value,
    // });
    // setEditedRingSettingMaterials({
    //   ...editedRingSettingMaterials!,
    //   [fieldName]: value,
    // });
    // setEditedCollection({
    //   ...editedCollection!,
    //   [fieldName]: value,
    // });
  };

  // VARIANT TABLE
  const handleSaveVariant = (row: any) => {
    const newData = dataMaterial.map((item: any) =>
      row.key === item.key ? { ...item, ...row } : item
    );
    setDataMaterial(newData);
  };

  const handleDeleteVariant = async (jewelrySettingVariantID: number) => {
    try {
      await deleteSettingVariant(jewelrySettingVariantID);
      openNotification("success", "Delete", "");
      setDataMaterial(dataMaterial.filter(item => item.JewelrySettingVariantID !== jewelrySettingVariantID));
    } catch (error: any) {
      console.error("Failed to delete material:", error);
      openNotification("error", "Delete", error.message);
    }
  };

  // const handleAdd = () => {
  //   const newMaterialID = selectedMaterial || "";
  //   const newWeight = 1;
  //   const newPricePerGram = allMaterials.find(material => material.materialID === newMaterialID)?.sellPrice || 1;
  //   const newJewelrySettingPrice = newWeight * newPricePerGram;

  //   const newData: any = {
  //     key: String(dataMaterial.length + 1),
  //     JewelrySettingID: activeProduct?.JewelrySetting?.JewelrySettingID || "",
  //     JewelrySettingVariantID: "",
  //     MaterialJewelryID: newMaterialID,
  //     Weight: newWeight,
  //     SizeID: selectedSize || "defaultSize",
  //     Quantity: 1,
  //     Price: newJewelrySettingPrice,
  //     materialJewelry: allMaterials.find(material => material.materialID === newMaterialID) || {},
  //     size: allSizes.find(size => size.sizeID === selectedSize) || {},
  //   };

  //   setDataMaterial([...dataMaterial, newData]);
  // };

  // const EditableCell: React.FC<{
  //   editable: boolean;
  //   value: any;
  //   onChange: (value: any) => void;
  //   isEditing: boolean;
  // }> = ({ editable, value: initialValue, onChange, isEditing }) => {
  //   const [value, setValue] = useState(initialValue);

  //   useEffect(() => {
  //     setValue(initialValue);
  //   }, [initialValue]);

  //   const handleBlur = () => {
  //     onChange(value);
  //   };

  //   return (
  //     <td>
  //       {editable && isEditing ? (
  //         <Input
  //           value={value}
  //           onChange={(e) => setValue(e.target.value)}
  //           onBlur={handleBlur}
  //         />
  //       ) : (
  //         value
  //       )}
  //     </td>
  //   );
  // };

  const columns = [
    {
      title: "Material",
      dataIndex: "MaterialJewelryID",
      key: "MaterialJewelryID",
      render: (text: string, record: any) =>
        isEditing ? (
          <Select
            placeholder="Select Material"
            value={record.MaterialJewelryID}
            onChange={(value) => handleSaveVariant({ ...record, MaterialJewelryID: value })}
          >
            {allMaterials.map((material: any) => (
              <Select.Option key={material.materialID} value={material.materialID}>
                {material.materialName}
              </Select.Option>
            ))}
          </Select>
        ) : (
          record.materialJewelry?.materialName || text
        ),
    },
    {
      title: "Weight",
      dataIndex: "Weight",
      key: "Weight",
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantity",
    },
    {
      title: (
        <>
          Jewelry Setting Price
          <Popover
            content={SettingPriceCalculation}
            title="Price Calculation"
            trigger="click"
          >
            <InfoCircleOutlined style={{ marginLeft: 8, fontSize: "12px" }} />
          </Popover>
        </>
      ),
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_: unknown, record: any) =>
        dataMaterial.length >= 1 ? (
          <Popconfirm
            title="Are you sure to delete?"
            onConfirm={() => handleDeleteVariant(record.JewelrySettingVariantID)}
          >
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        ) : null,
    },
  ];

  const jewelryColumns = [
    {
      title: "Material Name",
      dataIndex: "materialID",
      render: (_: unknown, record: any) =>
        record.MaterialJewelryID,
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantity",
    },
    {
      title: (
        <>
          Jewelry Price
          <Popover
            content={JewelryPriceCalculation}
            title="Price Calculation"
            trigger="click"
          >
            <InfoCircleOutlined style={{ marginLeft: 8, fontSize: "12px" }} />
          </Popover>
        </>
      ),
      render: (record: any) => {
        const diamondPrice = activeProduct?.TotalDiamondPrice || 0;
        const discount = activeProduct?.Discount?.PercentDiscounts || 0;
        const variantPrice = record.Price;

        const price = calculateProductPrice(diamondPrice, variantPrice, discount);

        return price.toFixed(2);
      },
    },
  ];


  // DELETE JEWELRY
  const handleDelete = async () => {
    try {
      const response = await deleteProduct(activeProduct?.ProductID);
      console.log("Delete Response:", response.data);
      if (response.status === 200) {
        openNotification("success", "Delete", "");
        setIsModalVisible(false);
        navigate("/admin/product/jewelry");
      } else {
        openNotification("error", "Delete", "Failed to delete jewelry.");
      }
    } catch (error: any) {
      console.error("Failed to delete jewelry:", error);
      openNotification("error", "Delete", error.message);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // IMAGE STATES
  const changeProductImage = (src: string, index: number) => {
    setProductMainImage(src);
    setProductSelectedThumb(index);
  };

  const changeDiamondImage = (src: string, index: number) => {
    setDiamondMainImage(src);
    setDiamondSelectedThumb(index);
  };

  const changeSettingImage = (src: string, index: number) => {
    setSettingMainImage(src);
    setSettingSelectedThumb(index);
  };

  return (
    <>
      {contextHolder}
      <Styled.GlobalStyle />
      <Styled.PageAdminArea>
        <Sidebar />
        <Styled.AdminPage>
          <ProductMenu />
          <Styled.PageContent>
            {activeProduct ? (
              <>
                {isEditing ? (
                  <>
                    <Form
                      layout="vertical"
                      className="AdPageContent_Content"
                      initialValues={{
                        jewelryName: editedProduct?.jewelryName,
                        inscription: editedProduct?.Inscription,
                        inscriptionFont: editedProduct?.InscriptionFont,
                      }}
                      onFinish={saveChanges}
                    >
                      <>
                        <Styled.PageContent_Top>
                          <Styled.PageDetail_Title>
                            <p>Jewelry Detail</p>
                          </Styled.PageDetail_Title>
                          <Styled.PageDetail_Infor>
                            <Styled.ImageContainer>
                              <Styled.OuterThumb>
                                <Styled.ThumbnailImage>
                                  {activeProduct.UsingImage?.map(
                                    (image: any, index: any) => {
                                      const imageUrl = `http://localhost:3000/usingImage/${image.UsingImageID}`;
                                      return (
                                        <Styled.Item
                                          key={index}
                                          className={
                                            index === productSelectedThumb
                                              ? "selected"
                                              : ""
                                          }
                                          onClick={() =>
                                            changeProductImage(imageUrl, index)
                                          }
                                        >
                                          <img
                                            key={index}
                                            src={imageUrl}
                                            alt={`Jewelry Thumbnail ${index}`}
                                          />
                                        </Styled.Item>
                                      );
                                    }
                                  )}
                                </Styled.ThumbnailImage>
                              </Styled.OuterThumb>
                              <Styled.OuterMain>
                                <Styled.MainImage>
                                  <img
                                    id="mainImage"
                                    src={productMainImage}
                                    alt="Main"
                                  />
                                </Styled.MainImage>
                              </Styled.OuterMain>
                            </Styled.ImageContainer>
                            <Styled.ProductContent>
                              <Form.Item
                                label="Jewelry ID"
                                className="InforLine_Title"
                              >
                                <Input
                                  value={editedProduct?.ProductID}
                                  className="InforLine_Title"
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "ProductID",
                                      e.target.value
                                    )
                                  }
                                  disabled
                                />
                              </Form.Item>
                              <Form.Item
                                label="Jewelry Name"
                                className="InforLine_Title"
                                name="Name"
                                rules={[
                                  {
                                    required: true,
                                    message: "Jewelry Name is required.",
                                  },
                                  {
                                    pattern: /^[a-zA-Z0-9\s()-.]*$/,
                                    message:
                                      "Only alphabet, numbers, (), - and . are allowed.",
                                  },
                                  {
                                    max: 300,
                                    message:
                                      "Jewelry Name must be at most 300 characters long.",
                                  },
                                ]}
                              >
                                <Input
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "Name",
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Brand"
                                className="InforLine_Title"
                              >
                                <Select
                                  onChange={(value) =>
                                    handleFieldChange("Brand", value)
                                  }
                                >
                                  {Brand_Option.map((option) => (
                                    <Select.Option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>
                              {activeProduct?.DiscountID ? (
                                <Form.Item
                                  label="Discount (%)"
                                  className="InforLine_Title"
                                >
                                  {allDiscounts.map((discount: any) => (
                                    <Select
                                      value={activeProduct?.DiscountID}
                                      onChange={(value) => handleSaveVariant({ ...activeProduct, DiscountID: value })}
                                    >
                                      <Select.Option key={discount.DiscountID} value={discount.DiscountID}>
                                        {discount.Name}
                                      </Select.Option>
                                    </Select>
                                  ))}
                                </Form.Item>
                              ) : null}
                            </Styled.ProductContent>
                          </Styled.PageDetail_Infor>
                          <Styled.MaterialTable>
                            <Table
                              dataSource={dataMaterial}
                              columns={jewelryColumns}
                              rowClassName={() => "editable-row"}
                              bordered
                              pagination={{ pageSize: 4 }}
                            />
                          </Styled.MaterialTable>
                        </Styled.PageContent_Top>
                      </>
                    </Form>

                    {activeProduct.Diamond?.map(
                      (diamond: any) =>
                        diamond.DiamondID != null && (
                          <Styled.PageContent_Mid key={diamond.DiamondID}>
                            <Styled.PageDetail_Title>
                              <p>Diamond Detail</p>
                            </Styled.PageDetail_Title>
                            <Styled.PageDetail_Infor>
                              <Styled.ProductContent>
                                <Form.Item label="Diamond ID" className="InforLine_Title">
                                  <Select
                                    value={activeProduct?.Diamond?.DiamondID}
                                    onChange={(value) =>
                                      handleSaveVariant({ ...activeProduct, DiamondID: value })
                                    }
                                    style={{ width: "100%" }}
                                  >
                                    {allDiamonds.map((diamond: any) => (
                                      <Select.Option key={diamond.diamondID} value={diamond.diamondID}>
                                        {diamond.diamondName}
                                      </Select.Option>
                                    ))}
                                  </Select>
                                </Form.Item>
                              </Styled.ProductContent>
                            </Styled.PageDetail_Infor>
                          </Styled.PageContent_Mid>
                        )
                    )}

                    <Styled.PageContent_Bot>
                      <Styled.PageDetail_Title>
                        <p>Jewelry Setting Detail</p>
                      </Styled.PageDetail_Title>

                      <Styled.PageDetail_Infor>
                        <Styled.ProductContent>
                          <Form.Item
                            label="Jewelry Setting ID"
                            className="InforLine_Title"
                          >
                            <Select
                              value={activeProduct?.JewelrySetting?.JewelrySettingID}
                              onChange={(value) => handleSaveVariant({ ...activeProduct, JewelrySettingID: value })}
                              style={{ width: "100%" }}
                            >
                              {allSettings.map((setting: any) => (
                                <Select.Option key={setting.JewelrySettingID} value={setting.JewelrySettingID}>
                                  {setting.Name}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Styled.ProductContent>
                      </Styled.PageDetail_Infor>
                    </Styled.PageContent_Bot>
                    <Styled.ActionBtn>
                      <Button className="MainBtn" onClick={saveChanges}>
                        <SaveOutlined />
                        Save Change
                      </Button>

                      <Link to="/admin/product/jewelry">
                        <Button
                          style={{ marginLeft: "10px" }}
                          onClick={cancelEditing}
                        >
                          Back
                        </Button>
                      </Link>
                    </Styled.ActionBtn>
                  </>
                ) : (
                  <>
                    {/* ------------------------------------------------- */}

                    <Styled.PageContent_Top>
                      <Styled.PageDetail_Title>
                        <p>Jewelry Detail</p>
                      </Styled.PageDetail_Title>
                      <Styled.PageDetail_Infor>
                        <Styled.ImageContainer>
                          <Styled.OuterThumb>
                            <Styled.ThumbnailImage>
                              {activeProduct.UsingImage?.map(
                                (image: any, index: any) => {
                                  const imageUrl = `http://localhost:3000/usingImage/${image.UsingImageID}`;
                                  return (
                                    <Styled.Item
                                      key={index}
                                      className={
                                        index === productSelectedThumb
                                          ? "selected"
                                          : ""
                                      }
                                      onClick={() =>
                                        changeProductImage(imageUrl, index)
                                      }
                                    >
                                      <img
                                        key={index}
                                        src={imageUrl}
                                        alt={`Jewelry Thumbnail ${index}`}
                                      />
                                    </Styled.Item>
                                  );
                                }
                              )}
                            </Styled.ThumbnailImage>
                          </Styled.OuterThumb>
                          <Styled.OuterMain>
                            <Styled.MainImage>
                              <img
                                id="mainImage"
                                src={productMainImage}
                                alt="Main"
                              />
                            </Styled.MainImage>
                          </Styled.OuterMain>
                        </Styled.ImageContainer>

                        <Styled.ProductContent>
                          <Styled.InforLine>
                            <p className="InforLine_Title">
                              Jewelry ID
                            </p>
                            <p>{activeProduct?.ProductID}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">
                              Jewelry Name
                            </p>
                            <p>{activeProduct?.Name}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Brand</p>
                            <p>{activeProduct?.Brand}</p>
                          </Styled.InforLine>
                          {activeProduct?.DiscountID ? (
                            <Styled.InforLine>
                              <p className="InforLine_Title">
                                Discount (%)
                              </p>
                              {allDiscounts.map((discount: any) => (
                                activeProduct?.DiscountID === discount.DiscountID ? (
                                  <p>{discount.Name}</p>
                                ) : (<p>Null</p>)))}
                            </Styled.InforLine>
                          ) : null}
                        </Styled.ProductContent>
                      </Styled.PageDetail_Infor>
                      <Styled.MaterialTable>
                        <Table
                          rowClassName={() => "editable-row"}
                          bordered
                          dataSource={dataMaterial}
                          columns={jewelryColumns}
                          pagination={{ pageSize: 4 }}
                        />
                      </Styled.MaterialTable>
                    </Styled.PageContent_Top>

                    {activeProduct.Diamond?.map(
                      (diamond: any) => (
                        <Styled.PageContent_Mid>
                          <Styled.PageDetail_Title>
                            <p>Diamond Detail</p>
                          </Styled.PageDetail_Title>
                          <Styled.PageDetail_Infor>
                            <Styled.ImageContainer>
                              <Styled.OuterThumb>
                                <Styled.ThumbnailImage>
                                  {diamond[0]?.usingImage?.map(
                                    (image: any, index: any) => {
                                      if (image.CertificateID == null) {
                                        const imageUrl = `http://localhost:3000/usingImage/${image.UsingImageID}`;
                                        return (
                                          <Styled.Item
                                            key={index}
                                            className={
                                              index === diamondSelectedThumb
                                                ? "selected"
                                                : ""
                                            }
                                            onClick={() =>
                                              changeDiamondImage(imageUrl, index)
                                            }
                                          >
                                            <img
                                              key={index}
                                              src={imageUrl}
                                              alt={`Diamond Thumbnail ${index}`}
                                            />
                                          </Styled.Item>
                                        );
                                      }
                                      return null;
                                    }
                                  )}
                                </Styled.ThumbnailImage>
                              </Styled.OuterThumb>
                              <Styled.OuterMain>
                                <Styled.MainImage>
                                  <img
                                    id="mainImage"
                                    src={diamondMainImage}
                                    alt="Main"
                                  />
                                  <img
                                    className="GIAExport"
                                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-logo.svg?alt=media&token=223f8b08-36c3-401b-ae25-a35f4c930631"
                                    alt="GIA Certificate"
                                    onClick={showModalGIA}
                                    style={{ cursor: "pointer" }}
                                  />
                                </Styled.MainImage>
                              </Styled.OuterMain>
                            </Styled.ImageContainer>

                            <Styled.ProductContent>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Diamond ID
                                </p>
                                <p>{diamond?.DiamondID}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Diamond Name
                                </p>
                                <p>{diamond?.Name}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Price</p>
                                <p>{diamond?.Price}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Discount Price</p>
                                <p>{diamond?.DiscountPrice}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Charge Rate (%)</p>
                                <p>{diamond?.ChargeRate}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Shape</p>
                                <p>{diamond?.Shape}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Color</p>
                                <p>{diamond?.Color}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Weight (Carat)</p>
                                <p>{diamond?.WeightCarat}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Polish</p>
                                <p>{diamond?.Polish}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Cut</p>
                                <p>{diamond?.Cut}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Length/Width Ratio</p>
                                <p>{diamond?.LengthOnWidthRatio}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Clarity</p>
                                <p>{diamond?.Clarity}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Symmetry</p>
                                <p>{diamond?.Symmetry}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Fluorescence</p>
                                <p>{diamond?.Fluorescence}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Depth %</p>
                                <p>{diamond?.depthPercentage}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Table %</p>
                                <p>{diamond?.tablePercentage}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Designer</p>
                                <p>{diamond?.Designer}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Cutter</p>
                                <p>{diamond?.Cutter}</p>
                              </Styled.InforLine>
                              <Styled.InforLine_Descrip>
                                <p className="InforLine_Title">
                                  Description
                                </p>
                                <p>{diamond?.description}</p>
                              </Styled.InforLine_Descrip>
                            </Styled.ProductContent>
                          </Styled.PageDetail_Infor>

                          <Modal
                            title="GIA Certificate"
                            visible={isModalVisibleGIA}
                            onOk={handleOkGIA}
                            onCancel={handleCancelGIA}
                            footer={null}
                          >
                            {diamond?.certificate?.[diamond.certificate.length - 1]?.usingImages?.[0] ? (
                              <img
                                src={getImage(
                                  diamond.certificate[diamond.certificate.length - 1].usingImages[0].UsingImageID
                                )}
                                alt="GIA Certificate"
                                style={{ width: "100%" }}
                              />
                            ) : (
                              <p>No GIA Certificate available</p>
                            )}
                          </Modal>
                        </Styled.PageContent_Mid>
                      )
                    )}

                    <Styled.PageContent_Bot>
                      <Styled.PageDetail_Title>
                        <p>Jewelry Setting Detail</p>
                      </Styled.PageDetail_Title>

                      <Styled.PageDetail_Infor>
                        <Styled.ImageContainer>
                          <Styled.OuterThumb>
                            <Styled.ThumbnailImage>
                              {activeProduct.JewelrySetting.UsingImage?.map(
                                (image: any, index: any) => {
                                  const imageUrl = `http://localhost:3000/usingImage/${image.UsingImageID}`;
                                  return (
                                    <Styled.Item
                                      key={index}
                                      className={
                                        index === settingSelectedThumb
                                          ? "selected"
                                          : ""
                                      }
                                      onClick={() =>
                                        changeSettingImage(imageUrl, index)
                                      }
                                    >
                                      <img
                                        key={index}
                                        src={imageUrl}
                                        alt={`Jewelry Setting Thumbnail ${index}`}
                                      />
                                    </Styled.Item>
                                  );
                                }
                              )}
                            </Styled.ThumbnailImage>
                          </Styled.OuterThumb>
                          <Styled.OuterMain>
                            <Styled.MainImage>
                              <img
                                id="mainImage"
                                src={settingMainImage}
                                alt="Main"
                              />
                            </Styled.MainImage>
                          </Styled.OuterMain>
                        </Styled.ImageContainer>

                        <Styled.ProductContent>
                          <Styled.InforLine>
                            <p className="InforLine_Title">
                              Jewelry Setting ID
                            </p>
                            <p>{activeProduct?.JewelrySetting?.JewelrySettingID}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">
                              Jewelry Setting Name
                            </p>
                            <p>
                              {activeProduct?.JewelrySetting?.Name}
                            </p>
                          </Styled.InforLine>
                          {activeProduct?.DiscountID ? (
                            <Styled.InforLine>
                              <p className="InforLine_Title">
                                Jewelry Setting Type
                              </p>
                              {allTypes.map((type: any) => (
                                activeProduct.JewelrySetting?.JewelryTypeID === type.JewelryTypeID ? (
                                  <p>{type.Name}</p>
                                ) : (<p>Null</p>)))}
                            </Styled.InforLine>
                          ) : (null)}
                          <Styled.InforLine>
                            <p className="InforLine_Title">
                              Update Time
                            </p>
                            <p>{activeProduct?.JewelrySetting?.UpdateTime}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">
                              Auxiliary Cost
                            </p>
                            <p>{activeProduct?.JewelrySetting?.AuxiliaryCost}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Product Cost</p>
                            <p>{activeProduct?.JewelrySetting?.ProductionCost}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">
                              Charge Rate (%)
                            </p>
                            <p>{activeProduct?.JewelrySetting?.chargeRate}%</p>
                          </Styled.InforLine>
                        </Styled.ProductContent>
                      </Styled.PageDetail_Infor>
                      <div>
                        <Table
                          rowClassName={() => "editable-row"}
                          bordered
                          dataSource={dataMaterial}
                          columns={columns}
                          pagination={{ pageSize: 4 }}
                        />
                      </div>
                    </Styled.PageContent_Bot>
                    <Styled.ActionBtn>
                      <Styled.ActionBtn_Left>
                        <Button
                          className="MainBtn"
                          onClick={() => setIsEditing(true)}
                        >
                          Edit
                        </Button>
                        <Link to="/admin/product/jewelry">
                          <Button style={{ marginLeft: "10px" }}>
                            Back
                          </Button>
                        </Link>
                      </Styled.ActionBtn_Left>
                      <Styled.ActionBtn_Right>
                        <Button
                          className="DeleteBtn"
                          onClick={showModal}
                        >
                          Delete
                        </Button>
                        <Modal
                          title="Confirm Deletion"
                          visible={isModalVisible}
                          onOk={handleDelete}
                          onCancel={handleCancel}
                        >
                          <p>Are you sure you want to delete this product?</p>
                        </Modal>
                      </Styled.ActionBtn_Right>
                    </Styled.ActionBtn>
                  </>
                )}
              </>
            ) : (
              <div>Jewelry not found.</div>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};
export default JewelryDetail;
