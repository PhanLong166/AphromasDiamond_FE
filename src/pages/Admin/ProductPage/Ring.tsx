import * as Styled from "../ProductPage/Ring.styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import { Dropdown, Space, Table } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";


interface DataType {
  key: React.Key;
  ringID: string;
  ringImg: string;
  ringName: string;
  totalPrice: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Ring ID",
    dataIndex: "ringID",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.ringID - b.ringID,
  },
  {
    title: "Image",
    key: "ringImg",
    className: "TextAlign",
    render: (_, record) => (
      <a href={record.link} target="_blank" rel="noopener noreferrer">
        <img
          src={record.ringImg}
          alt={record.ringName}
          style={{ width: "50px", height: "50px" }}
        />
      </a>
    ),
  },
  {
    title: "Ring Name",
    dataIndex: "ringName",
    showSorterTooltip: { target: "full-header" },
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) =>
      record.ringName.indexOf(value as string) === 0,
    sorter: (a, b) => a.ringName.length - b.ringName.length,
    sortDirections: ["descend"],
  },
  {
    title: "Total Price",
    dataIndex: "totalPrice",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.totalPrice - b.totalPrice,
  },
  {
    title: "Detail",
    key: "detail",
    className: "TextAlign",
    render: (_) => (
      <Space size="middle">
        <EyeOutlined />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    ringID: "12345121",
    ringImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringName: "Double Row ring Chevron Engagement Ring In 14k 1.37 Carat H-VS2 Marquise Cut Diamond",
    totalPrice: 4.08
  },
  {
    key: "2",
    ringID: "12345122",
    ringImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringName: "Double Row ring Chevron Engagement Ring In 14k 1.37 Carat H-VS2 Marquise Cut Diamond",
    totalPrice: 5.08
  },
  {
    key: "3",
    ringID: "12345123",
    ringImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringName: "Double Row ring Chevron Engagement Ring In 14k 1.37 Carat H-VS2 Marquise Cut Diamond",
    totalPrice: 7.08
  },
  {
    key: "4",
    ringID: "12345124",
    ringImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringName: "Double Row ring Chevron Engagement Ring In 14k 1.37 Carat H-VS2 Marquise Cut Diamond",
    totalPrice: 6.08
  },
  {
    key: "5",
    ringID: "12345125",
    ringImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringName: "Double Row ring Chevron Engagement Ring In 14k 1.37 Carat H-VS2 Marquise Cut Diamond",
    totalPrice: 3
  },
  {
    key: "6",
    ringID: "12345126",
    ringImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringName: "Double Row ring Chevron Engagement Ring In 14k 1.37 Carat H-VS2 Marquise Cut Diamond",
    totalPrice: 9.08
  },
  {
    key: "7",
    ringID: "12345127",
    ringImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringName: "Double Row ring Chevron Engagement Ring In 14k 1.37 Carat H-VS2 Marquise Cut Diamond",
    totalPrice: 2.70
  },
  {
    key: "8",
    ringID: "12345128",
    ringImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringName: "Double Row ring Chevron Engagement Ring In 14k 1.37 Carat H-VS2 Marquise Cut Diamond",
    totalPrice: 7.03
  },
  {
    key: "9",
    ringID: "12345129",
    ringImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringName: "Double Row ring Chevron Engagement Ring In 14k 1.37 Carat H-VS2 Marquise Cut Diamond",
    totalPrice: 5.07
  },
  {
    key: "10",
    ringID: "12345130",
    ringImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringName: "Double Row ring Chevron Engagement Ring In 14k 1.37 Carat H-VS2 Marquise Cut Diamond",
    totalPrice: 4.2
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};


const Ring = () => {

  const [searchText, setSearchText] = useState("");

  const onSearch = (value) => {
    console.log("Search:", value);
    // Thực hiện logic tìm kiếm ở đây
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <>
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageContent>
          <Styled.AdPageContent_Head>
              <Styled.SearchArea>
                <SearchOutlined className="searchIcon" />
                <input
                  className="searchInput"
                  type="text"
                  size="large"
                  placeholder="Search here..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </Styled.SearchArea>
              <Link to="">
                <button>
                  <PlusCircleOutlined />
                  Add New Ring
                </button>
              </Link>
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {/* <table>
                <tr>
                  <th>No</th>
                  <th>Ring ID</th>
                  <th>Image</th>
                  <th>Ring Name</th>
                  <th className="TextAlign">Total Price</th>
                  <th className="TextAlign">Detail</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>#12345123</td>
                  <td>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89"
                      alt=""
                    />
                  </td>
                  <td>
                    Double Row ring Chevron Engagement Ring In 14k 1.37 Carat
                    H-VS2 Marquise Cut Diamond
                  </td>
                  <td className="TextAlign">
                    <input type="text" name="ShellPrice" value="$4,080" />
                  </td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>#12345123</td>
                  <td>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89"
                      alt=""
                    />
                  </td>
                  <td>
                    Double Row Diamond Chevron Engagement Ring In 14k 1.37 Carat
                    H-VS2 Marquise Cut Diamond
                  </td>
                  <td className="TextAlign">
                    <input type="text" name="ShellPrice" value="$4,080" />
                  </td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>#12345123</td>
                  <td>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89"
                      alt=""
                    />
                  </td>
                  <td>
                    Double Row Diamond Chevron Engagement Ring In 14k 1.37 Carat
                    H-VS2 Marquise Cut Diamond
                  </td>
                  <td className="TextAlign">
                    <input type="text" name="ShellPrice" value="$4,080" />
                  </td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>#12345123</td>
                  <td>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89"
                      alt=""
                    />
                  </td>
                  <td>
                    Double Row Diamond Chevron Engagement Ring In 14k 1.37 Carat
                    H-VS2 Marquise Cut Diamond
                  </td>
                  <td className="TextAlign">
                    <input type="text" name="ShellPrice" value="$4,080" />
                  </td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>#12345123</td>
                  <td>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89"
                      alt=""
                    />
                  </td>
                  <td>
                    Double Row Diamond Chevron Engagement Ring In 14k 1.37 Carat
                    H-VS2 Marquise Cut Diamond
                  </td>
                  <td className="TextAlign">
                    <input type="text" name="ShellPrice" value="$4,080" />
                  </td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>#12345123</td>
                  <td>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89"
                      alt=""
                    />
                  </td>
                  <td>
                    Double Row Diamond Chevron Engagement Ring In 14k 1.37 Carat
                    H-VS2 Marquise Cut Diamond
                  </td>
                  <td className="TextAlign">
                    <input type="text" name="ShellPrice" value="$4,080" />
                  </td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
              </table> */}

              <Table
                className="table"
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 6 }} // Add pagination here
                onChange={onChange}
                showSorterTooltip={{ target: "sorter-icon" }}
              />
            </Styled.AdminTable>

            
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default Ring;
