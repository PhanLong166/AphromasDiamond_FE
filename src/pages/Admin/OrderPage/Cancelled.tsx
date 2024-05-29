import * as Styled from './Cancelled.styled';
import { Link } from 'react-router-dom';
import { SearchOutlined, FilterOutlined, 
    ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import OrderMenu from '../../../components/Admin/OrderMenu/OrderMenu';
    
    const CancelledOrder = () => {
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
                                    <h2>Cancelled</h2>
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
                                            <th>Order ID</th>
                                            <th>Date</th>
                                            <th>Customer</th>
                                            <th>Total</th>
                                            <th className='TextAlign'>Status</th>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>#12345123</td>
                                            <td>2 Jan 2023</td>
                                            <td>Esther Eden</td>
                                            <td>$701</td>
                                            <td className='TextAlign'>
                                                <button className="pendStatus">Confirmed
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>#12345124</td>
                                            <td>3 Jan 2023</td>
                                            <td>Esther Eden</td>
                                            <td>$701</td>
                                            <td className='TextAlign'>
                                                <button className="pendStatus">Confirmed
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>#12345125</td>
                                            <td>4 Jan 2023</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>$701</td>
                                            <td className='TextAlign'>
                                                <button className="pendStatus">Confirmed
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>#12345126</td>
                                            <td>5 Jan 2023</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>$701</td>
                                            <td className='TextAlign'>
                                                <button className="pendStatus">Confirmed
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>#12345127</td>
                                            <td>6 Jan 2023</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>$701</td>
                                            <td className='TextAlign'>
                                                <button className="pendStatus">Confirmed
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>#12345128</td>
                                            <td>7 Jan 2023</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>$701</td>
                                            <td className='TextAlign'>
                                                <button className="pendStatus">Confirmed
                                                </button>
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

export default CancelledOrder; 