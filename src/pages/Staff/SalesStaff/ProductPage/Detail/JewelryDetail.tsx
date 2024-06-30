import * as Styled from "./ProductDetail.styled";
import { useState } from "react";
import { Button, Modal } from "antd";
// import OrderMenu from "../../../components/Admin/OrderMenu/OrderMenu";
import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import {
  productData,
  diamondData,
  ringData,
  materialData,
} from "../ProductData";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";

// const { Option } = Select;

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

  const activeMaterial = activeRingSetting
    ? materialData.find(
        (material) => material.materialName === activeRingSetting.material
      )
    : null;

  // GIA CERTIFICATE POPUP
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



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
                        {activeMaterial ? (
                          <>
                            {/* ------------------------------------------------- */}
                              <Styled.PageContent_Top>
                              <Styled.PageDetail_Title>
                                <p>Product Detail</p>
                              </Styled.PageDetail_Title>
                              <Styled.PageDetail_Infor>
                                <Styled.ProductImg>
                                  <img
                                    src={activeProduct.jewelryImg}
                                    alt={activeProduct.jewelryName}
                                  />
                                </Styled.ProductImg>
                                <Styled.ProductContent>
                                  <Styled.SignaInfor>
                                    <Styled.InforLine>
                                      <p className="InforLine_Title">
                                        Jewelry ID
                                      </p>
                                      <p>{activeProduct.jewelryID}</p>
                                    </Styled.InforLine>
                                    <Styled.InforLine>
                                      <p className="InforLine_Title">
                                        Jewelry Name
                                      </p>
                                      <p>{activeProduct.jewelryName}</p>
                                    </Styled.InforLine>
                                    <Styled.InforLine>
                                      <p className="InforLine_Title">Type</p>
                                      <p>{activeProduct.type}</p>
                                    </Styled.InforLine>
                                    <Styled.InforLine>
                                      <p className="InforLine_Title">
                                        Quantity
                                      </p>
                                      <p>{activeProduct.quantity}</p>
                                    </Styled.InforLine>
                                    
                                    
                                  </Styled.SignaInfor>

                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Diamond Price
                                    </p>
                                    <p>{activeDiamond.price}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Price
                                    </p>
                                    <p>{activeProduct.price}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Processing Fee
                                    </p>
                                    <p>{activeRingSetting.processingFee}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Markup Percentage
                                    </p>
                                    <p>{activeProduct.markupPercentage}%</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Selling Price
                                    </p>
                                    <p>
                                      {activeProduct.price && activeProduct.markupPercentage ? 
                                          (activeProduct.price +
                                            activeRingSetting.price +
                                            activeRingSetting.processingFee) *
                                            (1 +
                                              activeProduct.markupPercentage / 100)
                                          : 0}
                                    </p>
                                  </Styled.InforLine>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>
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
                                    onClick={showModal}
                                    style={{ cursor: "pointer" }}
                                  />
                                </Styled.ProductImg>
                                <Styled.ProductContent>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Diamond ID
                                    </p>
                                    <p>{activeDiamond.diamondID}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Diamond Name
                                    </p>
                                    <p>{activeDiamond.diamondName}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Price</p>
                                    <p>{activeDiamond.price}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Shape</p>
                                    <p>{activeDiamond.shape}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Color</p>
                                    <p>{activeDiamond.color}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Polish</p>
                                    <p>{activeDiamond.polish}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Cut</p>
                                    <p>{activeDiamond.price}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Length/Width Ratio
                                    </p>
                                    <p>{activeDiamond.lwRatio}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Clarity</p>
                                    <p>{activeDiamond.clarity}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Symmetry</p>
                                    <p>{activeDiamond.symmetry}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Carat Weight
                                    </p>
                                    <p>{activeDiamond.caratWeight}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Table %</p>
                                    <p>{activeDiamond.tablePercentage}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Depth %</p>
                                    <p>{activeDiamond.depthPercentage}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Fluorescence
                                    </p>
                                    <p>{activeDiamond.fluorescence}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine_Descrip>
                                    <p className="InforLine_Title">
                                      Description
                                    </p>
                                    <p>{activeDiamond.description}</p>
                                  </Styled.InforLine_Descrip>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>

                              <Modal
                                title="GIA Certificate"
                                visible={isModalVisible}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                footer={null}
                              >
                                <img
                                  src={activeDiamond.giaCerti}
                                  alt="GIA Certificate"
                                  style={{ width: "100%" }}
                                />
                              </Modal>
                            </Styled.PageContent_Mid>

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
                                    <p className="InforLine_Title">
                                      Jewelry Setting ID
                                    </p>
                                    <p>{activeRingSetting.jewelrySettingID}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Name
                                    </p>
                                    <p>
                                      {activeRingSetting.jewelrySettingName}
                                    </p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Type
                                    </p>
                                    <p>{activeRingSetting.type}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Material
                                    </p>
                                    <p>{activeRingSetting.width}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Auxiliary Cost
                                    </p>
                                    <p>{activeRingSetting.auxiliaryCost}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Price
                                    </p>
                                    <p>
                                      {activeMaterial.sellingPrice *
                                        activeRingSetting.width +
                                        activeRingSetting.auxiliaryCost}
                                    </p>
                                  </Styled.InforLine>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>
                            </Styled.PageContent_Bot>
                            <Styled.ActionBtn>
                              <Link to="/sales-staff/product/jewelry">
                                <Button style={{ marginLeft: "10px" }}>
                                  Back
                                </Button>
                              </Link>
                            </Styled.ActionBtn>
                          </>
                        ) : (
                          <div>Material not found.</div>
                        )}
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
