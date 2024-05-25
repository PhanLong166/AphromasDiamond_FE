import * as Styled from '../ProductPage/RingShell.styled';
import { Link } from 'react-router-dom';
import { SearchOutlined, FilterOutlined, DownOutlined, PlusCircleOutlined,
    ArrowLeftOutlined, ArrowRightOutlined, EyeOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import ProductMenu from '../../../components/Admin/ProductMenu/ProductMenu';

    const RingShell = () => {
        const items: MenuProps['items'] = [
            {
              label: <a href="/" style={{  }}>Soonest</a>,
              key: '0',
            },
            {
              label: <a href="/">Latest</a>,
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
        return(
            <>
                <Styled.ProductAdminArea>
                        <Sidebar/>
                        
                        <Styled.AdminPage>
                            <ProductMenu/>

                            <Styled.OrderContent>
                                <Styled.OrderContent_Head>
                                    <Styled.OrderContent_HeadTop>
                                        <h2>Ring Shell</h2>
                                        <button>
                                            <PlusCircleOutlined />
                                            Add New Ring Shell
                                        </button>
                                    </Styled.OrderContent_HeadTop>
                                    <Styled.OrderContent_HeadBenefit>
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
                                    </Styled.OrderContent_HeadBenefit>
                                </Styled.OrderContent_Head>

                                <Styled.Pending_Table>
                                    <table>
                                        <tr>
                                            <th>No</th>
                                            <th>ID Diamond</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th className='TextAlign'>Type</th>
                                            <th className='TextAlign'>Width</th>
                                            <th className='TextAlign'>Material</th>
                                            <th className='TextAlign'>Detail</th>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellType" value="Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellWidth" value="2.80mm"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellMaterial" value="14K Yellow Gold"/></td>
                                            <td className='TextAlign'>Edit  |  Delete</td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellType" value="Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellWidth" value="2.80mm"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellMaterial" value="14K Yellow Gold"/></td>
                                            <td className='TextAlign'>Edit  |  Delete</td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellType" value="Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellWidth" value="2.80mm"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellMaterial" value="14K Yellow Gold"/></td>
                                            <td className='TextAlign'>Edit  |  Delete</td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellType" value="Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellWidth" value="2.80mm"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellMaterial" value="14K Yellow Gold"/></td>
                                            <td className='TextAlign'>Edit  |  Delete</td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellType" value="Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellWidth" value="2.80mm"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellMaterial" value="14K Yellow Gold"/></td>
                                            <td className='TextAlign'>Edit  |  Delete</td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>#12345123</td>
                                            <td><img src='https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89' alt=''/></td>
                                            <td><input type="text" name="ShellName" value="Petite Twist Diamond Engagement Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellPrice" value="$4,080"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellType" value="Ring"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellWidth" value="2.80mm"/></td>
                                            <td className='TextAlign'><input type="text" name="ShellMaterial" value="14K Yellow Gold"/></td>
                                            <td className='TextAlign'>Edit  |  Delete</td>
                                        </tr>
                                    </table>
                                </Styled.Pending_Table>
                                
                                <Styled.OrderContent_Foot>
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
                                </Styled.OrderContent_Foot>
                            </Styled.OrderContent>
                        </Styled.AdminPage>
                    </Styled.ProductAdminArea> 
            </>
    )
};

export default RingShell; 