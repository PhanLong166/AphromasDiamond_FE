import * as Styled from '../ProductPage/Jewelry.styled';
import { Link } from 'react-router-dom';
import { SearchOutlined, FilterOutlined, DownOutlined, PlusCircleOutlined,
    ArrowLeftOutlined, ArrowRightOutlined, EyeOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Select } from 'antd';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import ProductMenu from '../../../components/Admin/ProductMenu/ProductMenu';

    const Jewelry = () => {
        const items: MenuProps['items'] = [
            {
              label: <a href="/" style={{  }}>A - Z</a>,
              key: '0',
            },
            {
              label: <a href="/">Z - A</a>,
              key: '1',
            },
            // {
            //   type: 'divider',
            // },
            {
              label: <a href="/">Low to High</a>,
              key: '2',
            },
            {
                label: <a href="/">High to Low</a>,
                key: '3',
            }
          ];

          const handleChange = (value: string) => {
            console.log(`selected ${value}`);
          };

          const shelltype = (
            <Space wrap>
              <Select
                defaultValue="ring"
                className="custom-select"
                style={{ width: 120, background: "#FFF7E8", color: "#102C57" }}
                onChange={handleChange}
                options={[
                  { value: "ring", label: "Ring" },
                  { value: "necklace", label: "Necklace" },
                  { value: "earring", label: "Earring" },
                  { value: "bracelet", label: "Bracelet" },
                  { value: "anklet", label: "Anklet" },
                  { value: "bangle", label: "Bangle" },
                  { value: "choker", label: "Choker" },
                  { value: "pendant", label: "Pendant" },
                ]}
              />
            </Space>
          );

          

            
        return(
            <>
                <Styled.ProductAdminArea>
                        <Sidebar/>
                        
                        <Styled.AdminPage>
                            <ProductMenu/>

                            <Styled.AdPageContent>
                                <Styled.AdPageContent_Head>
                                    <Styled.AdPageContent_HeadTop>
                                        <h2>Jewelry</h2>
                                        <button>
                                            <PlusCircleOutlined />
                                            Add New Jewelry
                                        </button>
                                    </Styled.AdPageContent_HeadTop>
                                    <Styled.AdPageContent_HeadBenefit>
                                        <Styled.SearchArea>
                                            <input className="searchInput" type="text" />
                                            <SearchOutlined />
                                        </Styled.SearchArea>
                                        <button>
                                            <Dropdown menu={{ items }} trigger={['click']}>
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
                                            <th>ID Jewelry</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th className='TextAlign'>Price</th>
                                            <th className='TextAlign'>Type</th>
                                            <th className='TextAlign'>Quantity</th>
                                            <th className='TextAlign'>Detail</th>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'>{shelltype}</td>
                                            <td className='TextAlign'>38</td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'>{shelltype}</td>
                                            <td className='TextAlign'>38</td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'>{shelltype}</td>
                                            <td className='TextAlign'>38</td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'>{shelltype}</td>
                                            <td className='TextAlign'>38</td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'>{shelltype}</td>
                                            <td className='TextAlign'>38</td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'>{shelltype}</td>
                                            <td className='TextAlign'>38</td>
                                            <td className='TextAlign'>
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
    )
};

export default Jewelry; 