import * as Styled from '../ClientCaringPage/Feedback.styled';
import { Link } from 'react-router-dom';
import { SearchOutlined, FilterOutlined, DownOutlined,
    ArrowLeftOutlined, ArrowRightOutlined, EyeOutlined, 
    StarFilled, StarOutlined, DeleteOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import ClientCaringMenu from '../../../components/Admin/ClientCaringMenu/ClientCaringMenu';

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
  
    
    const Feedback = () => {
        return(
            <>
                <Styled.ProductAdminArea>
                        <Sidebar/>
                        
                        <Styled.AdminPage>
                            <ClientCaringMenu/>

                            <Styled.AdPageContent>
                                <Styled.AdPageContent_Head>
                                    <Styled.AdPageContent_HeadTop>
                                        <h2>Feedback</h2>
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
                                            <th>ID Feedback</th>
                                            <th>Product Name</th>
                                            <th>Customer</th>
                                            <th>Description</th>
                                            <th className='TextAlign'>Star</th>
                                            <th className='TextAlign'>Reply</th>
                                            <th className='TextAlign'>Delete</th>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>#12345123</td>
                                            <td><input type="text" value="1.00 Carat H-VS2 Emerald Cut Diamond" /></td>
                                            <td><input type="text" value="Ajmal Abdul Rahiman"/></td>
                                            <td>
                                                <input type="text" value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!" />
                                            </td>
                                            <td className='TextAlign'>
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarOutlined />
                                            </td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Reply</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>#12345123</td>
                                            <td><input type="text" value="1.00 Carat H-VS2 Emerald Cut Diamond" /></td>
                                            <td><input type="text" value="Ajmal Abdul Rahiman"/></td>
                                            <td>
                                                <input type="text" value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!" />
                                            </td>
                                            <td className='TextAlign'>
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarOutlined />
                                            </td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Reply</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>#12345123</td>
                                            <td><input type="text" value="1.00 Carat H-VS2 Emerald Cut Diamond" /></td>
                                            <td><input type="text" value="Ajmal Abdul Rahiman"/></td>
                                            <td>
                                                <input type="text" value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!" />
                                            </td>
                                            <td className='TextAlign'>
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarOutlined />
                                            </td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Reply</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>#12345123</td>
                                            <td><input type="text" value="1.00 Carat H-VS2 Emerald Cut Diamond" /></td>
                                            <td><input type="text" value="Ajmal Abdul Rahiman"/></td>
                                            <td>
                                                <input type="text" value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!" />
                                            </td>
                                            <td className='TextAlign'>
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarOutlined />
                                            </td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Reply</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>#12345123</td>
                                            <td><input type="text" value="1.00 Carat H-VS2 Emerald Cut Diamond" /></td>
                                            <td><input type="text" value="Ajmal Abdul Rahiman"/></td>
                                            <td>
                                                <input type="text" value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!" />
                                            </td>
                                            <td className='TextAlign'>
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarOutlined />
                                            </td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Reply</button>
                                            </td>
                                            <td className='TextAlign'><DeleteOutlined className='deleBtn'/></td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>#12345123</td>
                                            <td><input type="text" value="1.00 Carat H-VS2 Emerald Cut Diamond" /></td>
                                            <td><input type="text" value="Ajmal Abdul Rahiman"/></td>
                                            <td>
                                                <input type="text" value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!" />
                                            </td>
                                            <td className='TextAlign'>
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarOutlined />
                                            </td>
                                            <td className='TextAlign'>
                                                <button className="confirmBtn">Reply</button>
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

export default Feedback; 