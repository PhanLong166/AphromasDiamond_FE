import * as Styled from "./SettingDetail.styled";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  InputNumber,
} from "antd";
import {
  SaveOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import {
  getSettingDetails,
  showAllSetting,
  updateSetting,
} from "@/services/jewelrySettingAPI";
import { showAllMaterial } from "@/services/materialAPI";
import { getImage } from "@/services/imageAPI";
import { deleteSettingVariant } from "@/services/settingVariantAPI";
import TypedInputNumber from "antd/es/input-number";

const PriceCalculation = (
  <div>
    (Weight * Price per Gram + Auxiliary Cost + Production Cost)* Charge Rate
  </div>
);

const JewelrySettingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeJewelrySetting, setActiveJewelrySetting] = useState<any | null>(
    null
  );
  const [settingMainImage, setSettingMainImage] = useState("");
  const [settingSelectedThumb, setSettingSelectedThumb] = useState(0);
  const [api, contextHolder] = notification.useNotification();
  const [selectedMaterial] = useState<any>();
  const [selectedSize] = useState<any>("");
  const [dataMaterial, setDataMaterial] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedSetting, setEditedSetting] = useState<any | null>(null);
  const [allMaterials, setAllMaterials] = useState<any[]>([]);

  type NotificationType = "success" | "info" | "warning" | "error";

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description:
        type === "success" ? `${method} jewelry setting successfully` : error,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSettingDetails(Number(id));
        const responseSettingList = await showAllSetting();
        const responseMaterial = await showAllMaterial();

        const jewelrySettingData = response.data.data;
        const { data: settingListData } = responseSettingList.data;
        const { data: materialsData } = responseMaterial.data;

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

        setAllMaterials(formattedMaterials);

        if (!jewelrySettingData) {
          throw new Error("Received null or undefined jewelrySettingData");
        }

        const selectedSettingImages = formattedSettingList.find(
          (setting: any) =>
            setting.jewelrySettingID === jewelrySettingData.JewelrySettingID
        )?.images;

        setActiveJewelrySetting({ ...jewelrySettingData, images: selectedSettingImages });
        setEditedSetting({ ...jewelrySettingData, images: selectedSettingImages });
        setDataMaterial(jewelrySettingData.JewelrySettingVariant);

        if (selectedSettingImages && selectedSettingImages.length > 0) {
          setSettingMainImage(selectedSettingImages[0].url);
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
    console.log("Active Jewelry Setting:", activeJewelrySetting);
  }, [activeJewelrySetting]);


  // EDIT
  const handleFieldChange = (fieldName: keyof any, value: any) => {
    setEditedSetting({
      ...editedSetting!,
      [fieldName]: value,
    });
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

  const handleAdd = () => {
    const newMaterialID = selectedMaterial || "";
    const newWeight = 1;
    const newPricePerGram = allMaterials.find(material => material.materialID === newMaterialID)?.sellPrice || 1;
    const newJewelrySettingPrice = newWeight * newPricePerGram;

    const newData: any = {
      key: String(dataMaterial.length + 1),
      JewelrySettingID: activeJewelrySetting?.JewelrySettingID || "",
      JewelrySettingVariantID: "",
      MaterialJewelryID: newMaterialID,
      Weight: newWeight,
      SizeID: selectedSize || "defaultSize",
      Quantity: 1,
      Price: newJewelrySettingPrice,
      materialJewelry: allMaterials.find(material => material.materialID === newMaterialID) || {},
    };

    setDataMaterial([...dataMaterial, newData]);
  };

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
      render: (text: string, record: any) =>
        isEditing ? (
          <TypedInputNumber
            value={record.Weight}
            onChange={(value) => handleSaveVariant({ ...record, Weight: value })}
          />
        ) : (
          record.materialJewelry?.Weight || text
        ),
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantity",
      render: (text: string, record: any) =>
        isEditing ? (
          <TypedInputNumber
            value={record.Quantity}
            onChange={(value) => handleSaveVariant({ ...record, Quantity: value })}
          />
        ) : (
          record.materialJewelry?.Quantity || text
        ),
    },
    {
      title: (
        <>
          Jewelry Setting Price
          <Popover
            content={PriceCalculation}
            title="Price Calculation"
            trigger="click"
          >
            <InfoCircleOutlined style={{ marginLeft: 8, fontSize: "12px" }} />
          </Popover>
        </>
      ),
      dataIndex: "Price",
      key: "Price",
      // render: (record: any) => (
      //   <EditableCell
      //     editable={true}
      //     value={record.Price}
      //     onChange={(value) => handleSaveVariant({ ...record, Price: value })}
      //     isEditing={isEditing}
      //   />
      // ),
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

  // UPDATE JEWELRY SETTING
  const handleSave = async () => {
    try {
      const response = await updateSetting(activeJewelrySetting.JewelrySettingID, {
        ...editedSetting,
        JewelrySettingVariant: dataMaterial.map((variant: any) => ({
          JewelrySettingVariantID: variant.JewelrySettingVariantID,
          MaterialJewelryID: variant.MaterialJewelryID,
          Weight: variant.Weight,
          Quantity: variant.Quantity,
          Price: variant.Price,
        })),
      });
      if (response.status === 200) {
        openNotification("success", "Update", "");
        setIsEditing(false);
        setActiveJewelrySetting(response);
      } else {
        openNotification("error", "Update", "Failed to update Setting.");
      }
    } catch (error: any) {
      console.error("Failed to update setting:", error);
      openNotification("error", "Update", error.message);
    }
  };

  // DELETE JEWELRY SETTING
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleDelete = async () => {
    try {
      const response = await updateSetting(activeJewelrySetting.JewelrySettingID, {
        IsActive: false,
      });
      console.log("Delete Response:", response.data);
      if (response.status === 200) {
        openNotification("success", "Delete", "");
        setIsModalVisible(false);
        navigate("/admin/product/jewelry-setting");
      } else {
        openNotification("error", "Delete", "Failed to delete Setting.");
      }
    } catch (error: any) {
      console.error("Failed to delete Setting:", error);
      openNotification("error", "Delete", error.message);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // IMAGE STATES
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
            {activeJewelrySetting ? (
              <>
                {/* {activeProduct ? (
                  <> */}
                {isEditing ? (
                  <>
                    <Form
                      className="AdPageContent_Content"
                      layout="vertical"
                      initialValues={{
                        jewelrySettingName: editedSetting?.Name,
                        productionCost: editedSetting?.ProductionCost,
                      }}
                      onFinish={handleSave}
                    >
                      <>
                        <Styled.PageContent_Bot>
                          <Styled.PageDetail_Title>
                            <p>Jewelry Setting Detail</p>
                          </Styled.PageDetail_Title>

                          <Styled.PageDetail_Infor>
                            <Styled.ImageContainer>
                              <Styled.OuterThumb>
                                <Styled.ThumbnailImage>
                                  {activeJewelrySetting.UsingImage?.map(
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
                              <Form.Item
                                label="Jewelry Setting ID"
                                className="InforLine_Title"
                              >
                                <Input
                                  value={editedSetting?.JewelrySettingID}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "JewelrySettingID",
                                      e.target.value
                                    )
                                  }
                                  disabled
                                />
                              </Form.Item>
                              <Form.Item
                                label="Jewelry Setting Name"
                                className="InforLine_Title"
                                name="jewelrySettingName"
                                rules={[
                                  {
                                    required: true,
                                    message: "Jewelry Setting Name is required.",
                                  },
                                ]}
                              >
                                <Input
                                  value={editedSetting?.Name}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "Name",
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Product Cost"
                                className="InforLine_Title"
                                name="productionCost"
                                rules={[
                                  {
                                    required: true,
                                    message: "Product Cost is required.",
                                  },
                                ]}
                              >
                                <InputNumber
                                  value={editedSetting?.ProductionCost}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "ProductionCost",
                                      e.target.value
                                    )
                                  }
                                  style={{ width: "100%" }}
                                />
                              </Form.Item>
                            </Styled.ProductContent>
                          </Styled.PageDetail_Infor>
                          <Styled.MaterialTable>
                            <Button
                              onClick={handleAdd}
                              type="primary"
                              style={{ marginBottom: 16 }}
                            >
                              Add a row
                            </Button>
                            <Table
                              dataSource={dataMaterial}
                              columns={columns}
                              rowClassName={() => "editable-row"}
                              bordered
                              pagination={false}
                            />
                          </Styled.MaterialTable>
                        </Styled.PageContent_Bot>
                        <Styled.ActionBtn>
                          <Button
                            className="MainBtn"
                            onClick={() => setIsEditing(false)}
                          >
                            <SaveOutlined />
                            Save Change
                          </Button>

                          <Link to="/admin/product/jewelry">
                            <Button style={{ marginLeft: "10px" }}>Back</Button>
                          </Link>
                        </Styled.ActionBtn>
                      </>
                    </Form>
                  </>
                ) : (
                  <>
                    <Styled.PageContent_Bot>
                      <Styled.PageDetail_Title>
                        <p>Jewelry Detail</p>
                      </Styled.PageDetail_Title>
                      <Styled.PageDetail_Infor>
                        <Styled.ImageContainer>
                          <Styled.OuterThumb>
                            <Styled.ThumbnailImage>
                              {activeJewelrySetting.UsingImage?.map(
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
                                        alt={`Diamond Thumbnail ${index}`}
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
                            <p>{activeJewelrySetting?.JewelrySettingID}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">
                              Jewelry Setting Name
                            </p>
                            <p>{activeJewelrySetting?.Name}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Product Cost</p>
                            <p>{activeJewelrySetting?.ProductionCost}</p>
                          </Styled.InforLine>
                        </Styled.ProductContent>
                      </Styled.PageDetail_Infor>
                      <Styled.MaterialTable>
                        <Table
                          dataSource={dataMaterial}
                          columns={columns}
                          rowClassName={() => "editable-row"}
                          bordered
                          pagination={false}
                        />
                      </Styled.MaterialTable>
                    </Styled.PageContent_Bot>
                    <Styled.ActionBtn>
                      <Styled.ActionBtn_Left>
                        <Button
                          onClick={() => setIsEditing(true)}
                          type="primary"
                          style={{ marginBottom: 16 }}
                        >
                          Edit
                        </Button>
                        <Link to="/admin/product/jewelry-setting">
                          <Button style={{ marginLeft: "10px" }}>Back</Button>
                        </Link>
                      </Styled.ActionBtn_Left>
                      <Styled.ActionBtn_Right>
                        <Button className="DeleteBtn" onClick={showModal}>
                          Delete
                        </Button>
                        <Modal
                          title="Confirm Deletion"
                          visible={isModalVisible}
                          onOk={handleDelete}
                          onCancel={handleCancel}
                        ></Modal>
                      </Styled.ActionBtn_Right>
                    </Styled.ActionBtn>
                  </>
                )}
                {/* </>
                ) : (
                  <p>No Jewelry found.</p>
                )} */}
              </>
            ) : (
              <p>No Jewelry Setting found.</p>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default JewelrySettingDetail;
