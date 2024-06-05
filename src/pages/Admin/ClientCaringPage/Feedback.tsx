import * as Styled from "../ClientCaringPage/Feedback.styled";
import {
  SearchOutlined,
  StarFilled,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ClientCaringMenu from "../../../components/Admin/ClientCaringMenu/ClientCaringMenu";
import { useState } from "react";


const Feedback = () => {
    
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
      <Styled.FeedbackAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ClientCaringMenu />

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
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              <table>
                <tr>
                  <th>No</th>
                  <th>Feedback ID</th>
                  <th>Product Name</th>
                  <th>Customer</th>
                  <th>Description</th>
                  <th className="TextAlign">Star</th>
                  <th className="TextAlign">Reply</th>
                  <th className="TextAlign">Delete</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>#12345123</td>
                  <td>
                    <input
                      type="text"
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>#12345123</td>
                  <td>
                    <input
                      type="text"
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>#12345123</td>
                  <td>
                    <input
                      type="text"
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>#12345123</td>
                  <td>
                    <input
                      type="text"
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>#12345123</td>
                  <td>
                    <input
                      type="text"
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>#12345123</td>
                  <td>
                    <input
                      type="text"
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
              </table>
            </Styled.AdminTable>

            
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.FeedbackAdminArea>
    </>
  );
};

export default Feedback;
