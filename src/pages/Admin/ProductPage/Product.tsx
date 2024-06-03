import * as Styled from "../ProductPage/Product.styled";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
  PlusCircleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";

const items: MenuProps["items"] = [
  {
    label: (
      <a href="/" style={{}}>
        A - Z
      </a>
    ),
    key: "0",
  },
  {
    label: <a href="/">Z - A</a>,
    key: "1",
  },
  // {
  //   type: 'divider',
  // },
  {
    label: <a href="/">Low to High</a>,
    key: "2",
  },
  {
    label: <a href="/">High to Low</a>,
    key: "3",
  },
];

const Product = () => {
  return (
    <>
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
              <Styled.AdPageContent_HeadTop>
                <h2>Diamond</h2>
                <button>
                  <PlusCircleOutlined />
                  Add New Diamond
                </button>
              </Styled.AdPageContent_HeadTop>
              <Styled.AdPageContent_HeadBenefit>
                <Styled.SearchArea>
                  <input className="searchInput" type="text" />
                  <SearchOutlined />
                </Styled.SearchArea>
                <button>
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Sort by
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </button>

                <button>
                  <FilterOutlined />
                  Filters
                </button>
              </Styled.AdPageContent_HeadBenefit>
            </Styled.AdPageContent_Head>

            <Styled.Pending_Table>
              <table>
                <tr>
                  <th>No</th>
                  <th>Diamond ID</th>
                  <th>Diamond Name</th>
                  <th>Price</th>
                  <th className="TextAlign">Color</th>
                  <th className="TextAlign">Shape</th>
                  <th className="TextAlign">Detail</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>#12345123</td>
                  <td>1.00 Carat H-VS2 Emerald Cut Diamond</td>
                  <td>$4,080</td>
                  <td className="TextAlign">H</td>
                  <td className="TextAlign">Marquise</td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>#12345123</td>
                  <td>1.00 Carat H-VS2 Emerald Cut Diamond</td>
                  <td>$4,080</td>
                  <td className="TextAlign">H</td>
                  <td className="TextAlign">Marquise</td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>#12345123</td>
                  <td>1.00 Carat H-VS2 Emerald Cut Diamond</td>
                  <td>$4,080</td>
                  <td className="TextAlign">H</td>
                  <td className="TextAlign">Marquise</td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>#12345123</td>
                  <td>1.00 Carat H-VS2 Emerald Cut Diamond</td>
                  <td>$4,080</td>
                  <td className="TextAlign">H</td>
                  <td className="TextAlign">Marquise</td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>#12345123</td>
                  <td>1.00 Carat H-VS2 Emerald Cut Diamond</td>
                  <td>$4,080</td>
                  <td className="TextAlign">H</td>
                  <td className="TextAlign">Marquise</td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>#12345123</td>
                  <td>1.00 Carat H-VS2 Emerald Cut Diamond</td>
                  <td>$4,080</td>
                  <td className="TextAlign">H</td>
                  <td className="TextAlign">Marquise</td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
              </table>
            </Styled.Pending_Table>

            <Styled.AdPageContent_Foot>
              <Styled.PageNum>
                <p className="nowPage">1</p>
                <p>of</p>
                <p className="lastPage">5</p>
              </Styled.PageNum>
              <Styled.MovePage>
                <button className="backArrow">
                  <ArrowLeftOutlined />
                </button>
                <button className="nextArrow">
                  <ArrowRightOutlined />
                </button>
              </Styled.MovePage>
            </Styled.AdPageContent_Foot>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default Product;
