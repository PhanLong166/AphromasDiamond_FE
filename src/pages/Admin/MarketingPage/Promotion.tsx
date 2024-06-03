import * as Styled from './Promotion.styled';
import { Link } from 'react-router-dom';
import { SearchOutlined, FilterOutlined, DownOutlined, PlusCircleOutlined,
    ArrowLeftOutlined, ArrowRightOutlined, DeleteOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';

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
      label: <a href="/">Start Soonest</a>,
      key: '2',
    },
    {
        label: <a href="/">Start Latest</a>,
        key: '3',
    },
    {
        label: <a href="/">End Soonest</a>,
        key: '4',
    },
    {
        label: <a href="/">End Latest</a>,
        key: '5',
    }
  ];
  
    
    const Promotion = () => {
        return(
            <>
                <Styled.ProductAdminArea>
                        <Sidebar/>
                        
                        <Styled.AdminPage>
                            <Styled.TitlePage>
                                    <h1>Marketing Management</h1>
                                    <p>View and manage Promotion</p>
                            </Styled.TitlePage>

                            <Styled.AdPageContent>
                                <Styled.AdPageContent_Head>
                                    <Styled.AdPageContent_HeadTop>
                                        <h2>Promotion List</h2>
                                        <button>
                                            <PlusCircleOutlined />
                                            Add New Promotion
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
                                            <th>Promotion ID</th>
                                            <th>% discount</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th className='TextAlign'>Edit</th>
                                            <th className='TextAlign'>Delete</th>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>#12345123</td>
                                            <td>10%</td>
                                            <td>2 Jan 2023</td>
                                            <td>2 Jan 2024</td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>#12345123</td>
                                            <td>15%</td>
                                            <td>2 Jan 2023</td>
                                            <td>2 Jan 2024</td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>#12345123</td>
                                            <td>10%</td>
                                            <td>2 Jan 2023</td>
                                            <td>2 Jan 2024</td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>#12345123</td>
                                            <td>15%</td>
                                            <td>2 Jan 2023</td>
                                            <td>2 Jan 2024</td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>#12345123</td>
                                            <td>10%</td>
                                            <td>2 Jan 2023</td>
                                            <td>2 Jan 2024</td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>#12345123</td>
                                            <td>30%</td>
                                            <td>2 Jan 2023</td>
                                            <td>2 Jan 2024</td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Save</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
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

export default Promotion; 