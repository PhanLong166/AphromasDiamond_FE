import * as Styled from "./ProductPromotionDetail.styled";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import MarketingMenu from "@/components/Staff/SalesStaff/MarketingMenu/MarketingMenu";
import { promotionData } from "../MarketingData";
import { productData, ProductDataType } from "../../ProductPage/ProductData";
import { Button, TableColumnsType, Table } from "antd";

const ProductPromotionDetail = () => {
  const { id } = useParams<{ id: string }>();

  const activePromotion = promotionData.find(
    (promotion) => promotion.promotionID === id
  );

  const productList = productData.filter(
    (product) => product.promotionID === id
  );

  const [data] = useState<ProductDataType[]>(productList);

  const columns: TableColumnsType<ProductDataType> = [
    {
      title: "Jewelry ID",
      dataIndex: "jewelryID",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.jewelryID.localeCompare(b.jewelryID),
    },
    {
      title: "Product Image",
      dataIndex: "jewelryImg",
      render: (_, record) => (
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={record.jewelryImg}
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
  ];

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.PageAdminArea>
        <Sidebar />
        <Styled.AdminPage>
          <MarketingMenu />

          <Styled.PageContent>
            {activePromotion ? (
              <>
                <Styled.PageContent_Bot>
                  <Styled.PageDetail_Title>
                    <p>Product Promotion Detail</p>
                  </Styled.PageDetail_Title>
                  <Styled.PageDetail_Infor>
                    <Styled.InforLine>
                      <p className="InforLine_Title">Promotion ID</p>
                      <p>{activePromotion?.promotionID}</p>
                    </Styled.InforLine>
                    <Styled.InforLine>
                      <p className="InforLine_Title">Promotion Name</p>
                      <p>{activePromotion?.promotionName}</p>
                    </Styled.InforLine>
                    <Styled.InforLine>
                      <p className="InforLine_Title">% discount</p>
                      <p>{activePromotion?.discountPercent}%</p>
                    </Styled.InforLine>
                    <Styled.InforLine>
                      <p className="InforLine_Title">Start Date</p>
                      <p>{activePromotion?.startDate}</p>
                    </Styled.InforLine>
                    <Styled.InforLine>
                      <p className="InforLine_Title">End Date</p>
                      <p>{activePromotion?.endDate}</p>
                    </Styled.InforLine>
                    <Styled.InforLine_Descrip>
                      <p className="InforLine_Title">Description</p>
                      <p>{activePromotion?.description}</p>
                    </Styled.InforLine_Descrip>
                  </Styled.PageDetail_Infor>
                  <Styled.MaterialTable>
                    <Table
                      dataSource={data}
                      columns={columns}
                      rowClassName={() => "editable-row"}
                      bordered
                      pagination={{ pageSize: 4 }} // Add pagination here
                    />
                  </Styled.MaterialTable>
                </Styled.PageContent_Bot>
                <Styled.ActionBtn>
                  <Styled.ActionBtn_Left>
                    <Link to="/sales-staff/marketing/discount">
                      <Button style={{ marginLeft: "10px" }}>Back</Button>
                    </Link>
                  </Styled.ActionBtn_Left>
                </Styled.ActionBtn>
              </>
            ) : (
              <p>No Promotion found.</p>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default ProductPromotionDetail;
