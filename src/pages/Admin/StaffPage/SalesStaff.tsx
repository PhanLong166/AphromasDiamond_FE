import * as Styled from "../StaffPage/SalesStaff.styled";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
  PlusCircleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import SalesStaffMenu from "../../../components/Admin/SalesStaffMenu/StaffMenu";

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

const SalesStaff = () => {
  return (
    <>
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <SalesStaffMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
              <Styled.AdPageContent_HeadTop>
                <h2>Sales Staff</h2>
                <button>
                  <PlusCircleOutlined />
                  Add New Sales Staff
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
                  <th>Staff ID</th>
                  <th>Staff Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th className="TextAlign">Ban</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>nguyenvana@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>nguyenvana@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>nguyenvana@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>nguyenvana@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>nguyenvana@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>nguyenvana@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
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

export default SalesStaff;
