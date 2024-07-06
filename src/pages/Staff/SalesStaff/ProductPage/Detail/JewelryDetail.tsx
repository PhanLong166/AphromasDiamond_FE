import * as Styled from "./ProductDetail.styled";
import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Popover } from "antd";
import { Link, useParams } from "react-router-dom";
import {
  productData,
  diamondData,
  ringData,
  materialData,
  ringMaterialData,
  RingMaterialDataType,
  MaterialDataType,
  DiamondDataType,
  ringSizeData,
} from "../ProductData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { collectionData } from "../../MarketingPage/MarketingData";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";

const calculateJewelrySettingPrice = (
  weight: number,
  pricePerGram: number,
  auxiliaryCost: number,
  productionCost: number
): number => {
  return weight * pricePerGram + auxiliaryCost + productionCost;
};

const calculateJewelryPrice = (
  diamondPrice: number,
  jewelrySettingPrice: number
): number => {
  return jewelrySettingPrice + diamondPrice;
};

const getMaterialDetails = (
  materialID: string,
  materialData: MaterialDataType[]
) => {
  return materialData.find((material) => material.materialID === materialID);
};

const getDiamondDetails = (
  diamondID: string,
  diamondData: DiamondDataType[]
) => {
  return diamondData.find((diamond) => diamond.diamondID === diamondID);
};

const PriceCalculation = (
  <div>
    (Weight * Price per Gram + Auxiliary Cost + Production Cost)* Charge Rate
  </div>
);

const JewelryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const activeProduct = productData.find((jewelry) => jewelry.jewelryID === id);
  const activeDiamond = activeProduct
    ? diamondData.find(
        (diamond) => diamond.diamondID === activeProduct.diamondID
      )
    : null;
  const activeRingSetting = activeProduct
    ? ringData.find(
        (jewelrySetting) =>
          jewelrySetting.jewelrySettingID === activeProduct.jewelrySettingID
      )
    : null;

  const activeRingSettingMaterials = activeRingSetting
    ? ringMaterialData.filter(
        (ringMaterial) =>
          ringMaterial.jewelrySettingID === activeRingSetting.jewelrySettingID
      )
    : [];

  const activeCollection = activeProduct
    ? collectionData.find(
        (collection) => collection.collectionID === activeProduct.collectionID
      )
    : null;

  // GIA CERTIFICATE POPUP
  const [isModalGIA, setIsModalGIA] = useState(false);

  const showModalGIA = () => {
    setIsModalGIA(true);
  };

  const handleOkGIA = () => {
    setIsModalGIA(false);
  };

  const handleCancelGIA = () => {
    setIsModalGIA(false);
  };

  // JEWELRY MATERIAL TABLE
  const [data, setData] = useState<RingMaterialDataType[]>(
    activeRingSettingMaterials
  );

  useEffect(() => {
    const activeRingSettingMaterials = activeRingSetting
      ? ringMaterialData.filter(
          (material) =>
            material.jewelrySettingID === activeRingSetting.jewelrySettingID
        )
      : [];
    setData(activeRingSettingMaterials);
  }, [activeRingSetting]);

  const EditableMaterialCell: React.FC<{
    title: React.ReactNode;
    value: any;
  }> = ({ value }) => {
    return <td>{value}</td>;
  };

  const EditableSizeCell: React.FC<{
    title: React.ReactNode;
    value: any;
  }> = ({ value }) => {
    return <td>{value}</td>;
  };

  const EditableCell: React.FC<{
    title: React.ReactNode;
    value: any;
  }> = ({ value }) => {
    return <td>{value}</td>;
  };

  const jewelryColumns = [
    {
      title: "Material Name",
      dataIndex: "materialID",
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableMaterialCell title="Material Name" value={record.materialID} />
      ),
    },
    {
      title: "Size Value",
      dataIndex: "sizeID",
      render: (sizeID: string) => {
        const sizeDetail = ringSizeData.find((size) => size.sizeID === sizeID);
        return sizeDetail ? sizeDetail.sizeValue : 0;
      },
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
      dataIndex: "price",
      render: (_: unknown, record: RingMaterialDataType) => {
        const materialDetail = getMaterialDetails(
          record.materialID,
          materialData
        );
        if (materialDetail) {
          const pricePerGram = materialDetail.sellingPrice;
          const jewelrySettingPrice = calculateJewelrySettingPrice(
            record.amount,
            pricePerGram,
            activeRingSetting?.auxiliaryCost || 0,
            activeRingSetting?.productionCost || 0
          );
          return jewelrySettingPrice;
        }
        return 0;
      },
    },
    {
      title: (
        <>
          Jewelry Price
          <Popover
            content={PriceCalculation}
            title="Price Calculation"
            trigger="click"
          >
            <InfoCircleOutlined style={{ marginLeft: 8, fontSize: "12px" }} />
          </Popover>
        </>
      ),
      dataIndex: "jewelryPrice",
      render: (_: unknown, record: RingMaterialDataType) => {
        if (!activeProduct) {
          return 0;
        }
        const diamondDetail = getDiamondDetails(
          activeProduct.diamondID,
          diamondData
        );
        const materialDetail = getMaterialDetails(
          record.materialID,
          materialData
        );
        if (diamondDetail && materialDetail) {
          const diamondPrice = diamondDetail.price;
          const pricePerGram = materialDetail.sellingPrice;
          const jewelrySettingPrice = calculateJewelrySettingPrice(
            record.amount,
            pricePerGram,
            activeRingSetting?.auxiliaryCost || 0,
            activeRingSetting?.productionCost || 0
          );
          const jewelryPrice = calculateJewelryPrice(
            diamondPrice,
            jewelrySettingPrice
          );
          return jewelryPrice.toFixed(2); // format to 2 decimal places
        }
        return 0;
      },
    },
  ];

  const columns = [
    {
      title: "Material Name",
      dataIndex: "materialID",
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableMaterialCell title="Material Name" value={record.materialID} />
      ),
    },
    {
      title: "Size Value",
      dataIndex: "sizeID",
      editable: true,
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableSizeCell title="Size Value" value={record.sizeID} />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableCell title="Amount" value={record.amount} />
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
      dataIndex: "price",
      render: (_: unknown, record: RingMaterialDataType) => {
        const materialDetail = getMaterialDetails(
          record.materialID,
          materialData
        );
        if (materialDetail) {
          const pricePerGram = materialDetail.sellingPrice;
          const jewelrySettingPrice = calculateJewelrySettingPrice(
            record.amount,
            pricePerGram,
            activeRingSetting?.auxiliaryCost || 0,
            activeRingSetting?.productionCost || 0
          );
          return jewelrySettingPrice.toFixed(2);
        }
        return 0;
      },
    },
  ];

  const mergedColumns_Jewelry = jewelryColumns.map((col: any) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: RingMaterialDataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  const mergedColumns_Setting = columns.map((col: any) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: RingMaterialDataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.PageAdminArea>
        <Sidebar />
        <Styled.AdminPage>
          <ProductMenu />

          <Styled.PageContent>
            {activeProduct ? (
              <>
                {activeDiamond ? (
                  <>
                    {activeRingSetting ? (
                      <>
                        <Styled.PageContent_Top>
                          <Styled.PageDetail_Title>
                            <p>Jewelry Detail</p>
                          </Styled.PageDetail_Title>
                          <Styled.PageDetail_Infor>
                            <Styled.ProductImg>
                              <img
                                src={activeProduct.jewelryImg}
                                alt={activeProduct.jewelryName}
                              />
                            </Styled.ProductImg>
                            <Styled.ProductContent>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Jewelry ID</p>
                                <p>{activeProduct?.jewelryID}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Jewelry Name</p>
                                <p>{activeProduct?.jewelryName}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Type</p>
                                <p>{activeProduct?.type}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  From Collection
                                </p>
                                <p>{activeCollection?.collectionName}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Discount (%)</p>
                                <p>15%</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Diamond Price</p>
                                <p>{activeDiamond?.price}</p>
                              </Styled.InforLine>
                            </Styled.ProductContent>
                          </Styled.PageDetail_Infor>
                          <Styled.MaterialTable>
                            <Table
                              rowClassName={() => "editable-row"}
                              bordered
                              dataSource={data}
                              columns={mergedColumns_Jewelry}
                              pagination={{ pageSize: 4 }}
                            />
                          </Styled.MaterialTable>
                        </Styled.PageContent_Top>

                        <Styled.PageContent_Mid>
                          <Styled.PageDetail_Title>
                            <p>Diamond Detail</p>
                          </Styled.PageDetail_Title>
                          <Styled.PageDetail_Infor>
                            <Styled.ProductImg>
                              <img
                                src={activeDiamond.diamondImg}
                                alt={activeDiamond.diamondName}
                              />
                              <img
                                className="GIAExport"
                                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-logo.svg?alt=media&token=223f8b08-36c3-401b-ae25-a35f4c930631"
                                alt="GIA Certificate"
                                onClick={showModalGIA}
                                style={{ cursor: "pointer" }}
                              />
                            </Styled.ProductImg>
                            <Styled.ProductContent>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Diamond ID</p>
                                <p>{activeDiamond?.diamondID}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Diamond Name</p>
                                <p>{activeDiamond?.diamondName}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Price</p>
                                <p>{activeDiamond?.price}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Shape</p>
                                <p>{activeDiamond?.shape}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Color</p>
                                <p>{activeDiamond?.color}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Polish</p>
                                <p>{activeDiamond?.polish}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Cut</p>
                                <p>{activeDiamond?.price}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Length/Width Ratio
                                </p>
                                <p>{activeDiamond?.lwRatio}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Clarity</p>
                                <p>{activeDiamond?.clarity}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Symmetry</p>
                                <p>{activeDiamond?.symmetry}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Carat Weight</p>
                                <p>{activeDiamond?.caratWeight}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Table %</p>
                                <p>{activeDiamond?.tablePercentage}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Depth %</p>
                                <p>{activeDiamond?.depthPercentage}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Fluorescence</p>
                                <p>{activeDiamond?.fluorescence}</p>
                              </Styled.InforLine>
                              <Styled.InforLine_Descrip>
                                <p className="InforLine_Title">Description</p>
                                <p>{activeDiamond?.description}</p>
                              </Styled.InforLine_Descrip>
                            </Styled.ProductContent>
                          </Styled.PageDetail_Infor>

                          <Modal
                            title="GIA Certificate"
                            visible={isModalGIA}
                            onOk={handleOkGIA}
                            onCancel={handleCancelGIA}
                            footer={null}
                          >
                            <img
                              src={activeDiamond?.giaCerti}
                              alt="GIA Certificate"
                              style={{ width: "100%" }}
                            />
                          </Modal>
                        </Styled.PageContent_Mid>

                        <Styled.PageContent_Bot>
                          <Styled.PageDetail_Title>
                            <p>Jewelry Setting Detail</p>
                          </Styled.PageDetail_Title>

                          <Styled.PageDetail_Infor>
                            <Styled.ProductImg>
                              <img
                                src={activeRingSetting.jewelrySettingImg}
                                alt={activeRingSetting.jewelrySettingName}
                              />
                            </Styled.ProductImg>
                            <Styled.ProductContent>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Jewelry Setting ID
                                </p>
                                <p>{activeRingSetting?.jewelrySettingID}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Jewelry Setting Name
                                </p>
                                <p>{activeRingSetting?.jewelrySettingName}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Jewelry Setting Type
                                </p>
                                <p>{activeRingSetting?.type}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Auxiliary Cost
                                </p>
                                <p>{activeRingSetting?.auxiliaryCost}</p>
                              </Styled.InforLine>
                            </Styled.ProductContent>
                          </Styled.PageDetail_Infor>
                          <div>
                            <Table
                              rowClassName={() => "editable-row"}
                              bordered
                              dataSource={data}
                              columns={mergedColumns_Setting}
                              pagination={{ pageSize: 4 }}
                            />
                          </div>
                        </Styled.PageContent_Bot>
                        <Styled.ActionBtn>
                          <Styled.ActionBtn_Left>
                            <Link to="/sales-staff/product/jewelry">
                              <Button style={{ marginLeft: "10px" }}>
                                Back
                              </Button>
                            </Link>
                          </Styled.ActionBtn_Left>
                        </Styled.ActionBtn>
                      </>
                    ) : (
                      <div>Jewelry setting not found.</div>
                    )}
                  </>
                ) : (
                  <div>Diamond not found.</div>
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
