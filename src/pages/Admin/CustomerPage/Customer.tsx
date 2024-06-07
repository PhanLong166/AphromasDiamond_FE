import * as Styled from './Customer.styled';
import { SearchOutlined, FilterOutlined, DownOutlined,
    ArrowLeftOutlined, ArrowRightOutlined, EyeOutlined} from '@ant-design/icons';
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
  
    
    const Customer = () => {
        return(
            <>
                <Styled.ProductAdminArea>
                        <Sidebar/>
                        
                        <Styled.AdminPage>
                            <Styled.TitlePage>
                                    <h1>Customer Management</h1>
                                    <p>View and manage Customer</p>
                            </Styled.TitlePage>

                            <Styled.AdPageContent>
                                <Styled.AdPageContent_Head>
                                    <Styled.AdPageContent_HeadTop>
                                        <h2>Customer List</h2>
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
                                            <th>Customer ID</th>
                                            <th>Customer Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th className='TextAlign'>Deltail</th>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>#12345123</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>hthuyntrang@gmail.com</td>
                                            <td>***</td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>#12345123</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>hthuyntrang@gmail.com</td>
                                            <td>***</td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>#12345123</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>hthuyntrang@gmail.com</td>
                                            <td>***</td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>#12345123</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>hthuyntrang@gmail.com</td>
                                            <td>***</td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>#12345123</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>hthuyntrang@gmail.com</td>
                                            <td>***</td>
                                            <td className='TextAlign'>
                                                <EyeOutlined />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>#12345123</td>
                                            <td>Ajmal Abdul Rahiman</td>
                                            <td>hthuyntrang@gmail.com</td>
                                            <td>***</td>
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

export default Customer; 