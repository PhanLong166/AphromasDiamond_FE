import * as Styled from './Completed.styled';
import { Link } from 'react-router-dom';
import { SearchOutlined, FilterOutlined, EyeOutlined,
    ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import OrderMenu from '../../../components/Admin/OrderMenu/OrderMenu';
    
    const CompletedOrder = () => {
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
                <Styled.OrderAdminArea>
                        <Sidebar/>
                        
                        <Styled.AdminPage>
                            <OrderMenu/>

                            <Styled.OrderContent>
                                <Styled.OrderContent_Head>
                                    <h2>Completed</h2>
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
                                            <th>ID Order</th>
                                            <th>Date</th>
                                            <th>Customer</th>
                                            <th>Delivery Staff</th>
                                            <th>Status</th>
                                            <th className='TextAlign'>Invoice</th>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>#12345123</td>
                                            <td>2 Jan 2023</td>
                                            <td>Esther Eden</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>
                                                <button className="pendStatus">Completed
                                                </button>
                                            </td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>#12345124</td>
                                            <td>3 Jan 2023</td>
                                            <td>Esther Eden</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>
                                                <button className="pendStatus">Completed
                                                </button>
                                            </td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>#12345125</td>
                                            <td>4 Jan 2023</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>
                                                <button className="pendStatus">Completed
                                                </button>
                                            </td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>#12345126</td>
                                            <td>5 Jan 2023</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>
                                                <button className="pendStatus">Completed
                                                </button>
                                            </td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>#12345127</td>
                                            <td>6 Jan 2023</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>
                                                <button className="pendStatus">Completed
                                                </button>
                                            </td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>#12345128</td>
                                            <td>7 Jan 2023</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>
                                                <button className="pendStatus">Completed
                                                </button>
                                            </td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
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
                    </Styled.OrderAdminArea> 
            </>
    )
};

export default CompletedOrder; 