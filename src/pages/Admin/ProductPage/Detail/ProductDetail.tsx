import * as Styled from "./ProductDetail.styled";
import { useState } from "react";
import { Button, Modal, Select, Tag } from "antd";
// import OrderMenu from "../../../components/Admin/OrderMenu/OrderMenu";
import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import { productData, diamondData, ringData } from "../ProductData";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";

// const { Option } = Select;

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const activeProduct = productData.find((product) => product.productID === id);
  const activeDiamond = activeProduct
    ? diamondData.find(
        (diamond) => diamond.diamondID === activeProduct.diamondID
      )
    : null;
  const activeRingSetting = activeProduct
    ? ringData.find(
        (ring) => ring.ringSettingID === activeProduct.ringSettingID
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
                <Styled.PageContent_Top>
                  <Styled.PageDetail_Title>
                    <p>Product Detail</p>
                  </Styled.PageDetail_Title>
                  <Styled.PageDetail_Infor>
                    <Styled.ProductImg>
                      <img
                        src={activeProduct.productImg}
                        alt={activeProduct.productName}
                      />
                    </Styled.ProductImg>
                    <Styled.ProductContent>
                      <Styled.InforLine>
                        <p className="InforLine_Title">Product ID</p>
                        <p>{activeProduct.productID}</p>
                      </Styled.InforLine>
                      <Styled.InforLine>
                        <p className="InforLine_Title">Product Name</p>
                        <p>{activeProduct.productName}</p>
                      </Styled.InforLine>
                      <Styled.InforLine>
                        <p className="InforLine_Title">Type</p>
                        <p>{activeProduct.type}</p>
                      </Styled.InforLine>
                      <Styled.InforLine>
                        <p className="InforLine_Title">Quantity</p>
                        <p>{activeProduct.quantity}</p>
                      </Styled.InforLine>
                      <Styled.InforLine>
                        <p className="InforLine_Title">Cost Price</p>
                        <p>{activeProduct.price}</p>
                      </Styled.InforLine>
                      <Styled.InforLine>
                        <p className="InforLine_Title">Markup Percentage</p>
                        <p>{activeProduct.markupPercentage}</p>
                      </Styled.InforLine>
                      <Styled.InforLine>
                        <p className="InforLine_Title">Selling Price</p>
                        <p>
                          {activeProduct.price *
                            (1 + activeProduct.markupPercentage / 100)}
                        </p>
                      </Styled.InforLine>
                    </Styled.ProductContent>
                  </Styled.PageDetail_Infor>
                </Styled.PageContent_Top>

                <Styled.PageContent_Mid>
                  <Styled.PageDetail_Title>
                    <p>Diamond Detail</p>
                  </Styled.PageDetail_Title>
                  {activeDiamond ? (
                    <>
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
                            <p className="InforLine_Title">Diamond ID</p>
                            <p>{activeDiamond.diamondID}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Diamond Name</p>
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
                            <p className="InforLine_Title">Length/Width Ratio</p>
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
                            <p className="InforLine_Title">Carat Weight</p>
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
                            <p className="InforLine_Title">Fluorescence</p>
                            <p>{activeDiamond.fluorescence}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Description</p>
                            <p>{activeDiamond.description}</p>
                          </Styled.InforLine>
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
                    </>
                  ) : (
                    <div>Diamond not found.</div>
                  )}
                </Styled.PageContent_Mid>

                <Styled.PageContent_Bot>
                  <Styled.PageDetail_Title>
                    <p>Ring Detail</p>
                  </Styled.PageDetail_Title>

                  {activeRingSetting ? (
                    <Styled.PageDetail_Infor>
                      <Styled.ProductImg>
                        <img
                          src={activeRingSetting.ringSettingImg}
                          alt={activeRingSetting.ringSettingName}
                        />
                      </Styled.ProductImg>
                      <Styled.ProductContent>
                        <Styled.InforLine>
                          <p className="InforLine_Title">Ring Setting ID</p>
                          <p>{activeRingSetting.ringSettingID}</p>
                        </Styled.InforLine>
                        <Styled.InforLine>
                          <p className="InforLine_Title">Ring Setting Name</p>
                          <p>{activeRingSetting.ringSettingName}</p>
                        </Styled.InforLine>
                      </Styled.ProductContent>
                    </Styled.PageDetail_Infor>
                  ) : (
                    <div>Ring setting not found.</div>
                  )}
                </Styled.PageContent_Bot>
                <Styled.ActionBtn>
                  <Button className="MainBtn">Save</Button>

                  <Link to="/admin/order">
                    <Button style={{ marginLeft: "10px" }}>Back</Button>
                  </Link>
                </Styled.ActionBtn>
              </>
            ) : (
              <div>Order not found.</div>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default ProductDetail;
