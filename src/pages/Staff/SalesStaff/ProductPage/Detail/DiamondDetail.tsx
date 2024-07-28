import * as Styled from "./ProductDetail.styled";
import { useState } from "react";
import { Button, Modal } from "antd";
import { Link, useParams } from "react-router-dom";
import { diamondData } from "../ProductData";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";

const DiamondDetail = () => {
  const { id } = useParams<{ id: string }>();
  const activeDiamond = diamondData.find((diamond) => diamond.diamondID === id);

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
            {activeDiamond ? (
              <>
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
                        <p>{activeDiamond.cut}</p>
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
                      <Styled.InforLine_Descrip>
                        <p className="InforLine_Title">Description</p>
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
                <Styled.ActionBtn>

                  <Link to="/sales-staff/product">
                    <Button style={{ marginLeft: "10px" }}>Back</Button>
                  </Link>
                </Styled.ActionBtn>
              </>
            ) : (
              <div>Diamond not found.</div>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default DiamondDetail;
