import * as Styled from "./SettingDetail.styled";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Table, Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  ringMaterialData,
  RingMaterialDataType,
  MaterialDataType,
  ringData,
  // ringSizeData,
  materialData,
  productData,
} from "../ProductData";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";

const calculateJewelrySettingPrice = (
  weight: number,
  pricePerGram: number,
  auxiliaryCost: number,
  productionCost: number
) => {
  return weight * pricePerGram + auxiliaryCost + productionCost;
};

const getMaterialDetails = (
  materialID: string,
  materialData: MaterialDataType[]
) => {
  return materialData.find((material) => material.materialID === materialID);
};

const PriceCalculation = (
  <div>
    (Weight * Price per Gram + Auxiliary Cost + Production Cost)* Charge Rate
  </div>
);

const JewelrySettingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const activeRingSetting = ringData.find(
    (setting) => setting.jewelrySettingID === id
  );
  const activeProduct = activeRingSetting
    ? productData.find(
        (jewelry) =>
          jewelry.jewelrySettingID === activeRingSetting.jewelrySettingID
      )
    : null;

  const [data, setData] = useState<RingMaterialDataType[]>([]);

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
  }> = ({
    value,
  }) => {
    return <td>{value}</td>;
  };

  const columns = [
    {
      title: "Material Name",
      dataIndex: "materialID",
      editable: true,
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableMaterialCell
          title="Material Name"
          value={record.materialID}
          // onChange={(value)}
        />
      ),
    },
    {
      title: "Size Value",
      dataIndex: "sizeID",
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
          {/* <Typography.Text type="secondary" style={{ marginLeft: 8 }}>
            ()
          </Typography.Text> */}
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
            activeRingSetting?.auxiliaryCost ?? 0,
            activeRingSetting?.productionCost ?? 0
          );
          return jewelrySettingPrice;
        }
        return 0;
      },
    },
  ];

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.PageAdminArea>
        <Sidebar />
        <Styled.AdminPage>
          <ProductMenu />
          <Styled.PageContent>
            {activeRingSetting ? (
              <>
                {activeProduct ? (
                  <>
                    <Styled.PageContent_Bot>
                      <Styled.PageDetail_Title>
                        <p>Jewelry Detail</p>
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
                            <p className="InforLine_Title">Jewelry ID</p>
                            <p>{activeProduct?.jewelryID}</p>
                          </Styled.InforLine>
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
                            <p className="InforLine_Title">Weight (gram)</p>
                            <p>{activeRingSetting?.weight} gram</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Update Time</p>
                            <p>{activeRingSetting?.updateTime}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Auxiliary Cost</p>
                            <p>{activeRingSetting?.auxiliaryCost}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Charge Rate (%)</p>
                            <p>{activeRingSetting?.chargeRate}%</p>
                          </Styled.InforLine>
                        </Styled.ProductContent>
                      </Styled.PageDetail_Infor>
                      <Styled.MaterialTable>
                        <Table
                          dataSource={data}
                          columns={columns}
                          rowClassName={() => "editable-row"}
                          bordered
                          pagination={false}
                        />
                      </Styled.MaterialTable>
                    </Styled.PageContent_Bot>
                    <Styled.ActionBtn>
                      <Styled.ActionBtn_Left>
                        <Link to="/sales-staff/product/jewelry-setting">
                          <Button style={{ marginLeft: "10px" }}>Back</Button>
                        </Link>
                      </Styled.ActionBtn_Left>
                    </Styled.ActionBtn>
                  </>
                ) : (
                  <p>No Jewelry found.</p>
                )}
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
