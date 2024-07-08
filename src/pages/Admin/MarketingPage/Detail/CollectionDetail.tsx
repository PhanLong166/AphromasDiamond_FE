import * as Styled from "./CollectionDetail.styled";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import MarketingMenu from "@/components/Admin/MarketingMenu/MarketingMenu";
import { collectionData, CollectionDataType } from "../MarketingData";
import { productData, ProductDataType } from "../../ProductPage/ProductData";
import {
  Button,
  Input,
  Form,
  Select,
  TableColumnsType,
  Popconfirm,
  Table,
  Modal,
} from "antd";
import { DeleteOutlined, SaveOutlined } from "@ant-design/icons";

const CollectionDetail = () => {
  const { id } = useParams<{ id: string }>();

  const activePromotion = collectionData.find(
    (collection) => collection.collectionID === id
  );

  const productList = productData.filter(
    (product) => product.collectionID === id
  );

  // EDIT
  const [isEditing, setIsEditing] = useState(false);
  const [editedCollection, setEditedCollection] = useState(activePromotion);
  const [data, setData] = useState<ProductDataType[]>(productList);
  const [availableProducts, setAvailableProducts] = useState<ProductDataType[]>(
    productData.filter((product) => product.collectionID !== id)
  );
  const [selectedProductID, setSelectedProductID] = useState<string | null>(null);


  useEffect(() => {
    if (activePromotion) {
        setEditedCollection(activePromotion);
      setData(productList);
      setAvailableProducts(
        productData.filter((product) => product.collectionID !== id)
      );
    }
  }, [activePromotion, id]);

  const handleFieldChange = (
    fieldName: keyof CollectionDataType,
    value: any
  ) => {
    setEditedCollection({
      ...editedCollection!,
      [fieldName]: value,
    });
  };

  const handleSave = () => {
    // Implement save logic here
    setIsEditing(false);
  };

  const handleDelete = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const handleAddProduct = () => {
    if (selectedProductID) {
      const productToAdd = productData.find(
        (product) => product.jewelryID === selectedProductID
      );
      if (productToAdd) {
        setData([...data, productToAdd]);
        setAvailableProducts(
          availableProducts.filter((product) => product.jewelryID !== selectedProductID)
        );
        setSelectedProductID(null); // Reset selected product after adding
      }
    }
  };

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
            src={record.jewelryImg[0]}
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
      title: "Operation",
      dataIndex: "operation",
      render: (_: unknown, record: ProductDataType) =>
        data.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        ) : null,
    },
  ];

  // DELETE PRODUCT
  const [isModalVisible, setIsModalVisible] = useState(false);


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
                {isEditing ? (
                  <>
                    <Styled.PageContent_Bot>
                      <Styled.PageDetail_Title>
                        <p>Collection Detail</p>
                      </Styled.PageDetail_Title>
                      <Styled.PageDetail_Infor>
                        <Form.Item
                          label="Collection ID"
                          className="InforLine_Title-Edit"
                        >
                          <Input
                            value={editedCollection?.collectionID}
                            onChange={(e) =>
                              handleFieldChange("collectionID", e.target.value)
                            }
                            disabled
                          />
                        </Form.Item>
                        <Form.Item
                          label="Promotion Name"
                          className="InforLine_Title-Edit"
                        >
                          <Input
                            value={editedCollection?.collectionName}
                            onChange={(e) =>
                              handleFieldChange("collectionName", e.target.value)
                            }
                          />
                        </Form.Item>
                        <Form.Item
                          label="Debut Date"
                          className="InforLine_Title-Edit"
                        >
                          <Input
                            value={editedCollection?.debutDate}
                            onChange={(e) =>
                              handleFieldChange("debutDate", e.target.value)
                            }
                          />
                        </Form.Item>
                        <Form.Item
                          label="Description"
                          className="InforLine_Title-Edit"
                        >
                          <Input
                            value={editedCollection?.description}
                            onChange={(e) =>
                              handleFieldChange("description", e.target.value)
                            }
                          />
                        </Form.Item>
                      </Styled.PageDetail_Infor>
                      <Styled.MaterialTable>
                        <Select
                          placeholder="Select product to add"
                          style={{ width: "80%" }}
                          onChange={(value) => setSelectedProductID(value)}
                          value={selectedProductID}
                        >
                          {availableProducts.map((product) => (
                            <Select.Option
                              key={product.jewelryID}
                              value={product.jewelryID}
                            >
                              {product.jewelryName}
                            </Select.Option>
                          ))}
                        </Select>
                        <Button
                          type="primary"
                          style={{ marginBottom: 16, marginLeft: 10 }}
                          onClick={handleAddProduct}
                        >
                          Add Product
                        </Button>
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
                      <Button className="MainBtn" onClick={handleSave}>
                        <SaveOutlined />
                        Save Change
                      </Button>
                      <Link to="/admin/marketing">
                        <Button style={{ marginLeft: "10px" }}>Back</Button>
                      </Link>
                    </Styled.ActionBtn>
                  </>
                ) : (
                  <>
                    <Styled.PageContent_Bot>
                      <Styled.PageDetail_Title>
                        <p>Collection Detail</p>
                      </Styled.PageDetail_Title>
                      <Styled.PageDetail_Infor>
                        <Styled.InforLine>
                          <p className="InforLine_Title">Collection ID</p>
                          <p>{editedCollection?.collectionID}</p>
                        </Styled.InforLine>
                        <Styled.InforLine>
                          <p className="InforLine_Title">Collection Name</p>
                          <p>{editedCollection?.collectionName}</p>
                        </Styled.InforLine>
                        <Styled.InforLine>
                          <p className="InforLine_Title">Debut Date</p>
                          <p>{editedCollection?.debutDate}</p>
                        </Styled.InforLine>
                        <Styled.InforLine_Descrip>
                          <p className="InforLine_Title">Description</p>
                          <p>{editedCollection?.description}</p>
                        </Styled.InforLine_Descrip>
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
                        <Button
                          onClick={() => setIsEditing(true)}
                          type="primary"
                          style={{ marginBottom: 16 }}
                          className="MainBtn"
                        >
                          Edit
                        </Button>
                        <Link to="/admin/marketing">
                          <Button style={{ marginLeft: "10px" }}>Back</Button>
                        </Link>
                      </Styled.ActionBtn_Left>
                      <Styled.ActionBtn_Right>
                        <Button
                          className="DeleteBtn"
                          onClick={() => setIsModalVisible(true)}
                        >
                          Delete
                        </Button>
                        <Modal
                          title="Confirm Deletion"
                          visible={isModalVisible}
                          onOk={() => {
                            // Handle the deletion logic here
                            setIsModalVisible(false);
                          }}
                          onCancel={() => setIsModalVisible(false)}
                        >
                          Are you sure you want to delete this promotion?
                        </Modal>
                      </Styled.ActionBtn_Right>
                    </Styled.ActionBtn>
                  </>
                )}
              </>
            ) : (
              <p>No Collection found.</p>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default CollectionDetail;
